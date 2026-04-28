import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, ChevronRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { blogs } from '../data/blogs';

export const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const blog = blogs.find(b => b.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-6">Blogpost niet gevonden</h1>
          <Link to="/blogs" className="text-brand-primary font-medium hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={18} /> Terug naar overzicht
          </Link>
        </div>
      </div>
    );
  }

  const otherBlogs = blogs.filter(b => b.slug !== slug).slice(0, 2);

  return (
    <div className="pt-24 md:pt-32">
      <Helmet>
        <title>{blog.title} | ES Accountancy</title>
        <meta name="description" content={blog.excerpt} />
      </Helmet>

      <article>
        {/* Article Header */}
        <header className="bg-brand-section py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link to="/blogs" className="flex items-center gap-2 text-brand-primary text-xs uppercase tracking-widest font-bold mb-12 hover:gap-3 transition-all">
                <ArrowLeft size={14} /> Terug naar overzicht
              </Link>
              
              <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-brand-text/50 mb-6">
                <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full">{blog.category}</span>
                <span className="flex items-center gap-1.5"><Calendar size={14} /> {blog.date}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-serif font-medium text-brand-text leading-tight mb-8">
                {blog.title}
              </h1>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-bold">
                  {blog.author.charAt(0)}
                </div>
                <div>
                  <div className="text-brand-text font-serif font-medium">{blog.author}</div>
                  <div className="text-xs text-brand-text/40 uppercase tracking-widest">Accountant & Adviseur</div>
                </div>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 -mt-10 md:-mt-20 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[21/9] overflow-hidden shadow-2xl"
          >
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 mb-24">
          <div className="prose prose-lg lg:prose-xl prose-zinc max-w-none prose-headings:font-serif prose-headings:font-medium prose-headings:text-brand-text prose-p:text-brand-text/80 prose-p:leading-relaxed prose-a:text-brand-primary prose-strong:text-brand-text prose-img:rounded-xl">
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>
          
          <div className="mt-20 pt-12 border-t border-brand-section flex flex-wrap gap-8 items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-xs uppercase tracking-widest text-brand-text/40 font-bold">Deel dit artikel:</span>
              <div className="flex gap-4">
                <button className="w-10 h-10 flex items-center justify-center border border-brand-section hover:bg-brand-primary hover:text-white transition-all text-xs font-bold">LI</button>
                <button className="w-10 h-10 flex items-center justify-center border border-brand-section hover:bg-brand-primary hover:text-white transition-all text-xs font-bold">FB</button>
                <button className="w-10 h-10 flex items-center justify-center border border-brand-section hover:bg-brand-primary hover:text-white transition-all text-xs font-bold">X</button>
              </div>
            </div>
            <Link to="/contact" className="text-brand-primary font-bold text-sm underline underline-offset-8 decoration-brand-primary/30 hover:decoration-brand-primary transition-all">
              Heeft u vragen over dit onderwerp? Contacteer ons.
            </Link>
          </div>
        </div>
      </article>

      {/* Suggested Reading */}
      <section className="bg-brand-section py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-brand-text mb-4">Gerelateerde artikels</h2>
              <p className="text-brand-text/60">Ontdek meer inzichten van ES Accountancy.</p>
            </div>
            <Link to="/blogs" className="hidden md:flex items-center gap-2 text-brand-primary text-xs uppercase tracking-widest font-bold hover:gap-3 transition-all">
              Bekijk alles <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {otherBlogs.map((other, idx) => (
              <Link key={idx} to={`/blogs/${other.slug}`} className="group block">
                <div className="aspect-[16/9] overflow-hidden mb-6">
                  <img 
                    src={other.image} 
                    alt={other.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-brand-text/40 mb-4">
                  <span>{other.category}</span>
                  <span>{other.date}</span>
                </div>
                <h3 className="text-2xl font-serif font-medium text-brand-text group-hover:text-brand-primary transition-colors">{other.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
