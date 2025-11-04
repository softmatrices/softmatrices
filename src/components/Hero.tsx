import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Play, Sparkles, Zap, Shield, Users, ChevronDown } from 'lucide-react';
import AnimatedStat from './AnimatedStat';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { 
      icon: Shield, 
      value: 99.9, 
      suffix: '%', 
      decimals: 1,
      label: 'Uptime Guarantee',
      delay: 0,
      duration: 2000
    },
    { 
      icon: Zap, 
      value: 24, 
      suffix: '/7', 
      label: 'Support Available',
      delay: 200,
      duration: 1500
    },
    { 
      icon: Users, 
      value: 10, 
      suffix: '+', 
      label: 'Technologies',
      delay: 400,
      duration: 2000
    },
    { 
      icon: Sparkles, 
      value: 100, 
      suffix: '%', 
      label: 'Commitment',
      delay: 600,
      duration: 2000
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      ref={ref}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-to-br from-neutral-50 via-white to-primary-50"
    >

      <motion.div 
        className="container-custom text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center space-x-2 glass-card rounded-full px-4 py-2 mb-12 mt-8"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-primary-500" />
            </motion.div>
            <span className="text-sm font-medium text-neutral-700">Innovative IT Solutions</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8"
            variants={itemVariants}
          >
            <motion.span 
              className="text-gradient bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Empowering Businesses
            </motion.span>
            <br />
            <span className="text-neutral-900">with Innovative</span>
            <br />
            <motion.span 
              className="text-gradient bg-gradient-to-r from-accent-600 via-primary-600 to-secondary-600 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              IT Solutions
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl px-10 text-justify text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Softmatrices delivers cutting-edge technology and expert consulting to drive your business forward. 
            Our tailored solutions ensure efficiency, security, and growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary group flex items-center space-x-2 relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Get Started</span>
              <motion.div
                className="relative z-10"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
            
            <motion.button 
              className="btn-secondary group flex items-center space-x-2 glass"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
              
              </motion.div>
           
            </motion.button>
          </motion.div>

          {/* Animated Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <AnimatedStat
                key={stat.label}
                icon={stat.icon}
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals}
                label={stat.label}
                delay={stat.delay}
                duration={stat.duration}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          onClick={() => scrollToSection('#about')}
        >
          <motion.div 
            className="w-1 h-3 bg-primary-500 rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        
        <motion.div
          className="mt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <ChevronDown className="w-4 h-4 text-neutral-400 mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
