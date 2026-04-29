import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

export const AboutPage = () => {
  return (
    <div className="pt-32">
      <Helmet>
        <title>Over Ons | ES Accountancy - Deskundig & Persoonlijk</title>
        <meta name="description" content="Leer meer over de visie en aanpak van ES Accountancy. Wij zijn meer dan alleen cijfers; wij zijn uw partner in groei." />
      </Helmet>
      {/* Page Hero */}
      <section className="bg-brand-section py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-primary font-semibold text-xs uppercase tracking-[0.2em] mb-6 block">
              Wie we zijn
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-brand-text mb-8">
              Over ES Accountancy
            </h1>
            <p className="text-xl text-brand-text/70 max-w-2xl leading-relaxed">
              Wij geloven dat accountancy meer is dan alleen cijfers. Het gaat om het begrijpen van uw visie en het bieden van de juiste ondersteuning om die te realiseren.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section (Moved from Home) */}
      <section id="over-ons" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2698&auto=format&fit=crop" 
                alt="Ervin Kucukovic" 
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-10 -right-10 w-40 h-40 bg-brand-section -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-primary font-semibold text-xs uppercase tracking-[0.2em] mb-6 block">
              Het Gezicht Achter
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-10 text-brand-text leading-tight">
              Persoonlijke begeleiding <br /> door Ervin Kucukovic
            </h2>
            <div className="space-y-8 text-brand-text/70 leading-relaxed">
              <p>
                Na mijn rechtenstudie en een master in fiscaal recht, heb ik jarenlang ervaring opgedaan in een vooraanstaande fiduciaire. Hier specialiseerde ik mij in het bedienen van vrije beroepers en KMO's.
              </p>
              <p>
                Mijn passie ligt bij het bieden van een persoonlijke aanpak. Ik geloof dat elke ondernemer uniek is en daarom ook unieke financiële oplossingen verdient. In mijn eigen kantoor kan ik die persoonlijke aandacht garanderen.
              </p>
              <p className="italic font-serif text-brand-text text-lg">
                "Mijn doel is om uw financiële zorgen weg te nemen, zodat u zich kunt focussen op wat u het beste doet: ondernemen."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-brand-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 bg-white shadow-sm">
              <h3 className="text-xl font-serif font-medium mb-4 text-brand-text">Persoonlijk</h3>
              <p className="text-brand-text/70 text-base leading-relaxed">
                Geen nummer, maar een partner. Wij kennen uw dossier door en door en zijn altijd bereikbaar voor uw vragen.
              </p>
            </div>
            <div className="p-8 bg-white shadow-sm">
              <h3 className="text-xl font-serif font-medium mb-4 text-brand-text">Deskundig</h3>
              <p className="text-brand-text/70 text-base leading-relaxed">
                Met een achtergrond in fiscaal recht bieden wij diepgaande expertise die verder gaat dan de standaard boekhouding.
              </p>
            </div>
            <div className="p-8 bg-white shadow-sm">
              <h3 className="text-xl font-serif font-medium mb-4 text-brand-text">Proactief</h3>
              <p className="text-brand-text/70 text-base leading-relaxed">
                Wij wachten niet tot u belt. Wij signaleren kansen en risico's voordat ze zich voordoen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
