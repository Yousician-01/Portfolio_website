export type Category = "AI" | "ML" | "Cybersecurity" | "IoT";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: Category; // 🔥 KEY FIX
  tags: string[];
  tech: string[];
  github: string;
  demo: string;
  featured: boolean;
  glow: string;
}

export const projects: Project[] = [
  {
    id: "stock-direction-indicator",
    title: "Stock Direction Indicator",
    description: "ML model predicting short-term stock movement using historical market data.",

    longDescription: `
A machine learning-based system designed to predict stock price direction using historical market data and technical indicators. 
The model analyzes patterns in time-series data to provide directional insights that can support trading strategies.

Focus was placed on feature engineering, model accuracy, and handling noisy financial data.
    `,

    category: "ML",
    tags: ["Time Series", "Finance", "Prediction"],

    tech: ["Python", "Pandas", "Scikit-learn", "NumPy"],

    github: "https://github.com/Yousician-01/Stock-Direction-Indicator",
    demo: "",

    featured: true,
    glow: "#8C6A5D",
  },

  {
    id: "credit-card-fraud",
    title: "Credit Card Fraud Detection",
    description: "Anomaly detection model identifying fraudulent transactions in real-time.",

    longDescription: `
A machine learning system built to detect fraudulent credit card transactions using anomaly detection techniques. 
The model identifies unusual transaction patterns and flags potential fraud with high precision.

Special attention was given to class imbalance, feature scaling, and evaluation metrics like precision and recall.
    `,

    category: "Cybersecurity",
    tags: ["Fraud Detection", "Anomaly Detection"],

    tech: ["Python", "Scikit-learn", "Pandas"],

    github: "https://github.com/Yousician-01/Credit-Card-Fraud-Detection",
    demo: "",

    featured: true,
    glow: "#6B4F4F",
  },

  {
    id: "log-anomaly-detection",
    title: "ML Log Anomaly Detection",
    description: "Detects unusual patterns in system logs for early incident discovery.",

    longDescription: `
An ML-driven system designed to analyze system logs and detect anomalies that could indicate failures or security incidents. 
The project focuses on extracting meaningful patterns from raw logs and identifying deviations in behavior.

This approach helps in proactive incident detection and improves system reliability.
    `,

    category: "AI",
    tags: ["Logs", "Monitoring", "Anomaly Detection"],

    tech: ["Python", "Machine Learning", "Data Processing"],

    github: "https://github.com/Yousician-01/ML-Log-Anomaly-Detection-Incident-Discovery",
    demo: "",

    featured: true,
    glow: "#A47551",
  },

  {
    id: "home-security-system",
    title: "Home Security System",
    description: "AI-powered smart surveillance system for real-time threat detection.",

    longDescription: `
A smart home security system that uses computer vision and AI to monitor environments and detect potential threats. 
The system is designed for real-time processing, logging, and alert generation.

It integrates hardware and software components, making it a complete end-to-end intelligent security solution.
    `,

    category: "IoT",
    tags: ["Computer Vision", "Security", "Embedded"],

    tech: ["Python", "OpenCV", "ESP32", "FastAPI"],

    github: "https://github.com/Yousician-01/Home_Security",
    demo: "",

    featured: true,
    glow: "#7A8B7A",
  },
];

export const categoryColors: Record<Category, string> = {
  AI: "#A47551",           // warm brown
  ML: "#8C6A5D",           // muted clay
  Cybersecurity: "#6B4F4F",// deep muted red-brown
  IoT: "#7A8B7A",          // soft earthy green
};  