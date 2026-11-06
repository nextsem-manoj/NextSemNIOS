import React, { useState, useMemo } from 'react';
import { WINDOWS_COMMANDS_100 } from '../data/windowsCommandsData';
import type { WindowsCommandItem } from '../data/windowsCommandsData';
import { Terminal, Copy, Check, Search, ChevronLeft, ChevronRight, Layers, Filter, Code } from 'lucide-react';

interface WindowsCommandsViewerProps {
  onBackToHome?: () => void;
}

export const WindowsCommandsViewer: React.FC<WindowsCommandsViewerProps> = ({ onBackToHome }) => {
  const [currentBatch, setCurrentBatch] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(WINDOWS_COMMANDS_100.map((c) => c.category));
    return ['ALL', ...Array.from(cats)];
  }, []);

  // Filter commands by search and category
  const filteredCommands = useMemo(() => {
    return WINDOWS_COMMANDS_100.filter((item) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.command.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.function.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.syntax.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'ALL' || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // If searching or filtering by category, show results directly; otherwise slice by current batch (10 per batch)
  const isFilteredMode = searchQuery.trim() !== '' || selectedCategory !== 'ALL';
  const displayedCommands: WindowsCommandItem[] = isFilteredMode
    ? filteredCommands
    : WINDOWS_COMMANDS_100.filter((cmd) => cmd.batch === currentBatch);

  const handleCopyCommand = (cmd: string, id: number) => {
    navigator.clipboard.writeText(cmd);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div style={{ paddingBottom: '3rem' }}>
      
      {/* Header Banner */}
      <div
        className="glass-panel"
        style={{
          padding: '2.5rem 1.5rem',
          borderRadius: 'var(--radius-lg)',
          marginBottom: '2rem',
          background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%)',
          border: '1px solid var(--border-color)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', background: 'var(--bg-card)', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-500)', marginBottom: '1rem', border: '1px solid var(--border-color)' }}>
            <Terminal size={16} />
            <span>Windows CLI Reference & Explorer</span>
          </div>

          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
            100 Essential Windows Commands
          </h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '680px', margin: '0 auto 1.5rem', fontSize: '1rem', lineHeight: 1.6 }}>
            Master Windows Command Prompt (CMD) & PowerShell with detailed functions, syntax guides, and live realistic terminal output logs. Organized 10 commands at a time for fast learning!
          </p>

          {onBackToHome && (
            <button className="btn btn-outline" onClick={onBackToHome} style={{ gap: '6px' }}>
              <ChevronLeft size={16} />
              <span>Back to NCERT Solutions</span>
            </button>
          )}
        </div>
      </div>

      {/* Controls Bar: Search & Category Filter */}
      <div
        className="glass-panel"
        style={{
          padding: '1.25rem',
          borderRadius: 'var(--radius-md)',
          marginBottom: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Search Input */}
        <div style={{ flex: '1 1 280px', position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search command, keyword, or function (e.g. ipconfig, ping, format)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 14px 10px 42px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-primary)',
              color: 'var(--text-primary)',
              fontSize: '0.9rem',
              outline: 'none'
            }}
          />
        </div>

        {/* Category Dropdown Filter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Filter size={16} style={{ color: 'var(--primary-500)' }} />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              padding: '10px 14px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-card)',
              color: 'var(--text-primary)',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'ALL' ? 'All Categories (100)' : cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Batch Navigation Tabs (10 Commands per batch) */}
      {!isFilteredMode && (
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Layers size={18} style={{ color: 'var(--primary-500)' }} />
              Select Batch (10 Commands at a time)
            </h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Showing Commands #{ (currentBatch - 1) * 10 + 1 } – #{ currentBatch * 10 } of 100
            </span>
          </div>

          {/* Batch Selector Pills */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '8px' }}>
            {Array.from({ length: 10 }, (_, i) => i + 1).map((bNum) => {
              const isActive = currentBatch === bNum;
              const startCmd = (bNum - 1) * 10 + 1;
              const endCmd = bNum * 10;
              return (
                <button
                  key={bNum}
                  onClick={() => setCurrentBatch(bNum)}
                  style={{
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-md)',
                    border: isActive ? '2px solid var(--primary-500)' : '1px solid var(--border-color)',
                    background: isActive ? 'var(--primary-500)' : 'var(--bg-card)',
                    color: isActive ? '#ffffff' : 'var(--text-primary)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: isActive ? '0 4px 14px rgba(79, 70, 229, 0.35)' : 'none'
                  }}
                >
                  <span>Batch {bNum}</span>
                  <span style={{ fontSize: '0.75rem', opacity: 0.85, fontWeight: 500 }}>
                    #{startCmd}–#{endCmd}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Filter Mode Notice */}
      {isFilteredMode && (
        <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-hover)', padding: '10px 16px', borderRadius: 'var(--radius-md)' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>
            Found {filteredCommands.length} command(s) matching filter parameters.
          </span>
          <button
            className="btn btn-outline"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('ALL');
            }}
            style={{ padding: '4px 10px', fontSize: '0.8rem' }}
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Commands List Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {displayedCommands.length > 0 ? (
          displayedCommands.map((item) => (
            <div
              key={item.id}
              className="glass-panel"
              style={{
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                border: '1px solid var(--border-color)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                position: 'relative'
              }}
            >
              {/* Top Meta Line */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    style={{
                      background: 'var(--primary-500)',
                      color: '#ffffff',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  >
                    #{item.id}
                  </span>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 800, fontFamily: 'monospace', color: 'var(--text-primary)' }}>
                    {item.command}
                  </h2>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="badge badge-nep">
                    {item.category}
                  </span>
                  <span style={{ fontSize: '0.75rem', padding: '4px 8px', background: 'var(--bg-hover)', borderRadius: '4px', color: 'var(--text-muted)' }}>
                    Batch {item.batch}
                  </span>
                  <button
                    className="btn btn-outline"
                    onClick={() => handleCopyCommand(item.command, item.id)}
                    style={{ padding: '6px 12px', fontSize: '0.8rem', gap: '6px' }}
                    title="Copy command to clipboard"
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check size={14} style={{ color: '#10b981' }} />
                        <span style={{ color: '#10b981', fontWeight: 700 }}>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy Command</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Function & Description */}
              <div style={{ marginBottom: '1.2rem' }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: 700 }}>
                  Function & Purpose
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                  {item.function}
                </p>
              </div>

              {/* Command Syntax Box */}
              <div style={{ marginBottom: '1.2rem' }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: 700 }}>
                  Syntax & Flags
                </h4>
                <div style={{ background: 'var(--bg-card)', padding: '10px 14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', fontFamily: 'monospace', fontSize: '0.88rem', color: 'var(--primary-500)', overflowX: 'auto' }}>
                  {item.syntax}
                </div>
              </div>

              {/* Simulated Terminal Output Box */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Code size={14} />
                    Sample Terminal Output
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Windows Command Prompt</span>
                </div>

                <div
                  style={{
                    background: '#0d1117',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid #30363d',
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  {/* Terminal Header Window Controls */}
                  <div style={{ background: '#161b22', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid #30363d' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
                    <span style={{ marginLeft: '10px', fontSize: '0.75rem', color: '#8b949e', fontFamily: 'monospace' }}>
                      cmd.exe - {item.command}
                    </span>
                  </div>

                  {/* Terminal Code Body */}
                  <pre
                    style={{
                      margin: 0,
                      padding: '1rem 1.25rem',
                      color: '#58a6ff',
                      fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace',
                      fontSize: '0.85rem',
                      lineHeight: 1.5,
                      overflowX: 'auto',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word'
                    }}
                  >
                    {item.output}
                  </pre>
                </div>
              </div>

            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem 1rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)' }}>
            <Terminal size={48} style={{ margin: '0 auto 1rem', color: 'var(--text-muted)', opacity: 0.5 }} />
            <h3>No Windows Commands Found</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Try searching with different terms like "ping", "netstat", or "copy".
            </p>
          </div>
        )}
      </div>

      {/* Pagination Footer Controls (Prev Batch / Next Batch) */}
      {!isFilteredMode && (
        <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <button
            className="btn btn-outline"
            onClick={() => setCurrentBatch((prev) => Math.max(1, prev - 1))}
            disabled={currentBatch === 1}
            style={{ opacity: currentBatch === 1 ? 0.5 : 1, cursor: currentBatch === 1 ? 'not-allowed' : 'pointer' }}
          >
            <ChevronLeft size={18} />
            <span>Previous 10 Commands (Batch {currentBatch - 1 || 1})</span>
          </button>

          <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary-500)' }}>
            Batch {currentBatch} of 10
          </div>

          <button
            className="btn btn-primary"
            onClick={() => setCurrentBatch((prev) => Math.min(10, prev + 1))}
            disabled={currentBatch === 10}
            style={{ opacity: currentBatch === 10 ? 0.5 : 1, cursor: currentBatch === 10 ? 'not-allowed' : 'pointer' }}
          >
            <span>Next 10 Commands (Batch {currentBatch + 1 || 10})</span>
            <ChevronRight size={18} />
          </button>
        </div>
      )}

    </div>
  );
};
