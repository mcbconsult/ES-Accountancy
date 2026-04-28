import { Linkedin, Twitter, Facebook } from 'lucide-react';

export const Footer = ({ onOpenLegal }: { onOpenLegal: (tab: 'privacy' | 'disclaimer' | 'cookies') => void }) => {
  return (
    <footer className="py-16 bg-white border-t border-brand-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-brand-primary flex items-center justify-center rounded-sm">
            <span className="text-white font-serif text-xs font-bold">E</span>
          </div>
          <span className="text-lg font-serif font-semibold tracking-tight text-brand-primary">
            ES Accountancy
          </span>
        </div>
        
        <div className="flex gap-10 text-xs uppercase tracking-[0.2em] font-semibold text-brand-text/40">
          <button onClick={() => onOpenLegal('privacy')} className="hover:text-brand-primary transition-colors">Privacy</button>
          <button onClick={() => onOpenLegal('disclaimer')} className="hover:text-brand-primary transition-colors">Disclaimer</button>
          <button onClick={() => onOpenLegal('cookies')} className="hover:text-brand-primary transition-colors">Cookies</button>
        </div>

        <div className="flex gap-6 text-brand-text/40">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors" aria-label="Twitter">
            <Twitter size={18} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors" aria-label="Facebook">
            <Facebook size={18} />
          </a>
        </div>

        <div className="text-xs text-brand-text/40 font-medium">
          © {new Date().getFullYear()} ES Accountancy. ITAA 53.254.111
        </div>
      </div>
    </footer>
  );
};
