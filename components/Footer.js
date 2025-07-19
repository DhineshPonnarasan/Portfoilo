export default function Footer() {
  return (
    <footer
      style={{
        marginTop: '4rem',
        padding: '2rem 8%',
        backgroundColor: '#0f172a',
        borderTop: '1px solid #334155',
        color: '#e2e8f0',
        textAlign: 'center',
        fontSize: '0.95rem',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <p style={{ margin: '0.5rem 0' }}>
          &copy; {new Date().getFullYear()} Dhinesh Ponnarasan · Built with ❤️ using Next.js
        </p>
        <p style={{ margin: '0.5rem 0' }}>
          <a
            href="https://github.com/DhineshPonnarasan"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              color: '#38bdf8', 
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0ea5e9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#38bdf8';
            }}
          >
            GitHub Profile ↗
          </a>
        </p>
        <p style={{ 
          margin: '1rem 0 0 0', 
          color: '#94a3b8', 
          fontSize: '0.85rem' 
        }}>
          Data Scientist • Machine Learning Engineer • IEEE Published Author
        </p>
      </div>
    </footer>
  );
}