import React, { useState } from 'react';
import { Section, Button } from '@/components/UI';
import { Lock, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PlaceholderProps {
  page: 'insights' | 'resources' | 'portal';
}

const Placeholders: React.FC<PlaceholderProps> = ({ page }) => {
  const { language } = useLanguage();
  const [loginError, setLoginError] = useState<string | null>(null);

  const t = {
    EN: {
      portalTitle: "Client Portal",
      portalSubtitle: "Secure access for existing clients",
      username: "Username or Email",
      password: "Password",
      remember: "Remember me",
      forgot: "Forgot Password?",
      login: "Login",
      secureArea: "This is a secure area for existing Ipanema Partners clients.",
      error: "User not found. Please verify your credentials or contact support.",
      resourcesTitle: "Resources & Guides",
      resourcesSubtitle: "Comprehensive guides, frameworks, and tools for sophisticated cross-border planning.",
      resourcesBody: "Content coming soon. This section will feature downloadable guides, templates, checklists, and educational resources for entrepreneurs, investors, and family offices.",
      resourcesCta: "Request Access"
    },
    PT: {
      portalTitle: "Portal do Cliente",
      portalSubtitle: "Acesso seguro para clientes existentes",
      username: "Usuário ou Email",
      password: "Senha",
      remember: "Lembrar de mim",
      forgot: "Esqueceu a Senha?",
      login: "Entrar",
      secureArea: "Esta é uma área segura para clientes existentes da Ipanema Partners.",
      error: "Usuário não encontrado. Por favor, verifique suas credenciais ou contate o suporte.",
      resourcesTitle: "Recursos e Guias",
      resourcesSubtitle: "Guias abrangentes, frameworks e ferramentas para planejamento transfronteiriço sofisticado.",
      resourcesBody: "Conteúdo em breve. Esta seção apresentará guias para download, modelos, checklists e recursos educacionais para empreendedores, investidores e family offices.",
      resourcesCta: "Solicitar Acesso"
    },
    ES: {
      portalTitle: "Portal de Clientes",
      portalSubtitle: "Acceso seguro para clientes existentes",
      username: "Usuario o Correo",
      password: "Contraseña",
      remember: "Recuérdame",
      forgot: "¿Olvidó su contraseña?",
      login: "Iniciar Sesión",
      secureArea: "Esta es un área segura para clientes existentes de Ipanema Partners.",
      error: "Usuario no encontrado. Por favor verifique sus credenciales o contacte soporte.",
      resourcesTitle: "Recursos y Guías",
      resourcesSubtitle: "Guías completas, marcos y herramientas para una planificación transfronteriza sofisticada.",
      resourcesBody: "Contenido próximamente. Esta sección contará con guías descargables, plantillas, listas de verificación y recursos educativos para emprendedores, inversores y family offices.",
      resourcesCta: "Solicitar Acceso"
    }
  }[language];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(t.error);
  };

  if (page === 'portal') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-32 px-6">
        <div className="max-w-md w-full bg-white shadow-xl p-10 border-t-4 border-gold-600 rounded-sm">
          <div className="text-center mb-8">
            <div className="bg-navy-900 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock size={20} />
            </div>
            <h1 className="font-serif text-3xl font-bold text-navy-900">{t.portalTitle}</h1>
            <p className="text-slate-500 mt-2">{t.portalSubtitle}</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-navy-900 mb-2 uppercase tracking-wide">{t.username}</label>
              <input type="text" className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-gold-600" placeholder="" />
            </div>
            <div>
              <label className="block text-sm font-bold text-navy-900 mb-2 uppercase tracking-wide">{t.password}</label>
              <input type="password" className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-gold-600" placeholder="••••••••" />
            </div>
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center text-slate-600">
                <input type="checkbox" className="mr-2" /> {t.remember}
              </label>
              <button type="button" className="text-gold-600 hover:text-navy-900">{t.forgot}</button>
            </div>
            
            <Button className="w-full mt-4" type="submit">{t.login}</Button>

            {loginError && (
              <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-sm mt-4 text-sm font-sans border border-red-100">
                <AlertCircle size={16} className="flex-shrink-0" />
                <span>{loginError}</span>
              </div>
            )}
          </form>
          
          <div className="mt-8 pt-8 border-t border-gray-100 text-center text-sm text-slate-500">
            <p>{t.secureArea}</p>
          </div>
        </div>
      </div>
    );
  }

  // Resources content (Insights is now handled by Insights.tsx)
  return (
    <>
      <div className="bg-navy-900 py-32 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
           <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">{t.resourcesTitle}</h1>
           <p className="text-xl text-slate-300 font-light">{t.resourcesSubtitle}</p>
        </div>
      </div>

      <Section className="bg-white min-h-[400px]">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <div className="p-12 border-2 border-dashed border-gray-200 rounded-lg">
             <p className="text-slate-500 mb-8 italic text-lg">{t.resourcesBody}</p>
             <Button variant="outline">{t.resourcesCta}</Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Placeholders;
