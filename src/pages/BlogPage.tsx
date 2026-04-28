import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { blogs } from '../data/blogs';

interface BlogCardProps {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  delay: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, slug, excerpt, date, author, image, category, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="group bg-white border border-brand-section overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col h-full"
  >
    <Link to={`/blogs/${slug}`} className="block aspect-[16/9] overflow-hidden relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 left-4">
        <span className="bg-white/90 backdrop-blur-sm text-brand-primary px-3 py-1 text-[10px] uppercase tracking-widest font-bold shadow-sm">
          {category}
        </span>
      </div>
    </Link>
    <div className="p-8 flex flex-col flex-1">
      <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-brand-text/40 mb-4 font-medium">
        <span className="flex items-center gap-1.5"><Calendar size={12} /> {date}</span>
      </div>
      <Link to={`/blogs/${slug}`}>
        <h3 className="text-2xl font-serif font-medium mb-4 text-brand-text group-hover:text-brand-primary transition-colors line-clamp-2 leading-snug">{title}</h3>
      </Link>
      <p className="text-brand-text/70 leading-relaxed text-base mb-8 line-clamp-3 font-light italic">
        "{excerpt}"
      </p>
      <div className="mt-auto pt-6 border-t border-brand-section flex items-center justify-between">
        <Link to={`/blogs/${slug}`} className="flex items-center gap-2 text-brand-primary font-bold text-[10px] uppercase tracking-widest cursor-pointer group-hover:gap-3 transition-all">
          Lees meer <ArrowRight size={14} />
        </Link>
        <span className="text-[10px] text-brand-text/30 font-medium uppercase tracking-widest">5 min leestijd</span>
      </div>
    </div>
  </motion.div>
);

export const BlogPage = () => {
  return (
    <div className="pt-32">
      <Helmet>
        <title>Blog & Insights | ES Accountancy - Financieel Advies</title>
        <meta name="description" content="Blijf op de hoogte van de laatste fiscale nieuwtjes, tips voor ondernemers en insights uit de accountancy wereld." />
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
              Insights & Expertise
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-brand-text mb-8">
              Onze Blog
            </h1>
            <p className="text-xl text-brand-text/70 max-w-2xl leading-relaxed">
              Wij delen onze kennis en expertise om u te helpen navigeren door de complexe wereld van wetgeving en fiscaliteit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogs.map((blog, index) => (
              <BlogCard 
                key={index} 
                {...blog}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 italic">Wilt u meer weten over een specifiek onderwerp?</h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Neem vrijblijvend contact met ons op voor een persoonlijk gesprek over uw specifiek dossier.
          </p>
          <Link to="/contact" className="inline-block bg-white text-brand-primary px-10 py-5 text-xs uppercase tracking-widest font-bold hover:bg-brand-section transition-colors">
            Stel uw vraag
          </Link>
        </div>
      </section>
    </div>
  );
};
