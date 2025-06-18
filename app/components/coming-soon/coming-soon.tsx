import { Clock } from "lucide-react"

export default function ComingSoon() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-2xl w-full text-center space-y-8">
                {/* Icon */}
                <div className="flex justify-center">
                    <div className="text-center z-10 max-w-md mx-auto">
                        {/* Tortuga SVG Animada */}
                        <div className="mb-8 relative">
                            <div className="animate-float">
                                <svg
                                    width="200"
                                    height="160"
                                    viewBox="0 0 200 160"
                                    className="mx-auto drop-shadow-lg"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* Cuerpo de la tortuga */}
                                    <ellipse cx="100" cy="100" rx="60" ry="35" fill="#4ade80" className="animate-pulse" />

                                    {/* Caparazón */}
                                    <ellipse cx="100" cy="90" rx="50" ry="40" fill="#22c55e" />
                                    <ellipse cx="100" cy="90" rx="40" ry="30" fill="#16a34a" />

                                    {/* Patrón del caparazón */}
                                    <circle cx="85" cy="80" r="8" fill="#15803d" opacity="0.7" />
                                    <circle cx="115" cy="80" r="8" fill="#15803d" opacity="0.7" />
                                    <circle cx="100" cy="95" r="10" fill="#15803d" opacity="0.7" />
                                    <circle cx="85" cy="105" r="6" fill="#15803d" opacity="0.7" />
                                    <circle cx="115" cy="105" r="6" fill="#15803d" opacity="0.7" />

                                    {/* Cabeza */}
                                    <circle cx="100" cy="55" r="18" fill="#4ade80" />

                                    {/* Ojos */}
                                    <circle cx="92" cy="50" r="4" fill="#000" />
                                    <circle cx="108" cy="50" r="4" fill="#000" />
                                    <circle cx="93" cy="49" r="1.5" fill="#fff" />
                                    <circle cx="109" cy="49" r="1.5" fill="#fff" />

                                    {/* Sonrisa */}
                                    <path d="M 90 60 Q 100 65 110 60" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" />

                                    {/* Patas */}
                                    <ellipse cx="65" cy="110" rx="12" ry="8" fill="#4ade80" className="animate-wiggle" />
                                    <ellipse cx="135" cy="110" rx="12" ry="8" fill="#4ade80" className="animate-wiggle" />
                                    <ellipse cx="75" cy="125" rx="10" ry="6" fill="#4ade80" className="animate-wiggle" />
                                    <ellipse cx="125" cy="125" rx="10" ry="6" fill="#4ade80" className="animate-wiggle" />

                                    {/* Cola */}
                                    <ellipse cx="100" cy="135" rx="8" ry="5" fill="#4ade80" />
                                </svg>
                            </div>

                            {/* Ondas de agua */}
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                                <div className="flex space-x-1">
                                    <div className="w-8 h-1 bg-blue-300 rounded-full animate-wave opacity-60"></div>
                                    <div
                                        className="w-12 h-1 bg-blue-400 rounded-full animate-wave opacity-40"
                                        style={{ animationDelay: "0.2s" }}
                                    ></div>
                                    <div
                                        className="w-8 h-1 bg-blue-300 rounded-full animate-wave opacity-60"
                                        style={{ animationDelay: "0.4s" }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h1 className="text-xl font-bold text-green-600 mb-2 animate-bounce">Próximamente</h1>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Estamos trabajando en algo increíble.<br /> Mantente al tanto para ser el primero en saberlo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
