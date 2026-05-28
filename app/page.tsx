'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadaLogo, FadaIcon } from '@/components/ui/logo';
import { AnimatedWords } from '@/components/ui/animated-words';

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden bg-black text-white">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0 opacity-60"
        >
          {/* Desktop Image */}
          <Image
            src="https://i.imgur.com/Ys5NbIw.png"
            alt="Fada Studio Experience"
            fill
            className="hidden md:block object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          {/* Mobile Image */}
          <Image
            src="https://i.imgur.com/4rhs9Pj.png"
            alt="Fada Studio Experience Mobile"
            fill
            className="block md:hidden object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="relative z-10 w-full px-6 md:px-12 h-[100dvh] flex flex-col justify-between pb-4 md:pb-8 pt-24 md:pt-28 text-white">
          
          {/* Top minimal elements */}
          <div className="flex justify-between items-start text-[0.55rem] md:text-xs uppercase tracking-[0.3em] font-light opacity-70 shrink-0">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.8 }}>
              Lisboa, PT
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.8 }} className="text-right">
              Est. 2024<br/>
              Exclusive Care
            </motion.div>
          </div>

          {/* Center Content */}
          <div className="flex flex-col items-center justify-center flex-1 py-8">
             <div className="mb-6 md:mb-8 text-center flex flex-col items-center w-full">
                 <motion.div
                   initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                   animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                   transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                   className="mb-2 md:mb-4 flex items-center justify-center w-full"
                 >
                   <FadaLogo className="w-[50vw] max-w-[250px] h-[50vw] max-h-[250px] md:w-[35vh] md:max-w-[500px] md:h-[35vh] lg:w-[40vh] lg:h-[40vh]" iconClassName="invert brightness-0" />
                 </motion.div>
                 <motion.div 
                   initial={{ opacity: 0, scale: 0 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 1, delay: 1 }}
                   className="w-1.5 h-1.5 rounded-full bg-white/50 mb-6 md:mb-8 mt-2 md:mt-4"
                 />
                 <motion.p 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1, delay: 1.2 }}
                   className="text-[0.55rem] md:text-xs font-light tracking-[0.4em] uppercase opacity-70 text-center max-w-[250px] md:max-w-none leading-relaxed"
                 >
                   Manicure Russa <span className="mx-2 hidden md:inline">•</span><br className="md:hidden" /> Extensão de Pestanas
                 </motion.p>
             </div>
             
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 1.6 }}
               className="relative mt-2"
             >
                <div className="absolute -inset-4 bg-white/10 blur-2xl rounded-full" />
                <Button asChild size="lg" className="relative bg-black/20 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-700 px-6 md:px-8 font-light tracking-[0.2em] text-[0.6rem] md:text-xs uppercase h-10 md:h-12">
                  <Link href="/contactos">
                    Reservar Experiência
                  </Link>
                </Button>
             </motion.div>
          </div>

          {/* Bottom elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-end text-[0.55rem] md:text-xs uppercase tracking-[0.3em] font-light mt-4 shrink-0">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.8 }} className="opacity-70 hidden md:block text-left pb-2 md:pb-4">
              Scroll to explore
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 2 }}
               className="flex flex-col items-center justify-self-center md:col-start-2 place-self-end mt-4 md:mt-0"
            >
              <div className="text-[0.45rem] md:text-[0.5rem] tracking-[0.4em] mb-3 opacity-50">Descobrir</div>
              <motion.div 
                 animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }} 
                 transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                 className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-white/80 to-transparent"
              />
            </motion.div>

            <div className="hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="bg-white text-black py-5 border-b border-zinc-100 overflow-hidden flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          className="flex space-x-12 px-4 items-center opacity-80"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center space-x-12">
              <span className="text-xs font-light tracking-[0.2em] uppercase flex items-center">
                <Star className="w-3 h-3 mr-4 opacity-50" />
                Hemma & TPO free
              </span>
              <span className="text-xs font-light tracking-[0.2em] uppercase flex items-center">
                <Star className="w-3 h-3 mr-4 opacity-50" />
                Mestria Técnica
              </span>
              <span className="text-xs font-light tracking-[0.2em] uppercase flex items-center">
                <Star className="w-3 h-3 mr-4 opacity-50" />
                Assepsia Hospitalar
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Feature Split - Visual Focus */}
      <section className="py-0 flex flex-col lg:flex-row w-full bg-zinc-50 border-b border-zinc-200">
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
          className="relative w-full lg:w-1/2 aspect-square lg:aspect-auto lg:h-[90vh]"
        >
           <Image
             src="https://picsum.photos/seed/lux-nails-macro/1000/1200"
             alt="Cuidado Premium"
             fill
             className="object-cover"
             referrerPolicy="no-referrer"
           />
        </motion.div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-12 md:p-24 lg:p-32 bg-white">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
             <motion.span variants={fadeInUp} className="text-xs uppercase tracking-[0.3em] text-zinc-400 font-semibold mb-8 block">A Diferença</motion.span>
             <AnimatedWords 
               text="Elevamos a sua estética preservando a sua saúde natural."
               elementType="h2"
               className="font-playfair text-4xl md:text-5xl lg:text-5xl mb-16 leading-tight"
             />

             <motion.ul variants={staggerContainer} className="space-y-10">
               {[
                 { title: "Assepsia", desc: "Protocolos rigorosos e esterilização clínica." },
                 { title: "Pureza", desc: "Produtos premium livres de toxinas agressoras." },
                 { title: "Precisão", desc: "Aperfeiçoamento até ao último milímetro." },
               ].map((item, idx) => (
                 <motion.li key={idx} variants={fadeInUp} className="border-b border-zinc-100 pb-6">
                   <h3 className="uppercase tracking-[0.2em] text-xs font-semibold mb-2">{item.title}</h3>
                   <p className="text-zinc-500 font-light text-sm">{item.desc}</p>
                 </motion.li>
               ))}
             </motion.ul>
           </motion.div>
        </div>
      </section>

      {/* Visual Gallery Layout / Especialidades */}
      <section className="py-24 md:py-32 bg-white px-4">
        <div className="max-w-[90rem] mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16 md:mb-24"
          >
             <AnimatedWords 
               text="O Nosso Portfólio"
               elementType="h2"
               className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-6"
             />
             <Link href="/servicos" className="text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-black transition-colors underline underline-offset-8">
               Ver Menu Completo
             </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="group relative aspect-[3/4] md:aspect-square overflow-hidden bg-zinc-100">
               <Image src="https://picsum.photos/seed/manicure-russa/800/1000" alt="Manicure" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700 flex items-end p-8 md:p-12">
                 <h3 className="text-white font-playfair text-3xl md:text-4xl">Manicure</h3>
               </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="group relative aspect-[3/4] md:aspect-square overflow-hidden bg-zinc-100">
               <Image src="https://picsum.photos/seed/lashes-art/800/1000" alt="Lashes" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700 flex items-end p-8 md:p-12">
                 <h3 className="text-white font-playfair text-3xl md:text-4xl">Pestanas</h3>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Elegant Infinite Parallax Testimonial / Mood */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-zinc-900 text-white text-center">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0 opacity-40"
        >
          <Image
            src="https://picsum.photos/seed/abstract-elegance/1920/1080"
            alt="Ambiente Relaxante"
            fill
            className="object-cover grayscale"
            priority
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="relative z-10 max-w-4xl px-6 flex flex-col items-center">
          <FadaIcon className="w-8 h-8 mb-10 text-white/50" />
          <AnimatedWords 
            text="O nível de perfeccionismo e o cuidado com as minhas unhas transformaram por completo a minha experiência num salão. Um verdadeiro refúgio analógico."
            elementType="h3"
            className="font-playfair text-3xl md:text-4xl lg:text-5xl leading-[1.3] mb-8 font-light"
          />
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="text-xs uppercase tracking-[0.3em] text-white/50 font-semibold">
            Opinião Verificada
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white text-black py-40 text-center px-4">
        <motion.div
           initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
           className="max-w-2xl mx-auto flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="mb-10">
            <FadaIcon className="w-12 h-12" />
          </motion.div>
          <AnimatedWords 
            text="Desperte O Melhor de Si"
            elementType="h2"
            className="font-playfair text-5xl md:text-7xl mb-12"
          />
          <motion.div variants={fadeInUp}>
            <Button asChild size="lg" className="bg-black text-white hover:bg-black/90 border-none px-12 h-14 tracking-widest text-xs uppercase font-light">
              <Link href="/contactos">Agendar Momento</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
