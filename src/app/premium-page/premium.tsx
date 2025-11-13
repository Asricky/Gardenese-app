'use client';

import { type CSSProperties, type SVGProps, useMemo, useState } from 'react';

type PlanId = 'yearly' | 'semiAnnual';

const plans: Array<{
  id: PlanId;
  title: string;
  price: string;
  promo: string;
  description: string;
}> = [
  {
    id: 'yearly',
    title: 'Premium Tahunan',
    price: 'Rp95.000 / tahun',
    promo: 'Coba gratis 30 hari, otomatis perpanjang tahunan',
    description: 'Akses penuh seluruh fitur premium dengan harga terbaik sepanjang tahun.',
  },
  {
    id: 'semiAnnual',
    title: 'Premium 6 Bulan',
    price: 'Rp50.000 / 6 bulan',
    promo: 'Coba gratis 7 hari, otomatis perpanjang per-semester',
    description: 'Pilihan fleksibel untuk menikmati fitur premium setengah tahun.',
  },
];

export default function Premium() {
  const [selectedPlan, setSelectedPlan] = useState<PlanId>('yearly');

  const selectedPlanData = useMemo(
    () => plans.find((plan) => plan.id === selectedPlan),
    [selectedPlan],
  );

  return (
    <div className="app">
      <div style={styles.screen}>
        <header style={styles.topBar}>
          <button type="button" style={styles.backButton} aria-label="Kembali">
            <ArrowLeftIcon style={styles.backIcon} />
          </button>
          <div style={styles.topText}>
            <span style={styles.topTitle}>Beli Premium</span>
            <span style={styles.topSubtitle}>Aktifkan paket terbaik Gardenese</span>
          </div>
          <div style={{ width: '40px' }} />
        </header>

        <main style={styles.content}>
          <section style={styles.hero}>
            <div style={styles.heroIllustration}>
              <div style={styles.ribbon} />
              <div style={styles.box} />
              <div style={styles.sparkSmall} />
              <div style={styles.sparkLarge} />
            </div>
            <div style={styles.heroCopy}>
              <h1 style={styles.heroTitle}>Nikmati fitur premium Gardenese</h1>
              <p style={styles.heroDescription}>
                Dapatkan rekomendasi ahli, konsultasi prioritas, dan panduan berkebun eksklusif setiap
                minggu.
              </p>
            </div>
          </section>

          <section style={styles.planSection}>
            <h2 style={styles.sectionTitle}>Pilih paket berlangganan</h2>
            <div style={styles.planList}>
              {plans.map((plan) => {
                const isActive = plan.id === selectedPlan;
                return (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setSelectedPlan(plan.id)}
                    style={{ ...styles.planCard, ...(isActive ? styles.planCardActive : {}) }}
                  >
                    <div style={styles.planHeader}>
                      <span style={styles.planTitle}>{plan.title}</span>
                      {isActive && (
                        <span style={styles.planBadge}>
                          <StarIcon style={styles.planBadgeIcon} /> Pilihan terbaik
                        </span>
                      )}
                    </div>
                    <p style={styles.planPrice}>{plan.price}</p>
                    <p style={styles.planPromo}>{plan.promo}</p>
                    <p style={styles.planDescription}>{plan.description}</p>
                  </button>
                );
              })}
            </div>
          </section>

          {selectedPlanData && (
            <section style={styles.summary}>
              <div style={styles.summaryRow}>
                <span>Paket dipilih</span>
                <strong>{selectedPlanData.title}</strong>
              </div>
              <div style={styles.summaryRow}>
                <span>Total pembayaran</span>
                <strong>{selectedPlanData.price}</strong>
              </div>
            </section>
          )}

          <button
            type="button"
            style={styles.primaryButton}
            onClick={() => {
              window.location.href = '/premium-page/qris';
            }}
          >
            Lanjutkan ke pembayaran
          </button>

          <p style={styles.terms}>
            Dengan melanjutkan, Anda menyetujui Ketentuan Layanan Gardenese. Langganan diperpanjang secara
            otomatis kecuali dibatalkan minimal 24 jam sebelum periode berakhir.
          </p>
        </main>
      </div>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  screen: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    background: 'linear-gradient(180deg, #f6f8f2 0%, #edf2e4 45%, #e3edd9 100%)',
  },
  topBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '18px 20px',
    backgroundColor: '#fdfdfb',
    borderBottom: '1px solid rgba(39, 70, 50, 0.1)',
  },
  backButton: {
    width: '40px',
    height: '40px',
    borderRadius: '14px',
    border: '1px solid rgba(39, 70, 50, 0.12)',
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  backIcon: {
    width: '18px',
    height: '18px',
    color: '#295f3a',
  },
  topText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
  },
  topTitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#1f2e1a',
  },
  topSubtitle: {
    fontSize: '12px',
    color: '#5f6c56',
  },
  content: {
    flex: 1,
    padding: '24px 22px',
    display: 'flex',
    flexDirection: 'column',
    gap: '28px',
    overflowY: 'auto',
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
    textAlign: 'center',
  },
  heroIllustration: {
    position: 'relative',
    width: '220px',
    height: '180px',
  },
  box: {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '160px',
    height: '110px',
    borderRadius: '24px',
    background: 'linear-gradient(135deg, #2f8f46 0%, #55b96a 80%)',
    boxShadow: '0 22px 34px rgba(47, 143, 70, 0.28)',
  },
  ribbon: {
    position: 'absolute',
    top: '14px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '120px',
    height: '120px',
    borderRadius: '60px',
    border: '12px solid rgba(255,255,255,0.85)',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    filter: 'drop-shadow(0 12px 24px rgba(47, 143, 70, 0.15))',
  },
  sparkSmall: {
    position: 'absolute',
    top: '12px',
    left: '28px',
    width: '14px',
    height: '14px',
    borderRadius: '999px',
    background: '#ffd966',
    boxShadow: '0 0 12px rgba(255, 217, 102, 0.6)',
  },
  sparkLarge: {
    position: 'absolute',
    top: '0',
    right: '18px',
    width: '18px',
    height: '18px',
    borderRadius: '999px',
    background: '#ffb347',
    boxShadow: '0 0 18px rgba(255, 179, 71, 0.6)',
  },
  heroCopy: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  heroTitle: {
    fontSize: '24px',
    fontWeight: 700,
    color: '#1f2e1a',
  },
  heroDescription: {
    fontSize: '14px',
    color: '#5f6c56',
    lineHeight: 1.6,
  },
  planSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  sectionTitle: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#1f2e1a',
  },
  planList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  planCard: {
    borderRadius: '20px',
    border: '1px solid rgba(47, 143, 70, 0.15)',
    backgroundColor: '#ffffff',
    padding: '20px 18px',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
  },
  planCardActive: {
    borderColor: '#2f8f46',
    background: 'linear-gradient(135deg, rgba(47, 143, 70, 0.12) 0%, rgba(85, 185, 106, 0.05) 100%)',
    boxShadow: '0 12px 28px rgba(47, 143, 70, 0.18)',
  },
  planHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  planTitle: {
    fontSize: '17px',
    fontWeight: 600,
    color: '#1f2e1a',
  },
  planBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 10px',
    borderRadius: '999px',
    backgroundColor: '#e5f4e9',
    color: '#2f8f46',
    fontSize: '12px',
    fontWeight: 600,
  },
  planBadgeIcon: {
    width: '14px',
    height: '14px',
  },
  planPrice: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#2f8f46',
  },
  planPromo: {
    fontSize: '13px',
    color: '#4f5c45',
  },
  planDescription: {
    fontSize: '12px',
    color: '#6b7a63',
    lineHeight: 1.5,
  },
  summary: {
    borderRadius: '18px',
    backgroundColor: '#f7f9f4',
    padding: '18px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    color: '#4f5c45',
  },
  primaryButton: {
    width: '100%',
    padding: '16px',
    borderRadius: '18px',
    border: 'none',
    background: 'linear-gradient(135deg, #2f8f46 0%, #55b96a 100%)',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: '0 16px 32px rgba(47, 143, 70, 0.2)',
  },
  terms: {
    fontSize: '11px',
    color: '#6b7a63',
    textAlign: 'center',
    lineHeight: 1.6,
  },
};

function ArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M15 5 9 12l6 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 4.5 14.35 9l4.9.7-3.55 3.5.84 4.85L12 15.9l-4.54 2.15.84-4.85L4.75 9.7l4.9-.7Z" />
    </svg>
  );
}

