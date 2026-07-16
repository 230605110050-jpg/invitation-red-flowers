import React from 'react';
import { PiMapPinFill, PiCalendarBlankFill, PiClockFill, PiHeartFill } from 'react-icons/pi';

const EventDetails = () => {
  return (
    <div className="section-padding">
      <div className="glass-panel" style={{ padding: '3rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Wedding Events</h2>

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

        {/* Ceremony */}
        <div style={{ marginBottom: '3rem' }} className="animate-fade-in-up">
          <h3 className="script-text" style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>
            Holy Matrimony
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <PiCalendarBlankFill color="var(--primary-color)" />
              <span style={{ fontWeight: 500 }}>Saturday, November 28, 2026</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <PiClockFill color="var(--primary-color)" />
              <span style={{ fontWeight: 500 }}>09:00 AM - 11:00 AM</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginTop: '0.5rem' }}>
              <PiMapPinFill color="var(--primary-color)" style={{ marginTop: '0.2rem' }} />
              <div style={{ textAlign: 'left' }}>
                <strong style={{ display: 'block', marginBottom: '0.2rem' }}>Grand Garden Cathedral</strong>
                <span style={{ fontSize: '0.85rem', opacity: 0.8 }}>123 Botanical Avenue, Greenwood City</span>
              </div>
            </div>
          </div>
          <button className="glass-button" style={{ marginTop: '1.5rem', fontSize: '0.9rem', padding: '8px 20px' }}>
            View Map
          </button>
        </div>

        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, var(--glass-border), transparent)', margin: '0 2rem 3rem' }} />

        {/* Reception */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="script-text" style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>
            Wedding Reception
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <PiCalendarBlankFill color="var(--primary-color)" />
              <span style={{ fontWeight: 500 }}>Saturday, November 28, 2026</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <PiClockFill color="var(--primary-color)" />
              <span style={{ fontWeight: 500 }}>06:30 PM - 10:00 PM</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginTop: '0.5rem' }}>
              <PiMapPinFill color="var(--primary-color)" style={{ marginTop: '0.2rem' }} />
              <div style={{ textAlign: 'left' }}>
                <strong style={{ display: 'block', marginBottom: '0.2rem' }}>Glasshouse Pavilion</strong>
                <span style={{ fontSize: '0.85rem', opacity: 0.8 }}>456 Crystal Road, Greenwood City</span>
              </div>
            </div>
          </div>
          <button className="glass-button" style={{ marginTop: '1.5rem', fontSize: '0.9rem', padding: '8px 20px' }}>
            View Map
          </button>
        </div>

      </div>
    </div>
  );
};

export default EventDetails;
