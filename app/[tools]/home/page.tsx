import TickerBand from "@/app/components/ticker-band/ticker-band";
import { QuickStats } from "@/app/components/trading-feed/quick-stats";
import { TopTraders } from "@/app/components/trading-feed/top-traders";
import { TradingFeed } from "@/app/components/trading-feed/trading-feed";
import { TradingFilters } from "@/app/components/trading-feed/trading-filters";

export default function TradingFeedDashboard() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1 container mx-auto px-4 py-6">
                <div className="grid gap-6 mb-2">
                    <TickerBand />
                </div>
                <div className="grid gap-6 lg:grid-cols-4">
                    <div className="lg:col-span-3 space-y-6">
                        <QuickStats />
                        <TradingFilters />
                        <TradingFeed />
                    </div>
                    <div className="space-y-6">
                        <TopTraders />
                    </div>
                </div>
            </main>
        </div>
    )
}
