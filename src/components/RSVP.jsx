import React, { useState, useEffect } from 'react';
import { PiPaperPlaneRightFill, PiCheckCircleFill, PiXCircleFill } from 'react-icons/pi';
import { supabase } from '../supabaseClient';

const RSVP = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', attendance: 'yes', wishes: '' });
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) {
      console.error('Error fetching comments:', error);
    } else {
      setComments(data);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.wishes) return;
    
    setIsLoading(true);
    
    const { error } = await supabase
      .from('comments')
      .insert([
        { 
          name: formData.name, 
          attendance: formData.attendance, 
          message: formData.wishes 
        }
      ]);

    setIsLoading(false);

    if (error) {
      console.error('Error inserting comment:', error);
      alert('Gagal mengirim pesan. Error: ' + error.message);
    } else {
      setSubmitted(true);
      setFormData({ name: '', attendance: 'yes', wishes: '' });
      fetchComments(); // Refresh the list directly from DB
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { 
      day: 'numeric', month: 'short', year: 'numeric', 
      hour: '2-digit', minute: '2-digit' 
    });
  };

  return (
    <div className="section-padding" style={{ paddingBottom: '6rem' }}>
      <div className="glass-panel" style={{ padding: '3rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 6vw, 2rem)', marginBottom: '1rem' }}>Buku Tamu & RSVP</h2>
        <p style={{ fontSize: '0.9rem', marginBottom: '2rem', opacity: 0.8 }}>
          Kehadiran Anda akan menjadi doa terbaik bagi kami. Mohon konfirmasi kehadiran Anda melalui form berikut.
        </p>

        {submitted ? (
          <div className="animate-fade-in-up" style={{ padding: '2rem 0', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Terima Kasih!</h3>
            <p style={{ opacity: 0.9 }}>Pesan Anda telah berhasil dikirim.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left', marginBottom: '3rem' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Nama Lengkap</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
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
              <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Konfirmasi Kehadiran</label>
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
                <option value="yes">Ya, Saya akan hadir</option>
                <option value="no">Maaf, Saya tidak bisa hadir</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Doa & Ucapan</label>
              <textarea 
                name="wishes"
                value={formData.wishes}
                onChange={handleChange}
                required
                rows="4" 
                placeholder="Tuliskan doa & ucapan Anda di sini..."
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

            <button type="submit" disabled={isLoading} className="glass-button" style={{ marginTop: '1rem', width: '100%', opacity: isLoading ? 0.7 : 1 }}>
              <PiPaperPlaneRightFill />
              {isLoading ? 'Mengirim...' : 'Kirim Pesan'}
            </button>
          </form>
        )}

        {/* Comment Section */}
        <div style={{ textAlign: 'left' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
            Ucapan & Doa ({comments.length})
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
                  <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>{formatDate(comment.created_at)}</span>
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
            {comments.length === 0 && (
              <p style={{ textAlign: 'center', opacity: 0.6, fontSize: '0.9rem', fontStyle: 'italic', padding: '1rem' }}>
                Belum ada pesan. Jadilah yang pertama memberikan ucapan!
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default RSVP;
