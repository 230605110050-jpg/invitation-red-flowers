import React from 'react';
import redFlower2 from '../assets/image/red flower 2.png';

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
                {/* Placeholder image, can be replaced by real photo */}
                <div style={{
                  width: '100%', height: '100%', 
                  background: 'url(https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80) center/cover no-repeat'
                }} />
              </div>
              
              {/* Flower Decoration */}
              <img src={redFlower2} alt="" style={{ position: 'absolute', bottom: '-35px', left: '50%', transform: 'translateX(-50%)', width: '130px', zIndex: 2, filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }} />
            </div>
            <h3 className="script-text" style={{ fontSize: 'clamp(2rem, 8vw, 2.5rem)', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
              Nathaniel
            </h3>
            <p style={{ fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.5rem' }}>Nathaniel Alexander</p>
            <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>
              Putra dari Bpk. Alexander & Ibu Sarah
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
                {/* Placeholder image, can be replaced by real photo */}
                <div style={{
                  width: '100%', height: '100%', 
                  background: 'url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80) center/cover no-repeat'
                }} />
              </div>
              
              {/* Flower Decoration */}
              <img src={redFlower2} alt="" style={{ position: 'absolute', bottom: '-35px', left: '50%', transform: 'translateX(-50%)', width: '130px', zIndex: 2, filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }} />
            </div>
            <h3 className="script-text" style={{ fontSize: 'clamp(2rem, 8vw, 2.5rem)', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
              Eleanor
            </h3>
            <p style={{ fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.5rem' }}>Eleanor Victoria</p>
            <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>
              Putri dari Bpk. William & Ibu Elizabeth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couple;
