import React, { useState, useEffect, useRef } from 'react';
import { PiMusicNotesFill } from 'react-icons/pi';
import Background from './components/Background';
import Hero from './components/Hero';
import Couple from './components/Couple';
import EventDetails from './components/EventDetails';
import WishingWell from './components/WishingWell';
import RSVP from './components/RSVP';
import Schedule from './components/Schedule';
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
          {/* Header Decoration */}
          <header style={{
            position: 'relative',
            width: '100%',
            height: '240px',
            overflow: 'hidden'
          }}>
            <img 
              src={flower2} 
              alt="" 
              style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(180deg)',
                width: '850px',
                maxWidth: 'none',
                opacity: 0.85,
                pointerEvents: 'none',
                zIndex: 0
              }} 
            />
          </header>

          {/* Main content wrapper */}
          <div style={{ position: 'relative', overflowX: 'clip', marginTop: '-2rem' }}>

            {/* Dense, Animated & Luxurious Decorative Flowers */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: -1 }}>
              <img src={flower2} alt="" style={{ position: 'absolute', top: '1%', right: '-100px', width: '450px', opacity: 0.8, transform: 'rotate(15deg)', animation: 'float-slow 10s ease-in-out infinite' }} />
              <img src={flower6} alt="" style={{ position: 'absolute', top: '5%', left: '-80px', width: '300px', opacity: 0.5, filter: 'blur(4px)', transform: 'rotate(-45deg)', animation: 'float-reverse 12s ease-in-out infinite' }} />
              
              <img src={flower3} alt="" style={{ position: 'absolute', top: '15%', left: '-120px', width: '400px', opacity: 0.75, transform: 'rotate(-25deg)', animation: 'float 9s ease-in-out infinite' }} />
              <img src={flower1} alt="" style={{ position: 'absolute', top: '25%', right: '-150px', width: '350px', opacity: 0.4, filter: 'blur(5px)', transform: 'rotate(120deg)', animation: 'float-slow 14s ease-in-out infinite' }} />
              
              <img src={flower1} alt="" style={{ position: 'absolute', top: '40%', right: '-100px', width: '500px', opacity: 0.8, transform: 'rotate(180deg)', animation: 'float-reverse 11s ease-in-out infinite' }} />
              <img src={flower6} alt="" style={{ position: 'absolute', top: '45%', left: '10px', width: '150px', opacity: 0.9, transform: 'rotate(60deg)', animation: 'float 7s ease-in-out infinite' }} />
              
              <img src={flower2} alt="" style={{ position: 'absolute', top: '65%', left: '-150px', width: '450px', opacity: 0.75, transform: 'rotate(110deg) scaleX(-1)', animation: 'float-slow 13s ease-in-out infinite' }} />
              <img src={flower3} alt="" style={{ position: 'absolute', top: '60%', right: '-100px', width: '300px', opacity: 0.5, filter: 'blur(3px)', transform: 'rotate(20deg)', animation: 'float 8s ease-in-out infinite' }} />
              
              <img src={flower3} alt="" style={{ position: 'absolute', top: '85%', right: '-120px', width: '400px', opacity: 0.8, transform: 'rotate(45deg)', animation: 'float-reverse 10s ease-in-out infinite' }} />
              <img src={flower1} alt="" style={{ position: 'absolute', top: '90%', left: '-100px', width: '350px', opacity: 0.7, transform: 'rotate(-45deg)', animation: 'float-slow 9s ease-in-out infinite' }} />
              
              <img src={flower2} alt="" style={{ position: 'absolute', bottom: '0', left: '30%', width: '300px', opacity: 0.3, filter: 'blur(6px)', transform: 'rotate(90deg)', animation: 'float 15s ease-in-out infinite' }} />
            </div>

            {/* Greeting */}
            <div style={{ textAlign: 'center', marginBottom: '2rem', padding: '0 1.5rem' }}>
              <div className="glass-panel" style={{
                padding: '2rem 1.5rem',
              }}>
                <h3 className="script-text" style={{ fontSize: '2rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>
                  Bismillahirrahmanirrahim
                </h3>
                <p style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '1.5rem', color: 'var(--primary-color)' }}>
                  Assalamu'alaikum Warahmatullahi Wabarakatuh
                </p>
                <p style={{ fontSize: '0.85rem', lineHeight: '1.6', fontStyle: 'italic', opacity: 0.8, marginBottom: '1.5rem' }}>
                  "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
                  <br /><br />
                  <strong>(QS. Ar-Rum: 21)</strong>
                </p>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan acara pernikahan putra-putri kami:
                </p>
              </div>
            </div>

            <Couple />
            <EventDetails />
            <Schedule />
            <WishingWell />
            <RSVP />

            {/* Footer */}
            <footer style={{
              position: 'relative',
              textAlign: 'center',
              padding: '2rem 1.5rem 240px',
              fontSize: '0.85rem',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'relative', zIndex: 1, opacity: 0.8 }}>
                <p>Made with love by Nathaniel & Eleanor</p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', opacity: 0.6 }}>
                  © 2026 Vermilion Web Labs<br />
                  All Rights Reserved.
                </p>
              </div>

              {/* Red flower 2 as footer decoration (only top half visible) */}
              <img 
                src={flower2} 
                alt="" 
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translate(-50%, 50%)',
                  width: '850px',
                  maxWidth: 'none',
                  opacity: 0.85,
                  pointerEvents: 'none',
                  zIndex: 0
                }} 
              />
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
