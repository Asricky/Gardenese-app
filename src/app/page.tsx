'use client';

import Image from 'next/image';
import { type CSSProperties, type SVGProps } from 'react';

const heroImageSrc = '/images/landing/hero-garden.jpg'; // TODO: sediakan gambar ini di public/images/landing/

const features = [
  { title: 'Panduan Berkebun', description: 'Langkah demi langkah sesuai kondisi tanamanmu.', icon: GuideIcon },
  { title: 'Reminder Siram', description: 'Pengingat otomatis agar tanaman tetap subur.', icon: ReminderIcon },
  { title: 'Marketplace', description: 'Bibit, alat, dan perlengkapan dalam satu aplikasi.', icon: ShopIcon },
];

export default function Home() {
  return (
    <div className="app">
      <div style={styles.screen}>
        <header style={styles.header}>
          <div style={styles.brandMark}>
            <div style={styles.brandStem} />
            <div style={styles.brandLeafLeft} />
            <div style={styles.brandLeafRight} />
          </div>
          <div style={styles.brandText}>
            <span style={styles.brandName}>Gardenese</span>
            <span style={styles.brandTagline}>Teman berkebun pintar untuk semua tingkat pengalaman</span>
          </div>
        </header>

        <div style={styles.hero}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Rawat tanaman dengan cara yang paling mudah</h1>
            <p style={styles.heroSubtitle}>
              Personal assistant berkebun, mulai dari perawatan harian, rekomendasi tanaman, sampai konsultasi
              dengan ahli.
            </p>

            <div style={styles.ctaGroup}>
              <a href="/register-login/register" style={styles.primaryButton}>
                Mulai sekarang
              </a>
              <a href="/register-login/login" style={styles.secondaryButton}>
                Saya sudah punya akun
              </a>
            </div>
          </div>

          <div style={styles.heroImageWrapper}>
            <div style={styles.heroImageFrame}>
              <Image
                src={heroImageSrc}
                alt="Ilustrasi berkebun"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 420px) 100vw, 420px"
                priority
              />
            </div>
          </div>
        </div>

        <section style={styles.featureSection}>
          {features.map(({ title, description, icon: Icon }) => (
            <article key={title} style={styles.featureCard}>
              <div style={styles.featureIconWrapper}>
                <Icon style={styles.featureIcon} />
              </div>
              <div style={styles.featureText}>
                <h3 style={styles.featureTitle}>{title}</h3>
                <p style={styles.featureDescription}>{description}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  screen: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '28px 24px',
    background: 'linear-gradient(180deg, #f5f8f1 0%, #e9f2e2 50%, #e0ebd5 100%)',
    gap: '24px',
  },
  header: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
  },
  brandMark: {
    position: 'relative',
    width: '56px',
    height: '56px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #2f8f46 0%, #55b96a 100%)',
  },
  brandStem: {
    position: 'absolute',
    width: '6px',
    height: '26px',
    borderRadius: '999px',
    backgroundColor: '#ffffff',
    left: '50%',
    bottom: '12px',
    transform: 'translateX(-50%)',
  },
  brandLeafLeft: {
    position: 'absolute',
    width: '26px',
    height: '16px',
    borderRadius: '26px 26px 0 26px',
    backgroundColor: '#ffffff',
    top: '12px',
    left: '10px',
    transform: 'rotate(-15deg)',
    opacity: 0.75,
  },
  brandLeafRight: {
    position: 'absolute',
    width: '26px',
    height: '16px',
    borderRadius: '26px 0 26px 26px',
    backgroundColor: '#ffffff',
    top: '12px',
    right: '10px',
    transform: 'rotate(15deg)',
    opacity: 0.6,
  },
  brandText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  brandName: {
    fontSize: '26px',
    fontWeight: 700,
    color: '#1f2e1a',
  },
  brandTagline: {
    fontSize: '14px',
    color: '#5f6c56',
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  heroContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  heroTitle: {
    fontSize: '28px',
    fontWeight: 700,
    color: '#1f2e1a',
    lineHeight: 1.2,
  },
  heroSubtitle: {
    fontSize: '15px',
    color: '#5f6c56',
    lineHeight: 1.6,
  },
  ctaGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginTop: '8px',
  },
  primaryButton: {
    display: 'block',
    textAlign: 'center',
    padding: '14px 18px',
    borderRadius: '18px',
    background: 'linear-gradient(135deg, #2f8f46 0%, #55b96a 100%)',
    color: '#ffffff',
    fontWeight: 600,
    fontSize: '16px',
    textDecoration: 'none',
    boxShadow: '0 16px 28px rgba(47, 143, 70, 0.22)',
  },
  secondaryButton: {
    display: 'block',
    textAlign: 'center',
    padding: '14px 18px',
    borderRadius: '18px',
    border: '1px solid rgba(47, 143, 70, 0.4)',
    color: '#2f8f46',
    fontWeight: 600,
    fontSize: '16px',
    textDecoration: 'none',
    backgroundColor: '#f6f8f3',
  },
  heroImageWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  heroImageFrame: {
    position: 'relative',
    width: '100%',
    maxWidth: '360px',
    aspectRatio: '4 / 3',
    borderRadius: '28px',
    overflow: 'hidden',
    boxShadow: '0 20px 44px rgba(62, 106, 58, 0.28)',
  },
  featureSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: '16px',
  },
  featureCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '16px',
    borderRadius: '18px',
    backgroundColor: '#ffffff',
    boxShadow: '0 10px 26px rgba(46, 85, 61, 0.12)',
  },
  featureIconWrapper: {
    width: '48px',
    height: '48px',
    borderRadius: '14px',
    backgroundColor: '#e5f4e9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureIcon: {
    width: '24px',
    height: '24px',
    color: '#2f8f46',
  },
  featureText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  featureTitle: {
    fontSize: '15px',
    fontWeight: 600,
    color: '#1f2e1a',
  },
  featureDescription: {
    fontSize: '13px',
    color: '#5f6c56',
    lineHeight: 1.5,
  },
};

function GuideIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M5 4h8l6 4v12H5z" />
      <path d="M13 4v4h6" />
      <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ReminderIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <circle cx="12" cy="13" r="6" />
      <path d="M12 9v4l2 2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 3h6" strokeLinecap="round" />
      <path d="m7 5 2 .5M17 5l-2 .5" strokeLinecap="round" />
    </svg>
  );
}

function ShopIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M4 7h16l-1 12H5z" />
      <path d="M7 10h10" strokeLinecap="round" />
      <path d="M9 7V5a3 3 0 0 1 6 0v2" />
    </svg>
  );
}
