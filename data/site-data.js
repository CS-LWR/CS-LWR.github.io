window.siteData = {
  about:
    "I am building a research-oriented portfolio across communications, signal processing, artificial intelligence, and electromagnetic inversion. This website is designed to present academic background, research directions, project evidence, technical writing, and contact information in one mature and maintainable structure.",

  stats: [
    { value: "Top 3", label: "MSc ranking" },
    { value: "80.66", label: "MSc score" },
    { value: "4+", label: "Research directions" }
  ],

  skills: [
    "Signal Processing",
    "Wireless Communication",
    "EEG Denoising",
    "Variational Autoencoder",
    "Magnetic Induction",
    "FDEM/TDEM",
    "Inverse Problems",
    "Python",
    "MATLAB",
    "Scientific Visualization",
    "Reproducible Workflow",
    "Git/GitHub"
  ],

  research: [
    {
      title: "Magnetic Induction Inversion",
      description:
        "Sector-wise fixed-depth conductivity inversion using multi-frequency TX/RX measurements and physically constrained forward modelling.",
      image: "assets/images/research-mi.jpg",
      tags: ["FDEM", "Inversion", "Conductivity"]
    },
    {
      title: "EEG Artifact Removal",
      description:
        "AI-based signal reconstruction for removing EOG, EMG, and motion artifacts from EEG signals using AE/VAE-style models.",
      image: "assets/images/research-eeg.jpg",
      tags: ["EEG", "VAE", "Denoising"]
    },
    {
      title: "Wireless Link Adaptation",
      description:
        "Analysis of spectral efficiency, energy efficiency, modulation, coding, and effective SNR for broadband communication systems.",
      image: "assets/images/research-wireless.jpg",
      tags: ["SNR", "QAM", "MCS"]
    }
  ],

  projectCategories: ["All", "MI", "EEG", "Website", "Communication"],

  projects: [
    {
      title: "Four-Sector Fixed-Depth MI Inversion",
      category: "MI",
      description:
        "A simplified but interpretable inversion framework: four horizontal sectors, ten fixed depth intervals, and conductivity-only unknowns with known μ and ε.",
      image: "assets/images/project-mi-inversion.jpg",
      tags: ["40 unknowns", "log-sigma", "sector model"]
    },
    {
      title: "Strict 3D Forward Model Workflow",
      category: "MI",
      description:
        "A programmable frequency-domain electromagnetic forward workflow using grid discretization, boundary conditions, transmitter source modelling, and receiver voltage extraction.",
      image: "assets/images/project-forward.jpg",
      tags: ["Maxwell", "Yee grid", "FDEM"]
    },
    {
      title: "EEG Denoising Pipeline",
      category: "EEG",
      description:
        "A complete Python/TensorFlow signal denoising pipeline with segmentation, normalization, CNN-AE/VAE training, evaluation, and visualization.",
      image: "assets/images/project-eeg.jpg",
      tags: ["CNN-AE", "RRMSE", "TFLite"]
    },
    {
      title: "Personal Academic Website",
      category: "Website",
      description:
        "A modular data-driven static website framework with dynamic menu behavior, reusable content arrays, responsive layout, and dark mode.",
      image: "assets/images/project-website.jpg",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "MCS and Effective SNR Analysis",
      category: "Communication",
      description:
        "Simulation and visualization of modulation order, coding rate, effective SNR, BLER trends, and energy/spectral-efficiency tradeoffs.",
      image: "assets/images/project-communication.jpg",
      tags: ["MCS", "BLER", "Efficiency"]
    }
  ],

  publications: [
    {
      date: "2026",
      title: "Magnetic Induction Forward and Inversion Workflow Notes",
      description:
        "A developing technical report series covering strict 3D forward modelling and simplified sector-wise inversion methodology."
    },
    {
      date: "2025",
      title: "EEG Artifact Removal with Autoencoder and VAE Models",
      description:
        "Research documentation and implementation notes for artifact removal from EEG signals using deep learning reconstruction methods."
    },
    {
      date: "2025",
      title: "Zigbee Technology and Wireless Communication Applications",
      description:
        "Technical writing on Zigbee evolution, IoT applications, industrial use cases, limitations, and future relevance."
    }
  ],

  experience: [
    {
      date: "2024–2025",
      title: "MSc Communications and Signal Processing, University of Manchester",
      description:
        "Focused on digital communication, signal processing, AI-based signal reconstruction, and research-oriented engineering implementation."
    },
    {
      date: "Before MSc",
      title: "BEng Communication Engineering",
      description:
        "Built a foundation in communication systems, electromagnetic theory, programming, and engineering mathematics."
    },
    {
      date: "Ongoing",
      title: "Independent Research and Engineering Projects",
      description:
        "Developing reproducible pipelines for magnetic inversion, EEG denoising, visualization, technical writing, and personal website presentation."
    }
  ],

  contacts: [
    { label: "Email", href: "mailto:your.email@example.com" },
    { label: "GitHub", href: "https://github.com/CS-LWR" },
    { label: "LinkedIn", href: "#" },
    { label: "Google Scholar", href: "#" },
    { label: "CV", href: "assets/docs/CV.pdf" }
  ]
};
