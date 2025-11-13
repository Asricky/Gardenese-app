'use client';

import Image from 'next/image';
import {
  type ChangeEvent,
  type CSSProperties,
  type FormEvent,
  type SVGProps,
  useState,
} from 'react';

const heroImageSrc = '/images/auth/register-hero.jpg'; // TODO: sediakan gambar ini di public/images/auth/

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleFullNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className="app">
      <div style={styles.screen}>
        <header style={styles.brandArea}>
          <div style={styles.brandBadge}>
            <div style={styles.badgeLeafTop} />
            <div style={styles.badgeLeafBottom} />
          </div>
          <div style={styles.brandText}>
            <span style={styles.brandTitle}>Registrasi</span>
            <span style={styles.brandSubtitle}>Buat akun baru untuk mulai berkebun</span>
          </div>
        </header>

        <div style={styles.heroWrapper}>
          <div style={styles.heroImageFrame}>
            <Image
              src={heroImageSrc}
              alt="Peralatan berkebun"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 420px) 100vw, 420px"
            />
          </div>
        </div>

        <main style={styles.card}>
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label style={styles.inputLabel} htmlFor="fullName">
                Nama lengkap
              </label>
              <div style={styles.inputField}>
                <UserIcon style={styles.inputIcon} />
                <input
                  id="fullName"
                  type="text"
                  placeholder="contoh: Alexander Jayarno"
                  value={fullName}
                  onChange={handleFullNameChange}
                  style={styles.input}
                  required
                />
              </div>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.inputLabel} htmlFor="email">
                Email
              </label>
              <div style={styles.inputField}>
                <EmailIcon style={styles.inputIcon} />
                <input
                  id="email"
                  type="email"
                  placeholder="contoh: alexero@gmail.com"
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
                  placeholder="buat kata sandi yang aman"
                  value={password}
                  onChange={handlePasswordChange}
                  style={styles.input}
                  required
                />
              </div>
            </div>

            <p style={styles.termsText}>
              Dengan mendaftar, Anda menyetujui Ketentuan Penggunaan dan Kebijakan Privasi Gardenese.
            </p>

            <button type="submit" style={styles.primaryButton}>
              Daftar
            </button>
          </form>

          <footer style={styles.authSwitch}>
            <span>Sudah punya akun?</span>
            <a href="/register-login/login" style={styles.linkPrimary}>
              Masuk
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
    padding: '28px 24px',
    background: 'linear-gradient(180deg, #f4f7ef 0%, #ebf4e3 40%, #e2f0da 100%)',
    gap: '24px',
  },
  brandArea: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
  },
  brandBadge: {
    position: 'relative',
    width: '56px',
    height: '56px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #2f8f46 0%, #4ea95d 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  badgeLeafTop: {
    position: 'absolute',
    width: '36px',
    height: '18px',
    borderRadius: '36px 36px 0 36px',
    background: 'rgba(255,255,255,0.8)',
    top: '12px',
    left: '8px',
    transform: 'rotate(-14deg)',
  },
  badgeLeafBottom: {
    position: 'absolute',
    width: '36px',
    height: '18px',
    borderRadius: '36px 0 36px 36px',
    background: 'rgba(255,255,255,0.6)',
    bottom: '12px',
    right: '8px',
    transform: 'rotate(18deg)',
  },
  brandText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  brandTitle: {
    fontSize: '26px',
    fontWeight: 700,
    color: '#1f2e1a',
  },
  brandSubtitle: {
    fontSize: '14px',
    color: '#5f6c56',
  },
  heroWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  heroImageFrame: {
    position: 'relative',
    width: '100%',
    maxWidth: '352px',
    aspectRatio: '7 / 5',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 16px 36px rgba(62, 106, 58, 0.22)',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '28px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    boxShadow: '0 12px 32px rgba(46, 85, 61, 0.16)',
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
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontWeight: 600,
    color: '#3a4b2f',
  },
  inputField: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    borderRadius: '14px',
    backgroundColor: '#f6f6f1',
    border: '1px solid transparent',
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
  termsText: {
    fontSize: '12px',
    color: '#5f6c56',
    lineHeight: 1.6,
    textAlign: 'center',
    marginTop: '4px',
  },
  primaryButton: {
    marginTop: '4px',
    width: '100%',
    padding: '14px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #2f8f46 0%, #55b96a 100%)',
    color: '#ffffff',
    border: 'none',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: '0 14px 28px rgba(47, 143, 70, 0.22)',
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

function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M5 19.5c1.2-3 3.7-4.5 7-4.5s5.8 1.5 7 4.5" strokeLinecap="round" />
    </svg>
  );
}

