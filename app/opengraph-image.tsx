import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'TugasTuntas - Jasa Skripsi & Tesis Profesional';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  // FIX: Menggunakan URL CDN yang stabil untuk font Inter SemiBold (TTF)
  // Kita fetch langsung string URL-nya, tanpa membungkus dengan new URL(..., import.meta.url)
  const fontSemiBold = await fetch(
    'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-600-normal.ttf',
  ).then((res) => {
    if (!res.ok) {
      throw new Error('Gagal memuat font');
    }
    return res.arrayBuffer();
  });

  return new ImageResponse(
    // ImageResponse Element (JSX)
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0d9488', // Teal-600
        backgroundImage: 'linear-gradient(to bottom right, #0f766e, #0d9488)',
        color: 'white',
        // Gunakan font yang diload
        fontFamily: '"Inter", sans-serif',
      }}>
      {/* Decorative Background Pattern */}
      <div
        style={{
          position: 'absolute',
          top: -100,
          left: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -50,
          right: -50,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
        }}
      />

      {/* Content Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
        }}>
        {/* Logo Box */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100px',
            height: '100px',
            backgroundColor: 'white',
            borderRadius: '24px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            marginBottom: '30px',
          }}>
          {/* SVG Icon (Graduation Cap) */}
          <svg
            width='60'
            height='60'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#0d9488'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path d='M22 10v6M2 10l10-5 10 5-10 5z' />
            <path d='M6 12v5c3 0 6 0 9 5 0-5 3-5 9-5v-5' />
          </svg>
        </div>

        {/* Brand Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            letterSpacing: '-0.03em',
            marginBottom: 20,
          }}>
          TugasTuntas
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 400,
            opacity: 0.9,
            textAlign: 'center',
            maxWidth: '900px',
          }}>
          Jasa Skripsi & Tesis Profesional
        </div>

        {/* Badge */}
        <div
          style={{
            marginTop: 40,
            padding: '12px 40px',
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderRadius: '50px',
            fontSize: 24,
            fontWeight: 600,
          }}>
          Lulus Cepat • Bebas Plagiasi
        </div>
      </div>
    </div>,
    // ImageResponse Options
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: fontSemiBold,
          style: 'normal',
          weight: 600,
        },
      ],
    },
  );
}
