'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'motion/react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadaLogo, FadaIcon } from '@/components/ui/logo';
import { AnimatedWords } from '@/components/ui/animated-words';

const portfolioItems = [
  {
    id: 1,
    title: "Alinhamento Russo Nude",
    desc: "Nivelamento térmico e cobertura nude ultra-brilhante. Foco em simetria de cutículas de forma totalmente assética e indolor.",
    category: "manicure",
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800",
    gridClass: "md:col-span-1 md:row-span-2 aspect-[3/4] md:aspect-auto"
  },
  {
    id: 2,
    title: "Lash Lifting Premium",
    desc: "Curvatura orgânica e nutrição profunda dos cílios sem danificar os fios naturais.",
    category: "pestanas",
    src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800",
    gridClass: "md:col-span-1 aspect-square"
  },
  {
    id: 3,
    title: "Banho de Gel Fortalecedor",
    desc: "Aperfeiçoamento estrutural de unhas mais fracas ou quebradas, conferindo resistência extrema.",
    category: "manicure",
    src: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=800",
    gridClass: "md:col-span-1 aspect-square"
  },
  {
    id: 4,
    title: "Volume Russo Imperial",
    desc: "Extensão volumétrica com peso impercetível, desenhando um olhar marcante e sofisticado.",
    category: "pestanas",
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
    gridClass: "md:col-span-1 aspect-square"
  },
  {
    id: 5,
    title: "Coleção de Gel Hemma-Free",
    desc: "Fórmulas livres de monómeros tóxicos, ideais para peles sensíveis, mantendo o brilho incomparável.",
    category: "manicure",
    src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800",
    gridClass: "md:col-span-2 aspect-[16/10] md:aspect-auto md:h-96"
  },
  {
    id: 6,
    title: "Alongamento em Fibra de Vidro",
    desc: "Extremidades ultra-finas e estruturadas com alta durabilidade e aspeto totalmente natural.",
    category: "manicure",
    src: "https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?auto=format&fit=crop&q=80&w=800",
    gridClass: "md:col-span-1 aspect-square"
  },
  {
    id: 7,
    title: "Efeito Rímel & Lash Spa",
    desc: "Efeito marcante com fios estrategicamente selecionados e tratamento nutritivo pós-procedimento.",
    category: "pestanas",
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
    gridClass: "md:col-span-1 aspect-square"
  },
  {
    id: 8,
    title: "Nail Art Francesa Fina",
    desc: "O clássico atemporal reinventado com traços milimétricos e acabamento de alta definição.",
    category: "manicure",
    src: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=800",
    gridClass: "md:col-span-1 aspect-square"
  },
  {
    id: 9,
    title: "Tratamento de Mãos & Cutículas",
    desc: "Esfoliação de damasco e máscara nutritiva de manteiga de karité pura para um toque irresistivelmente aveludado.",
    category: "manicure",
    src: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=800",
    gridClass: "md:col-span-2 aspect-[16/10] md:aspect-auto md:h-96"
  },
  {
    id: 10,
    title: "Esmaltação de Alta Precisão",
    desc: "Aplicação milimétrica de verniz de gel sob a cutícula com cor intensa e durabilidade insuperável.",
    category: "manicure",
    src: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&q=80&w=800",
    gridClass: "md:col-span-1 aspect-square"
  },
  {
    id: 11,
    title: "Sobrancelhas Hybrid Velvet",
    desc: "Alinhamento tridimensional preciso e pigmentação rica, criando densidade natural e moldura elegante para o olhar.",
    category: "pestanas",
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
    gridClass: "md:col-span-1 aspect-square"
  },
  {
    id: 12,
    title: "Nail Art Customizada",
    desc: "Desenhos geométricos e texturas abstratas minimalistas pintadas à mão sob medida para realçar sua essência única.",
    category: "manicure",
    src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800",
    gridClass: "md:col-span-1 aspect-square"
  }
];

function InteractivePortfolioCard({ item, index }: { item: typeof portfolioItems[0]; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for high-end mouse-tracking tilt effect
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { damping: 25, stiffness: 250 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { damping: 25, stiffness: 250 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92, y: 100, rotateX: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      exit={{ opacity: 0, scale: 0.9, y: 30 }}
      transition={{ 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1],
        delay: (index % 3) * 0.12
      }}
      className={`group relative overflow-hidden bg-zinc-950 border border-zinc-100/10 cursor-pointer shadow-md rounded-lg ${item.gridClass}`}
      style={{ perspective: 1200, transformStyle: "preserve-3d" }}
    >
      <motion.div 
        className="relative w-full h-full overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d" 
        }}
      >
        <Image 
          src={item.src} 
          alt={item.title} 
          fill 
          sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-1000 ease-out scale-100 group-hover:scale-105" 
          referrerPolicy="no-referrer" 
        />
        
        {/* Sleek thin frame inside that illuminates on hover */}
        <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors duration-700 pointer-events-none z-30 m-3 rounded-md" />

        {/* Luxury gradient vignette backdrop overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 opacity-70 group-hover:opacity-85 transition-opacity duration-700 z-10" />
        
        {/* Elegant top category floating badge */}
        <div className="absolute top-4 left-4 z-20 overflow-hidden rounded-full font-sans">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-3 py-1 text-[0.55rem] font-medium tracking-[0.25em] uppercase">
            {item.category === 'manicure' ? 'Unha Russa' : 'Olhar'}
          </div>
        </div>

        {/* Card text details with depth spacing */}
        <div 
          className="absolute inset-0 flex flex-col justify-end p-5 md:p-6 z-20 translate-y-1 group-hover:translate-y-0 transition-transform duration-700 ease-out font-sans"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="text-white">
            <span className="text-[0.55rem] tracking-[0.35em] font-medium text-zinc-400 uppercase mb-1.5 block group-hover:text-zinc-200 transition-colors duration-300">
              {item.category === 'manicure' ? 'Estética de Assinatura' : 'Design de Pestanas'}
            </span>
            <h3 className="font-playfair text-lg md:text-xl lg:text-2xl mb-1.5 opacity-95 group-hover:opacity-100 transition-opacity duration-300 tracking-wide">
              {item.title}
            </h3>
            
            {/* Description only shown on hover, smoothly expanding grid height */}
            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-[0.16,1,0.3,1]">
              <div className="overflow-hidden">
                <p className="text-[0.7rem] md:text-xs font-light tracking-wide text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HomePage() {
  const [activeFilter, setActiveFilter] = React.useState<'all' | 'manicure' | 'pestanas'>('all');
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
             src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=1200"
             alt="Cuidado Premium de Unhas"
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
      <section className="py-24 md:py-32 bg-white px-4 md:px-8">
        <div className="max-w-[90rem] mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-12 md:mb-16 animate-fade-in"
          >
             <AnimatedWords 
               text="Coleção de Assinatura"
               elementType="h2"
               className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-4"
             />
             <p className="text-zinc-400 font-light text-sm md:text-base tracking-[0.1em] uppercase max-w-xl mx-auto mb-10 leading-relaxed">
               Imersão estética e rigor clínico criados à medida. Filtre as nossas artes de assinatura.
             </p>
             
             {/* Category Filter Controls */}
             <div className="flex justify-center items-center space-x-2 md:space-x-4 border-b border-zinc-100 pb-6 max-w-sm mx-auto">
               {[
                 { id: 'all', label: 'Todos' },
                 { id: 'manicure', label: 'Manicure' },
                 { id: 'pestanas', label: 'Pestanas' }
               ].map((filter) => {
                 const isActive = activeFilter === filter.id;
                 return (
                   <button
                     key={filter.id}
                     onClick={() => setActiveFilter(filter.id as any)}
                     className="relative py-2 px-3 text-xs uppercase tracking-[0.2em] font-medium text-zinc-400 hover:text-black transition-colors duration-300 cursor-pointer"
                   >
                     <span className={isActive ? 'text-black font-semibold' : 'text-zinc-400 hover:text-zinc-650'}>
                       {filter.label}
                     </span>
                     {isActive && (
                       <motion.div 
                         layoutId="activeFilterUnderline"
                         className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                         transition={{ type: "spring", stiffness: 380, damping: 30 }}
                       />
                     )}
                   </button>
                 );
               })}
             </div>
          </motion.div>

          {/* Animated Bento Grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 min-h-[600px]"
            style={{ perspective: 1000 }}
          >
            <AnimatePresence mode="popLayout">
              {portfolioItems
                .filter(item => activeFilter === 'all' || item.category === activeFilter)
                .map((item, idx) => (
                  <InteractivePortfolioCard key={item.id} item={item} index={idx} />
                ))
              }
            </AnimatePresence>
          </motion.div>

          <div className="text-center mt-12 md:mt-16">
            <Link href="/servicos" className="text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-black transition-colors underline underline-offset-8">
              Ver Menu Completo de Serviços
            </Link>
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
