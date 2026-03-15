import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'CashCast — Branch Cash Intelligence'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0f1a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          fontFamily: 'monospace',
        }}
      >
        {/* top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ef4444' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#fbbf24' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#22c55e' }} />
          <span style={{ marginLeft: 16, color: '#475569', fontSize: 13 }}>sankartk.dev/projects/cashcast</span>
        </div>

        {/* main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              background: '#0891b2',
              color: 'white',
              fontSize: 13,
              fontWeight: 800,
              padding: '4px 12px',
              borderRadius: 6,
            }}>
              01
            </div>
            <span style={{ color: '#22d3ee', fontSize: 14, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Branch Cash Intelligence
            </span>
          </div>

          <div style={{ color: '#f1f5f9', fontSize: 72, fontWeight: 900, letterSpacing: '-2px', lineHeight: 1 }}>
            CashCast
          </div>

          <div style={{ color: '#94a3b8', fontSize: 24, maxWidth: 700, lineHeight: 1.4 }}>
            ML-powered 14-day cash demand forecasting for retail bank branches.
          </div>

          {/* tags */}
          <div style={{ display: 'flex', gap: 10, marginTop: 8, flexWrap: 'wrap' }}>
            {['FastAPI', 'scikit-learn', 'Ridge Regression', 'Plotly.js', 'SQLite'].map(t => (
              <div key={t} style={{
                background: '#1e293b',
                color: '#94a3b8',
                fontSize: 14,
                padding: '6px 14px',
                borderRadius: 6,
                border: '1px solid #334155',
              }}>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#334155', fontSize: 14 }}>github.com/Sankartk/cashcast</span>
          <span style={{ color: '#22d3ee', fontSize: 15, fontWeight: 700 }}>sankartk.dev</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
