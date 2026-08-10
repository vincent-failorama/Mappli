import React from 'react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  variant?: 'dark' | 'light';
}

export default function FeatureGrid({ features, variant = 'dark' }: FeatureGridProps) {
  const cardClass =
    variant === 'light'
      ? 'bg-white p-8 rounded-2xl shadow-sm border border-slate-100'
      : 'bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors duration-300';
  const iconClass = variant === 'light' ? 'text-brand-600' : 'text-sky-400';
  const titleClass = variant === 'light' ? 'text-slate-900' : 'text-white';
  const descClass = variant === 'light' ? 'text-slate-600' : 'text-zinc-300';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div key={index} className={cardClass}>
          <div className={`text-4xl mb-4 ${iconClass}`}>
            {feature.icon && <feature.icon aria-hidden="true" className="inline-block" />}
          </div>
          <h3 className={`text-xl font-bold mb-2 ${titleClass}`}>{feature.title}</h3>
          <p className={descClass}>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
