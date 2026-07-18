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
          Wedding Gift
        </h2>
        <p style={{ fontSize: '0.9rem', marginBottom: '3rem', opacity: 0.9, color: '#fff', textShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami.<br />
          Dan jika Anda ingin memberikan tanda kasih untuk kami, dapat melalui fitur di bawah ini:
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
          Ketuk untuk {isOpen ? 'menutup' : 'membuka'} amplop digital
        </p>

        {/* Modal Overlay for Bank Details */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(5px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
          padding: '2rem'
        }}>
          <div className="glass-panel" style={{
            position: 'relative',
            width: '100%',
            maxWidth: '350px',
            padding: '2.5rem 1.5rem',
            textAlign: 'center',
            transform: isOpen ? 'scale(1)' : 'scale(0.9)',
            transition: 'transform 0.3s ease'
          }}>
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'none',
                border: 'none',
                color: 'var(--text-light)',
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5px'
              }}
            >
              ×
            </button>

            <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-dark)', marginBottom: '1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
              Kirim Hadiah
            </h3>
            
            <p style={{ fontSize: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Bank BCA</p>
            <p style={{ fontSize: '1.5rem', letterSpacing: '3px', fontFamily: 'monospace', marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
              1234567890
            </p>
            <p style={{ fontSize: '0.9rem', marginBottom: '2rem', opacity: 0.8 }}>a.n Aditya Pratama</p>
            
            <button 
              onClick={handleCopy}
              className="glass-button"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                margin: '0 auto',
                padding: '10px 25px',
                fontSize: '1rem',
                backgroundColor: copied ? '#4ade80' : 'var(--secondary-color)',
                color: copied ? '#000' : 'var(--primary-color)',
                border: copied ? 'none' : '1px solid var(--primary-color)'
              }}
            >
              <PiCopySimpleFill />
              {copied ? 'Tersalin!' : 'Salin Nomor Rekening'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WishingWell;
