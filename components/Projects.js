const projects = [
  {
    title: "🧬 Blood Group Detection using Fingerprint with Quantum Deep Learning",
    skills: ["Quantum Computing", "Deep Learning", "CNN", "Qiskit", "Python", "Image Processing"],
    desc: "Built a quantum-enhanced CNN model for blood group classification using fingerprint patterns. Integrated Qiskit with classical image pipelines for novel biometric analysis."
  },
  {
    title: "🔍 Real-Time Fraud Detection with Big Data Pipeline",
    skills: ["Kafka", "Spark", "Scala", "Cassandra", "MLlib", "Microservices"],
    desc: "Developed a scalable ML pipeline processing millions of transactions in real-time using Apache Kafka and Spark, enabling live fraud detection and automatic alerts."
  },
  {
    title: "🚗 Autonomous Vehicle Object Detection & Tracking",
    skills: ["YOLO", "OpenCV", "ROS", "Real-time Inference", "Python", "Computer Vision"],
    desc: "Engineered a real-time object detection and multi-object tracking system for self-driving vehicles, optimizing edge inference speed and spatial localization."
  },
  {
    title: "📊 Distributed Social Media Analytics Platform",
    skills: ["Hadoop", "Spark", "NLP", "Elasticsearch", "Docker", "React", "Kubernetes"],
    desc: "Built a distributed platform for real-time sentiment analysis and social trend prediction using large-scale data ingestion, NLP, and interactive dashboards."
  },
  {
    title: "🩻 Medical Imaging Diagnosis API (X-rays & CT)",
    skills: ["TensorFlow", "Transfer Learning", "FastAPI", "Docker", "PostgreSQL"],
    desc: "Built a secure API using FastAPI and CNN models to classify and diagnose medical images, with full Docker deployment, batch support, and RESTful endpoints."
  },
  {
    title: "🛒 E-Commerce Recommendation Engine with MLOps",
    skills: ["MLflow", "Collaborative Filtering", "Spark", "CI/CD", "Jenkins", "AWS"],
    desc: "Designed a real-time recommendation engine with auto-retraining, monitoring, and scalable serving using Jenkins pipelines and Spark MLlib."
  },
  {
    title: "🔍 Industrial Vision-Based Quality Control System",
    skills: ["OpenCV", "Edge Computing", "TensorFlow Lite", "Python", "IoT"],
    desc: "Deployed a computer vision system on edge devices for defect detection and automated quality assurance in manufacturing lines using real-time alerts."
  },
  {
    title: "📈 Large-Scale Time Series Forecasting Platform",
    skills: ["Prophet", "LSTM", "Spark", "Kubernetes", "Monitoring", "Python"],
    desc: "Developed a time series prediction engine capable of forecasting 10K+ metrics simultaneously using distributed computing and cloud-native architecture."
  },
  {
    title: "🎥 Intelligent Video Analytics System",
    skills: ["Computer Vision", "OpenCV", "FFmpeg", "Anomaly Detection", "AWS"],
    desc: "Implemented a pipeline to detect actions, summarize footage, and identify anomalies across videos in real-time, integrated with cloud compute services."
  },
  {
    title: "🌐 Real-Time IoT ML Platform for Predictive Maintenance",
    skills: ["Kafka", "Spark Streaming", "Docker", "Anomaly Detection", "Microservices"],
    desc: "Built an IoT ML platform for real-time anomaly detection and predictive maintenance by ingesting time series sensor data with Kafka + Spark."
  }
];

export default function Projects() {
  return (
    <section style={{ marginTop: '2rem' }}>
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
        🚀 Projects
      </h2>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {projects.map((proj, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: '#1e293b',
              border: '1px solid #334155',
              padding: '1.5rem',
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
            <h3 
              style={{ 
                margin: '0 0 1rem 0', 
                color: '#f8fafc',
                fontSize: '1.2rem',
                fontWeight: '600',
                lineHeight: '1.4'
              }}
            >
              {proj.title}
            </h3>
            
            <div style={{ 
              marginBottom: '1rem', 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '8px' 
            }}>
              {proj.skills.map((skill, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: '#0f172a',
                    color: '#38bdf8',
                    padding: '4px 12px',
                    borderRadius: '16px',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    border: '1px solid #38bdf8',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <p style={{ 
              margin: 0, 
              color: '#e2e8f0', 
              lineHeight: '1.6',
              fontSize: '0.95rem'
            }}>
              {proj.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}