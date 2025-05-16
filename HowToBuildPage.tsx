import React from 'react';

const HowToBuildPage: React.FC = () => {
  return (
    <div id="how-to-build" className="container mx-auto p-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Build Your Own Intelligence System: A Step-by-Step Guide</h2>
      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12 text-center">
        Ready to harness the power of this GenAI Market Intelligence System? This section provides a high-level roadmap and points you to the detailed documentation needed to (conceptually) implement the n8n workflow and Retool dashboard.
      </p>

      <section className="mb-12 bg-gray-50 p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-semibold text-gray-700 mb-6">What You'll Need to Get Started</h3>
        <ul className="list-disc list-inside space-y-3 text-gray-600 text-lg">
          <li>An active <strong>Retool account</strong> (free or paid, depending on your needs).</li>
          <li>An <strong>n8n.io instance</strong> (cloud or self-hosted).</li>
          <li>Access to a <strong>PostgreSQL database</strong> and credentials.</li>
          <li>
            <strong>API Keys</strong> for:
            <ul className="list-circle list-inside ml-6 mt-1 space-y-1 text-base">
              <li>Crunchbase (if using their API directly; conceptual free tier assumed).</li>
              <li>RapidAPI (for accessing the LinkedIn company data API).</li>
              <li>Google News API.</li>
              <li>(Optional) OpenAI API key (for pitch generation).</li>
              <li>An email service provider for n8n to send reports (e.g., SendGrid, Mailgun, or SMTP server details).</li>
            </ul>
          </li>
          <li>The <strong>delivered package of scripts and guides</strong> from us!</li>
        </ul>
      </section>

      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-700 mb-8">Your Path to Implementation</h3>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="text-2xl font-semibold text-blue-600 mb-3">1. Set Up Your PostgreSQL Database</h4>
            <p className="text-gray-600 leading-relaxed mb-2">Create the database and tables as defined in our <code>database_schema.md</code> document.</p>
            <p className="text-sm text-gray-500"><strong>Reference:</strong> <code>database_schema.md</code></p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="text-2xl font-semibold text-blue-600 mb-3">2. Construct the n8n Workflow</h4>
            <p className="text-gray-600 leading-relaxed mb-2">In your n8n instance, recreate the data pipeline using the <code>n8n_workflow_structure.json</code> as a blueprint. Configure all nodes, API credentials, and the <code>ai_readiness_scorer.py</code> script.</p>
            <p className="text-sm text-gray-500"><strong>References:</strong> <code>n8n_workflow_structure.json</code>, Python scripts, and Section 3 of the main <code>README.md</code>.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="text-2xl font-semibold text-blue-600 mb-3">3. Develop the Retool Dashboard</h4>
            <p className="text-gray-600 leading-relaxed mb-2">Log into your Retool account and build the dashboard by following the detailed steps in the <code>retool_dashboard_guide.md</code>. Connect it to your PostgreSQL database.</p>
            <p className="text-sm text-gray-500"><strong>Reference:</strong> <code>retool_dashboard_guide.md</code></p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="text-2xl font-semibold text-blue-600 mb-3">4. Test and Validate Thoroughly</h4>
            <p className="text-gray-600 leading-relaxed mb-2">Once both components are built, conduct end-to-end testing using the <code>validation_plan.md</code> to ensure everything works as expected, especially with sample data from Brazil, Argentina, and Colombia.</p>
            <p className="text-sm text-gray-500"><strong>Reference:</strong> <code>validation_plan.md</code></p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-indigo-50 p-8 rounded-lg shadow">
        <h3 className="text-3xl font-semibold text-indigo-700 mb-6">Accessing Your Toolkit for Success</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          All the conceptual guides, scripts, and structural blueprints mentioned are part of the deliverable package you received. Ensure you have the following key documents:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 text-lg mb-4">
          <li><code>README.md</code> (Overall System Documentation)</li>
          <li><code>database_schema.md</code></li>
          <li><code>n8n_workflow_structure.json</code></li>
          <li><code>retool_dashboard_guide.md</code></li>
          <li><code>validation_plan.md</code></li>
          <li>All Python scripts in the <code>genai_market_intel_project</code> directory.</li>
        </ul>
        {/* Conceptual Download Button 
        <div className="text-center mt-6">
          <button className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-green-600 transition duration-300 text-lg">Download Documentation Package (Conceptual)</button>
        </div>
        */}
      </section>

      <section>
        <h3 className="text-3xl font-semibold text-gray-700 mb-6">Keep These Points in Mind</h3>
        <ul className="list-disc list-inside space-y-3 text-gray-600 text-lg">
          <li><strong>API Limitations:</strong> Be mindful of free-tier API rate limits and data restrictions. The provided solution is conceptual and may need adjustments.</li>
          <li><strong>PII Compliance:</strong> The system is designed to avoid PII. Uphold this principle strictly.</li>
          <li><strong>Customization:</strong> These guides provide a strong foundation. Feel free to customize and extend the system.</li>
        </ul>
      </section>
    </div>
  );
};

export default HowToBuildPage;
