'use client';

export default function Pembayaran() {
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
          <h1 style={styles.headerTitle}>Status Bayar</h1>
        </div>
        
        <div style={styles.content}>
          <div style={styles.successIcon}>✓</div>
          
          <h2 style={styles.successTitle}>Pembayaran Berhasil</h2>
          
          <div style={styles.amount}>Rp 95.000</div>
          
          <div style={styles.detailsContainer}>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>ID Pesanan</span>
              <span style={styles.detailValue}>D123KPRM</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Nama</span>
              <span style={styles.detailValue}>Adit</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Metode Pembayaran</span>
              <span style={styles.detailValue}>QRIS</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Tanggal Pemesanan</span>
              <span style={styles.detailValue}>15 Oktober 2025</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Waktu Pemesanan</span>
              <span style={styles.detailValue}>12.01 PM</span>
            </div>
          </div>
          
          <div style={styles.totalContainer}>
            <span style={styles.totalLabel}>Total</span>
            <span style={styles.totalValue}>Rp 95.000</span>
          </div>
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
    padding: '32px 24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto',
  },
  successIcon: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#4caf50',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '24px',
  },
  successTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '16px',
  },
  amount: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '32px',
  },
  detailsContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '20px',
    marginBottom: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: '14px',
    color: '#666',
  },
  detailValue: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#1a1a1a',
  },
  totalContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: 'white',
    borderRadius: '16px',
  },
  totalLabel: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1a1a1a',
  },
  totalValue: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#2e7d32',
  },
};

