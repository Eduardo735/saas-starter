import { checkoutAction } from '@/app/lib/payments/actions';
import { getStripePrices, getStripeProducts } from '@/app/lib/payments/stripe';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { SubmitButton } from './submit-button';

// Prices are fresh for one hour max
export const revalidate = 3600;

export default async function PricingDetailCard() {
    const [prices, products] = await Promise.all([
        getStripePrices(),
        getStripeProducts(),
    ]);

    // // Add custom properties on the fly
    // const customProps = {
    //     Free: { disabled: true, customText: 'Plan actual' },
    //     Base: { disabled: false, customText: 'Mejor opción' },
    //     Plus: { disabled: true, customText: 'Próximamente' },
    // };
    // Add a custom property to each product
    type ProductWithCustom = typeof products[number] & {
        disabled?: boolean;
        buttonText?: string;
    };

    const productsWithCustom: ProductWithCustom[] = products.map((product) => {
        if (product.name === 'Free') {
            return { ...product, disabled: false, buttonText: 'Solo inicia session' };
        }
        if (product.name === 'Base') {
            return { ...product, disabled: false, buttonText: 'Comenzar ahora' };
        }
        if (product.name === 'Plus') {
            return { ...product, disabled: true, buttonText: 'Próximamente' };
        }
        return { ...product, disabled: false, buttonText: '' };
    });

    const freePlan = productsWithCustom.find((product) => product.name === 'Free');
    const basePlan = productsWithCustom.find((product) => product.name === 'Base');
    const plusPlan = productsWithCustom.find((product) => product.name === 'Plus');

    const freePrice = prices.find((price) => price.productId === freePlan?.id);
    const basePrice = prices.find((price) => price.productId === basePlan?.id);
    const plusPrice = prices.find((price) => price.productId === plusPlan?.id);

    return (

        <div className="grid md:grid-cols-2 gap-8 max-w-xl mx-auto">
            <PricingCard
                name={freePlan?.name || 'Free'}
                price={0}
                interval={freePrice?.interval || 'month'}
                trialDays={freePrice?.trialPeriodDays || 0}
                features={[
                    'Social Feed',
                    'Comunidad Free'
                ]}
                priceId={freePrice?.id}
                disabled={freePlan?.disabled}
                button={freePlan?.buttonText}
            />
            <PricingCard
                name={basePlan?.name || 'Base'}
                price={basePrice?.unitAmount || 600}
                interval={basePrice?.interval || 'month'}
                trialDays={basePrice?.trialPeriodDays || 7}
                features={[
                    'Social Feed',
                    'Reportes',
                    'Señales de oportunidades en el mercado',
                    'Stock Market, Futuros, Spot, Options',
                    'Soporte',
                    'Comunidad Pro'
                ]}
                priceId={basePrice?.id}
                disabled={basePlan?.disabled}
                button={basePlan?.buttonText}
            />
            <PricingCard
                name={plusPlan?.name || 'Plus'}
                price={plusPrice?.unitAmount || 1200}
                interval={plusPrice?.interval || 'month'}
                trialDays={plusPrice?.trialPeriodDays || 7}
                features={[
                    'Social Feed',
                    'Reportes',
                    'Señales de oportunidades en el mercado',
                    'Stock Market, Futuros, Spot, Options',
                    'Academia',
                    'Soporte',
                    'Comunidad Pro',
                ]}
                priceId={plusPrice?.id}
                disabled={plusPlan?.disabled}
                button={plusPlan?.buttonText}
            />
        </div>
    );
}

export function PricingCard({
    name,
    price,
    interval,
    trialDays,
    features,
    priceId,
    button,
    disabled
}: {
    name: string;
    price: number;
    interval: string;
    trialDays: number;
    features: string[];
    priceId?: string;
    button?: string;
    disabled?: boolean;
}) {
    return (
        <div className="pt-6 px-8 pb-3 border solid rounded-md">
            <h2 className="text-2xl font-medium text-gray-900 mb-2">{name}</h2>
            <p className="text-sm text-gray-600 mb-4">
                with {trialDays} day free trial
            </p>
            <p className="text-4xl font-medium text-gray-900 mb-6">
                ${price / 100}{' '}
                <span className="text-xl font-normal text-gray-600">
                    USD per user / {interval}
                </span>
            </p>
            <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                    </li>
                ))}
            </ul>
            <form action={checkoutAction}>
                <input type="hidden" name="priceId" value={priceId} />
                {name === 'Free' ? <Link href='/home'>
                    <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 border solid">
                        Inicia sesión
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button></Link> : <SubmitButton buttonText={button} disabled={disabled} />}


            </form>
        </div>
    );
}
