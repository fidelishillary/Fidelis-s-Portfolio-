import { Skill, Experience, Project } from './types';

export const personalInfo = {
  name: "Fidelis Hillary Bin Leanad",
  email: "fidelishillary0@gmail.com",
  phone: "+60 19-887 7427",
  degree: "Bachelor of Information Technology (Hons)",
  university: "Universiti Teknologi PETRONAS (UTP)",
  location: "Kuala Lumpur, Malaysia",
  linkedin: "https://www.linkedin.com/in/fidelis-hillary-9605a5243",
  github: "https://github.com/fidelishillary",
  whatsapp: "https://wa.me/60198877427",
  summary: "A technically proficient and dedicated IT & Cybersecurity fresh graduate with hands-on rotational enterprise experience in CloudOps, Server Support, and Cybersecurity Operations. Notable accomplishments include optimizing enterprise Splunk SIEM dashboards by reducing query times by up to 77%, executing high-capacity cloud migrations (850GB+), managing SentinelOne endpoint security, and researching cutting-edge machine learning models for polymorphic malware detection.",
  philosophies: [
    {
      title: "Honesty & Integrity",
      description: "Commitment to absolute transparency and data confidentiality in handling highly sensitive corporate records and cybersecurity incidents."
    },
    {
      title: "Accountability",
      description: "Taking full ownership of server uptime, backups, and critical patches. Experience doing after-hours, high-risk data housekeeping without interrupting continuous drilling operations."
    },
    {
      title: "Respect",
      description: "Collaborating seamlessly across global and regional teams, third-party vendors (Nexagate, Bluesify), and senior management to ensure alignment."
    }
  ]
};

export const skills: Skill[] = [
  // Languages & Frameworks
  { name: "Python (ML & LIEF)", category: "languages", level: 90 },
  { name: "Search Processing Language (SPL)", category: "languages", level: 95 },
  { name: "PowerShell & Bash", category: "languages", level: 85 },
  { name: "TypeScript / React", category: "languages", level: 80 },
  { name: "HTML5 & Tailwind CSS", category: "languages", level: 85 },
  
  // Cybersecurity & SIEM
  { name: "Splunk Enterprise SIEM", category: "cybersecurity", level: 95 },
  { name: "SentinelOne EDR", category: "cybersecurity", level: 90 },
  { name: "Threat Intelligence & VirusTotal", category: "cybersecurity", level: 85 },
  { name: "VAPT (Vuln Assessment)", category: "cybersecurity", level: 80 },
  { name: "Active Directory (AD)", category: "cybersecurity", level: 85 },
  { name: "Microsoft Entra (Azure AD)", category: "cybersecurity", level: 80 },

  // Cloud Ops & Virtualization
  { name: "VMware ESXi Host", category: "cloud_ops", level: 85 },
  { name: "AWS Instance Ops & Ports", category: "cloud_ops", level: 80 },
  { name: "Dell iDRAC & HPE iLO", category: "cloud_ops", level: 85 },
  { name: "Veeam Backup & Recovery", category: "cloud_ops", level: 80 },
  { name: "SolarWinds Monitoring", category: "cloud_ops", level: 85 },

  // Tools & ITSM
  { name: "ManageEngine ITSM", category: "tools", level: 85 },
  { name: "SharePoint Online Admin", category: "tools", level: 80 },
  { name: "Excel Asset Reconciliation", category: "tools", level: 90 },
  { name: "Ghidra (Static Analysis)", category: "tools", level: 75 },
  { name: "CAPE Sandbox (Dynamic)", category: "tools", level: 75 }
];

export const experiences: Experience[] = [
  {
    company: "Vantris Energy Berhad",
    role: "CloudOps & Server Support / Cybersecurity Intern",
    location: "Kuala Lumpur, Malaysia",
    period: "Sept 2025 – Apr 2026",
    type: "Internship",
    description: [
      "Rotated between CloudOps & Server Support (Primary) and corporate Cybersecurity (Secondary) teams under the Infrastructure division.",
      "Spearheaded the Splunk SIEM Dashboard Enhancement project, auditing 19 categories of legacy dashboards, removing decommissioned logs, and implementing corporate rebranding (SEB to VTEB).",
      "Managed incident lifecycles within the ManageEngine ITSM platform, handling a high volume of file server access requests, SharePoint permission assignments, and general connectivity logs.",
      "Validated server hardware and out-of-band management controllers including Dell iDRAC and HPE iLO to remotely monitor remote rig, vessel, and regional site offices.",
      "Performed cross-verification and inventory reconciliation between ITSM assets and the master database, using CMD ping and Remote Desktop Connection (RDC) scripts to maintain an accurate CMDB.",
      "Conducted Level 2 cybersecurity alert triage in the SentinelOne EDR console, isolating endpoints, writing remediation notes, and cross-checking suspicious hashes on VirusTotal."
    ],
    skills: ["Splunk Enterprise", "SentinelOne", "AWS", "VMware ESXi", "Active Directory", "ITSM", "Veeam", "SolarWinds"]
  },
  {
    company: "Universiti Teknologi PETRONAS (UTP) with Universitas Brawijaya (UB)",
    role: "Community Outreach Organizer – Nusa Hijau Indonesia",
    location: "Indonesia & Malaysia",
    period: "2024",
    type: "Community Program",
    description: [
      "Contributed to the planning and execution of the Nusa Hijau community outreach program.",
      "Assisted in the development of event modules for the outreach program.",
      "Prepared the technical flow of events for main program days.",
      "Organized and provided necessary materials and resources for planned activities."
    ],
    skills: ["Community Outreach", "Event Planning", "Technical Operations", "Logistics & Resource Coordination"]
  }
];

export const projects: Project[] = [
  {
    id: "splunk-siem",
    title: "Splunk SIEM Dashboard Enhancement",
    subtitle: "Enterprise Security Operations Project",
    category: "Enterprise",
    description: "Transformed Splunk from a reactive log-searching tool into a highly optimized, structured investigative SIEM platform for security analysts.",
    tags: ["Splunk", "SPL Optimization", "SIEM", "Incident Triage", "Active Directory"],
    metrics: [
      { label: "Query Execution Time Reduced", value: "65% – 77%" },
      { label: "Dashboards Streamlined", value: "19 to 8 categories" },
      { label: "Integrated Log Sources", value: "11 Systems" }
    ],
    details: [
      "Optimized Search Processing Language (SPL) queries by leveraging index-time filtering, removing redundant field extractions, and strictly limiting scanning windows.",
      "Designed and developed the 'User Activity Trail Dashboard' from scratch, offering a single-pane chronological visualization of a user's cross-system movements across 11 integrated data streams.",
      "Created the 'P1 User Activity Monitoring Dashboard' to automatically correlate live events against a CSV lookup table of high-risk privileged admin accounts.",
      "Created the 'License Utilization Dashboard' providing data ingestion trends and capacity predictions to replace deprecated indexing volume panels.",
      "Completed comprehensive standardizing of application references, updating legacy 'Sapura Energy' configurations and nomenclature to the new 'Vantris Energy' corporate brand."
    ],
    demo: "splunk-sim" // Will trigger our interactive in-app Splunk visualizer!
  },
  {
    id: "malware-detection",
    title: "Polymorphic Malware Detection Framework",
    subtitle: "Bachelor's Final Year Project (FYP)",
    category: "Academic",
    description: "Developed a hybrid framework to classify and detect highly dangerous polymorphic malware that evades traditional signature scanners by constantly mutating its code.",
    tags: ["Python", "Machine Learning", "Reverse Engineering", "Ghidra", "CAPE Sandbox", "LIEF"],
    metrics: [
      { label: "ML Classifiers Used", value: "Random Forest, XGBoost" },
      { label: "Deep Learning Model", value: "LSTM (API Sequences)" },
      { label: "Target Architecture", value: "Windows PE Files" }
    ],
    details: [
      "Conducted static analysis of decryption and mutation routines inside malware samples using Ghidra to pinpoint stable, structural indicators.",
      "Utilized pefile and LIEF in Python to extract complex static binary features such as PE headers, import tables, and section entropy values.",
      "Executed samples in an isolated, secure VirtualBox lab environment with CAPE Sandbox to capture dynamic runtime behaviors like file, registry, and API call sequences.",
      "Trained machine learning classifiers (Random Forest, XGBoost) and sequential models (LSTM) to distinguish malicious and benign samples based on invariant structural and behavioral patterns.",
      "Designed a conceptual lightweight web browser extension that intercepts and runs real-time classification on executable downloads before they hit the disk."
    ],
    github: "https://github.com/fidelishillary/polymorphic-malware-detector",
    demo: "malware-sim" // Will trigger our interactive in-app static binary analyzer!
  },
  {
    id: "students-expenses",
    title: "Students' Expenses Tracker System",
    subtitle: "Academic OOP Expense Manager",
    category: "Academic",
    description: "Developed a user-friendly Students' Expenses Tracker System to help university students easily input, monitor, and manage their expenses, providing them with insightful visualizations and tools for financial planning and goal setting.",
    tags: ["Java", "C++", "OOP", "Data Visualization", "Financial Planning"],
    metrics: [
      { label: "Academic Year", value: "2024" },
      { label: "Core paradigm", value: "Object-Oriented" },
      { label: "Key Benefit", value: "Financial Insight" }
    ],
    details: [
      "Leveraged object-oriented programming concepts in Java and C++ to robustly model and track dynamic users, transaction logs, and categorical savings budgets.",
      "Engineered clean user-entry modules allowing real-time recording and automatic classification of student spending habits.",
      "Built analytic routines that process financial logs to display summary graphics and reports, assisting peers with dynamic goals and resource planning."
    ]
  },
  {
    id: "class-schedule",
    title: "Class Schedule Management System",
    subtitle: "Our Timetable Scheduling Portal",
    category: "Academic",
    description: "Developed 'Our Timetable,' an HTML-based application to streamline the process of generating, viewing, and managing university class schedules for students and faculty at UTP.",
    tags: ["HTML", "CSS", "JavaScript", "Calendar Views", "Data Filtering"],
    metrics: [
      { label: "Academic Year", value: "2024" },
      { label: "Target Host", value: "UTP Faculty" },
      { label: "Interactive Component", value: "Calendar Filter" }
    ],
    details: [
      "Designed and coded a responsive HTML and CSS dashboard displaying master weekly timetables in an intuitive grid schedule.",
      "Implemented JavaScript-driven search and client-side filtering logic, enabling quick searching by module code, lecturer, or specific venue.",
      "Automated overlapping-session alerts to eliminate scheduling conflicts for both students and academic faculty."
    ]
  },
  {
    id: "sharepoint-migration",
    title: "850GB+ SharePoint-to-AWS Migration",
    subtitle: "Enterprise Data Governance & Lifecycle",
    category: "Enterprise",
    description: "Executed a massive data housekeeping and cloud migration project for Vantris's critical SharePoint storage to mitigate severe application performance bottleneck threats.",
    tags: ["SharePoint Admin", "AWS", "Data Archiving", "Risk Mitigation", "Business Continuity"],
    metrics: [
      { label: "Data Volume Migrated", value: "850GB+" },
      { label: "Repository Target", value: "SSB TIMI" },
      { label: "Service Uptime", value: "100% (No Downtime)" }
    ],
    details: [
      "Engineered a rigorous data auditing and cleaning workflow to validate legitimacy, usage patterns, and metadata accuracy prior to offloading.",
      "Planned and executed the high-volume migration over designated weekend blocks, preventing severe network bandwidth congestion and preserving daily business operational continuity.",
      "Formulated comprehensive operational process documentation to ensure subsequent SharePoint housekeeping runs are completely risk-minimized, standardized, and repeatable.",
      "Contributed to visual digital governance by designing and deploying 16 custom portal layout guidelines, aligning corporate aesthetics with Vantris branding."
    ]
  },
  {
    id: "f1-database",
    title: "F1 Racing Championship Database",
    subtitle: "Group Relational DBMS Project",
    category: "Academic",
    description: "Designed and implemented a tailored Database Management System (DBMS) using Oracle for the Formula 1 Racing Championship, focusing on tracking live race events, constructor statistics, and driver rankings.",
    tags: ["Oracle", "SQL", "Database Design", "ER Modeling", "Relational Mapping"],
    metrics: [
      { label: "Academic Year", value: "2023" },
      { label: "Database Engine", value: "Oracle DBMS" },
      { label: "Normalization Level", value: "Third Normal Form" }
    ],
    details: [
      "Created the comprehensive Entity-Relationship (ER) design mapping complex relationship constraints among drivers, constructor teams, tracks, and Grand Prix scores.",
      "Composed and fine-tuned complex relational SQL queries and joins to produce live team rankings and historical championship statistics.",
      "Enforced database integrity through extensive table constraints, primary/foreign key indexing, and normalized up to 3NF."
    ]
  },
  {
    id: "ugate-vehicle",
    title: "UGate: Campus Access & Vehicle Management",
    subtitle: "UGate Security System Proposal",
    category: "Academic",
    description: "Co-created UGate, a software proposal designed to streamline university campus access control, vehicle sticker administration, and fine/ticket payments while enhancing perimeter security.",
    tags: ["HTML", "CSS", "JavaScript", "Python", "Security Control", "Administration"],
    metrics: [
      { label: "Academic Year", value: "2022" },
      { label: "Project Concept", value: "UGate Security" },
      { label: "Primary Languages", value: "JS & Python" }
    ],
    details: [
      "Developed a responsive front-end utilizing HTML, CSS, and JavaScript for automated vehicle sticker requests and student login modules.",
      "Created backend validation mechanisms in Python to manage payment verifications and administrative fine tracking records.",
      "Formulated system architectures that successfully minimize gate queue bottlenecks and audit unauthorized vehicle access."
    ]
  }
];
