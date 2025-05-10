import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Home() {
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
            <Link href="/" className="text-amber-600 text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-neutral-600 hover:text-amber-600 text-sm font-medium">
              About
            </Link>
            <Link href="/features" className="text-neutral-600 hover:text-amber-600 text-sm font-medium">
              Features
            </Link>
            <Link href="/pricing" className="text-neutral-600 hover:text-amber-600 text-sm font-medium">
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
      <section className="relative bg-gradient-to-b from-neutral-900 to-neutral-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                The Complete Platform for 
                <span className="text-amber-400"> Jewelry Retailers</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-200 max-w-2xl">
                JewelOS combines CRM, WhatsApp automation, AI-driven marketing, campaign planning, and task management into one powerful system for high-ticket jewelry businesses.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                  <Link href="/signup">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="#features">Explore Features</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
              <Image 
                src="/dashboard-preview.svg" 
                alt="JewelOS Dashboard" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Powerful Features for Jewelry Retailers</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Everything you need to manage customers, marketing, and sales in one platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "CRM & Lead Management",
                description: "Track leads, customer families, purchase history, and schedule follow-ups",
                icon: "👥"
              },
              {
                title: "WhatsApp Business Integration",
                description: "Send catalogs, offers, and manage customer conversations on WhatsApp",
                icon: "💬"
              },
              {
                title: "AI-Powered Marketing",
                description: "Create and schedule festivals, occasions and promotional campaigns",
                icon: "✨"
              },
              {
                title: "Task Management",
                description: "Assign and track tasks for your team members with deadlines",
                icon: "📋"
              },
              {
                title: "Customer Insights",
                description: "Understand customer preferences, purchase patterns and lifetime value",
                icon: "📊"
              },
              {
                title: "Team Collaboration",
                description: "Coordinate with your team, assign roles, and track performance",
                icon: "🤝"
              },
              {
                title: "Inventory Tracking",
                description: "Keep track of your jewelry inventory across multiple showrooms",
                icon: "💎"
              },
              {
                title: "Customizable Reports",
                description: "Generate detailed reports on sales, marketing, and team performance",
                icon: "📈"
              }
            ].map((feature, i) => (
              <Card key={i} className="p-6 border border-neutral-200 hover:border-amber-300 hover:shadow-md transition-all">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-neutral-900">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Trusted by Jewelry Businesses</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              See what our customers have to say about JewelOS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "JewelOS has transformed how we manage our customer relationships. The WhatsApp integration alone has increased our sales by 30%.",
                author: "Rajesh Kumar",
                company: "Kumar Jewellers, Mumbai"
              },
              {
                quote: "The AI-powered campaign suggestions have saved us countless hours and helped us engage with customers during key festivals and occasions.",
                author: "Priya Sharma",
                company: "Golden Designs, Delhi"
              },
              {
                quote: "As a multi-store operation, JewelOS has been instrumental in keeping our team coordinated and our inventory managed across locations.",
                author: "Vikram Singh",
                company: "Heritage Jewels, Jaipur"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="p-8 border border-neutral-200">
                <div className="text-amber-500 text-4xl mb-4">"</div>
                <p className="text-neutral-700 mb-6 italic">{testimonial.quote}</p>
                <div className="mt-auto">
                  <p className="font-semibold text-neutral-900">{testimonial.author}</p>
                  <p className="text-neutral-500 text-sm">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>

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
                  "500 Leads/month"
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
                  "Priority Support"
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
                  "24/7 Premium Support"
                ],
                cta: "Contact Sales",
                highlighted: false
              }
            ].map((plan, i) => (
              <Card key={i} className={`p-8 border ${plan.highlighted ? 'border-amber-400 shadow-xl' : 'border-neutral-200'}`}>
                <div className={`py-2 px-4 rounded-full text-sm font-medium mb-4 inline-block ${plan.highlighted ? 'bg-amber-100 text-amber-800' : 'bg-neutral-100 text-neutral-800'}`}>
                  {plan.name}
                </div>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-neutral-900">{plan.price}</span>
                  {plan.period && <span className="ml-2 text-neutral-500">{plan.period}</span>}
                </div>
                <p className="text-neutral-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className={`w-full ${plan.highlighted ? 'bg-amber-500 hover:bg-amber-600 text-white' : ''}`}>
                  <Link href="/login">{plan.cta}</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-800 to-neutral-900 text-white">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your jewelry business?</h2>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto mb-8">
            Join hundreds of jewelry retailers already using JewelOS to grow their business
          </p>
          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8">
            <Link href="/login">Get Started Today</Link>
          </Button>
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
                <a href="#" className="hover:text-white">
                  Facebook
                </a>
                <a href="#" className="hover:text-white">
                  Instagram
                </a>
                <a href="#" className="hover:text-white">
                  LinkedIn
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About Us</a></li>
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
