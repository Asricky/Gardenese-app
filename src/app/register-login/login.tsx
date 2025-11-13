'use client';

import Image from 'next/image';
import {
  type ChangeEvent,
  type CSSProperties,
  type FormEvent,
  type SVGProps,
  useState,
} from 'react';

const heroImageSrc = '/images/auth/login-hero.jpg'; // TODO: sediakan gambar ini di folder public/images/auth/

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRememberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.target.checked);
  };

  return (
    <div className="app">
      <div style={styles.screen}>
        <header style={styles.brandArea}>
          <div style={styles.brandMark}>
            <div style={styles.brandLeafLeft} />
            <div style={styles.brandStem} />
            <div style={styles.brandLeafRight} />
          </div>
          <span style={styles.brandName}>Gardenese</span>
        </header>

        <div style={styles.heroWrapper}>
          <div style={styles.heroImageFrame}>
            <Image
              src={heroImageSrc}
              alt="Aktivitas berkebun"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 420px) 100vw, 420px"
              priority
            />
          </div>
        </div>

        <main style={styles.card}>
          <header style={styles.cardHeader}>
            <h1 style={styles.cardTitle}>Masuk ke akun Anda</h1>
            <p style={styles.cardSubtitle}>Nikmati pengalaman berkebun yang terkurasi khusus untuk Anda</p>
          </header>

          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label style={styles.inputLabel} htmlFor="email">
                Email
              </label>
              <div style={styles.inputField}>
                <EmailIcon style={styles.inputIcon} />
                <input
                  id="email"
                  type="email"
                  placeholder="masukkan email Anda"
                  value={email}
                  onChange={handleEmailChange}
                  style={styles.input}
                  required
                />
              </div>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.inputLabel} htmlFor="password">
                Kata sandi
              </label>
              <div style={styles.inputField}>
                <LockIcon style={styles.inputIcon} />
                <input
                  id="password"
                  type="password"
                  placeholder="masukkan kata sandi"
                  value={password}
                  onChange={handlePasswordChange}
                  style={styles.input}
                  required
                />
              </div>
            </div>

            <div style={styles.formMeta}>
              <label style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberChange}
                  style={styles.checkbox}
                />
                <span>Ingat saya</span>
              </label>
              <a href="#" style={styles.linkMuted}>
                Lupa kata sandi?
              </a>
            </div>

            <button style={styles.primaryButton} type="submit">
              Masuk
            </button>
          </form>

          <footer style={styles.authSwitch}>
            <span>Belum punya akun?</span>
            <a href="/register-login/register" style={styles.linkPrimary}>
              Daftar
            </a>
          </footer>
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
    background: 'linear-gradient(180deg, #f6f7f2 0%, #edf3e1 40%, #e4efda 100%)',
    padding: '32px 24px',
    gap: '24px',
  },
  brandArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
  },
  brandMark: {
    position: 'relative',
    width: '64px',
    height: '32px',
  },
  brandLeafLeft: {
    position: 'absolute',
    width: '28px',
    height: '18px',
    borderRadius: '28px 28px 0 28px',
    background: '#2f8f46',
    left: '0',
    top: '0',
    transform: 'rotate(-12deg)',
  },
  brandLeafRight: {
    position: 'absolute',
    width: '28px',
    height: '18px',
    borderRadius: '28px 28px 28px 0',
    background: '#55b96a',
    right: '0',
    top: '0',
    transform: 'rotate(12deg)',
  },
  brandStem: {
    position: 'absolute',
    left: '50%',
    top: '8px',
    width: '4px',
    height: '20px',
    borderRadius: '999px',
    background: '#2f8f46',
    transform: 'translateX(-50%)',
  },
  brandName: {
    fontSize: '24px',
    fontWeight: 700,
    color: '#1f2e1a',
    letterSpacing: '0.4px',
  },
  heroWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  heroImageFrame: {
    position: 'relative',
    width: '100%',
    maxWidth: '328px',
    aspectRatio: '3 / 2',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 18px 40px rgba(62, 106, 58, 0.25)',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '28px 24px',
    boxShadow: '0 12px 32px rgba(46, 85, 61, 0.18)',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: '22px',
    fontWeight: 700,
    color: '#1f2e1a',
  },
  cardSubtitle: {
    fontSize: '14px',
    color: '#5f6c56',
    lineHeight: 1.5,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  inputLabel: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#3a4b2f',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
  inputField: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f5f6f2',
    borderRadius: '14px',
    padding: '12px 16px',
    border: '1px solid transparent',
    gap: '12px',
    transition: 'border-color 0.2s ease, background-color 0.2s ease',
  },
  inputIcon: {
    width: '20px',
    height: '20px',
    color: '#6b7a63',
  },
  input: {
    flex: 1,
    border: 'none',
    background: 'transparent',
    fontSize: '15px',
    color: '#1f2e1a',
  },
  formMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '13px',
    color: '#5f6c56',
    marginTop: '4px',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
  },
  checkbox: {
    width: '16px',
    height: '16px',
    accentColor: '#2f8f46',
  },
  linkMuted: {
    color: '#5f6c56',
    textDecoration: 'none',
    fontWeight: 500,
  },
  primaryButton: {
    marginTop: '8px',
    width: '100%',
    padding: '14px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #2f8f46 0%, #55b96a 100%)',
    color: '#ffffff',
    border: 'none',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: '0 12px 24px rgba(47, 143, 70, 0.25)',
  },
  authSwitch: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#5f6c56',
  },
  linkPrimary: {
    color: '#2f8f46',
    fontWeight: 600,
    textDecoration: 'none',
  },
};

function EmailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7.5 12 13l8-5.5" />
    </svg>
  );
}

function LockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="15" r="1.5" />
    </svg>
  );
}

