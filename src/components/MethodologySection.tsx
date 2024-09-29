import { useState } from 'react';
import MethodologyCard, { Card } from './MethodologyCard';

const MethodologySection = () => {
    const [expandedCard, setExpandedCard] = useState<string | null>(null);

    const cards: Card[] = [
      {
        id: 'assessment',
        title: 'Assessment',
        subtitle: '& Insight Gathering',
        content: {
          description: 'Our process begins with an initial consultation to gather insights into your business needs and challenges. We work closely with your team to understand your objectives and gather all necessary information.',
          points: [
            'Initial consultation meetings',
            'Gathering business and technical requirements',
            'Conducting stakeholder interviews',
            'Understanding long-term business goals'
          ]
        }
      },
      {
        id: 'customization',
        title: 'Customization',
        subtitle: '& Strategic Planning',
        content: {
          description: 'We then develop a strategic plan and design tailored solutions that address your specific needs. This involves detailed planning, resource allocation, and design of bespoke solutions that align with your goals.',
          points: [
            'Stretegic planning sessions',
            'Solution design and prototyping',
            'Resource and timeline planning',
            'Risk assessment and mitigation planning'
          ]
        }
      },
      {
        id: 'execution',
        title: 'Execution',
        subtitle: '& Lifecycle Management',
        content: {
          description: 'We execute the strategic plan and manage the entire solution lifecycle, from implementation to optimization. This ensures the solutions are effectively integrated and continuously deliver value.',
          points: [
            'Implementation of the strategic plan',
            'Solution deployment and integration',
            'Lifecycle management and support',
            'Continuous performance evaluation and optimization'
          ]
        }
      }
    ];
  
    return (
      <section id="approach" className="xl:h-screen p-10 flex flex-col justify-center gap-10">
        <h1 className="text-5xl font-bold text-center mb-4 font-orbitron">ACE</h1>
        <h2 className="text-xl text-center -mt-10 font-generalsans font-semibold">Methodology for Strategic Consulting</h2>
        
        <div className="flex flex-col md:flex-row gap-4">
          {cards.map((card) => (
            <MethodologyCard
              key={card.id}
              {...card}
              isExpanded={expandedCard === card.id}
              onHover={setExpandedCard}
            />
          ))}
        </div>
      </section>
    );
  };

export default MethodologySection;