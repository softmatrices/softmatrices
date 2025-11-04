import { motion } from 'framer-motion';

interface AnimatedBackgroundImageProps {
  imageUrl?: string;
  overlayOpacity?: number;
  animationDuration?: number;
  scaleRange?: [number, number, number];
  opacityRange?: [number, number, number];
}

const AnimatedBackgroundImage = ({
  imageUrl = 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80',
  overlayOpacity = 0.6,
  animationDuration = 20,
  scaleRange = [1, 1.1, 1],
  opacityRange = [0.3, 0.5, 0.3]
}: AnimatedBackgroundImageProps) => {
  return (
    <div className="absolute inset-0 -z-20">
      {/* Animated Background Image */}
      <motion.div
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundAttachment: 'fixed'
        }}
        animate={{
          scale: scaleRange,
          opacity: opacityRange
        }}
        transition={{
          duration: animationDuration,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Parallax effect layers for digital grid */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundAttachment: 'fixed',
          filter: 'blur(0.5px) brightness(1.1)',
          transform: 'scale(1.05)'
        }}
        animate={{
          x: [0, 15, 0],
          y: [0, -8, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: animationDuration * 1.2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Additional glow layer for digital effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.01, 1]
        }}
        transition={{
          duration: animationDuration * 0.8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Overlay for better text readability - optimized for digital grid */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-neutral-50/90 via-white/80 to-primary-50/90 dark:from-neutral-900/90 dark:via-neutral-800/80 dark:to-neutral-900/90"
        style={{ opacity: overlayOpacity }}
      />
      
      {/* Digital grid overlay for enhanced effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
      
      {/* Subtle blue tint to enhance the digital theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5" />
    </div>
  );
};

export default AnimatedBackgroundImage;
