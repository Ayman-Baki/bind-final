export default function BondLandingPage() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-900 p-8 font-sans">
      <section className="flex flex-col md:flex-row items-center justify-between py-20 max-w-7xl mx-auto">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4 text-blue-700 leading-tight">Automate Smarter. Grow Faster.</h1>
          <p className="text-lg mb-6 text-gray-700">We build custom workflows to eliminate repetitive tasks and unlock your team’s productivity.</p>
          <button className="text-lg px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md">Book a Free Audit</button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img src="/assets/automation-illustration.svg" alt="Automation workflow illustration" className="w-full" />
        </div>
      </section>
      <footer className="py-10 bg-blue-800 text-white text-center">
        <div className="max-w-6xl mx-auto">
          <p className="mb-2 font-semibold text-xl">Bond Automation</p>
          <p className="text-sm">© {currentYear} Bond Automation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
