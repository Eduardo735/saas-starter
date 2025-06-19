import { setupsDataExport } from "../../data/tradings-setups";
import { TradingCard } from "./trading-card";

export default function TradingDashboard() {
    return (
        <div className="min-h-screen w-full bg-gray-50">
            {setupsDataExport.map((object) => (
                // <TradingCard setup={object} />
                <TradingCard key={object.ticker} setup={object} />
            ))}

        </div>
    )
}
