'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AnimatedWords } from '@/components/ui/animated-words';

const services = [
  {
    category: "Assinatura Fada (Unhas)",
    items: [
      { name: "Manicure Russa (Sem Base)", desc: "Limpeza profunda de cutículas e polimento natural da lâmina ungueal.", price: "€25" },
      { name: "Manicure Russa com Base Nude", desc: "Limpeza, alinhamento térmico e cobertura com base fortalecedora.", price: "€32" },
      { name: "Manicure Russa com Esmaltação", desc: "A experiência completa. Cor impecável com duração estendida.", price: "€38" }
    ]
  },
  {
    category: "Extensões e Construção",
    items: [
      { name: "Extensão em Gel", desc: "Arquitetura perfeita, comprimento ajustado ao seu estilo. Hemma & TPO free.", price: "€55" },
      { name: "Manutenção de Fixação", desc: "Reequilíbrio de pontos de tensão e renovação da cor a cada 3/4 semanas.", price: "€42" },
      { name: "Banho de Gel", desc: "Poderosa camada protetora sobre as unhas naturais. Recomendado para o crescimento seguro e saudável das unhas.", price: "€35" }
    ]
  },
  {
    category: "Pestanas & Olhar",
    items: [
      { name: "Extensão de Pestanas (Clássico/Volume)", desc: "Olhar alongado, natural ou dramático, de acordo com o seu perfil facial.", price: "€60" },
      { name: "Lash Lifting", desc: "Curvatura e nutrição para os seus fios naturais, acompanhado de coloração.", price: "€45" },
      { name: "Design de Sobrancelhas", desc: "Arquitetura facial para destacar e harmonizar o seu olhar com pinça/linha.", price: "€18" }
    ]
  },
  {
    category: "Cuidados Específicos",
    items: [
      { name: "Spa das Mãos Completo", desc: "Esfoliação biológica, máscara nutritiva e massagem terapêutica profunda.", price: "€20" },
      { name: "Remoção Segura com Tratamento", desc: "Remoção de material de outro espaço e hidratação.", price: "€15" }
    ]
  }
];

export default function ServicesPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
           <AnimatedWords 
             text="O Menu"
             elementType="h1"
             className="font-playfair text-5xl md:text-7xl mb-8"
           />
           <p className="text-xl font-light text-zinc-500">
             Transparência e mestria. Escolha o protocolo ideal para as suas necessidades.
           </p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {services.map((section, idx) => (
          <motion.div 
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="mb-20"
          >
            <h2 className="text-sm font-semibold tracking-widest uppercase text-black mb-10 pb-4 border-b border-zinc-200">
              {section.category}
            </h2>
            <div className="space-y-8">
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex flex-col md:flex-row md:items-baseline justify-between group">
                  <div className="max-w-2xl">
                    <h3 className="font-playfair text-2xl mb-2 text-zinc-900 group-hover:text-black transition-colors">{item.name}</h3>
                    <p className="text-zinc-500 font-light text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-4 md:mt-0 font-mono text-lg text-black">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center pt-16 mt-16 border-t border-zinc-200"
        >
           <p className="text-zinc-500 italic mb-8 font-playfair text-xl">Pronta para a sua transformação?</p>
           <Button asChild size="lg" className="px-12">
             <Link href="/contactos">Garantir Vaga</Link>
           </Button>
        </motion.div>
      </section>
    </div>
  );
}
