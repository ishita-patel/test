import React from 'react';

const FeaturesPage: React.FC = () => {
  return (
    <div id="features" className="container mx-auto p-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">System Features: Your Toolkit for Market Dominance</h2>
      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12 text-center">
        Dive into the specific capabilities of our GenAI Market Intelligence System. Discover how the n8n workflow and Retool dashboard work together to provide a comprehensive solution.
      </p>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Retool Dashboard Section */}
        <section className="bg-white p-8 rounded-lg shadow-xl">
          <h3 className="text-3xl font-semibold text-indigo-600 mb-6">Retool Dashboard: Visualize and Interact</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Your Command Center for South American Market Intelligence. This dynamic interface brings your data to life.
          </p>
          <ul className="space-y-4">
            <li>
              <h4 className="text-xl font-semibold text-gray-700">Interactive Company Table</h4>
              <p className="text-gray-600">View a dynamic, sortable, and filterable table of target companies. Key columns include company name, sector, calculated AI readiness score, last funding details, country, and city. Quickly identify top prospects.</p>
            </li>
            <li>
              <h4 className="text-xl font-semibold text-gray-700">Geospatial Map View</h4>
              <p className="text-gray-600">Visualize company distribution and AI readiness across South America with an interactive map. Use a heatmap overlay to identify clusters of activity.</p>
            </li>
            <li>
              <h4 className="text-xl font-semibold text-gray-700">On-Demand Data Refresh</h4>
              <p className="text-gray-600">Click the "Refresh" button to trigger the n8n workflow instantly, ensuring your dashboard reflects the latest available data.</p>
            </li>
            <li>
              <h4 className="text-xl font-semibold text-gray-700">Multilingual Support</h4>
              <p className="text-gray-600">Toggle company descriptions and UI elements between English, Spanish, and Portuguese.</p>
            </li>
            <li>
              <h4 className="text-xl font-semibold text-gray-700">Responsive Design</h4>
              <p className="text-gray-600">Access your market intelligence on any device. The dashboard is designed for both desktop and mobile use.</p>
            </li>
            <li>
              <h4 className="text-xl font-semibold text-gray-700">(Nice-to-Have) 1-Click GPT-Powered Pitch Drafts</h4>
              <p className="text-gray-600">(Conceptual) Instantly generate a tailored initial pitch draft using OpenAI's GPT for any selected company.</p>
            </li>
          </ul>
        </section>

        {/* n8n Workflow Section */}
        <section className="bg-white p-8 rounded-lg shadow-xl">
          <h3 className="text-3xl font-semibold text-blue-600 mb-6">n8n Workflow: The Automated Data Engine</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Powering Your Insights: The Automated Backend Pipeline. This workflow is the engine that collects, refines, and delivers your data.
          </p>
          <ul className="space-y-4">
            <li>
              <h4 className="text-xl font-semibold text-gray-700">Automated Data Extraction</h4>
              <p className="text-gray-600">Pulls company information from Crunchbase (conceptual free tier), LinkedIn (RapidAPI - company level, no PII), and Google News API.</p>
            </li>
            <li>
              <h4 className="text-xl font-semibold text-gray-700">Intelligent AI-Readiness Scoring</h4>
              <p className="text-gray-600">A custom Python script analyzes collected data (keywords, sector, funding, news) to calculate a unique "AI Readiness Score".</p>
            </li>
            <li>
              <h4 className="text-xl font-semibold text-gray-700">Centralized Data Loading (PostgreSQL)</h4>
              <p className="text-gray-600">All processed and scored company data is systematically loaded and updated into a PostgreSQL database.</p>
            </li>
            <li>
              <h4 className="text-xl font-semibold text-gray-700">Automated Reporting & Alerts</h4>
              <p className="text-gray-600">Receive weekly email reports of top prospects and market trends. (Nice-to-have) Get Slack/Teams alerts for "hot leads".</p>
            </li>
            <li>
              <h4 className="text-xl font-semibold text-gray-700">Flexible Triggers</h4>
              <p className="text-gray-600">Initiate via webhook from Retool for on-demand updates, or manually for regular batch processing.</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default FeaturesPage;
