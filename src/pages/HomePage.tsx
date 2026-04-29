import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
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
    <p className="text-brand-text/70 leading-relaxed mb-8 text-[15px]">
      {description}
    </p>
    <div className="flex items-center gap-2 text-brand-primary font-semibold text-xs uppercase tracking-widest cursor-pointer group-hover:gap-3 transition-all">
      Ontdek meer <ArrowRight size={14} />
    </div>
  </motion.div>
);

export const HomePage = () => {
  return (
    <div className="selection:bg-brand-primary/20 selection:text-brand-primary">
      <Helmet>
        <title>ES Accountancy | Uw Partner in Financieel Succes</title>
        <meta name="description" content="ES Accountancy biedt op maat gemaakte accountancy en fiscaal advies voor ondernemers. Persoonlijk, deskundig en proactief." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AccountingService",
              "name": "ES Accountancy",
              "description": "Uw partner in financieel succes & fiscaal advies voor ondernemers en KMO's.",
              "url": "https://ais-dev-yj4e5447bpava7yswsykjc-371387285250.europe-west2.run.app/",
              "telephone": "+32 123 45 67 89",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kerkstraat 1",
                "addressLocality": "Antwerpen",
                "postalCode": "2000",
                "addressCountry": "BE"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:30",
                  "closes": "17:00"
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/company/es-accountancy"
              ]
            }
          `}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-brand-primary font-semibold text-xs uppercase tracking-[0.2em] mb-6">
              Persoonlijk & Professioneel
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] mb-8 text-brand-text">
              Uw partner in <br />
              <span className="text-brand-primary italic">financieel</span> succes.
            </h1>
            <p className="text-xl text-brand-text/70 mb-12 max-w-lg leading-relaxed">
              Wij bieden op maat gemaakte accountancy en fiscaal advies voor ondernemers die waarde hechten aan expertise en een persoonlijke aanpak.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact" className="btn-primary">
                Contact
              </Link>
              <Link to="/diensten" className="btn-outline">
                Onze diensten
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden shadow-2xl">
              <img 
                src="https://img.sanishtech.com/u/1e015e0e331b3bb2b8d3b515aa0b7a7d.jpg" 
                alt="Modern Accounting Office" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-brand-primary p-10 hidden md:block">
              <div className="text-white">
                <div className="text-4xl font-serif font-bold mb-1">15+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-80">Jaren Expertise</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-brand-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-3xl font-serif text-brand-primary mb-2 italic">Persoonlijk</div>
              <p className="text-base text-brand-text/60">Direct contact met uw dossierbeheerder.</p>
            </div>
            <div>
              <div className="text-3xl font-serif text-brand-primary mb-2 italic">Deskundig</div>
              <p className="text-base text-brand-text/60">Altijd op de hoogte van de laatste wetgeving.</p>
            </div>
            <div>
              <div className="text-3xl font-serif text-brand-primary mb-2 italic">Proactief</div>
              <p className="text-base text-brand-text/60">Wij denken mee met de groei van uw zaak.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
