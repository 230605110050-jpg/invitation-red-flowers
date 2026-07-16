import React, { useState } from 'react';
import { PiCopySimpleFill } from 'react-icons/pi';
import redFlowers from '../assets/image/red flowers.png';
import redFlower6 from '../assets/image/red flower 6.png';

const WishingWell = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('1234567890');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="section-padding">
      <div style={{ padding: '2rem 1.5rem', textAlign: 'center', position: 'relative' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 6vw, 2rem)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--primary-color)', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
          Wishing Well
        </h2>
        <p style={{ fontSize: '0.9rem', marginBottom: '3rem', opacity: 0.9, color: '#fff', textShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>
          Your presence would mean the world to us.<br />
          If you wish to give a gift, you may tap the flower below.
        </p>

        {/* Central Element Container */}
        <div 
          onClick={() => setIsOpen(!isOpen)}
          style={{ 
            position: 'relative', 
            width: '320px', 
            height: '320px', 
            margin: '0 auto', 
            cursor: 'pointer',
            transition: 'transform 0.3s ease'
          }}
          className="wishing-well-trigger"
        >
          {/* Main Central Image */}
          <div style={{ width: '100%', height: '100%', animation: 'float 8s ease-in-out infinite' }}>
            <img 
              src={redFlowers} 
              alt="Wedding Gift" 
              className="wishing-well-main-flower"
            />
          </div>
          
          {/* Floating Small Flowers */}
          <div className="small-flower-wrapper sf-1"><img src={redFlower6} alt="" className="floating-1" /></div>
          <div className="small-flower-wrapper sf-2"><img src={redFlower6} alt="" className="floating-2" /></div>
          <div className="small-flower-wrapper sf-3"><img src={redFlower6} alt="" className="floating-3" /></div>
          <div className="small-flower-wrapper sf-4"><img src={redFlower6} alt="" className="floating-4" /></div>
          <div className="small-flower-wrapper sf-5"><img src={redFlower6} alt="" className="floating-5" /></div>
          <div className="small-flower-wrapper sf-6"><img src={redFlower6} alt="" className="floating-6" /></div>
        </div>

        <p style={{ marginTop: '2rem', fontSize: '0.85rem', opacity: 0.9, fontStyle: 'italic', color: '#fff', textShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>
          Tap to {isOpen ? 'close' : 'open'}
        </p>

        {/* Revealed Bank Details */}
        <div style={{
          maxHeight: isOpen ? '500px' : '0',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          marginTop: isOpen ? '2rem' : '0'
        }}>
          <div className="glass-panel" style={{
            maxWidth: '300px',
            margin: '0 auto',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>Bank BCA</h3>
            <p style={{ fontSize: '1.2rem', letterSpacing: '2px', fontFamily: 'monospace', marginBottom: '0.5rem' }}>
              1234567890
            </p>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>a.n Nathaniel Alexander</p>
            
            <button 
              onClick={handleCopy}
              className="glass-button"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                margin: '0 auto',
                padding: '8px 20px',
                fontSize: '0.9rem',
                backgroundColor: copied ? '#4ade80' : 'var(--secondary-color)',
                color: copied ? '#000' : 'var(--primary-color)',
                border: copied ? 'none' : '1px solid var(--primary-color)'
              }}
            >
              <PiCopySimpleFill />
              {copied ? 'Tersalin!' : 'Copy Rekening'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WishingWell;
