import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Briefcase
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    viewport={{ once: true }}
    className="p-10 bg-white border border-brand-section hover:border-brand-primary/20 hover:shadow-lg transition-all duration-500 group"
  >
    <div className="w-12 h-12 text-brand-primary mb-8 group-hover:scale-110 transition-transform duration-300">
      <Icon size={32} strokeWidth={1.5} />
    </div>
    <h3 className="text-2xl font-serif font-medium mb-4 text-brand-text">{title}</h3>
    <p className="text-brand-text/70 leading-relaxed text-base">
      {description}
    </p>
  </motion.div>
);

export const ServicesPage = () => {
  return (
    <div className="pt-32">
      <Helmet>
        <title>Diensten | ES Accountancy - Accountancy & Fiscaal Advies</title>
        <meta name="description" content="Ontdek onze diensten: van boekhouding en fiscaliteit tot startersbegeleiding. Maatwerk voor KMO's en vrije beroepen." />
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
              Onze Expertise
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-brand-text mb-8">
              Diensten op maat
            </h1>
            <p className="text-xl text-brand-text/70 max-w-2xl leading-relaxed">
              Wij bieden een breed scala aan accountancy en fiscale diensten, specifiek afgestemd op de behoeften van KMO's en vrije beroepen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-px bg-brand-section border border-brand-section">
            <ServiceCard 
              icon={Calculator}
              title="Accountancy"
              description="Volledige ontzorging van uw boekhouding, jaarrekeningen en wettelijke verplichtingen."
              delay={0.1}
            />
            <ServiceCard 
              icon={FileText}
              title="Fiscaal Advies"
              description="Strategische optimalisatie van uw fiscale positie voor zowel zakelijk als privé."
              delay={0.2}
            />
            <ServiceCard 
              icon={Zap}
              title="Startersadvies"
              description="Begeleiding bij de opstart van uw zaak, van businessplan tot inschrijving."
              delay={0.3}
            />
            <ServiceCard 
              icon={Briefcase}
              title="Bedrijfsadvies"
              description="Ondersteuning bij groei, herstructurering of overname van uw onderneming."
              delay={0.4}
            />
            <ServiceCard 
              icon={ShieldCheck}
              title="Compliance"
              description="Zekerheid dat u voldoet aan alle actuele wet- en regelgeving."
              delay={0.5}
            />
            <ServiceCard 
              icon={TrendingUp}
              title="Financiële Planning"
              description="Inzicht in uw toekomst met gedetailleerde prognoses en planning."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-10">Klaar om uw cijfers te optimaliseren?</h2>
          <a href="/contact" className="inline-block bg-white text-brand-primary px-10 py-5 text-xs uppercase tracking-widest font-bold hover:bg-brand-section transition-colors">
            Vrijblijvend gesprek aanvragen
          </a>
        </div>
      </section>
    </div>
  );
};
