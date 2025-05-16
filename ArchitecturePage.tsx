import React from 'react';

const ArchitecturePage: React.FC = () => {
  return (
    <div id="architecture" className="container mx-auto p-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">System Architecture: How It All Works Together</h2>
      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12 text-center">
        Understand the technical backbone of the GenAI Market Intelligence System. This section details the components, data flow, and technologies that power your insights.
      </p>

      {/* Conceptual Visual: System Architecture Diagram Placeholder */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg mb-12 text-center">
        <p className="text-xl text-gray-700 font-semibold">[Conceptual System Architecture Diagram Here]</p>
        <p className="text-sm text-gray-500 mt-2">
          (A visual representation showing Data Sources → n8n Workflow [Extraction, Transformation, Loading, Alerts] → PostgreSQL DB → Retool Dashboard, with arrows indicating data flow.)
        </p>
      </div>

      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-700 mb-6">The Ecosystem at a Glance</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          Our system is a carefully orchestrated set of components designed for efficiency and clarity:
        </p>
        <ol className="list-decimal list-inside space-y-4 text-gray-600 text-lg">
          <li>
            <strong>Data Sources:</strong> We tap into publicly available information from platforms like Crunchbase (company fundamentals - conceptual free tier), LinkedIn (company-level professional data via RapidAPI), and Google News (real-time news updates).
          </li>
          <li>
            <strong>n8n Automation Workflow (The Engine):</strong> This is the heart of the data operations.
            <ul className="list-disc list-inside ml-6 mt-2 space-y-2 text-base">
              <li><strong>Extraction Layer:</strong> Dedicated nodes and scripts connect to APIs, fetching raw company data.</li>
              <li><strong>Transformation Layer:</strong> The <code>ai_readiness_scorer.py</code> script processes this raw data, cleanses it, and applies our custom scoring logic to determine AI readiness.</li>
              <li><strong>Loading Layer:</strong> The enriched data is then systematically upserted into our PostgreSQL database.</li>
              <li><strong>Notification Layer:</strong> Automated emails and (optionally) Slack/Teams messages are dispatched based on predefined rules and schedules.</li>
            </ul>
          </li>
          <li>
            <strong>PostgreSQL Database (The Hub):</strong> This relational database serves as the central, persistent storage for all curated company profiles, AI scores, news links, and historical data. It's optimized for quick retrieval by the dashboard. (See <code>database_schema.md</code> for details).
          </li>
          <li>
            <strong>Retool Dashboard (The Interface):</strong> This web-based application connects directly to the PostgreSQL database, providing a dynamic and interactive way for users to explore the data, visualize trends, and trigger data refreshes.
          </li>
        </ol>
      </section>

      <section className="mb-12 bg-gray-50 p-8 rounded-lg shadow">
        <h3 className="text-3xl font-semibold text-gray-700 mb-6">Technology Stack: Built with Proven, Flexible Technologies</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[ "Retool", "n8n.io", "PostgreSQL", "Python", "Crunchbase API (Conceptual)", "LinkedIn API (RapidAPI)", "Google News API", "OpenAI API (Optional)"].map((tech) => (
            <div key={tech} className="bg-white p-4 rounded shadow-md text-center">
              <p className="text-lg font-medium text-gray-700">{tech}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">Deployment (Conceptual for Dashboard/Workflow): User's own Retool and n8n instances. This informational website itself will be a static React site deployed separately.</p>
      </section>

      <section>
        <h3 className="text-3xl font-semibold text-gray-700 mb-6">Database Schema Overview: Organizing the Intelligence</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          Our PostgreSQL database is structured with clarity and efficiency in mind. The core tables include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 text-lg mb-4">
          <li><code>companies</code>: Stores comprehensive details for each identified company, including their name, sector, location, funding history, and the crucial <code>ai_readiness_score</code>.</li>
          <li><code>company_news</code>: Archives relevant news articles linked to each company, providing valuable contextual information.</li>
        </ul>
        <p className="text-lg text-gray-600 leading-relaxed">
          For a complete understanding of the database structure, including all fields and relationships, please refer to the <code>database_schema.md</code> document in the provided deliverables.
        </p>
      </section>
    </div>
  );
};

export default ArchitecturePage;
