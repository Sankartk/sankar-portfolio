import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Sankar Kalyanakumar — Engineering Portfolio'
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
          padding: '60px 72px',
          fontFamily: 'monospace',
        }}
      >
        {/* top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#ef4444' }} />
            <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#fbbf24' }} />
            <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#22c55e' }} />
            <span style={{ marginLeft: 14, color: '#334155', fontSize: 13 }}>sankartk.dev</span>
          </div>
          <span style={{ color: '#1e3a5f', fontSize: 13, letterSpacing: '0.15em' }}>SOFTWARE ENGINEER</span>
        </div>

        {/* main */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
            <span style={{ color: '#f1f5f9', fontSize: 68, fontWeight: 900, letterSpacing: '-2px', lineHeight: 1 }}>
              Sankar
            </span>
            <span style={{ color: '#1e3a5f', fontSize: 68, fontWeight: 900, letterSpacing: '-2px', lineHeight: 1 }}>
              Kalyanakumar
            </span>
          </div>

          <div style={{ color: '#475569', fontSize: 20, letterSpacing: '0.05em' }}>
            Data &amp; Platform Systems &nbsp;·&nbsp; Event-Driven Architectures &nbsp;·&nbsp; Cloud Systems
          </div>

          {/* project cards */}
          <div style={{ display: 'flex', gap: 14, marginTop: 10 }}>
            {[
              { name: 'CashCast',          sub: 'ML Forecasting',      color: '#22d3ee', num: '01' },
              { name: 'FleetPulse',         sub: 'Fleet Ops Platform',  color: '#f97316', num: '02' },
              { name: 'Ops Copilot',        sub: 'RAG + AWS Bedrock',   color: '#3b82f6', num: '03' },
              { name: 'Ledger Reconciler',  sub: 'Bank Recon Engine',   color: '#4ade80', num: '04' },
            ].map(p => (
              <div
                key={p.name}
                style={{
                  flex: 1,
                  background: '#0f1929',
                  border: `1px solid #1e2d45`,
                  borderRadius: 12,
                  padding: '18px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{
                    background: p.color,
                    color: '#0a0f1a',
                    fontSize: 10,
                    fontWeight: 800,
                    padding: '2px 8px',
                    borderRadius: 4,
                  }}>{p.num}</span>
                </div>
                <span style={{ color: '#f1f5f9', fontSize: 17, fontWeight: 800, lineHeight: 1.1 }}>{p.name}</span>
                <span style={{ color: '#475569', fontSize: 12 }}>{p.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#1e3a5f', fontSize: 13 }}>github.com/Sankartk</span>
          <span style={{ color: '#3b82f6', fontSize: 15, fontWeight: 700, letterSpacing: '0.05em' }}>sankartk.dev</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
