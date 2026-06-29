import { useState } from 'react';
import { Shield, Terminal, Server, Cpu, Database, ArrowRight, Play, Search, AlertTriangle, FileText, CheckCircle, HelpCircle } from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>("splunk-siem");
  const [projectCategoryFilter, setProjectCategoryFilter] = useState<'All' | 'Enterprise' | 'Academic'>('All');
  
  // Splunk Simulator State
  const [splunkQuery, setSplunkQuery] = useState("");
  const [splunkResult, setSplunkResult] = useState<any | null>(null);
  const [isSplunkSearching, setIsSplunkSearching] = useState(false);

  // Malware Simulator State
  const [selectedMalwareFile, setSelectedMalwareFile] = useState<string>("");
  const [malwareLogs, setMalwareResult] = useState<string[]>([]);
  const [isMalwareRunning, setIsMalwareRunning] = useState(false);
  const [malwareFinalResult, setMalwareFinalResult] = useState<any | null>(null);

  const filteredProjects = projects.filter(
    (p) => projectCategoryFilter === 'All' || p.category === projectCategoryFilter
  );

  const selectedProject = projects.find(p => p.id === selectedProjectId) || filteredProjects[0] || projects[0];

  const getProjectIcon = (id: string, category: string) => {
    switch (id) {
      case 'splunk-siem':
        return <Shield className="w-4 h-4" />;
      case 'malware-detection':
        return <Cpu className="w-4 h-4" />;
      case 'students-expenses':
        return <Database className="w-4 h-4" />;
      case 'class-schedule':
        return <FileText className="w-4 h-4" />;
      case 'sharepoint-migration':
        return <Server className="w-4 h-4" />;
      case 'f1-database':
        return <Database className="w-4 h-4" />;
      case 'ugate-vehicle':
        return <Shield className="w-4 h-4" />;
      default:
        return category === 'Enterprise' ? <Server className="w-4 h-4" /> : <FileText className="w-4 h-4" />;
    }
  };

  // Simulated Splunk Log Data
  const runSplunkSearch = (user: string) => {
    setIsSplunkSearching(true);
    setSplunkResult(null);
    setTimeout(() => {
      const u = user.trim().toLowerCase();
      if (u.includes("nirmala")) {
        setSplunkResult({
          user: "nirmala.muniandy@vantrisenergy.com",
          status: "Warning",
          metrics: { logins: 12, failed: 1, escalations: 0, alerts: 1 },
          logs: [
            { time: "2026-03-24 08:44:12", source: "Active Directory", event: "Successful Logon from 10.16.2.144", type: "info" },
            { time: "2026-03-24 08:45:01", source: "Office 365", event: "Accessed SharePoint: /sites/sea/finance_audit_q2", type: "info" },
            { time: "2026-03-24 08:46:11", source: "Cisco Firewall", event: "Blocked outbound connection to blacklisted external IP 192.168.107.6", type: "warning" },
            { time: "2026-03-24 08:48:30", source: "SentinelOne", event: "Host scan completed: 0 threats detected", type: "success" }
          ]
        });
      } else if (u.includes("hanufen")) {
        setSplunkResult({
          user: "hanufen.hairul@vantrisenergy.com",
          status: "Critical",
          metrics: { logins: 1, failed: 3, escalations: 0, alerts: 3 },
          logs: [
            { time: "2026-03-24 10:42:01", source: "Active Directory", event: "Failed Logon (Bad Password Attempt) from 10.16.3.183", type: "warning" },
            { time: "2026-03-24 10:42:15", source: "Active Directory", event: "Failed Logon (Bad Password Attempt) from 10.16.3.183", type: "warning" },
            { time: "2026-03-24 10:42:30", source: "Active Directory", event: "Failed Logon (Bad Password Attempt) from 10.16.3.183", type: "warning" },
            { time: "2026-03-24 10:43:05", source: "Active Directory", event: "Successful Logon after 3 rapid failures [CRITICAL SUSPICION]", type: "critical" },
            { time: "2026-03-24 10:44:22", source: "Office 365", event: "Mass download trigger (25 files downloaded in 30 seconds)", type: "critical" }
          ]
        });
      } else if (u.includes("rigadmin")) {
        setSplunkResult({
          user: "rigadmin.t11@vantrisenergy.com [P1 PRIVILEGED]",
          status: "Critical Action",
          metrics: { logins: 2, failed: 0, escalations: 1, alerts: 2 },
          logs: [
            { time: "2026-03-24 14:38:11", source: "Active Directory", event: "Successful logon for Highly Privileged Admin from rig_gateway_t11", type: "info" },
            { time: "2026-03-24 14:38:50", source: "Active Directory", event: "User account 'temp_operator' added to Group: 'Domain Admins'", type: "critical" },
            { time: "2026-03-24 14:40:02", source: "Cisco Firewall", event: "Outbound SSH Tunnel established from rig_gateway_t11 to external port 22", type: "warning" },
            { time: "2026-03-24 14:42:10", source: "Linux Server", event: "Sudo privilege command executed: 'chmod -R 777 /opt/database'", type: "warning" }
          ]
        });
      } else {
        setSplunkResult({
          user: user || "unknown_user",
          status: "Clear",
          metrics: { logins: 1, failed: 0, escalations: 0, alerts: 0 },
          logs: [
            { time: "2026-03-24 12:15:30", source: "Active Directory", event: `User ${user} logged on from 10.16.4.5`, type: "success" },
            { time: "2026-03-24 12:16:45", source: "Office 365", event: "Session idle timeout - logoff initiated", type: "info" }
          ]
        });
      }
      setIsSplunkSearching(false);
    }, 800);
  };

  // Simulated Malware ML Sandbox
  const runMalwareAnalysis = () => {
    if (!selectedMalwareFile) return;
    setIsMalwareRunning(true);
    setMalwareResult([]);
    setMalwareFinalResult(null);

    const logMessages = [
      "[INFO] Loading target binary into memory pipeline...",
      "[TRACE] Initializing Python pefile structure...",
      "[TRACE] Calculating entropy density of PE Sections...",
      "", // Will dynamically insert data based on selection
      "[INFO] Extracting import tables using LIEF binary parser...",
      "", // Will dynamically insert imported functions
      "[INFO] Launching CAPE Sandbox isolated VM snapshot...",
      "[TRACE] Hooking Win32 API sequences inside kernel environment...",
      "", // Sandbox action log
      "[INFO] Assembling extracted feature vector (52 inputs)...",
      "[INFO] Routing vector to Random Forest & XGBoost classifiers...",
      "[INFO] Running LSTM sequential classification on captured API call chain...",
      "[SUCCESS] Analysis trace completed successfully."
    ];

    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < logMessages.length) {
        let msg = logMessages[currentLogIndex];
        
        // Context-specific messages injected here
        if (msg === "") {
          if (currentLogIndex === 3) {
            msg = selectedMalwareFile === "wannacry" 
              ? "[RESULT] Section '.text' Entropy: 7.94 [HIGHLY PACKED / COMPRESSED PAYLOAD]"
              : selectedMalwareFile === "credential_stealer"
              ? "[RESULT] Section '.data' Entropy: 7.41 [SUSPICIOUSLY ENCRYPTED SEGMENT]"
              : "[RESULT] Average Section Entropy: 5.12 [NORMAL UNPACKED BINARY]";
          } else if (currentLogIndex === 5) {
            msg = selectedMalwareFile === "wannacry"
              ? "[RESULT] Suspicious imports detected: VirtualAlloc, WriteProcessMemory, CreateRemoteThread (Process Injection Pattern)"
              : selectedMalwareFile === "credential_stealer"
              ? "[RESULT] Suspicious imports detected: CryptUnprotectData, RegOpenKeyExA (Registry DPAPI credentials read)"
              : "[RESULT] Standard utility imports detected: GetCommandLineW, ExitProcess, Kernel32.dll standard links";
          } else if (currentLogIndex === 8) {
            msg = selectedMalwareFile === "wannacry"
              ? "[SANDBOX] Spawned child process cmd.exe. Hooked registry persistence: HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run"
              : selectedMalwareFile === "credential_stealer"
              ? "[SANDBOX] Directory scan triggered: AppData\\Local\\Google\\Chrome\\User Data\\Default\\Login Data (Access attempts)"
              : "[SANDBOX] Normal thread execution context. CPU Load: <2%, no anomalous directory hooks.";
          }
        }

        setMalwareResult(prev => [...prev, msg]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        setIsMalwareRunning(false);
        // Final Output Results
        if (selectedMalwareFile === "wannacry") {
          setMalwareFinalResult({
            classification: "MALICIOUS",
            type: "Polymorphic Ransomware Payload",
            confidence: "99.7%",
            reasons: ["Anomalous 7.94 Text section entropy", "Process Hollowing Win32 imports", "CAPE Registry persistence hijacking detected"]
          });
        } else if (selectedMalwareFile === "credential_stealer") {
          setMalwareFinalResult({
            classification: "MALICIOUS",
            type: "InfoStealer DLL Library",
            confidence: "95.4%",
            reasons: ["Protected browser file directory read", "DPAPI credential decryption APIs used", "Encrypted network beacon attempt"]
          });
        } else {
          setMalwareFinalResult({
            classification: "BENIGN",
            type: "Standard Win32 Utility File",
            confidence: "0.02% risk score",
            reasons: ["Clean, normal section entropy distribution", "No suspicious Win32 API import sequences", "Safe dynamic behavioral sandbox footprint"]
          });
        }
      }
    }, 280);
  };

  return (
    <section id="projects" className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/1 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center sm:text-left mb-16">
          <p className="text-[9px] uppercase tracking-[0.3em] text-slate-500 mb-2 font-mono">03 / SHOWCASE</p>
          <h2 className="font-serif italic text-3xl sm:text-4xl text-white tracking-tight">
            Key Projects & Research
          </h2>
          <p className="font-sans text-xs text-slate-400 mt-4 leading-relaxed max-w-xl font-light">
            Review detailed case histories of enterprise migrations, security architecture redesigns, and final-year machine learning concepts.
          </p>
        </div>

        {/* Dynamic Project Tabs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Projects Select Column */}
          <div className="col-span-1 lg:col-span-4 space-y-4">
            {/* Category Filter Pills */}
            <div className="flex bg-[#030303] p-1 rounded-full border border-white/5 mb-2">
              {(['All', 'Enterprise', 'Academic'] as const).map((cat) => (
                <button
                  id={`project-category-filter-${cat.toLowerCase()}`}
                  key={cat}
                  onClick={() => {
                    setProjectCategoryFilter(cat);
                    const filtered = projects.filter(p => cat === 'All' || p.category === cat);
                    if (filtered.length > 0) {
                      if (!filtered.some(p => p.id === selectedProjectId)) {
                        setSelectedProjectId(filtered[0].id);
                      }
                    }
                  }}
                  className={`flex-1 py-1.5 text-[9px] uppercase tracking-wider font-mono rounded-full transition-all cursor-pointer ${
                    projectCategoryFilter === cat
                      ? 'bg-white text-black font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Scrollable Container for buttons on large screens */}
            <div className="space-y-3 max-h-[550px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/10">
              {filteredProjects.map((project) => (
                <button
                  id={`project-tab-btn-${project.id}`}
                  key={project.id}
                  onClick={() => {
                    setSelectedProjectId(project.id);
                    setSplunkQuery("");
                    setSplunkResult(null);
                    setSelectedMalwareFile("");
                    setMalwareResult([]);
                    setMalwareFinalResult(null);
                  }}
                  className={`w-full text-left p-5 rounded-xl border transition-all cursor-pointer flex items-start space-x-4 group ${
                    selectedProjectId === project.id
                      ? 'bg-[#080808] border-white/20 shadow-2xl'
                      : 'bg-transparent border-white/5 hover:border-white/15'
                  }`}
                >
                  {/* Project Category Icon */}
                  <div className={`p-2.5 rounded-full shrink-0 ${
                    selectedProjectId === project.id
                      ? 'bg-white/5 text-white'
                      : 'bg-white/2 text-slate-500 group-hover:text-slate-300'
                  }`}>
                    {getProjectIcon(project.id, project.category)}
                  </div>

                  {/* Project Header Info */}
                  <div className="space-y-1 text-left min-w-0">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 block truncate">
                      {project.category} // {project.subtitle}
                    </span>
                    <h4 className="font-sans font-bold text-sm text-slate-200 group-hover:text-white transition-colors truncate">
                      {project.title}
                    </h4>
                  </div>
                </button>
              ))}
              {filteredProjects.length === 0 && (
                <p className="text-center text-xs text-slate-500 py-8 font-light">No projects found in this category.</p>
              )}
            </div>
          </div>

          {/* Active Project Details Column */}
          <div id="project-detail-panel" className="col-span-1 lg:col-span-8 rounded-2xl bg-[#080808] border border-white/5 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/1 rounded-full blur-3xl pointer-events-none" />

            {/* Title / Description */}
            <div className="border-b border-white/5 pb-6 mb-6 text-left">
              <span className="font-mono text-[9px] text-teal-400 tracking-[0.2em] uppercase font-bold">
                {selectedProject.subtitle}
              </span>
              <h3 className="font-serif italic text-2xl text-white mt-1">
                {selectedProject.title}
              </h3>
              <p className="font-sans text-sm text-slate-400 mt-3 leading-relaxed font-light">
                {selectedProject.description}
              </p>
            </div>

            {/* Highlighted Project Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {selectedProject.metrics.map((metric, i) => (
                <div
                  id={`project-metric-${selectedProject.id}-${i}`}
                  key={metric.label}
                  className="p-4 rounded-xl bg-[#050505] border border-white/5 text-left"
                >
                  <span className="font-mono text-[8px] text-slate-500 uppercase block tracking-wider">
                    {metric.label}
                  </span>
                  <span className="font-serif italic text-lg text-white mt-1 block">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Bulleted Project Accomplishments */}
            <div className="space-y-4 mb-8 text-left">
              <h4 className="font-mono text-[8px] uppercase tracking-wider text-slate-500 font-bold">
                Key Accomplishments & Responsibilities
              </h4>
              <ul className="space-y-2.5">
                {selectedProject.details.map((detail, index) => (
                  <li key={index} className="flex items-start space-x-3 text-xs text-slate-300 font-light leading-relaxed">
                    <CheckCircle className="w-3.5 h-3.5 text-white/40 shrink-0 mt-0.5" />
                    <span className="font-sans">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Embedded Live Simulator Section */}
            {selectedProject.demo === "splunk-sim" && (
              <div id="splunk-dashboard-simulator" className="border-t border-white/5 pt-8 mt-8 space-y-4 text-left">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-white" />
                  <h4 className="font-sans font-bold text-sm text-white">
                    Interactive SIEM Log Simulator: 'User Activity Trail'
                  </h4>
                </div>
                <p className="font-sans text-xs text-slate-400 font-light">
                  Fidelis designed this single-pane tool to automate multi-system correlations. Try querying any of the audited user accounts below to run a mock Splunk search:
                </p>

                {/* Predefined Audited Users */}
                <div className="flex flex-wrap gap-2 py-1">
                  {["nirmala.muniandy", "hanufen.hairul", "rigadmin.t11"].map((u) => (
                    <button
                      id={`splunk-preset-btn-${u}`}
                      key={u}
                      onClick={() => {
                        setSplunkQuery(u);
                        runSplunkSearch(u);
                      }}
                      className="px-3.5 py-1.5 font-mono text-[10px] bg-transparent border border-white/10 hover:border-white rounded-full text-slate-400 hover:text-white transition-all cursor-pointer"
                    >
                      Search: "{u}"
                    </button>
                  ))}
                </div>

                {/* Search Bar Input */}
                <div className="flex space-x-2">
                  <div className="relative flex-grow">
                    <input
                      id="splunk-search-input"
                      type="text"
                      placeholder="Enter user ID (e.g. hanufen.hairul)"
                      value={splunkQuery}
                      onChange={(e) => setSplunkQuery(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#050505] border border-white/10 focus:border-white rounded-full text-slate-200 text-xs font-mono focus:outline-none"
                    />
                    <Search className="absolute left-3.5 top-3 w-3.5 h-3.5 text-slate-500" />
                  </div>
                  <button
                    id="splunk-search-btn"
                    onClick={() => runSplunkSearch(splunkQuery)}
                    disabled={isSplunkSearching || !splunkQuery}
                    className="px-5 py-2.5 bg-white text-black hover:bg-transparent hover:text-white border border-white rounded-full text-[10px] uppercase tracking-widest font-bold transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSplunkSearching ? "Searching..." : "Search"}
                  </button>
                </div>

                {/* Console Log Output */}
                {isSplunkSearching ? (
                  <div className="p-4 bg-[#050505] rounded-xl border border-white/5 flex justify-center py-8">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  </div>
                ) : splunkResult ? (
                  <div className="rounded-xl border border-white/5 overflow-hidden text-xs">
                    {/* Simulator Header Stats */}
                    <div className="bg-[#050505] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Database className="w-3.5 h-3.5 text-slate-400" />
                        <span className="font-mono text-slate-300 text-[10px]">SPLUNK SEARCH RESULTS: {splunkResult.user}</span>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full font-mono text-[9px] font-bold ${
                        splunkResult.status.includes("Critical") ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                        splunkResult.status.includes("Warning") ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                        'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      }`}>
                        Status: {splunkResult.status}
                      </span>
                    </div>

                    {/* Stats Dashboard Grid */}
                    <div className="grid grid-cols-4 border-b border-white/5 bg-[#080808] font-mono text-center text-slate-400">
                      <div className="p-2.5 border-r border-white/5">
                        <span className="block text-[8px] text-slate-500">Logins</span>
                        <span className="text-white font-bold">{splunkResult.metrics.logins}</span>
                      </div>
                      <div className="p-2.5 border-r border-white/5">
                        <span className="block text-[8px] text-slate-500">Failures</span>
                        <span className={`${splunkResult.metrics.failed > 0 ? 'text-red-400' : 'text-slate-400'}`}>{splunkResult.metrics.failed}</span>
                      </div>
                      <div className="p-2.5 border-r border-white/5">
                        <span className="block text-[8px] text-slate-500">P1 Escals</span>
                        <span className="text-white font-bold">{splunkResult.metrics.escalations}</span>
                      </div>
                      <div className="p-2.5">
                        <span className="block text-[8px] text-slate-500">S1 Alerts</span>
                        <span className={`${splunkResult.metrics.alerts > 0 ? 'text-yellow-400 font-bold' : 'text-slate-400'}`}>{splunkResult.metrics.alerts}</span>
                      </div>
                    </div>

                    {/* Actual Chronological Log Panel */}
                    <div className="bg-[#050505] p-3 space-y-2 max-h-48 overflow-y-auto font-mono text-[10px] leading-relaxed">
                      {splunkResult.logs.map((log: any, i: number) => (
                        <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center space-y-0.5 sm:space-y-0 sm:space-x-2 border-b border-white/2 pb-1.5">
                          <span className="text-slate-500 shrink-0">{log.time}</span>
                          <span className="text-teal-500 font-bold shrink-0">[{log.source}]</span>
                          <span className={`${
                            log.type === 'critical' ? 'text-red-400 font-bold' :
                            log.type === 'warning' ? 'text-yellow-400' :
                            log.type === 'success' ? 'text-emerald-400' :
                            'text-slate-300'
                          }`}>{log.event}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            )}

            {selectedProject.demo === "malware-sim" && (
              <div id="malware-sandbox-simulator" className="border-t border-white/5 pt-8 mt-8 space-y-4 text-left">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-white" />
                  <h4 className="font-sans font-bold text-sm text-white">
                    Interactive ML Classifier Sandbox: Mutated Binary Analyzer
                  </h4>
                </div>
                <p className="font-sans text-xs text-slate-400 font-light">
                  Fidelis researched hybrid detection modeling to identify polymorphic threats. Select a simulated target PE binary and trigger our reverse-engineering feature extraction queue:
                </p>

                {/* Sample Selector */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "wannacry", label: "wannacry_polymorphic_mutated.exe", type: "Malicious" },
                    { id: "credential_stealer", label: "credential_stealer_v2.dll", type: "Malicious" },
                    { id: "system_calculator", label: "system_calculator_utility.exe", type: "Benign" }
                  ].map((f) => (
                    <button
                      id={`malware-select-btn-${f.id}`}
                      key={f.id}
                      onClick={() => {
                        setSelectedMalwareFile(f.id);
                        setMalwareResult([]);
                        setMalwareFinalResult(null);
                      }}
                      className={`p-3.5 font-mono text-[10px] rounded-xl border transition-all cursor-pointer text-left flex flex-col justify-between ${
                        selectedMalwareFile === f.id
                          ? 'bg-white/5 border-white/30 text-white font-semibold'
                          : 'bg-[#050505] border-white/5 text-slate-400 hover:border-white/10 hover:text-slate-300'
                      }`}
                    >
                      <span className="block font-bold truncate">{f.label}</span>
                      <span className="text-[9px] text-slate-500 mt-2 uppercase">Sample: {f.type}</span>
                    </button>
                  ))}
                </div>

                {/* Audit Action Trigger */}
                {selectedMalwareFile && (
                  <button
                    id="malware-run-btn"
                    onClick={runMalwareAnalysis}
                    disabled={isMalwareRunning}
                    className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white text-black font-bold uppercase tracking-widest text-[10px] rounded-full hover:bg-transparent hover:text-white border border-white transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>{isMalwareRunning ? "Extracting & Classifying Features..." : "Analyze Selected File"}</span>
                  </button>
                )}

                {/* Terminal Trace logs */}
                {malwareLogs.length > 0 && (
                  <div className="bg-[#050505] rounded-xl border border-white/5 p-4 font-mono text-[10px] leading-relaxed max-h-48 overflow-y-auto space-y-1 select-none text-left">
                    {malwareLogs.map((log, index) => (
                      <div key={index} className={`${
                        log.startsWith('[RESULT]') ? 'text-teal-400 font-semibold' :
                        log.startsWith('[SANDBOX]') ? 'text-yellow-400' :
                        log.startsWith('[SUCCESS]') ? 'text-emerald-400 font-bold' :
                        'text-slate-400'
                      }`}>
                        {log}
                      </div>
                    ))}
                  </div>
                )}

                {/* Machine Learning Final Assessment Display */}
                {malwareFinalResult && (
                  <div className="rounded-xl border border-white/5 bg-[#050505]/60 p-4 font-sans text-xs text-left">
                    <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-3">
                      <div className="flex items-center space-x-2">
                        <AlertTriangle className={`w-3.5 h-3.5 ${malwareFinalResult.classification === 'MALICIOUS' ? 'text-red-400' : 'text-emerald-400'}`} />
                        <span className="font-bold text-white uppercase font-mono text-[10px]">
                          DETECTOR DECISION // {malwareFinalResult.classification}
                        </span>
                      </div>
                      <div className="font-mono text-[10px]">
                        Confidence Score: <span className={`font-bold ${malwareFinalResult.classification === 'MALICIOUS' ? 'text-red-400' : 'text-emerald-400'}`}>{malwareFinalResult.confidence}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <span className="font-mono text-[9px] text-slate-500 uppercase block tracking-wider">Identified Classification Type</span>
                        <span className="font-serif italic text-sm text-slate-300 mt-1 block">{malwareFinalResult.type}</span>
                      </div>
                      <div>
                        <span className="font-mono text-[9px] text-slate-500 uppercase block tracking-wider">Invariant Features Traced</span>
                        <ul className="mt-1 space-y-1 list-disc list-inside text-slate-400 text-[10px] font-light">
                          {malwareFinalResult.reasons.map((r: string) => (
                            <li key={r}>{r}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
