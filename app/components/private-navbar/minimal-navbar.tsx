import Link from "next/link"
import { UserDetail } from "../user-detail/user-detail"

export default function MinimalNavbar() {
    return (

        <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <span className="text-white font-bold text-lg">🐢</span>
                        <span className="text-xl font-bold text-slate-900">TurtleTrader</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/home" className="text-slate-600 hover:text-slate-900">
                            Go App
                        </Link>
                        <UserDetail />
                        {/* <Button variant="outline" size="sm">
                            Iniciar Sesión
                        </Button> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}
