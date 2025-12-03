import React from 'react';
import { Section, Button } from '@/components/UI';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const ServiceBlock: React.FC<{
  label: string;
  title: string;
  description: string;
  list: string[];
  closing: string;
  reversed?: boolean;
  image: string;
  commonSolutionsLabel: string;
}> = ({ label, title, description, list, closing, reversed, image, commonSolutionsLabel }) => {
  return (
    <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-20 items-center mb-24 last:mb-0`}>
      <div className="lg:w-1/2 w-full">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-auto shadow-xl rounded-sm" />
          <div className={`hidden lg:block absolute -bottom-6 ${reversed ? '-left-6' : '-right-6'} w-24 h-24 bg-navy-900 z-[-1] rounded-sm`}></div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full">
        <span className="text-gold-600 font-sans font-bold tracking-widest uppercase text-sm mb-4 block">{label}</span>
        <h2 className="font-serif text-3xl md:text-4xl text-navy-900 font-bold mb-4">{title}</h2>
        <p className="text-slate-600 font-sans text-lg leading-relaxed mb-6">{description}</p>
        
        <div className="bg-gray-50 p-6 rounded-sm border-l-4 border-gold-600 mb-6">
          <h4 className="font-sans font-bold text-navy-900 mb-4 uppercase text-xs tracking-wider">{commonSolutionsLabel}</h4>
          <ul className="space-y-2">
            {list.map((item, idx) => (
              <li key={idx} className="flex items-start text-slate-700 font-sans text-sm md:text-base">
                <span className="text-gold-600 mr-2">•</span> {item}
              </li>
            ))}
          </ul>
        </div>
        
        <p className="text-navy-900 font-serif italic text-lg border-l-2 border-slate-200 pl-4">
          {closing}
        </p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      heroLabel: "Our Expertise",
      heroTitle: "Comprehensive Cross-Border Solutions",
      heroSubtitle: "From entity structuring to banking infrastructure, we deliver the full spectrum of offshore advisory services.",
      commonSolutions: "Common Solutions",
      services: [
        {
          label: "FOUNDATION",
          title: "Corporate & Tax Structuring",
          desc: "Strategic entity formation designed to maximize operational freedom and minimize global tax burden. We build legal frameworks ensuring your corporate structure is agile and compliant across jurisdictions.",
          list: ["International Entity Formation (LLCs, IBCs)", "US LLC Structuring for Non-Residents", "Holding Company Structures", "Intellectual Property Migration", "Transfer Pricing & Economic Substance"],
          closing: "A solid structure is the difference between tax efficiency and tax evasion."
        },
        {
          label: "MOBILITY",
          title: "Personal Sovereignty",
          desc: "Move to countries that align with your values. We facilitate residency and citizenship in nations offering tax advantages and lifestyle benefits. We help you design a life unconstrained by a single jurisdiction.",
          list: ["Residency by Investment (Golden Visas)", "Citizenship by Investment (CBI)", "Tax Residency Optimization", "Second Passport Acquisition", "Relocation Concierge Services"],
          closing: "Citizenship is no longer a birth lottery—it is an asset class to be managed."
        },
        {
          label: "PROTECTION",
          title: "Asset Protection & Privacy",
          desc: "Navigating global regulations so you don't have to. From KYC/AML to economic substance, our shield ensures your structures remain resilient. We mitigate risk while maintaining the privacy you require.",
          list: ["Offshore Trust Formation", "Private Interest Foundations", "Nominee Director Services", "Anonymous Holding Structures", "Litigation Firewalls & Estate Planning"],
          closing: "True wealth protection means owning nothing, but controlling everything."
        },
        {
          label: "LIQUIDITY",
          title: "Cross-Border Finance & Banking",
          desc: "Access global capital and banking infrastructure. We leverage our network to open accounts in stable jurisdictions, set up merchant processing, and create on/off-ramps for digital assets.",
          list: ["International Corporate Bank Account Opening", "Private Banking Introductions", "High-Risk Merchant Processing", "Crypto-Friendly Banking Solutions", "Multi-Currency Treasury Management"],
          closing: "Banking is the hardest part of the offshore equation. We make it seamless."
        },
        {
          label: "PRESERVATION",
          title: "Legacy & Succession",
          desc: "Secure multi-generational wealth protection. With sophisticated trust structures, you gain tax-efficient wealth transfer and succession planning that ensures your legacy endures beyond your lifetime.",
          list: ["Multi-Generational Dynasty Trusts", "Family Charters & Governance", "International Will Drafting", "Probate Avoidance Structures", "Philanthropic Foundations"],
          closing: "Your legacy shouldn't be eroded by taxes or disputes. Secure it for generations."
        }
      ],
      ctaTitle: "Not sure which services you need?",
      ctaBody: "Most clients benefit from solutions across multiple categories.",
      ctaButton: "Schedule Consultation"
    },
    PT: {
      heroLabel: "Nossa Expertise",
      heroTitle: "Soluções Transfronteiriças Abrangentes",
      heroSubtitle: "Da estruturação de entidades à infraestrutura bancária, entregamos o espectro completo de serviços de consultoria offshore.",
      commonSolutions: "Soluções Comuns",
      services: [
        {
          label: "FUNDAÇÃO",
          title: "Estruturação Corporativa e Fiscal",
          desc: "Formação estratégica de entidades projetada para maximizar liberdade operacional e minimizar carga tributária global. Construímos estruturas legais garantindo que sua corporação seja ágil e compatível entre jurisdições.",
          list: ["Formação de Entidades Internacionais (LLCs, IBCs)", "Estruturação de LLC nos EUA para Não-Residentes", "Estruturas de Holding", "Migração de Propriedade Intelectual", "Preços de Transferência e Substância Econômica"],
          closing: "Uma estrutura sólida é a diferença entre eficiência fiscal e evasão fiscal."
        },
        {
          label: "MOBILIDADE",
          title: "Soberania Pessoal",
          desc: "Mude-se para países que se alinham com seus valores. Facilitamos residência e cidadania em nações que oferecem vantagens fiscais e benefícios de estilo de vida. Ajudamos você a projetar uma vida sem restrições de uma única jurisdição.",
          list: ["Residência por Investimento (Golden Visas)", "Cidadania por Investimento (CBI)", "Otimização de Residência Fiscal", "Aquisição de Segundo Passaporte", "Serviços de Concierge de Relocação"],
          closing: "Cidadania não é mais uma loteria de nascimento—é uma classe de ativos a ser gerenciada."
        },
        {
          label: "PROTEÇÃO",
          title: "Proteção Patrimonial e Privacidade",
          desc: "Navegando regulações globais para você não precisar. De KYC/AML à substância econômica, nosso escudo garante que suas estruturas permaneçam resilientes. Mitigamos riscos mantendo a privacidade que você precisa.",
          list: ["Formação de Trust Offshore", "Fundações de Interesse Privado", "Serviços de Diretor Nomeado", "Estruturas de Holding Anônimas", "Firewalls de Litígio e Planejamento Sucessório"],
          closing: "Verdadeira proteção patrimonial significa não possuir nada, mas controlar tudo."
        },
        {
          label: "LIQUIDEZ",
          title: "Finanças Transfronteiriças e Banking",
          desc: "Acesse capital global e infraestrutura bancária. Alavancamos nossa rede para abrir contas em jurisdições estáveis, configurar processamento mercantil e criar on/off-ramps para ativos digitais.",
          list: ["Abertura de Conta Bancária Corporativa Internacional", "Introduções de Private Banking", "Processamento Mercantil de Alto Risco", "Soluções Bancárias Amigáveis a Cripto", "Gestão de Tesouraria Multimoeda"],
          closing: "Banking é a parte mais difícil da equação offshore. Nós tornamos isso simples."
        },
        {
          label: "PRESERVAÇÃO",
          title: "Legado e Sucessão",
          desc: "Garanta proteção de riqueza multigeracional. Com estruturas sofisticadas de trust, você ganha transferência de riqueza eficiente em impostos e planejamento sucessório que garante que seu legado perdure.",
          list: ["Trusts Dinásticos Multigeracionais", "Cartas e Governança Familiar", "Redação de Testamento Internacional", "Estruturas para Evitar Inventário", "Fundações Filantrópicas"],
          closing: "Seu legado não deve ser erodido por impostos ou disputas. Garanta-o por gerações."
        }
      ],
      ctaTitle: "Não tem certeza de quais serviços precisa?",
      ctaBody: "A maioria dos clientes se beneficia de soluções em múltiplas categorias.",
      ctaButton: "Agendar Consultoria"
    },
    ES: {
      heroLabel: "Nuestra Experiencia",
      heroTitle: "Soluciones Transfronterizas Integrales",
      heroSubtitle: "Desde estructuración de entidades hasta infraestructura bancaria, entregamos el espectro completo de servicios de asesoría offshore.",
      commonSolutions: "Soluciones Comunes",
      services: [
        {
          label: "FUNDACIÓN",
          title: "Estructuración Corporativa y Fiscal",
          desc: "Formación estratégica de entidades diseñada para maximizar libertad operativa y minimizar carga tributaria global. Construimos marcos legales asegurando que su estructura corporativa sea ágil y cumpla con las jurisdicciones.",
          list: ["Formación de Entidades Internacionales (LLCs, IBCs)", "Estructuración de LLC en EE. UU. para No Residentes", "Estructuras de Holding", "Migración de Propiedad Intelectual", "Precios de Transferencia y Sustancia Económica"],
          closing: "Una estructura sólida es la diferencia entre eficiencia fiscal y evasión fiscal."
        },
        {
          label: "MOVILIDAD",
          title: "Soberanía Personal",
          desc: "Múdese a países que se alineen con sus valores. Facilitamos residencia y ciudadanía en naciones que ofrecen ventajas fiscales y beneficios de estilo de vida. Ayudamos a diseñar una vida sin restricciones de una única jurisdicción.",
          list: ["Residencia por Inversión (Golden Visas)", "Ciudadanía por Inversión (CBI)", "Optimización de Residencia Fiscal", "Adquisición de Segundo Pasaporte", "Servicios de Conserjería de Reubicación"],
          closing: "La ciudadanía ya no es una lotería de nacimiento—es una clase de activo para ser gestionada."
        },
        {
          label: "PROTECCIÓN",
          title: "Protección de Activos y Privacidad",
          desc: "Navegando regulaciones globales para que usted no tenga que hacerlo. Desde KYC/AML hasta sustancia económica, nuestro escudo asegura que sus estructuras permanezcan resilientes. Mitigamos riesgos manteniendo la privacidad que requiere.",
          list: ["Formación de Fideicomiso Offshore", "Fundaciones de Interés Privado", "Servicios de Director Nominado", "Estructuras de Holding Anónimas", "Cortafuegos de Litigio y Planificación Sucesoria"],
          closing: "Verdadera protección patrimonial significa no poseer nada, pero controlar todo."
        },
        {
          label: "LIQUIDEZ",
          title: "Finanzas Transfronterizas y Banca",
          desc: "Acceda a capital global e infraestructura bancaria. Aprovechamos nuestra red para abrir cuentas en jurisdicciones estables, configurar procesamiento mercantil y crear rampas de entrada/salida para activos digitales.",
          list: ["Apertura de Cuenta Bancaria Corporativa Internacional", "Introducciones de Banca Privada", "Procesamiento Mercantil de Alto Riesgo", "Soluciones Bancarias Amigables con Cripto", "Gestión de Tesorería Multidivisa"],
          closing: "La banca es la parte más difícil de la ecuación offshore. Nosotros la hacemos simple."
        },
        {
          label: "PRESERVACIÓN",
          title: "Legado y Sucesión",
          desc: "Asegure protección de riqueza multigeneracional. Con estructuras sofisticadas de fideicomiso, gana transferencia de riqueza eficiente en impuestos y planificación sucesoria que asegura que su legado perdure.",
          list: ["Fideicomisos Dinásticos Multigeneracionales", "Cartas y Gobernanza Familiar", "Redacción de Testamento Internacional", "Estructuras para Evitar Sucesión", "Fundaciones Filantrópicas"],
          closing: "Su legado no debe ser erosionado por impuestos o disputas. Asegúrelo por generaciones."
        }
      ],
      ctaTitle: "¿No está seguro de qué servicios necesita?",
      ctaBody: "La mayoría de los clientes se benefician de soluciones en múltiples categorías.",
      ctaButton: "Programar Consulta"
    }
  };

  const t = content[language];

  return (
    <>
      <div className="bg-slate-100 py-32 md:py-48">
        <div className="container mx-auto px-6 text-center max-w-4xl">
           <span className="text-gold-600 font-sans font-bold tracking-widest uppercase text-sm mb-4 block">{t.heroLabel}</span>
          <h1 className="font-serif text-4xl md:text-6xl text-navy-900 font-bold mb-6">{t.heroTitle}</h1>
          <p className="text-xl text-slate-600 font-sans font-light max-w-2xl mx-auto">
            {t.heroSubtitle}
          </p>
        </div>
      </div>

      <Section className="bg-white">
        <div className="container mx-auto px-6">
          <ServiceBlock 
            label={t.services[0].label}
            title={t.services[0].title}
            description={t.services[0].desc}
            list={t.services[0].list}
            closing={t.services[0].closing}
            image="https://picsum.photos/600/400?grayscale&random=1"
            commonSolutionsLabel={t.commonSolutions}
          />

           <ServiceBlock 
            label={t.services[1].label}
            title={t.services[1].title}
            description={t.services[1].desc}
            list={t.services[1].list}
            closing={t.services[1].closing}
            image="https://picsum.photos/600/400?grayscale&random=2"
            reversed
            commonSolutionsLabel={t.commonSolutions}
          />

           <ServiceBlock 
            label={t.services[2].label}
            title={t.services[2].title}
            description={t.services[2].desc}
            list={t.services[2].list}
            closing={t.services[2].closing}
            image="https://picsum.photos/600/400?grayscale&random=3"
            commonSolutionsLabel={t.commonSolutions}
          />

           <ServiceBlock 
            label={t.services[3].label}
            title={t.services[3].title}
            description={t.services[3].desc}
            list={t.services[3].list}
            closing={t.services[3].closing}
            image="https://picsum.photos/600/400?grayscale&random=4"
            reversed
            commonSolutionsLabel={t.commonSolutions}
          />

           <ServiceBlock 
            label={t.services[4].label}
            title={t.services[4].title}
            description={t.services[4].desc}
            list={t.services[4].list}
            closing={t.services[4].closing}
            image="https://picsum.photos/600/400?grayscale&random=5"
            commonSolutionsLabel={t.commonSolutions}
          />
        </div>
      </Section>

      <Section className="bg-navy-900 text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-3xl font-bold mb-6">{t.ctaTitle}</h2>
          <p className="text-slate-300 font-sans mb-10">{t.ctaBody}</p>
          <Link to="/schedule-consultation">
            <Button variant="secondary">{t.ctaButton}</Button>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default Services;
