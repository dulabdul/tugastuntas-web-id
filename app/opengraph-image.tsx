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
  // Kita mencoba memuat font Inter (Opsional, jika gagal akan pakai default sans)
  // Untuk production yang lebih stabil, Anda bisa men-download font .ttf ke folder assets
  // Tapi fetch ini biasanya cukup aman untuk Vercel.
  const fontSemiBold = await fetch(
    new URL(
      'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hjp-Ek-_EeA.ttf',
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    // ImageResponse Element (JSX)
    // Note: CSS disini terbatas pada Flexbox dasar (Satori engine)
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0d9488', // Teal-600 (Primary Color)
        backgroundImage: 'linear-gradient(to bottom right, #0f766e, #0d9488)', // Gradient Teal
        color: 'white',
        fontFamily: '"Inter", sans-serif',
      }}>
      {/* Decorative Background Pattern (Circles) */}
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
          gap: '20px',
          zIndex: 10,
        }}>
        {/* Logo / Icon Simulation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            backgroundColor: 'white',
            borderRadius: '20px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          }}>
          {/* Simple SVG Cap Icon */}
          <svg
            width='48'
            height='48'
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
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginTop: 20,
          }}>
          TugasTuntas
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            opacity: 0.9,
            textAlign: 'center',
            padding: '0 40px',
          }}>
          Jasa Pembuatan Skripsi & Tesis Profesional
        </div>

        {/* Badge / Footer */}
        <div
          style={{
            marginTop: 40,
            padding: '10px 30px',
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderRadius: '50px',
            fontSize: 20,
            fontWeight: 600,
          }}>
          Lulus Cepat • Bebas Plagiasi • Terpercaya
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
