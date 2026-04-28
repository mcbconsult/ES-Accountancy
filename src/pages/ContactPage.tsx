import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle2, Send, Clock } from 'lucide-react';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Algemene vraag',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Vul a.u.b. alle verplichte velden in.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: 'Algemene vraag', message: '' });
    } catch (err) {
      setError('Er is iets misgegaan. Probeer het later opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32">
      <Helmet>
        <title>Contact | ES Accountancy - Maak een Afspraak</title>
        <meta name="description" content="Neem contact met ons op voor een vrijblijvend gesprek. Wij helpen u graag verder met uw boekhouding en belastingen." />
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
              Laten we kennismaken
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-brand-text mb-8">
              Contacteer ons
            </h1>
            <p className="text-xl text-brand-text/70 max-w-2xl leading-relaxed">
              Heeft u een vraag of wilt u een afspraak maken? Wij staan voor u klaar om u verder te helpen met uw financiële vraagstukken.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-serif font-medium mb-8 text-brand-text">Contactgegevens</h2>
              <p className="text-brand-text/60 mb-12 leading-relaxed text-base">
                U kunt ons bereiken via onderstaande gegevens of door het contactformulier in te vullen.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 border border-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-brand-text/40 mb-1">Email</div>
                    <div className="text-brand-text font-medium">info@esaccountancy.be</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 border border-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-brand-text/40 mb-1">Telefoon</div>
                    <div className="text-brand-text font-medium">015/61.52.99</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 border border-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-brand-text/40 mb-1">Adres</div>
                    <div className="text-brand-text font-medium">Martelarenplein 3, 1980 Eppegem</div>
                  </div>
                </div>

                <div className="pt-8 border-t border-brand-section">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 border border-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shrink-0">
                      <Clock size={20} />
                    </div>
                    <div className="w-full">
                      <div className="text-[10px] uppercase tracking-widest text-brand-text/40 mb-4">Openingsuren</div>
                      <div className="space-y-2 text-base text-brand-text">
                        <div className="flex justify-between border-b border-brand-section pb-1">
                          <span className="font-medium">Maandag</span>
                          <span className="text-brand-text/70">8:30 – 17:00</span>
                        </div>
                        <div className="flex justify-between border-b border-brand-section pb-1">
                          <span className="font-medium">Dinsdag</span>
                          <span className="text-brand-text/70">8:30 – 17:00</span>
                        </div>
                        <div className="flex justify-between border-b border-brand-section pb-1">
                          <span className="font-medium">Woensdag</span>
                          <span className="text-brand-text/70">8:30 – 12:00</span>
                        </div>
                        <div className="flex justify-between border-b border-brand-section pb-1">
                          <span className="font-medium">Donderdag</span>
                          <span className="text-brand-text/70">8:30 – 17:00</span>
                        </div>
                        <div className="flex justify-between border-b border-brand-section pb-1">
                          <span className="font-medium">Vrijdag</span>
                          <span className="text-brand-text/70">8:30 – 12:00</span>
                        </div>
                        <div className="flex justify-between pt-1">
                          <span className="font-medium italic">Zaterdag & Zondag</span>
                          <span className="text-brand-primary font-medium italic">Gesloten</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-brand-section p-12 md:p-16 shadow-sm relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="grid md:grid-cols-2 gap-8"
                  >
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-semibold text-brand-text/40">Naam *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border-b border-brand-primary/20 bg-transparent py-3 focus:border-brand-primary outline-none transition-colors" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-semibold text-brand-text/40">Email *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border-b border-brand-primary/20 bg-transparent py-3 focus:border-brand-primary outline-none transition-colors" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-semibold text-brand-text/40">Telefoon</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border-b border-brand-primary/20 bg-transparent py-3 focus:border-brand-primary outline-none transition-colors" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-semibold text-brand-text/40">Onderwerp</label>
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full border-b border-brand-primary/20 bg-transparent py-3 focus:border-brand-primary outline-none transition-colors cursor-pointer"
                      >
                        <option value="Algemene vraag">Algemene vraag</option>
                        <option value="Afspraak maken">Afspraak maken</option>
                        <option value="Offerte aanvraag">Offerte aanvraag</option>
                        <option value="Startersadvies">Startersadvies</option>
                      </select>
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-xs uppercase tracking-widest font-semibold text-brand-text/40">Bericht *</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6} 
                        className="w-full border-b border-brand-primary/20 bg-transparent py-3 focus:border-brand-primary outline-none transition-colors resize-none"
                      ></textarea>
                    </div>
                    
                    {error && (
                      <div className="md:col-span-2 text-red-500 text-xs font-medium italic">
                        {error}
                      </div>
                    )}

                    <div className="md:col-span-2 pt-6">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`btn-primary w-full md:w-auto flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Versturen...
                          </>
                        ) : (
                          <>
                            Bericht versturen
                            <Send size={16} />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-20 h-20 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mb-8">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-serif font-medium text-brand-text mb-4">Bedankt voor uw bericht!</h3>
                    <p className="text-brand-text/60 max-w-md mb-10">
                      Wij hebben uw aanvraag goed ontvangen en nemen zo snel mogelijk contact met u op.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-brand-primary font-bold text-xs uppercase tracking-widest hover:underline"
                    >
                      Nieuw bericht sturen
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] relative overflow-hidden group">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.905470356747!2d4.450111176884638!3d50.98094437169722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3e14f6b5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sMartelarenplein%203%2C%201980%20Zemst!5e0!3m2!1snl!2sbe!4v1711880000000!5m2!1snl!2sbe"
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="ES Accountancy Locatie"
          className="hover:filter-none transition-all duration-700"
        ></iframe>
        <div className="absolute bottom-10 left-10 z-20 pointer-events-none">
          <div className="bg-white p-8 shadow-2xl border border-brand-section">
            <div className="text-brand-primary mb-2">
              <MapPin size={32} />
            </div>
            <div className="text-brand-text font-serif font-bold mb-1">ES Accountancy</div>
            <div className="text-[10px] uppercase tracking-widest text-brand-text/40">Martelarenplein 3, 1980 Eppegem</div>
          </div>
        </div>
      </section>
    </div>
  );
};
