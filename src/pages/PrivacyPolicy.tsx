import React from 'react';
import { Section } from '@/components/UI';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <div className="bg-navy-900 py-24 md:py-32 text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-300 font-sans font-light">Last Updated: October, 2025</p>
        </div>
      </div>

      <Section className="bg-white">
        <div className="container mx-auto px-6 max-w-3xl font-sans text-navy-900 leading-relaxed">
          <div className="space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-slate-600 mb-4">
                Welcome to Ipanema Partners. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p className="text-slate-600">
                By using our website, you consent to the data practices described in this policy. If you do not agree with the terms of this Privacy Policy, please do not access our website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">2. Information We Collect</h2>
              <h3 className="font-bold text-lg mb-2">2.1 Personal Information</h3>
              <p className="text-slate-600 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-1">
                <li>Contact us through our website or email</li>
                <li>Request information about our services</li>
                <li>Subscribe to our newsletter or communications</li>
                <li>Engage our professional services</li>
              </ul>
              <p className="text-slate-600 mb-6">
                Personal information may include your name, email address, phone number, company name, job title, and any other information you choose to provide.
              </p>

              <h3 className="font-bold text-lg mb-2">2.2 Automatically Collected Information</h3>
              <p className="text-slate-600 mb-4">
                When you visit our website, we may automatically collect certain information about your device and browsing behavior, including:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages viewed and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Date and time of visits</li>
              </ul>
              <p className="text-slate-600 mt-4">
                This information is collected through cookies and similar tracking technologies.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-slate-600 mb-4">We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1">
                <li>To provide, maintain, and improve our services</li>
                <li>To respond to your inquiries and communicate with you</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To analyze website usage and improve user experience</li>
                <li>To detect, prevent, and address technical issues or fraud</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights, property, and safety</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="text-slate-600">
                We use cookies, web beacons, and similar technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us remember your preferences and understand how you use our site. You can control cookie preferences through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">5. Information Sharing and Disclosure</h2>
              <p className="text-slate-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, provided they agree to keep this information confidential.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information when required by law or in response to valid legal requests by public authorities.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</li>
                <li><strong>Consent:</strong> We may share information with your explicit consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">6. Data Security</h2>
              <p className="text-slate-600">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">7. Data Retention</h2>
              <p className="text-slate-600">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we will securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">8. Your Rights and Choices</h2>
              <p className="text-slate-600 mb-4">Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1 mb-4">
                <li>Access: Request access to the personal information we hold about you</li>
                <li>Correction: Request correction of inaccurate or incomplete information</li>
                <li>Deletion: Request deletion of your personal information</li>
                <li>Opt-Out: Opt out of receiving marketing communications</li>
                <li>Data Portability: Request a copy of your information in a structured format</li>
              </ul>
              <p className="text-slate-600">
                To exercise these rights, please contact us using the information provided in Section 11.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">9. Third-Party Links</h2>
              <p className="text-slate-600">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-slate-600">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a revised "Last Updated" date. Your continued use of our website after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">11. Contact Us</h2>
              <p className="text-slate-600 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
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

export default PrivacyPolicy;
