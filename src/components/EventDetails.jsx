import React, { useState, useEffect } from 'react';
import { PiHeartFill } from 'react-icons/pi';

const EventDetails = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date('2026-11-28T09:00:00').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;
      
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section-padding">
      <div className="glass-panel" style={{ padding: '3rem 1.5rem', textAlign: 'center' }}>
        

        {/* Visual Calendar */}
        <div className="animate-fade-in-up" style={{ marginBottom: '3rem' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
            November 2026
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', maxWidth: '300px', margin: '0 auto', fontSize: '0.9rem' }}>
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
              <div key={`header-${i}`} style={{ color: 'var(--primary-dark)', fontWeight: 'bold', paddingBottom: '0.5rem' }}>{day}</div>
            ))}
            {Array.from({ length: 30 }).map((_, i) => {
              const day = i + 1;
              const isWeddingDay = day === 28;
              return (
                <div key={`day-${day}`} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '34px',
                  height: '34px',
                  margin: '0 auto',
                  borderRadius: '50%',
                  backgroundColor: isWeddingDay ? '#3d0c0c' : 'transparent',
                  color: isWeddingDay ? 'var(--primary-color)' : 'var(--text-dark)',
                  boxShadow: isWeddingDay ? '0 0 15px rgba(156, 31, 36, 0.6)' : 'none',
                  fontWeight: isWeddingDay ? 'bold' : 'normal',
                  border: isWeddingDay ? '1px solid var(--primary-color)' : '1px solid transparent',
                  position: 'relative'
                }}>
                  {day}
                  {isWeddingDay && (
                    <div style={{ position: 'absolute', top: '-6px', right: '-6px', animation: 'music-glow 2s infinite' }}>
                      <PiHeartFill size={14} color="var(--primary-color)" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, var(--glass-border), transparent)', margin: '0 2rem 2.5rem' }} />

        {/* Akad Nikah */}
        <div className="animate-fade-in-up" style={{ marginBottom: '4rem' }}>
          <h3 style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--primary-dark)', fontWeight: 'bold' }}>
            Informasi Akad Nikah
          </h3>
          <p style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px', marginBottom: '2rem', opacity: 0.8 }}>
            Kami mengundang Anda untuk merayakan bersama kami pada:
          </p>
          <div style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
            09:00
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', color: 'var(--primary-dark)', width: '100%' }}>
            <span style={{ flex: 1, textAlign: 'right' }}>Sabtu</span>
            <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--primary-color)', opacity: 0.5 }} />
            <span style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--primary-color)' }}>28</span>
            <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--primary-color)', opacity: 0.5 }} />
            <span style={{ flex: 1, textAlign: 'left' }}>November</span>
          </div>
          <div style={{ fontSize: '1.2rem', letterSpacing: '3px', marginBottom: '3rem', color: 'var(--primary-dark)' }}>
            2026
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', maxWidth: '350px', margin: '0 auto 2.5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.5rem', opacity: 0.8 }}>Kehadiran Tamu</div>
              <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--primary-color)' }}>08:30</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.5rem', opacity: 0.8 }}>Akad Dimulai</div>
              <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--primary-color)' }}>09:00</div>
            </div>
          </div>

          <p style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Masjid Agung Istiqlal</p>
          <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '1.5rem' }}>Jl. Taman Wijaya Kusuma, Jakarta Pusat</p>
          
          <div style={{ width: '100%', height: '200px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--glass-border)', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
            <iframe 
              width="100%" height="100%" frameBorder="0" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(85%)' }} 
              src="https://maps.google.com/maps?q=Masjid+Istiqlal&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              allowFullScreen title="Ceremony Location"
            />
          </div>
        </div>

        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, var(--glass-border), transparent)', margin: '0 2rem 4rem' }} />

        {/* Resepsi */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s', marginBottom: '4rem' }}>
          <h3 style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--primary-dark)', fontWeight: 'bold' }}>
            Informasi Resepsi
          </h3>
          <p style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px', marginBottom: '2rem', opacity: 0.8 }}>
            Kami mengundang Anda untuk merayakan bersama kami pada:
          </p>
          <div style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
            19:00
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', color: 'var(--primary-dark)', width: '100%' }}>
            <span style={{ flex: 1, textAlign: 'right' }}>Sabtu</span>
            <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--primary-color)', opacity: 0.5 }} />
            <span style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--primary-color)' }}>28</span>
            <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--primary-color)', opacity: 0.5 }} />
            <span style={{ flex: 1, textAlign: 'left' }}>November</span>
          </div>
          <div style={{ fontSize: '1.2rem', letterSpacing: '3px', marginBottom: '3rem', color: 'var(--primary-dark)' }}>
            2026
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', maxWidth: '350px', margin: '0 auto 2.5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.5rem', opacity: 0.8 }}>Kehadiran Tamu</div>
              <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--primary-color)' }}>18:30</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.5rem', opacity: 0.8 }}>Resepsi Dimulai</div>
              <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--primary-color)' }}>19:00</div>
            </div>
          </div>

          <p style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Hotel Mulia Senayan</p>
          <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '1.5rem' }}>Jl. Asia Afrika, Senayan, Jakarta Pusat</p>
          
          <div style={{ width: '100%', height: '200px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--glass-border)', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
            <iframe 
              width="100%" height="100%" frameBorder="0" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(85%)' }} 
              src="https://maps.google.com/maps?q=Hotel+Mulia+Senayan&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              allowFullScreen title="Reception Location"
            />
          </div>
        </div>

        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, var(--glass-border), transparent)', margin: '0 2rem 3rem' }} />

        {/* Countdown */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '1rem', marginBottom: '1.5rem', color: 'var(--primary-dark)', fontWeight: 'bold' }}>
            Menghitung Hari
          </h3>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            background: 'rgba(61, 12, 12, 0.8)', // dark theme background
            border: '1px solid rgba(212, 175, 55, 0.3)', // subtle gold border
            borderRadius: '20px',
            padding: '1.5rem 0.5rem',
            gap: '0.2rem',
            boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
            maxWidth: '380px',
            margin: '0 auto',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1, fontWeight: 'bold' }}>
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.7, marginTop: '0.8rem', color: '#fff' }}>Hari</div>
            </div>
            
            <div style={{ width: '1px', height: '50px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
            
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1, fontWeight: 'bold' }}>
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.7, marginTop: '0.8rem', color: '#fff' }}>Jam</div>
            </div>
            
            <div style={{ width: '1px', height: '50px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
            
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1, fontWeight: 'bold' }}>
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.7, marginTop: '0.8rem', color: '#fff' }}>Menit</div>
            </div>
            
            <div style={{ width: '1px', height: '50px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
            
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1, fontWeight: 'bold' }}>
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.7, marginTop: '0.8rem', color: '#fff' }}>Detik</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventDetails;
