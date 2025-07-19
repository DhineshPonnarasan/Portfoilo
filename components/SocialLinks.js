const links = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dhinesh-s-p',
    icon: '💼'
  },
  {
    label: 'Email',
    url: 'mailto:dhineshponnarasan@email.com',
    icon: '📧'
  },
  {
    label: 'GitHub',
    url: 'https://github.com/DhineshPonnarasan',
    icon: '💻'
  },
  {
    label: 'LeetCode',
    url: 'https://leetcode.com/u/Dhinesh_Ponnarasan/',
    icon: '🔥'
  },
  {
    label: 'Phone',
    url: 'tel:+16073128610',
    icon: '📞'
  },
];

export default function SocialLinks() {
  return (
    <section style={{ textAlign: 'center' }}>
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
        🔗 Connect with Me
      </h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginTop: '1.5rem',
        }}
      >
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '1rem',
              color: '#f8fafc',
              backgroundColor: '#1e293b',
              padding: '0.75rem 1.25rem',
              borderRadius: '10px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              border: '1px solid #334155',
              fontWeight: '500',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#38bdf8';
              e.currentTarget.style.color = '#0f172a';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(56, 189, 248, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1e293b';
              e.currentTarget.style.color = '#f8fafc';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span>{link.icon}</span>
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}