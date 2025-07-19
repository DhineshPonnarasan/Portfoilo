export default function Header() {
  return (
    <header
      style={{
        padding: '1.5rem 0',
        backgroundColor: '#0f172a',
        color: '#f8fafc',
        textAlign: 'center',
        borderBottom: '1px solid #1e293b',
      }}
    >
      <h1
        style={{
          fontSize: '1.8rem',
          fontWeight: '600',
          margin: 0,
          fontFamily: 'monospace',
        }}
      >
        Welcome to my Portfolio...
      </h1>
    </header>
  );
}