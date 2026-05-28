import Link from 'next/link';
import { FadaLogoHorizontal } from './ui/logo';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="mb-8">
              <FadaLogoHorizontal iconClassName="w-10 h-10" />
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Hemma & TPO free ! Não fazemos unhas, cuidamos delas. Uma experiência de luxo para a saúde e beleza das suas mãos.
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest font-semibold mb-6">Explore</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Home</Link>
              </li>
              <li>
                <Link href="/sobre" className="text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-wider">O Estúdio</Link>
              </li>
              <li>
                <Link href="/servicos" className="text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Serviços</Link>
              </li>
              <li>
                <Link href="/contactos" className="text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Contactos</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest font-semibold mb-6">Contactos</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li>Rua Gustavo Ferreira Pinto Bastos 15, Aveiro, Portugal 3810-119</li>
              <li>⏰ Todos os dias | 9h às 20h</li>
              <li>
                <a href="https://instagram.com/fadastudio.pt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline underline-offset-4">
                  @fadastudio.pt
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Fada Studio. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0 uppercase tracking-widest">Designed with absolute precision.</p>
        </div>
      </div>
    </footer>
  );
}
