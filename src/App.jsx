import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Layout,
  Users,
  Award,
  Search,
  Bell,
  PlayCircle,
  Clock,
  Star,
  ChevronRight,
  TrendingUp,
  Zap,
  CheckCircle,
  Globe,
  FileText,
  Download,
  Book,
  Video,
  ArrowRight,
  HelpCircle,
  Menu,
  X,
  Heart,
  Sparkles,
  Trophy,
  Calendar
} from 'lucide-react';

// --- Components ---

const Navbar = ({ currentPath, setPath }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => { setPath('home'); setIsOpen(false); }}>
        <div className="bg-indigo-600 p-2 rounded-xl">
          <BookOpen className="text-white w-6 h-6" />
        </div>
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
          EduVibe
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <button onClick={() => setPath('courses')} className={`hover:text-indigo-600 transition-colors ${currentPath === 'courses' ? 'text-indigo-600' : ''}`}>Courses</button>
        <button onClick={() => setPath('mentors')} className={`hover:text-indigo-600 transition-colors ${currentPath === 'mentors' ? 'text-indigo-600' : ''}`}>Mentors</button>
        <button onClick={() => setPath('pricing')} className={`hover:text-indigo-600 transition-colors ${currentPath === 'pricing' ? 'text-indigo-600' : ''}`}>Pricing</button>
        <button onClick={() => setPath('resources')} className={`hover:text-indigo-600 transition-colors ${currentPath === 'resources' ? 'text-indigo-600' : ''}`}>Resources</button>
        <button onClick={() => setPath('about')} className={`hover:text-indigo-600 transition-colors ${currentPath === 'about' ? 'text-indigo-600' : ''}`}>About</button>
        <button onClick={() => setPath('blog')} className={`hover:text-indigo-600 transition-colors ${currentPath === 'blog' ? 'text-indigo-600' : ''}`}>Blog</button>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:block px-5 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50 rounded-full transition-all">
          Log in
        </button>
        <button className="px-6 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-lg shadow-indigo-200 transition-all">
          Join Free
        </button>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-600 hover:text-indigo-600 transition-colors">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 md:hidden shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            <button onClick={() => { setPath('courses'); setIsOpen(false); }} className={`text-left hover:text-indigo-600 transition-colors ${currentPath === 'courses' ? 'text-indigo-600' : 'text-slate-600'}`}>Courses</button>
            <button onClick={() => { setPath('mentors'); setIsOpen(false); }} className={`text-left hover:text-indigo-600 transition-colors ${currentPath === 'mentors' ? 'text-indigo-600' : 'text-slate-600'}`}>Mentors</button>
            <button onClick={() => { setPath('pricing'); setIsOpen(false); }} className={`text-left hover:text-indigo-600 transition-colors ${currentPath === 'pricing' ? 'text-indigo-600' : 'text-slate-600'}`}>Pricing</button>
            <button onClick={() => { setPath('resources'); setIsOpen(false); }} className={`text-left hover:text-indigo-600 transition-colors ${currentPath === 'resources' ? 'text-indigo-600' : 'text-slate-600'}`}>Resources</button>
            <button onClick={() => { setPath('about'); setIsOpen(false); }} className={`text-left hover:text-indigo-600 transition-colors ${currentPath === 'about' ? 'text-indigo-600' : 'text-slate-600'}`}>About</button>
            <button onClick={() => { setPath('blog'); setIsOpen(false); }} className={`text-left hover:text-indigo-600 transition-colors ${currentPath === 'blog' ? 'text-indigo-600' : 'text-slate-600'}`}>Blog</button>
            <div className="border-t pt-4 space-y-2">
              <button className="block w-full text-left px-4 py-2 text-slate-600 hover:text-indigo-600 transition-colors">Log in</button>
              <button className="block w-full px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all">Join Free</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="px-8 py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
    {/* Decorative Elements */}
    <div className="absolute top-20 right-10 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl" />
    <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-400/10 rounded-full blur-3xl" />

    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6">
          <Zap className="w-3 h-3" /> Future of Learning
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
          Master any skill <br />
          <span className="text-indigo-600 italic">without</span> the grind.
        </h1>
        <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
          Interactive courses designed by world-class industry experts. Join 50k+ students building the future of technology and design.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-indigo-200">
            Explore Courses
          </button>
          <button className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-2xl hover:bg-slate-50 transition-all flex items-center gap-2">
            <PlayCircle className="w-5 h-5 text-indigo-600" />
            Watch Demo
          </button>
        </div>

        <div className="mt-12 flex items-center gap-6">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
            ))}
          </div>
          <div className="text-sm">
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-4 h-4 fill-current" /> 4.9/5
            </div>
            <p className="text-slate-500">Trusted by students worldwide</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
            alt="Students collaborating"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent" />
        </div>

        {/* Floating Stat Card */}
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 animate-bounce-slow">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
              <TrendingUp className="text-emerald-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Your Progress</p>
              <p className="text-xl font-bold text-slate-900">+84% This Month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CourseCard = ({ title, instructor, price, rating, category, image }) => (
  <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300">
    <div className="relative h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-indigo-600">
        {category}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-1">{title}</h3>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded-full bg-slate-200" />
        <span className="text-sm text-slate-500">{instructor}</span>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
        <div className="flex items-center gap-1 text-sm font-bold text-slate-900">
          <Star className="w-4 h-4 text-amber-400 fill-current" />
          {rating}
        </div>
        <div className="text-xl font-black text-indigo-600">${price}</div>
      </div>
    </div>
  </div>
);

const CourseGrid = () => {
  const courses = [
    { title: "UI/UX Mastery: 2026 Edition", instructor: "Alex Rivera", price: "49", rating: "4.9", category: "Design", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=400" },
    { title: "Full Stack Next.js & GraphQL", instructor: "Sarah Chen", price: "89", rating: "4.8", category: "Development", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400" },
    { title: "AI Engineering with Python", instructor: "David Miller", price: "120", rating: "5.0", category: "Data Science", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400" },
    { title: "Modern Marketing Psychology", instructor: "Emma Watson", price: "35", rating: "4.7", category: "Business", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <section className="px-8 py-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Courses</h2>
          <p className="text-slate-500">Pick up where you left off or start something new.</p>
        </div>
        <div className="flex gap-2">
          {["All", "Design", "Dev", "Business"].map((cat) => (
            <button key={cat} className="px-4 py-2 text-sm font-medium rounded-xl border border-slate-200 hover:bg-slate-900 hover:text-white transition-all">
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course, idx) => <CourseCard key={idx} {...course} />)}
      </div>
    </section>
  );
};

const Features = () => (
  <section className="px-8 py-20 bg-slate-900 text-white rounded-[3rem] mx-4 md:mx-8">
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
        <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Layout className="text-indigo-400 w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold mb-4">Adaptive Learning</h3>
        <p className="text-slate-400 text-sm leading-relaxed">Our AI analyzes your performance to create a custom curriculum that fits your speed.</p>
      </div>
      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
        <div className="w-16 h-16 bg-violet-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Users className="text-violet-400 w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold mb-4">Peer Collaboration</h3>
        <p className="text-slate-400 text-sm leading-relaxed">Connect with study groups and work on real projects with students from 120+ countries.</p>
      </div>
      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
        <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Award className="text-emerald-400 w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold mb-4">Verified Certificates</h3>
        <p className="text-slate-400 text-sm leading-relaxed">Earn industry-recognized certificates that directly link to your LinkedIn and resume.</p>
      </div>
    </div>
  </section>
);

const HomePage = () => (
  <>
    <Hero />

    {/* Trusted By Section */}
    <div className="px-8 py-10 flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-40">
      <div className="text-2xl font-black">Google</div>
      <div className="text-2xl font-black">Microsoft</div>
      <div className="text-2xl font-black">Stripe</div>
      <div className="text-2xl font-black">Airbnb</div>
    </div>

    <CourseGrid />

    <Features />

    {/* CTA Section */}
    <section className="px-8 py-32 text-center max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
        Ready to change your <br />
        career trajectory?
      </h2>
      <p className="text-slate-500 mb-10 text-lg">
        No credit card required to start. Experience our first 3 modules for free.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="px-10 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-indigo-100 hover:-translate-y-1 transition-all">
          Join EduVibe Now
        </button>
        <button className="px-10 py-4 bg-slate-100 text-slate-900 font-bold rounded-2xl hover:bg-slate-200 transition-all">
          View Curriculum
        </button>
      </div>
    </section>
  </>
);

const Footer = () => (
  <footer className="px-8 py-12 bg-white border-t border-slate-100">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="bg-indigo-600 p-1.5 rounded-lg">
          <BookOpen className="text-white w-4 h-4" />
        </div>
        <span className="text-lg font-bold text-slate-900">EduVibe</span>
      </div>
      <p className="text-slate-400 text-sm">© 2026 EduVibe Inc. Built with React & Tailwind CSS.</p>
      <div className="flex gap-6 text-slate-400 text-sm font-medium">
        <a href="#" className="hover:text-indigo-600">Twitter</a>
        <a href="#" className="hover:text-indigo-600">GitHub</a>
        <a href="#" className="hover:text-indigo-600">Discord</a>
      </div>
    </div>
  </footer>
);



// --- Page: About ---

const AboutPage = () => (
  <div className="animate-in fade-in slide-in-from-right-4 duration-700 pb-20">
    <header className="px-8 py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">We build the <span className="text-indigo-400">future</span> workforce.</h1>
        <p className="text-xl text-slate-400 font-medium leading-relaxed">EduVibe is more than a platform. It's a technical ecosystem designed to take you from zero to industry-ready in record time.</p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-500 rounded-full blur-[120px]" />
      </div>
    </header>

    {/* Section 1: Core Values */}
    <section className="px-8 py-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center border-b border-slate-100">
      <div className="grid grid-cols-2 gap-4">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-2xl" alt="Team" />
        <div className="space-y-4 pt-12">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-2xl" alt="Office" />
          <div className="bg-indigo-600 p-8 rounded-3xl text-white">
            <p className="text-4xl font-black">98%</p>
            <p className="text-xs font-bold uppercase tracking-widest opacity-70">Job Placement Rate</p>
          </div>
        </div>
      </div>
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 text-violet-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          <Sparkles className="w-3 h-3" /> Our Philosophy
        </div>
        <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">Educational high-fidelity for everyone.</h2>
        <p className="text-slate-600 mb-8 font-medium leading-relaxed">We believe that high-quality education shouldn't be gated by geography or high-interest student loans. Our curriculum is built by current practitioners working at the world's leading tech companies.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: Heart, title: "Student First", desc: "Every module is refined based on student feedback." },
            { icon: Globe, title: "Global Network", desc: "Connect with peers from 140+ countries." }
          ].map((item, i) => (
            <div key={i}>
              <item.icon className="w-6 h-6 text-indigo-600 mb-3" />
              <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
              <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* New Section 2: Timeline/Milestones */}
    <section className="px-8 py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Our Journey</h2>
          <p className="text-slate-500 font-medium italic">From a small Discord server to a global learning hub.</p>
        </div>
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          {[
            { year: "2023", title: "The Inception", desc: "Founded in San Francisco by three engineering leads who were tired of outdated bootcamps." },
            { year: "2024", title: "10,000 Milestone", desc: "We crossed our first 10k student mark and launched our signature UI/UX Mastery course." },
            { year: "2025", title: "Enterprise Launch", desc: "Partnered with tech giants to provide internal training for Fortune 500 engineering teams." },
            { year: "2026", title: "EduVibe AI", desc: "Integrated personalized AI tutoring to provide 24/7 support for every learner." },
          ].map((m, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 text-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-sm border border-slate-100">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-black text-indigo-600">{m.year}</div>
                </div>
                <div className="text-slate-900 font-bold mb-1">{m.title}</div>
                <div className="text-slate-500 text-sm font-medium">{m.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* New Section 3: Leadership/Team */}
    <section className="px-8 py-24 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div className="max-w-xl">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Meet the Visionaries</h2>
          <p className="text-slate-500 font-medium">Our team consists of former leads from Google, Meta, and Stripe, dedicated to democratizing high-end technical skills.</p>
        </div>
        <button className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl text-xs uppercase tracking-widest">Join our team</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {[
          { name: "Dr. Julian Voss", role: "CEO & Founder", bio: "Former Engineering Director at Stripe. Passionate about accessible systems design.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
          { name: "Elena Rodriguez", role: "Head of Curriculum", bio: "Former Principal Designer at Airbnb. Focused on the intersection of AI and human-centric design.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
          { name: "Marcus Thorne", role: "Chief Technology Officer", bio: "Open source contributor and former Netflix infrastructure lead.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
        ].map((t, i) => (
          <div key={i} className="group">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-indigo-600 rounded-[2rem] rotate-3 group-hover:rotate-6 transition-transform opacity-10" />
              <img src={t.img} alt={t.name} className="relative w-full aspect-square object-cover rounded-[2rem] shadow-xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">{t.name}</h3>
            <p className="text-indigo-600 text-xs font-black uppercase tracking-widest mb-4">{t.role}</p>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">{t.bio}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);



// --- Page: Blog ---

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Trends', 'Design', 'Dev', 'Career'];

  const posts = [
    { title: "The Rise of Distributed Engineering Teams", author: "Sarah J.", date: "March 12, 2026", category: "Trends", readTime: "8 min", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800", excerpt: "As we move into 2026, the concept of a 'local office' is becoming a relic of the past. Discover how the world's most innovative companies are structuring their remote engineering pipelines." },
    { title: "Why SVG is Better Than Icon Fonts", author: "Marco K.", date: "Feb 28, 2026", category: "Design", readTime: "5 min", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800", excerpt: "Accessibility, performance, and scalability. We dive deep into why your team should migrate from icon fonts to inline SVGs for modern web applications." },
    { title: "Mastering React Server Components", author: "Alex R.", date: "Jan 15, 2026", category: "Dev", readTime: "12 min", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800", excerpt: "Server components are changing the mental model of React development. Learn how to optimize your bundle size and improve LCP with our comprehensive technical guide." },
    { title: "Productivity Hacks for Designers", author: "Emma L.", date: "Dec 20, 2025", category: "Career", readTime: "6 min", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800", excerpt: "From Figma plugins to AI-assisted wireframing, discover the tools that are helping designers produce 2x more work in half the time." },
    { title: "Building Scalable CSS with Tailwind", author: "Josh W.", date: "Nov 05, 2025", category: "Dev", readTime: "10 min", img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800", excerpt: "Utility-first CSS is no longer a trend—it's the industry standard. Here is how to keep your Tailwind configuration maintainable across large teams." },
    { title: "Landing Your First Six-Figure Tech Role", author: "David M.", date: "Oct 18, 2025", category: "Career", readTime: "15 min", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", excerpt: "The market is competitive, but the right combination of portfolio projects and networking can land you that dream offer. Here's our battle-tested blueprint." },
  ];

  const filteredPosts = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory);

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-700 bg-slate-50 min-h-screen pb-20">
      {/* Featured Post */}
      <section className="bg-slate-900 text-white px-8 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-indigo-600 rounded-[2.5rem] rotate-2 group-hover:rotate-3 transition-transform opacity-20" />
            <img src={posts[0].img} alt="Featured" className="relative rounded-[2.5rem] aspect-video object-cover shadow-2xl" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Trophy className="w-3 h-3" /> Featured Article
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-tight">The Future of Remote Engineering in 2026.</h1>
            <p className="text-slate-400 text-lg font-medium mb-8 leading-relaxed">
              We interviewed 50 CTOs from the world's leading tech companies to understand how they are hiring, managing, and scaling distributed teams.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=40" className="w-10 h-10 rounded-full border border-white/10" alt="Author" />
              <div>
                <p className="font-bold text-sm">Sarah Jenkins</p>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">March 12, 2026 — 8 min read</p>
              </div>
            </div>
            <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl flex items-center gap-2 group">
              Read Full Feature <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Categories & Search */}
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8 border-b border-slate-200">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-slate-500 hover:bg-slate-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative group w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input type="text" placeholder="Search articles..." className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-sm" />
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map((post, i) => (
            <div key={i} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col">
              <div className="relative aspect-video overflow-hidden">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-widest text-indigo-600">
                  {post.category}
                </div>
              </div>
              <div className="p-8 flex-grow">
                <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                  <Calendar className="w-3 h-3" /> {post.date} — {post.readTime}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors leading-tight">{post.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-black text-indigo-600 uppercase">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-xs font-bold text-slate-400">{post.author}</span>
                  </div>
                  <button className="text-indigo-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2 group/btn">
                    Read More <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination Placeholder */}
        <div className="mt-20 flex justify-center items-center gap-4">
          <button className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 transition-colors"><ChevronRight className="w-4 h-4 rotate-180" /></button>
          <div className="flex gap-2">
            <span className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">1</span>
            <span className="w-10 h-10 rounded-xl bg-white text-slate-500 flex items-center justify-center font-bold text-sm border border-slate-100 hover:bg-slate-50 cursor-pointer">2</span>
            <span className="w-10 h-10 rounded-xl bg-white text-slate-500 flex items-center justify-center font-bold text-sm border border-slate-100 hover:bg-slate-50 cursor-pointer">3</span>
          </div>
          <button className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 transition-colors"><ChevronRight className="w-4 h-4" /></button>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-8 py-10">
        <div className="bg-indigo-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-3xl font-black mb-4 relative z-10">Get our best insights, every Tuesday.</h2>
          <p className="text-indigo-100 font-medium mb-8 max-w-xl mx-auto relative z-10 opacity-80">
            Join 45,000+ subscribers and get technical tutorials, industry trends, and career advice delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10">
            <input type="email" placeholder="you@example.com" className="flex-grow px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20 transition-all font-medium" />
            <button className="px-8 py-4 bg-white text-indigo-600 font-black uppercase tracking-widest text-xs rounded-2xl shadow-xl hover:scale-105 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Page: Courses (Expanded) ---

const CoursesPage = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const courses = [
    { id: 1, title: "UI/UX Mastery: 2026 Edition", instructor: "Alex Rivera", price: 49, rating: 4.9, category: "Design", lessons: 24, image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=400", level: "Intermediate" },
    { id: 2, title: "Full Stack Next.js & GraphQL", instructor: "Sarah Chen", price: 89, rating: 4.8, category: "Development", lessons: 42, image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400", level: "Advanced" },
    { id: 3, title: "AI Engineering with Python", instructor: "David Miller", price: 120, rating: 5.0, category: "Data Science", lessons: 38, image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400", level: "Intermediate" },
    { id: 4, title: "Modern Marketing Psychology", instructor: "Emma Watson", price: 35, rating: 4.7, category: "Business", lessons: 18, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400", level: "Beginner" },
    { id: 5, title: "Advanced Typography", instructor: "Leo Vance", price: 29, rating: 4.9, category: "Design", lessons: 12, image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=400", level: "Advanced" },
    { id: 6, title: "Cybersecurity Fundamentals", instructor: "Rick Sanchez", price: 99, rating: 4.6, category: "Development", lessons: 50, image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400", level: "Beginner" },
  ];

  const filtered = courses
    .filter(c => filter === 'All' || c.category === filter)
    .filter(c => c.title.toLowerCase().includes(searchTerm.toLowerCase()) || c.instructor.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      {/* Search & Filter Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div>
          <h1 className="text-4xl font-black text-slate-900 mb-2">Explore Library</h1>
          <p className="text-slate-500">Master the most in-demand skills of 2026.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {['All', 'Design', 'Development', 'Data Science', 'Business'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${filter === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search courses or instructors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {filtered.map(course => (
          <div key={course.id} className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all">
            <div className="relative h-56">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black text-slate-700 uppercase">
                {course.level}
              </div>
              <div className="absolute bottom-4 left-4 bg-indigo-600 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg">
                {course.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-1">{course.title}</h3>
              <div className="flex items-center gap-4 text-slate-500 text-sm mb-6">
                <div className="flex items-center gap-1.5"><Users className="w-4 h-4 text-indigo-400" /> {course.instructor}</div>
                <div className="flex items-center gap-1.5"><PlayCircle className="w-4 h-4 text-indigo-400" /> {course.lessons} Lessons</div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Price</span>
                  <div className="text-2xl font-black text-slate-900">${course.price}</div>
                </div>
                <button className="px-6 py-3 bg-indigo-50 text-indigo-600 font-bold rounded-2xl hover:bg-indigo-600 hover:text-white transition-all">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* NEW: Learning Paths Section */}
      <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" />
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-6 italic">Not sure where to start?</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">Our curated Learning Paths guide you from absolute beginner to industry professional with a structured curriculum.</p>
            <div className="space-y-4">
              {[
                { title: "The Frontend Architect", steps: "12 Courses", icon: Layout },
                { title: "Data Science Specialization", steps: "8 Courses", icon: TrendingUp },
                { title: "UX Research Masterclass", steps: "10 Courses", icon: Users }
              ].map((path, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group">
                  <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400">
                    {React.createElement(path.icon, { className: "w-5 h-5" })}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm">{path.title}</h4>
                    <p className="text-xs text-slate-500">{path.steps}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-white transition-all" />
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-indigo-500 to-violet-600 p-1 rounded-3xl shadow-2xl">
              <div className="bg-slate-900 rounded-[calc(1.5rem-1px)] p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center font-black text-xl italic">A</div>
                  <div>
                    <h4 className="font-bold">Next Lesson</h4>
                    <p className="text-xs text-slate-500">Resume: Micro-interactions in Framer Motion</p>
                  </div>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full mb-6">
                  <div className="bg-indigo-500 w-3/4 h-full rounded-full" />
                </div>
                <button className="w-full py-4 bg-indigo-600 rounded-xl font-bold hover:bg-indigo-700 transition-all">Resume Learning</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Page: Mentors (Expanded) ---

const MentorsPage = () => {
  const mentors = [
    { name: "Sarah Drasner", role: "Sr. Engineer @ Netlify", expertise: "Frontend & Animation", img: "https://i.pravatar.cc/150?u=sarah", students: "1.2k", sessionPrice: "$120/hr" },
    { name: "Gary Simon", role: "Design Expert", expertise: "UI/UX & Branding", img: "https://i.pravatar.cc/150?u=gary", students: "4.5k", sessionPrice: "$150/hr" },
    { name: "Kent C. Dodds", role: "JavaScript Teacher", expertise: "React & Testing", img: "https://i.pravatar.cc/150?u=kent", students: "10k+", sessionPrice: "$200/hr" },
    { name: "Cassidy Williams", role: "CTO @ Contenda", expertise: "Web Dev & Career", img: "https://i.pravatar.cc/150?u=cass", students: "2.1k", sessionPrice: "$110/hr" },
    { name: "Josh Comeau", role: "Interactive Developer", expertise: "CSS & Animation", img: "https://i.pravatar.cc/150?u=josh", students: "3.8k", sessionPrice: "$180/hr" },
    { name: "Angie Jones", role: "VP @ TBD", expertise: "Java & Automation", img: "https://i.pravatar.cc/150?u=angie", students: "1.9k", sessionPrice: "$140/hr" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Learn from the best</h1>
        <p className="text-slate-500 max-w-2xl mx-auto italic">"A single hour with a mentor can save you 100 hours of frustrated debugging."</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {mentors.map((mentor, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-indigo-200 hover:shadow-xl transition-all group">
            <div className="flex items-start justify-between mb-6">
              <div className="relative">
                <img src={mentor.img} alt={mentor.name} className="w-24 h-24 rounded-3xl object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform" />
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 w-6 h-6 rounded-full border-4 border-white shadow-sm" />
              </div>
              <div className="text-right">
                <div className="text-sm font-black text-indigo-600">{mentor.sessionPrice}</div>
                <div className="text-xs text-slate-400">Next Available: Today</div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">{mentor.name}</h3>
            <p className="text-slate-500 text-sm font-medium mb-4">{mentor.role}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {mentor.expertise.split('&').map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-50 rounded-lg text-[10px] font-bold text-slate-400 uppercase tracking-wider">{tag.trim()}</span>
              ))}
            </div>
            <div className="flex items-center justify-between mb-8 p-3 bg-slate-50 rounded-2xl">
              <div className="text-center flex-1 border-r border-slate-200">
                <div className="text-sm font-bold text-slate-900">{mentor.students}</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Students</div>
              </div>
              <div className="text-center flex-1">
                <div className="text-sm font-bold text-slate-900">4.9/5</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Rating</div>
              </div>
            </div>
            <button className="w-full py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2">
              Book 1:1 Session <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* NEW: Become a Mentor Section */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <div className="bg-indigo-50 p-12 rounded-[3rem] flex flex-col justify-center">
          <h2 className="text-3xl font-black text-indigo-900 mb-6 leading-tight">Are you an industry expert?</h2>
          <p className="text-indigo-700/70 mb-8 leading-relaxed">Share your knowledge, build your personal brand, and earn extra income by mentoring the next generation of tech talent.</p>
          <button className="self-start px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-xl shadow-indigo-200">Apply to Teach</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Total Mentors", val: "450+", icon: Users },
            { label: "Hours Taught", val: "12,000+", icon: Clock },
            { label: "Avg. Rating", val: "4.8/5", icon: Star },
            { label: "Countries", val: "84", icon: Globe }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-6 rounded-3xl text-center flex flex-col items-center justify-center">
              <stat.icon className="w-6 h-6 text-indigo-600 mb-2" />
              <div className="text-2xl font-black text-slate-900">{stat.val}</div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Page: Pricing (Expanded) ---

const PricingPage = () => {
  const faqs = [
    { q: "Can I cancel my subscription anytime?", a: "Yes, you can cancel your subscription at any time from your account settings. You will retain access until the end of your billing cycle." },
    { q: "Do you offer student discounts?", a: "Absolutely! Verify your student ID to get 50% off our Pro Annual plan." },
    { q: "What are 'Verified Certificates'?", a: "These are digital credentials that use blockchain technology for verification, making them easily shareable on LinkedIn and with employers." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Flexible Plans</h1>
        <p className="text-slate-500">Invest in your career. Choose the plan that fits your ambition.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-32">
        {/* Starter */}
        <div className="p-8 bg-white border border-slate-200 rounded-[2.5rem] text-center">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Starter</h3>
          <div className="text-5xl font-black text-slate-900 mb-2">$0<span className="text-sm font-medium text-slate-400">/mo</span></div>
          <p className="text-slate-500 text-sm mb-8">Perfect for exploring our basics.</p>
          <ul className="text-left space-y-4 mb-10">
            <li className="flex items-center gap-3 text-sm text-slate-600"><CheckCircle className="text-indigo-600 w-5 h-5" /> 10 Free Modules</li>
            <li className="flex items-center gap-3 text-sm text-slate-600"><CheckCircle className="text-indigo-600 w-5 h-5" /> Community Access</li>
            <li className="flex items-center gap-3 text-sm text-slate-400"><CheckCircle className="w-5 h-5" /> No Certificates</li>
          </ul>
          <button className="w-full py-4 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all">Get Started</button>
        </div>

        {/* Pro */}
        <div className="p-10 bg-slate-900 text-white rounded-[3rem] text-center shadow-2xl relative overflow-hidden transform md:scale-110 z-10">
          <div className="absolute top-4 right-4 bg-indigo-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest">Most Popular</div>
          <h3 className="text-lg font-bold mb-4">Pro Unlimited</h3>
          <div className="text-5xl font-black mb-2">$29<span className="text-sm font-medium text-slate-400">/mo</span></div>
          <p className="text-slate-400 text-sm mb-8">The complete learning experience.</p>
          <ul className="text-left space-y-4 mb-10">
            <li className="flex items-center gap-3 text-sm"><CheckCircle className="text-indigo-400 w-5 h-5" /> All 500+ Courses</li>
            <li className="flex items-center gap-3 text-sm"><CheckCircle className="text-indigo-400 w-5 h-5" /> Verified Certificates</li>
            <li className="flex items-center gap-3 text-sm"><CheckCircle className="text-indigo-400 w-5 h-5" /> Offline Access</li>
            <li className="flex items-center gap-3 text-sm"><CheckCircle className="text-indigo-400 w-5 h-5" /> 1 Mentor Call / Month</li>
          </ul>
          <button className="w-full py-4 bg-indigo-600 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-900/50">Go Pro Now</button>
        </div>

        {/* Enterprise */}
        <div className="p-8 bg-white border border-slate-200 rounded-[2.5rem] text-center">
          <h3 className="text-lg font-bold text-slate-900 mb-4">For Teams</h3>
          <div className="text-5xl font-black text-slate-900 mb-2">Custom</div>
          <p className="text-slate-500 text-sm mb-8">For schools and corporations.</p>
          <ul className="text-left space-y-4 mb-10">
            <li className="flex items-center gap-3 text-sm text-slate-600"><CheckCircle className="text-indigo-600 w-5 h-5" /> LMS Integration</li>
            <li className="flex items-center gap-3 text-sm text-slate-600"><CheckCircle className="text-indigo-600 w-5 h-5" /> Team Analytics</li>
            <li className="flex items-center gap-3 text-sm text-slate-600"><CheckCircle className="text-indigo-600 w-5 h-5" /> Dedicated Support</li>
          </ul>
          <button className="w-full py-4 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all">Contact Sales</button>
        </div>
      </div>

      {/* NEW: Comparison Table */}
      <div className="hidden lg:block mb-32">
        <h2 className="text-3xl font-black text-center mb-12">Compare Features</h2>
        <div className="bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-8 py-6 text-sm font-black text-slate-900">Features</th>
                <th className="px-8 py-6 text-sm font-black text-indigo-600">Starter</th>
                <th className="px-8 py-6 text-sm font-black text-indigo-600">Pro</th>
                <th className="px-8 py-6 text-sm font-black text-indigo-600">Team</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                ["Course Access", "Limited (10)", "Unlimited", "Unlimited"],
                ["Certification", "-", "Included", "Included"],
                ["Discord Access", "Basic", "Priority Channels", "Custom Server"],
                ["LMS Integration", "-", "-", "Included"],
                ["API Access", "-", "-", "Full Access"]
              ].map((row, i) => (
                <tr key={i}>
                  <td className="px-8 py-6 text-sm text-slate-600 font-medium">{row[0]}</td>
                  <td className="px-8 py-6 text-sm text-slate-900 font-bold">{row[1]}</td>
                  <td className="px-8 py-6 text-sm text-slate-900 font-bold">{row[2]}</td>
                  <td className="px-8 py-6 text-sm text-slate-900 font-bold">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* NEW: FAQ Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="p-8 bg-slate-50 rounded-3xl">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-3 italic">
                <HelpCircle className="w-5 h-5 text-indigo-600" /> {faq.q}
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed pl-8">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Page: Resources (Expanded) ---

const ResourcesPage = () => {
  const resourceCards = [
    { title: "2026 Developer Survey", type: "Report", icon: FileText, color: "text-blue-500", size: "12MB" },
    { title: "UI Kit for Figma", type: "Asset", icon: Download, color: "text-purple-500", size: "45MB" },
    { title: "Building with AI", type: "E-Book", icon: Book, color: "text-emerald-500", size: "8MB" },
    { title: "Community Webinar", type: "Video", icon: Video, color: "text-red-500", size: "1.2GB" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div>
          <h1 className="text-4xl font-black text-slate-900 mb-2">Resources & Community</h1>
          <p className="text-slate-500">Free assets and insights to fuel your learning journey.</p>
        </div>
        <div className="flex bg-slate-100 p-1.5 rounded-2xl">
          <button className="px-6 py-2 bg-white text-slate-900 font-bold rounded-xl shadow-sm text-sm">Library</button>
          <button className="px-6 py-2 text-slate-500 font-bold rounded-xl text-sm hover:text-indigo-600">Events</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-black italic">Latest Articles</h2>
            <button className="text-sm font-bold text-indigo-600 hover:underline">View All Posts</button>
          </div>
          <div className="space-y-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex flex-col sm:flex-row gap-6 p-6 bg-white border border-slate-100 rounded-[2rem] hover:shadow-xl transition-all group cursor-pointer">
                <div className="w-full sm:w-48 h-32 bg-slate-200 rounded-2xl shrink-0 overflow-hidden relative">
                  <img src={`https://picsum.photos/seed/${i + 20}/400/300`} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-[8px] font-black uppercase">5 min read</div>
                </div>
                <div className="flex-1 py-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Industry News</span>
                    <span className="text-[10px] text-slate-400 font-bold">• March 12, 2026</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">The shift towards AI-Native development in 2026</h3>
                  <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">How generative AI is changing the way we think about writing production code, from boilerplate to logic...</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-black italic mb-8">Free Assets</h2>
          <div className="grid grid-cols-1 gap-4 mb-8">
            {resourceCards.map((res, i) => (
              <div key={i} className="flex items-center justify-between p-6 bg-white border border-slate-100 rounded-3xl hover:border-indigo-200 hover:bg-slate-50 transition-all group">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-2xl bg-white shadow-sm border border-slate-100 ${res.color}`}><res.icon className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm line-clamp-1">{res.title}</h4>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-tighter">{res.type} • {res.size}</p>
                  </div>
                </div>
                <button className="p-2 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="p-8 bg-indigo-600 rounded-[2.5rem] text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-20 h-20 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10">
              <h3 className="font-bold mb-2">Join our Discord</h3>
              <p className="text-sm text-indigo-100 mb-6">Discuss topics, get help, and find collaborators.</p>
              <button className="w-full py-4 bg-white text-indigo-600 font-black rounded-2xl hover:bg-slate-50 hover:-translate-y-1 transition-all shadow-xl">Join 12k Members</button>
            </div>
          </div>
        </div>
      </div>

      {/* NEW: Community Showcase */}
      <div className="border-t border-slate-100 pt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black italic mb-4">Student Showcase</h2>
          <p className="text-slate-500">Real projects built by students during our courses.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="aspect-square bg-slate-100 rounded-3xl overflow-hidden relative group">
              <img src={`https://picsum.photos/seed/${i + 40}/600/600`} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <p className="text-white font-bold text-sm">Portfolio Redesign</p>
                <p className="text-indigo-300 text-[10px] font-black uppercase tracking-widest">by Alex J.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [path, setPath] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  const renderContent = () => {
    switch (path) {
      case 'courses': return <CoursesPage />;
      case 'mentors': return <MentorsPage />;
      case 'pricing': return <PricingPage />;
      case 'resources': return <ResourcesPage />;
      case 'about': return <AboutPage />;
      case 'blog': return <BlogPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-700">
      <Navbar currentPath={path} setPath={setPath} />
      <main className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        {renderContent()}
      </main>
      <Footer />

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}