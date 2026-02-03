import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/forms/QuoteForm';

export const metadata: Metadata = {
  title: 'Get Your Free Quote | InsightOperator',
  description: 'Get a customized quote for AI-powered lead generation tools. Instant quotes, AI receptionist, and smart chat systems for home service businesses.',
};

export default function QuotePage() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      <section className="min-h-screen pt-32 pb-20 relative starry-night">
        {/* Background effects */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00a8ff] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00ff87] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00a8ff]/20 text-[#00a8ff] text-xs font-bold tracking-wide mb-6">
              FREE QUOTE
            </span>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
              Get Your <span className="font-bold">Custom Quote</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Tell us about your business and we'll create a customized solution to help you capture more leads.
            </p>
          </div>

          {/* Form card */}
          <div id="quote-form" className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
            <QuoteForm />
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/40 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00ff87]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Your data is secure</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00ff87]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00ff87]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>No obligation</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
