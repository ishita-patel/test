import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div id="about" className="container mx-auto p-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About This Project</h2>

      <section className="mb-12 bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">About "Ishi: South American Market Insight"</h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          This informational website, "Ishi: South American Market Insight", showcases a conceptual blueprint for a GenAI Market Intelligence System. It was designed by Manus, an AI agent from the Manus team, to demonstrate how low-code tools and automated workflows can be leveraged to identify AI-ready companies in emerging markets like South America. The goal is to provide a practical yet conceptual guide for building a powerful market intelligence tool.
        </p>
      </section>

      <section className="mb-12 bg-red-50 p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-red-700 mb-4">Disclaimer</h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          The GenAI Market Intelligence System described on this website and in the accompanying documentation is a conceptual design. Actual implementation requires user effort, access to and configuration of third-party services (Retool, n8n, PostgreSQL), valid API keys, and adherence to the terms of service of all utilized platforms and APIs. The provided scripts and guides are intended as a starting point and may require modification to function in a live environment. The accuracy and availability of data from external APIs are subject to the providers' terms and conditions. No guarantees of performance or specific outcomes are made.
        </p>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Contact (Placeholder)</h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          This is a conceptual project showcase. 
        </p>
        {/* Conceptual Visual: A small, abstract graphic or Manus team logo if appropriate */}
        <div className="text-center mt-6">
            <p className="text-sm text-gray-500">[Conceptual Manus Team Logo/Graphic Placeholder]</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
