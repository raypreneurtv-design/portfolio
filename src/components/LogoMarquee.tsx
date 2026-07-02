'use client';

import type { SyntheticEvent } from 'react';

// "Runs on" — the stack Insight Operator is built with.
// Each logo tries: local /public/logos/<slug>.svg  ->  Simple Icons CDN  ->  plain text.
// To use your own/real logos, drop monochrome SVGs in /public/logos (e.g. openai.svg, twilio.svg, retell.svg).
const items: { name: string; slug: string }[] = [
  { name: 'Ollama', slug: 'ollama' },
  { name: 'Llama', slug: 'meta' },
  { name: 'Mistral', slug: 'mistralai' },
  { name: 'Docker', slug: 'docker' },
  { name: 'n8n', slug: 'n8n' },
  { name: 'Anthropic', slug: 'anthropic' },
  { name: 'OpenAI', slug: 'openai' },
  { name: 'Twilio', slug: 'twilio' },
];

function handleError(e: SyntheticEvent<HTMLImageElement>, slug: string) {
  const img = e.currentTarget;
  if (img.dataset.stage !== 'cdn') {
    // local file missing -> try the CDN
    img.dataset.stage = 'cdn';
    img.src = `https://cdn.simpleicons.org/${slug}/a1a1aa`;
  } else {
    // CDN missing too -> fall back to the text label
    img.style.display = 'none';
    const sib = img.nextElementSibling as HTMLElement | null;
    if (sib) sib.style.display = 'inline';
  }
}

export default function LogoMarquee() {
  const row = [...items, ...items];
  return (
    <div className="io-marquee" aria-label="Built on">
      <div className="io-marquee-track">
        {row.map((item, i) => (
          <span key={i} className="io-marquee-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/logos/${item.slug}.svg`}
              alt={item.name}
              className="io-marquee-logo"
              loading="lazy"
              onError={(e) => handleError(e, item.slug)}
            />
            <span style={{ display: 'none' }}>{item.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
