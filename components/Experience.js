export default function Experience() {
  const experiences = [
    {
      role: 'AI/ML Intern',
      company: 'Cortex Management',
      duration: 'Jun 2024 – Present',
      description: `Working on audio intelligence by converting call recordings into summarized text,
      detecting PII using Azure AI, and building customer sentiment analytics dashboards.`,
    },
    {
      role: 'Graduate Assistant - AI Lab',
      company: 'SUNY Binghamton',
      duration: 'Jan 2024 – May 2024',
      description: `Assisted in research involving generative AI, built LLM pipelines,
      and contributed to multi-modal projects involving vision-language models.`,
    },
    {
      role: 'E-commerce Developer Intern',
      company: 'CMS IT Services',
      duration: 'Jan 2023 – Apr 2023',
      description: `Developed and maintained full-stack web modules using HTML, CSS, JavaScript, and
      Flask. Automated product listings and improved catalog search UX.`,
    },
  ];

  return (
    <section>
      <h2
        style={{
          fontSize: '2rem',
          marginBottom: '1.5rem',
          borderBottom: '3px solid #38bdf8',
          display: 'inline-block',
          paddingBottom: '8px',
          color: '#38bdf8',
        }}
      >
        💼 Experience
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#1e293b',
              padding: '1.5rem 2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              border: '1px solid #334155',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#38bdf8';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(56, 189, 248, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#334155';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
            }}
          >
            <h3 style={{ 
              margin: 0, 
              fontSize: '1.3rem', 
              color: '#f8fafc',
              marginBottom: '0.5rem'
            }}>
              {exp.role} @ <span style={{ color: '#38bdf8' }}>{exp.company}</span>
            </h3>
            <p style={{ 
              margin: '0 0 1rem 0', 
              color: '#94a3b8',
              fontSize: '1rem',
              fontWeight: '500'
            }}>
              {exp.duration}
            </p>
            <p style={{ 
              margin: 0, 
              color: '#cbd5e1', 
              lineHeight: '1.6',
              fontSize: '1rem'
            }}>
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}