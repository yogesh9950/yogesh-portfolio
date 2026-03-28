import './CodeBg.css'

// Scattered code symbols in background like the template
const symbols = [
  '</', '/>', '{}', '()', '=>', '[]', '&&', '||',
  'const', 'let', 'var', 'return', 'import', 'export',
  'async', 'await', 'useState', 'useEffect',
  '<div>', '</div>', '.js', '.jsx', 'npm',
]

const positions = [
  { top: '8%', left: '5%', rotate: '-15deg', opacity: 0.07 },
  { top: '12%', left: '18%', rotate: '10deg', opacity: 0.05 },
  { top: '5%', right: '8%', rotate: '20deg', opacity: 0.07 },
  { top: '18%', right: '22%', rotate: '-8deg', opacity: 0.06 },
  { top: '30%', left: '3%', rotate: '5deg', opacity: 0.05 },
  { top: '35%', right: '5%', rotate: '-12deg', opacity: 0.07 },
  { top: '48%', left: '12%', rotate: '18deg', opacity: 0.04 },
  { top: '55%', right: '14%', rotate: '-5deg', opacity: 0.06 },
  { top: '65%', left: '6%', rotate: '-20deg', opacity: 0.05 },
  { top: '70%', right: '8%', rotate: '15deg', opacity: 0.07 },
  { top: '80%', left: '20%', rotate: '8deg', opacity: 0.04 },
  { top: '85%', right: '18%', rotate: '-10deg', opacity: 0.05 },
  { top: '22%', left: '45%', rotate: '3deg', opacity: 0.04 },
  { top: '60%', left: '40%', rotate: '-8deg', opacity: 0.04 },
  { top: '42%', right: '38%', rotate: '12deg', opacity: 0.03 },
  { top: '90%', left: '50%', rotate: '-5deg', opacity: 0.05 },
]

export default function CodeBg() {
  return (
    <div className="code-bg" aria-hidden="true">
      {positions.map((pos, i) => (
        <span
          key={i}
          className="code-symbol"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            transform: `rotate(${pos.rotate})`,
            opacity: pos.opacity,
          }}
        >
          {symbols[i % symbols.length]}
        </span>
      ))}
    </div>
  )
}
