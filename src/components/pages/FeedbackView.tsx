import React, { useState } from 'react';
import { ArrowLeft, MessageSquare, Send, CheckCircle2, Star } from 'lucide-react';

interface FeedbackViewProps {
  onBack: () => void;
}

export const FeedbackView: React.FC<FeedbackViewProps> = ({ onBack }) => {
  const [category, setCategory] = useState<'SUGGESTION' | 'BUG' | 'CHAPTER_REQUEST'>('SUGGESTION');
  const [rating, setRating] = useState<number>(5);
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const feedbackItem = {
      category,
      rating,
      name,
      message,
      timestamp: new Date().toISOString()
    };

    const existing = JSON.parse(localStorage.getItem('nextsem_user_feedback') || '[]');
    localStorage.setItem('nextsem_user_feedback', JSON.stringify([...existing, feedbackItem]));

    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: '640px', margin: '0 auto', padding: '1rem 0' }}>
      
      {/* Header with Back Pill */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
        <button
          onClick={onBack}
          className="btn btn-outline"
          style={{ padding: '8px 16px', borderRadius: '9999px', fontSize: '0.85rem' }}
        >
          <ArrowLeft size={16} /> Back
        </button>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>
          Feedback & Suggestions
        </h2>
      </div>

      {submitted ? (
        <div className="glass-card" style={{ padding: '32px 24px', borderRadius: '20px', border: '1px solid var(--border-color)', background: 'var(--bg-card)', textAlign: 'center' }}>
          <CheckCircle2 size={48} style={{ color: '#10b981', margin: '0 auto 16px' }} />
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '8px' }}>
            Thank You for Your Feedback!
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.5 }}>
            Your suggestions help the Nextsem team add more free NCERT features and improve your textbook reading experience.
          </p>
          <button
            onClick={onBack}
            className="btn"
            style={{
              background: 'var(--gold-gradient)',
              color: '#071428',
              borderRadius: '10px',
              padding: '10px 24px',
              fontWeight: 800
            }}
          >
            Back to App
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)', background: 'var(--bg-card)' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <MessageSquare size={24} style={{ color: '#d4af37' }} />
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>Help Us Improve Nextsem</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Share your ideas, feature requests, or report issues</div>
            </div>
          </div>

          {/* Category Selector Pills */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>
              Feedback Category
            </label>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => setCategory('SUGGESTION')}
                style={{
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  border: '1px solid var(--border-color)',
                  background: category === 'SUGGESTION' ? 'var(--gold-gradient)' : 'var(--bg-hover)',
                  color: category === 'SUGGESTION' ? '#071428' : 'var(--text-primary)',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                💡 Suggestion
              </button>
              <button
                type="button"
                onClick={() => setCategory('CHAPTER_REQUEST')}
                style={{
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  border: '1px solid var(--border-color)',
                  background: category === 'CHAPTER_REQUEST' ? 'var(--gold-gradient)' : 'var(--bg-hover)',
                  color: category === 'CHAPTER_REQUEST' ? '#071428' : 'var(--text-primary)',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                📖 Request Book/Chapter
              </button>
              <button
                type="button"
                onClick={() => setCategory('BUG')}
                style={{
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  border: '1px solid var(--border-color)',
                  background: category === 'BUG' ? 'var(--gold-gradient)' : 'var(--bg-hover)',
                  color: category === 'BUG' ? '#071428' : 'var(--text-primary)',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                🐛 Report Bug
              </button>
            </div>
          </div>

          {/* Star Rating */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>
              Rate Your Experience
            </label>
            <div style={{ display: 'flex', gap: '6px' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }}
                >
                  <Star
                    size={24}
                    style={{
                      fill: star <= rating ? '#eab308' : 'none',
                      color: star <= rating ? '#eab308' : 'var(--text-muted)'
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Form Fields */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Your Name (Optional)</label>
              <input
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Your Message / Suggestion *</label>
              <textarea
                required
                rows={4}
                placeholder="Type your feedback here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  resize: 'vertical'
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '10px',
              background: 'var(--gold-gradient)',
              color: '#071428',
              fontWeight: 800,
              fontSize: '0.92rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <Send size={18} /> Submit Feedback
          </button>

        </form>
      )}

    </div>
  );
};
