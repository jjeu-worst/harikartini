import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { ChevronDown, Quote } from 'lucide-react';

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

const galleryImages = [
  'https://images.unsplash.com/photo-1617195737497-b4ebe4e73d91?w=600&q=80',
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
  'https://images.unsplash.com/photo-1519750783826-e2420f4d687f?w=600&q=80',
  'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80',
  'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&q=80',
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  const [heroRef, heroVisible] = useIntersectionObserver({ threshold: 0 });
  const [aboutRef, aboutVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [quoteRef, quoteVisible] = useIntersectionObserver({ threshold: 0.3 });
  const [galleryRef, galleryVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [timelineRef, timelineVisible] = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setOffsetY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-md shadow-sm py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-center md:justify-start">
          <span className={`font-serif text-2xl font-bold tracking-wider transition-colors duration-500 ${scrolled ? 'text-foreground' : 'text-white'}`}>
            Kartini<span className="text-accent">.</span>
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef as any}
        className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1617195737497-b4ebe4e73d91?w=1920&q=80')`,
            transform: `translateY(${offsetY * 0.4}px)`,
          }}
        >
          <div className="absolute inset-0 bg-black/45" />
        </div>
        
        <div className="relative z-10 text-center px-4 flex flex-col items-center max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-4 animate-in fade-in delay-100" style={{ textShadow: '0 4px 12px rgba(201, 168, 76, 0.4)' }}>
            Selamat Hari Kartini
          </h1>
          <p className="text-xl md:text-2xl text-white/90 italic font-light animate-in fade-in delay-300 mb-12">
            "Habis Gelap Terbitlah Terang"
          </p>
          
          <button 
            onClick={scrollToAbout}
            className="animate-in fade-in delay-500 mt-12 text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-10 h-10 animate-bounce" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 overflow-hidden bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div ref={aboutRef as any} className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <div className={`w-full md:w-5/12 flex justify-center animate-in ${aboutVisible ? 'slide-in-left' : 'opacity-0'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-accent/30 hover:border-accent transition-colors duration-500">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Kartini2.jpg/450px-Kartini2.jpg" 
                  alt="Raden Ajeng Kartini" 
                  className="w-full h-auto max-w-[360px] object-cover"
                />
              </div>
            </div>
            
            <div className={`w-full md:w-7/12 animate-in ${aboutVisible ? 'slide-in-right' : 'opacity-0'}`}>
              <h2 className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Biografi Singkat</h2>
              <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Pahlawan Emansipasi Wanita</h3>
              <div className="space-y-4 text-foreground/80 leading-relaxed text-lg">
                <p>
                  Lahir pada 21 April 1879 di Jepara, Jawa Tengah, Raden Ajeng Kartini adalah sosok pemikir yang mendobrak tradisi di era kolonial Belanda.
                </p>
                <p>
                  Ia berjuang keras untuk hak pendidikan bagi perempuan yang saat itu sangat dibatasi. Visinya terwujud dengan didirikannya sekolah-sekolah untuk gadis Jawa, memberikan mereka kunci menuju kemerdekaan pikiran.
                </p>
                <p>
                  Melalui korespondensinya dengan teman-teman di Belanda, Kartini menuangkan pemikirannya yang kelak dibukukan dalam karya legendaris <span className="italic font-medium">"Door Duisternis tot Licht"</span> (Habis Gelap Terbitlah Terang). Ia wafat di usia yang sangat muda, 25 tahun, namun warisan perjuangannya abadi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-32 relative" style={{ background: 'linear-gradient(135deg, hsl(var(--primary)/0.15) 0%, hsl(var(--background)) 100%)' }}>
        <div className="container mx-auto px-6 max-w-4xl text-center relative">
          <div ref={quoteRef as any} className={`animate-in ${quoteVisible ? 'scale-in' : 'opacity-0'}`}>
            <Quote className="w-16 h-16 md:w-24 md:h-24 mx-auto text-accent/40 mb-8" />
            <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-tight text-foreground mb-8">
              "Gadis yang paling baik budinya ialah gadis yang dapat membawa kebahagiaan kepada orang-orang di sekelilingnya."
            </blockquote>
            <cite className="block text-lg font-medium text-foreground/70 uppercase tracking-widest">
              — Raden Ajeng Kartini
            </cite>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Perjalanan Waktu</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-foreground">Jejak Langkah Kartini</h3>
          </div>
          
          <div ref={timelineRef as any} className="relative">
            {/* Center line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
            {/* Left line for mobile */}
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
            
            <div className="space-y-12 relative z-10">
              {timelineEvents.map((item, idx) => {
                const isEven = idx % 2 === 0;
                const delayClass = `delay-${(idx % 5 + 1) * 100}`;
                return (
                  <div 
                    key={idx} 
                    className={`relative flex flex-col md:flex-row items-center md:items-start ${isEven ? 'md:flex-row-reverse' : ''} animate-in ${timelineVisible ? 'slide-in-up' : 'opacity-0'} ${delayClass}`}
                  >
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                      <div className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
                        <span className="block font-serif text-2xl text-accent font-bold mb-2">{item.year}</span>
                        <p className="text-foreground/80">{item.desc}</p>
                      </div>
                    </div>
                    {/* Circle marker */}
                    <div className="absolute left-4 md:left-1/2 top-6 md:top-8 w-4 h-4 rounded-full bg-accent ring-4 ring-background -translate-x-[7px] md:-translate-x-1/2 shadow-sm" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Galeri Visual</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-foreground">Warisan Budaya & Inspirasi</h3>
          </div>
          
          <div ref={galleryRef as any} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryImages.map((src, idx) => {
              const delayClass = `delay-${(idx % 6 + 1) * 100}`;
              return (
                <div 
                  key={idx} 
                  className={`group relative rounded-xl overflow-hidden aspect-[4/5] bg-muted animate-in ${galleryVisible ? 'scale-in' : 'opacity-0'} ${delayClass} cursor-pointer`}
                >
                  <img 
                    src={src} 
                    alt={`Kartini Inspiration ${idx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/80 transition-colors duration-500 rounded-xl pointer-events-none" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 shadow-[inset_0_0_40px_rgba(0,0,0,0.4)] transition-opacity duration-500 pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a2e] text-[#fdf6ec] py-16 text-center">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <h4 className="font-serif text-3xl mb-4">Selamat Hari Kartini</h4>
          <p className="text-white/70 mb-8 max-w-md text-sm leading-relaxed">
            21 April — Mengenang perjuangan Raden Ajeng Kartini (1879–1904)
          </p>
          <div className="w-16 h-px bg-accent mb-8" />
          <p className="text-white/50 text-sm flex items-center gap-2">
            Dibuat dengan <span className="text-red-500 text-lg">❤</span> untuk menghormati pahlawan bangsa
          </p>
        </div>
      </footer>
    </div>
  );
}
