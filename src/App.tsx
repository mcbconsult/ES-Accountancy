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

const LegalModal = ({ isOpen, onClose, initialTab }: { isOpen: boolean, onClose: () => void, initialTab: 'privacy' | 'disclaimer' | 'cookies' }) => {
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
            <button 
              onClick={() => setActiveTab('cookies')}
              className={`text-xs uppercase tracking-widest font-bold transition-colors ${activeTab === 'cookies' ? 'text-brand-primary border-b-2 border-brand-primary pb-1' : 'text-brand-text/40 hover:text-brand-text'}`}
            >
              Cookies
            </button>
          </div>
          <button onClick={onClose} className="text-brand-text/40 hover:text-brand-text transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 md:p-12 prose prose-sm max-w-none text-brand-text/80 leading-relaxed">
          {activeTab === 'privacy' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-serif text-brand-text mb-6">Privacyverklaring (GDPR)</h2>
              <p className="font-medium">Inleiding</p>
              <p>Als accountantskantoor staan wij in voor de verwerking van heel wat gegevens. Een deel van deze gegevens hebben betrekking op persoonsgegevens en in dit kader delen wij u het volgende mee.</p>
              <p>Het kantoor verzamelt en verwerkt de identiteits- en contactgegevens dat het ontvangt van de cliënt over de cliënt zelf, zijn gezinsleden, zijn personeel, zijn medewerkers, zijn aangestelden en zijn zakelijke relaties (leveranciers of klanten van de cliënt) en over elke andere nuttige contactpersoon. Deze persoonsgegevens worden verwerkt door het kantoor in overeenstemming met de Belgische wetgeving over gegevensbescherming en de bepalingen van de Verordening 2016/679 van 27 april 2016 betreffende de bescherming van natuurlijke personen in verband met de verwerking van persoonsgegevens en betreffende het vrije verkeer van die gegevens, van toepassing sinds 25 mei 2018 (hierna ‘Algemene Verordening Gegevensbescherming’).</p>
              
              <h3 className="text-xl font-serif text-brand-text">1. Verantwoordelijke voor de verwerking</h3>
              <p>De verantwoordelijke voor de verwerking van de persoonsgegevens is <strong>Kucukovic Ervin</strong>. De zetel is gelegen te Schermershoek nr.9 – 1730 Mollem met ondernemingsnummer 0790.611.267. De verantwoordelijke is ingeschreven bij het ITAA onder erkenningsnummer 10.731.028.</p>
              
              <h3 className="text-xl font-serif text-brand-text">2. Doeleinden van de verwerking</h3>
              <p>Het kantoor verwerkt de persoonsgegevens voor de volgende doeleinden:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Toepassing van de Wet van 18 september 2017 tot voorkoming van het witwassen van geld.</li>
                <li>Wettelijke verplichtingen ten aanzien van de Belgische overheid (fiscale en sociale wetten).</li>
                <li>Uitvoering van de overeenkomst betreffende boekhoudkundige en fiscale diensten.</li>
                <li>Directe prospectie (nieuwsbrieven), mits toestemming.</li>
              </ul>

              <h3 className="text-xl font-serif text-brand-text">3. Welke persoonsgegevens?</h3>
              <p>Wij verwerken identificatiegegevens, biometrische gegevens (kopie ID), bankgegevens, facturatiegegevens en gegevens nodig voor Tax-on-web (kinderen, medische gegevens indien relevant voor aangifte).</p>

              <h3 className="text-xl font-serif text-brand-text">4. Ontvangers van gegevens</h3>
              <p>Gegevens kunnen worden gedeeld met wettelijk bevoegde overheden, externe medewerkers (notaris, revisor) of softwareleveranciers, strikt beperkt tot wat noodzakelijk is.</p>

              <h3 className="text-xl font-serif text-brand-text">5. Veiligheidsmaatregelen</h3>
              <p>Wij hebben passende technische en organisatorische maatregelen getroffen om ongeoorloofde toegang, verlies of wijziging van gegevens te voorkomen.</p>

              <h3 className="text-xl font-serif text-brand-text">6. Bewaringstermijn</h3>
              <p>Identificatiegegevens in het kader van de antiwitwaswet worden bewaard tot 10 jaar na het einde van de zakelijke relatie. Andere gegevens volgen de wettelijke termijnen (fiscaal, boekhoudkundig).</p>

              <h3 className="text-xl font-serif text-brand-text">7. Uw rechten</h3>
              <p>U beschikt over het recht op inzage, rectificatie, wissing (vergetelheid), beperking van verwerking, overdraagbaarheid en bezwaar. Voor de antiwitwaswetgeving gelden specifieke beperkingen op deze rechten (art. 65 Wet 18/09/2017).</p>

              <h3 className="text-xl font-serif text-brand-text">8. Klachten</h3>
              <p>U kunt een klacht indienen bij de Gegevensbeschermingsautoriteit, Drukpersstraat 35, 1000 Brussel.</p>
            </div>
          )}

          {activeTab === 'disclaimer' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-serif text-brand-text mb-6">Disclaimer</h2>
              <h3 className="text-xl font-serif text-brand-text">Gebruiksvoorwaarden</h3>
              <p>Door gebruik te maken van deze website verbindt u zich ertoe deze gebruiksvoorwaarden na te leven en te aanvaarden. ES Accountancy bezit het exclusieve recht van deze website, haar bestanddelen en inhoud.</p>
              
              <h3 className="text-xl font-serif text-brand-text">Informatie</h3>
              <p>De aangeboden informatie op onze website kan onvolkomenheden bevatten en is louter informatief. Wij staan niet in voor de geschiktheid, betrouwbaarheid, tijdigheid of nauwkeurigheid van de informatie.</p>
              
              <h3 className="text-xl font-serif text-brand-text">Toepasselijke wetgeving</h3>
              <p>De Belgische wetgeving is van toepassing. Ingeval van betwistingen zijn enkel de rechtbanken van ons rechtgebied bevoegd.</p>
            </div>
          )}

          {activeTab === 'cookies' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-serif text-brand-text mb-6">Cookiebeleid</h2>
              <p>Bij het bezoeken van onze website kunnen cookies op uw computer geplaatst worden. Deze worden gebruikt om de gebruikerservaring te verbeteren en anonieme statistieken te verzamelen.</p>
              <p>U kunt het gebruik van cookies beheren via uw browserinstellingen.</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean, tab: 'privacy' | 'disclaimer' | 'cookies' }>({ isOpen: false, tab: 'privacy' });

  const openLegal = (tab: 'privacy' | 'disclaimer' | 'cookies') => {
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
