import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { ChevronDown, Quote, Menu, X, Facebook, Twitter, Instagram } from 'lucide-react';

const timelineEvents = [
  { year: '1879', desc: 'Lahir di Jepara, Jawa Tengah, 21 April' },
  { year: '1886', desc: 'Mulai bersekolah di ELS (Europeesche Lagere School)' },
  { year: '1891', desc: 'Dipingit — dikurung di rumah sesuai tradisi Jawa' },
  { year: '1896', desc: 'Mulai korespondensi dengan Estella Zeehandelaar di Belanda' },
  { year: '1903', desc: 'Mendirikan sekolah untuk gadis-gadis Jawa di Jepara' },
  { year: '1904', desc: 'Menikah dengan Bupati Rembang, K.R.M. Adipati Ario Singgih Djojo Adhiningrat' },
  { year: '1904', desc: 'Melahirkan putra pertama dan wafat, 17 September, usia 25 tahun' },
  { year: '1911', desc: 'Surat-surat Kartini diterbitkan sebagai "Door Duisternis tot Licht"' },
];

const galleryItems = [
  { 
    url: 'https://www.image2url.com/r2/default/images/1776756308466-b1029854-90ee-49d6-89ff-d1a832fc1fc0.jpeg',
    title: 'Raden Ajeng Kartini',
    subtitle: 'Pahlawan Emansipasi Wanita Indonesia'
  },
  { 
    url: 'https://www.image2url.com/r2/default/images/1776755969598-242bcf15-660b-48b8-b69b-e3d29ad7fb80.jpeg',
    title: 'Potret Bersejarah',
    subtitle: 'Koleksi Tropenmuseum, Belanda'
  },
  { 
    url: 'https://www.image2url.com/r2/default/images/1776756208288-e146f7fe-4694-4a1a-b8bb-6fda55964ab0.jpeg',
    title: 'R.A. Kartini',
    subtitle: 'Jepara, 1879–1904'
  },
  { 
    url: 'https://images.unsplash.com/photo-1519744346361-7a029b427a59?w=600&q=80',
    title: 'Kebaya Tradisional',
    subtitle: 'Keindahan Busana Jawa'
  },
  { 
    url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80',
    title: 'Perpustakaan & Literasi',
    subtitle: 'Warisan Semangat Pendidikan'
  },
  { 
    url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80',
    title: 'Surat-Surat Kartini',
    subtitle: 'Door Duisternis tot Licht'
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [heroRef, heroVisible] = useIntersectionObserver({ threshold: 0 });
  const [aboutRef, aboutVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [quoteRef, quoteVisible] = useIntersectionObserver({ threshold: 0.3 });
  const [galleryRef, galleryVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [timelineRef, timelineVisible] = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      setOffsetY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden font-sans">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-lg shadow-sm py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className={`font-serif text-2xl font-bold tracking-wider transition-colors duration-500 flex items-center gap-1 ${scrolled ? 'text-foreground' : 'text-white'}`}>
            R.A. Kartini
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block mt-2"></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className={`text-sm font-medium hover:text-accent transition-colors ${scrolled ? 'text-foreground/80' : 'text-white/90'}`}>Tentang</button>
            <button onClick={() => scrollToSection('gallery')} className={`text-sm font-medium hover:text-accent transition-colors ${scrolled ? 'text-foreground/80' : 'text-white/90'}`}>Galeri</button>
            <button onClick={() => scrollToSection('quote')} className={`text-sm font-medium hover:text-accent transition-colors ${scrolled ? 'text-foreground/80' : 'text-white/90'}`}>Kisah</button>
            <button onClick={() => scrollToSection('timeline')} className={`text-sm font-medium hover:text-accent transition-colors ${scrolled ? 'text-foreground/80' : 'text-white/90'}`}>Timeline</button>
          </div>

          <button 
            className={`md:hidden p-2 rounded-md ${scrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background shadow-lg py-4 px-6 flex flex-col gap-4 border-t border-border">
            <button onClick={() => scrollToSection('about')} className="text-left py-2 text-foreground font-medium hover:text-accent">Tentang</button>
            <button onClick={() => scrollToSection('gallery')} className="text-left py-2 text-foreground font-medium hover:text-accent">Galeri</button>
            <button onClick={() => scrollToSection('quote')} className="text-left py-2 text-foreground font-medium hover:text-accent">Kisah</button>
            <button onClick={() => scrollToSection('timeline')} className="text-left py-2 text-foreground font-medium hover:text-accent">Timeline</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef as any}
        className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0 bg-cover"
          style={{
            backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Kartini2.jpg/450px-Kartini2.jpg')`,
            backgroundPosition: 'center top',
            transform: `translateY(${offsetY * 0.3}px)`,
          }}
        >
          <div 
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(20,10,10,0.55) 0%, rgba(20,10,10,0.3) 50%, rgba(20,10,10,0.7) 100%)' }}
          />
        </div>
        
        <div className="relative z-10 text-center px-4 flex flex-col items-center max-w-4xl mx-auto w-full">
          <div className="animate-in fade-in delay-0 mb-6">
            <span className="text-accent text-sm md:text-base font-semibold uppercase tracking-widest tracking-[0.3em]">
              21 April · Hari Kartini
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
            Selamat Hari Kartini
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 italic font-light animate-in fade-in delay-400 mb-12 font-serif">
            "Habis Gelap Terbitlah Terang"
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in delay-500 w-full sm:w-auto px-4 sm:px-0">
            <button 
              onClick={() => scrollToSection('about')}
              className="w-full sm:w-auto px-8 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-foreground transition-all duration-300 transform hover:scale-105 font-medium hero-btn-glow"
            >
              Jelajahi Kisahnya
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-accent text-accent-foreground hover:brightness-110 transition-all duration-300 transform hover:scale-105 font-medium gold-btn-glow border-2 border-accent"
            >
              Lihat Galeri
            </button>
          </div>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors cursor-pointer animate-bounce"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 overflow-hidden bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div ref={aboutRef as any} className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <div className={`w-full md:w-5/12 flex justify-center relative animate-in ${aboutVisible ? 'slide-in-left' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-primary/20 rotate-3 rounded-[24px] -z-10 w-full h-full max-w-[400px] mx-auto" />
              <div className="relative rounded-[24px] overflow-hidden shadow-2xl border-2 border-accent/40 bg-card max-w-[400px] w-full">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Kartini2.jpg/450px-Kartini2.jpg" 
                  alt="Raden Ajeng Kartini" 
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
              </div>
            </div>
            
            <div className={`w-full md:w-7/12 animate-in ${aboutVisible ? 'slide-in-right' : 'opacity-0'}`}>
              <h2 className="text-sm uppercase tracking-[0.2em] text-accent font-bold mb-4">Biografi Singkat</h2>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">Pahlawan Emansipasi Wanita</h3>
              <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
                <p>
                  Lahir pada 21 April 1879 di Jepara, Jawa Tengah, Raden Ajeng Kartini adalah sosok pemikir yang mendobrak tradisi di era kolonial Belanda.
                </p>
                <p>
                  Ia berjuang keras untuk hak pendidikan bagi perempuan yang saat itu sangat dibatasi. Visinya terwujud dengan didirikannya sekolah-sekolah untuk gadis Jawa, memberikan mereka kunci menuju kemerdekaan pikiran.
                </p>
                <p>
                  Melalui korespondensinya dengan teman-teman di Belanda, Kartini menuangkan pemikirannya yang kelak dibukukan dalam karya legendaris <span className="italic font-serif text-foreground">"Door Duisternis tot Licht"</span> (Habis Gelap Terbitlah Terang). Ia wafat di usia yang sangat muda, 25 tahun, namun warisan perjuangannya abadi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="quote" className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, hsl(8 47% 96%), hsl(38 47% 95%))' }}>
        <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
          <div ref={quoteRef as any} className={`animate-in ${quoteVisible ? 'scale-in' : 'opacity-0'} flex flex-col items-center`}>
            <div className="w-[60px] h-[1px] bg-accent mb-12" />
            
            <div className="relative">
              <span className="absolute -top-12 -left-8 font-serif text-8xl text-accent opacity-30 select-none">"</span>
              <blockquote className="font-serif italic text-3xl md:text-4xl leading-relaxed text-foreground mb-12 relative z-10">
                Gadis yang paling baik budinya ialah gadis yang dapat membawa kebahagiaan kepada orang-orang di sekelilingnya.
              </blockquote>
            </div>
            
            <div className="w-[60px] h-[1px] bg-accent mb-8" />
            
            <cite className="block text-sm font-bold text-foreground uppercase tracking-[0.2em] not-italic">
              — Raden Ajeng Kartini
            </cite>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20 flex flex-col items-center">
            <h2 className="text-sm uppercase tracking-[0.2em] text-accent font-bold mb-4">Galeri Visual</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-foreground">Warisan Budaya & Inspirasi</h3>
            <div className="w-12 h-[2px] bg-accent mt-8" />
          </div>
          
          <div ref={galleryRef as any} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, idx) => {
              const delayClass = `delay-${(idx % 6) * 100}`;
              return (
                <div 
                  key={idx} 
                  className={`group relative rounded-[20px] overflow-hidden aspect-[3/4] bg-muted animate-in shadow-lg ${galleryVisible ? 'slide-in-up' : 'opacity-0'} ${delayClass} cursor-pointer`}
                >
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-accent/60 ring-inset rounded-[20px] transition-all duration-500 z-20 pointer-events-none" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex flex-col justify-end">
                    <h4 className="font-serif text-white text-xl mb-1">{item.title}</h4>
                    <p className="font-sans text-white/80 text-sm">{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-32 relative" style={{ background: 'linear-gradient(to bottom, hsl(30 23% 97%), hsl(8 47% 98%))' }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-20 flex flex-col items-center">
            <h2 className="text-sm uppercase tracking-[0.2em] text-accent font-bold mb-4">Perjalanan Waktu</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-foreground">Jejak Langkah Kartini</h3>
            <div className="w-12 h-[2px] bg-accent mt-8" />
          </div>
          
          <div ref={timelineRef as any} className="relative">
            {/* Center line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-accent/30 -translate-x-1/2" />
            {/* Left line for mobile */}
            <div className="md:hidden absolute left-[21px] top-0 bottom-0 w-[2px] bg-accent/30" />
            
            <div className="space-y-12 relative z-10">
              {timelineEvents.map((item, idx) => {
                const isEven = idx % 2 === 0;
                const delayClass = `delay-${(idx % 6) * 100}`;
                return (
                  <div 
                    key={idx} 
                    className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''} animate-in ${timelineVisible ? 'slide-in-up' : 'opacity-0'} ${delayClass}`}
                  >
                    <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'}`}>
                      <div className="glass-card p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                        <span className="bg-accent text-accent-foreground rounded-full px-4 py-1 text-sm font-semibold inline-block mb-4 shadow-sm">
                          {item.year}
                        </span>
                        <p className="text-foreground/90 font-medium text-lg leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    {/* Circle marker */}
                    <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 w-5 h-5 rounded-full bg-accent ring-4 ring-background -translate-y-1/2 -translate-x-1/2 shadow-md z-20" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1c1613] text-[#f8f5f2] py-20 text-center">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <h4 className="font-serif text-3xl mb-6 tracking-wide text-accent">R.A. Kartini</h4>
          <div className="w-[40px] h-[1px] bg-accent/50 mb-8" />
          
          <p className="text-[#f8f5f2]/60 mb-12 max-w-md text-sm md:text-base leading-relaxed font-light">
            21 April — Mengenang perjuangan Raden Ajeng Kartini (1879–1904)
          </p>
          
          <div className="flex gap-6 mb-12 text-[#f8f5f2]/40">
            <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
          </div>

          <p className="text-[#f8f5f2]/40 text-xs tracking-wider uppercase">
            Dibuat dengan <span className="text-red-500/80 mx-1">❤</span> untuk menghormati pahlawan bangsa
          </p>
        </div>
      </footer>
    </div>
  );
}
