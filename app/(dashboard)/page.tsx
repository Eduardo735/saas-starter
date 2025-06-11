import PublicNavbar from "@/app/components/public-navbar/public-navbar"
import { TickerTapeWidget } from "@/app/components/trading-chart/ticker-tape"
import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { ArrowRight, BarChart3, CheckCircle, Shield, Target, TrendingUp, Users } from "lucide-react"
import Link from "next/link"
import PricingPage from "./pricing/page"
// const initialData = [
//   { time: '2018-12-22', value: 32.51 },
//   { time: '2018-12-23', value: 31.11 },
//   { time: '2018-12-24', value: 27.02 },
//   { time: '2018-12-25', value: 27.32 },
//   { time: '2018-12-26', value: 25.17 },
//   { time: '2018-12-27', value: 28.89 },
//   { time: '2018-12-28', value: 25.46 },
//   { time: '2018-12-29', value: 23.92 },
//   { time: '2018-12-30', value: 22.68 },
//   { time: '2018-12-31', value: 22.67 },
// ];
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <PublicNavbar />
      {/* <SlimTickerBand /> */}
      <TickerTapeWidget />

      {/* <TradingChart data={sampleData} /> */}
      {/* <ChartComponent data={initialData}></ChartComponent> */}
      {/* Hero Section */}
      <section className="relative pt-10 pb-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                Inspirada en el legendario sistema de las tortugas
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
                De <span className="text-emerald-600">Cero a Trader</span> en 14 Días
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {/* En 1983, Richard Dennis demostró que cualquiera podía convertirse en un trader exitoso. Convirtió a personas comunes en millonarios usando un sistema simple. Ahora puedes dominar las mismas estrategias probadas con nuestra plataforma potenciada por IA. */}
                ¿Eres nuevo en el trading o buscas mejorar tus resultados? En 1983, Richard Dennis demostró que cualquiera, sin experiencia previa, podía convertirse en un trader exitoso. Transformó a personas comunes en millonarios usando un sistema simple y claro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="#pricing">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    Comienza tu viaje de 14 días
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                {/* <Button variant="outline" size="lg">
                  Ver Demo
                </Button> */}
              </div>
              <div className="flex items-center space-x-6 text-sm text-slate-600">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                  No se requiere tarjeta de crédito
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                  Prueba gratis de 14 días
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">El Experimento Original de las Tortugas</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">1</span>
                    </div>
                    <p className="text-emerald-50">23 personas comunes reclutadas de diversos orígenes</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">2</span>
                    </div>
                    <p className="text-emerald-50">2 semanas de entrenamiento intensivo en un sistema simple</p>
                  </div>
                  {/* <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">3</span>
                    </div>
                    <p className="text-emerald-50">Más de $100 millones en ganancias en 4 años</p>
                  </div> */}
                </div>
                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <p className="text-sm italic">"Los buenos traders se hacen, no nacen" - Richard Dennis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-emerald-400 mb-2">10,000+</div>
              <div className="text-slate-300">Traders Activos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-emerald-400 mb-2">$50M+</div>
              <div className="text-slate-300">Ganancias Totales Generadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-emerald-400 mb-2">89%</div>
              <div className="text-slate-300">Tasa de Éxito</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-slate-300">Monitoreo por IA</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Las Tortugas fueron un grupo de personas comunes que aprendieron a operar en los mercados con una estrategia clara y sencilla.
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Hemos tomado las reglas originales de las Tortugas y las mejoramos con tecnología, datos en tiempo real y herramientas modernas de gestión de riesgos.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>Reportes</CardTitle>
                <CardDescription>
                  Reportes de la situación actual del mercado, incluyendo análisis de tendencias y volatilidad.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>Señales de Seguimiento de Tendencias</CardTitle>
                <CardDescription>
                  Detección de rupturas potenciada por IA basada en el sistema original de 20/55 días, optimizada para mercados modernos.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>Gestión de Riesgos</CardTitle>
                <CardDescription>
                  Herramienta para calcular el tamaño de la posición y establecer stop-loss automáticos. Protege tu capital con reglas probadas.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* <Card className="border-2 hover:border-emerald-200 transition-colors">
                            <CardHeader>
                                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                                    <Zap className="h-6 w-6 text-emerald-600" />
                                </div>
                                <CardTitle>Ejecución Automatizada</CardTitle>
                                <CardDescription>
                                    Conéctate a los principales brokers y ejecuta operaciones automáticamente. Elimina las emociones de tus decisiones de trading.
                                </CardDescription>
                            </CardHeader>
                        </Card> */}

            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>Análisis de Rendimiento</CardTitle>
                <CardDescription>
                  Sigue el análisis del portafolio de las tortugas,
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>Comunidad y Mentoría</CardTitle>
                <CardDescription>
                  Únete a una comunidad de traders Tortuga. Recibe mentoría de traders experimentados que han dominado el sistema.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>Soporte Multi-Mercado</CardTitle>
                <CardDescription>
                  Somos traders no holders. Operamos las mejores acciones, futuros, opciones y criptomonedas. Diversifica tu portafolio con confianza.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>Como operar en distintos brokers.</CardTitle>
                <CardDescription>
                  Aprende a operar en los principales brokers de EE.UU. y Latam. Te enseñamos a usar las plataformas más populares.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section id="testimonials" className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Historias de Éxito de Tortugas Modernas</h2>
                        <p className="text-xl text-slate-600">Resultados reales de traders que siguieron el sistema</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-slate-600 mb-4">
                                    "Pasé de perder dinero constantemente a obtener un 45% de retorno en mi primer año. La disciplina y el enfoque sistemático lo cambiaron todo para mí."
                                </p>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                                        <span className="text-emerald-600 font-semibold">MK</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-slate-900">Maria K.</div>
                                        <div className="text-sm text-slate-500">Ingeniera de Software → Trader</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-slate-600 mb-4">
                                    "La gestión de riesgos automatizada me salvó de grandes pérdidas durante caídas del mercado. Duermo mejor sabiendo que el sistema protege mi capital."
                                </p>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                                        <span className="text-emerald-600 font-semibold">JR</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-slate-900">James R.</div>
                                        <div className="text-sm text-slate-500">Ex Day Trader</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-slate-600 mb-4">
                                    "Empecé con $10k, ahora administro $250k usando los mismos principios. El apoyo de la comunidad y la mentoría fueron invaluables."
                                </p>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                                        <span className="text-emerald-600 font-semibold">AL</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-slate-900">Alex L.</div>
                                        <div className="text-sm text-slate-500">Empresario</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section> */}

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Elige tu Camino Tortuga</h2>
            <p className="text-xl text-slate-600">Comienza tu camino hacia el éxito en el trading sistemático</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Tortuga Inicial</CardTitle>
                {/* <CardDescription>Perfecto para principiantes que aprenden el sistema</CardDescription> */}
                <CardDescription>Nunca has operados los salvajes mercados financieros</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="text-slate-500"> USD/mes</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Acceso al dashboard de
                    <br />
                    las Tortugas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Señales básicas de Tortuga
                  </li>
                  {/* <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                                        Herramientas de gestión de riesgos
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                                        Contenido educativo
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                                        Acceso a la comunidad
                                    </li> */}
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Comenzar Prueba Gratis
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-200 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-emerald-600 text-white">Más Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle>Tortuga Pro</CardTitle>
                <CardDescription>Para traders que ya operan y quieren mas ideas, serios listos para escalar</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$19</span>
                  <span className="text-slate-500"> USD/mes</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Reportes PRO de Tortuga
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Señales PRO de Tortuga
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Acceso al dashboard de
                    <br />
                    las Tortugas PRO
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Herramientas de gestión de riesgos
                  </li>

                  {/* <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                                        Señales avanzadas con IA
                                    </li> */}
                  {/* <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                                        Ejecución automatizada
                                    </li> */}
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Soporte multi-mercado
                  </li>
                  {/* <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                                        Soporte prioritario
                                    </li> */}
                  {/* <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                                        Mentoría 1 a 1
                                    </li> */}
                </ul>
                <Button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700">Comenzar Ahora</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tortuga Academy</CardTitle>
                <CardDescription>Para novatos, o para quien quiere profundizar en los mercados financieros</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$49</span>
                  <span className="text-slate-500"> USD/mes</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Estrategias personalizadas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Reportes PRO de Tortuga
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Soporte dedicado
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Soporte multi-mercado
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Soporte prioritario
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Contenido educativo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Multiples Herramientas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Acceso a la comunidad
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Mentoría 1 a 1
                  </li>
                </ul>
                {/* <Button className="w-full mt-6" variant="outline">
                  Contactar Ventas
                </Button> */}
                <Button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700">Comenzar Ahora</Button>
              </CardContent>
            </Card>
            <PricingPage />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">¿Listo para unirte a los traders Tortuga modernos?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Comienza tu prueba gratis de 14 días y descubre por qué traders confían en nuestro sistema. No se requiere tarjeta de crédito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
              Comenzar Prueba Gratis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600"
            >
              Agendar Demo
            </Button> */}
          </div>
          <p className="text-sm text-emerald-200 mt-4">
            Únete a la comunidad de traders que han transformado su trading con el sistema Tortuga
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🐢</span>
                </div>
                <span className="text-xl font-bold">TurtleTrader Pro</span>
              </div>
              <p className="text-slate-400">
                Llevando el legendario sistema de las Tortugas a los mercados modernos con IA y automatización.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Funciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Precios
                  </Link>
                </li>
                {/* <li>
                                    <Link href="#" className="hover:text-white">
                                        API
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white">
                                        Integraciones
                                    </Link>
                                </li> */}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-slate-400">
                {/* <li>
                                    <Link href="#" className="hover:text-white">
                                        Documentación
                                    </Link>
                                </li> */}
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Comunidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Soporte
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Compañía</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Acerca de
                  </Link>
                </li>
                {/* <li>
                                    <Link href="#" className="hover:text-white">
                                        Carreras
                                    </Link>
                                </li> */}
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Términos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 TurtleTrader Pro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
