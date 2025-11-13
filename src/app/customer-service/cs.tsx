'use client';

import {
  type CSSProperties,
  type ChangeEvent,
  type KeyboardEvent,
  type SVGProps,
  useMemo,
  useRef,
  useState,
} from 'react';

type Sender = 'service' | 'user';

type Message = {
  id: number;
  sender: Sender;
  text: string;
  timestamp: string;
};

const initialMessages: Message[] = [
  {
    id: 1,
    sender: 'service',
    text: 'Selamat datang di Gardenese Customer Service. Silakan ceritakan kebutuhan Anda, tim kami siap membantu.',
    timestamp: '09.40',
  },
];

export default function CustomerService() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const lastServiceMessageTime = useMemo(() => {
    const lastServiceMessage = [...messages].reverse().find((item) => item.sender === 'service');
    return lastServiceMessage?.timestamp ?? 'Online';
  }, [messages]);

  const handleSend = () => {
    const trimmed = message.trim();
    if (!trimmed) return;

    const now = new Date();
    const formattedTime = now.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
    });

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        sender: 'user',
        text: trimmed,
        timestamp: formattedTime,
      },
    ]);

    setMessage('');

    requestAnimationFrame(() => {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="app">
      <div style={styles.screen}>
        <header style={styles.topBar}>
          <button type="button" style={styles.backButton} aria-label="Kembali">
            <ArrowLeftIcon style={styles.backIcon} />
          </button>

          <div style={styles.profileInfo}>
            <div style={styles.avatar}>
              <div style={styles.avatarBadge} />
            </div>
            <div style={styles.profileText}>
              <span style={styles.profileName}>Layanan Pelanggan</span>
              <span style={styles.profileStatus}>
                <span style={styles.statusDot} />
                Online • respons terakhir {lastServiceMessageTime}
              </span>
            </div>
          </div>

          <button type="button" style={styles.moreButton} aria-label="Menu lainnya">
            <MoreIcon style={styles.moreIcon} />
          </button>
        </header>

        <main style={styles.chatArea}>
          <div style={styles.chatDate}>Hari ini</div>
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={msg.sender === 'service' ? styles.serviceBubble : styles.userBubble}
            >
              <p style={styles.messageText}>{msg.text}</p>
              <span style={styles.messageTime}>{msg.timestamp}</span>
            </div>
          ))}
          <div ref={chatEndRef} />
        </main>

        <footer style={styles.inputArea}>
          <button type="button" style={styles.toolButton} aria-label="Buka emoji">
            <SmileyIcon style={styles.toolIcon} />
          </button>

          <input
            type="text"
            placeholder="Tulis pesan Anda..."
            value={message}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            style={styles.input}
          />

          <div style={styles.toolGroup}>
            <button type="button" style={styles.toolButton} aria-label="Unggah foto">
              <CameraIcon style={styles.toolIcon} />
            </button>
            <button type="button" style={styles.toolButton} aria-label="Kirim pesan suara">
              <MicIcon style={styles.toolIcon} />
            </button>
          </div>

          <button type="button" style={styles.sendButton} aria-label="Kirim pesan" onClick={handleSend}>
            <SendIcon style={styles.sendIcon} />
          </button>
        </footer>
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
    padding: '18px 20px',
    gap: '12px',
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
  profileInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    flex: 1,
  },
  avatar: {
    width: '44px',
    height: '44px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #2f8f46 0%, #55b96a 100%)',
    position: 'relative',
  },
  avatarBadge: {
    position: 'absolute',
    width: '12px',
    height: '12px',
    borderRadius: '999px',
    backgroundColor: '#54d38b',
    border: '3px solid #ffffff',
    bottom: '4px',
    right: '4px',
  },
  profileText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  profileName: {
    fontSize: '17px',
    fontWeight: 600,
    color: '#1f2e1a',
  },
  profileStatus: {
    fontSize: '13px',
    color: '#5f6c56',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  statusDot: {
    width: '8px',
    height: '8px',
    borderRadius: '999px',
    backgroundColor: '#54d38b',
  },
  moreButton: {
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
  moreIcon: {
    width: '18px',
    height: '18px',
    color: '#295f3a',
  },
  chatArea: {
    flex: 1,
    padding: '24px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    overflowY: 'auto',
  },
  chatDate: {
    alignSelf: 'center',
    backgroundColor: '#e5f4e9',
    color: '#295f3a',
    fontSize: '12px',
    fontWeight: 600,
    padding: '6px 12px',
    borderRadius: '999px',
  },
  serviceBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#ffffff',
    borderRadius: '18px 18px 18px 6px',
    padding: '14px 16px',
    maxWidth: '78%',
    boxShadow: '0 10px 24px rgba(46, 85, 61, 0.08)',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  userBubble: {
    alignSelf: 'flex-end',
    background: 'linear-gradient(135deg, #2f8f46 0%, #55b96a 100%)',
    borderRadius: '18px 18px 6px 18px',
    padding: '14px 16px',
    maxWidth: '78%',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  messageText: {
    fontSize: '14px',
    lineHeight: 1.6,
    color: 'inherit',
  },
  messageTime: {
    alignSelf: 'flex-end',
    fontSize: '11px',
    opacity: 0.7,
  },
  inputArea: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 18px 20px',
    backgroundColor: '#fdfdfb',
    borderTop: '1px solid rgba(39, 70, 50, 0.08)',
  },
  toolGroup: {
    display: 'flex',
    gap: '8px',
  },
  toolButton: {
    width: '38px',
    height: '38px',
    borderRadius: '14px',
    border: '1px solid rgba(39, 70, 50, 0.12)',
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  toolIcon: {
    width: '18px',
    height: '18px',
    color: '#295f3a',
  },
  input: {
    flex: 1,
    padding: '12px 16px',
    borderRadius: '16px',
    border: '1px solid rgba(39, 70, 50, 0.16)',
    backgroundColor: '#ffffff',
    fontSize: '14px',
    color: '#1f2e1a',
  },
  sendButton: {
    width: '44px',
    height: '44px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #2f8f46 0%, #55b96a 100%)',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 10px 24px rgba(47, 143, 70, 0.25)',
  },
  sendIcon: {
    width: '20px',
    height: '20px',
    color: '#ffffff',
  },
};

function ArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M15 5 9 12l6 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MoreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <circle cx="5" cy="12" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="19" cy="12" r="1.5" />
    </svg>
  );
}

function SmileyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M9 15c1.2 1 4.8 1 6 0" strokeLinecap="round" />
      <circle cx="9" cy="10" r="1" fill="currentColor" />
      <circle cx="15" cy="10" r="1" fill="currentColor" />
    </svg>
  );
}

function CameraIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x="4" y="6" width="16" height="12" rx="3" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M9 5.5h6" strokeLinecap="round" />
    </svg>
  );
}

function MicIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x="9" y="4" width="6" height="10" rx="3" />
      <path d="M18 11a6 6 0 0 1-12 0" />
      <path d="M12 17v3" strokeLinecap="round" />
    </svg>
  );
}

function SendIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="m5 12 14-7-4 14-3.5-3.5L5 12Z" strokeLinejoin="round" />
    </svg>
  );
}

