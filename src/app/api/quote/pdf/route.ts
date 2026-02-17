import { NextRequest, NextResponse } from "next/server";
import { jsPDF } from "jspdf";
import type { PdfRequest } from "@/types/quote";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as PdfRequest;
    const { quote, email } = body;

    // Log the email capture (replace with email service later)
    console.log(`[Quote PDF] Email captured: ${email}`);
    console.log(`[Quote PDF] Quote data:`, JSON.stringify(quote, null, 2));

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    let y = 20;

    // Header
    doc.setFillColor(0, 0, 0);
    doc.rect(0, 0, pageWidth, 45, "F");
    doc.setTextColor(0, 168, 255);
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text("InsightOperator", 20, 28);
    doc.setFontSize(10);
    doc.setTextColor(200, 200, 200);
    doc.text("AI-Powered HVAC Quote Estimate", 20, 38);

    y = 60;

    // Quote title
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("Your HVAC Quote Estimate", 20, y);
    y += 12;

    // Date
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100, 100, 100);
    doc.text(`Generated: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`, 20, y);
    y += 15;

    // Project details
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    doc.text("Project Details", 20, y);
    y += 8;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const details = [
      ["Service Type", quote.serviceType],
      ["System Type", quote.systemType],
      ["Home Size", quote.homeSize],
      ["Location", quote.location],
      ["Estimated Timeline", quote.timeline],
    ];

    for (const [label, value] of details) {
      doc.setTextColor(100, 100, 100);
      doc.text(`${label}:`, 20, y);
      doc.setTextColor(0, 0, 0);
      doc.text(value || "N/A", 80, y);
      y += 7;
    }

    y += 10;

    // Breakdown table
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.text("Cost Breakdown", 20, y);
    y += 10;

    // Table header
    doc.setFillColor(240, 240, 240);
    doc.rect(20, y - 5, pageWidth - 40, 8, "F");
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(50, 50, 50);
    doc.text("Item", 22, y);
    doc.text("Description", 75, y);
    doc.text("Estimated Cost", 150, y);
    y += 10;

    // Table rows
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    if (quote.breakdown) {
      for (const item of quote.breakdown) {
        doc.setTextColor(0, 0, 0);
        doc.text(item.item, 22, y);
        doc.setTextColor(100, 100, 100);
        doc.text(item.description.substring(0, 45), 75, y);
        doc.setTextColor(0, 0, 0);
        doc.text(item.cost, 150, y);
        y += 8;
      }
    }

    // Total
    y += 5;
    doc.setDrawColor(0, 168, 255);
    doc.setLineWidth(0.5);
    doc.line(20, y, pageWidth - 20, y);
    y += 10;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 168, 255);
    doc.text(`Total Estimate: ${quote.totalRange}`, 20, y);

    y += 20;

    // Disclaimer
    doc.setFontSize(8);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(150, 150, 150);
    const disclaimer =
      "This is an AI-generated estimate for planning purposes only. Final pricing may vary based on on-site inspection, " +
      "equipment availability, and local code requirements. Contact us for a detailed in-person assessment.";
    const lines = doc.splitTextToSize(disclaimer, pageWidth - 40);
    doc.text(lines, 20, y);

    // Footer
    const footerY = doc.internal.pageSize.getHeight() - 15;
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text("Powered by InsightOperator | insightoperator.com", 20, footerY);
    doc.text(`Prepared for: ${email}`, pageWidth - 20 - doc.getTextWidth(`Prepared for: ${email}`), footerY);

    const pdfBuffer = Buffer.from(doc.output("arraybuffer"));

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="HVAC-Quote-InsightOperator.pdf"',
      },
    });
  } catch (error: unknown) {
    console.error("PDF generation error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to generate PDF: ${errorMessage}` },
      { status: 500 }
    );
  }
}
