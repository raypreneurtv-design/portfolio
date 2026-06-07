'use client';

// "Runs on" — the stack Insight Operator is built with. Monochrome logos via the Simple Icons CDN.
// To use a real/local logo (e.g. Retell, which has no Simple Icon), drop an SVG in /public/logos
// and set its src to `/logos/<name>.svg`. Missing CDN logos hide gracefully (onError).
const items: { name: string; slug?: string }[] = [
  { name: 'Retell AI' }, // no Simple Icon — renders as text wordmark
  { name: 'n8n', slug: 'n8n' },
  { name: 'Twilio', slug: 'twilio' },
  { name: 'Google Calendar', slug: 'googlecalendar' },
  { name: 'cal.com', slug: 'caldotcom' },
  { name: 'Anthropic', slug: 'anthropic' },
  { name: 'OpenAI', slug: 'openai' },
  { name: 'Vercel', slug: 'vercel' },
];

export default function LogoMarquee() {
  const row = [...items, ...items];
  return (
    <div className="io-marquee" aria-label="Built on">
      <div className="io-marquee-track">
        {row.map((item, i) => (
          <span key={i} className="io-marquee-item">
            {item.slug ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`https://cdn.simpleicons.org/${item.slug}/a1a1aa`}
                alt={item.name}
                className="io-marquee-logo"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
            ) : (
              item.name
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
