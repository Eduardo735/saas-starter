import TickerBand from "@/components/ticker-band/ticker-band";
import Dashboard from "@/components/trading-desk/dashboard";

export default function Home() {
  return <div>

    <div className="grid gap-6 mb-2">
      <TickerBand />
    </div>
    <Dashboard />
  </div>
}
