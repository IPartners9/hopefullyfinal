import React from 'react';
import { Section, Button, Card } from '@/components/UI';
import { Shield, Users, Globe, Building2, FileText, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const FamilyOffice: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      heroTitle: <>Institutional Infrastructure for <span className="text-gold-500">Multi-Generational Wealth</span></>,
      heroSubtitle: "Dedicated family office advisory for sophisticated wealth management, governance, and global compliance.",
      heroBtn1: "Visit Our Family Office Practice",
      heroBtn2: "Learn More",
      whyTitle: "Why We Built a Dedicated Practice",
      whyBody1: "Managing a family office requires institutional-grade infrastructure, specialized expertise, and proactive compliance oversight that goes far beyond traditional wealth advisory. The complexity of multi-jurisdictional holdings, consolidated reporting requirements, and multi-generational governance demands a different approach entirely.",
      whyBody2: "That's why we've built a dedicated practice exclusively for family offices and ultra-high-net-worth families managing significant global wealth. Our specialized team provides the technical infrastructure, regulatory expertise, and strategic partnership that family offices require to operate with confidence across borders.",
      ecoTitle: "The Family Office Ecosystem",
      ecoSubtitle: "We operate as a silent, efficient engine within your broader advisory network. We do not replace your trusted legal counsel or tax advisors; we execute their strategies with precision.",
      ecoItems: [
        { title: "Uncompromising Privacy", desc: "Confidentiality is paramount. We utilize robust legal structures and nominee services to protect family privacy while maintaining full regulatory compliance." },
        { title: "Advisor Collaboration", desc: "We integrate directly with your existing tax and legal teams, ensuring that our implementation matches their architectural blueprints perfectly." },
        { title: "Generational Outlook", desc: "Our structures are built to endure. We plan for succession, governance transitions, and the long-term stewardship of family assets." }
      ],
      servicesTitle: "Dedicated Private Client Services",
      services: [
        { title: "Cross-Border Tax Planning", desc: "Optimizing tax efficiency across multiple jurisdictions for families with global assets." },
        { title: "Luxury Asset Structuring", desc: "Specialized holding structures for yachts, aircraft, and art collections." },
        { title: "Deal-Specific SPVs", desc: "Rapid deployment of Special Purpose Vehicles for direct private equity investments." },
        { title: "Philanthropic Foundations", desc: "Establishing charitable entities that align family values with tax efficiency." },
        { title: "Governance Frameworks", desc: "Creating family charters and constitutions to manage decision-making." },
        { title: "Residency & Citizenship", desc: "Strategic mobility planning for all family members." }
      ],
      ctaTitle: "Ready to Explore Our Family Office Practice?",
      ctaBody: "Our dedicated family office services are designed for multi-generational families and established family offices with complex global holdings.",
      ctaBtn1: "Visit Family Office Site",
      ctaBtn2: "Schedule Consultation"
    },
    PT: {
      heroTitle: <>Infraestrutura Institucional para <span className="text-gold-500">Riqueza Multigeracional</span></>,
      heroSubtitle: "Assessoria dedicada a family offices para gestão de patrimônio sofisticada, governança e conformidade global.",
      heroBtn1: "Visite Nossa Prática de Family Office",
      heroBtn2: "Saiba Mais",
      whyTitle: "Por Que Criamos uma Prática Dedicada",
      whyBody1: "Gerenciar um family office requer infraestrutura de nível institucional, expertise especializada e supervisão de conformidade proativa que vai muito além da assessoria patrimonial tradicional. A complexidade de holdings multijurisdicionais, requisitos de relatórios consolidados e governança multigeracional exige uma abordagem totalmente diferente.",
      whyBody2: "É por isso que construímos uma prática dedicada exclusivamente para family offices e famílias de ultra-alta renda gerenciando riqueza global significativa. Nossa equipe especializada fornece a infraestrutura técnica, expertise regulatória e parceria estratégica que os family offices exigem para operar com confiança além-fronteiras.",
      ecoTitle: "O Ecossistema de Family Office",
      ecoSubtitle: "Operamos como um motor silencioso e eficiente dentro de sua rede consultiva mais ampla. Não substituímos seus advogados ou consultores fiscais de confiança; executamos suas estratégias com precisão.",
      ecoItems: [
        { title: "Privacidade Intransigente", desc: "Confidencialidade é fundamental. Utilizamos estruturas legais robustas e serviços de nomeação para proteger a privacidade familiar mantendo total conformidade regulatória." },
        { title: "Colaboração com Consultores", desc: "Integramos diretamente com suas equipes fiscais e jurídicas existentes, garantindo que nossa implementação corresponda perfeitamente aos seus projetos arquitetônicos." },
        { title: "Visão Geracional", desc: "Nossas estruturas são construídas para durar. Planejamos sucessão, transições de governança e a administração de longo prazo dos ativos familiares." }
      ],
      servicesTitle: "Serviços Dedicados a Clientes Privados",
      services: [
        { title: "Planejamento Fiscal Transfronteiriço", desc: "Otimizando eficiência fiscal através de múltiplas jurisdições para famílias com ativos globais." },
        { title: "Estruturação de Ativos de Luxo", desc: "Estruturas de holding especializadas para iates, aeronaves e coleções de arte." },
        { title: "SPVs para Negócios Específicos", desc: "Implantação rápida de Veículos de Propósito Especial para investimentos diretos de private equity." },
        { title: "Fundações Filantrópicas", desc: "Estabelecendo entidades de caridade que alinham valores familiares com eficiência fiscal." },
        { title: "Quadros de Governança", desc: "Criando cartas e constituições familiares para gerenciar a tomada de decisões." },
        { title: "Residência e Cidadania", desc: "Planejamento estratégico de mobilidade para todos os membros da família." }
      ],
      ctaTitle: "Pronto para Explorar Nossa Prática de Family Office?",
      ctaBody: "Nossos serviços dedicados a family office são projetados para famílias multigeracionais e escritórios familiares estabelecidos com holdings globais complexas.",
      ctaBtn1: "Visite o Site de Family Office",
      ctaBtn2: "Agendar Consultoria"
    },
    ES: {
      heroTitle: <>Infraestructura Institucional para <span className="text-gold-500">Riqueza Multigeneracional</span></>,
      heroSubtitle: "Asesoría dedicada a family office para gestión patrimonial sofisticada, gobernanza y cumplimiento global.",
      heroBtn1: "Visite Nuestra Práctica de Family Office",
      heroBtn2: "Aprenda Más",
      whyTitle: "Por Qué Creamos una Práctica Dedicada",
      whyBody1: "Gestionar un family office requiere infraestructura de nivel institucional, experiencia especializada y supervisión de cumplimiento proactiva que va mucho más allá de la asesoría patrimonial tradicional. La complejidad de holdings multijurisdiccionales, requisitos de informes consolidados y gobernanza multigeneracional exige un enfoque totalmente diferente.",
      whyBody2: "Por eso hemos construido una práctica dedicada exclusivamente para family offices y familias de ultra alto patrimonio gestionando riqueza global significativa. Nuestro equipo especializado proporciona la infraestructura técnica, experiencia regulatoria y asociación estratégica que los family offices requieren para operar con confianza a través de las fronteras.",
      ecoTitle: "El Ecosistema de Family Office",
      ecoSubtitle: "Operamos como un motor silencioso y eficiente dentro de su red de asesores más amplia. No reemplazamos a sus abogados o asesores fiscales de confianza; ejecutamos sus estrategias con precisión.",
      ecoItems: [
        { title: "Privacidad Intransigente", desc: "La confidencialidad es primordial. Utilizamos estructuras legales robustas y servicios de nominados para proteger la privacidad familiar manteniendo total cumplimiento regulatorio." },
        { title: "Colaboración con Asesores", desc: "Nos integramos directamente con sus equipos fiscales y legales existentes, asegurando que nuestra implementación coincida perfectamente con sus planos arquitectónicos." },
        { title: "Visión Generacional", desc: "Nuestras estructuras están construidas para perdurar. Planificamos la sucesión, transiciones de gobernanza y la administración a largo plazo de los activos familiares." }
      ],
      servicesTitle: "Servicios Dedicados a Clientes Privados",
      services: [
        { title: "Planificación Fiscal Transfronteriza", desc: "Optimizando eficiencia fiscal a través de múltiples jurisdicciones para familias con activos globales." },
        { title: "Estructuración de Activos de Lujo", desc: "Estructuras de holding especializadas para yates, aeronaves y colecciones de arte." },
        { title: "SPVs para Negocios Específicos", desc: "Despliegue rápido de Vehículos de Propósito Especial para inversiones directas de capital privado." },
        { title: "Fundaciones Filantrópicas", desc: "Estableciendo entidades benéficas que alinean valores familiares con eficiencia fiscal." },
        { title: "Marcos de Gobernanza", desc: "Creando cartas y constituciones familiares para gestionar la toma de decisiones." },
        { title: "Residencia y Ciudadanía", desc: "Planificación estratégica de movilidad para todos los miembros de la familia." }
      ],
      ctaTitle: "¿Listo para Explorar Nuestra Práctica de Family Office?",
      ctaBody: "Nuestros servicios dedicados a family office están diseñados para familias multigeneracionales y oficinas familiares establecidas con holdings globales complejos.",
      ctaBtn1: "Visite el Sitio de Family Office",
      ctaBtn2: "Programar Consulta"
    }
  };

  const t = content[language];

  return (
    <>
      {/* Hero */}
      <div className="relative h-[80vh] flex items-center">
         <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&random=10" 
            alt="Family Office Architecture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/80 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
            {t.heroTitle}
          </h1>
          <p className="text-xl text-slate-200 mb-10 font-sans font-light">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary">{t.heroBtn1}</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900">{t.heroBtn2}</Button>
          </div>
        </div>
      </div>

      {/* Why We Built This */}
      <Section className="bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-serif text-3xl text-navy-900 font-bold mb-8">{t.whyTitle}</h2>
          <p className="text-slate-600 font-sans text-lg leading-relaxed mb-6">
            {t.whyBody1}
          </p>
          <p className="text-slate-600 font-sans text-lg leading-relaxed">
            {t.whyBody2}
          </p>
        </div>
      </Section>

      {/* Ecosystem */}
      <Section className="bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl text-navy-900 font-bold mb-4">{t.ecoTitle}</h2>
            <p className="text-slate-600 font-sans">{t.ecoSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 shadow-sm border-t-4 border-navy-900">
              <Shield className="text-gold-600 mb-6" size={40} />
              <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4">{t.ecoItems[0].title}</h3>
              <p className="text-slate-600 font-sans">{t.ecoItems[0].desc}</p>
            </div>
             <div className="bg-white p-10 shadow-sm border-t-4 border-navy-900">
              <Users className="text-gold-600 mb-6" size={40} />
              <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4">{t.ecoItems[1].title}</h3>
              <p className="text-slate-600 font-sans">{t.ecoItems[1].desc}</p>
            </div>
             <div className="bg-white p-10 shadow-sm border-t-4 border-navy-900">
              <Globe className="text-gold-600 mb-6" size={40} />
              <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4">{t.ecoItems[2].title}</h3>
              <p className="text-slate-600 font-sans">{t.ecoItems[2].desc}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Dedicated Services */}
      <Section className="bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl text-navy-900 font-bold text-center mb-16">{t.servicesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title={t.services[0].title} description={t.services[0].desc} icon={<Globe />} />
            <Card title={t.services[1].title} description={t.services[1].desc} icon={<Building2 />} />
            <Card title={t.services[2].title} description={t.services[2].desc} icon={<FileText />} />
            <Card title={t.services[3].title} description={t.services[3].desc} icon={<Heart />} />
            <Card title={t.services[4].title} description={t.services[4].desc} icon={<Users />} />
            <Card title={t.services[5].title} description={t.services[5].desc} icon={<Shield />} />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <div className="bg-navy-900 py-24 text-white border-b-8 border-gold-600">
        <div className="container mx-auto px-6 text-center">
           <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">{t.ctaTitle}</h2>
           <p className="text-slate-300 font-sans text-lg mb-10 max-w-2xl mx-auto">{t.ctaBody}</p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="secondary">{t.ctaBtn1}</Button>
            <Link to="/schedule-consultation">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900">{t.ctaBtn2}</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FamilyOffice;
