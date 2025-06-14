import { TradingSetup } from "../types/trading"

export const setupsDataExport: TradingSetup[] = [
    {
        ticker: "TSLA",
        companyName: "Tesla Inc.",
        direction: "LONG",
        entry: 323.74,
        stopLoss: 311.66,
        breakEven: {
            price: 331,
            instruction: "Mover stop a punto de entrada ($323.74) si alcanza $331",
        },
        targets: [341, 349, 384, 490],
        riskManagement: {
            maxRisk: "-2%",
            positionSize: "2 acciones por cada $1,000 en cuenta",
        },
        optionsSetup: {
            type: "CALL",
            expiration: "17 OCTUBRE",
            strike: 330,
            riskPerContract: 550,
            potentialMin: 1200,
            potentialMax: 13000,
            notes: "Vender si llega a stop o target. Si alcanza BE, sostener contrato solo si está en positivo.",
        },
    },
    {
        ticker: "SPY",
        companyName: "SPDR S&P 500 ETF",
        direction: "LONG",
        entry: 599.71,
        stopLoss: 596.84,
        breakEven: {
            price: 601.18,
            instruction: "Mover stop al punto de entrada si alcanza 601.18"
        },
        targets: [603, 605, 608, 613, 630],
        riskManagement: {
            maxRisk: "-1%",
            positionSize: "Máximo 3 acciones por cada $1000 en cuenta"
        },
        optionsSetup: {
            type: "CALL",
            expiration: "2025-09-30",
            strike: 605,
            riskPerContract: 280,
            potentialMin: 300,
            potentialMax: 2000,
            notes: "Mantener el contrato si pasa BE y sigue en positivo"
        }
    },
    {
        ticker: "BTCUSD",
        companyName: "Bitcoin",
        direction: "LONG",
        entry: 105981,
        stopLoss: 101765,
        breakEven: {
            price: 107000,
            instruction: "Mover stop al punto de entrada al alcanzar 107K"
        },
        targets: [109000, 110000, 112000, 115000, 118000],
        riskManagement: {
            maxRisk: "-1.6%",
            positionSize: "Exposición del 40% del capital real. Ej: $400 spot o $200 a 2X si se tiene $1000 de capital"
        }
    },

    {
        ticker: "PLTR",
        companyName: "Palantir Technologies",
        direction: "LONG",
        entry: 137.66,
        stopLoss: 117.51,
        breakEven: {
            price: 148,
            instruction: "Mover stop al punto de entrada al alcanzar 148"
        },
        targets: [162, 187, 221],
        riskManagement: {
            maxRisk: "-2%",
            positionSize: "Comprar 1 acción por cada $1000 de capital real"
        },
        optionsSetup: {
            type: "CALL",
            expiration: "2025-11-21",
            strike: 145,
            riskPerContract: 950,
            potentialMin: 1600,
            potentialMax: 6400,
            notes: "Comprar el contrato al alcanzar el precio de entrada. Mantener solo si se encuentra en positivo tras alcanzar BE."
        }
    },
    {
        ticker: "MSFT",
        companyName: "Microsoft Corporation",
        direction: "LONG",
        entry: 478.17,
        stopLoss: 457.82,
        breakEven: {
            price: 492,
            instruction: "Mover stop al punto de entrada al alcanzar 492"
        },
        targets: [503, 545, 591],
        riskManagement: {
            maxRisk: "-2%",
            positionSize: "Comprar 1 acción por cada $1000 de capital real"
        },
        optionsSetup: {
            type: "CALL",
            expiration: "2025-12-19",
            strike: 500,
            riskPerContract: 850,
            potentialMin: 1400,
            potentialMax: 8200,
            notes: "Comprar el contrato al alcanzar el precio de entrada. Mantener solo si se encuentra en positivo tras alcanzar BE."
        }
    }
]
