import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const metadata = {
  title: 'Pricing | JewelOS - Jewelry Business Management Platform',
  description: 'Flexible pricing plans for jewelry retailers of all sizes. Choose the plan that fits your business needs.',
};

export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="container mx-auto max-w-7xl flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <Image 
              src="/jewelos-logo.png" 
              alt="JewelOS Logo" 
              width={120} 
              height={30} 
              className="object-contain" 
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-neutral-600 hover:text-amber-600 text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-neutral-600 hover:text-amber-600 text-sm font-medium">
              About
            </Link>
            <Link href="/features" className="text-neutral-600 hover:text-amber-600 text-sm font-medium">
              Features
            </Link>
            <Link href="/pricing" className="text-amber-600 text-sm font-medium">
              Pricing
            </Link>
            <Link href="/blog" className="text-neutral-600 hover:text-amber-600 text-sm font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-neutral-600 hover:text-amber-600 text-sm font-medium">
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-neutral-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              Choose the plan that fits your jewelry business needs
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "₹4,999",
                period: "per month",
                description: "Perfect for small jewelry stores",
                features: [
                  "CRM & Lead Management",
                  "WhatsApp Business Integration",
                  "Task Management",
                  "1 Showroom",
                  "Up to 3 Users",
                  "500 Leads/month",
                  "Basic Reports",
                  "Email Support"
                ],
                cta: "Get Started",
                highlighted: false
              },
              {
                name: "Professional",
                price: "₹9,999",
                period: "per month",
                description: "For growing jewelry businesses",
                features: [
                  "Everything in Starter",
                  "AI-Powered Marketing",
                  "Campaign Planner",
                  "Up to 3 Showrooms",
                  "Up to 10 Users",
                  "2,000 Leads/month",
                  "Advanced Analytics",
                  "Priority Support",
                  "Team Performance Tracking"
                ],
                cta: "Get Started",
                highlighted: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "For large multi-location businesses",
                features: [
                  "Everything in Professional",
                  "Custom Integrations",
                  "Dedicated Account Manager",
                  "Unlimited Showrooms",
                  "Unlimited Users",
                  "Unlimited Leads",
                  "Advanced Security Features",
                  "24/7 Premium Support",
                  "Custom Reporting",
                  "On-premises Deployment Option"
                ],
                cta: "Contact Sales",
                highlighted: false
              }
            ].map((plan, i) => (
              <Card key={i} className={`p-8 border h-full flex flex-col ${plan.highlighted ? 'border-amber-400 shadow-xl relative' : 'border-neutral-200'}`}>
                {plan.highlighted && (
                  <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
                    <div className="inline-block bg-amber-500 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className={`py-2 px-4 rounded-full text-sm font-medium mb-4 inline-block ${plan.highlighted ? 'bg-amber-100 text-amber-800' : 'bg-neutral-100 text-neutral-800'}`}>
                  {plan.name}
                </div>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-neutral-900">{plan.price}</span>
                  {plan.period && <span className="ml-2 text-neutral-500">{plan.period}</span>}
                </div>
                <p className="text-neutral-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className={`w-full mt-auto ${plan.highlighted ? 'bg-amber-500 hover:bg-amber-600 text-white' : ''}`}>
                  <Link href={plan.name === "Enterprise" ? "/contact" : "/signup"}>
                    {plan.cta}
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-neutral-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Can I upgrade or downgrade my plan later?",
                  answer: "Yes, you can easily upgrade or downgrade your plan at any time. When upgrading, the new pricing will be applied immediately with prorated charges. When downgrading, the new rate will apply at the start of your next billing cycle."
                },
                {
                  question: "Do you offer annual billing?",
                  answer: "Yes, we offer annual billing with a 15% discount compared to monthly billing. Annual billing is available for all plans and can be selected during signup or changed in your billing settings."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards, UPI, and bank transfers. For Enterprise plans, we can also accommodate custom payment arrangements including purchase orders and invoicing."
                },
                {
                  question: "Is there a contract or minimum commitment?",
                  answer: "Our Starter and Professional plans are available on a month-to-month basis with no long-term commitment. Enterprise plans typically have a minimum 12-month agreement."
                },
                {
                  question: "Can I get a demo before I subscribe?",
                  answer: "Absolutely! We offer a free personalized demo for all plans. You can also try our platform with a 14-day free trial with full access to all features in the Professional plan."
                },
                {
                  question: "What kind of support is included?",
                  answer: "Starter plans include email support with responses within 24 hours. Professional plans include priority email support and chat support during business hours. Enterprise plans include 24/7 phone and email support with a dedicated account manager."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                  <h3 className="font-semibold text-lg text-neutral-900 mb-3">{faq.question}</h3>
                  <p className="text-neutral-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
            Feature Comparison
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-4 px-6 text-left font-medium text-neutral-500">Feature</th>
                  <th className="py-4 px-6 text-center font-medium text-neutral-500">Starter</th>
                  <th className="py-4 px-6 text-center font-medium text-amber-600">Professional</th>
                  <th className="py-4 px-6 text-center font-medium text-neutral-500">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {[
                  {
                    feature: "CRM & Lead Management",
                    starter: true,
                    professional: true,
                    enterprise: true
                  },
                  {
                    feature: "WhatsApp Integration",
                    starter: true,
                    professional: true,
                    enterprise: true
                  },
                  {
                    feature: "Task Management",
                    starter: true,
                    professional: true,
                    enterprise: true
                  },
                  {
                    feature: "AI Marketing Assistant",
                    starter: false,
                    professional: true,
                    enterprise: true
                  },
                  {
                    feature: "Campaign Planner",
                    starter: false,
                    professional: true,
                    enterprise: true
                  },
                  {
                    feature: "Custom Reports",
                    starter: false,
                    professional: true,
                    enterprise: true
                  },
                  {
                    feature: "API Access",
                    starter: false,
                    professional: false,
                    enterprise: true
                  },
                  {
                    feature: "Custom Integrations",
                    starter: false,
                    professional: false,
                    enterprise: true
                  },
                  {
                    feature: "Dedicated Account Manager",
                    starter: false,
                    professional: false,
                    enterprise: true
                  }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-neutral-50">
                    <td className="py-4 px-6 text-neutral-900 font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-neutral-700">
                      {row.starter ? <span className="text-green-500">✓</span> : <span className="text-neutral-300">—</span>}
                    </td>
                    <td className="py-4 px-6 text-center text-neutral-700 bg-amber-50">
                      {row.professional ? <span className="text-green-500">✓</span> : <span className="text-neutral-300">—</span>}
                    </td>
                    <td className="py-4 px-6 text-center text-neutral-700">
                      {row.enterprise ? <span className="text-green-500">✓</span> : <span className="text-neutral-300">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-neutral-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
            What Our Customers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "JewelOS has been worth every rupee. Our sales have increased by 30% since we started using the platform to follow up with customers and run targeted campaigns.",
                author: "Rajesh Kumar",
                role: "Owner, Kumar Jewellers, Mumbai"
              },
              {
                quote: "The WhatsApp integration is a game-changer. We can now share catalogs directly with customers and track all conversations in one place. The ROI is incredible.",
                author: "Priya Sharma",
                role: "Marketing Manager, Golden Designs, Delhi"
              },
              {
                quote: "We evaluated several CRM solutions but JewelOS was the only one built specifically for jewelry retailers. The family relationship tracking alone has transformed our business.",
                author: "Vikram Singh",
                role: "Director, Heritage Jewels, Jaipur"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="p-8 border border-neutral-200">
                <div className="text-amber-500 text-4xl mb-4">"</div>
                <p className="text-neutral-700 mb-6 italic">{testimonial.quote}</p>
                <div className="mt-auto">
                  <p className="font-semibold text-neutral-900">{testimonial.author}</p>
                  <p className="text-neutral-500 text-sm">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-amber-500 to-amber-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to get started?</h2>
            <p className="text-lg text-amber-100 mb-8">
              Join hundreds of jewelry retailers already using JewelOS to grow their business
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-neutral-100" asChild>
                <Link href="/signup">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <Image 
                  src="/jewelos-logo.png" 
                  alt="JewelOS Logo" 
                  width={150} 
                  height={40} 
                  className="object-contain"
                />
              </div>
              <p className="mb-4">The complete platform for jewelry retailers in India.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">Facebook</a>
                <a href="#" className="hover:text-white">Instagram</a>
                <a href="#" className="hover:text-white">LinkedIn</a>
              </div>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="/features" className="hover:text-white">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} JewelOS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 