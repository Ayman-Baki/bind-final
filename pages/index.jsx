
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
