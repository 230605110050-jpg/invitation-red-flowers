import React from 'react';
import redFlower2 from '../assets/image/red flower 2.png';
import priaImg from '../assets/image/pria.png';
import wanitaImg from '../assets/image/wanita.png';

const Couple = () => {
  return (
    <div className="section-padding">
      <div className="glass-panel" style={{ padding: '3rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 6vw, 2rem)', marginBottom: '1.5rem' }}>Sang Mempelai</h2>
        <p style={{ fontSize: '1rem', fontStyle: 'italic', marginBottom: '3rem', opacity: 0.8 }}>
          "Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan."
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {/* Groom */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div style={{ position: 'relative', width: '180px', margin: '0 auto 1.5rem' }}>
              <div style={{
                width: '180px',
                height: '240px',
                borderRadius: '90px 90px 20px 20px',
                overflow: 'hidden',
                border: '4px solid var(--secondary-color)',
                boxShadow: 'var(--glass-shadow)',
                background: 'var(--glass-bg)'
              }}>
                {/* Photo Pria */}
                <div style={{
                  width: '100%', height: '100%', 
                  background: `url(${priaImg}) center/cover no-repeat`
                }} />
              </div>
              
              {/* Flower Decoration */}
              <img src={redFlower2} alt="" style={{ position: 'absolute', bottom: '-35px', left: '50%', transform: 'translateX(-50%)', width: '130px', zIndex: 2, filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }} />
            </div>
            <h3 className="script-text" style={{ fontSize: 'clamp(2rem, 8vw, 2.5rem)', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
              Aditya
            </h3>
            <h3 style={{ fontSize: '1rem', color: 'var(--primary-color)', marginBottom: '1.5rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Mempelai Pria
            </h3>
            <p style={{ fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.5rem' }}>Aditya Pratama</p>
            <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>
              Putra dari Bpk. Budi Pratama & Ibu Siti Aminah
            </p>
          </div>

          <div style={{ fontSize: 'clamp(2rem, 8vw, 2.5rem)', color: 'var(--primary-color)', fontFamily: 'var(--font-heading)' }}>
            &
          </div>

          {/* Bride */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div style={{ position: 'relative', width: '180px', margin: '0 auto 1.5rem' }}>
              <div style={{
                width: '180px',
                height: '240px',
                borderRadius: '90px 90px 20px 20px',
                overflow: 'hidden',
                border: '4px solid var(--secondary-color)',
                boxShadow: 'var(--glass-shadow)',
                background: 'var(--glass-bg)'
              }}>
                {/* Photo Wanita */}
                <div style={{
                  width: '100%', height: '100%', 
                  background: `url(${wanitaImg}) center/cover no-repeat`
                }} />
              </div>
              
              {/* Flower Decoration */}
              <img src={redFlower2} alt="" style={{ position: 'absolute', bottom: '-35px', left: '50%', transform: 'translateX(-50%)', width: '130px', zIndex: 2, filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }} />
            </div>
            <h3 className="script-text" style={{ fontSize: 'clamp(2rem, 8vw, 2.5rem)', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
              Nabila
            </h3>
            <h3 style={{ fontSize: '1rem', color: 'var(--primary-color)', marginBottom: '1.5rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Mempelai Wanita
            </h3>
            <p style={{ fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.5rem' }}>Nabila Ayu</p>
            <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>
              Putri dari Bpk. Joko Susanto & Ibu Rini Wulandari
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couple;
