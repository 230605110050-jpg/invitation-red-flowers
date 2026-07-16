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
        <h2 style={{ fontSize: 'clamp(1.5rem, 6vw, 2rem)', marginBottom: '1rem' }}>Konfirmasi Kehadiran & Ucapan</h2>
        <p style={{ fontSize: '0.9rem', marginBottom: '2rem', opacity: 0.8 }}>
          Silakan konfirmasi kehadiran Anda dan tinggalkan pesan untuk kami.
        </p>

        {submitted ? (
          <div className="animate-fade-in-up" style={{ padding: '2rem 0' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>Terima Kasih!</h3>
            <p>Pesan Anda telah kami terima.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Nama</label>
              <input 
                type="text" 
                required 
                placeholder="Masukkan nama lengkap Anda"
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
              <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Kehadiran</label>
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
                <option value="yes">Ya, saya akan hadir</option>
                <option value="no">Maaf, saya tidak bisa hadir</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Jumlah Tamu</label>
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
              <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Ucapan</label>
              <textarea 
                rows="4" 
                placeholder="Berikan ucapan untuk mempelai..."
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

            <button type="submit" className="glass-button" style={{ marginTop: '1rem', width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
              <PiPaperPlaneRightFill />
              Kirim Konfirmasi
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RSVP;
