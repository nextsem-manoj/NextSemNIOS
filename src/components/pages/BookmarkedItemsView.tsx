import React from 'react';
import { ArrowLeft, Bookmark, BookOpen, Trash2, ChevronRight, FileText } from 'lucide-react';
import type { Subject, Chapter } from '../../data/ncertData';
import { CLASSES_DATA } from '../../data/ncertData';

interface BookmarkedItemsViewProps {
  bookmarkedSubjectIds: string[];
  bookmarkedChapterIds: string[];
  onToggleBookmarkSubject: (subj: Subject) => void;
  onToggleBookmarkChapter: (ch: Chapter) => void;
  onSelectSubject: (subj: Subject) => void;
  onSelectChapter: (subj: Subject, ch: Chapter) => void;
  onBack: () => void;
}

export const BookmarkedItemsView: React.FC<BookmarkedItemsViewProps> = ({
  bookmarkedSubjectIds,
  bookmarkedChapterIds,
  onToggleBookmarkSubject,
  onToggleBookmarkChapter,
  onSelectSubject,
  onSelectChapter,
  onBack
}) => {
  // Retrieve bookmarked subject objects
  const allSubjects: Subject[] = [];
  CLASSES_DATA.forEach(cls => {
    cls.subjects.forEach(subj => {
      allSubjects.push(subj);
    });
  });

  const bookmarkedSubjects = allSubjects.filter(s => bookmarkedSubjectIds.includes(s.id));

  // Retrieve bookmarked chapter objects along with parent subject
  const bookmarkedChaptersList: { subject: Subject; chapter: Chapter }[] = [];
  CLASSES_DATA.forEach(cls => {
    cls.subjects.forEach(subj => {
      subj.chapters.forEach(ch => {
        if (bookmarkedChapterIds.includes(ch.id)) {
          bookmarkedChaptersList.push({ subject: subj, chapter: ch });
        }
      });
    });
  });

  const totalBookmarks = bookmarkedSubjects.length + bookmarkedChaptersList.length;

  return (
    <div style={{ maxWidth: '680px', margin: '0 auto', padding: '1rem 0' }}>
      
      {/* Top Header Bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
        <button
          onClick={onBack}
          className="btn btn-outline"
          style={{ padding: '8px 16px', borderRadius: '9999px', fontSize: '0.85rem' }}
        >
          <ArrowLeft size={16} /> Back
        </button>
        <div>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Bookmark size={22} style={{ color: '#ec4899' }} /> Bookmarked Items ({totalBookmarks})
          </h2>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
            Quick access to your saved subjects & textbook chapters
          </p>
        </div>
      </div>

      {totalBookmarks === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '3rem 1rem',
          background: 'var(--bg-card)',
          borderRadius: '16px',
          border: '1px solid var(--border-color)',
          color: 'var(--text-muted)',
          margin: '2rem 0'
        }}>
          <Bookmark size={48} style={{ margin: '0 auto 1rem', color: '#ec4899', opacity: 0.4 }} />
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            No Bookmarks Added Yet
          </h3>
          <p style={{ fontSize: '0.85rem', maxWidth: '360px', margin: '0 auto 1.25rem', lineHeight: 1.5 }}>
            Bookmark your favorite subjects and textbook chapters by tapping the 🔖 icon on subject cards or chapter list items.
          </p>
          <button onClick={onBack} className="btn btn-primary" style={{ padding: '10px 20px', borderRadius: '8px' }}>
            Browse Class 12 Subjects
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Section 1: Bookmarked Subjects */}
          {bookmarkedSubjects.length > 0 && (
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
                <BookOpen size={18} style={{ color: 'var(--primary-500)' }} /> Bookmarked Subjects ({bookmarkedSubjects.length})
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px' }}>
                {bookmarkedSubjects.map((subject) => (
                  <div
                    key={subject.id}
                    className="glass-card"
                    style={{
                      padding: '16px',
                      borderRadius: '14px',
                      border: '1px solid var(--border-color)',
                      background: 'var(--bg-card)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
                    }}
                  >
                    {subject.coverImageUrl ? (
                      <img
                        src={subject.coverImageUrl}
                        alt={subject.name}
                        style={{ width: '44px', height: '56px', borderRadius: '6px', objectFit: 'cover' }}
                      />
                    ) : (
                      <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: subject.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <BookOpen size={20} />
                      </div>
                    )}

                    <div style={{ flex: 1, cursor: 'pointer' }} onClick={() => onSelectSubject(subject)}>
                      <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)' }}>
                        {subject.name}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        {subject.totalChapters} Chapters
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <button
                        onClick={() => onToggleBookmarkSubject(subject)}
                        title="Remove Bookmark"
                        style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '6px' }}
                      >
                        <Trash2 size={16} />
                      </button>
                      <button
                        onClick={() => onSelectSubject(subject)}
                        style={{ background: 'transparent', border: 'none', color: 'var(--primary-500)', cursor: 'pointer', padding: '6px' }}
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 2: Bookmarked Chapters */}
          {bookmarkedChaptersList.length > 0 && (
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
                <FileText size={18} style={{ color: '#10b981' }} /> Bookmarked Chapters ({bookmarkedChaptersList.length})
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {bookmarkedChaptersList.map(({ subject, chapter }) => (
                  <div
                    key={chapter.id}
                    className="glass-card"
                    style={{
                      padding: '14px 16px',
                      borderRadius: '12px',
                      border: '1px solid var(--border-color)',
                      background: 'var(--bg-card)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px'
                    }}
                  >
                    <div
                      style={{ flex: 1, cursor: 'pointer' }}
                      onClick={() => onSelectChapter(subject, chapter)}
                    >
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-500)', textTransform: 'uppercase' }}>
                        {subject.name} • Unit {chapter.chapterNumber}
                      </div>
                      <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-primary)', marginTop: '2px' }}>
                        {chapter.title}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <button
                        onClick={() => onToggleBookmarkChapter(chapter)}
                        title="Remove Bookmark"
                        style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '6px' }}
                      >
                        <Trash2 size={16} />
                      </button>
                      <button
                        onClick={() => onSelectChapter(subject, chapter)}
                        className="btn btn-outline"
                        style={{ padding: '6px 12px', fontSize: '0.78rem', borderRadius: '6px' }}
                      >
                        Open Read
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
};
