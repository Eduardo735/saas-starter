// import TickerBand from "@/components/ticker-band"

import TickerBand from "./ticker-band";

export default function Band() {
    return (
        <main className="min-h-screen p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <TickerBand />
            </div>
        </main>
    )
}
