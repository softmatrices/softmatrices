import { Zap, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Services', href: '#services' },
      { name: 'Our Process', href: '#process' },
      { name: 'Why Choose Us', href: '#why-choose-us' }
    ],
    services: [
      { name: 'Cloud Solutions', href: '#services' },
      { name: 'Application Development', href: '#services' },
      { name: 'Security Consulting', href: '#services' },
      { name: 'AI/ML Integration', href: '#services' }
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      // { name: 'Privacy Policy', href: '#' },
      // { name: 'Terms of Service', href: '#' },
      // { name: 'Support Center', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: 'T' },
    { name: 'LinkedIn', href: '#', icon: 'L' },
    { name: 'Facebook', href: '#', icon: 'F' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-neutral-950 text-white px-10">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-display font-bold">Softmatrices</span>
              </div>
              
              <p className="text-neutral-300 text-justify mb-6 leading-relaxed">
                Empowering businesses with innovative IT solutions. We deliver cutting-edge technology 
                and expert consulting to drive your business forward.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary-400" />
                  <span className="text-neutral-300">softmatrices01@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-neutral-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-neutral-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-neutral-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-neutral-400 text-sm">
              © {currentYear} Softmatrices. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <span className="text-sm font-semibold">{social.icon}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
