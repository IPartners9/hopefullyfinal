import React from 'react';
import { Section, Button } from '@/components/UI';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const About: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      heroTitle: <>Most advisors understand one jurisdiction. <br/><span className="text-gold-500">We understand how they all work together.</span></>,
      heroSubtitle: "Jurisdiction-agnostic offshore advisory for entrepreneurs, investors, and family offices with global ambitions.",
      whoWeAreLabel: "Who We Are",
      whoWeAreTitle: "Building at the Intersection",
      whoWeAreBody1: "At Ipanema Partners, we've built our practice at the intersection of multiple jurisdictions. We understand how they interact, conflict, and create opportunities. With experience spanning the Americas, Europe, and the Middle East, we provide truly jurisdiction-agnostic advisory.",
      whoWeAreBody2: "We're not transactional advisors. We are strategic partners designing sophisticated structures based on your specific situation, goals, and risk profile.",
      setsApartTitle: "What Sets Us Apart",
      differentiators: [
        { title: "Multi-Jurisdictional Mastery", desc: "Deep expertise across domestic, international, and offshore systems—and critically, how they interact." },
        { title: "Jurisdiction-Agnostic", desc: "We recommend solutions based on your needs, not our geographic limitations or commission incentives." },
        { title: "Bespoke & Discreet", desc: "Custom-designed solutions tailored to your specific situation, delivered with absolute confidentiality." },
        { title: "Strategic Partnership", desc: "Long-term relationships focused on evolving your structure as your wealth and goals grow." },
        { title: "Comprehensive Integration", desc: "From corporate structuring and tax optimization to residency planning and asset protection—unified execution." }
      ],
      ctaTitle: "Ready to optimize your global wealth strategy?",
      ctaBody: "Schedule a confidential consultation to discuss your specific situation.",
      ctaButton: "Schedule Consultation"
    },
    PT: {
      heroTitle: <>A maioria dos consultores entende uma jurisdição. <br/><span className="text-gold-500">Nós entendemos como todas funcionam juntas.</span></>,
      heroSubtitle: "Assessoria offshore independente de jurisdição para empreendedores, investidores e family offices com ambições globais.",
      whoWeAreLabel: "Quem Somos",
      whoWeAreTitle: "Construindo na Interseção",
      whoWeAreBody1: "Na Ipanema Partners, construímos nossa prática na interseção de múltiplas jurisdições. Entendemos como elas interagem, conflitam e criam oportunidades. Com experiência nas Américas, Europa e Oriente Médio, oferecemos assessoria verdadeiramente agnóstica.",
      whoWeAreBody2: "Não somos consultores transacionais. Somos parceiros estratégicos projetando estruturas sofisticadas baseadas em sua situação específica, objetivos e perfil de risco.",
      setsApartTitle: "O Que Nos Diferencia",
      differentiators: [
        { title: "Maestria Multijurisdicional", desc: "Profunda expertise em sistemas domésticos, internacionais e offshore—e criticamente, como interagem." },
        { title: "Agnóstico em Jurisdição", desc: "Recomendamos soluções baseadas em suas necessidades, não em nossas limitações geográficas ou incentivos de comissão." },
        { title: "Sob Medida e Discreto", desc: "Soluções personalizadas adaptadas à sua situação específica, entregues com absoluta confidencialidade." },
        { title: "Parceria Estratégica", desc: "Relacionamentos de longo prazo focados em evoluir sua estrutura à medida que seu patrimônio e objetivos crescem." },
        { title: "Integração Abrangente", desc: "Da estruturação corporativa e otimização fiscal ao planejamento de residência e proteção de ativos—execução unificada." }
      ],
      ctaTitle: "Pronto para otimizar sua estratégia patrimonial global?",
      ctaBody: "Agende uma consultoria confidencial para discutir sua situação específica.",
      ctaButton: "Agendar Consultoria"
    },
    ES: {
      heroTitle: <>La mayoría de los asesores entienden una jurisdicción. <br/><span className="text-gold-500">Nosotros entendemos cómo funcionan todas juntas.</span></>,
      heroSubtitle: "Asesoría offshore independiente de la jurisdicción para emprendedores, inversores y family offices con ambiciones globales.",
      whoWeAreLabel: "Quiénes Somos",
      whoWeAreTitle: "Construyendo en la Intersección",
      whoWeAreBody1: "En Ipanema Partners, hemos construido nuestra práctica en la intersección de múltiples jurisdicciones. Entendemos cómo interactúan, entran en conflicto y crean oportunidades. Con experiencia en América, Europa y Medio Oriente, ofrecemos asesoramiento verdaderamente agnóstico.",
      whoWeAreBody2: "No somos asesores transaccionales. Somos socios estratégicos diseñando estructuras sofisticadas basadas en su situación específica, objetivos y perfil de riesgo.",
      setsApartTitle: "Lo Que Nos Diferencia",
      differentiators: [
        { title: "Maestría Multijurisdiccional", desc: "Profunda experiencia en sistemas domésticos, internacionales y offshore—y críticamente, cómo interactúan." },
        { title: "Agnóstico en Jurisdicción", desc: "Recomendamos soluciones basadas en sus necesidades, no en nuestras limitaciones geográficas o incentivos de comisión." },
        { title: "A Medida y Discreto", desc: "Soluciones personalizadas adaptadas a su situación específica, entregadas con absoluta confidencialidad." },
        { title: "Asociación Estratégica", desc: "Relaciones a largo plazo enfocadas en evolucionar su estructura a medida que su patrimonio y objetivos crecen." },
        { title: "Integración Integral", desc: "Desde estructuración corporativa y optimización fiscal hasta planificación de residencia y protección de activos—ejecución unificada." }
      ],
      ctaTitle: "¿Listo para optimizar su estrategia patrimonial global?",
      ctaBody: "Programe una consulta confidencial para discutir su situación específica.",
      ctaButton: "Programar Consulta"
    }
  };

  const t = content[language];

  return (
    <>
      {/* Hero */}
      <div className="bg-navy-900 py-32 md:py-48 text-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8 leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-xl text-slate-300 font-sans font-light">
            {t.heroSubtitle}
          </p>
        </div>
      </div>

      {/* Who We Are */}
      <Section className="bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="relative">
              <img src="https://picsum.photos/600/700?grayscale" alt="Team Discussion" className="rounded-sm shadow-xl w-full" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-600 z-[-1] rounded-sm hidden md:block"></div>
            </div>
          </div>
          <div>
            <span className="text-gold-600 font-sans font-bold tracking-widest uppercase text-sm mb-4 block">{t.whoWeAreLabel}</span>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 font-bold mb-6">{t.whoWeAreTitle}</h2>
            <p className="text-slate-600 font-sans leading-relaxed mb-6 text-lg">
              {t.whoWeAreBody1}
            </p>
            <p className="text-slate-600 font-sans leading-relaxed text-lg">
              {t.whoWeAreBody2}
            </p>
          </div>
        </div>
      </Section>

      {/* Differentiators */}
      <Section className="bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-navy-900 font-bold">{t.setsApartTitle}</h2>
            <div className="w-24 h-1 bg-gold-600 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
             {t.differentiators.map((diff, idx) => (
               <div key={idx} className={`bg-white p-8 border-t-4 border-gold-600 shadow-sm ${idx >= 3 ? (idx === 3 ? 'md:col-span-1.5 lg:col-span-1' : 'md:col-span-1.5 lg:col-span-1 md:col-start-2') : ''}`}>
                  <CheckCircle2 className="text-navy-900 mb-4" size={32} />
                  <h3 className="font-serif text-xl font-bold text-navy-900 mb-3">{diff.title}</h3>
                  <p className="text-slate-600 font-sans">{diff.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-navy-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">{t.ctaTitle}</h2>
          <p className="text-slate-300 font-sans text-lg mb-10">{t.ctaBody}</p>
          <Link to="/schedule-consultation">
            <Button variant="secondary">{t.ctaButton}</Button>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default About;
