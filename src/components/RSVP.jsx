import React, { useState } from 'react';
import { PiPaperPlaneRightFill } from 'react-icons/pi';

const RSVP = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="section-padding" style={{ paddingBottom: '6rem' }}>
      <div className="glass-panel" style={{ padding: '3rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 6vw, 2rem)', marginBottom: '1rem' }}>RSVP & Wishes</h2>
        <p style={{ fontSize: '0.9rem', marginBottom: '2rem', opacity: 0.8 }}>
          Please confirm your attendance and leave a message for us.
        </p>

        {submitted ? (
          <div className="animate-fade-in-up" style={{ padding: '2rem 0' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>Thank You!</h3>
            <p>Your message has been received.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Name</label>
              <input 
                type="text" 
                required 
                placeholder="Enter your full name"
                style={{
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid var(--glass-border)',
                  background: 'rgba(0, 0, 0, 0.3)',
                  color: 'var(--text-dark)',
                  fontFamily: 'inherit',
                  outline: 'none',
                  boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Attendance</label>
              <select 
                style={{
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid var(--glass-border)',
                  background: 'rgba(0, 0, 0, 0.3)',
                  color: 'var(--text-dark)',
                  fontFamily: 'inherit',
                  outline: 'none'
                }}
              >
                <option value="yes">Yes, I will attend</option>
                <option value="no">Sorry, I can't come</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Number of Guests</label>
              <input 
                type="number" 
                min="1" max="5" defaultValue="1"
                style={{
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid var(--glass-border)',
                  background: 'rgba(0, 0, 0, 0.3)',
                  color: 'var(--text-dark)',
                  fontFamily: 'inherit',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Wishes</label>
              <textarea 
                rows="4" 
                placeholder="Write your wishes here..."
                style={{
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid var(--glass-border)',
                  background: 'rgba(0, 0, 0, 0.3)',
                  color: 'var(--text-dark)',
                  fontFamily: 'inherit',
                  outline: 'none',
                  resize: 'none'
                }}
              />
            </div>

            <button type="submit" className="glass-button" style={{ marginTop: '1rem', width: '100%' }}>
              <PiPaperPlaneRightFill />
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RSVP;
