import { Sparkles, Search, Lightbulb, Code, Rocket, CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Process = () => {
  const { ref, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const processSteps = [
    {
      icon: Search,
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We start by understanding your business needs, challenges, and goals through comprehensive analysis and stakeholder interviews.',
      features: ['Business Requirements Analysis', 'Technology Assessment', 'Risk Evaluation', 'Timeline Planning'],
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    {
      icon: Lightbulb,
      step: '02',
      title: 'Strategy & Planning',
      description: 'We develop a customized strategy and detailed project plan that aligns with your business objectives and technical requirements.',
      features: ['Solution Architecture', 'Technology Selection', 'Resource Planning', 'Milestone Definition'],
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50'
    },
    {
      icon: Code,
      step: '03',
      title: 'Development & Implementation',
      description: 'Our expert team implements the solution using best practices, agile methodologies, and continuous quality assurance.',
      features: ['Agile Development', 'Quality Assurance', 'Security Implementation', 'Performance Optimization'],
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50'
    },
    {
      icon: Rocket,
      step: '04',
      title: 'Deployment & Support',
      description: 'We ensure smooth deployment and provide ongoing support to maximize the value of your IT investment.',
      features: ['Deployment Planning', 'User Training', 'Ongoing Support', 'Performance Monitoring'],
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50'
    }
  ];

  return (
    <section ref={ref} id="process" className="section-padding bg-gradient-to-b from-neutral-50 to-white">
      <div className="container-custom">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 glass-card rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-neutral-700">Our Process</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gradient">How We Work</span>
          </h2>
          
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Our proven 4-step methodology ensures successful project delivery and exceeds client expectations every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className={`glass-card rounded-2xl overflow-hidden card-hover transition-all duration-1000 flex flex-col h-full ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Step Header */}
              <div className={`${step.bgColor} p-6 text-center relative`}>
                <div className="absolute top-4 right-4 text-2xl font-bold text-neutral-300">
                  {step.step}
                </div>
                <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              {/* Step Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-neutral-600 mb-6 leading-relaxed flex-grow">
                  {step.description}
                </p>
                
                <ul className="space-y-2">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-neutral-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-neutral-600 mb-6">
              Let's discuss your requirements and see how our proven process can deliver exceptional results for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary">
                Start Your Project
              </button>
              <button className="btn-secondary">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
