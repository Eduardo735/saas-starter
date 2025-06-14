import PublicNavbar from '@/app/components/public-navbar/public-navbar';
import { getStripePrices, getStripeProducts } from '@/app/lib/payments/stripe';
import { PricingCard } from './pricing-card';
//
// Prices are fresh for one hour max
export const revalidate = 3600;

export default async function PricingPage() {
  const [prices, products] = await Promise.all([
    getStripePrices(),
    getStripeProducts(),
  ]);

  const basePlan = products.find((product) => product.name === 'Base');
  const plusPlan = products.find((product) => product.name === 'Plus');

  const basePrice = prices.find((price) => price.productId === basePlan?.id);
  const plusPrice = prices.find((price) => price.productId === plusPlan?.id);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <PublicNavbar />
      <div className="grid md:grid-cols-2 gap-8 max-w-xl mx-auto">
        <PricingCard
          name={basePlan?.name || 'Base'}
          price={basePrice?.unitAmount || 800}
          interval={basePrice?.interval || 'month'}
          trialDays={basePrice?.trialPeriodDays || 7}
          features={[
            'Reportes',
            'Oportunidades de trading setups',
            'Soporte',
            'Stock Market, Futuros, Spot, Options',
          ]}
          priceId={basePrice?.id}
        />
        <PricingCard
          name={plusPlan?.name || 'Plus'}
          price={plusPrice?.unitAmount || 1200}
          interval={plusPrice?.interval || 'month'}
          trialDays={plusPrice?.trialPeriodDays || 7}
          features={[
            'Reportes',
            'Oportunidades de trading setups',
            'Stock Market, Futuros, Spot, Options',
            'Soporte',
            'Academia',
            'Mentoria 1 a 1',
          ]}
          priceId={plusPrice?.id}
        />
      </div>
    </main>
  );
}

