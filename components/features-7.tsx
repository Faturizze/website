import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesSection() {
    return (
        <section className="overflow-hidden py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-4xl font-semibold lg:text-5xl">
                        A Melhor Escolha Dos Comerciantes!
                    </h2>
                    <p className="mt-6 text-lg">
                        Controle cada transação, detecte fraudes e automatize processos financeiros de forma rápida e confiável.
                    </p>
                </div>

                <div className="mask-b-from-75% mask-l-from-75% mask-b-to-95% mask-l-to-95% relative -mx-4 pr-3 pt-3 md:-mx-12">
                    <div className="perspective-midrange">
                        <div className="rotate-x-6 -skew-2">
                            <div className="aspect-88/36 relative">
                                <Image
                                    src="/dashboard-features.png"
                                    className="absolute inset-0 z-10"
                                    alt="Ilustração do dashboard de monitoramento"
                                    width={1600}
                                    height={650}
                                />
                                <Image
                                    src="/dashboard-features-dark.png"
                                    className="hidden dark:block"
                                    alt="Ilustração do dashboard dark"
                                    width={1600}
                                    height={650}
                                />
                                <Image
                                    src="/dashboard-features-light.png"
                                    className="dark:hidden"
                                    alt="Ilustração do dashboard light"
                                    width={1600}
                                    height={650}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Rápido</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">
                            Processamento instantâneo de transações, garantindo respostas em tempo real.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Robusto</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">
                            Suporte a altos volumes de transações sem comprometer desempenho.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4" />
                            <h3 className="text-sm font-medium">Segurança</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">
                            Criptografia e monitoramento contínuo para prevenir fraudes e acessos não autorizados.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />
                            <h3 className="text-sm font-medium">Automação Inteligente</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">
                            Regras automáticas e alertas inteligentes para agilizar validações e auditoria.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
