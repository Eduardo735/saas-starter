import { Button } from "@/app/components/ui/button"
import Link from "next/link"

export default function PrivateNavbar() {
    return (

        <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">🐢</span>
                        </div>
                        <span className="text-xl font-bold text-slate-900">TurtleTrader Pro</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#features" className="text-slate-600 hover:text-slate-900">
                            Funciones
                        </Link>
                        <Link href="#pricing" className="text-slate-600 hover:text-slate-900">
                            Precios
                        </Link>
                        <Link href="#testimonials" className="text-slate-600 hover:text-slate-900">
                            Historias de Éxito
                        </Link>
                        <Button variant="outline" size="sm">
                            Iniciar Sesión
                        </Button>
                        <Button size="sm">Inicia una prueba gratis</Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
