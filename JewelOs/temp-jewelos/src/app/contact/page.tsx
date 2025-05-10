import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const metadata = {
  title: 'Contact Us | JewelOS - Jewelry Business Management Platform',
  description: 'Get in touch with our team for a demo, support, or any questions about JewelOS jewelry business management platform.',
};

export default function ContactPage() {
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
            <Link href="/pricing" className="text-neutral-600 hover:text-amber-600 text-sm font-medium">
              Pricing
            </Link>
            <Link href="/blog" className="text-neutral-600 hover:text-amber-600 text-sm font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-amber-600 text-sm font-medium">
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
              Get in Touch
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              Our team is here to help you transform your jewelry business
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-neutral-700 mb-1">
                      First Name
                    </label>
                    <Input 
                      id="first-name"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Last Name
                    </label>
                    <Input 
                      id="last-name"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email
                  </label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                    Phone Number
                  </label>
                  <Input 
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">
                    Business Name
                  </label>
                  <Input 
                    id="company"
                    placeholder="Your Jewelry Business"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                    Subject
                  </label>
                  <select 
                    id="subject"
                    className="w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  >
                    <option value="" disabled selected>Select a topic</option>
                    <option value="demo">Request a Demo</option>
                    <option value="pricing">Pricing & Plans</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                  Send Message
                </Button>

                <p className="text-xs text-neutral-500 text-center">
                  By submitting this form, you agree to our <a href="#" className="text-amber-600 hover:underline">Privacy Policy</a> and <a href="#" className="text-amber-600 hover:underline">Terms of Service</a>.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <Card className="p-6 border">
                  <h3 className="font-semibold text-lg text-neutral-900 mb-4">Main Office</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-amber-500 mr-3">📍</span>
                      <p className="text-neutral-600">
                        JewelOS Technologies Pvt. Ltd.<br />
                        Cyber City, DLF Phase 2<br />
                        Gurugram, Haryana 122002<br />
                        India
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-500 mr-3">📱</span>
                      <p className="text-neutral-600">+91 98765 43210</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-500 mr-3">✉️</span>
                      <p className="text-neutral-600">info@jewelos.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border">
                  <h3 className="font-semibold text-lg text-neutral-900 mb-4">Sales & Demos</h3>
                  <p className="text-neutral-600 mb-4">
                    Interested in seeing JewelOS in action? Our sales team is ready to help.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-amber-500 mr-3">📱</span>
                      <p className="text-neutral-600">+91 98765 12345</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-500 mr-3">✉️</span>
                      <p className="text-neutral-600">sales@jewelos.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border">
                  <h3 className="font-semibold text-lg text-neutral-900 mb-4">Customer Support</h3>
                  <p className="text-neutral-600 mb-4">
                    Need help with your JewelOS account? Our support team is available.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-amber-500 mr-3">📱</span>
                      <p className="text-neutral-600">+91 98765 67890</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-500 mr-3">✉️</span>
                      <p className="text-neutral-600">support@jewelos.com</p>
                    </div>
                  </div>
                </Card>

                <div className="flex space-x-4 mt-8">
                  <a href="#" className="text-neutral-600 hover:text-amber-600">
                    <span className="sr-only">Facebook</span>
                    <span className="text-2xl">📘</span>
                  </a>
                  <a href="#" className="text-neutral-600 hover:text-amber-600">
                    <span className="sr-only">Instagram</span>
                    <span className="text-2xl">📸</span>
                  </a>
                  <a href="#" className="text-neutral-600 hover:text-amber-600">
                    <span className="sr-only">LinkedIn</span>
                    <span className="text-2xl">📑</span>
                  </a>
                  <a href="#" className="text-neutral-600 hover:text-amber-600">
                    <span className="sr-only">Twitter</span>
                    <span className="text-2xl">🐦</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Visit Us</h2>
            <p className="text-lg text-neutral-600">
              We'd love to meet you in person at our offices
            </p>
          </div>
          
          <div className="h-96 bg-neutral-200 rounded-lg overflow-hidden">
            {/* In a real application, you would embed a Google Map here */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-neutral-600">Interactive map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "How quickly will I get a response to my inquiry?",
                  answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our support number directly."
                },
                {
                  question: "Can I schedule a demo of JewelOS?",
                  answer: "Yes! You can request a demo through the form on this page, and our team will contact you to schedule a personalized demonstration."
                },
                {
                  question: "Do you offer on-site training?",
                  answer: "Yes, we offer on-site training for Enterprise customers. For Starter and Professional plans, we provide comprehensive online training sessions."
                },
                {
                  question: "How can I report a technical issue?",
                  answer: "If you're an existing customer, please log in to your account and use the support portal. Alternatively, you can email support@jewelos.com or call our support number."
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
                <Link href="/pricing">View Pricing</Link>
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