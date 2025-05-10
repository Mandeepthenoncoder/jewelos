import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const metadata = {
  title: 'Features | JewelOS - Jewelry Business Management Platform',
  description: 'Explore the powerful features of JewelOS designed specifically for jewelry retailers in India.',
};

export default function FeaturesPage() {
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
            <Link href="/features" className="text-amber-600 text-sm font-medium">
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
      <section className="bg-neutral-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Features Built for Jewelry Retailers
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              Designed specifically for the unique needs of the jewelry industry in India
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Customer Relationship Management</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">Family Relationship Tracking</h3>
                    <p className="text-neutral-600">Track family connections between customers - crucial for jewelry purchases related to weddings and family occasions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">Purchase History</h3>
                    <p className="text-neutral-600">Detailed records of customer purchases to help you provide personalized recommendations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">Occasion Reminders</h3>
                    <p className="text-neutral-600">Get alerted about customers' upcoming anniversaries, birthdays, and other important dates.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">Customer Tags</h3>
                    <p className="text-neutral-600">Organize customers by preferences, budget range, and interests for better targeting.</p>
                  </div>
                </li>
              </ul>
              <Button className="mt-6 bg-amber-500 hover:bg-amber-600 text-white" asChild>
                <Link href="/signup">Try CRM Features</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/features-crm.svg" 
                alt="CRM Features" 
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/features-whatsapp.svg" 
                alt="WhatsApp Features" 
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">WhatsApp Business Integration</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">Catalog Sharing</h3>
                    <p className="text-neutral-600">Send jewelry catalogs, product images, and custom collections directly via WhatsApp.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">Broadcast Messages</h3>
                    <p className="text-neutral-600">Send targeted promotions and announcements to customer segments with a few clicks.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">Message Templates</h3>
                    <p className="text-neutral-600">Create and save templates for common responses to save time.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">Conversation History</h3>
                    <p className="text-neutral-600">Keep complete records of all customer communications in one place.</p>
                  </div>
                </li>
              </ul>
              <Button className="mt-6 bg-amber-500 hover:bg-amber-600 text-white" asChild>
                <Link href="/signup">Try WhatsApp Features</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">AI-Driven Campaign Management</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">Festival Calendar</h3>
                    <p className="text-neutral-600">Built-in calendar of Indian festivals and jewelry buying occasions with campaign recommendations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">AI Campaign Suggestions</h3>
                    <p className="text-neutral-600">Receive AI-driven recommendations for campaign messaging based on customer data.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">Multi-Channel Management</h3>
                    <p className="text-neutral-600">Manage campaigns across WhatsApp, SMS, email, and in-store promotions from one place.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">Performance Analytics</h3>
                    <p className="text-neutral-600">Track opens, responses, and conversion rates for all your marketing efforts.</p>
                  </div>
                </li>
              </ul>
              <Button className="mt-6 bg-amber-500 hover:bg-amber-600 text-white" asChild>
                <Link href="/signup">Try Campaign Features</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/features-campaigns.svg" 
                alt="Campaign Features" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Features */}
      <section className="bg-neutral-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Additional Features</h2>
            <p className="text-lg text-neutral-600">
              JewelOS includes many more features to help you run your jewelry business efficiently
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Task Management",
                description: "Assign and track tasks for your team members with deadlines and progress tracking",
                icon: "📋"
              },
              {
                title: "Inventory Tracking",
                description: "Keep track of your jewelry inventory across multiple showrooms or locations",
                icon: "💎"
              },
              {
                title: "Team Collaboration",
                description: "Coordinate with your team, assign roles, and track individual performance",
                icon: "🤝"
              },
              {
                title: "Security Features",
                description: "Multi-level access controls and secure data storage for sensitive customer information",
                icon: "🔒"
              },
              {
                title: "Mobile App",
                description: "Access your business data on the go with our native mobile application",
                icon: "📱"
              },
              {
                title: "Custom Reports",
                description: "Generate detailed reports on sales, marketing, and team performance",
                icon: "📊"
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

      {/* Integrations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Seamless Integrations</h2>
            <p className="text-lg text-neutral-600">
              JewelOS connects with the tools you already use
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {["WhatsApp Business API", "SMS Services", "Email Marketing", "Payment Gateways", "Inventory Software", "Accounting Systems"].map((integration, i) => (
              <div key={i} className="bg-white p-4 border rounded-md">
                <span className="text-neutral-900 font-medium">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Ready to transform your jewelry business?</h2>
            <p className="text-lg text-neutral-600 mb-8">
              Join hundreds of jewelry retailers already using JewelOS to grow their business
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
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