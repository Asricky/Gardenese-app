'use client';

import {
  type ChangeEvent,
  type CSSProperties,
  type FormEvent,
  useMemo,
  useState,
} from 'react';

const timeOptions = [
  { value: 'kurang', label: 'Kurang dari 1 jam seminggu' },
  { value: 'sedang', label: '1-3 jam seminggu' },
  { value: 'banyak', label: 'Lebih dari 3 jam seminggu' },
];

const skillOptions = [
  { value: 'newbie', label: 'Belum, masih newbie' },
  { value: 'lumayan', label: 'Lumayan ngerti' },
  { value: 'expert', label: 'Udah expert banget!' },
];

export default function Personalisasi() {
  const [landSize, setLandSize] = useState(120);
  const [timeCommitment, setTimeCommitment] = useState('kurang');
  const [gardeningSkill, setGardeningSkill] = useState('newbie');

  const landDescription = useMemo(() => {
    if (landSize < 50) return 'Area kecil (0-49 m²)';
    if (landSize < 150) return 'Area sedang (50-149 m²)';
    if (landSize < 300) return 'Area luas (150-299 m²)';
    return 'Area sangat luas (300+ m²)';
  }, [landSize]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleLandChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLandSize(Number(event.target.value));
  };

  const renderOption = (
    option: { value: string; label: string },
    selected: string,
    onSelect: (value: string) => void,
  ) => {
    const isActive = option.value === selected;
    return (
      <label
        key={option.value}
        style={{ ...styles.optionCard, ...(isActive ? styles.optionCardActive : {}) }}
      >
        <input
          type="radio"
          value={option.value}
          checked={isActive}
          onChange={() => onSelect(option.value)}
          style={styles.optionInput}
        />
        <span>{option.label}</span>
      </label>
    );
  };

  return (
    <div className="app">
      <div style={styles.screen}>
        <header style={styles.header}>
          <div style={styles.progressGroup}>
            <span style={styles.progressText}>Langkah 1 dari 3</span>
            <div style={styles.progressBar}>
              <div style={styles.progressFill} />
            </div>
          </div>
          <a href="#" style={styles.skipLink}>
            Lewati
          </a>
        </header>

        <main style={styles.card}>
          <h1 style={styles.title}>Yang mana kamu?</h1>
          <p style={styles.subtitle}>
            Beri tahu kami tentang lahan dan pengalamanmu supaya Gardenese bisa menyiapkan rekomendasi
            terbaik.
          </p>

          <form style={styles.form} onSubmit={handleSubmit}>
            <section style={styles.section}>
              <header style={styles.sectionHeader}>
                <div style={styles.sectionIllustration}>
                  <div style={styles.plotSquare} />
                  <div style={styles.plotShadow} />
                </div>
                <div>
                  <h2 style={styles.sectionTitle}>Seberapa luas lahanmu?</h2>
                  <p style={styles.sectionSubtitle}>Geser untuk menyesuaikan ukuran area berkebun.</p>
                </div>
              </header>

              <div style={styles.sliderBox}>
                <input
                  type="range"
                  min={0}
                  max={500}
                  value={landSize}
                  onChange={handleLandChange}
                  style={styles.slider}
                />
                <div style={styles.sliderInfo}>
                  <span style={styles.sliderValue}>{landSize} m²</span>
                  <span style={styles.sliderHint}>{landDescription}</span>
                </div>
              </div>
            </section>

            <section style={styles.section}>
              <header style={styles.sectionHeader}>
                <div style={styles.sectionBadge}>1</div>
                <div>
                  <h2 style={styles.sectionTitle}>Waktu yang kamu punya</h2>
                  <p style={styles.sectionSubtitle}>
                    Pilih estimasi waktu mingguan yang siap kamu dedikasikan.
                  </p>
                </div>
              </header>
              <div style={styles.optionList}>
                {timeOptions.map((option) => renderOption(option, timeCommitment, setTimeCommitment))}
              </div>
            </section>

            <section style={styles.section}>
              <header style={styles.sectionHeader}>
                <div style={styles.sectionBadge}>2</div>
                <div>
                  <h2 style={styles.sectionTitle}>Pengalaman berkebun</h2>
                  <p style={styles.sectionSubtitle}>
                    Ceritakan seberapa familiar kamu dengan perawatan tanaman.
                  </p>
                </div>
              </header>
              <div style={styles.optionList}>
                {skillOptions.map((option) => renderOption(option, gardeningSkill, setGardeningSkill))}
              </div>
            </section>

            <footer style={styles.footer}>
              <button type="submit" style={styles.primaryButton}>
                Simpan &amp; lanjutkan
              </button>
            </footer>
          </form>
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
    background: 'linear-gradient(180deg, #f5f8f1 0%, #ecf2e4 45%, #e3edd8 100%)',
    padding: '28px 24px',
    gap: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  progressText: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#3a4b2f',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  progressBar: {
    width: '140px',
    height: '6px',
    borderRadius: '999px',
    backgroundColor: 'rgba(47, 143, 70, 0.15)',
    overflow: 'hidden',
  },
  progressFill: {
    width: '33%',
    height: '100%',
    background: 'linear-gradient(135deg, #2f8f46 0%, #55b96a 100%)',
  },
  skipLink: {
    fontSize: '14px',
    color: '#6b7a63',
    textDecoration: 'none',
    fontWeight: 500,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '28px 24px',
    boxShadow: '0 16px 40px rgba(46, 85, 61, 0.18)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    overflowY: 'auto',
  },
  title: {
    fontSize: '24px',
    fontWeight: 700,
    color: '#1f2e1a',
  },
  subtitle: {
    fontSize: '14px',
    color: '#5f6c56',
    lineHeight: 1.6,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  sectionHeader: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
  },
  sectionIllustration: {
    position: 'relative',
    width: '72px',
    height: '72px',
  },
  plotSquare: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '18px',
    background: 'linear-gradient(135deg, #cfe6b4 0%, #85c272 100%)',
    border: '6px solid #f7f7f2',
    boxShadow: '0 12px 20px rgba(47, 143, 70, 0.25)',
  },
  plotShadow: {
    position: 'absolute',
    width: '70%',
    height: '16px',
    bottom: '-12px',
    left: '15%',
    background: 'rgba(47, 143, 70, 0.2)',
    filter: 'blur(12px)',
  },
  sectionBadge: {
    width: '40px',
    height: '40px',
    borderRadius: '14px',
    background: 'linear-gradient(135deg, #2f8f46 0%, #55b96a 100%)',
    color: '#ffffff',
    fontWeight: 700,
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 18px rgba(47, 143, 70, 0.25)',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#1f2e1a',
  },
  sectionSubtitle: {
    fontSize: '13px',
    color: '#6b7a63',
    lineHeight: 1.5,
  },
  sliderBox: {
    backgroundColor: '#f6f8f3',
    borderRadius: '18px',
    padding: '20px 18px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  slider: {
    width: '100%',
    accentColor: '#2f8f46',
    height: '4px',
  },
  sliderInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  sliderValue: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#2f8f46',
  },
  sliderHint: {
    fontSize: '12px',
    color: '#6b7a63',
  },
  optionList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  optionCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '14px 16px',
    borderRadius: '16px',
    border: '1px solid rgba(47, 143, 70, 0.15)',
    backgroundColor: '#f6f8f3',
    fontSize: '14px',
    color: '#1f2e1a',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  optionCardActive: {
    borderColor: '#2f8f46',
    backgroundColor: '#e5f4e9',
    boxShadow: '0 8px 18px rgba(47, 143, 70, 0.18)',
  },
  optionInput: {
    width: '18px',
    height: '18px',
    accentColor: '#2f8f46',
  },
  footer: {
    marginTop: '8px',
  },
  primaryButton: {
    width: '100%',
    padding: '16px',
    borderRadius: '18px',
    background: 'linear-gradient(135deg, #2f8f46 0%, #55b96a 100%)',
    color: '#ffffff',
    border: 'none',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: '0 16px 32px rgba(47, 143, 70, 0.2)',
  },
};

