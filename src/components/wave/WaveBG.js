import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

// Each entry: { top, color } for each section (vh units for vertical position)
const HIGHLIGHTS = [
  { top: '28vh', color: '#ffe066' }, // About (behind name/summary)
  { top: '44vh', color: '#ffd6a0' }, // Skills
  { top: '60vh', color: '#ffb3c6' }, // Projects
  { top: '76vh', color: '#b8e0ff' }, // Contact
];

export default function WaveBG({ sectionRefs }) {
  const barRef = useRef();
  const [barStyle, setBarStyle] = useState(() => {
    // On first render, pick the color/position for the current scroll
    if (!sectionRefs) {
      return {
        top: HIGHLIGHTS[0].top,
        color: HIGHLIGHTS[0].color,
      };
    }
    // Try to match the logic in getActiveSection
    const sections = sectionRefs
      ? [sectionRefs.aboutRef, sectionRefs.skillsRef, sectionRefs.projectRef, sectionRefs.contactRef]
      : [];
    let idx = 0;
    const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    for (let i = sections.length - 1; i >= 0; i--) {
      const ref = sections[i];
      if (ref && ref.current) {
        const top = ref.current.getBoundingClientRect().top + scrollY;
        if (scrollY + window.innerHeight / 3 >= top) {
          idx = i;
          break;
        }
      }
    }
    return {
      top: HIGHLIGHTS[idx].top,
      color: HIGHLIGHTS[idx].color,
    };
  });

  useEffect(() => {
    if (!sectionRefs) return;
    const { aboutRef, skillsRef, projectRef, contactRef } = sectionRefs;
    const sections = [aboutRef, skillsRef, projectRef, contactRef];

    function getActiveSection() {
      const scrollY = window.scrollY;
      let idx = 0;
      for (let i = sections.length - 1; i >= 0; i--) {
        const ref = sections[i];
        if (ref && ref.current) {
          const top = ref.current.getBoundingClientRect().top + window.scrollY;
          if (scrollY + window.innerHeight / 3 >= top) {
            idx = i;
            break;
          }
        }
      }
      return idx;
    }

    function updateBar() {
      const idx = getActiveSection();
      const { color, top } = HIGHLIGHTS[idx];
      setBarStyle({ color, top });
      gsap.to(barRef.current, {
        background: `linear-gradient(90deg, transparent 0%, ${color} 10%, ${color} 90%, transparent 100%)`,
        top,
        duration: 0.15,
        ease: 'power2.inOut',
      });
    }

    updateBar();
    window.addEventListener('scroll', updateBar, { passive: true });
    window.addEventListener('resize', updateBar);
    return () => {
      window.removeEventListener('scroll', updateBar);
      window.removeEventListener('resize', updateBar);
    };
  }, [sectionRefs]);

  // Initial style: match the current scroll position
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'visible',
      }}
    >
      <div
        ref={barRef}
        style={{
          position: 'absolute',
          left: '0vw',
          top: barStyle.top,
          transform: 'translateY(-50%)',
          width: '100vw',
          height: '12rem',
          borderRadius: '6rem',
          background: `linear-gradient(90deg, transparent 0%, ${barStyle.color} 10%, ${barStyle.color} 90%, transparent 100%)`,
          filter: 'blur(56px)',
          opacity: 0.72,
          transition: 'background 0.1s, top 0.15s',
        }}
      />
    </div>
  );
} 