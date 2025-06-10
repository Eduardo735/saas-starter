import TickerBand from "@/components/ticker-band/ticker-band";
import { QuickStats } from "@/components/trading-feed/quick-stats";
import { TopTraders } from "@/components/trading-feed/top-traders";
import { TradingFeed } from "@/components/trading-feed/trading-feed";
import { TradingFeedHeader } from "@/components/trading-feed/trading-feed-header";
import { TradingFilters } from "@/components/trading-feed/trading-filters";

export default function TradingFeedDashboard() {
    return (
        <div className="flex min-h-screen flex-col">
            <TradingFeedHeader />
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
