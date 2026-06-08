import React, { useEffect, useRef } from 'react';

const InteractiveBackground = ({ theme = 'dark' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    let radarAngle = 0;
    
    // Configure density based on window size
    let particleCount = Math.min(60, Math.floor((window.innerWidth * window.innerHeight) / 25000));

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particleCount = Math.min(60, Math.floor((window.innerWidth * window.innerHeight) / 25000));
      initParticles();
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 1; // subtle data points
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.pulseSpeed = Math.random() * 0.05 + 0.01;
        this.pulseVal = Math.random();
        this.hue = Math.random() > 0.45 ? 180 : 260; // Cyan vs Violet
      }

      draw() {
        this.pulseVal += this.pulseSpeed;
        const opacity = 0.2 + Math.abs(Math.sin(this.pulseVal)) * 0.5;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        if (theme === 'dark') {
          ctx.fillStyle = this.hue === 180 ? `rgba(0, 242, 254, ${opacity})` : `rgba(155, 81, 224, ${opacity})`;
        } else {
          ctx.fillStyle = this.hue === 180 ? `rgba(2, 132, 199, ${opacity * 0.5})` : `rgba(99, 102, 241, ${opacity * 0.5})`;
        }
        ctx.fill();

        // Subtly outline larger node points
        if (this.size > 2.2 && theme === 'dark') {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 242, 254, ${opacity * 0.15})`;
          ctx.stroke();
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Screen boundary wrapping
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // Draw holographic grid lines with coordinates ticks
    const drawTacticalGrid = () => {
      const gridSize = 80;
      ctx.lineWidth = 0.5;
      
      const gridColor = theme === 'dark' ? 'rgba(0, 242, 254, 0.025)' : 'rgba(99, 102, 241, 0.015)';
      const tickColor = theme === 'dark' ? 'rgba(0, 242, 254, 0.09)' : 'rgba(99, 102, 241, 0.05)';
      ctx.strokeStyle = gridColor;

      // Vertical grid lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();

        // Draw cross ticks at intersections on first rows
        if (x % (gridSize * 2) === 0 && theme === 'dark') {
          ctx.fillStyle = tickColor;
          ctx.font = '7px monospace';
          ctx.fillText(`+${x}`, x + 4, 12);
        }
      }

      // Horizontal grid lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();

        if (y % (gridSize * 2) === 0 && theme === 'dark') {
          ctx.fillStyle = tickColor;
          ctx.font = '7px monospace';
          ctx.fillText(`+${y}`, 4, y - 4);
        }
      }

      // Draw subtle tactical HUD targets in corners
      if (theme === 'dark') {
        const offset = 30;
        ctx.strokeStyle = 'rgba(0, 242, 254, 0.1)';
        
        // Top Left corner bracket
        ctx.beginPath();
        ctx.moveTo(offset, offset + 15);
        ctx.lineTo(offset, offset);
        ctx.lineTo(offset + 15, offset);
        ctx.stroke();

        // Bottom Right corner bracket
        ctx.beginPath();
        ctx.moveTo(canvas.width - offset, canvas.height - offset - 15);
        ctx.lineTo(canvas.width - offset, canvas.height - offset);
        ctx.lineTo(canvas.width - offset - 15, canvas.height - offset);
        ctx.stroke();
      }
    };

    // Draw central sweeping radar line
    const drawRadarSweep = () => {
      if (theme !== 'dark') return;
      radarAngle += 0.0025;
      
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const radius = Math.max(canvas.width, canvas.height) * 0.6;
      
      const radarGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, radius);
      radarGrad.addColorStop(0, 'rgba(0, 242, 254, 0.04)');
      radarGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = radarGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      // Sweeping beam line
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.025)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(
        cx + Math.cos(radarAngle) * radius,
        cy + Math.sin(radarAngle) * radius
      );
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawTacticalGrid();
      drawRadarSweep();
      
      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000 bg-[#020008]"
    />
  );
};

export default InteractiveBackground;
