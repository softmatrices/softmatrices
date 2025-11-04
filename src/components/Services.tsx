import { useEffect, useState } from 'react';
import { Cloud, Code, Shield, Brain, Sparkles } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const services = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure management to optimize your business operations and reduce costs.',
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Disaster Recovery', 'Cost Optimization'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code,
      title: 'Application Development',
      description: 'Custom application development for web and mobile platforms using cutting-edge technologies.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'UI/UX Design'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Security Consulting',
      description: 'Comprehensive security assessments and solutions to protect your business from cyber threats.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Brain,
      title: 'AI/ML Integration',
      description: 'Advanced AI and machine learning integration to automate processes and gain valuable insights.',
      features: ['Machine Learning', 'Data Analytics', 'Process Automation', 'Predictive Modeling'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-neutral-50">
      <div className="container-custom">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 glass-card rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-neutral-700">Our Services</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gradient">Our Services</span>
          </h2>
          
          <p className="text-xg text-justify px-5 text-neutral-600 max-w-2xl mx-auto">
            Explore our comprehensive range of IT services designed to empower your business and drive digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`glass-card rounded-2xl p-6 card-hover transition-all duration-1000 flex flex-col h-full ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-glow`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-neutral-600 mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-neutral-600">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-neutral-600 mb-6">
              Let's discuss how our services can help you achieve your goals and drive growth.
            </p>
            <button className="btn-primary">
              Get a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
