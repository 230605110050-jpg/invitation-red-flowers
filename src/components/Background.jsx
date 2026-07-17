import React from 'react';
import { PiLeafFill, PiFlowerTulipFill } from 'react-icons/pi';
import bgImage from '../assets/image/background.png';

const Background = () => {
  // Generate random particles
  const particles = Array.from({ length: 15 }).map((_, i) => {
    const isLeaf = Math.random() > 0.5;
    const size = Math.random() * 15 + 10;
    const left = Math.random() * 100;
    const sway = Math.random() * 40 - 20; // -20px to 20px
    const duration = Math.random() * 10 + 8; // 8s to 18s
    const delay = Math.random() * 5; // 0s to 5s

    return { id: i, isLeaf, size, left, sway, duration, delay };
  });

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
      background: `url(${bgImage}) center/cover no-repeat fixed`,
      backgroundColor: '#0a0202',
      overflow: 'hidden'
    }}>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            top: '-50px',
            left: `${p.left}%`,
            color: p.isLeaf ? '#9c1f24' : '#d4af37',
            fontSize: `${p.size}px`,
            opacity: 0.6,
            '--sway': `${p.sway}px`,
            animation: `ambient-fall ${p.duration}s ease-in-out ${p.delay}s infinite`
          }}
        >
          {p.isLeaf ? <PiLeafFill /> : <PiFlowerTulipFill />}
        </div>
      ))}
      
      {/* Soft overlay to blend */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(1px)'
      }} />
    </div>
  );
};

export default Background;
