import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div id="home" className="container mx-auto p-4">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-xl">
        <h2 className="text-5xl font-extrabold mb-4">Unlock South American GenAI Opportunities</h2>
        <p className="text-xl mb-8 px-4 md:px-16">
          Your Intelligent Market Navigator: Discover promising AI-ready companies across South America with our powerful, low-code market intelligence system. Get the insights you need to drive your GenAI consulting firm's expansion.
        </p>
        <div>
          <a href="#features" className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 mr-4 text-lg">Explore Features</a>
          <a href="#how-to-build" className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-green-600 transition duration-300 text-lg">Learn How to Build</a>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-12">
        <h3 className="text-3xl font-semibold text-center mb-8 text-gray-700">The Challenge: Navigating a New Market Blindfolded?</h3>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Entering the burgeoning South American GenAI landscape presents immense opportunities, but identifying the right companies to partner with can feel like searching for a needle in a haystack. Without real-time, targeted market intelligence, you risk misallocating resources, missing key prospects, and falling behind competitors. How do you efficiently find organizations truly ready and strategically aligned for GenAI integration?
        </p>
      </section>

      {/* Solution Overview Section */}
      <section className="py-12 bg-gray-50 rounded-lg shadow">
        <h3 className="text-3xl font-semibold text-center mb-8 text-gray-700">The Solution: An Integrated Intelligence Powerhouse</h3>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
          We've designed a conceptual blueprint for "Ishi: South American Market Insight", a system that empowers your firm with actionable insights. This system integrates two powerful low-code platforms:
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold text-blue-600 mb-3">n8n Automation Workflow</h4>
            <p className="text-gray-600">A robust backend data pipeline that automatically gathers, processes, and scores company data from diverse sources.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold text-indigo-600 mb-3">Retool Dashboard</h4>
            <p className="text-gray-600">An interactive, real-time user interface that visualizes this intelligence, helping you prioritize leads and understand market dynamics at a glance.</p>
          </div>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mt-6">
          This dual-system approach ensures you have both the automated data engine and the intuitive front-end to make informed decisions.
        </p>
      </section>

      {/* Key Benefits Section */}
      <section className="py-12">
        <h3 className="text-3xl font-semibold text-center mb-10 text-gray-700">Why This System Matters for Your Growth</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-green-600 mb-2">Prioritized Leads</h4>
            <p className="text-gray-600">Automatically identify and score companies based on their AI readiness, focusing your efforts on the most promising prospects.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-green-600 mb-2">Real-Time Insights</h4>
            <p className="text-gray-600">Access up-to-date company information, funding news, and market trends through an interactive dashboard.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-green-600 mb-2">Data-Driven Decisions</h4>
            <p className="text-gray-600">Leverage comprehensive data to inform your market entry strategy and partnership development.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-green-600 mb-2">Efficient & Low-Code</h4>
            <p className="text-gray-600">Built with a focus on low-code tools (n8n, Retool) for rapid development and easier maintenance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-green-600 mb-2">Cost-Effective Design</h4>
            <p className="text-gray-600">Designed with free-tier API usage in mind, helping you manage your budget effectively.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
