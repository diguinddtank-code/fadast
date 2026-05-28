'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { AnimatedWords } from '@/components/ui/animated-words';

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Header */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-6 block">O Nosso Propósito</span>
          <AnimatedWords 
            text="Para além da estética."
            elementType="h1"
            className="font-playfair text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8"
          />
          <p className="text-xl md:text-2xl font-light text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            Bem-vinda ao Fada Studio. Onde a ciência do cuidado encontra a arte do design de elite.
          </p>
        </motion.div>
      </section>

      {/* Feature Split 1 */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="order-2 lg:order-1"
          >
            <AnimatedWords 
              text="A Filosofia do Cuidado"
              elementType="h2"
              className="font-playfair text-4xl md:text-5xl mb-8"
            />
            <div className="space-y-6 text-zinc-600 text-lg font-light leading-relaxed">
              <p>
                No Fada Studio, acreditamos que a verdadeira beleza nasce da saúde absoluta. "Não fazemos unhas, cuidamos delas." Este não é apenas um slogan, é a fundação de cada protocolo que desenvolvemos.
              </p>
              <p>
                Recusamos o uso de substâncias agressivas. Os nossos materiais são 100% Hemma e TPO free, minimizando os riscos de alergias e preservando a integridade celular das extremidades.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="order-1 lg:order-2 relative aspect-[4/5] bg-zinc-100"
          >
             <Image
              src="https://picsum.photos/seed/about1/800/1000"
              alt="Estúdio Interior"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Feature Split 2 */}
      <section className="py-24 bg-zinc-50 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
             className="relative aspect-[4/5] bg-white"
          >
             <Image
              src="https://picsum.photos/seed/about2/800/1000"
              alt="Detalhe de Ferramentas"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          >
            <AnimatedWords 
              text="Precisão Cirúrgica"
              elementType="h2"
              className="font-playfair text-4xl md:text-5xl mb-8"
            />
            <div className="space-y-6 text-zinc-600 text-lg font-light leading-relaxed">
              <p>
                A manicure russa é executada com um nível de precisão milimétrica. As nossas especialistas são treinadas sob os mais altos padrões internacionais de assepsia e técnica.
              </p>
              <p>
                O ambiente reflete a nossa mentalidade: calmo, clínico e irrepreensível. Um refúgio silencioso para descontrair na cidade de Aveiro, pensado para a mulher contemporânea que não abdica da excelência.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
