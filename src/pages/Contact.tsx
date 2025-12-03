import React, { useState } from 'react';
import { Section, Button } from '@/components/UI';
import { MapPin, Mail, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    country: '',
    industry: '',
    message: ''
  });

  const content = {
    EN: {
      heroTitle: "Begin Your Strategy Audit",
      heroSubtitle: "Secure your assets and optimize your structure. Contact us today.",
      touchTitle: "Get in Touch",
      touchBody: "Our team is available to discuss your specific requirements. We maintain strict confidentiality regarding all client inquiries.",
      headquarters: "Headquarters",
      emailLabel: "Email",
      successTitle: "Inquiry Received",
      successBody: "Thank you for your inquiry. We will respond within 24 hours.",
      form: {
        name: "Full Name",
        email: "Email Address",
        company: "Company / Entity",
        industry: "Industry / Sector",
        industryPlaceholder: "e.g. Fintech, Real Estate",
        country: "Home Country",
        countryPlaceholder: "Select your country",
        message: "Message / Requirement",
        submit: "SUBMIT REQUEST"
      }
    },
    PT: {
      heroTitle: "Inicie Sua Auditoria de Estratégia",
      heroSubtitle: "Proteja seus ativos e otimize sua estrutura. Contate-nos hoje.",
      touchTitle: "Entre em Contato",
      touchBody: "Nossa equipe está disponível para discutir seus requisitos específicos. Mantemos estrita confidencialidade em relação a todas as consultas de clientes.",
      headquarters: "Sede",
      emailLabel: "Email",
      successTitle: "Consulta Recebida",
      successBody: "Obrigado por sua consulta. Responderemos dentro de 24 horas.",
      form: {
        name: "Nome Completo",
        email: "Endereço de Email",
        company: "Empresa / Entidade",
        industry: "Indústria / Setor",
        industryPlaceholder: "ex: Fintech, Imobiliário",
        country: "País de Residência",
        countryPlaceholder: "Selecione seu país",
        message: "Mensagem / Requisito",
        submit: "ENVIAR SOLICITAÇÃO"
      }
    },
    ES: {
      heroTitle: "Comience Su Auditoría de Estrategia",
      heroSubtitle: "Asegure sus activos y optimice su estructura. Contáctenos hoy.",
      touchTitle: "Póngase en Contacto",
      touchBody: "Nuestro equipo está disponible para discutir sus requisitos específicos. Mantenemos estricta confidencialidad con respecto a todas las consultas de clientes.",
      headquarters: "Sede",
      emailLabel: "Correo Electrónico",
      successTitle: "Consulta Recibida",
      successBody: "Gracias por su consulta. Responderemos dentro de 24 horas.",
      form: {
        name: "Nombre Completo",
        email: "Dirección de Correo",
        company: "Empresa / Entidad",
        industry: "Industria / Sector",
        industryPlaceholder: "ej: Fintech, Inmobiliario",
        country: "País de Residencia",
        countryPlaceholder: "Seleccione su país",
        message: "Mensaje / Requisito",
        submit: "ENVIAR SOLICITUD"
      }
    }
  };

  const t = content[language];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const priorityCountries = [
    "United States", "United Kingdom", "Canada", "Brazil", "United Arab Emirates",
    "Australia", "Germany", "France", "Switzerland", "Singapore", "Israel", "Mexico"
  ];

  const otherCountries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cabo Verde", "Cambodia", "Cameroon", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)",
    "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. 'Swaziland')", "Ethiopia",
    "Fiji", "Finland",
    "Gabon", "Gambia", "Georgia", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Italy", "Ivory Coast",
    "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
    "Oman",
    "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar",
    "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Syria",
    "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "Uruguay", "Uzbekistan",
    "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
    "Yemen",
    "Zambia", "Zimbabwe"
  ];

  const allCountries = [...priorityCountries, ...otherCountries];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-navy-900 py-24 md:py-32 text-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">{t.heroTitle}</h1>
          <p className="text-xl text-slate-300 font-sans font-light">
            {t.heroSubtitle}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <Section className="bg-cream">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Left Column - Contact Info */}
            <div className="lg:w-5/12">
              <h2 className="font-serif text-3xl text-navy-900 font-bold mb-8">{t.touchTitle}</h2>
              <p className="text-slate-600 font-sans text-lg mb-12 leading-relaxed">
                {t.touchBody}
              </p>

              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="text-gold-600" size={24} />
                    <h3 className="font-sans font-bold text-navy-900 uppercase tracking-widest text-sm">{t.headquarters}</h3>
                  </div>
                  <p className="text-slate-600 font-sans ml-9">Miami, FL</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="text-gold-600" size={24} />
                    <h3 className="font-sans font-bold text-navy-900 uppercase tracking-widest text-sm">{t.emailLabel}</h3>
                  </div>
                  <p className="text-slate-600 font-sans ml-9">admin@ipanemapartners.com</p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:w-7/12">
              <div className="bg-white p-8 md:p-10 rounded-sm shadow-sm border-t-4 border-gold-600">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-green-600" size={40} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4">{t.successTitle}</h3>
                    <p className="text-slate-600 font-sans">
                      {t.successBody}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-navy-900 mb-2 uppercase tracking-widest">{t.form.name}</label>
                      <input 
                        type="text" 
                        id="fullName" 
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-gold-600 font-sans" 
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-navy-900 mb-2 uppercase tracking-widest">{t.form.email}</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-gold-600 font-sans" 
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-xs font-bold text-navy-900 mb-2 uppercase tracking-widest">{t.form.company}</label>
                        <input 
                          type="text" 
                          id="company" 
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-gold-600 font-sans" 
                        />
                      </div>
                      <div>
                        <label htmlFor="industry" className="block text-xs font-bold text-navy-900 mb-2 uppercase tracking-widest">{t.form.industry}</label>
                        <input 
                          type="text" 
                          id="industry" 
                          name="industry"
                          placeholder={t.form.industryPlaceholder}
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-gold-600 font-sans" 
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-xs font-bold text-navy-900 mb-2 uppercase tracking-widest">{t.form.country}</label>
                      <select 
                        id="country" 
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-gold-600 font-sans bg-white"
                      >
                        <option value="">{t.form.countryPlaceholder}</option>
                        {allCountries.map((country) => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-navy-900 mb-2 uppercase tracking-widest">{t.form.message}</label>
                      <textarea 
                        id="message" 
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-gold-600 font-sans" 
                      />
                    </div>

                    <Button type="submit" variant="secondary" className="w-full">
                      {t.form.submit}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
