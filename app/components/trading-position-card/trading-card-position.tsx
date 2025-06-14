import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { AlertTriangle, BarChart3, Calendar, DollarSign, Target, TrendingUp } from "lucide-react"
import { Badge } from "../ui/badge"
import { Separator } from "../ui/separator"

export default function TradingPositionCard() {
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold">TSLA Trading Setup</h1>
                <p className="text-muted-foreground">Tesla Inc. - Análisis de entrada Long</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Long Normal Card */}
                <Card className="border-green-200 bg-green-50/50">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="flex items-center gap-2">
                                <TrendingUp className="h-5 w-5 text-green-600" />
                                Long Normal
                            </CardTitle>
                            <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300">
                                Acciones
                            </Badge>
                        </div>
                        <CardDescription>Entrada en long usando broker de CFDs o Quantfury</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">Entrada</p>
                                <p className="text-lg font-bold text-green-600">$323.74</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">Stop Loss</p>
                                <p className="text-lg font-bold text-red-600">$311.66</p>
                            </div>
                        </div>
                        <Separator />
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <AlertTriangle className="h-4 w-4 text-amber-500" />
                                <p className="text-sm font-medium">Break Even</p>
                            </div>
                            <p className="text-sm text-muted-foreground">Mover stop a punto de entrada ($323.74) si alcanza $331</p>
                        </div>
                        <Separator />
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Target className="h-4 w-4 text-blue-500" />
                                <p className="text-sm font-medium">Targets</p>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <Badge variant="secondary">$341</Badge>
                                <Badge variant="secondary">$349</Badge>
                                <Badge variant="secondary">$384</Badge>
                                <Badge variant="secondary">$490</Badge>
                            </div>
                        </div>

                        <Separator />

                        <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                            <div className="flex items-center gap-2 mb-1">
                                <BarChart3 className="h-4 w-4 text-amber-600" />
                                <p className="text-sm font-medium text-amber-800">Gestión de Riesgo</p>
                            </div>
                            <p className="text-xs text-amber-700">-2% máximo | 2 acciones por cada $1,000 en cuenta</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Options Card */}
                <Card className="border-blue-200 bg-blue-50/50">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="flex items-center gap-2">
                                <DollarSign className="h-5 w-5 text-blue-600" />
                                Opciones
                            </CardTitle>
                            <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-300">
                                CALL
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
                                <strong>BUY CALL</strong> - 17 OCTUBRE
                            </p>
                            <p className="text-lg font-bold text-blue-800">STRIKE $330</p>
                        </div>

                        <Separator />

                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-muted-foreground">Riesgo (Stop)</span>
                                <span className="text-lg font-bold text-red-600">-$550</span>
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
                                    <span className="text-lg font-bold text-green-600">+$1,200</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">Máximo</span>
                                    <span className="text-lg font-bold text-green-600">+$13,000</span>
                                </div>
                            </div>
                            <div className="text-xs text-muted-foreground">aproximadamente por contrato</div>
                        </div>

                        <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                            <p className="text-xs text-green-700">
                                <strong>Nota:</strong> Vender si llega a stop o target. Si alcanza BE, sostener contrato solo si está en
                                positivo.
                            </p>
                        </div>
                    </CardContent>
                </Card>
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
                            <p className="text-xl font-bold">TSLA</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-muted-foreground">Dirección</p>
                            <Badge className="bg-green-100 text-green-700 border-green-300">LONG</Badge>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-muted-foreground">Entrada</p>
                            <p className="text-xl font-bold">$323.74</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
