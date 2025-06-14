"use client"

import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import { ArrowUp, Calendar, DollarSign, Filter, Search, TrendingDown, TrendingUp } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

// Datos de ejemplo para operaciones
const futuresOperations = [
    {
        id: "FUT001",
        symbol: "ES",
        description: "E-mini S&P 500",
        type: "Long Future",
        quantity: 5,
        entryPrice: 4250.5,
        currentPrice: 4285.75,
        pnl: 1762.5,
        pnlPercent: 2.1,
        expiration: "2024-03-15",
        status: "active",
        margin: 12500,
    },
    {
        id: "FUT002",
        symbol: "NQ",
        description: "E-mini NASDAQ-100",
        type: "Long Future",
        quantity: 2,
        entryPrice: 15850.25,
        currentPrice: 15720.5,
        pnl: -519.5,
        pnlPercent: -0.8,
        expiration: "2024-03-15",
        status: "active",
        margin: 8000,
    },
    {
        id: "FUT003",
        symbol: "CL",
        description: "Crude Oil",
        type: "Long Future",
        quantity: 3,
        entryPrice: 78.45,
        currentPrice: 82.1,
        pnl: 10950,
        pnlPercent: 4.7,
        expiration: "2024-04-20",
        status: "active",
        margin: 4500,
    },
]

const optionsOperations = [
    {
        id: "OPT001",
        symbol: "AAPL",
        description: "Apple Inc.",
        type: "Call Option",
        strike: 180,
        quantity: 10,
        entryPrice: 5.25,
        currentPrice: 7.8,
        pnl: 2550,
        pnlPercent: 48.6,
        expiration: "2024-01-19",
        status: "active",
        premium: 5250,
        delta: 0.65,
        gamma: 0.03,
        theta: -0.12,
        vega: 0.18,
    },
    {
        id: "OPT002",
        symbol: "TSLA",
        description: "Tesla Inc.",
        type: "Put Option",
        strike: 200,
        quantity: 5,
        entryPrice: 8.9,
        currentPrice: 6.2,
        pnl: -1350,
        pnlPercent: -30.3,
        expiration: "2024-02-16",
        status: "active",
        premium: 4450,
        delta: -0.42,
        gamma: 0.02,
        theta: -0.08,
        vega: 0.15,
    },
    {
        id: "OPT003",
        symbol: "SPY",
        description: "SPDR S&P 500 ETF",
        type: "Call Option",
        strike: 430,
        quantity: 20,
        entryPrice: 3.15,
        currentPrice: 4.25,
        pnl: 2200,
        pnlPercent: 34.9,
        expiration: "2024-01-26",
        status: "active",
        premium: 6300,
        delta: 0.58,
        gamma: 0.04,
        theta: -0.15,
        vega: 0.22,
    },
]

export default function TradingLiveSetup() {
    const totalPnL = [...futuresOperations, ...optionsOperations].reduce((sum, op) => sum + op.pnl, 0)
    const totalPositions = futuresOperations.length + optionsOperations.length
    const activePositions = [...futuresOperations, ...optionsOperations].filter((op) => op.status === "active").length

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
        }).format(value)
    }

    const formatPercent = (value: number) => {
        return `${value > 0 ? "+" : ""}${value.toFixed(2)}%`
    }

    const getPnLColor = (pnl: number) => {
        return pnl >= 0 ? "text-green-600" : "text-red-600"
    }

    const getPnLIcon = (pnl: number) => {
        return pnl >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Dashboard de Operaciones</h1>
                        <p className="text-gray-600">Gestión de futuros y opciones en tiempo real</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm">
                            <Filter className="h-4 w-4 mr-2" />
                            Filtros
                        </Button>
                        <Button size="sm">Nueva Operación</Button>
                    </div>
                </div>

                {/* Resumen de métricas */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">P&L Total</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className={`text-2xl font-bold ${getPnLColor(totalPnL)}`}>{formatCurrency(totalPnL)}</div>
                            <p className="text-xs text-muted-foreground">Ganancia/Pérdida acumulada</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Posiciones Totales</CardTitle>
                            <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{totalPositions}</div>
                            <p className="text-xs text-muted-foreground">Futuros y opciones</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Posiciones Activas</CardTitle>
                            <ArrowUp className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-600">{activePositions}</div>
                            <p className="text-xs text-muted-foreground">En ejecución</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Margen Utilizado</CardTitle>
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {formatCurrency(futuresOperations.reduce((sum, op) => sum + op.margin, 0))}
                            </div>
                            <p className="text-xs text-muted-foreground">Solo futuros</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Filtros y búsqueda */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>Filtros de Operaciones</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                                <div className="relative">
                                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input placeholder="Buscar por símbolo o descripción..." className="pl-10" />
                                </div>
                            </div>
                            <Select>
                                <SelectTrigger className="w-full md:w-48">
                                    <SelectValue placeholder="Tipo de operación" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Todas</SelectItem>
                                    <SelectItem value="futures">Futuros</SelectItem>
                                    <SelectItem value="options">Opciones</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-full md:w-48">
                                    <SelectValue placeholder="Estado" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Todos</SelectItem>
                                    <SelectItem value="active">Activas</SelectItem>
                                    <SelectItem value="closed">Cerradas</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>

                {/* Tabs para diferentes tipos de operaciones */}
                <Tabs defaultValue="futures" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="futures">Futuros</TabsTrigger>
                        <TabsTrigger value="options">Opciones</TabsTrigger>
                        <TabsTrigger value="all">Todas las Operaciones</TabsTrigger>
                    </TabsList>

                    <TabsContent value="futures">
                        <Card>
                            <CardHeader>
                                <CardTitle>Operaciones de Futuros</CardTitle>
                                <CardDescription>Posiciones largas en contratos de futuros</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Símbolo</TableHead>
                                            <TableHead>Descripción</TableHead>
                                            <TableHead>Cantidad</TableHead>
                                            <TableHead>Precio Entrada</TableHead>
                                            <TableHead>Precio Actual</TableHead>
                                            <TableHead>P&L</TableHead>
                                            <TableHead>Margen</TableHead>
                                            <TableHead>Vencimiento</TableHead>
                                            <TableHead>Estado</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {futuresOperations.map((operation) => (
                                            <TableRow key={operation.id}>
                                                <TableCell className="font-medium">{operation.symbol}</TableCell>
                                                <TableCell>{operation.description}</TableCell>
                                                <TableCell>{operation.quantity}</TableCell>
                                                <TableCell>{formatCurrency(operation.entryPrice)}</TableCell>
                                                <TableCell>{formatCurrency(operation.currentPrice)}</TableCell>
                                                <TableCell>
                                                    <div className={`flex items-center gap-1 ${getPnLColor(operation.pnl)}`}>
                                                        {getPnLIcon(operation.pnl)}
                                                        <span>{formatCurrency(operation.pnl)}</span>
                                                        <span className="text-xs">({formatPercent(operation.pnlPercent)})</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell>{formatCurrency(operation.margin)}</TableCell>
                                                <TableCell>{operation.expiration}</TableCell>
                                                <TableCell>
                                                    <Badge variant={operation.status === "active" ? "default" : "secondary"}>
                                                        {operation.status === "active" ? "Activa" : "Cerrada"}
                                                    </Badge>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="options">
                        <Card>
                            <CardHeader>
                                <CardTitle>Operaciones de Opciones</CardTitle>
                                <CardDescription>Posiciones en opciones call y put</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Símbolo</TableHead>
                                            <TableHead>Tipo</TableHead>
                                            <TableHead>Strike</TableHead>
                                            <TableHead>Cantidad</TableHead>
                                            <TableHead>Prima Entrada</TableHead>
                                            <TableHead>Prima Actual</TableHead>
                                            <TableHead>P&L</TableHead>
                                            <TableHead>Delta</TableHead>
                                            <TableHead>Theta</TableHead>
                                            <TableHead>Vencimiento</TableHead>
                                            <TableHead>Estado</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {optionsOperations.map((operation) => (
                                            <TableRow key={operation.id}>
                                                <TableCell className="font-medium">{operation.symbol}</TableCell>
                                                <TableCell>
                                                    <Badge variant={operation.type === "Call Option" ? "default" : "destructive"}>
                                                        {operation.type === "Call Option" ? "Call" : "Put"}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell>{formatCurrency(operation.strike)}</TableCell>
                                                <TableCell>{operation.quantity}</TableCell>
                                                <TableCell>{formatCurrency(operation.entryPrice)}</TableCell>
                                                <TableCell>{formatCurrency(operation.currentPrice)}</TableCell>
                                                <TableCell>
                                                    <div className={`flex items-center gap-1 ${getPnLColor(operation.pnl)}`}>
                                                        {getPnLIcon(operation.pnl)}
                                                        <span>{formatCurrency(operation.pnl)}</span>
                                                        <span className="text-xs">({formatPercent(operation.pnlPercent)})</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell>{operation.delta.toFixed(2)}</TableCell>
                                                <TableCell>{operation.theta.toFixed(2)}</TableCell>
                                                <TableCell>{operation.expiration}</TableCell>
                                                <TableCell>
                                                    <Badge variant={operation.status === "active" ? "default" : "secondary"}>
                                                        {operation.status === "active" ? "Activa" : "Cerrada"}
                                                    </Badge>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="all">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Resumen por Tipo</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-4 border rounded-lg">
                                            <div>
                                                <h3 className="font-semibold">Futuros</h3>
                                                <p className="text-sm text-muted-foreground">{futuresOperations.length} posiciones</p>
                                            </div>
                                            <div
                                                className={`text-right ${getPnLColor(futuresOperations.reduce((sum, op) => sum + op.pnl, 0))}`}
                                            >
                                                <div className="font-semibold">
                                                    {formatCurrency(futuresOperations.reduce((sum, op) => sum + op.pnl, 0))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between p-4 border rounded-lg">
                                            <div>
                                                <h3 className="font-semibold">Opciones</h3>
                                                <p className="text-sm text-muted-foreground">{optionsOperations.length} posiciones</p>
                                            </div>
                                            <div
                                                className={`text-right ${getPnLColor(optionsOperations.reduce((sum, op) => sum + op.pnl, 0))}`}
                                            >
                                                <div className="font-semibold">
                                                    {formatCurrency(optionsOperations.reduce((sum, op) => sum + op.pnl, 0))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Próximos Vencimientos</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {[...futuresOperations, ...optionsOperations]
                                            .sort((a, b) => new Date(a.expiration).getTime() - new Date(b.expiration).getTime())
                                            .slice(0, 5)
                                            .map((operation) => (
                                                <div key={operation.id} className="flex items-center justify-between p-3 border rounded-lg">
                                                    <div>
                                                        <div className="font-medium">{operation.symbol}</div>
                                                        <div className="text-sm text-muted-foreground">{operation.expiration}</div>
                                                    </div>
                                                    <Badge variant="outline">{operation.type.includes("Future") ? "Futuro" : "Opción"}</Badge>
                                                </div>
                                            ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
