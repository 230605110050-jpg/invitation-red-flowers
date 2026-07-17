import React from 'react';
import { PiHeartFill } from 'react-icons/pi';
import heroBg from '../assets/image/red flowers.png';
import flower4Kiri from '../assets/image/red flower 4 kiri.png';
import flower4Kanan from '../assets/image/red flower 4 kanan.png';
import flower2 from '../assets/image/red flower 2.png';

const Hero = ({ onOpen }) => {

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      zIndex: 10,
      overflow: 'hidden',
      backgroundColor: '#0a0202'
    }}>
      {/* Animated Background Layer */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: `url("${heroBg}") center/cover no-repeat`,
        animation: 'hero-zoom 15s ease-out forwards',
        zIndex: 0
      }} />
      {/* Dark overlay to blur and darken the background image a bit */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(10, 2, 2, 0.4)',
        zIndex: 0
      }} />

      {/* Glass Panel Container (Position Relative so flowers can overlap) */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '380px' }}>
        
        {/* The Glass Panel */}
        <div className="glass-panel" style={{
          padding: '2.5rem 5% 3.5rem', // responsive padding
          textAlign: 'center',
          position: 'relative',
          animation: 'fade-in-up 1s ease-out',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          
          {/* Heart Badge */}
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: 'var(--secondary-color)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary-color)',
            marginBottom: '1.5rem',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
          }}>
            <PiHeartFill size={20} />
          </div>

          <h1 style={{ 
            fontSize: 'clamp(1.5rem, 8vw, 2.2rem)', 
            lineHeight: '1.2', 
            margin: '0', 
            color: 'var(--primary-color)',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            Nathaniel
          </h1>
          <span style={{ fontSize: 'clamp(1rem, 5vw, 1.2rem)', fontFamily: 'var(--font-heading)', margin: '0.5rem 0', color: 'var(--primary-color)' }}>&</span>
          <h1 style={{ 
            fontSize: 'clamp(1.5rem, 8vw, 2.2rem)', 
            lineHeight: '1.2', 
            margin: '0', 
            color: 'var(--primary-color)',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            Eleanor
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: '1.5rem 0', width: '60%' }}>
            <div style={{ height: '1px', flex: 1, background: 'linear-gradient(to right, transparent, var(--primary-color))' }} />
            <span style={{ color: 'var(--primary-color)', opacity: 0.7, fontSize: '0.8rem' }}>❦</span>
            <div style={{ height: '1px', flex: 1, background: 'linear-gradient(to left, transparent, var(--primary-color))' }} />
          </div>

          <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
            November 28, 2026
          </p>

          <p style={{ fontSize: '1rem', marginBottom: '2.5rem', opacity: 0.8 }}>
            You're Invited
          </p>

          {/* Placeholder to preserve panel height */}
          <div style={{ height: '44px' }}></div>

        </div>

        {/* Decorative Overlapping Flowers */}
        <img src={flower4Kiri} alt="" style={{
          position: 'absolute',
          top: '-15%',
          left: '-15%',
          width: '70%',
          maxWidth: '250px',
          pointerEvents: 'none',
          zIndex: 2,
          animation: 'fade-in-up 1s ease-out 0.2s both'
        }} />

        <img src={flower4Kanan} alt="" style={{
          position: 'absolute',
          top: '-15%',
          right: '-15%',
          width: '70%',
          maxWidth: '250px',
          pointerEvents: 'none',
          zIndex: 2,
          animation: 'fade-in-up 1s ease-out 0.3s both'
        }} />

        {/* Flexbox wrapper to perfectly center the flower on all screens */}
        <div style={{
          position: 'absolute',
          bottom: '-25%',
          left: '0',
          right: '0',
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 2,
        }}>
          <img src={flower2} alt="" style={{
            width: '135%',
            maxWidth: '500px',
            animation: 'fade-in-up 1s ease-out 0.4s both'
          }} />
        </div>

        {/* Button placed outside to layer OVER the flowers */}
        <div style={{
          position: 'absolute',
          bottom: '4rem',
          left: '0',
          right: '0',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 20,
          animation: 'fade-in-up 1s ease-out 0.5s both'
        }}>
          <button className="glass-button" onClick={onOpen} style={{
            backgroundColor: 'var(--secondary-color)',
            color: 'var(--primary-color)',
            padding: '12px 30px',
            fontSize: '1rem',
            borderRadius: '30px'
          }}>
            Open Invitation
          </button>
        </div>

      </div>



    </div>
  );
};

export default Hero;
