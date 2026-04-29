export const Footer = ({ onOpenLegal }: { onOpenLegal: (tab: 'privacy' | 'disclaimer') => void }) => {
  return (
    <footer className="py-10 bg-white border-t border-brand-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-brand-primary flex items-center justify-center rounded-sm">
            <span className="text-white font-serif text-[10px] font-bold">E</span>
          </div>
          <span className="text-base font-serif font-semibold tracking-tight text-brand-primary">
            ES Accountancy
          </span>
        </div>
        
        <div className="flex items-center gap-1">
          <button 
            onClick={() => onOpenLegal('disclaimer')} 
            className="text-[13px] italic underline text-[#428CBB] hover:text-[#31708E] transition-colors cursor-pointer"
          >
            Disclaimer
          </button>
          <span className="text-[13px] italic underline text-[#428CBB]">&</span>
          <button 
            onClick={() => onOpenLegal('privacy')} 
            className="text-[13px] italic underline text-[#428CBB] hover:text-[#31708E] transition-colors cursor-pointer"
          >
            Privacy
          </button>
        </div>

        <div className="text-[10px] text-brand-text/40 font-medium uppercase tracking-wider flex items-center gap-2">
          <span>© 2026 ES Accountancy</span>
          <span className="opacity-20">•</span>
          <span>ITAA 53.254.111</span>
          <span className="opacity-20">•</span>
          <span>By <a href="https://mcbconsult.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">MCBConsult</a></span>
        </div>
      </div>
    </footer>
  );
};
