import React, { useState } from 'react';
import { PiPaperPlaneRightFill, PiCheckCircleFill, PiXCircleFill } from 'react-icons/pi';

const RSVP = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', attendance: 'yes', guests: '1', wishes: '' });
  
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'Sarah & Family',
      attendance: 'yes',
      message: 'Happy wedding! Wishing you a lifetime of love and happiness.',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      name: 'Michael',
      attendance: 'no',
      message: 'So sorry I couldn\'t make it. Wishing you both the best!',
      timestamp: '5 hours ago'
    }
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.wishes) return;
    
    const newComment = {
      id: Date.now(),
      name: formData.name,
      attendance: formData.attendance,
      message: formData.wishes,
      timestamp: 'Just now'
    };
    
    setComments([newComment, ...comments]);
    setSubmitted(true);
    setFormData({ name: '', attendance: 'yes', guests: '1', wishes: '' });
    
    // Reset submission success message after 5 seconds so they can submit again if they want
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="section-padding" style={{ paddingBottom: '6rem' }}>
      <div className="glass-panel" style={{ padding: '3rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 6vw, 2rem)', marginBottom: '1rem' }}>RSVP & Wishes</h2>
        <p style={{ fontSize: '0.9rem', marginBottom: '2rem', opacity: 0.8 }}>
          Please confirm your attendance and leave a message for us.
        </p>

        {submitted ? (
          <div className="animate-fade-in-up" style={{ padding: '2rem 0', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Thank You!</h3>
            <p style={{ opacity: 0.9 }}>Your message has been posted.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left', marginBottom: '3rem' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                name="attendance"
                value={formData.attendance}
                onChange={handleChange}
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

            {formData.attendance === 'yes' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', animation: 'fade-in-up 0.3s ease-out' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Number of Guests</label>
                <input 
                  type="number" 
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  min="1" max="5"
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
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Wishes</label>
              <textarea 
                name="wishes"
                value={formData.wishes}
                onChange={handleChange}
                required
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

        {/* Comment Section */}
        <div style={{ textAlign: 'left' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
            Wishes ({comments.length})
          </h3>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1rem', 
            maxHeight: '400px', 
            overflowY: 'auto', 
            paddingRight: '0.5rem' 
          }}>
            {comments.map(comment => (
              <div key={comment.id} className="animate-fade-in-up" style={{ 
                background: 'rgba(0,0,0,0.3)', 
                padding: '1.2rem', 
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.05)',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                  <strong style={{ fontSize: '1rem', color: 'var(--primary-color)' }}>{comment.name}</strong>
                  <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>{comment.timestamp}</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.3rem',
                  fontSize: '0.75rem', 
                  opacity: 0.8, 
                  marginBottom: '0.8rem',
                  background: 'rgba(255,255,255,0.05)',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  width: 'fit-content'
                }}>
                  {comment.attendance === 'yes' ? (
                    <><PiCheckCircleFill color="#4caf50" size={14} /> Hadir</>
                  ) : (
                    <><PiXCircleFill color="#f44336" size={14} /> Tidak Hadir</>
                  )}
                </div>
                <p style={{ fontSize: '0.9rem', margin: 0, lineHeight: 1.5, opacity: 0.9 }}>"{comment.message}"</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default RSVP;
