const publications = [
  {
    title: "Collaborative Search With Knowledge Sharing And Summarization",
    publisher: "IEEE - Institute of Electrical and Electronics Engineers",
    conference: "2024 4th International Conference on Sustainable Expert Systems (ICSES)",
    link: "https://ieeexplore.ieee.org/document/10763244",
    desc: "An innovative system combining collaborative search with graph-based summarization using MIS theory and eigenvector centrality. Includes real-time chat, bookmarks, feedback-driven re-ranking, and auto-categorization using Random Forest."
  },
  {
    title: "Image to Audio Conversion to Aid Visually Impaired People by CNN",
    publisher: "IEEE - Institute of Electrical and Electronics Engineers",
    conference: "2023 4th International Conference on Electronics and Sustainable Communication Systems (ICESC)",
    link: "https://ieeexplore.ieee.org/document/10193308",
    desc: "CNN-based system that converts real-time images into descriptive audio to assist visually impaired individuals, offering an intuitive, mobile-friendly alternative to braille or text systems."
  }
];

export default function Publications() {
  return (
    <section style={{ marginTop: '3rem' }}>
      <h2
        style={{
          fontSize: '2rem',
          marginBottom: '1.5rem',
          borderBottom: '3px solid #38bdf8',
          display: 'inline-block',
          paddingBottom: '8px',
          color: '#38bdf8',
          fontWeight: '600',
        }}
      >
        📚 Publications
      </h2>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {publications.map((pub, i) => (
          <div
            key={i}
            style={{
              backgroundColor: '#1e293b',
              border: '1px solid #334155',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(56, 189, 248, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
            }}
          >
            <div style={{ marginBottom: '1rem' }}>
              <h3 
                style={{ 
                  margin: '0 0 1rem 0', 
                  color: '#f8fafc',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  lineHeight: '1.4'
                }}
              >
                📖 {pub.title}
              </h3>
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ 
                margin: '0.5rem 0', 
                color: '#38bdf8',
                fontWeight: '600'
              }}>
                <strong>Publisher:</strong> <span style={{ color: '#e2e8f0', fontWeight: 'normal' }}>{pub.publisher}</span>
              </p>
              <p style={{ 
                margin: '0.5rem 0', 
                color: '#38bdf8',
                fontWeight: '600'
              }}>
                <strong>Conference:</strong> <span style={{ color: '#e2e8f0', fontWeight: 'normal' }}>{pub.conference}</span>
              </p>
            </div>
            
            <p style={{ 
              margin: '1rem 0', 
              color: '#e2e8f0', 
              lineHeight: '1.6',
              fontSize: '0.95rem'
            }}>
              {pub.desc}
            </p>
            
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                color: '#38bdf8',
                backgroundColor: '#0f172a',
                fontWeight: '600',
                padding: '8px 16px',
                borderRadius: '8px',
                textDecoration: 'none',
                border: '1px solid #38bdf8',
                fontSize: '0.9rem',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#38bdf8';
                e.currentTarget.style.color = '#0f172a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0f172a';
                e.currentTarget.style.color = '#38bdf8';
              }}
            >
              View Publication →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}