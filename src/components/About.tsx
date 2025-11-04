import { Users, Target, Award, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new solutions and methodologies to deliver cutting-edge results.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in working closely with our clients as partners, ensuring every solution is tailored to their unique needs.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from initial consultation to final delivery and ongoing support.'
    }
  ];

  const achievements = [
    { number: '10+', label: 'Technologies' },
    { number: '100%', label: 'Commitment' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} id="about" className="section-padding px-5 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container-custom">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 glass-card rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-neutral-700">About Us</span>
          </div>
          
          <h2 className="text-3xl px-2 md:text-5xl font-bold mb-3">
            <span className="text-gradient">About Softmatrices</span>
          </h2>
          
          <p className="text-lg px-2 text-justify text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Softmatrices is an innovative IT solutions and consulting company dedicated to helping businesses thrive in the digital age. 
            We combine deep industry expertise with cutting-edge technology to deliver tailored solutions that drive growth, efficiency, and security.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-3xl px-2 md:text-5xl font-bold mb-6">
              Empowering Digital Transformation
            </h3>
            
            <p className="text-neutral-600 px-2 mb-6 leading-relaxed text-justify">
              Since our founding, we've been committed to delivering exceptional IT solutions that help businesses 
              navigate the complexities of the digital landscape. Our team of experts brings together years of 
              experience across various industries and technologies.
            </p>
            
            <p className="text-neutral-600 px-2 mb-8 leading-relaxed text-justify">
              We understand that every business is unique, which is why we take a personalized approach to every project. 
              From initial consultation to ongoing support, we're with you every step of the way.
            </p>

            <div className="space-y-4 mb-8 px-2">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-neutral-700">Certified and experienced professionals</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-neutral-700">Cutting-edge technology solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-neutral-700">24/7 support and maintenance</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-neutral-700">Proven track record of success</span>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary group flex items-center space-x-2"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Right Content - Visual */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10"></div>
              
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-neutral-600 font-medium">
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="w-full h-32 bg-gradient-to-r from-primary-200/30 to-secondary-200/30 rounded-xl flex items-center justify-center">
                  <div className="text-neutral-500 text-sm">Company Timeline</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className={`transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-neutral-900 mb-12">
            Our Core Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card text-justify rounded-2xl p-8 text-center card-hover"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-neutral-900 mb-4">
                  {value.title}
                </h4>
                
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
