import TickerBand from "@/app/components/ticker-band/ticker-band";
import Dashboard from "@/app/components/trading-desk/dashboard";

export default function Home() {
  return (<div>
    <div className="grid gap-6 mb-2">
      <TickerBand />
    </div>
    <Dashboard />
  </div>)
}
