import React from 'react';

const FeatureSection: React.FC = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="feature-item">
            <h3 className="text-xl font-semibold">Feature 1</h3>
            <p className="mt-2">Description of feature 1.</p>
          </div>
          <div className="feature-item">
            <h3 className="text-xl font-semibold">Feature 2</h3>
            <p className="mt-2">Description of feature 2.</p>
          </div>
          <div className="feature-item">
            <h3 className="text-xl font-semibold">Feature 3</h3>
            <p className="mt-2">Description of feature 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
