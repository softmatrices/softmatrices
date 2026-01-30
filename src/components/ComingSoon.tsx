import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

const ComingSoon: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.3 + 0.1,
    });

    const initParticles = () => {
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 80);
      particlesRef.current = Array.from({ length: count }, createParticle);
    };

    const drawParticle = (particle: Particle) => {
      if (!ctx) return;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
      ctx.fill();
    };

    const drawConnections = () => {
      if (!ctx) return;
      const particles = particlesRef.current;
      const maxDistance = 100;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.08;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const updateParticle = (particle: Particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Wrap around edges
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;
    };

    const animate = () => {
      if (!ctx) return;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(updateParticle);
      drawConnections();
      particlesRef.current.forEach(drawParticle);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    resizeCanvas();
    initParticles();

    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="coming-soon-container">
      <canvas
        ref={canvasRef}
        className="particle-canvas"
      />

      <motion.div
        className="content-wrapper"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title */}
        <motion.h1
          className="main-title"
          variants={itemVariants}
        >
          softmatrices
        </motion.h1>

        {/* Coming Soon Text */}
        <motion.p
          className="coming-soon-text"
          variants={itemVariants}
        >
          Coming Soon
        </motion.p>

        {/* Divider */}
        <motion.div
          className="divider"
          variants={itemVariants}
        />

        {/* Contact Section */}
        <motion.div
          className="contact-section"
          variants={itemVariants}
        >
          <p className="contact-label">Contact Us</p>
          <a
            href="mailto:info@softmatrices.com"
            className="email-link"
          >
            info@softmatrices.com
          </a>
        </motion.div>
      </motion.div>

      <style>{`
        .coming-soon-container {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          background: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .particle-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .content-wrapper {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 2rem;
        }

        .main-title {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: clamp(2.5rem, 10vw, 5rem);
          font-weight: 300;
          color: #ffffff;
          letter-spacing: 0.02em;
          margin: 0 0 1rem 0;
        }

        .coming-soon-text {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.875rem, 2vw, 1rem);
          font-weight: 400;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 0.25em;
          text-transform: uppercase;
          margin: 0 0 2.5rem 0;
        }

        .divider {
          width: 40px;
          height: 1px;
          background: rgba(255, 255, 255, 0.2);
          margin: 0 auto 2.5rem;
        }

        .contact-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .contact-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin: 0;
        }

        .email-link {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.875rem, 2.5vw, 1rem);
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          padding: 0.5rem 0;
          transition: color 0.2s ease;
        }

        .email-link:hover {
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;
