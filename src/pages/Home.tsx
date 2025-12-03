import React from 'react';
import { Section, Button, Card } from '@/components/UI';
import { Briefcase, Globe, Shield, User, Anchor, TrendingUp, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Home: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      heroTitle: <>Structuring Wealth, <br /><span className="italic font-light">Securing Sovereignty.</span></>,
      heroBody: "From startup founders to established family offices, we deliver the cross-border infrastructure to legally reduce taxes, diversify wealth, and access global opportunities.",
      heroBtnPrimary: "Schedule Consultation",
      heroBtnSecondary: "Explore Solutions",
      whoWeServeTitle: "Who We Serve",
      clients: [
        {
          label: "BUSINESS OWNERS & E-COMMERCE",
          title: "Global Entrepreneurs",
          desc: "For founders scaling beyond borders. We bridge revenue growth with optimal tax positioning. From entity structuring to cross-border compliance, we ensure your global expansion avoids unnecessary tax drag.",
          tags: ["Corporate Structuring", "Tax Optimization"]
        },
        {
          label: "HIGH-NET-WORTH INDIVIDUALS",
          title: "Private Investors",
          desc: "Protect capital and maximize returns. We build the infrastructure to insulate assets, optimize investment taxation, and access exclusive opportunities. We create structures that preserve and grow your wealth.",
          tags: ["Asset Protection", "Privacy Structures"]
        },
        {
          label: "INSTITUTIONAL WEALTH",
          title: "Family Offices",
          desc: "Institutional infrastructure for multi-generational wealth. We handle governance, regulatory compliance, and consolidated reporting. We provide the structural foundation allowing you to focus on strategy.",
          tags: ["Regulatory Compliance", "Trust Formation"]
        },
        {
          label: "MOBILE LIFESTYLE",
          title: "Sovereign Individuals",
          desc: "Freedom of movement and capital. We facilitate residency, citizenship, and international banking. We build the framework supporting living, working, and investing anywhere in the world.",
          tags: ["Residency by Investment", "Citizenship"]
        }
      ],
      infraTitle: "Infrastructure & Solutions",
      infraBody: "We engineer outcomes. Our four core pillars provide the stability required for global growth.",
      seeServices: "See all services",
      services: [
        {
          label: "FOUNDATION",
          title: "Corporate & Tax Structuring",
          desc: "Strategic entity formation to maximize operational freedom and minimize global tax burden. We build frameworks ensuring your structure remains agile while maintaining full compliance."
        },
        {
          label: "MOBILITY",
          title: "Personal Sovereignty",
          desc: "Secure residency and citizenship in nations aligning with your goals. We help you design a life unconstrained by a single jurisdiction through strategic relocation."
        },
        {
          label: "PROTECTION",
          title: "Asset Protection & Privacy",
          desc: "Navigating global regulations to ensure your structures remain resilient. We monitor changes in real-time to mitigate risk while maintaining the privacy you require."
        },
        {
          label: "PRESERVATION",
          title: "Legacy & Succession",
          desc: "Secure multi-generational wealth. Use sophisticated trust structures for tax-efficient transfer and bulletproof protection, ensuring your legacy endures beyond your lifetime."
        }
      ],
      readMore: "Read more",
      missionLabel: "Our Mission",
      missionTitle: "Architect Your Financial Sovereignty",
      missionBody: "You need a strategic partner who understands global wealth structuring from every angle. Most advisors understand one jurisdiction; we understand how they interact. With decades of experience spanning the Americas, Europe, and the Middle East, we design jurisdiction-agnostic solutions based on your specific situation and goals, not our geographic limitations.",
      approachTitle: "Our Approach",
      pillars: [
        {
          label: "Foundation",
          title: "Strategic Structuring",
          desc: "Strategic entity formation and jurisdiction selection designed to maximize operational freedom and minimize global tax exposure."
        },
        {
          label: "Growth",
          title: "Tax Optimization",
          desc: "We optimize your global tax position to ensure maximum capital availability for scaling. We structure operations to legally minimize effective rates."
        },
        {
          label: "Protection",
          title: "Asset Defense",
          desc: "Wealth attracts risk. We create multilayered defensive structures using trusts to place assets beyond the reach of threats while maintaining control."
        },
        {
          label: "Mobility",
          title: "Global Freedom",
          desc: "True wealth means choice. We facilitate residency, citizenship, and international banking, turning geographic freedom from aspiration into reality."
        }
      ],
      ctaTitle: <>Work with specialists who understand <span className="italic text-gold-600">both sides</span> of the border.</>,
      ctaBody: "If you're ready for sophisticated cross-border structuring with a true strategic partner, let's discuss whether we're the right fit.",
      ctaButton: "Schedule Consultation"
    },
    PT: {
      heroTitle: <>Estruturando Patrimônio, <br /><span className="italic font-light">Garantindo Soberania.</span></>,
      heroBody: "De fundadores de startups a family offices estabelecidos, entregamos a infraestrutura transfronteiriça para reduzir legalmente impostos, diversificar patrimônio e acessar oportunidades globais.",
      heroBtnPrimary: "Agendar Consultoria",
      heroBtnSecondary: "Explorar Soluções",
      whoWeServeTitle: "Quem Atendemos",
      clients: [
        {
          label: "DONOS DE EMPRESAS E E-COMMERCE",
          title: "Empreendedores Globais",
          desc: "Para fundadores escalando além das fronteiras. Unimos crescimento de receita com posicionamento fiscal ideal. Da estruturação de entidades à conformidade, garantimos que sua expansão evite ineficiências fiscais.",
          tags: ["Estruturação Corporativa", "Otimização Fiscal"]
        },
        {
          label: "INDIVÍDUOS DE ULTRA-ALTA RENDA",
          title: "Investidores Privados",
          desc: "Proteja capital e maximize retornos. Construímos a infraestrutura para isolar ativos, otimizar tributação de investimentos e acessar oportunidades exclusivas. Criamos estruturas que preservam e crescem seu patrimônio.",
          tags: ["Proteção Patrimonial", "Estruturas de Privacidade"]
        },
        {
          label: "PATRIMÔNIO INSTITUCIONAL",
          title: "Family Offices",
          desc: "Infraestrutura institucional para riqueza multigeracional. Cuidamos da governança, conformidade regulatória e relatórios consolidados. Fornecemos a base estrutural permitindo que você foque na estratégia.",
          tags: ["Conformidade Regulatória", "Formação de Trust"]
        },
        {
          label: "ESTILO DE VIDA MÓVEL",
          title: "Indivíduos Soberanos",
          desc: "Liberdade de movimento e capital. Facilitamos residência, cidadania e banking internacional. Construímos a estrutura que suporta viver, trabalhar e investir em qualquer lugar do mundo.",
          tags: ["Residência por Investimento", "Cidadania"]
        }
      ],
      infraTitle: "Infraestrutura e Soluções",
      infraBody: "Nós planejamos resultados. Nossos quatro pilares centrais fornecem a estabilidade necessária para o crescimento global.",
      seeServices: "Ver todos os serviços",
      services: [
        {
          label: "FUNDAÇÃO",
          title: "Estruturação Corporativa e Fiscal",
          desc: "Formação estratégica de entidades para maximizar liberdade operacional e minimizar carga tributária global. Construímos estruturas que garantem agilidade mantendo total conformidade."
        },
        {
          label: "MOBILIDADE",
          title: "Soberania Pessoal",
          desc: "Garanta residência e cidadania em nações alinhadas com seus objetivos. Ajudamos você a projetar uma vida sem restrições de uma única jurisdição através de realocação estratégica."
        },
        {
          label: "PROTEÇÃO",
          title: "Proteção Patrimonial e Privacidade",
          desc: "Navegando regulações globais para garantir que suas estruturas permaneçam resilientes. Monitoramos mudanças em tempo real para mitigar riscos mantendo a privacidade necessária."
        },
        {
          label: "PRESERVAÇÃO",
          title: "Legado e Sucessão",
          desc: "Garanta proteção de riqueza multigeracional. Use estruturas de trust sofisticadas para transferência eficiente de impostos e proteção blindada, garantindo que seu legado perdure."
        }
      ],
      readMore: "Ler mais",
      missionLabel: "Nossa Missão",
      missionTitle: "Arquitete Sua Soberania Financeira",
      missionBody: "Você precisa de um parceiro estratégico que entenda a estruturação de riqueza global de todos os ângulos. A maioria dos consultores entende uma jurisdição; nós entendemos como elas interagem. Com décadas de experiência, projetamos soluções agnósticas baseadas em sua situação, não em nossas limitações geográficas.",
      approachTitle: "Nossa Abordagem",
      pillars: [
        {
          label: "Fundação",
          title: "Estruturação Estratégica",
          desc: "Seleção estratégica de jurisdição projetada para maximizar liberdade operacional e minimizar exposição fiscal global."
        },
        {
          label: "Crescimento",
          title: "Otimização Fiscal",
          desc: "Otimizamos sua posição fiscal global para garantir disponibilidade máxima de capital. Estruturamos operações para minimizar taxas efetivas legalmente."
        },
        {
          label: "Proteção",
          title: "Defesa Patrimonial",
          desc: "Riqueza atrai risco. Criamos estruturas defensivas multicamadas usando trusts para colocar ativos fora do alcance de ameaças, mantendo o controle."
        },
        {
          label: "Mobilidade",
          title: "Liberdade Global",
          desc: "Verdadeira riqueza significa escolha. Facilitamos residência, cidadania e banking internacional, transformando liberdade geográfica de aspiração em realidade."
        }
      ],
      ctaTitle: <>Trabalhe com especialistas que entendem <span className="italic text-gold-600">ambos os lados</span> da fronteira.</>,
      ctaBody: "Se você está pronto para estruturação transfronteiriça sofisticada com um verdadeiro parceiro estratégico, vamos discutir se somos a escolha certa.",
      ctaButton: "Agendar Consultoria"
    },
    ES: {
      heroTitle: <>Estructurando Patrimonio, <br /><span className="italic font-light">Asegurando Soberanía.</span></>,
      heroBody: "Desde fundadores de startups hasta family offices establecidos, entregamos la infraestructura transfronteriza para reducir legalmente impuestos, diversificar patrimonio y acceder a oportunidades globales.",
      heroBtnPrimary: "Programar Consulta",
      heroBtnSecondary: "Explorar Soluciones",
      whoWeServeTitle: "A Quién Servimos",
      clients: [
        {
          label: "DUEÑOS DE NEGOCIOS Y E-COMMERCE",
          title: "Emprendedores Globales",
          desc: "Para fundadores escalando más allá de las fronteras. Unimos crecimiento de ingresos con posicionamiento fiscal óptimo. Desde estructuración de entidades hasta cumplimiento, aseguramos que su expansión evite ineficiencias fiscales.",
          tags: ["Estructuración Corporativa", "Optimización Fiscal"]
        },
        {
          label: "INDIVIDUOS DE ALTO PATRIMONIO",
          title: "Inversores Privados",
          desc: "Proteja capital y maximice retornos. Construimos la infraestructura para aislar activos, optimizar tributación de inversiones y acceder a oportunidades exclusivas. Creamos estructuras que preservan y hacen crecer su patrimonio.",
          tags: ["Protección de Activos", "Estructuras de Privacidad"]
        },
        {
          label: "PATRIMONIO INSTITUCIONAL",
          title: "Family Offices",
          desc: "Infraestructura institucional para riqueza multigeneracional. Manejamos gobernanza, cumplimiento regulatorio y reportes consolidados. Proveemos la base estructural permitiéndole enfocarse en la estrategia.",
          tags: ["Cumplimiento Regulatorio", "Formación de Fideicomisos"]
        },
        {
          label: "ESTILO DE VIDA MÓVIL",
          title: "Individuos Soberanos",
          desc: "Libertad de movimiento y capital. Facilitamos residencia, ciudadanía y banca internacional. Construimos el marco que soporta vivir, trabajar e invertir en cualquier lugar del mundo.",
          tags: ["Residencia por Inversión", "Ciudadanía"]
        }
      ],
      infraTitle: "Infraestructura y Soluciones",
      infraBody: "Diseñamos resultados. Nuestros cuatro pilares centrales proporcionan la estabilidad requerida para el crecimiento global.",
      seeServices: "Ver todos los servicios",
      services: [
        {
          label: "FUNDACIÓN",
          title: "Estructuración Corporativa y Fiscal",
          desc: "Formación estratégica de entidades para maximizar libertad operativa y minimizar carga tributaria global. Construimos marcos que aseguran agilidad manteniendo total cumplimiento."
        },
        {
          label: "MOVILIDAD",
          title: "Soberanía Personal",
          desc: "Asegure residencia y ciudadanía en naciones alineadas con sus objetivos. Ayudamos a diseñar una vida sin restricciones de una única jurisdicción mediante reubicación estratégica."
        },
        {
          label: "PROTECCIÓN",
          title: "Protección de Activos y Privacidad",
          desc: "Navegando regulaciones globales para asegurar que sus estructuras permanezcan resilientes. Monitoreamos cambios en tiempo real para mitigar riesgos manteniendo la privacidad requerida."
        },
        {
          label: "PRESERVACIÓN",
          title: "Legado y Sucesión",
          desc: "Asegure protección de riqueza multigeneracional. Use estructuras sofisticadas para transferencia eficiente de impuestos y protección blindada, asegurando que su legado perdure."
        }
      ],
      readMore: "Leer más",
      missionLabel: "Nuestra Misión",
      missionTitle: "Arquitectura de su Soberanía Financiera",
      missionBody: "Necesita un socio estratégico que entienda la estructuración de riqueza global desde todos los ángulos. La mayoría de los asesores entienden una jurisdicción; nosotros entendemos cómo interactúan. Con décadas de experiencia, diseñamos soluciones agnósticas basadas en su situación, no en nuestras limitaciones geográficas.",
      approachTitle: "Nuestro Enfoque",
      pillars: [
        {
          label: "Fundación",
          title: "Estructuración Estratégica",
          desc: "Selección estratégica de jurisdicción diseñada para maximizar libertad operativa y minimizar exposición fiscal global."
        },
        {
          label: "Crecimiento",
          title: "Optimización Fiscal",
          desc: "Optimizamos su posición fiscal global para asegurar máxima disponibilidad de capital. Estructuramos operaciones para minimizar tasas efectivas legalmente."
        },
        {
          label: "Protección",
          title: "Defensa de Activos",
          desc: "La riqueza atrae riesgo. Creamos estructuras defensivas multicapa usando fideicomisos para colocar activos fuera del alcance de amenazas, manteniendo el control."
        },
        {
          label: "Movilidad",
          title: "Libertad Global",
          desc: "Verdadera riqueza significa elección. Facilitamos residencia, ciudadanía y banca internacional, convirtiendo la libertad geográfica de aspiración en realidad."
        }
      ],
      ctaTitle: <>Trabaje con especialistas que entienden <span className="italic text-gold-600">ambos lados</span> de la frontera.</>,
      ctaBody: "Si está listo para una estructuración transfronteriza sofisticada con un verdadero socio estratégico, discutamos si somos la opción correcta.",
      ctaButton: "Programar Consulta"
    }
  };

  const t = content[language];

  return (
    <div className="px-2 lg:px-4">
      {/* Hero Section */}
      <div className="container mx-auto">
        <div className="relative h-[85vh] min-h-[600px] w-full rounded-4xl overflow-hidden group bg-navy-900">
          <img 
            src="https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?q=80&w=2670&auto=format&fit=crop" 
            alt="Dramatic Golden Hour Mountain Peaks" 
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-16 lg:p-20">
            <div className="max-w-4xl">
              <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl text-white leading-[1.1] md:leading-[1] tracking-tight mb-6 md:mb-8">
                {t.heroTitle}
              </h1>
              <p className="text-white/80 font-sans text-lg md:text-xl max-w-2xl leading-relaxed mb-8 md:mb-10 font-light">
                {t.heroBody}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/schedule-consultation">
                  <Button variant="white" className="hover:scale-105 transform duration-300 w-full sm:w-auto">
                    {t.heroBtnPrimary}
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900 w-full sm:w-auto">
                    {t.heroBtnSecondary}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Serve */}
      <Section>
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="font-serif text-3xl md:text-5xl text-center mb-12 text-navy-900">{t.whoWeServeTitle}</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
             {t.clients.map((client, idx) => (
               <div key={idx} className="bg-white rounded-3xl p-6 md:p-10 border border-navy-900/5 hover:border-gold-500/30 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                     <div className="bg-sand/50 p-4 rounded-full text-navy-900 shrink-0 mb-4 sm:mb-0">
                       {idx === 0 && <Briefcase size={24} />}
                       {idx === 1 && <TrendingUp size={24} />}
                       {idx === 2 && <Shield size={24} />}
                       {idx === 3 && <User size={24} />}
                     </div>
                     <div>
                       <span className="text-xs font-sans font-bold uppercase tracking-wider text-gold-600 mb-2 block">{client.label}</span>
                       <h3 className="font-serif text-2xl text-navy-900 mb-3">{client.title}</h3>
                       <p className="text-navy-900/70 font-sans mb-6 leading-relaxed">{client.desc}</p>
                       <div className="flex flex-wrap gap-2">
                         {client.tags.map((tag, tIdx) => (
                           <span key={tIdx} className="px-3 py-1 bg-gray-100 rounded-full text-xs font-sans text-navy-900">{tag}</span>
                         ))}
                       </div>
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </Section>

      {/* Infrastructure & Solutions */}
      <div className="bg-sand/30 py-16 md:py-24 rounded-4xl mx-auto container my-8">
        <div className="px-6 md:px-8 lg:px-20">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 flex-wrap gap-6">
             <div className="max-w-2xl">
               <h2 className="font-serif text-3xl md:text-5xl text-navy-900 mb-4 md:mb-6">{t.infraTitle}</h2>
               <p className="text-navy-900/70 font-sans text-lg">{t.infraBody}</p>
             </div>
             <Link to="/services">
                <Button variant="outline" icon>{t.seeServices}</Button>
             </Link>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {t.services.map((service, idx) => (
                <Card 
                  key={idx}
                  icon={
                    idx === 0 ? <Anchor size={32} strokeWidth={1} /> :
                    idx === 1 ? <Globe size={32} strokeWidth={1} /> :
                    idx === 2 ? <Shield size={32} strokeWidth={1} /> :
                    <Landmark size={32} strokeWidth={1} />
                  }
                  label={service.label}
                  title={service.title}
                  description={service.desc}
                  linkText={t.readMore}
                  className="bg-white border-none shadow-sm min-h-0"
                />
              ))}
           </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="container mx-auto px-4 md:px-6 mb-20">
        <div className="bg-navy-900 rounded-4xl p-8 md:p-24 text-center md:text-left relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
           
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
             <div>
                <span className="text-gold-500 font-sans font-bold tracking-widest uppercase text-sm mb-4 block">{t.missionLabel}</span>
                <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                  {t.missionTitle}
                </h2>
             </div>
             <div>
                <p className="text-white/80 font-sans text-base md:text-lg leading-relaxed">
                  {t.missionBody}
                </p>
             </div>
           </div>
        </div>
      </div>

      {/* Our Approach */}
      <Section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-6xl text-navy-900 mb-6">{t.approachTitle}</h2>
            <div className="w-24 h-1 bg-gold-600 mx-auto"></div>
          </div>

          <div className="w-full h-[250px] md:h-[400px] rounded-4xl overflow-hidden mb-12 relative">
             <img 
               src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
               alt="Modern Architecture" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-navy-900/20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-12">
            {t.pillars.map((pillar, idx) => (
              <div key={idx} className={`flex gap-6 ${idx % 2 === 0 ? 'md:pr-8 md:border-r border-navy-900/10' : 'md:pl-8'}`}>
                 <div className="flex flex-col items-center">
                    <span className="text-xs font-sans font-bold text-gold-600 uppercase tracking-widest vertical-rl py-2">{pillar.label}</span>
                    <div className="w-1 bg-gold-500 h-full rounded-full flex-shrink-0 min-h-[60px] md:min-h-[100px]"></div>
                 </div>
                 <div>
                   <h3 className="font-serif text-2xl md:text-3xl text-navy-900 mb-3">{pillar.title}</h3>
                   <p className="text-navy-900/70 font-sans leading-relaxed text-sm md:text-base">
                     {pillar.desc}
                   </p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-navy-900 mb-8">
            {t.ctaTitle}
          </h2>
          <p className="text-lg md:text-xl text-navy-900/60 font-sans mb-10 max-w-2xl mx-auto">
             {t.ctaBody}
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/schedule-consultation">
              <Button className="px-8 py-4 text-lg">{t.ctaButton}</Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
