import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-700 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Ishi: South American Market Insight. Conceptual project by Manus.</p>
        <p className="text-sm mt-1">Disclaimer: This is a conceptual showcase. Actual implementation requires user effort and adherence to platform terms.</p>
      </div>
    </footer>
  );
};

export default Footer;
