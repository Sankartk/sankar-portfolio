import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'alpha-engine — backtesting without the lies'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ background: '#faf9f6', width: '100%', height: '100%', display: 'flex', padding: '72px 80px' }}>
        <div style={{ width: 10, background: '#059669', borderRadius: 4, marginRight: 48 }} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
          <span style={{ color: '#a8a29e', fontSize: 22 }}>sankartk.dev/projects/alpha-engine</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <span style={{ color: '#1c1917', fontSize: 76, fontWeight: 800, letterSpacing: '-0.02em' }}>alpha-engine</span>
            <span style={{ color: '#57534e', fontSize: 36, lineHeight: 1.3, maxWidth: 900 }}>
              Everyone has a strategy that “would have worked.” This tries to prove you wrong first.
            </span>
            <span style={{ color: '#059669', fontSize: 24, fontWeight: 600 }}>
              No lookahead · real transaction costs · walk-forward · live paper trading
            </span>
          </div>
          <span style={{ color: '#a8a29e', fontSize: 20 }}>Python · pandas · Alpaca · Streamlit</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
