'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Instagram, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedWords } from '@/components/ui/animated-words';

export default function ContactsPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="pt-32 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.div 
          initial="hidden" animate="visible" variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20"
        >
          {/* Info Side */}
          <div>
            <AnimatedWords 
              text="Entre em Contacto"
              elementType="h1"
              className="font-playfair text-5xl md:text-7xl mb-10"
            />
            
            <motion.div variants={fadeInUp} className="space-y-12">
              <div>
                <h3 className="text-sm font-semibold tracking-widest uppercase text-zinc-400 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" /> Morada
                </h3>
                <p className="text-xl text-black font-light max-w-sm">
                  Rua Gustavo Ferreira Pinto Bastos 15,<br />
                  Aveiro, Portugal<br />
                  3810-119
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-widest uppercase text-zinc-400 mb-4 flex items-center">
                  <Clock className="w-4 h-4 mr-2" /> Horário
                </h3>
                <p className="text-xl text-black font-light">
                  Todos os dias | 9h às 20h
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-widest uppercase text-zinc-400 mb-4 flex items-center">
                  <Instagram className="w-4 h-4 mr-2" /> Redes
                </h3>
                <a 
                  href="https://instagram.com/fadastudio.pt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl text-black font-light hover:text-zinc-500 transition-colors inline-block"
                >
                  @fadastudio.pt
                </a>
              </div>
            </motion.div>
          </div>

          {/* Booking / Form Side */}
          <motion.div variants={fadeInUp} className="bg-zinc-50 p-10 md:p-16 flex flex-col justify-center">
            <AnimatedWords 
              text="Reservas"
              elementType="h2"
              className="font-playfair text-3xl md:text-4xl mb-6"
            />
            <p className="text-zinc-500 font-light text-lg mb-10 leading-relaxed">
              O nosso preçário reflete o tempo, a habilidade e os produtos de alta qualidade utilizados nos nossos tratamentos. Todas as reservas são feitas exclusivamente através da nossa plataforma online para sua conveniência e garantia de vaga.
            </p>
            
            <Button size="lg" className="w-full text-base h-16" onClick={() => window.alert('Redirecionar para plataforma de reservas online.')}>
              Reservar Agora <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
            
            <div className="mt-8 text-center text-sm text-zinc-400 font-light">
              <p>Dúvidas urgentes?</p>
              <a href="mailto:hello@fadastudio.pt" className="text-black hover:underline mt-1 inline-flex items-center">
                <Mail className="w-3 h-3 mr-2" /> hello@fadastudio.pt
              </a>
            </div>
          </motion.div>

        </motion.div>
      </section>
    </div>
  );
}
