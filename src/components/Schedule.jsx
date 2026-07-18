import React, { useState, useEffect, useRef } from 'react';
import flower6 from '../assets/image/red flower 6.png';

const scheduleData = [
  { time: '08:00', event: 'Penyambutan Keluarga' },
  { time: '09:00', event: 'Akad Nikah' },
  { time: '11:00', event: 'Resepsi & Ramah Tamah' },
  { time: '12:30', event: 'Foto Bersama' },
  { time: '14:00', event: 'Penutup & Doa' }
];

const Schedule = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [flowerTop, setFlowerTop] = useState(0);
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  // Handle scroll to determine active index
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const center = windowHeight / 2;
      const start = rect.top;
      const height = rect.height;
      
      // Calculate progress based on how much the timeline has crossed the center of the screen
      let progress = (center - start) / height;
      
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;
      
      // Snap to nearest dot
      const index = Math.round(progress * (scheduleData.length - 1));
      setActiveIndex(index);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Small timeout to ensure layout is done before initial calculation
    setTimeout(handleScroll, 100); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update flower pixel position whenever activeIndex changes
  useEffect(() => {
    if (itemRefs.current[activeIndex]) {
      const el = itemRefs.current[activeIndex];
      const topPos = el.offsetTop + el.offsetHeight / 2;
      setFlowerTop(topPos);
    }
  }, [activeIndex]);

  return (
    <div className="section-padding">
      <div className="glass-panel" style={{ padding: '3rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 6vw, 2rem)', marginBottom: '3rem' }}>Rundown Acara</h2>
        
        <div ref={timelineRef} style={{ position: 'relative', maxWidth: '350px', margin: '0 auto' }}>
          {/* Vertical Line */}
          <div style={{ 
            position: 'absolute', 
            left: '50%', 
            top: '20px', 
            bottom: '20px', 
            width: '2px', 
            background: 'var(--primary-dark)', 
            transform: 'translateX(-50%)',
            opacity: 0.5,
            zIndex: 0
          }} />
          
          {/* Schedule Items */}
          {scheduleData.map((item, index) => (
            <div 
              key={index} 
              ref={(el) => (itemRefs.current[index] = el)}
              className="animate-fade-in-up" 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: index === scheduleData.length - 1 ? 0 : '2.5rem', 
                position: 'relative',
                animationDelay: `${0.2 + index * 0.15}s`,
                zIndex: 1
              }}
            >
              {/* Timeline Dot */}
              <div style={{ 
                position: 'absolute', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                width: '14px', 
                height: '14px', 
                borderRadius: '50%', 
                background: 'var(--primary-color)', 
                boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)'
              }} />
              
              {/* Time (Left side) */}
              <div style={{ 
                width: '50%', 
                paddingRight: '2.5rem', 
                textAlign: 'right', 
                fontWeight: 'bold', 
                color: 'var(--primary-color)',
                fontSize: '2rem',
                fontFamily: 'var(--font-heading)',
                lineHeight: '1.1'
              }}>
                {item.time}
              </div>
              
              {/* Event (Right side) */}
              <div style={{ 
                width: '50%', 
                paddingLeft: '2.5rem', 
                textAlign: 'left', 
                color: 'var(--text-light)',
                fontSize: '1rem'
              }}>
                {item.event}
              </div>
            </div>
          ))}

          {/* The Scrolling Flower (Rendered AFTER items to guarantee it's visually on top) */}
          <img 
            src={flower6} 
            alt="timeline tracker" 
            style={{
              position: 'absolute',
              top: `${flowerTop}px`,
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '55px',
              zIndex: 20,
              transition: 'top 0.3s cubic-bezier(0.25, 1, 0.5, 1)', // Smooth snappy transition
              filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.9))'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
