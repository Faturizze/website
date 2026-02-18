import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'

export default function Pricing() {
    return (
        <div className="relative py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
                        Automatize seus pagamentos e escale sem esforço
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Pare de confirmar pagamentos manualmente. Deixe o sistema trabalhar por você.
                    </p>
                </div>

                <div className="mt-8 md:mt-20">
                    <div className="bg-card relative rounded-3xl border shadow-2xl shadow-zinc-950/5">
                        <div className="grid items-center gap-12 divide-y p-12 md:grid-cols-2 md:divide-x md:divide-y-0">

                            {/* Plano */}
                            <div className="pb-12 text-center md:pb-0 md:pr-12">
                                <h3 className="text-2xl font-semibold">Faturizze Pro</h3>
                                <p className="mt-2 text-lg">
                                    Para negócios que vendem com M-Pesa e e-Mola
                                </p>

                                <span className="mb-6 mt-12 inline-block text-6xl font-bold">
                                    480<span className="text-4xl"> MT/mes</span>
                                </span>

                                <p className="text-muted-foreground mt-12 text-sm">
                                    Inclui automação de confirmações, validação inteligente,
                                    relatórios em tempo real e suporte prioritário.
                                </p>
                            </div>

                            {/* Benefícios */}
                            <div className="relative">
                                <ul role="list" className="space-y-4">
                                    {[
                                        'Confirmação automática via M-Pesa e e-Mola',
                                        'Validação inteligente de transações',
                                        'Relatórios detalhados em tempo real',
                                        'Redução de fraude e erro manual'
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <Check className="size-4" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-muted-foreground mt-6 text-sm">
                                    Ideal para e-commerces, infoprodutores e serviços que
                                    precisam confirmar pagamentos em segundos.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
