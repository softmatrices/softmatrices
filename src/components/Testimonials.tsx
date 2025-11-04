import { useInView } from 'react-intersection-observer';
import { Sparkles, Shield, Clock, Award, Users, Zap, CheckCircle, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const { ref, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const advantages = [
    {
      icon: Shield,
      title: 'Expert Team',
      description: 'Our certified professionals bring years of industry experience and cutting-edge technical expertise to every project.',
      features: ['Certified Professionals', 'Industry Experience', 'Continuous Learning', 'Best Practices'],
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'We understand the importance of time-to-market. Our agile approach ensures rapid delivery without compromising quality.',
      features: ['Agile Methodology', 'Quick Turnaround', 'Milestone Tracking', 'On-Time Delivery'],
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'We maintain the highest standards of quality through rigorous testing, code reviews, and industry best practices.',
      features: ['Rigorous Testing', 'Code Reviews', 'Quality Standards', 'Performance Optimization'],
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Our dedicated support team is available around the clock to ensure your systems run smoothly and efficiently.',
      features: ['Round-the-Clock Support', 'Dedicated Team', 'Quick Response', 'Proactive Monitoring'],
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50'
    }
  ];

  const stats = [
    { number: '100%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '< 24h', label: 'Response Time', icon: Zap }
  ];

  return (
    <section ref={ref} id="why-choose-us" className="section-padding bg-gradient-to-b from-white to-neutral-50">
      <div className="container-custom">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 glass-card rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-neutral-700">Why Choose Us</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gradient">Why Choose Softmatrices</span>
          </h2>
          
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We're committed to delivering exceptional IT solutions that drive your business forward. Here's what sets us apart.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {stats.map((stat, index) => (
            <div key={index} className="glass-card rounded-2xl p-6 text-center">
              <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-neutral-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className={`glass-card rounded-2xl overflow-hidden card-hover transition-all duration-1000 flex flex-col h-full ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              {/* Advantage Header */}
              <div className={`${advantage.bgColor} p-6 text-center`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${advantage.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow`}>
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              {/* Advantage Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {advantage.title}
                </h3>
                
                <p className="text-neutral-600 mb-6 leading-relaxed flex-grow">
                  {advantage.description}
                </p>
                
                <ul className="space-y-2">
                  {advantage.features.map((feature, featureIndex) => (
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

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Experience the Softmatrices Difference
            </h3>
            <p className="text-neutral-600 mb-6">
              Ready to work with a team that puts your success first? Let's discuss how our expertise and commitment can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary">
                Get Started Today
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

export default WhyChooseUs;
