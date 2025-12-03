import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Insights from './pages/Insights';
import FamilyOffice from './pages/FamilyOffice';
import Placeholders from './pages/Placeholders';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Contact from './pages/Contact';
import ArticleCFCRules from './pages/ArticleCFCRules';
import ArticleUSLLC from './pages/ArticleUSLLC';
import ArticleOffshoreTrusts from './pages/ArticleOffshoreTrusts';
import { LanguageProvider } from './contexts/LanguageContext';

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/family-office" element={<FamilyOffice />} />
            <Route path="/resources" element={<Placeholders page="resources" />} />
            <Route path="/client-portal" element={<Placeholders page="portal" />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/schedule-consultation" element={<Contact />} />
            <Route path="/article-cfc-rules" element={<ArticleCFCRules />} />
            <Route path="/article-us-llc" element={<ArticleUSLLC />} />
            <Route path="/article-offshore-trusts" element={<ArticleOffshoreTrusts />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
