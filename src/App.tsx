/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostDetail } from './pages/BlogPostDetail';

// --- Components ---

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

const LegalModal = ({ isOpen, onClose, initialTab }: { isOpen: boolean, onClose: () => void, initialTab: 'privacy' | 'disclaimer' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-text/40 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white w-full max-w-4xl max-h-[80vh] overflow-hidden shadow-2xl flex flex-col"
      >
        <div className="flex justify-between items-center p-6 border-b border-brand-section">
          <div className="flex gap-8">
            <button 
              onClick={() => setActiveTab('privacy')}
              className={`text-xs uppercase tracking-widest font-bold transition-colors ${activeTab === 'privacy' ? 'text-brand-primary border-b-2 border-brand-primary pb-1' : 'text-brand-text/40 hover:text-brand-text'}`}
            >
              Privacy & GDPR
            </button>
            <button 
              onClick={() => setActiveTab('disclaimer')}
              className={`text-xs uppercase tracking-widest font-bold transition-colors ${activeTab === 'disclaimer' ? 'text-brand-primary border-b-2 border-brand-primary pb-1' : 'text-brand-text/40 hover:text-brand-text'}`}
            >
              Disclaimer
            </button>
          </div>
          <button onClick={onClose} className="text-brand-text/40 hover:text-brand-text transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 md:p-12 prose prose-sm max-w-none text-brand-text/80 leading-relaxed">
          {activeTab === 'privacy' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-serif text-brand-text mb-6 tracking-tight">PRIVACY & GDPR</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-brand-text font-medium">Inleiding</h3>
                <p>Als accountantskantoor staan wij in voor de verwerking van heel wat gegevens. Een deel van deze gegevens hebben betrekking op persoonsgegevens en in dit kader delen wij u het volgende mee.</p>
                <p>Het kantoor verzamelt en verwerkt de identiteits- en contactgegevens dat het ontvangt van de cliënt over de cliënt zelf, zijn gezinsleden, zijn personeel, zijn medewerkers, zijn aangestelden en zijn zakelijke relaties (leveranciers of klanten van de cliënt) en over elke andere nuttige contactpersoon. Deze persoonsgegevens worden verwerkt door het kantoor in overeenstemming met de Belgische wetgeving over gegevensbescherming en de bepalingen van de Verordening 2016/679 van 27 april 2016 (Algemene Verordening Gegevensbescherming).</p>
              </div>
              
              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-serif text-brand-text font-medium">1. Verantwoordelijke voor de verwerking</h3>
                <p>De verantwoordelijke voor de verwerking van de persoonsgegevens is <strong>Kucukovic Ervin</strong>.</p>
                <p>De zetel van de verantwoordelijke is gelegen te <strong>Schermershoek nr.9 – 1730 Mollem</strong> met als het ondernemingsnummer <strong>0790.611.267</strong>.</p>
                <p>De verantwoordelijke is ingeschreven bij het ITAA onder erkenningsnummer <strong>10.731.028</strong>.</p>
                <p>Voor alle vragen met betrekking tot de bescherming van persoonsgegevens, kunt u steeds terecht bij ES Accountancy via brief op het bovenstaande adres of via e-mail: <a href="mailto:info@esaccountancy.be" className="text-brand-primary hover:underline">info@esaccountancy.be</a>.</p>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-serif text-brand-text font-medium">2. Doeleinden van de verwerking</h3>
                <p>In het algemeen verwerkt het kantoor de persoonsgegevens voor de volgende doeleinden:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Anti-witwaswetgeving:</strong> Toepassing van de Wet van 18 september 2017 tot voorkoming van het witwassen van geld en de financiering van terrorisme.</li>
                  <li><strong>Wettelijke verplichtingen:</strong> Verplichtingen ten aanzien van de Belgische overheid, fiscale (o.a. BTW-listings) en sociale wetgeving.</li>
                  <li><strong>Uitvoering overeenkomst:</strong> Uitvoering van de overeenkomst voor boekhoudkundige en fiscale diensten.</li>
                  <li><strong>Directe prospectie:</strong> Activiteiten zoals het versturen van commerciële informatie of nieuwsbrieven (uitsluitend na toestemming).</li>
                </ul>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-serif text-brand-text font-medium">3. Welke persoonsgegevens?</h3>
                <p>Het kantoor verwerkt onder meer:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Identificatiegegevens (naam, adres, telefoon, e-mail, nationaal nummer);</li>
                  <li>Biometrische gegevens (kopie identiteitskaart);</li>
                  <li>Bank- en facturatiegegevens;</li>
                  <li>In het kader van personenbelasting: gegevens over kinderen, medische gegevens (indien relevant voor aftrekposten), etc.</li>
                </ul>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-serif text-brand-text font-medium">4. Veiligheid en Bewaring</h3>
                <p>Het kantoor heeft passende organisatorische en technische maatregelen getroffen om een beschermingsniveau te waarborgen dat past bij de risico's.</p>
                <p>Identificatiegegevens in het kader van de Anti-witwaswet worden bewaard tot <strong>10 jaar</strong> na het einde van de zakelijke relatie. Andere gegevens worden bewaard gedurende de wettelijke termijnen voorzien in de boekhoudkundige en fiscale wetgeving.</p>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-serif text-brand-text font-medium">5. Uw rechten</h3>
                <p>Onder de AVG beschikt u over rechten zoals inzage, rectificatie, wissing ('vergetelheid'), beperking en bezwaar. Let op: voor gegevens onder de Anti-witwaswet gelden specifieke wettelijke beperkingen op deze rechten (Art. 65 Wet 18/09/2017).</p>
                <p>Voor klachten kunt u zich wenden tot de <strong>Gegevensbeschermingsautoriteit</strong>:</p>
                <p className="text-xs italic">Drukpersstraat 35, 1000 Brussel | Tel: +32 (0)2 274 48 00 | contact@apd-gba.be</p>
              </div>
            </div>
          )}

          {activeTab === 'disclaimer' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-serif text-brand-text mb-6 tracking-tight">DISCLAIMER</h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-brand-text font-medium">Gebruiksvoorwaarden</h3>
                <p>Deze gebruiksvoorwaarden zijn van toepassing op deze website. Door gebruik te maken van deze website verbindt u zich ertoe deze gebruiksvoorwaarden na te leven en te aanvaarden.</p>
              </div>

              <div className="space-y-4">
                <p>ES Accountancy bezit het exclusieve recht van deze website, haar bestanddelen en inhoud. Het is verboden zonder voorafgaande schriftelijk akkoord deze te gebruiken, reproduceren of te verwerken.</p>
              </div>
              
              <div className="pt-8 border-t border-brand-section opacity-60 text-xs">
                <p>De Belgische wetgeving is van toepassing. Ingeval van betwistingen zijn enkel de rechtbanken van ons rechtgebied bevoegd.</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean, tab: 'privacy' | 'disclaimer' }>({ isOpen: false, tab: 'privacy' });

  const openLegal = (tab: 'privacy' | 'disclaimer') => {
    setLegalModal({ isOpen: true, tab });
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/over-ons" element={<AboutPage />} />
          <Route path="/diensten" element={<ServicesPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogs/:slug" element={<BlogPostDetail />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer onOpenLegal={openLegal} />

        <AnimatePresence>
          {legalModal.isOpen && (
            <LegalModal 
              isOpen={legalModal.isOpen} 
              onClose={() => setLegalModal({ ...legalModal, isOpen: false })} 
              initialTab={legalModal.tab} 
            />
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}
