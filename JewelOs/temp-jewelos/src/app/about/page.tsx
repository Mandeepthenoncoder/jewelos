import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'About Us | JewelOS - Jewelry Business Management Platform',
  description: 'Learn about our mission to empower jewelry retailers in India with an all-in-one business management platform.',
};

export default function AboutPage() {
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
            <Link href="/about" className="text-amber-600 text-sm font-medium">
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
      <section className="bg-neutral-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              About JewelOS
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              Building the future of jewelry retail technology in India
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Story</h2>
              <p className="text-neutral-600 mb-4">
                JewelOS was born from a deep understanding of the unique challenges faced by jewelry retailers in India. In 2022, our founders recognized that while the jewelry market was growing rapidly, technology adoption remained limited to basic point-of-sale systems.
              </p>
              <p className="text-neutral-600 mb-4">
                Most jewelry businesses were using disconnected tools - WhatsApp for customer communication, spreadsheets for inventory, and paper records for customer data. This fragmented approach was inefficient and made it difficult to provide personalized customer experiences.
              </p>
              <p className="text-neutral-600">
                We set out to build an integrated platform specifically designed for the unique needs of Indian jewelry retailers - from managing family relationships (crucial in jewelry purchases) to creating culturally relevant marketing campaigns for festivals and occasions.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/about-story.svg" 
                alt="JewelOS Team" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-neutral-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Mission</h2>
            <p className="text-lg text-neutral-600">
              To empower jewelry retailers with technology that respects tradition while enabling growth in the digital era.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-amber-600 text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Preserve Heritage</h3>
              <p className="text-neutral-600">
                We believe in preserving the unique customer relationships and craftsmanship that make Indian jewelry businesses special.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-amber-600 text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Digital Transformation</h3>
              <p className="text-neutral-600">
                We help traditional businesses adopt digital tools without disrupting their existing business models.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-amber-600 text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Enable Growth</h3>
              <p className="text-neutral-600">
                We provide the tools for jewelry businesses to expand their reach, build stronger customer relationships, and increase sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Team</h2>
            <p className="text-lg text-neutral-600">
              Meet the passionate experts behind JewelOS
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Rajesh Mehta',
                role: 'Founder & CEO',
                image: '/team-1.jpg',
                bio: '20+ years in jewelry retail before founding JewelOS'
              },
              {
                name: 'Priya Sharma',
                role: 'CTO',
                image: '/team-2.jpg',
                bio: 'Former tech lead at Microsoft with a passion for retail tech'
              },
              {
                name: 'Vikram Singh',
                role: 'Head of Customer Success',
                image: '/team-3.jpg',
                bio: 'Jewelry industry veteran helping businesses adopt technology'
              },
              {
                name: 'Anita Reddy',
                role: 'Product Manager',
                image: '/team-4.jpg',
                bio: 'Expert in UX design focused on creating intuitive experiences'
              }
            ].map((member, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 relative">
                  <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center">
                    <span className="text-neutral-400 text-5xl">{member.name.charAt(0)}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-neutral-900">{member.name}</h3>
                  <p className="text-amber-600 text-sm mb-2">{member.role}</p>
                  <p className="text-neutral-600 text-sm">{member.bio}</p>
                </div>
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