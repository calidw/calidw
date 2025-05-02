import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Terms of Service | Cali Door & Window',
  description: 'Terms and conditions for using Cali Door & Window products and services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Terms of Service
            </h1>
            
            <div className="text-slate-600">
              <p className="text-lg mb-8">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              
              <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the services offered by Cali Door & Window, including our website, products, installations, and customer support, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
              
              <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">2. Description of Services</h2>
              <p>
                Cali Door & Window offers premium quality doors, windows, and related hardware along with professional installation and consultation services for residential and commercial properties.
              </p>
              
              <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">3. Product Orders and Purchases</h2>
              <p>
                3.1. All product orders are subject to availability and acceptance by Cali Door & Window.<br />
                3.2. Prices are subject to change without notice until an order is confirmed.<br />
                3.3. Custom orders require a non-refundable deposit.
              </p>
              
              <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">4. Installation Services</h2>
              <p>
                For customers who purchase installation services, Cali Door & Window will provide professional installation according to industry standards. The customer is responsible for ensuring the installation site is accessible and ready for installation. We aren&apos;t responsible for additional work required due to unforeseen structural issues discovered during installation.
              </p>
              
              <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">5. Warranties</h2>
              <p>
                5.1. Product warranties are provided according to the manufacturer&apos;s terms and conditions.<br />
                5.2. Installation services are warranted for a period of one year from completion date.<br />
                5.3. Warranty claims must be submitted in writing and include proof of purchase.
              </p>
              
              <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">6. Payment Terms</h2>
              <p>
                6.1. Full payment is due upon completion of installation unless otherwise specified in writing.<br />
                6.2. Late payments are subject to a 1.5% monthly interest charge.<br />
                6.3. Customer agrees to pay all reasonable attorney&apos;s fees and collection costs in the event of non-payment.
              </p>
              
              <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">7. Cancellation Policy</h2>
              <p>
                Orders for standard products may be canceled within 48 hours of placing the order without penalty. Custom orders cannot be canceled once production has begun. Installation services may be rescheduled with 48 hours&apos; notice.
              </p>
              
              <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">8. Limitation of Liability</h2>
              <p>
                8.1. Cali Door & Window&apos;s liability is limited to the cost of the products and services provided.<br />
                8.2. We are not liable for indirect, consequential, or incidental damages.<br />
                8.3. We are not responsible for damages caused by improper maintenance, abuse, or natural disasters.
              </p>
              
              <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">9. Changes to Terms</h2>
              <p>
                Cali Door & Window reserves the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of the updated terms.
              </p>
              
              <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">10. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of the State of California, without giving effect to any principles of conflicts of law.
              </p>
              
              <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">11. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:<br />
                <strong>Email:</strong> Sales@calidw.com<br />
                <strong>Phone:</strong> (818) 282-3437<br />
                <strong>Address:</strong> 3746 Foothill Boulevard #1254, Glendale, CA 91214
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 