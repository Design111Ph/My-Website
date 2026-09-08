import { motion, useScroll, useSpring } from 'motion/react';

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div
      id="scroll-progress-container"
      className="fixed top-0 left-0 right-0 z-[100] h-[2.5px] bg-slate-800/20 pointer-events-none"
      aria-hidden="true"
    >
      <motion.div
        id="scroll-progress-bar"
        style={{ scaleX }}
        className="h-full w-full bg-gradient-to-r from-amber-400 via-orange-400 to-teal-400 origin-left shadow-[0_0_10px_rgba(245,158,11,0.6)]"
      />
    </div>
  );
}
