import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/email';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const templateParams = {
        name: formData.name,
        title: formData.message,
        email: formData.email
      };

      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      );

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitError('Failed to send message. Please try again or contact us directly.');
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'softmatrices01@gmail.com',
      description: 'Send us an email anytime'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-card rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-neutral-700">Contact Us</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gradient">Contact Us</span>
          </h2>

          <p className="text-neutral-600 px-7 text-neutral-600 text-justify max-w-2xl mx-auto">
            We're here to help. Whether you have a question about our services, need a custom solution,
            or just want to learn more about how Softmatrices can transform your business, we're ready to listen.
          </p>
        </div>

        <div className="grid grid-cols-1 px-10 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Get in Touch
              </h3>
              <p className="text-neutral-600 mb-8 text-justify leading-relaxed">
                Reach out to us today and take the first step toward transforming your business. Our team of experts is ready to understand your unique challenges and goals, and work with you to create tailored, innovative IT solutions that drive growth, efficiency, and long-term success. Let’s start the conversation and build the future of your business together.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-primary-600 font-medium mb-1">
                      {info.value}
                    </p>
                    <p className="text-sm text-neutral-600">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            {/* <div className="pt-8">
              <h4 className="font-semibold text-neutral-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'Facebook'].map((social) => (
                  <button
                    key={social}
                    className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                  >
                    <div className="w-5 h-5 bg-neutral-400 rounded"></div>
                  </button>
                ))}
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-2xl py-10">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Send us a Message
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-neutral-600">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <div>
                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-600 text-sm">{submitError}</p>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 glass rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full relative flex items-center justify-center space-x-2 py-4 px-6 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 
                                ${isSubmitting ? "bg-gradient-to-r from-purple-400 to-purple-600 cursor-not-allowed opacity-70" :
                                "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"}`
                              }
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span className="animate-pulse">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
