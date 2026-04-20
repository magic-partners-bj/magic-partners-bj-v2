import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export function ShootingStar() {
  const [stars, setStars] = useState<{ id: number; delay: number; top: string; left: string }[]>([]);

  useEffect(() => {
    const addStar = () => {
      const newStar = {
        id: Date.now(),
        delay: 0,
        top: `${Math.random() * 40}%`,
        left: `${-10 - Math.random() * 10}%`,
      };
      setStars((prev) => [...prev, newStar]);
      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== newStar.id));
      }, 3000);
    };

    const interval = setInterval(addStar, 4000); // New star every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <AnimatePresence>
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ 
              x: window.innerWidth + 200, 
              y: window.innerHeight * 0.5, 
              opacity: [0, 1, 1, 0] 
            }}
            transition={{ duration: 2.5, ease: "linear" }}
            style={{ top: star.top, left: star.left }}
          >
            <div className="relative">
              {/* Star Head */}
              <div className="w-1.5 h-1.5 bg-[#F8B11C] rounded-full shadow-[0_0_15px_#F8B11C]" />
              {/* Star Tail */}
              <div 
                className="absolute top-1/2 -left-32 w-32 h-[1px] -translate-y-1/2"
                style={{
                  background: 'linear-gradient(to right, transparent, rgba(248, 177, 28, 0.4))'
                }}
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
