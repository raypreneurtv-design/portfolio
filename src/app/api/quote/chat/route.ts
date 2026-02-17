import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import type { ChatApiRequest, QuoteData } from "@/types/quote";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are an expert HVAC quote assistant for InsightOperator. Your job is to gather information from homeowners and provide accurate instant estimates.

CONVERSATION RULES:
- Ask ONE question at a time in a friendly, conversational tone
- Keep responses concise (2-3 sentences max per message)
- If the user says "I don't know" to a question, provide a reasonable default and explain why, then move on

INFORMATION TO COLLECT (in this order):
1. Service type: replacement, repair, maintenance, or new installation
2. System type: central AC, heat pump, furnace, mini-split, ductless, or package unit
3. Home size in square feet (if they don't know, ask number of bedrooms to estimate)
4. Current system age (if replacement/repair)
5. Zip code for regional pricing
6. Any specific concerns or requirements

PRICING GUIDELINES (use these as baselines, adjust for region/complexity):
- Central AC replacement: $3,500-$7,500
- Heat pump replacement: $4,500-$8,500
- Furnace replacement: $2,500-$6,000
- Mini-split installation: $3,000-$5,500 per zone
- AC repair: $150-$1,200
- Maintenance/tune-up: $80-$200
- New installation (no existing system): $5,000-$12,000
- Labor typically 30-40% of total cost
- Timeline: repairs 1-3 days, replacements 1-2 days, new installs 2-5 days

WHEN YOU HAVE ALL THE INFO:
Generate a detailed quote. You MUST include the quote as a JSON block at the END of your message using this exact format:

\`\`\`quote_json
{
  "serviceType": "replacement",
  "systemType": "Central AC",
  "homeSize": "2000 sq ft",
  "location": "Dallas, TX",
  "equipmentCost": "$3,800 - $5,200",
  "laborCost": "$1,200 - $1,800",
  "totalRange": "$5,000 - $7,000",
  "timeline": "1-2 days",
  "breakdown": [
    {"item": "AC Unit (3-ton)", "description": "High-efficiency SEER 16+ rated unit", "cost": "$2,800 - $4,000"},
    {"item": "Installation Materials", "description": "Refrigerant, copper lines, mounting", "cost": "$400 - $600"},
    {"item": "Thermostat", "description": "Smart thermostat upgrade included", "cost": "$200 - $300"},
    {"item": "Permits & Inspection", "description": "Local building permits", "cost": "$150 - $250"},
    {"item": "Labor", "description": "Professional installation by certified techs", "cost": "$1,200 - $1,800"}
  ]
}
\`\`\`

Before the JSON, provide a friendly summary of the quote to the customer. After the JSON, add a brief note encouraging them to save the detailed PDF.`;

function extractQuoteJson(text: string): QuoteData | undefined {
  const match = text.match(/```quote_json\s*([\s\S]*?)\s*```/);
  if (!match) return undefined;
  try {
    return JSON.parse(match[1]) as QuoteData;
  } catch {
    return undefined;
  }
}

function cleanMessageForDisplay(text: string): string {
  return text.replace(/```quote_json[\s\S]*?```/g, "").trim();
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ChatApiRequest;

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: "ANTHROPIC_API_KEY is not configured" },
        { status: 500 }
      );
    }

    const response = await client.messages.create({
      model: "claude-sonnet-4-5-20250514",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: body.messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    });

    const rawText =
      response.content[0].type === "text" ? response.content[0].text : "";
    const quote = extractQuoteJson(rawText);
    const message = cleanMessageForDisplay(rawText);

    return NextResponse.json({ message, quote });
  } catch (error: unknown) {
    console.error("Chat API error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to generate response: ${errorMessage}` },
      { status: 500 }
    );
  }
}
