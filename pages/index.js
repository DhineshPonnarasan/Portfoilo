import { useState, useEffect } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState([]);
  const [emojiParticles, setEmojiParticles] = useState([]);
  const [geoShapes, setGeoShapes] = useState([]);

  useEffect(() => {
    setIsClient(true);
    
    // Generate particles on client side only
    const newParticles = [...Array(40)].map((_, i) => ({
      id: i,
      width: Math.random() * 8 + 3,
      height: Math.random() * 8 + 3,
      background: [
        'linear-gradient(45deg, #3b82f6, #1d4ed8)',
        'linear-gradient(45deg, #8b5cf6, #7c3aed)',
        'linear-gradient(45deg, #10b981, #059669)',
        'linear-gradient(45deg, #f59e0b, #d97706)',
        'linear-gradient(45deg, #ef4444, #dc2626)',
        'linear-gradient(45deg, #06b6d4, #0891b2)',
        'linear-gradient(45deg, #84cc16, #65a30d)'
      ][Math.floor(Math.random() * 7)],
      borderRadius: Math.random() > 0.5 ? '50%' : '0%',
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDuration: Math.random() * 20 + 15,
      animationDelay: Math.random() * 10,
      rotation: Math.random() * 360
    }));
    
    const newEmojiParticles = ['🤖', '🧠', '👁️', '📊', '🔬', '💻', '🚀', '⚡', '🎯', '🔍', '📈', '🧮', '🎨', '🔮', '💡', '⚙️', '🌐', '📱', '🎪', '🧬', '🎭', '🌟', '💎', '🎵', '🔥', '🌈', '✨', '💫', '🎆', '🎉'].map((emoji, i) => ({
      id: i,
      emoji,
      fontSize: Math.random() * 20 + 15,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDuration: Math.random() * 25 + 20,
      animationDelay: Math.random() * 15
    }));
    
    const newGeoShapes = [...Array(15)].map((_, i) => ({
      id: i,
      width: Math.random() * 30 + 15,
      height: Math.random() * 30 + 15,
      border: `3px solid ${['rgba(59, 130, 246, 0.4)', 'rgba(168, 85, 247, 0.4)', 'rgba(16, 185, 129, 0.4)', 'rgba(251, 191, 36, 0.4)'][Math.floor(Math.random() * 4)]}`,
      borderRadius: Math.random() > 0.5 ? '50%' : '0%',
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDuration: Math.random() * 30 + 25,
      animationDelay: Math.random() * 10,
      rotation: Math.random() * 360
    }));
    
    setParticles(newParticles);
    setEmojiParticles(newEmojiParticles);
    setGeoShapes(newGeoShapes);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isClient]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigateToSection = (section) => {
    setCurrentSection(section);
    setMenuOpen(false);
  };

  const skillsData = [
    {
      role: "Programming Languages",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "Java", icon: "☕" },
        { name: "C++", icon: "⚡" },
        { name: "C#", icon: "🔷" },
        { name: "JavaScript", icon: "🟨" },
        { name: "TypeScript", icon: "🔷" },
        { name: "R", icon: "📊" },
        { name: "Scala", icon: "🔥" },
        { name: "SQL", icon: "🗃️" }
      ]
    },
    {
      role: "Machine Learning & AI",
      skills: [
        { name: "Scikit-learn", icon: "🤖" },
        { name: "XGBoost", icon: "🚀" },
        { name: "Random Forest", icon: "🌲" },
        { name: "SVM", icon: "🎯" },
        { name: "LightGBM", icon: "💡" },
        { name: "CatBoost", icon: "🐱" },
        { name: "AutoML", icon: "🔄" },
        { name: "MLOps", icon: "⚙️" },
        { name: "Hyperparameter Tuning", icon: "🎛️" },
        { name: "Model Selection", icon: "🎪" },
        { name: "Feature Engineering", icon: "🔧" },
        { name: "Ensemble Methods", icon: "🎭" }
      ]
    },
    {
      role: "Deep Learning & Neural Networks",
      skills: [
        { name: "TensorFlow", icon: "🧠" },
        { name: "PyTorch", icon: "🔥" },
        { name: "Keras", icon: "🎯" },
        { name: "CNN", icon: "🖼️" },
        { name: "RNN / LSTM", icon: "🔄" },
        { name: "GANs", icon: "🎭" },
        { name: "Transformers", icon: "🤖" },
        { name: "BERT", icon: "📝" },
        { name: "GPT", icon: "💬" },
        { name: "ResNet", icon: "🏗️" },
        { name: "U-Net", icon: "🎨" },
        { name: "YOLO", icon: "👁️" }
      ]
    },
    {
      role: "Computer Vision",
      skills: [
        { name: "OpenCV", icon: "👁️" },
        { name: "PIL/Pillow", icon: "🖼️" },
        { name: "ImageIO", icon: "📸" },
        { name: "Albumentations", icon: "🔄" },
        { name: "MediaPipe", icon: "🎥" },
        { name: "YOLO", icon: "🔍" },
        { name: "Object Detection", icon: "🎯" },
        { name: "Image Segmentation", icon: "✂️" },
        { name: "Face Recognition", icon: "👤" },
        { name: "OCR", icon: "📄" }
      ]
    },
    {
      role: "Data Science & Analytics",
      skills: [
        { name: "NumPy", icon: "🔢" },
        { name: "Pandas", icon: "🐼" },
        { name: "Matplotlib", icon: "📊" },
        { name: "Seaborn", icon: "🌊" },
        { name: "Plotly", icon: "📈" },
        { name: "Jupyter", icon: "📓" },
        { name: "Google Colab", icon: "☁️" },
        { name: "Anaconda", icon: "🐍" },
        { name: "SciPy", icon: "🧪" },
        { name: "Statsmodels", icon: "📊" },
        { name: "Beautiful Soup", icon: "🍲" },
        { name: "Scrapy", icon: "🕷️" }
      ]
    },
    {
      role: "Big Data & Cloud Platforms",
      skills: [
        { name: "Apache Spark", icon: "⚡" },
        { name: "Apache Kafka", icon: "🌊" },
        { name: "Hadoop", icon: "🐘" },
        { name: "Dask", icon: "📊" },
        { name: "AWS", icon: "☁️" },
        { name: "Google Cloud", icon: "🌥️" },
        { name: "Azure", icon: "🔷" },
        { name: "Databricks", icon: "🧱" },
        { name: "Snowflake", icon: "❄️" },
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "⚓" }
      ]
    },
    {
      role: "Databases & Storage",
      skills: [
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Redis", icon: "🔴" },
        { name: "ElasticSearch", icon: "🔍" },
        { name: "MySQL", icon: "💾" },
        { name: "SQLite", icon: "💽" },
        { name: "Cassandra", icon: "🏛️" },
        { name: "Neo4j", icon: "🕸️" },
        { name: "InfluxDB", icon: "📈" }
      ]
    },
    {
      role: "Development & Deployment",
      skills: [
        { name: "FastAPI", icon: "⚡" },
        { name: "Flask", icon: "🌶️" },
        { name: "Django", icon: "🎸" },
        { name: "Streamlit", icon: "🎯" },
        { name: "Gradio", icon: "🎨" },
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "Node.js", icon: "🟢" },
        { name: "Git", icon: "📝" },
        { name: "GitHub", icon: "🐙" },
        { name: "MLflow", icon: "🔄" },
        { name: "DVC", icon: "📊" }
      ]
    }
  ];

  return (
    <div
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 30%, #16213e 60%, #0f3460 100%)',
        color: '#ffffff',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Enhanced Animated Background */}
      {isClient && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `
              radial-gradient(circle at ${mousePosition.x * 0.1}px ${mousePosition.y * 0.1}px, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(239, 68, 68, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 60% 90%, rgba(251, 191, 36, 0.15) 0%, transparent 50%)
            `,
            pointerEvents: 'none',
            zIndex: 0,
            animation: 'pulse 6s ease-in-out infinite',
          }}
        />
      )}

      {/* Enhanced Floating particles with ML/AI icons */}
      {isClient && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        >
          {/* Colorful geometric particles */}
          {particles.map((particle) => (
            <div
              key={particle.id}
              style={{
                position: 'absolute',
                width: `${particle.width}px`,
                height: `${particle.height}px`,
                background: particle.background,
                borderRadius: particle.borderRadius,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animation: `float ${particle.animationDuration}s ease-in-out infinite ${particle.animationDelay}s`,
                transform: `rotate(${particle.rotation}deg)`,
                boxShadow: '0 0 20px rgba(255,255,255,0.1)',
              }}
            />
          ))}
          
          {/* ML/AI/CV related emoji icons floating */}
          {emojiParticles.map((emoji) => (
            <div
              key={emoji.id}
              style={{
                position: 'absolute',
                fontSize: `${emoji.fontSize}px`,
                left: `${emoji.left}%`,
                top: `${emoji.top}%`,
                animation: `float ${emoji.animationDuration}s ease-in-out infinite ${emoji.animationDelay}s`,
                opacity: 0.4,
                filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))',
              }}
            >
              {emoji.emoji}
            </div>
          ))}
          
          {/* Additional geometric shapes */}
          {geoShapes.map((shape) => (
            <div
              key={shape.id}
              style={{
                position: 'absolute',
                width: `${shape.width}px`,
                height: `${shape.height}px`,
                border: shape.border,
                borderRadius: shape.borderRadius,
                left: `${shape.left}%`,
                top: `${shape.top}%`,
                animation: `float ${shape.animationDuration}s ease-in-out infinite ${shape.animationDelay}s`,
                transform: `rotate(${shape.rotation}deg)`,
              }}
            />
          ))}
        </div>
      )}

      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.7; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
            25% { transform: translateY(-30px) translateX(15px); opacity: 0.8; }
            50% { transform: translateY(0px) translateX(-10px); opacity: 0.6; }
            75% { transform: translateY(15px) translateX(-15px); opacity: 0.9; }
          }
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.4); }
            50% { box-shadow: 0 0 60px rgba(168, 85, 247, 0.6); }
          }
          @keyframes slideInFromRight {
            0% { transform: translateX(100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          @keyframes fadeInUp {
            0% { transform: translateY(50px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          @keyframes sparkle {
            0%, 100% { transform: scale(0) rotate(0deg); opacity: 0; }
            50% { transform: scale(1.5) rotate(180deg); opacity: 1; }
          }
          @keyframes rainbow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes wiggle {
            0%, 7% { transform: rotateZ(0); }
            15% { transform: rotateZ(-15deg); }
            20% { transform: rotateZ(10deg); }
            25% { transform: rotateZ(-10deg); }
            30% { transform: rotateZ(6deg); }
            35% { transform: rotateZ(-4deg); }
            40%, 100% { transform: rotateZ(0); }
          }
          @keyframes colorShift {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
          }
          .sparkle-effect {
            position: relative;
            overflow: hidden;
          }
          .sparkle-effect::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            animation: shimmer 3s infinite;
          }
          @keyframes shimmer {
            0% { left: -100%; }
            100% { left: 100%; }
          }
        `}
      </style>

      {/* Enhanced Glassmorphism Header */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '1.5rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(15, 23, 42, 0.3)',
          backdropFilter: 'blur(25px)',
          borderBottom: '1px solid rgba(59, 130, 246, 0.3)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4, #10b981, #f59e0b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            margin: 0,
            letterSpacing: '0.02em',
            backgroundSize: '200% 200%',
            animation: 'rainbow 4s ease-in-out infinite',
          }}
        >
          💡 Welcome to my Portfolio – no cookies, just code.🚀
        </h1>

        <button
          onClick={toggleMenu}
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))',
            border: '2px solid rgba(59, 130, 246, 0.4)',
            borderRadius: '15px',
            color: '#60a5fa',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(15px)',
            boxShadow: '0 8px 25px rgba(59, 130, 246, 0.2)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.5), rgba(139, 92, 246, 0.5))';
            e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
            e.currentTarget.style.boxShadow = '0 12px 35px rgba(59, 130, 246, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))';
            e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.2)';
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </header>

      {/* Enhanced Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: '380px',
            height: '100vh',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95), rgba(51, 65, 85, 0.95))',
            backdropFilter: 'blur(30px)',
            borderLeft: '2px solid rgba(59, 130, 246, 0.4)',
            zIndex: 999,
            padding: '6rem 2rem 2rem',
            animation: 'slideInFromRight 0.5s ease-out',
            boxShadow: '-10px 0 50px rgba(0, 0, 0, 0.3)',
            overflowY: 'auto',
          }}
        >
          <div style={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h2
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: '2rem',
                marginBottom: '2rem',
                fontWeight: '800',
                backgroundSize: '200% 200%',
                animation: 'rainbow 3s ease-in-out infinite',
                flexShrink: 0,
              }}
            >
              🌟 Navigation
            </h2>
            <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingTop: '2rem' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', minHeight: 'min-content' }}>
                {[
                  { name: 'Home', key: 'home', icon: '🏠' },
                  { name: 'Education', key: 'education', icon: '🎓' },
                  { name: 'Experience', key: 'experience', icon: '💼' },
                  { name: 'Projects', key: 'projects', icon: '🚀' },
                  { name: 'Skills', key: 'skills', icon: '💪' },
                  { name: 'Publications', key: 'publications', icon: '📚' },
                  { name: 'Contact', key: 'contact', icon: '📞' }
                ].map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => navigateToSection(item.key)}
                      style={{
                        background: currentSection === item.key 
                          ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(139, 92, 246, 0.4))' 
                          : 'transparent',
                        border: '2px solid rgba(59, 130, 246, 0.3)',
                        borderRadius: '15px',
                        color: currentSection === item.key ? '#ffffff' : '#cbd5e1',
                        textDecoration: 'none',
                        fontSize: '1.1rem',
                        fontWeight: currentSection === item.key ? '700' : '500',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        padding: '1rem 1.5rem',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        backdropFilter: 'blur(15px)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.transform = 'translateX(15px) scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        if (currentSection !== item.key) {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#cbd5e1';
                          e.currentTarget.style.transform = 'translateX(0) scale(1)';
                          e.currentTarget.style.boxShadow = 'none';
                        } else {
                          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(139, 92, 246, 0.4))';
                          e.currentTarget.style.color = '#ffffff';
                          e.currentTarget.style.transform = 'translateX(0) scale(1)';
                          e.currentTarget.style.boxShadow = 'none';
                        }
                      }}
                    >
                      <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Home Section */}
      {currentSection === 'home' && (
        <main
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '6rem 2rem 2rem',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 10,
            background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
          }}
        >
          <>
            <div
              style={{
                marginBottom: '3rem',
                position: 'relative',
                animation: 'fadeInUp 1s ease-out',
              }}
            >
              {isClient && [
                { icon: '🤖', angle: 0, radius: 200, delay: 0, color: '#3b82f6' },
                { icon: '📊', angle: 45, radius: 180, delay: 0.5, color: '#8b5cf6' },
                { icon: '🧠', angle: 90, radius: 190, delay: 1, color: '#10b981' },
                { icon: '💻', angle: 135, radius: 200, delay: 1.5, color: '#f59e0b' },
                { icon: '🚀', angle: 180, radius: 185, delay: 2, color: '#ef4444' },
                { icon: '⚡', angle: 225, radius: 195, delay: 2.5, color: '#06b6d4' },
                { icon: '🔬', angle: 270, radius: 190, delay: 3, color: '#8b5cf6' },
                { icon: '🎯', angle: 315, radius: 185, delay: 3.5, color: '#10b981' },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    fontSize: '2.5rem',
                    left: `${50 + Math.cos((item.angle * Math.PI) / 180) * (item.radius / 4)}%`,
                    top: `${50 + Math.sin((item.angle * Math.PI) / 180) * (item.radius / 4)}%`,
                    transform: 'translate(-50%, -50%)',
                    animation: `float ${4 + i * 0.5}s ease-in-out infinite ${item.delay}s`,
                    opacity: 0.8,
                    filter: `drop-shadow(0 0 15px ${item.color})`,
                    zIndex: 1,
                  }}
                >
                  {item.icon}
                </div>
              ))}
              
              <div
                style={{
                  position: 'absolute',
                  top: '-25px',
                  left: '-25px',
                  right: '-25px',
                  bottom: '-25px',
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4, #10b981, #f59e0b, #ef4444)',
                  borderRadius: '25px',
                  animation: 'glow 4s ease-in-out infinite, rainbow 6s ease-in-out infinite',
                  filter: 'blur(15px)',
                  opacity: 0.8,
                  backgroundSize: '400% 400%',
                }}
              />
              <img
                src="/IMG_1367.jpeg"
                alt="Dhinesh's Photo"
                style={{
                  width: '350px',
                  height: '350px',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  border: '4px solid rgba(255, 255, 255, 0.2)',
                  position: 'relative',
                  zIndex: 2,
                  transition: 'transform 0.4s ease',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.08) rotate(3deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                }}
              />
            </div>

            <div
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15), rgba(16, 185, 129, 0.15))',
                border: '2px solid rgba(59, 130, 246, 0.4)',
                borderRadius: '60px',
                padding: '1rem 2.5rem',
                marginBottom: '2rem',
                backdropFilter: 'blur(20px)',
                animation: 'fadeInUp 1s ease-out 0.2s both',
                boxShadow: '0 15px 40px rgba(59, 130, 246, 0.2)',
              }}
            >
              <p
                style={{
                  fontSize: '1.3rem',
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #10b981, #f59e0b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  margin: 0,
                  fontWeight: '700',
                  letterSpacing: '0.05em',
                  backgroundSize: '200% 200%',
                  animation: 'rainbow 5s ease-in-out infinite',
                }}
              >
                🎨 Data Scientist & Machine Learning Engineer 🚀
              </p>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4, #10b981, #f59e0b, #ef4444)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                margin: '0 0 2rem 0',
                lineHeight: '1.1',
                textShadow: '0 0 60px rgba(59, 130, 246, 0.4)',
                backgroundSize: '300% 300%',
                animation: 'fadeInUp 1s ease-out 0.4s both, rainbow 4s ease-in-out infinite',
                fontFamily: "theme-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
              }}
            >
              👋 I'm Dhinesh Sadhu Subramaniam Ponnarasan 🚀
            </h1>

            <div
              style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.4), rgba(30, 41, 59, 0.4))',
                backdropFilter: 'blur(20px)',
                border: '2px solid rgba(59, 130, 246, 0.3)',
                borderRadius: '25px',
                padding: '2.5rem',
                marginBottom: '3rem',
                animation: 'fadeInUp 1s ease-out 0.6s both',
                boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
              }}
            >
              <h2 style={{ margin: '0 0 2rem 0', fontWeight: '700', fontSize: '1.5rem', color: '#fff' }}>
                <span style={{ color: 'ButtonHighlight' }}>✨</span>Bringing Order to Data Chaos Since… a Few Semesters Ago✨
              </h2>
              <p
                style={{
                  fontSize: '1.3rem',
                  background: 'linear-gradient(135deg, #e2e8f0, #cbd5e1, #94a3b8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: '1.8',
                  maxWidth: '700px',
                  margin: 0,
                  fontWeight: '500',
                }}
              >
                🌟 I'm a detail-oriented graduate student specializing in Information Systems with a focus
                on Applied Data Science. I have a solid foundation in statistical modeling, data mining,
                and real-time machine learning systems.
                <br />
                <br />
                🚀 My experience spans across developing scalable ML pipelines, deploying deep learning
                APIs, and building end-to-end data platforms. I'm also a published IEEE author, and I
                enjoy solving real-world problems through a mix of coding, visualization, and
                storytelling with data.
                <br />
                <br />
                💡 Outside of work, I actively contribute to open-source projects, collaborate on research,
                and constantly explore innovations in AI and big data.
              </p>
            </div>

            <div style={{ position: 'relative', marginBottom: '3rem' }}>
              <a
                href="/Dhinesh_Resume.pdf"
                download
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1rem',
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '1.5rem 4rem',
                  fontSize: '1.2rem',
                  fontWeight: '800',
                  textDecoration: 'none',
                  borderRadius: '60px',
                  letterSpacing: '0.05em',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  animation: 'fadeInUp 1s ease-out 0.8s both',
                  boxShadow: '0 15px 40px rgba(59, 130, 246, 0.4)',
                  backgroundSize: '200% 200%',
                }}
                className="sparkle-effect"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.08)';
                  e.currentTarget.style.boxShadow = '0 25px 60px rgba(59, 130, 246, 0.5)';
                  e.currentTarget.style.animation = 'wiggle 1s ease-in-out, rainbow 2s ease-in-out infinite';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(59, 130, 246, 0.4)';
                  e.currentTarget.style.animation = 'fadeInUp 1s ease-out 0.8s both';
                }}
              >
                <span>📥 DOWNLOAD CV</span>
                <span style={{ fontSize: '1.5rem', transition: 'transform 0.3s ease' }}>🚀</span>
              </a>
              
              {/* Enhanced floating sparkles around button */}
              {isClient && [...Array(8)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    width: '6px',
                    height: '6px',
                    background: ['#fbbf24', '#f59e0b', '#3b82f6', '#8b5cf6'][i % 4],
                    borderRadius: '50%',
                    left: `${15 + i * 12}%`,
                    top: `${15 + (i % 3) * 35}%`,
                    animation: `sparkle ${2 + i * 0.3}s ease-in-out infinite ${i * 0.2}s`,
                  }}
                />
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                gap: '2rem',
                justifyContent: 'center',
                alignItems: 'center',
                animation: 'fadeInUp 1s ease-out 1s both',
              }}
            >
              {[
                { 
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  ), 
                  url: 'https://github.com/DhineshPonnarasan', 
                  label: 'GitHub',
                  gradient: 'linear-gradient(135deg, #24292e, #586069, #6f42c1)'
                },
                { 
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ), 
                  url: 'https://www.linkedin.com/in/dhinesh-s-p', 
                  label: 'LinkedIn',
                  gradient: 'linear-gradient(135deg, #0077b5, #00a0dc, #0e76a8)'
                },
                { 
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  ), 
                  url: 'mailto:dhineshponnarasan@gmail.com', 
                  label: 'Email',
                  gradient: 'linear-gradient(135deg, #ea4335, #fbbc04, #34a853)'
                },
                { 
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                    </svg>
                  ), 
                  url: 'https://leetcode.com/u/Dhinesh_Ponnarasan/', 
                  label: 'LeetCode',
                  gradient: 'linear-gradient(135deg, #ffa116, #f57c00, #ff6f00)'
                },
                { 
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  ), 
                  url: 'tel:+1-607-312-8610', 
                  label: 'Phone',
                  gradient: 'linear-gradient(135deg, #34d399, #10b981, #059669)'
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '70px',
                    height: '70px',
                    background: social.gradient,
                    borderRadius: '50%',
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    textDecoration: 'none',
                    transition: 'all 0.4s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                    border: '3px solid rgba(255,255,255,0.2)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px) scale(1.15) rotate(5deg)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.4)';
                    e.currentTarget.style.filter = 'brightness(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1) rotate(0deg)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';
                    e.currentTarget.style.filter = 'brightness(1)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </>
        </main>
      )}

      {/* Enhanced Education Section */}
      {currentSection === 'education' && (
        <main style={{ 
          padding: '8rem 2rem 4rem', 
          maxWidth: '1200px', 
          margin: '0 auto', 
          minHeight: '100vh', 
          position: 'relative', 
          zIndex: 10,
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(59, 130, 246, 0.05))'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', 
            background: 'linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textAlign: 'center', 
            marginBottom: '4rem',
            fontWeight: '900',
            backgroundSize: '200% 200%',
            animation: 'rainbow 4s ease-in-out infinite',
            textShadow: '0 0 40px rgba(16, 185, 129, 0.3)',
          }}>
            🎓 My Educational Adventure 🌟
          </h1>
          {[
            {
              degree: 'Master of Science in Information Systems',
              specialization: 'Applied Data Science',
              institution: 'State University of New York at Binghamton',
              location: 'Binghamton, New York',
              duration: '2024 – Present',
              description: 'Specializing in Machine Learning, Big Data Analytics, and Statistical Modeling. Focus on real-time ML systems and data-driven decision making.',
              achievements: ['🔬 Research in Quantum Deep Learning', '📚 Published IEEE Author', '🎓 Student Worker'],
              gpa: '3.64/4.0'
            },
            {
              degree: 'Post Graduate Diploma in Data Science',
              specialization: 'Data Science',
              institution: 'Vellore Institute of Technology',
              location: 'Bangalore, India',
              duration: '2023 – 2024',
              description: 'Strong foundation in Python, Artificial Intelligence and Big Data. Specialized in Machine Learning, Deep Learning and Computer Vision applications.',
              achievements: ['📊 Advanced ML Projects', '🔮 Computer Vision Expertise', '🚀 Big Data Analytics'],
              gpa: '3.36/4.0'
            },
            {
              degree: 'Bachelors in Computer Applications',
              specialization: 'Computer Science',
              institution: 'Sri Krishna Arts and Science College',
              location: 'Coimbatore, India',
              duration: '2019 – 2022',
              description: 'Strong foundation in algorithms, data structures and software engineering. Specialized in Mathematical and Problem Solving.',
              achievements: ['🔬 IEEE Research Publications', '🌐 IoT and Open Source Projects', '💻 IIT Hackathon Participant'],
              gpa: '3.20/4.0'
            }
          ].map((edu, index) => (
            <div
              key={index}
              style={{
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(51, 65, 85, 0.7), rgba(71, 85, 105, 0.6))',
                backdropFilter: 'blur(25px)',
                border: '2px solid rgba(59, 130, 246, 0.4)',
                padding: '3.5rem',
                borderRadius: '25px',
                marginBottom: '2.5rem',
                boxShadow: '0 15px 50px rgba(0,0,0,0.3)',
                transition: 'all 0.4s ease',
                animation: `fadeInUp 0.8s ease-out ${index * 0.3}s both`,
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px) scale(1.03)';
                e.currentTarget.style.boxShadow = '0 25px 70px rgba(59, 130, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(0,0,0,0.3)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.8rem', color: '#f8fafc', fontWeight: '800' }}>
                    ✨ {edu.degree}
                  </h3>
                  <p style={{ 
                    margin: '0 0 0.5rem 0', 
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #10b981)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    backgroundSize: '200% 200%',
                    animation: 'rainbow 3s ease-in-out infinite',
                  }}>
                    🎯 {edu.specialization}
                  </p>
                </div>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(52, 211, 153, 0.3))',
                  color: '#34d399',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  fontWeight: '700',
                  border: '2px solid rgba(52, 211, 153, 0.4)',
                  boxShadow: '0 8px 25px rgba(16, 185, 129, 0.2)',
                }}>
                  📊 GPA: {edu.gpa}
                </div>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ margin: '0 0 0.5rem 0', color: '#60a5fa', fontSize: '1.3rem', fontWeight: '700' }}>
                  🏛️ {edu.institution}
                </p>
                <p style={{ margin: '0 0 0.5rem 0', color: '#94a3b8', fontSize: '1.1rem', fontWeight: '600' }}>
                  📍 {edu.location} • ⏰ {edu.duration}
                </p>
              </div>
              
              <p style={{ margin: '0 0 2rem 0', color: '#e2e8f0', lineHeight: '1.8', fontSize: '1.1rem', fontWeight: '500' }}>
                {edu.description}
              </p>
              
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ 
                  margin: '0 0 1.5rem 0', 
                  background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontSize: '1.2rem', 
                  fontWeight: '700'
                }}>
                  🏆 Key Achievements:
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {edu.achievements.map((achievement, i) => (
                    <span
                      key={i}
                      style={{
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(168, 85, 247, 0.3))',
                        color: '#a78bfa',
                        padding: '8px 16px',
                        borderRadius: '25px',
                        fontSize: '0.9rem',
                        border: '2px solid rgba(139, 92, 246, 0.4)',
                        fontWeight: '600',
                        boxShadow: '0 5px 15px rgba(139, 92, 246, 0.2)',
                      }}
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </main>
      )}

      {/* Enhanced Experience Section */}
      {currentSection === 'experience' && (
        <main style={{ 
          padding: '8rem 2rem 4rem', 
          maxWidth: '1200px', 
          margin: '0 auto', 
          minHeight: '100vh', 
          position: 'relative', 
          zIndex: 10,
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(59, 130, 246, 0.05))'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', 
            background: 'linear-gradient(135deg, #8b5cf6, #3b82f6, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textAlign: 'center', 
            marginBottom: '4rem',
            fontWeight: '900',
            backgroundSize: '200% 200%',
            animation: 'rainbow 4s ease-in-out infinite',
            textShadow: '0 0 40px rgba(139, 92, 246, 0.3)',
          }}>
            💼 Professional Journey 🚀
          </h1>
          {[
            {
              role: 'Data Analyst',
              company: 'Afame Technologies',
              duration: 'Jan 2024 – March 2024',
              description: 'Working on audio intelligence by converting call recordings into summarized text, detecting PII using Azure AI, and building customer sentiment analytics dashboards.',
              skills: ['🤖 Azure AI', '💬 NLP', '🐍 Python', '📊 Analytics', '🔊 Audio Processing']
            },
            {
              role: 'Machine Learning Engineer',
              company: 'Cube Corpsol Solutions Private Limited',
              duration: 'Aug 2022 – May 2023',
              description: 'Assisted in research involving generative AI, built LLM pipelines, and contributed to multi-modal projects involving vision-language models.',
              skills: ['🧠 Generative AI', '🔗 LLM', '🔬 Research', '👁️ Vision-Language Models', '⚙️ ML Pipelines']
            },
            {
              role: 'E-commerce Developer Intern',
              company: 'Tensorflow Addons Organization, Sri Krishna Arts and Science College',
              duration: 'Nov 2022 – March 2023',
              description: 'Developed and maintained full-stack web modules using HTML, CSS, JavaScript, and Flask. Automated product listings and improved catalog search UX.',
              skills: ['🌶️ Flask', '💻 JavaScript', '🔧 Full-Stack', '🎨 UX Design', '🛒 E-commerce']
            },
          ].map((exp, index) => (
            <div
              key={index}
              style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(59, 130, 246, 0.15), rgba(30, 41, 59, 0.8))',
                backdropFilter: 'blur(25px)',
                border: '2px solid rgba(139, 92, 246, 0.4)',
                padding: '3rem',
                borderRadius: '25px',
                marginBottom: '2.5rem',
                boxShadow: '0 15px 50px rgba(139, 92, 246, 0.2)',
                transition: 'all 0.4s ease',
                animation: `fadeInUp 0.8s ease-out ${index * 0.3}s both`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 25px 70px rgba(139, 92, 246, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(139, 92, 246, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
              }}
            >
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.8rem', color: '#f8fafc', fontWeight: '800' }}>
                ✨ {exp.role} @ <span style={{ 
                  background: 'linear-gradient(135deg, #8b5cf6, #3b82f6, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  backgroundSize: '200% 200%',
                  animation: 'rainbow 3s ease-in-out infinite',
                }}>{exp.company}</span>
              </h3>
              <p style={{ margin: '0.5rem 0 1.5rem 0', color: '#94a3b8', fontSize: '1.2rem', fontWeight: '600' }}>⏰ {exp.duration}</p>
              <p style={{ margin: '0 0 2rem 0', color: '#e2e8f0', lineHeight: '1.8', fontSize: '1.1rem', fontWeight: '500' }}>{exp.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    style={{
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))',
                      color: '#60a5fa',
                      padding: '8px 16px',
                      borderRadius: '25px',
                      fontSize: '0.9rem',
                      border: '2px solid rgba(59, 130, 246, 0.4)',
                      fontWeight: '600',
                      boxShadow: '0 5px 15px rgba(59, 130, 246, 0.2)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </main>
      )}

      {/* Enhanced Projects Section */}
      {currentSection === 'projects' && (
        <main style={{ 
          padding: '8rem 2rem 4rem', 
          maxWidth: '1400px', 
          margin: '0 auto', 
          minHeight: '100vh', 
          position: 'relative', 
          zIndex: 10,
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(239, 68, 68, 0.05))'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', 
            background: 'linear-gradient(135deg, #3b82f6, #ef4444, #f59e0b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textAlign: 'center', 
            marginBottom: '4rem',
            fontWeight: '900',
            backgroundSize: '200% 200%',
            animation: 'rainbow 4s ease-in-out infinite',
            textShadow: '0 0 40px rgba(59, 130, 246, 0.3)',
          }}>
            🚀 My Coolest Creations 💡
          </h1>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', 
            gap: '2.5rem',
            marginBottom: '3rem' 
          }}>
            {[
              {
                title: "🧬 Blood Group Detection using Fingerprint with Quantum Deep Learning",
                skills: ["Quantum Computing", "Deep Learning", "CNN", "Qiskit", "Python", "Image Processing"],
                description: [
                  "• Built a quantum-enhanced CNN model achieving 98% accuracy in blood group classification using fingerprint pattern analysis",
                  "• Integrated Qiskit quantum circuits with classical image processing pipelines for novel biometric feature extraction",
                  "• Developed non-invasive alternative to traditional blood testing, reducing time from hours to seconds"
                ],
                color: 'rgba(168, 85, 247, 0.2)'
              },
              {
                title: "🔍 Real-Time Fraud Detection with Big Data Pipeline",
                skills: ["Apache Kafka", "Spark", "Scala", "Cassandra", "MLlib", "Microservices"],
                description: [
                  "• Engineered scalable ML pipeline processing 5M+ transactions daily with sub-100ms latency using Kafka and Spark Streaming",
                  "• Implemented ensemble fraud detection models achieving 94% precision and reducing false positives by 60%",
                  "• Built automated alert system with real-time dashboards saving $2M+ annually in fraud prevention"
                ],
                color: 'rgba(239, 68, 68, 0.2)'
              },
              {
                title: "🚗 Autonomous Vehicle Object Detection & Tracking",
                skills: ["YOLO", "OpenCV", "ROS", "Real-time Inference", "Python", "Computer Vision"],
                description: [
                  "• Developed real-time object detection system using YOLOv8 achieving 45 FPS on edge devices for autonomous navigation",
                  "• Implemented multi-object tracking with Kalman filters for distance estimation and collision prediction accuracy of 92%",
                  "• Optimized inference pipeline reducing computational overhead by 40% while maintaining detection accuracy"
                ],
                color: 'rgba(16, 185, 129, 0.15)'
              },
              {
                title: "📊 Distributed Social Media Analytics Platform",
                skills: ["Hadoop", "Spark", "NLP", "Elasticsearch", "Docker", "React", "Kubernetes"],
                description: [
                  "• Built distributed platform analyzing 10M+ social media posts daily using Hadoop and Spark for real-time sentiment analysis",
                  "• Implemented NLP models with BERT for trend prediction achieving 87% accuracy in viral content identification",
                  "• Created interactive React dashboards with Elasticsearch enabling real-time insights for marketing teams"
                ],
                color: 'rgba(6, 182, 212, 0.15)'
              },
              {
                title: "🩻 Medical Imaging Diagnosis API (X-rays & CT)",
                skills: ["TensorFlow", "Transfer Learning", "FastAPI", "Docker", "PostgreSQL"],
                description: [
                  "• Developed production-ready API using FastAPI and CNN models for automated medical image analysis with 91% diagnostic accuracy",
                  "• Implemented transfer learning with ResNet50 for X-ray and CT scan classification supporting 15+ medical conditions",
                  "• Deployed containerized microservices with Docker handling 1000+ API requests per minute with comprehensive logging"
                ],
                color: 'rgba(251, 191, 36, 0.15)'
              },
              {
                title: "🛒 E-Commerce Recommendation Engine with MLOps",
                skills: ["MLflow", "Collaborative Filtering", "Spark", "CI/CD", "Jenkins", "AWS"],
                description: [
                  "• Designed hybrid recommendation system using collaborative filtering and deep learning serving 50K+ daily active users",
                  "• Implemented complete MLOps pipeline with MLflow, automated A/B testing, and model monitoring increasing CTR by 35%",
                  "• Built scalable serving infrastructure on AWS with Jenkins CI/CD enabling real-time personalized recommendations"
                ],
                color: 'rgba(139, 92, 246, 0.15)'
              },
              {
                title: "🔍 Industrial Vision-Based Quality Control System",
                skills: ["OpenCV", "Edge Computing", "TensorFlow Lite", "Python", "IoT"],
                description: [
                  "• Deployed computer vision system on edge devices for automated defect detection in manufacturing with 96% accuracy",
                  "• Optimized TensorFlow Lite models for real-time inference on Raspberry Pi reducing inspection time by 80%",
                  "• Integrated IoT sensors and automated alerts system preventing 500+ defective products from reaching customers"
                ],
                color: 'rgba(34, 197, 94, 0.15)'
              },
              {
                title: "📈 Large-Scale Time Series Forecasting Platform",
                skills: ["Prophet", "LSTM", "Spark", "Kubernetes", "Monitoring", "Python"],
                description: [
                  "• Developed distributed forecasting engine capable of predicting 10,000+ time series simultaneously using Prophet and LSTM",
                  "• Built cloud-native architecture on Kubernetes with auto-scaling handling seasonal demand spikes of 300% traffic",
                  "• Achieved 15% improvement in forecast accuracy using ensemble methods with comprehensive monitoring and alerting"
                ],
                color: 'rgba(245, 158, 11, 0.15)'
              },
              {
                title: "🎥 Intelligent Video Analytics System",
                skills: ["Computer Vision", "OpenCV", "FFmpeg", "Anomaly Detection", "AWS"],
                description: [
                  "• Implemented video analysis pipeline processing 500+ hours of footage daily for action recognition and anomaly detection",
                  "• Built automated video summarization using scene detection and object tracking reducing review time by 75%",
                  "• Deployed on AWS with serverless architecture using Lambda and S3 for cost-effective large-scale video processing"
                ],
                color: 'rgba(239, 68, 68, 0.15)'
              },
              {
                title: "🌐 Real-Time IoT ML Platform for Predictive Maintenance",
                skills: ["Kafka", "Spark Streaming", "Docker", "Anomaly Detection", "Microservices"],
                description: [
                  "• Built IoT platform ingesting 1M+ sensor data points per minute using Kafka for real-time predictive maintenance",
                  "• Implemented anomaly detection algorithms reducing equipment downtime by 45% and maintenance costs by $500K annually",
                  "• Designed microservices architecture with Docker enabling horizontal scaling and 99.9% system availability"
                ],
                color: 'rgba(6, 182, 212, 0.15)'
              }
            ].map((proj, idx) => (
              <div
                key={idx}
                style={{
                  background: `linear-gradient(135deg, ${proj.color}, rgba(30, 41, 59, 0.8))`,
                  backdropFilter: 'blur(25px)',
                  border: '2px solid rgba(59, 130, 246, 0.4)',
                  padding: '3rem',
                  borderRadius: '25px',
                  marginBottom: '2rem',
                  boxShadow: '0 15px 50px rgba(0,0,0,0.3)',
                  transition: 'all 0.4s ease',
                  animation: `fadeInUp 0.8s ease-out ${idx * 0.1}s both`,
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 25px 70px rgba(59, 130, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 15px 50px rgba(0,0,0,0.3)';
                }}
              >
                <h3 style={{ margin: '0 0 1.5rem 0', color: '#f8fafc', fontSize: '1.5rem', lineHeight: '1.4', fontWeight: '800' }}>
                  {proj.title}
                </h3>
                <div style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {proj.skills.map((skill, i) => (
                    <span
                      key={i}
                      style={{
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))',
                        color: '#60a5fa',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        border: '2px solid rgba(59, 130, 246, 0.4)',
                        fontWeight: '600',
                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div style={{ margin: 0, color: '#e2e8f0', lineHeight: '1.7' }}>
                  {proj.description.map((point, i) => (
                    <p key={i} style={{ margin: '0.75rem 0', fontSize: '1.05rem', fontWeight: '500' }}>
                      {point}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* Enhanced Skills Section */}
      {currentSection === 'skills' && (
        <main style={{ 
          padding: '8rem 2rem 4rem', 
          maxWidth: '1300px', 
          margin: '0 auto', 
          minHeight: '100vh', 
          position: 'relative', 
          zIndex: 10,
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.05), rgba(139, 92, 246, 0.05))'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', 
            background: 'linear-gradient(135deg, #f59e0b, #8b5cf6, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textAlign: 'center', 
            marginBottom: '4rem',
            fontWeight: '900',
            backgroundSize: '200% 200%',
            animation: 'rainbow 4s ease-in-out infinite',
            textShadow: '0 0 40px rgba(251, 191, 36, 0.3)',
          }}>
            💪 My Tech Arsenal 🔥
          </h1>
          {skillsData.map((group, i) => (
            <div key={i} style={{ 
              marginBottom: '4rem',
              animation: `fadeInUp 0.8s ease-out ${i * 0.15}s both`
            }}>
              <h3 
                style={{ 
                  background: 'linear-gradient(135deg, #f59e0b, #8b5cf6, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontSize: '1.8rem',
                  marginBottom: '2rem',
                  fontWeight: '800',
                  textAlign: 'center',
                  backgroundSize: '200% 200%',
                  animation: 'rainbow 3s ease-in-out infinite',
                }}
              >
                ✨ {group.role}
              </h3>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '15px',
                justifyContent: 'center'
              }}>
                {group.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(51, 65, 85, 0.7), rgba(71, 85, 105, 0.6))',
                      backdropFilter: 'blur(25px)',
                      color: '#e2e8f0',
                      padding: '14px 22px',
                      borderRadius: '30px',
                      border: '2px solid rgba(251, 191, 36, 0.4)',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      transition: 'all 0.4s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'default',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(251, 191, 36, 0.4), rgba(139, 92, 246, 0.4))';
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.transform = 'translateY(-8px) scale(1.08)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(251, 191, 36, 0.3)';
                      e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(51, 65, 85, 0.7), rgba(71, 85, 105, 0.6))';
                      e.currentTarget.style.color = '#e2e8f0';
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                      e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.4)';
                    }}
                  >
                    <span style={{ 
                      fontSize: '1.2rem',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      {skill.icon}
                    </span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </main>
      )}

      {/* Enhanced Publications Section */}
      {currentSection === 'publications' && (
        <main style={{ 
          padding: '8rem 2rem 4rem', 
          maxWidth: '1200px', 
          margin: '0 auto', 
          minHeight: '100vh', 
          position: 'relative', 
          zIndex: 10,
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.05), rgba(59, 130, 246, 0.05))'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', 
            background: 'linear-gradient(135deg, #22c55e, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textAlign: 'center', 
            marginBottom: '4rem',
            fontWeight: '900',
            backgroundSize: '200% 200%',
            animation: 'rainbow 4s ease-in-out infinite',
            textShadow: '0 0 40px rgba(34, 197, 94, 0.3)',
          }}>
            📚 Research Publications 🔬
          </h1>
          {[
            {
              title: "Collaborative Search With Knowledge Sharing And Summarization",
              conference: "2024 4th International Conference on Sustainable Expert Systems (ICSES)",
              publisher: "Institute of Electrical and Electronics Engineers",
              link: "https://ieeexplore.ieee.org/document/10763244",
              desc: "An innovative system combining collaborative search with graph-based summarization using MIS theory and eigenvector centrality.",
              year: "2024"
            },
            {
              title: "Image to Audio Conversion to Aid Visually Impaired People by CNN",
              conference: "2023 4th International Conference on Electronics and Sustainable Communication Systems (ICESC)",
              publisher: "Institute of Electrical and Electronics Engineers",
              link: "https://ieeexplore.ieee.org/document/10193308",
              desc: "CNN-based system that converts real-time images into descriptive audio to assist visually impaired individuals.",
              year: "2023"
            }
          ].map((pub, i) => (
            <div
              key={i}
              style={{
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(59, 130, 246, 0.15), rgba(30, 41, 59, 0.8))',
                backdropFilter: 'blur(25px)',
                border: '2px solid rgba(34, 197, 94, 0.4)',
                padding: '3rem',
                borderRadius: '25px',
                marginBottom: '2.5rem',
                boxShadow: '0 15px 50px rgba(34, 197, 94, 0.2)',
                transition: 'all 0.4s ease',
                animation: `fadeInUp 0.8s ease-out ${i * 0.3}s both`,
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 25px 70px rgba(34, 197, 94, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(34, 197, 94, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.4)';
              }}
            >
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: '700',
                boxShadow: '0 8px 25px rgba(34, 197, 94, 0.4)',
              }}>
                📅 {pub.year}
              </div>
              <h3 style={{ margin: '0 0 1rem 0', color: '#f8fafc', fontSize: '1.6rem', fontWeight: '800', paddingRight: '100px' }}>
                📖 {pub.title}
              </h3>
              <p style={{ 
                margin: '0.5rem 0 0.5rem 0', 
                background: 'linear-gradient(135deg, #22c55e, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700',
                fontSize: '1.2rem',
                backgroundSize: '200% 200%',
                animation: 'rainbow 3s ease-in-out infinite',
              }}>
                🏛️ {pub.conference}
              </p>
              <p style={{ 
                margin: '0.25rem 0 1.5rem 0', 
                color: '#94a3b8',
                fontSize: '1rem',
                fontWeight: '600'
              }}>
                📋 Publisher: {pub.publisher}
              </p>
              <p style={{ margin: '1rem 0 2.5rem 0', color: '#e2e8f0', lineHeight: '1.7', fontSize: '1.1rem', fontWeight: '500' }}>
                {pub.desc}
              </p>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #22c55e, #3b82f6)',
                  color: '#ffffff',
                  padding: '14px 28px',
                  borderRadius: '60px',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '700',
                  transition: 'all 0.4s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 8px 25px rgba(34, 197, 94, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(34, 197, 94, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(34, 197, 94, 0.3)';
                }}
              >
                🔗 View Publication
              </a>
            </div>
          ))}
        </main>
      )}

      {/* Enhanced Contact Section */}
      {currentSection === 'contact' && (
        <main style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: '100vh', 
          padding: '8rem 2rem 4rem', 
          textAlign: 'center',
          position: 'relative',
          zIndex: 10,
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.05), rgba(59, 130, 246, 0.05))'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', 
            background: 'linear-gradient(135deg, #a855f7, #3b82f6, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '2rem',
            fontWeight: '900',
            backgroundSize: '200% 200%',
            animation: 'rainbow 4s ease-in-out infinite',
            textShadow: '0 0 40px rgba(168, 85, 247, 0.3)',
          }}>
            🤝 Let's Connect! 🌟
          </h1>
          <p style={{ 
            fontSize: '1.4rem', 
            background: 'linear-gradient(135deg, #e2e8f0, #cbd5e1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '4rem', 
            maxWidth: '700px',
            lineHeight: '1.6',
            fontWeight: '500'
          }}>
            Feel free to reach out for collaborations, opportunities or just to say hello! I promise I'm more fun than my code comments 😄
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem', 
            width: '100%',
            maxWidth: '900px',
            justifyItems: 'center'
          }}>
            {[
              { 
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                ), 
                label: 'Email', 
                value: 'dhineshponnarasan@gmail.com', 
                link: 'mailto:dhineshponnarasan@gmail.com',
                gradient: 'linear-gradient(135deg, #ea4335, #fbbc04, #34a853)'
              },
              { 
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                ), 
                label: 'Phone', 
                value: '+1 (607) 312-8610', 
                link: 'tel:+1-607-312-8610',
                gradient: 'linear-gradient(135deg, #34d399, #10b981, #059669)'
              },
              { 
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ), 
                label: 'LinkedIn', 
                value: 'dhinesh-s-p', 
                link: 'https://www.linkedin.com/in/dhinesh-s-p',
                gradient: 'linear-gradient(135deg, #0077b5, #00a0dc, #0e76a8)'
              },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1.5rem',
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(51, 65, 85, 0.7))',
                  backdropFilter: 'blur(25px)',
                  padding: '3rem 2rem',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  color: '#e2e8f0',
                  border: '2px solid rgba(168, 85, 247, 0.4)',
                  transition: 'all 0.4s ease',
                  boxShadow: '0 15px 50px rgba(0,0,0,0.3)',
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`,
                  minWidth: '280px',
                  maxWidth: '320px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = contact.gradient;
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 25px 70px rgba(168, 85, 247, 0.4)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(51, 65, 85, 0.7))';
                  e.currentTarget.style.color = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 15px 50px rgba(0,0,0,0.3)';
                  e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.4)';
                }}
              >
                <div style={{ 
                  fontSize: '3rem', 
                  background: contact.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {contact.icon}
                </div>
                <div>
                  <p style={{ 
                    margin: '0 0 0.5rem 0', 
                    fontSize: '1.3rem',
                    fontWeight: '700'
                  }}>
                    {contact.label}
                  </p>
                  <p style={{ margin: 0, fontSize: '1.05rem', opacity: 0.9, fontWeight: '500' }}>
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </main>
      )}
      <p
        style={{
          marginTop: '4rem',
          textAlign: 'center',
          fontSize: '1rem',
          fontStyle: 'initial',
          color: '#cbd5e1',
          opacity: 0.85,
          fontFamily: 'cursive',
        }}
      >
        ~<span style={{ color: '#f43f5e' }}>💻 </span><strong>Every bug you fix makes you stronger❤️.</strong>
      </p>

    </div>
  );
}