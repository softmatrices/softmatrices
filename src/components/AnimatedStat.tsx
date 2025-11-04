import { motion } from 'framer-motion';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';
import type { LucideIcon } from 'lucide-react';

interface AnimatedStatProps {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  delay?: number;
  duration?: number;
}

const AnimatedStat = ({
  icon: Icon,
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  label,
  delay = 0,
  duration = 2000
}: AnimatedStatProps) => {
  const { count, ref, isVisible } = useAnimatedCounter({
    end: value,
    duration,
    delay,
    suffix,
    prefix,
    decimals
  });

  return (
    <motion.div
      ref={ref}
      className="glass-card dark:glass-card-dark rounded-2xl p-6 text-center relative overflow-hidden group"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
      transition={{ 
        duration: 0.5, 
        ease: "easeOut",
        delay: delay / 1000 
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div 
        className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4 relative z-10 shadow-glow"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="w-6 h-6 text-white" />
      </motion.div>
      
      <motion.div 
        className="text-2xl md:text-3xl font-bold text-gradient mb-2 relative z-10"
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : { scale: 0 }}
        transition={{ 
          delay: (delay / 1000) + 0.5, 
          duration: 0.5, 
          type: "spring" 
        }}
        whileHover={{ 
          scale: 1.1,
          textShadow: "0 0 20px rgba(14, 165, 233, 0.5)"
        }}
      >
        <motion.span
          key={count}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {count}
        </motion.span>
      </motion.div>
      
      <div className="text-sm text-neutral-600 dark:text-neutral-400 font-medium relative z-10">
        {label}
      </div>
      
      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-b-2xl"
        initial={{ width: 0 }}
        animate={isVisible ? { width: "100%" } : { width: 0 }}
        transition={{ 
          delay: (delay / 1000) + 0.2, 
          duration: 1.5, 
          ease: "easeOut" 
        }}
      />
    </motion.div>
  );
};

export default AnimatedStat;
