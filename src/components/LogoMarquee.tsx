'use client';

// Honest "built on" row: the stack Insight Operator runs on, not fabricated clients.
// Swap in real client names/logos here once there are some.
const items = ['Retell AI', 'n8n', 'Twilio', 'Google Calendar', 'cal.com', 'Anthropic', 'OpenAI', 'Vercel'];

export default function LogoMarquee() {
  const row = [...items, ...items];
  return (
    <div className="io-marquee" aria-label="Built on">
      <div className="io-marquee-track">
        {row.map((label, i) => (
          <span key={i} className="io-marquee-item">{label}</span>
        ))}
      </div>
    </div>
  );
}
