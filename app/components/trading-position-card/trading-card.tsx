import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { AlertTriangle, BarChart3, Calendar, DollarSign, Target, TrendingDown, TrendingUp } from "lucide-react"
import type { TradingSetup } from "../../types/trading"
import { Badge } from "../ui/badge"
import { Separator } from "../ui/separator"

interface TradingCardProps {
    setup: TradingSetup
}

export function TradingCard({ setup }: TradingCardProps) {
    const isLong = setup.direction === "LONG"
    const directionColor = isLong ? "green" : "red"
    const DirectionIcon = isLong ? TrendingUp : TrendingDown

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold">{setup.ticker} Trading Setup</h1>
                <p className="text-muted-foreground">
                    {setup.companyName} - Análisis de entrada {setup.direction}
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Stock/CFD Card */}
                <Card className={`border-${directionColor}-200 bg-${directionColor}-50/50`}>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="flex items-center gap-2">
                                <DirectionIcon className={`h-5 w-5 text-${directionColor}-600`} />
                                {setup.direction} Normal
                            </CardTitle>
                            <Badge
                                variant="outline"
                                className={`bg-${directionColor}-100 text-${directionColor}-700 border-${directionColor}-300`}
                            >
                                Acciones/CFDs
                            </Badge>
                        </div>
                        <CardDescription>Entrada en {setup.direction.toLowerCase()} usando broker de CFDs</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">Entrada</p>
                                <p className={`text-lg font-bold text-${directionColor}-600`}>${setup.entry}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">Stop Loss</p>
                                <p className="text-lg font-bold text-red-600">${setup.stopLoss}</p>
                            </div>
                        </div>

                        {setup.breakEven && (
                            <>
                                <Separator />
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <AlertTriangle className="h-4 w-4 text-amber-500" />
                                        <p className="text-sm font-medium">Break Even</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{setup.breakEven.instruction}</p>
                                </div>
                            </>
                        )}

                        <Separator />

                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Target className="h-4 w-4 text-blue-500" />
                                <p className="text-sm font-medium">Targets</p>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                {setup.targets.map((target, index) => (
                                    <Badge key={index} variant="secondary">
                                        ${target}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <Separator />

                        <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                            <div className="flex items-center gap-2 mb-1">
                                <BarChart3 className="h-4 w-4 text-amber-600" />
                                <p className="text-sm font-medium text-amber-800">Gestión de Riesgo</p>
                            </div>
                            <p className="text-xs text-amber-700">
                                {setup.riskManagement.maxRisk} máximo | {setup.riskManagement.positionSize}
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Options Card */}
                {setup.optionsSetup && (
                    <Card className="border-blue-200 bg-blue-50/50">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className="flex items-center gap-2">
                                    <DollarSign className="h-5 w-5 text-blue-600" />
                                    Opciones
                                </CardTitle>
                                <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-300">
                                    {setup.optionsSetup.type}
                                </Badge>
                            </div>
                            <CardDescription>Mismas instrucciones de entrada y gestión</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="bg-blue-100 p-3 rounded-lg border border-blue-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <Calendar className="h-4 w-4 text-blue-600" />
                                    <p className="text-sm font-medium text-blue-800">Contrato</p>
                                </div>
                                <p className="text-sm text-blue-700">
                                    <strong>BUY {setup.optionsSetup.type}</strong> - {setup.optionsSetup.expiration}
                                </p>
                                <p className="text-lg font-bold text-blue-800">STRIKE ${setup.optionsSetup.strike}</p>
                            </div>

                            <Separator />

                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-muted-foreground">Riesgo (Stop)</span>
                                    <span className="text-lg font-bold text-red-600">-${setup.optionsSetup.riskPerContract}</span>
                                </div>
                                <div className="text-xs text-muted-foreground">por contrato</div>
                            </div>

                            <Separator />

                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Target className="h-4 w-4 text-green-500" />
                                    <p className="text-sm font-medium">Potencial</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-muted-foreground">Mínimo</span>
                                        <span className="text-lg font-bold text-green-600">
                                            +${setup.optionsSetup.potentialMin.toLocaleString()}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-muted-foreground">Máximo</span>
                                        <span className="text-lg font-bold text-green-600">
                                            +${setup.optionsSetup.potentialMax.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-xs text-muted-foreground">aproximadamente por contrato</div>
                            </div>

                            {setup.optionsSetup.notes && (
                                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                                    <p className="text-xs text-green-700">
                                        <strong>Nota:</strong> {setup.optionsSetup.notes}
                                    </p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                )}
            </div>

            {/* Summary Card */}
            <Card className="border-gray-200">
                <CardHeader>
                    <CardTitle className="text-center">Resumen de la Estrategia</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-muted-foreground">Ticker</p>
                            <p className="text-xl font-bold">{setup.ticker}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-muted-foreground">Dirección</p>
                            <Badge className={`bg-${directionColor}-100 text-${directionColor}-700 border-${directionColor}-300`}>
                                {setup.direction}
                            </Badge>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-muted-foreground">Entrada</p>
                            <p className="text-xl font-bold">${setup.entry}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
