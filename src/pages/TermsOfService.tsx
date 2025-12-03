import React from 'react';
import { Section } from '@/components/UI';

const TermsOfService: React.FC = () => {
  return (
    <>
      <div className="bg-navy-900 py-24 md:py-32 text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-slate-300 font-sans font-light">Last Updated: October, 2025</p>
        </div>
      </div>

      <Section className="bg-white">
        <div className="container mx-auto px-6 max-w-3xl font-sans text-navy-900 leading-relaxed">
          <div className="space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-slate-600">
                These Terms of Service constitute a legally binding agreement between you and Ipanema Partners regarding your access to and use of our website and services. By accessing or using our website, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">2. Description of Services</h2>
              <p className="text-slate-600">
                Ipanema Partners provides professional consulting and advisory services. The specific nature and scope of services will be defined in separate engagement agreements or service contracts with our clients. Our website serves as an informational platform and point of contact for prospective and current clients.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">3. User Eligibility</h2>
              <p className="text-slate-600">
                You must be at least 18 years of age to use our website and services. By using our services, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">4. Intellectual Property Rights</h2>
              <h3 className="font-bold text-lg mb-2">4.1 Our Content</h3>
              <p className="text-slate-600 mb-4">
                All content on our website, including but not limited to text, graphics, logos, images, videos, software, and compilation of content, is the property of Ipanema Partners or its content suppliers and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any of our content without our express written permission.
              </p>
              <h3 className="font-bold text-lg mb-2">4.2 User Content</h3>
              <p className="text-slate-600">
                If you submit any content to us (such as feedback, suggestions, or inquiries), you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and incorporate such content for business purposes. You represent that you own or have the necessary rights to any content you submit.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">5. Acceptable Use</h2>
              <p className="text-slate-600 mb-4">You agree not to use our website or services to:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the intellectual property rights of others</li>
                <li>Transmit any harmful, threatening, abusive, or defamatory content</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Interfere with or disrupt our services or servers</li>
                <li>Engage in any form of automated data collection or scraping</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">6. Professional Services and Engagements</h2>
              <p className="text-slate-600">
                Any professional services provided by Ipanema Partners will be governed by separate written agreements. These Terms of Service apply to the use of our website and general interactions, but specific service engagements will be subject to additional contractual terms, including scope of work, fees, confidentiality provisions, and deliverables.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">7. Confidentiality</h2>
              <p className="text-slate-600">
                We respect the confidential nature of information shared during client engagements. Confidentiality obligations will be detailed in separate non-disclosure agreements or service contracts. Information you provide through our website contact forms will be handled in accordance with our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">8. Disclaimers and Limitations of Liability</h2>
              <h3 className="font-bold text-lg mb-2">8.1 Website Disclaimer</h3>
              <p className="text-slate-600 mb-4">
                Our website and its content are provided "as is" without warranties of any kind, either express or implied. We do not warrant that our website will be uninterrupted, error-free, or free from viruses or other harmful components. We make no representations about the accuracy, reliability, or completeness of any content on our website.
              </p>
              <h3 className="font-bold text-lg mb-2">8.2 Professional Advice Disclaimer</h3>
              <p className="text-slate-600 mb-4">
                Information provided on our website is for general informational purposes only and does not constitute professional advice. You should not rely on website content as a substitute for professional consultation specific to your circumstances. Any reliance you place on such information is strictly at your own risk.
              </p>
              <h3 className="font-bold text-lg mb-2">8.3 Limitation of Liability</h3>
              <p className="text-slate-600 mb-4">
                To the maximum extent permitted by law, Ipanema Partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1">
                <li>Your access to or use of (or inability to access or use) our website</li>
                <li>Any conduct or content of third parties on our website</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">9. Indemnification</h2>
              <p className="text-slate-600">
                You agree to defend, indemnify, and hold harmless Ipanema Partners, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of our website or services, or your violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">10. Third-Party Links and Services</h2>
              <p className="text-slate-600">
                Our website may contain links to third-party websites or services that are not owned or controlled by Ipanema Partners. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by your use of any such third-party content or services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">11. Termination</h2>
              <p className="text-slate-600">
                We reserve the right to terminate or suspend your access to our website and services immediately, without prior notice or liability, for any reason, including but not limited to breach of these Terms. Upon termination, your right to use our services will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">12. Modifications to Terms</h2>
              <p className="text-slate-600">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website with a revised "Last Updated" date. Your continued use of our website and services after such modifications constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">13. Governing Law and Jurisdiction</h2>
              <p className="text-slate-600">
                These Terms shall be governed by and construed in accordance with the laws of Florida, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the courts located in Florida for the resolution of any disputes arising from these Terms or your use of our services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">14. Dispute Resolution</h2>
              <p className="text-slate-600">
                Any disputes arising out of or relating to these Terms or our services shall first be attempted to be resolved through good faith negotiations. If negotiations fail, disputes may be resolved through binding arbitration in accordance with the rules of or through litigation in the courts specified in Section 13.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">15. Severability</h2>
              <p className="text-slate-600">
                If any provision of these Terms is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">16. Entire Agreement</h2>
              <p className="text-slate-600">
                These Terms, together with our Privacy Policy and any separate service agreements, constitute the entire agreement between you and Ipanema Partners regarding your use of our website and services, and supersede all prior agreements and understandings.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">17. Contact Information</h2>
              <p className="text-slate-600 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-serif font-bold text-navy-900 text-lg">Ipanema Partners</p>
                <p className="text-slate-600">Email: admin@ipanemapartners.com</p>
              </div>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
};

export default TermsOfService;
