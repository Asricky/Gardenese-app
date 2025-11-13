'use client';

import { useState } from 'react';

export default function Konsultasi() {
  const [message, setMessage] = useState('');

  return (
    <div className="app">
      <div style={styles.container}>
        <div style={styles.statusBar}>
          <span>9:41</span>
          <div style={styles.statusIcons}>
            <span>📶</span>
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>
        
        <div style={styles.header}>
          <a href="#" style={styles.backButton}>←</a>
          <div style={styles.headerContent}>
            <h1 style={styles.headerTitle}>Konsultan Tanaman</h1>
            <span style={styles.onlineStatus}>• Online</span>
          </div>
        </div>
        
        <div style={styles.content}>
          <div style={styles.chatBubble}>
            Halo, apa ada yang bisa saya bantu?
          </div>
          
          <div style={styles.logoContainer}>
            <div style={styles.logo}>
              <span style={styles.logoText}>Gardenese</span>
              <span style={styles.leaf}>🌿</span>
            </div>
          </div>
        </div>
        
        <div style={styles.inputBar}>
          <button style={styles.iconButton}>😊</button>
          <input
            type="text"
            placeholder="Ketik pesan Anda..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.input}
          />
          <button style={styles.iconButton}>🖼️</button>
          <button style={styles.iconButton}>📷</button>
          <button style={styles.iconButton}>🎤</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    background: 'linear-gradient(135deg, #a8e6cf 0%, #dcedc8 100%)',
    display: 'flex',
    flexDirection: 'column',
  },
  statusBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#1a1a1a',
    background: 'rgba(255,255,255,0.1)',
  },
  statusIcons: {
    display: 'flex',
    gap: '4px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: 'white',
    borderBottom: '1px solid #e0e0e0',
  },
  backButton: {
    fontSize: '24px',
    color: '#2e7d32',
    textDecoration: 'none',
    marginRight: '16px',
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1a1a1a',
    margin: 0,
    marginBottom: '4px',
  },
  onlineStatus: {
    fontSize: '14px',
    color: '#4caf50',
  },
  content: {
    flex: 1,
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '32px',
  },
  chatBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#a8e6cf',
    padding: '16px 20px',
    borderRadius: '20px',
    maxWidth: '75%',
    fontSize: '16px',
    color: '#1a1a1a',
    lineHeight: '1.5',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#1a1a1a',
    fontFamily: 'cursive',
  },
  logoText: {
    color: '#1a1a1a',
  },
  leaf: {
    marginLeft: '4px',
    fontSize: '24px',
  },
  inputBar: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    backgroundColor: 'white',
    borderTop: '1px solid #e0e0e0',
    gap: '8px',
  },
  iconButton: {
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    padding: '4px',
  },
  input: {
    flex: 1,
    border: '1px solid #e0e0e0',
    borderRadius: '20px',
    padding: '10px 16px',
    fontSize: '14px',
    outline: 'none',
  },
};

