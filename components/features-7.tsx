import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesSection() {
    return (
        <section className="overflow-hidden py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                  <div className="text-center lg:text-left">
                    <h2 className="mt-8 text-4xl font-bold md:text-5xl">
                      Controle Total Das Suas Transações
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground">
                      Controlo total sobre o que entra e sai do teu celular, com registo em tempo real de todas as transações, garantindo transparência e segurança.
                    </p>
                  </div>
                  <div>
                    <Image
                      src="https://minio.faturizze.com/statics/Phone-2.png"
                      alt="Tailark"
                      width={3000}
                      height={2800}
                      className="w-48 md:w-72 h-auto"
                    />
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
