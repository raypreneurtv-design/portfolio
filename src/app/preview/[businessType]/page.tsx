import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { businessTypes, getBusinessTypeById } from '@/lib/constants/businessTypes';

interface PageProps {
  params: Promise<{ businessType: string }>;
}

export async function generateStaticParams() {
  return businessTypes.map((bt) => ({
    businessType: bt.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { businessType } = await params;
  const business = getBusinessTypeById(businessType);

  if (!business) {
    return {
      title: 'Business Type Not Found | InsightOperator',
    };
  }

  return {
    title: `AI Lead Generation for ${business.name} Businesses | InsightOperator`,
    description: `Capture more ${business.name.toLowerCase()} leads with AI-powered instant quotes, 24/7 receptionist, and smart chat. Built specifically for ${business.name.toLowerCase()} businesses.`,
    openGraph: {
      title: `AI Lead Generation for ${business.name} Businesses`,
      description: `Turn website visitors into booked ${business.name.toLowerCase()} jobs with AI-powered lead capture tools.`,
    },
  };
}

export default async function BusinessPreviewPage({ params }: PageProps) {
  const { businessType } = await params;
  const business = getBusinessTypeById(businessType);

  if (!business) {
    notFound();
  }

  return (
    <main className="overflow-x-hidden">
      <Header />

      <section className="min-h-screen pt-32 pb-20 relative starry-night">
        {/* Background effects */}
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] opacity-[0.1] blur-[150px] rounded-full pointer-events-none"
          style={{ backgroundColor: business.color }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="primary" size="lg" className="mb-6">
              {business.icon} {business.name.toUpperCase()}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
              AI Lead Generation for{' '}
              <span className="font-bold" style={{ color: business.color }}>
                {business.name} Businesses
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              {business.description}. Turn more website visitors into booked jobs with AI-powered tools built for your industry.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { label: 'Avg. Ticket Size', value: business.avgTicketSize },
              { label: 'Lead Increase', value: '3x' },
              { label: 'Response Time', value: '<30s' },
              { label: 'Available', value: '24/7' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <span className="text-2xl md:text-3xl font-bold text-white block mb-1">
                  {stat.value}
                </span>
                <span className="text-white/50 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Preview */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Website preview */}
            <div className="bg-[#1a1a2e] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0d0d1a] border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/10 rounded-lg px-4 py-1.5 text-center">
                    <span className="text-white/50 text-sm">www.your{business.id}company.com</span>
                  </div>
                </div>
              </div>

              <div className="p-6 min-h-[400px]" style={{ backgroundColor: business.color + '10' }}>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{business.icon}</span>
                    <span className="text-white font-bold">Your {business.name} Company</span>
                  </div>
                  <button
                    className="px-4 py-2 rounded-lg text-white text-sm font-semibold"
                    style={{ backgroundColor: business.color }}
                  >
                    Get Quote
                  </button>
                </div>

                <div className="text-center py-8">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Professional {business.name} Services
                  </h2>
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {business.commonServices.map((service) => (
                      <span
                        key={service}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{ backgroundColor: business.color + '30', color: business.color }}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  <button
                    className="px-8 py-4 rounded-xl text-white font-bold text-lg"
                    style={{ backgroundColor: business.color }}
                  >
                    Get Instant Quote
                  </button>
                </div>

                {/* Chat widget preview */}
                <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full shadow-lg flex items-center justify-center"
                  style={{ backgroundColor: business.color }}>
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Features for this business */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Built for {business.name} Businesses
              </h3>

              {[
                {
                  title: 'Instant Quote System',
                  description: `Customers get instant quotes for ${business.commonServices.slice(0, 2).join(', ').toLowerCase()}, and more—24/7.`,
                  icon: '🧮',
                },
                {
                  title: 'AI Receptionist',
                  description: `Never miss a call. AI handles inquiries about your ${business.name.toLowerCase()} services around the clock.`,
                  icon: '📞',
                },
                {
                  title: 'Chat Widget',
                  description: `Engage visitors instantly with AI that knows ${business.name.toLowerCase()} services inside and out.`,
                  icon: '💬',
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: business.color + '20' }}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{feature.title}</h4>
                    <p className="text-white/60 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}

              <Link href="/quote" className="block">
                <Button
                  variant="cta"
                  size="lg"
                  className="w-full"
                >
                  Get This For Your {business.name} Business
                </Button>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div
            className="rounded-3xl p-8 md:p-12 text-center"
            style={{
              background: `linear-gradient(135deg, ${business.color}20 0%, rgba(0,0,0,0.5) 100%)`,
              border: `1px solid ${business.color}40`,
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Grow Your {business.name} Business?
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Join other {business.name.toLowerCase()} companies using InsightOperator to capture more leads and book more jobs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/quote">
                <Button variant="cta" size="lg">
                  Get Your Free Quote
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="secondary" size="lg">
                  Try AI Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
