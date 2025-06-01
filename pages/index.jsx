
import { useEffect } from "react";

export default function BondLandingPage() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    document.title = "Bond Automation | Workflow Solutions for Agencies & Startups";
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <img src="/assets/logo-bond-blue.png" alt="Bond Logo" className="h-10" />
          <nav className="space-x-6 text-sm font-medium">
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-700">How It Works</a>
            <a href="#team" className="text-gray-700 hover:text-blue-700">Team</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-700">Testimonials</a>
            <a href="#contact" className="text-blue-700 hover:underline">Book a Call</a>
          </nav>
        </div>
      </header>

      <section className="relative bg-gradient-to-r from-blue-100 to-blue-50 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 leading-tight mb-6">Smarter Workflows, Faster Growth</h1>
          <p className="text-gray-700 text-lg mb-8">We help marketing agencies and startups save hours, reduce errors, and automate their operations with custom-built solutions.</p>
          <a href="#contact" className="bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-800 transition">Book a Free Consultation</a>
        </div>
        <img src="/assets/hero-team-bond.png" alt="Bond Automation Hero" className="absolute right-0 bottom-0 w-1/3 hidden md:block" />
      </section>

      <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-50 to-white text-center relative">
        <div className="absolute inset-0 bg-[url('/assets/bg-blobs.svg')] bg-no-repeat bg-center opacity-10"></div>
        <h2 className="text-3xl font-bold text-blue-800 mb-6 relative">How It Works</h2>
        <p className="mb-12 text-gray-700 max-w-2xl mx-auto relative">From discovery to delivery — here’s our streamlined workflow:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto relative z-10">
          {[
            { title: "1. Discovery", text: "Understand your workflow, pain points & goals." },
            { title: "2. Strategy", text: "Map and design a tailored automation plan." },
            { title: "3. Execution", text: "Build and deploy robust automation systems." },
            { title: "4. Support", text: "Ensure performance and scale when needed." }
          ].map((step, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="team" className="py-20 bg-white text-center relative">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Meet the Team</h2>
        <p className="mb-12 text-gray-700 max-w-2xl mx-auto">We are a passionate group of builders, marketers, and strategists dedicated to streamlining work for growing teams.</p>
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {["Adam", "Sarah", "Yassine", "Lina"].map((name, i) => (
            <div key={i} className="w-48 text-center">
              <img src={`/assets/team/${name.toLowerCase()}.jpg`} alt={name} className="w-48 h-48 rounded-full object-cover mb-4 shadow-md" />
              <h4 className="font-semibold text-blue-700">{name}</h4>
              <p className="text-sm text-gray-600">Automation Specialist</p>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              quote: "Bond Automation helped us cut 30+ hours a week in manual tasks. Game changer!",
              name: "Julie K.",
              role: "COO, GrowthSavvy"
            },
            {
              quote: "We scaled campaigns with zero extra hiring — thanks to their automation setup.",
              name: "Martin L.",
              role: "Head of Ops, Linkvertise"
            },
            {
              quote: "Super professional team. They delivered above expectations. Highly recommend!",
              name: "Amina R.",
              role: "Founder, Tailorly"
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md">
              <p className="italic text-gray-700 mb-4">“{testimonial.quote}”</p>
              <p className="font-semibold text-blue-700">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Seamlessly Integrates With</h2>
        <p className="mb-12 text-gray-700 max-w-2xl mx-auto">We work with 100+ tools to automate your workflows effortlessly.</p>
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto opacity-90">
          {["zapier", "notion", "slack", "stripe", "google-drive", "hubspot"].map((logo, i) => (
            <img key={i} src={`/assets/logos/${logo}.png`} alt={logo} className="h-10" />
          ))}
        </div>
      </section>

      <footer id="contact" className="bg-gray-900 text-white py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Let’s Automate Your Workflow</h2>
        <p className="text-gray-300 mb-6">Book a call or reach out to our team directly.</p>
        <a
          href="https://calendly.com/bond-automation/30min"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow"
        >Book a Call</a>
        <p className="text-sm text-gray-500 mt-8">© {currentYear} Bond Automation. All rights reserved.</p>
      </footer>
    </div>
  );
}
