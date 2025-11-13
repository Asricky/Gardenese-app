'use client';

import { useState, useEffect } from 'react';

export default function QRIS() {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

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
          <h1 style={styles.headerTitle}>QRIS</h1>
        </div>
        
        <div style={styles.content}>
          <p style={styles.instruction}>
            Pindai kode QRIS dibawah untuk menyelesaikan pembayaran
          </p>
          
          <div style={styles.qrContainer}>
            <div style={styles.qrCode}>
              <div style={styles.qrGrid}>
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      ...styles.qrCell,
                      backgroundColor: Math.random() > 0.5 ? '#1a1a1a' : 'white',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div style={styles.timerContainer}>
            <p style={styles.timerText}>Selesaikan pembayaran dalam</p>
            <div style={styles.timer}>{formatTime(timeLeft)}</div>
          </div>
          
          <button
            style={styles.downloadButton}
            onClick={() => window.location.href = '/premium-page/pembayaran'}
          >
            Unduh QRIS
          </button>
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
  headerTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1a1a1a',
    margin: 0,
  },
  content: {
    flex: 1,
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto',
  },
  instruction: {
    fontSize: '14px',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: '32px',
  },
  qrContainer: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '16px',
    marginBottom: '32px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  qrCode: {
    width: '250px',
    height: '250px',
    border: '2px solid #1a1a1a',
  },
  qrGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(5, 1fr)',
    width: '100%',
    height: '100%',
  },
  qrCell: {
    border: '1px solid #1a1a1a',
  },
  timerContainer: {
    textAlign: 'center',
    marginBottom: '24px',
  },
  timerText: {
    fontSize: '14px',
    color: '#1a1a1a',
    marginBottom: '8px',
  },
  timer: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  downloadButton: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#2e7d32',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
  },
};

