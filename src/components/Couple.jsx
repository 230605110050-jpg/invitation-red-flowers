import React from 'react';

const Couple = () => {
  return (
    <div className="section-padding">
      <div className="glass-panel" style={{ padding: '3rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>The Happy Couple</h2>
        <p style={{ fontSize: '1rem', fontStyle: 'italic', marginBottom: '3rem', opacity: 0.8 }}>
          "Two souls with but a single thought, two hearts that beat as one."
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {/* Groom */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div style={{
              width: '180px',
              height: '240px',
              margin: '0 auto 1.5rem',
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
            <h3 className="script-text" style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
              Nathaniel
            </h3>
            <p style={{ fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.5rem' }}>Nathaniel Alexander</p>
            <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>
              Son of Mr. Alexander & Mrs. Sarah
            </p>
          </div>

          <div style={{ fontSize: '2.5rem', color: 'var(--primary-color)', fontFamily: 'var(--font-heading)' }}>
            &
          </div>

          {/* Bride */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div style={{
              width: '180px',
              height: '240px',
              margin: '0 auto 1.5rem',
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
            <h3 className="script-text" style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
              Eleanor
            </h3>
            <p style={{ fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.5rem' }}>Eleanor Victoria</p>
            <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>
              Daughter of Mr. William & Mrs. Elizabeth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couple;
