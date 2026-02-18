import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
                        Teste gratuitamente por 7 dias
                    </h2>

                    <p className="mt-4 text-muted-foreground">
                        Automatize confirmações via M-Pesa e e-Mola.
                        Sem cartão. Sem compromisso. Cancele quando quiser.
                    </p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="px-8">
                            <Link href="/signup">
                                <span>Começar teste grátis</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className=" px-8">
                            <Link href="/demo">
                                <span>Ver demonstração</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
