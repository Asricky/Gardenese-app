# Setup Dependencies untuk Gardenese App

## Dependencies yang Perlu Diinstall

Karena aplikasi ini menggunakan **Next.js 16** dengan **React 19** dan **TypeScript**, berikut adalah dependencies yang perlu diinstall:

### 1. Install Dependencies Utama

```bash
npm install
```

Dependencies yang sudah ada di `package.json`:
- `next` ^16.0.1
- `react` ^19.2.0
- `react-dom` ^19.2.0

### 2. Install TypeScript dan Type Definitions

Karena file menggunakan ekstensi `.tsx` (TypeScript), perlu install:

```bash
npm install --save-dev typescript @types/react @types/node
```

### 3. Buat File `tsconfig.json`

Buat file `tsconfig.json` di root project dengan konfigurasi berikut:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Cara Menjalankan

1. **Install semua dependencies:**
   ```bash
   npm install
   npm install --save-dev typescript @types/react @types/node
   ```

2. **Jalankan development server:**
   ```bash
   npm run dev
   ```

3. **Build untuk production:**
   ```bash
   npm run build
   ```

4. **Jalankan production server:**
   ```bash
   npm start
   ```

## Catatan

- Aplikasi akan berjalan di `http://localhost:3000` secara default
- Semua halaman sudah dibuat dengan styling mobile-first
- Container `.app` akan otomatis terbatas maksimal 420px width
- Semua halaman menggunakan format mobile dengan tinggi 100dvh

