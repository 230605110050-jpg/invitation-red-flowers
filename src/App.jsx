import React, { useState, useEffect, useRef } from 'react';
import { PiMusicNotesFill } from 'react-icons/pi';
import Background from './components/Background';
import Hero from './components/Hero';
import Couple from './components/Couple';
import EventDetails from './components/EventDetails';
import RSVP from './components/RSVP';
import flower1 from './assets/image/red flowers.png';
import flower2 from './assets/image/red flower 2.png';
import flower3 from './assets/image/red flower 3.png';
import flower6 from './assets/image/red flower 6.png';
import bgmSound from './assets/music/Rizky Febian Feat. Mahalini - Bermuara [Official Lyric Video].mp3';
import sfxSound from './assets/sfx/universfield-magic-spell-278824.mp3';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const handleOpenInvitation = () => {
    setIsExploding(true);
    
    // Play transition sound effect
    const sfx = new Audio(sfxSound);
    sfx.volume = 0.6;
    sfx.play().catch(e => console.log('Audio play blocked:', e));

    setTimeout(() => {
      setIsOpen(true);
    }, 1000); // 1s to let flowers cover screen before revealing next section

    setTimeout(() => {
      setIsExploding(false);
    }, 2500); 
  };

  useEffect(() => {
    if (isOpen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isOpen]);

  return (
    <div className="app-container" style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* Background layer */}
      <Background />

      {/* Background Music (Plays when invitation is open) */}
      {isOpen && (
        <audio ref={audioRef} autoPlay loop src={bgmSound} />
      )}

      {/* Music Control Button */}
      {isOpen && (
        <button 
          onClick={() => {
            if (audioRef.current) {
              if (isPlaying) audioRef.current.pause();
              else audioRef.current.play();
              setIsPlaying(!isPlaying);
            }
          }}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 9999,
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            backgroundColor: 'rgba(20, 0, 0, 0.45)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(156, 31, 36, 0.8)', /* Red list/border */
            color: 'var(--primary-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: isPlaying ? 'none' : '0 4px 15px rgba(0,0,0,0.4), inset 0 0 10px rgba(156, 31, 36, 0.2)',
            animation: isPlaying ? 'music-glow 2s ease-in-out infinite' : 'none',
            fontSize: '1.2rem',
            padding: 0,
            transition: 'all 0.3s ease'
          }}
          aria-label="Toggle Music"
        >
          {isPlaying ? (
            <div className="spectrum-container">
              <div className="spectrum-bar" />
              <div className="spectrum-bar" />
              <div className="spectrum-bar" />
              <div className="spectrum-bar" />
            </div>
          ) : (
            <PiMusicNotesFill size={22} />
          )}
        </button>
      )}

      {/* Massive Explosion Particles Overlay */}
      {isExploding && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 9999, overflow: 'hidden' }}>
          {Array.from({ length: 60 }).map((_, i) => {
            const angle = (Math.PI * 2 * i) / 60;
            // Keep them clustered tighter but huge
            const distance = Math.random() * 500; 
            const tx = `${Math.cos(angle) * distance}px`;
            const ty = `${Math.sin(angle) * distance}px`;
            const rot = `${Math.random() * 360}deg`;
            const scale = 2.0 + Math.random() * 4.5; // Massive scale (2x to 6.5x) to ensure total screen coverage
            const duration = 2.0 + Math.random() * 1.0; 
            const delay = Math.random() * 0.15; 
            
            return (
              <img
                key={i}
                src={flower6}
                className="massive-flower-particle"
                style={{
                  '--tx': tx,
                  '--ty': ty,
                  '--rot': rot,
                  '--scale': scale,
                  animationDuration: `${duration}s`,
                  animationDelay: `${delay}s`
                }}
                alt=""
              />
            );
          })}
        </div>
      )}

      {/* Rest of the app content */}
      {!isOpen ? (
        <Hero onOpen={handleOpenInvitation} />
      ) : (
        <div style={{ position: 'relative', zIndex: 10, animation: 'fade-in-up 1s ease-out' }}>
          {/* Main content wrapper */}
          <div style={{ paddingTop: '2rem', position: 'relative', overflowX: 'clip' }}>
            
            {/* Decorative Flowers */}
            <img src={flower2} alt="" style={{ position: 'absolute', top: '50px', right: '-40px', width: '220px', opacity: 0.85, pointerEvents: 'none', zIndex: -1, transform: 'rotate(15deg)' }} />
            <img src={flower3} alt="" style={{ position: 'absolute', top: '450px', left: '-50px', width: '180px', opacity: 0.85, pointerEvents: 'none', zIndex: -1, transform: 'rotate(-25deg)' }} />
            <img src={flower1} alt="" style={{ position: 'absolute', top: '900px', right: '-30px', width: '200px', opacity: 0.85, pointerEvents: 'none', zIndex: -1, transform: 'rotate(180deg)' }} />
            <img src={flower2} alt="" style={{ position: 'absolute', top: '1350px', left: '-40px', width: '220px', opacity: 0.85, pointerEvents: 'none', zIndex: -1, transform: 'rotate(110deg) scaleX(-1)' }} />
            <img src={flower3} alt="" style={{ position: 'absolute', bottom: '250px', right: '-50px', width: '200px', opacity: 0.85, pointerEvents: 'none', zIndex: -1, transform: 'rotate(45deg)' }} />
            <img src={flower1} alt="" style={{ position: 'absolute', bottom: '50px', left: '-30px', width: '150px', opacity: 0.6, pointerEvents: 'none', zIndex: -1, transform: 'rotate(-45deg)' }} />

            {/* Greeting */}
            <div style={{ textAlign: 'center', marginBottom: '2rem', padding: '0 1.5rem' }}>
              <div style={{ 
                background: 'var(--glass-bg)', 
                backdropFilter: 'blur(8px)',
                padding: '2rem 1.5rem', 
                borderRadius: '16px',
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--glass-shadow)'
              }}>
                <h3 className="script-text" style={{ fontSize: '2rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>
                  Welcome to Our Wedding
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                  With the grace and blessing of God, we cordially invite you to our wedding celebration.
                </p>
              </div>
            </div>

            <Couple />
            <EventDetails />
            <RSVP />
            
            {/* Footer */}
            <footer style={{ 
              textAlign: 'center', 
              padding: '2rem 1.5rem 4rem', 
              opacity: 0.8,
              fontSize: '0.85rem'
            }}>
              <p>Made with love by Nathaniel & Eleanor</p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', opacity: 0.6 }}>Dibuat oleh Vermilion Web Labs</p>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
