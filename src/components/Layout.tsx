import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './UI';

interface LayoutProps {
  children: React.ReactNode;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isLightPage = location.pathname === '/services' || location.pathname === '/client-portal';
  const useDarkText = !scrolled && !isOpen && isLightPage;

  const textColorClass = useDarkText ? 'text-navy-900' : 'text-white';
  const hoverColorClass = useDarkText ? 'hover:text-gold-600' : 'hover:text-gold-500';
  const activeLangClass = useDarkText ? 'text-gold-600' : 'text-gold-500';

  const navContent = {
    EN: {
      about: "About",
      services: "Services",
      familyOffice: "Family Office",
      insights: "Insights",
      schedule: "Schedule Consultation"
    },
    PT: {
      about: "Sobre",
      services: "Serviços",
      familyOffice: "Family Office",
      insights: "Insights",
      schedule: "Agendar Consultoria"
    },
    ES: {
      about: "Nosotros",
      services: "Servicios",
      familyOffice: "Family Office",
      insights: "Perspectivas",
      schedule: "Programar Consulta"
    }
  };

  const t = navContent[language];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy-900 shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center relative z-[60]">
          <Link to="/" className={`font-serif text-2xl font-bold tracking-tight transition-colors ${textColorClass}`}>
            IPANEMA <span className={activeLangClass}>PARTNERS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/about" className={`${textColorClass} ${hoverColorClass} transition-colors text-sm font-sans font-medium`}>{t.about}</Link>
            <Link to="/services" className={`${textColorClass} ${hoverColorClass} transition-colors text-sm font-sans font-medium`}>{t.services}</Link>
            <Link to="/family-office" className={`${textColorClass} ${hoverColorClass} transition-colors text-sm font-sans font-medium`}>{t.familyOffice}</Link>
            <Link to="/insights" className={`${textColorClass} ${hoverColorClass} transition-colors text-sm font-sans font-medium`}>{t.insights}</Link>
            
            <div className={`h-6 w-px mx-2 ${useDarkText ? 'bg-navy-900/20' : 'bg-white/20'}`}></div>
            
            <div className={`flex items-center gap-3 text-xs font-bold ${textColorClass}`}>
              {(['EN', 'PT', 'ES'] as const).map((lang) => (
                <button 
                  key={lang}
                  onClick={() => setLanguage(lang)} 
                  className={language === lang ? activeLangClass : hoverColorClass}
                >
                  {lang}
                </button>
              ))}
            </div>

            <Link to="/schedule-consultation">
               <Button variant={useDarkText ? 'primary' : 'secondary'} className="px-6 py-2 text-xs">{t.schedule}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden transition-colors ${textColorClass} ${hoverColorClass}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-navy-900 flex flex-col">
          {/* Internal Mobile Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
             <Link to="/" className="font-serif text-2xl font-bold tracking-tight text-white">
                IPANEMA <span className="text-gold-500">PARTNERS</span>
              </Link>
             <button onClick={() => setIsOpen(false)} className="text-white hover:text-gold-500 transition-colors">
               <X size={24} />
             </button>
          </div>

          <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col">
            <div className="flex flex-col gap-6 mb-8">
              <Link to="/about" className="text-white text-xl font-serif hover:text-gold-500 transition-colors">{t.about}</Link>
              <Link to="/services" className="text-white text-xl font-serif hover:text-gold-500 transition-colors">{t.services}</Link>
              <Link to="/family-office" className="text-white text-xl font-serif hover:text-gold-500 transition-colors">{t.familyOffice}</Link>
              <Link to="/insights" className="text-white text-xl font-serif hover:text-gold-500 transition-colors">{t.insights}</Link>
              <Link to="/schedule-consultation" className="text-gold-500 text-xl font-serif">{t.schedule}</Link>
            </div>
            
            <div className="mt-auto border-t border-white/10 pt-8 pb-12">
               <div className="flex gap-6 justify-center mb-8">
                {(['EN', 'PT', 'ES'] as const).map((lang) => (
                  <button 
                    key={lang}
                    onClick={() => setLanguage(lang)} 
                    className={`text-lg font-bold ${language === lang ? 'text-gold-500' : 'text-white'}`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              <Link to="/client-portal">
                 <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-navy-900">Client Portal</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Footer: React.FC = () => {
  const { language } = useLanguage();

  const footerContent = {
    EN: {
      tagline: "Jurisdiction-agnostic wealth structuring and cross-border advisory for entrepreneurs, investors, and family offices.",
      locations: "Miami • London • Dubai • São Paulo",
      servicesTitle: "Services",
      companyTitle: "Company",
      services: [
        "Corporate Structuring",
        "Tax Optimization",
        "Asset Protection",
        "Citizenship & Residency"
      ],
      company: [
        "About Us",
        "Insights",
        "Contact",
        "Privacy Policy",
        "Terms of Service"
      ],
      rights: "All rights reserved.",
      portal: "Client Portal"
    },
    PT: {
      tagline: "Estruturação patrimonial independente de jurisdição e consultoria transfronteiriça para empreendedores, investidores e family offices.",
      locations: "Miami • Londres • Dubai • São Paulo",
      servicesTitle: "Serviços",
      companyTitle: "Empresa",
      services: [
        "Estruturação Corporativa",
        "Otimização Fiscal",
        "Proteção Patrimonial",
        "Cidadania e Residência"
      ],
      company: [
        "Sobre Nós",
        "Insights",
        "Contato",
        "Política de Privacidade",
        "Termos de Uso"
      ],
      rights: "Todos os direitos reservados.",
      portal: "Portal do Cliente"
    },
    ES: {
      tagline: "Estructuración patrimonial independiente de la jurisdicción y asesoramiento transfronterizo para emprendedores, inversores y family offices.",
      locations: "Miami • Londres • Dubái • São Paulo",
      servicesTitle: "Servicios",
      companyTitle: "Empresa",
      services: [
        "Estructuración Corporativa",
        "Optimización Fiscal",
        "Protección de Activos",
        "Ciudadanía y Residencia"
      ],
      company: [
        "Sobre Nosotros",
        "Perspectivas",
        "Contacto",
        "Política de Privacidad",
        "Términos de Servicio"
      ],
      rights: "Todos los derechos reservados.",
      portal: "Portal de Clientes"
    }
  };

  const t = footerContent[language];

  return (
    <footer className="bg-navy-900 text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="">
            <Link to="/" className="font-serif text-2xl font-bold tracking-tight text-white mb-6 block">
              IPANEMA <span className="text-gold-500">PARTNERS</span>
            </Link>
            <p className="text-slate-400 font-sans max-w-sm leading-relaxed mb-6">
              {t.tagline}
            </p>
            <div className="text-sm text-slate-500">
               <p>{t.locations}</p>
            </div>
          </div>

          {/* Services Column - Hidden based on request, or reinstated? Prompt said remove. I will respect the removal and just keep company/about cols if any, or adjust layout. 
              Wait, previous prompt removed services column. I will keep it removed and follow existing Layout.tsx structure which has 3 cols.
          */}
          
          <div className="md:col-span-2 flex flex-col md:flex-row gap-12 justify-end">
            {/* Re-adding Services list for navigation but maybe user wanted it gone? 
                The prompt "remove this section from all pages in bottom menu" referred to Services.
                But the Translation request mentions translating "Footer content".
                I will stick to the previous Layout state which removed the services column.
            */}
            
            <div>
              <h4 className="font-sans font-bold text-gold-500 text-xs tracking-widest uppercase mb-6">{t.companyTitle}</h4>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors text-sm">{t.company[0]}</Link></li>
                <li><Link to="/insights" className="text-slate-300 hover:text-white transition-colors text-sm">{t.company[1]}</Link></li>
                <li><Link to="/schedule-consultation" className="text-slate-300 hover:text-white transition-colors text-sm">{t.company[2]}</Link></li>
                <li><Link to="/privacy-policy" className="text-slate-300 hover:text-white transition-colors text-sm">{t.company[3]}</Link></li>
                <li><Link to="/terms-of-service" className="text-slate-300 hover:text-white transition-colors text-sm">{t.company[4]}</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Ipanema Partners. {t.rights}</p>
          <Link to="/client-portal" className="text-xs text-slate-500 hover:text-white transition-colors uppercase tracking-widest font-bold">{t.portal}</Link>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
