import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export const metadata = {
  title: 'Blog | JewelOS - Jewelry Business Management Platform',
  description: 'Read the latest articles, tips, and insights on jewelry retail industry trends and best practices.',
};

// Mock blog data
const blogPosts = [
  {
    id: '1',
    title: '5 Ways to Boost Jewelry Sales with WhatsApp Marketing',
    excerpt: 'Learn effective strategies to leverage WhatsApp to showcase your jewelry collection and drive more sales.',
    date: 'May 10, 2025',
    author: 'Priya Sharma',
    authorRole: 'Marketing Specialist',
    image: '/blog-whatsapp.jpg',
    category: 'Marketing',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'How to Build Customer Loyalty in the Jewelry Business',
    excerpt: 'Discover proven techniques to create lasting relationships with your customers and keep them coming back.',
    date: 'April 28, 2025',
    author: 'Vikram Singh',
    authorRole: 'Customer Success Lead',
    image: '/blog-loyalty.jpg',
    category: 'Customer Retention',
    readTime: '7 min read'
  },
  {
    id: '3',
    title: 'Preparing Your Jewelry Store for the Wedding Season',
    excerpt: 'A comprehensive guide to inventory planning, marketing, and customer service during the wedding season.',
    date: 'April 15, 2025',
    author: 'Rajesh Kumar',
    authorRole: 'Retail Operations Expert',
    image: '/blog-wedding.jpg',
    category: 'Seasonal',
    readTime: '8 min read'
  },
  {
    id: '4',
    title: 'Using AI to Predict Jewelry Trends: A Retailer\'s Guide',
    excerpt: 'How artificial intelligence can help jewelry retailers anticipate trends and make data-driven decisions.',
    date: 'April 5, 2025',
    author: 'Neha Gupta',
    authorRole: 'Data Scientist',
    image: '/blog-ai.jpg',
    category: 'Technology',
    readTime: '6 min read'
  },
  {
    id: '5',
    title: 'Managing Your Jewelry Inventory Efficiently',
    excerpt: 'Best practices for tracking, organizing, and optimizing your jewelry inventory across multiple locations.',
    date: 'March 22, 2025',
    author: 'Amit Patel',
    authorRole: 'Operations Manager',
    image: '/blog-inventory.jpg',
    category: 'Operations',
    readTime: '9 min read'
  },
  {
    id: '6',
    title: 'How to Create Compelling Jewelry Product Descriptions',
    excerpt: 'Writing tips to craft product descriptions that engage customers and drive sales for your jewelry business.',
    date: 'March 10, 2025',
    author: 'Deepika Singh',
    authorRole: 'Content Strategist',
    image: '/blog-content.jpg',
    category: 'Marketing',
    readTime: '5 min read'
  }
];

// Mock categories
const categories = [
  'Marketing', 'Technology', 'Customer Retention', 'Operations', 'Seasonal', 'Industry Trends', 'Best Practices'
];

export default function BlogPage() {
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
            <Link href="/blog" className="text-amber-600 text-sm font-medium">
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
              Jewelry Retail Insights
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              Tips, strategies, and insights to help your jewelry business thrive
            </p>
            <div className="relative max-w-lg mx-auto">
              <Input 
                placeholder="Search articles..." 
                className="pr-10 w-full"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12">Featured Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.slice(0, 2).map((post) => (
              <Card key={post.id} className="overflow-hidden border hover:shadow-md transition-shadow">
                <div className="aspect-w-16 aspect-h-9 relative h-60">
                  <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center">
                    <span className="text-neutral-400 text-xl">Featured Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">{post.category}</span>
                    <span className="text-neutral-500 text-xs ml-2">{post.date} · {post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    <Link href={`/blog/${post.id}`} className="hover:text-amber-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-neutral-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center mr-3">
                      <span className="text-neutral-600 text-xs">{post.author.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">{post.author}</p>
                      <p className="text-xs text-neutral-500">{post.authorRole}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="md:w-3/4">
              <h2 className="text-2xl font-bold text-neutral-900 mb-8">Latest Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.slice(2).map((post) => (
                  <Card key={post.id} className="border hover:shadow-md transition-shadow flex flex-col h-full">
                    <div className="aspect-w-16 aspect-h-9 relative h-48">
                      <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center">
                        <span className="text-neutral-400 text-xl">Post Image</span>
                      </div>
                    </div>
                    <div className="p-5 flex-grow">
                      <div className="flex items-center mb-3">
                        <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">{post.category}</span>
                        <span className="text-neutral-500 text-xs ml-2">{post.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900 mb-2">
                        <Link href={`/blog/${post.id}`} className="hover:text-amber-600 transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-neutral-600 text-sm mb-4">{post.excerpt}</p>
                      <div className="mt-auto pt-4">
                        <Link 
                          href={`/blog/${post.id}`}
                          className="text-amber-600 hover:text-amber-800 text-sm font-medium"
                        >
                          Read more →
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="inline-flex items-center">
                  <Button variant="outline" size="sm" disabled className="mr-2">
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="bg-amber-50 border-amber-200">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm" className="ml-2">
                    Next
                  </Button>
                </nav>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:w-1/4">
              <div className="space-y-8">
                {/* Categories */}
                <Card className="border p-5">
                  <h3 className="font-bold text-lg text-neutral-900 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, i) => (
                      <li key={i}>
                        <Link 
                          href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-neutral-600 hover:text-amber-600 transition-colors"
                        >
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Card>
                
                {/* Popular Posts */}
                <Card className="border p-5">
                  <h3 className="font-bold text-lg text-neutral-900 mb-4">Popular Posts</h3>
                  <ul className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <li key={post.id} className="flex items-start">
                        <div className="w-12 h-12 bg-neutral-200 rounded flex-shrink-0 mr-3">
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">
                            <Link 
                              href={`/blog/${post.id}`}
                              className="text-neutral-700 hover:text-amber-600 transition-colors"
                            >
                              {post.title}
                            </Link>
                          </h4>
                          <p className="text-neutral-500 text-xs">{post.date}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Card>
                
                {/* Newsletter */}
                <Card className="border p-5">
                  <h3 className="font-bold text-lg text-neutral-900 mb-4">Newsletter</h3>
                  <p className="text-neutral-600 text-sm mb-4">Subscribe to get the latest articles and updates.</p>
                  <form className="space-y-3">
                    <Input placeholder="Your email address" type="email" required />
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                      Subscribe
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
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