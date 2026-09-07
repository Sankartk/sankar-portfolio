import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'market-microstructure — C++ order book engine'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ background: '#faf9f6', width: '100%', height: '100%', display: 'flex', padding: '72px 80px' }}>
        <div style={{ width: 10, background: '#e11d48', borderRadius: 4, marginRight: 48 }} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
          <span style={{ color: '#a8a29e', fontSize: 22 }}>sankartk.dev/projects/market-microstructure</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <span style={{ color: '#1c1917', fontSize: 64, fontWeight: 800, letterSpacing: '-0.02em' }}>market-microstructure</span>
            <span style={{ color: '#57534e', fontSize: 36, lineHeight: 1.3, maxWidth: 900 }}>
              What happens inside an exchange between “buy” and “filled”?
            </span>
            <span style={{ color: '#e11d48', fontSize: 24, fontWeight: 600 }}>
              C++20 order book · ITCH 5.0 · spoofing & layering detection · 673ns measured
            </span>
          </div>
          <span style={{ color: '#a8a29e', fontSize: 20 }}>C++20 · CMake · pool allocator · ctest</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
