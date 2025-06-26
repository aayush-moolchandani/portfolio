import React, { useState, useEffect } from 'react'
import resume from '../../assets/2025_resume.pdf'
import { motion } from 'framer-motion'
import './header.css'

function useSequentialTypewriter(lines, speed = 55, pause = 700) {
  const [typedLines, setTypedLines] = useState(['', '', '']);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (lineIdx >= lines.length) return;
    if (charIdx < lines[lineIdx].length) {
      const timeout = setTimeout(() => {
        setTypedLines(prev => {
          const copy = [...prev];
          copy[lineIdx] = lines[lineIdx].slice(0, charIdx + 1);
          return copy;
        });
        setCharIdx(c => c + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (lineIdx < lines.length - 1) {
      const timeout = setTimeout(() => {
        setLineIdx(l => l + 1);
        setCharIdx(0);
      }, pause);
      return () => clearTimeout(timeout);
    }
  }, [charIdx, lineIdx, lines, speed, pause]);

  return { typedLines, lineIdx };
}

export default function Header() {
  const lines = ["Hello I'm", 'Aayush Moolchandani', 'Senior Software Developer'];
  const { typedLines, lineIdx } = useSequentialTypewriter(lines, 55, 700);
  return (
    <header>
      <motion.div
        className='container header_container'
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h5 style={{ minHeight: 32 }}>
          {typedLines[0]}
          {lineIdx === 0 && <span className="type-cursor">|</span>}
        </h5>
        <h1 style={{ minHeight: 56 }}>
          {typedLines[1]}
          {lineIdx === 1 && <span className="type-cursor">|</span>}
        </h1>
        <h5 className='text-light' style={{ minHeight: 32 }}>
          {typedLines[2]}
          {lineIdx === 2 && <span className="type-cursor">|</span>}
        </h5>
        <div className='cta'>
          <a href={resume} download className='btn'>Download CV</a>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </motion.div>
      <style>{`
        .type-cursor {
          display: inline-block;
          width: 1ch;
          animation: blink 1s steps(1) infinite;
        }
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </header>
  )
}
