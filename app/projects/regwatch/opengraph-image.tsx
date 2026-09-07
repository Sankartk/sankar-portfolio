import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'regwatch — AI trade compliance gate'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ background: '#faf9f6', width: '100%', height: '100%', display: 'flex', padding: '72px 80px' }}>
        <div style={{ width: 10, background: '#d97706', borderRadius: 4, marginRight: 48 }} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
          <span style={{ color: '#a8a29e', fontSize: 22 }}>sankartk.dev/projects/regwatch</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <span style={{ color: '#1c1917', fontSize: 76, fontWeight: 800, letterSpacing: '-0.02em' }}>regwatch</span>
            <span style={{ color: '#57534e', fontSize: 36, lineHeight: 1.3, maxWidth: 900 }}>
              An AI wrote a trading signal. Who checks it before money moves?
            </span>
            <span style={{ color: '#d97706', fontSize: 24, fontWeight: 600 }}>
              Compliance gate · five rules · immutable audit trail · SEC filing extraction
            </span>
          </div>
          <span style={{ color: '#a8a29e', fontSize: 20 }}>Python · Ollama · SQLite · Streamlit</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
