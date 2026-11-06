import React, { useState } from 'react';
import { ArrowLeft, Star, Heart } from 'lucide-react';

interface RateAppViewProps {
  onBack: () => void;
}

export const RateAppView: React.FC<RateAppViewProps> = ({ onBack }) => {
  const [rating, setRating] = useState<number>(5);
  const [review, setReview] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = () => {
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
          Rate StudyGuide by Nextsem
        </h2>
      </div>

      {submitted ? (
        <div className="glass-card" style={{ padding: '32px 24px', borderRadius: '20px', border: '1px solid var(--border-color)', background: 'var(--bg-card)', textAlign: 'center' }}>
          <Heart size={48} style={{ color: '#ef4444', margin: '0 auto 16px', fill: '#ef4444' }} />
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>
            Thank You for the 5-Star Rating! ⭐⭐⭐⭐⭐
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.5 }}>
            Your rating motivates the Nextsem team to build more free educational tools for students across India!
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
        <div className="glass-card" style={{ padding: '28px 24px', borderRadius: '20px', border: '1px solid var(--border-color)', background: 'var(--bg-card)', textAlign: 'center' }}>
          
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '16px',
            background: 'rgba(234, 179, 8, 0.15)',
            border: '1.5px solid #eab308',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px'
          }}>
            <Star size={32} style={{ color: '#eab308', fill: '#eab308' }} />
          </div>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '6px' }}>
            Loving Nextsem NCERT Textbooks?
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
            Tap the stars below to rate your experience
          </p>

          {/* Star Selection */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '24px' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px', transition: 'transform 0.2s ease' }}
              >
                <Star
                  size={36}
                  style={{
                    fill: star <= rating ? '#eab308' : 'none',
                    color: star <= rating ? '#eab308' : 'var(--text-muted)'
                  }}
                />
              </button>
            ))}
          </div>

          {/* Optional Review Text */}
          <textarea
            rows={3}
            placeholder="Write a brief review (optional)..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: '10px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-primary)',
              color: 'var(--text-primary)',
              outline: 'none',
              marginBottom: '20px',
              resize: 'vertical'
            }}
          />

          <button
            onClick={handleSubmit}
            className="btn"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '10px',
              background: 'var(--gold-gradient)',
              color: '#071428',
              fontWeight: 800,
              fontSize: '0.95rem',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Submit Rating
          </button>

        </div>
      )}

    </div>
  );
};
