import React from 'react';
import { Section, Card, Button } from '@/components/UI';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Insights: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      heroTitle: "Insights",
      heroSubtitle: "Market intelligence, regulatory updates, and strategic analysis.",
      sectionTitle: "Latest Perspectives",
      sectionSubtitle: "Expert analysis on cross-border tax strategy, regulatory changes, and global wealth structuring.",
      cards: [
        {
          label: "REGULATORY UPDATE",
          title: "Understanding CFC Rules and Economic Substance",
          description: "An analysis of how controlled foreign corporation rules are evolving across jurisdictions and what it means for your holding structures.",
          link: "/article-cfc-rules"
        },
        {
          label: "TAX STRATEGY",
          title: "Why US LLCs Can Create Tax Nightmares for UK and Canadian Residents",
          description: "The hybrid mismatch issues that create double taxation for UK and Canadian residents operating US limited liability companies.",
          link: "/article-us-llc"
        },
        {
          label: "COMPLIANCE GUIDE",
          title: "The Reality Check on Offshore Trusts and Foundations",
          description: "Understanding the limitations of offshore trusts and foundations for asset protection and tax optimization.",
          link: "/article-offshore-trusts"
        }
      ],
      linkText: "Read More",
      loadMore: "Load More Articles"
    },
    PT: {
      heroTitle: "Insights",
      heroSubtitle: "Inteligência de mercado, atualizações regulatórias e análise estratégica.",
      sectionTitle: "Últimas Perspectivas",
      sectionSubtitle: "Análise especializada sobre estratégia fiscal transfronteiriça, mudanças regulatórias e estruturação de patrimônio global.",
      cards: [
        {
          label: "ATUALIZAÇÃO REGULATÓRIA",
          title: "Entendendo as Regras CFC e Substância Econômica",
          description: "Uma análise de como as regras de corporações estrangeiras controladas estão evoluindo nas jurisdições e o que isso significa para suas estruturas.",
          link: "/article-cfc-rules"
        },
        {
          label: "ESTRATÉGIA FISCAL",
          title: "Por que LLCs dos EUA Podem Criar Pesadelos Fiscais para Residentes do Reino Unido e Canadá",
          description: "As questões de incompatibilidade híbrida que criam dupla tributação para residentes do Reino Unido e Canadá operando LLCs dos EUA.",
          link: "/article-us-llc"
        },
        {
          label: "GUIA DE CONFORMIDADE",
          title: "O Choque de Realidade sobre Trusts e Fundações Offshore",
          description: "Entendendo as limitações de trusts e fundações offshore para proteção de ativos e otimização fiscal.",
          link: "/article-offshore-trusts"
        }
      ],
      linkText: "Leia Mais",
      loadMore: "Carregar Mais Artigos"
    },
    ES: {
      heroTitle: "Perspectivas",
      heroSubtitle: "Inteligencia de mercado, actualizaciones regulatorias y análisis estratégico.",
      sectionTitle: "Últimas Perspectivas",
      sectionSubtitle: "Análisis experto sobre estrategia fiscal transfronteriza, cambios regulatorios y estructuración de patrimonio global.",
      cards: [
        {
          label: "ACTUALIZACIÓN REGULATORIA",
          title: "Entendiendo las Reglas CFC y Sustancia Económica",
          description: "Un análisis de cómo las normas de corporaciones extranjeras controladas están evolucionando en las jurisdicciones y lo que significa para sus estructuras.",
          link: "/article-cfc-rules"
        },
        {
          label: "ESTRATEGIA FISCAL",
          title: "Por qué las LLC de EE. UU. Pueden Crear Pesadillas Fiscales para Residentes del Reino Unido y Canadá",
          description: "Los problemas de desajuste híbrido que crean doble imposición para residentes del Reino Unido y Canadá que operan LLC de EE. UU.",
          link: "/article-us-llc"
        },
        {
          label: "GUÍA DE CUMPLIMIENTO",
          title: "El Choque de Realidad sobre Fideicomisos y Fundaciones Offshore",
          description: "Entendiendo las limitaciones de fideicomisos y fundaciones offshore para protección de activos y optimización fiscal.",
          link: "/article-offshore-trusts"
        }
      ],
      linkText: "Leer Más",
      loadMore: "Cargar Más Artículos"
    }
  };

  const t = content[language];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-navy-900 py-32 md:py-48 text-white">
        <div className="container mx-auto px-6 text-left max-w-4xl">
           <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-xl text-slate-300 font-sans font-light max-w-2xl">
            {t.heroSubtitle}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <Section className="bg-cream">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="font-serif text-4xl text-navy-900 font-bold mb-6">{t.sectionTitle}</h2>
                <p className="text-navy-900/70 font-sans text-lg">
                    {t.sectionSubtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {t.cards.map((card, index) => (
                  <Link to={card.link} key={index} className="block h-full">
                    <Card
                      label={card.label}
                      title={card.title}
                      description={card.description}
                      linkText={t.linkText}
                      className="bg-white border-none shadow-sm min-h-[320px] h-full"
                    />
                  </Link>
                ))}
            </div>

            <div className="flex justify-center mt-16">
              <Button variant="secondary" className="px-12 py-4 text-base rounded-full shadow-md hover:shadow-lg transform transition-all hover:-translate-y-1">
                {t.loadMore}
              </Button>
            </div>
        </div>
      </Section>
    </>
  );
};

export default Insights;
