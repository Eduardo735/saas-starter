import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Clock, Mail, Rocket } from "lucide-react"

export default function ComingSoon() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full text-center space-y-8">
                {/* Icon */}
                <div className="flex justify-center">
                    <div className="bg-indigo-600 p-6 rounded-full">
                        <Rocket className="h-12 w-12 text-white" />
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Próximamente</h1>
                    <p className="text-xl text-gray-600 max-w-lg mx-auto">
                        Estamos trabajando en algo increíble. Mantente al tanto para ser el primero en saberlo.
                    </p>
                </div>

                {/* Newsletter Signup */}
                {/* <Card className="max-w-md mx-auto">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 justify-center">
                            <Mail className="h-5 w-5" />
                            Notifícame cuando esté listo
                        </CardTitle>
                        <CardDescription>Te enviaremos un email cuando lancemos oficialmente</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-2">
                            <Input type="email" placeholder="tu@email.com" className="flex-1" />
                            <Button>Suscribirse</Button>
                        </div>
                    </CardContent>
                </Card> */}

                {/* Coming Soon Info */}
                <div className="flex items-center justify-center gap-2 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">Lanzamiento estimado: Q3 2025</span>
                </div>

                {/* Social Links */}
                {/* <div className="flex justify-center gap-4">
                    <Button variant="outline" size="sm">
                        Síguenos en Twitter
                    </Button>
                    <Button variant="outline" size="sm">
                        Únete a Discord
                    </Button>
                </div> */}
            </div>
        </div>
    )
}
