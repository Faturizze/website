import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'

const transitionVariants = {
    item: {
        hidden: { opacity: 0, filter: 'blur(12px)', y: 12 },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: { type: 'spring', bounce: 0.3, duration: 1.5 },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section className="relative pt-24">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="sm:mx-auto lg:mr-auto lg:mt-0">
                            <TextEffect
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                as="h1"
                                className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16"
                            >
                                Monitore Suas Transações!
                            </TextEffect>
                            <TextEffect
                                per="line"
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                delay={0.5}
                                as="p"
                                className="mt-8 max-w-2xl text-pretty text-lg"
                            >
                                Valide pagamentos M-Pesa e eMola, automatize processos de forma confiável. Tenha controle completo sobre cada transação, instantaneamente.
                            </TextEffect>

                            <AnimatedGroup
                                variants={{
                                    container: { visible: { transition: { staggerChildren: 0.05, delayChildren: 0.75 } } },
                                    ...transitionVariants,
                                }}
                                className="mt-12 flex items-center gap-2"
                            >
                                <div className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                    <Button asChild size="lg" className="rounded-xl px-5 text-base">
                                        <Link href="https://app.faturizze.com">
                                            Iniciar
                                        </Link>
                                    </Button>
                                </div>
                                <Button asChild size="lg" variant="ghost" className="h-10.5 rounded-xl px-5 text-base">
                                    <Link href="https://minio.faturizze.com/statics/faturizze.apk">
                                        Baixar App
                                    </Link>
                                </Button>
                            </AnimatedGroup>
                        </div>
                    </div>

                    <AnimatedGroup
                        variants={{
                            container: { visible: { transition: { staggerChildren: 0.05, delayChildren: 0.75 } } },
                            ...transitionVariants,
                        }}
                    >
                        <div className="mask-b-from-55% relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                            <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-5xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                <Image
                                    className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                                    src="/dashboard-dark.png"
                                    alt="dashboard do sistema"
                                    width={1600}
                                    height={900}
                                />
                                <Image
                                    className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                                    src="/dashboard-light.png"
                                    alt="dashboard do sistema"
                                    width={1600}
                                    height={900}
                                />
                            </div>
                        </div>
                    </AnimatedGroup>
                </section>

                <section className="bg-background pb-16 pt-16 md:pb-32">
                    <div className="group relative m-auto max-w-5xl px-6">
                        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                            <Link href="/clientes" className="block text-sm duration-150 hover:opacity-75">
                                Conheça Nossos Clientes
                                <ChevronRight className="ml-1 inline-block size-3" />
                            </Link>
                        </div>
                        <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="/logos/nvidia.svg"
                                    alt="Nvidia Logo"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="/logos/github.svg"
                                    alt="GitHub Logo"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="/logos/openai.svg"
                                    alt="OpenAI Logo"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="/logos/nike.svg"
                                    alt="Nike Logo"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
