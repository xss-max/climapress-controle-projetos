import React, { useState, useMemo, useEffect, useRef } from "react";

// --- SELF-CONTAINED SVG ICONS (ELIMINATES PEER-DEPENDENCY & SYMBOL MISMATCHES) ---
const LayoutDashboard = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" />
  </svg>
);
const Calendar = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>
  </svg>
);
const Clock = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const CheckCircle2 = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
  </svg>
);
const AlertCircle = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
  </svg>
);
const Users = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const FolderPlus = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 10v6"/><path d="M9 13h6"/><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 8 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>
  </svg>
);
const ListPlus = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 12H3"/><path d="M16 6H3"/><path d="M16 18H3"/><path d="M18 9v6"/><path d="M21 12h-6"/>
  </svg>
);
const Plus = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="M12 5v14"/>
  </svg>
);
const Edit2 = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
  </svg>
);
const Trash2 = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>
  </svg>
);
const User = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);
const X = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>
);
const FileText = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>
  </svg>
);
const FileSpreadsheet = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M8 13h2"/><path d="M14 13h2"/><path d="M8 17h2"/><path d="M14 17h2"/>
  </svg>
);
const RefreshCw = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>
  </svg>
);
const PlayCircle = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
  </svg>
);
const ChevronRight = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);
const ChevronLeft = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6"/>
  </svg>
);
const Printer = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect width="12" height="8" x="6" y="14" rx="1"/>
  </svg>
);
const Lock = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const History = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><polyline points="12 7 12 12 15 15"/>
  </svg>
);
const Building2 = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>
  </svg>
);
const Eye = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);
const UserPlus = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/>
  </svg>
);
const EyeOff = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/>
  </svg>
);
const Key = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/>
  </svg>
);
const LogOut = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>
  </svg>
);
const Copy = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
  </svg>
);
const Mail = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const Send = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);
const BarChart2 = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/>
  </svg>
);
const TrendingUp = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
  </svg>
);

// --- HELPER: GERAÇÃO DE SENHA SEGURA CORPORATIVA (8 CARACTERES ALFANUMÉRICO + SÍMBOLO) ---
const generateSecurePassword = (prefix = "Clima") => {
  const specialChars = ["@", "#", "$", "*", "!"];
  const randomSpecial = specialChars[Math.floor(Math.random() * specialChars.length)];
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}${randomSpecial}${randomNum}`;
};

// --- LOGO COMPONENT (IDENTIDADE OFICIAL CLIMAPRESS DA IMAGEM) ---
const ClimapressLogo = ({ className = "h-10 w-auto" }) => (
  <svg viewBox="0 0 340 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Faixa Superior Azul Escuro (#15365C) com cantos superiores arredondados */}
    <rect x="0" y="0" width="340" height="34" rx="8" fill="#15365C" />
    <rect x="0" y="24" width="340" height="10" fill="#15365C" />
    
    {/* Divisória Branca Central */}
    <rect x="0" y="34" width="340" height="7" fill="#FFFFFF" />
    
    {/* Bloco Inferior Vermelho Climapress (#F2293E) com cantos inferiores arredondados */}
    <rect x="0" y="41" width="340" height="59" rx="8" fill="#F2293E" />
    <rect x="0" y="41" width="340" height="10" fill="#F2293E" />
    
    {/* Tipografia Oficial em Itálico Negrito "Climapress" */}
    <text
      x="18"
      y="87"
      fill="#FFFFFF"
      fontFamily="'Arial Black', 'Helvetica Neue', Arial, sans-serif"
      fontSize="49"
      fontWeight="900"
      fontStyle="italic"
      letterSpacing="-0.5"
    >
      Climapress
    </text>
  </svg>
);

// --- TAREFAS PADRÕES DA CLIMAPRESS LANÇADAS AUTOMATICAMENTE AO INCLUIR UMA OBRA ---
const DEFAULT_OBRA_TASKS = [
  { atividade: "Projeto de rede de dutos", fase: "Projetos", dias: 10 },
  { atividade: "Projeto de hidráulica", fase: "Projetos", dias: 10 },
  { atividade: "Projeto de difusão", fase: "Projetos", dias: 8 },
  { atividade: "Projeto de elétrica", fase: "Projetos", dias: 8 },
  { atividade: "Projeto de automação", fase: "Projetos", dias: 8 },
  { atividade: "Solicitação de Ventiladores", fase: "Suprimentos", dias: 5 },
  { atividade: "Solicitação de Chiller's", fase: "Suprimentos", dias: 5 },
  { atividade: "Solicitação de bombas", fase: "Suprimentos", dias: 5 },
  { atividade: "Solicitação Fancoil / AHU", fase: "Suprimentos", dias: 5 },
  { atividade: "Solicitação de Fancoletes", fase: "Suprimentos", dias: 5 },
  { atividade: "Solicitação de equipamentos do sistema VRF Evap + Cond", fase: "Suprimentos", dias: 5 },
  { atividade: "Solicitação de Válvulas de controle", fase: "Suprimentos", dias: 5 },
  { atividade: "Solicitação de QE", fase: "Suprimentos", dias: 5 },
  { atividade: "Solicitação de Variadores de frequência/soft start", fase: "Suprimentos", dias: 5 },
  { atividade: "Solicitação de tubulação hidráulica e Isolamento térmico", fase: "Suprimentos", dias: 7 },
  { atividade: "Solicitação de rede de dutos e isolamento térmico", fase: "Suprimentos", dias: 7 },
  { atividade: "Solicitação tubulação de cobre e isolamento térmico", fase: "Suprimentos", dias: 7 },
  { atividade: "Solicitação de start up de equipamentos e sistemas", fase: "Comissionamento", dias: 6 },
  { atividade: "Solicitação de comissionamento e TAB", fase: "Comissionamento", dias: 8 },
  { atividade: "Projeto As Built", fase: "Entrega", dias: 10 },
  { atividade: "Entrega de Data Book", fase: "Entrega", dias: 5 }
];

// --- EQUIPE INICIAL REAL: COORDENADOR RESPONSÁVEL ---
const INITIAL_EQUIPE = [
  {
    id: 1,
    nome: "Engº Murilo Miranda da Silva",
    email: "murilo.silva@climapress.com.br",
    fone: "(11) 98765-4321",
    role: "Coordenador",
    senha: "123",
    disponibilidade: "ativo"
  }
];

// --- BASE DE DADOS LIMPA PARA PRODUÇÃO (SEM DADOS DE TESTE) ---
const INITIAL_OBRAS = [];

// --- CARGA INICIAL DE OBRAS (inserida uma única vez, ignora nomes já existentes) ---
const SEED_OBRAS = [
  { nome: "Gandini", cliente: "KIA" },
  { nome: "Cefalosporinicos", cliente: "BLAÚ" },
  { nome: "ROCKET", cliente: "DAIICHI" },
  { nome: "NUBANK", cliente: "ATHIE WOHNRATH" },
  { nome: "CORIMA", cliente: "CRISTÁLIA" },
  { nome: "JHSF - Reserva Cidade Jardim", cliente: "HTB" },
  { nome: "Medical Center", cliente: "RACIONAL" },
  { nome: "ICT", cliente: "BLAÚ" },
  { nome: "Mormons", cliente: "TEIXEIRA DUARTE" },
  { nome: "ROCKET 2.5", cliente: "DAIICHI" },
  { nome: "GTIS", cliente: "RACIONAL" },
  { nome: "Diversas Instalações", cliente: "Matarazzo - BM" }
];
const SEED_OBRAS_FLAG = "climapress_seed_obras_v1";
const INITIAL_ACTIVITIES_LIST = [];
const INITIAL_TIME_ENTRIES = [];

// Limpeza única e automática de dados de teste antigos armazenados em localStorage
if (typeof window !== "undefined") {
  try {
    const isCleaned = window.localStorage.getItem("climapress_prod_clean_v28");
    if (!isCleaned) {
      window.localStorage.removeItem("climapress_obras");
      window.localStorage.removeItem("climapress_atividades");
      window.localStorage.removeItem("climapress_banco_horas");
      window.localStorage.removeItem("climapress_audit_logs");
      window.localStorage.removeItem("climapress_obras_excluidas");

      const storedEquipe = window.localStorage.getItem("climapress_equipe");
      if (storedEquipe) {
        try {
          const parsed = JSON.parse(storedEquipe);
          const onlyRealUsers = Array.isArray(parsed) ? parsed.filter(u =>
            u.email === "murilo.silva@climapress.com.br" ||
            u.email === "murilo.miranda@climapress.com.br"
          ).map(u => ({ ...u, email: "murilo.silva@climapress.com.br" })) : [];
          window.localStorage.setItem("climapress_equipe", JSON.stringify(onlyRealUsers.length > 0 ? onlyRealUsers : INITIAL_EQUIPE));
        } catch (e) {}
      }
      window.localStorage.setItem("climapress_prod_clean_v28", "true");
    }
  } catch (e) {
    console.warn("Erro ao executar limpeza de dados de teste:", e);
  }
}

// --- LOCALSTORAGE SAFE HELPERS (BUG-02 RESOLUTION) ---
const loadStorage = (key, fallback) => {
  if (typeof window === "undefined") return fallback;
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (err) {
    console.warn(`Erro ao carregar do localStorage (${key}):`, err);
    return fallback;
  }
};

export default function App() {
  // Global States com Persistência em LocalStorage (BUG-02)
  const [equipe, setEquipe] = useState(() => {
    const loaded = loadStorage("climapress_equipe", INITIAL_EQUIPE);
    return Array.isArray(loaded) ? loaded.map(u => {
      if (u.email === "murilo.miranda@climapress.com.br") {
        return { ...u, email: "murilo.silva@climapress.com.br" };
      }
      return u;
    }) : INITIAL_EQUIPE;
  });
  const [currentUser, setCurrentUser] = useState(() => {
    const loaded = loadStorage("climapress_current_user", INITIAL_EQUIPE[0]);
    if (loaded && loaded.email === "murilo.miranda@climapress.com.br") {
      return { ...loaded, email: "murilo.silva@climapress.com.br" };
    }
    return loaded || INITIAL_EQUIPE[0];
  });
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [currentTab, setCurrentTab] = useState("dashboard"); // dashboard | minhas | gestao_obras | gestao_tarefas | horas | matriz | gantt | meu_perfil
  const [obras, setObras] = useState(() => loadStorage("climapress_obras", INITIAL_OBRAS));
  const [atividades, setAtividades] = useState(() => loadStorage("climapress_atividades", INITIAL_ACTIVITIES_LIST));
  const [bancoHoras, setBancoHoras] = useState(() => loadStorage("climapress_banco_horas", INITIAL_TIME_ENTRIES));
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [auditLogs, setAuditLogs] = useState(() => loadStorage("climapress_audit_logs", []));
  const [obrasExcluidas, setObrasExcluidas] = useState(() => loadStorage("climapress_obras_excluidas", []));
  const [obrasViewTab, setObrasViewTab] = useState("ativas"); // "ativas" | "lixeira"
  const [showGraficoHoras, setShowGraficoHoras] = useState(true);
  const [tipoGraficoHoras, setTipoGraficoHoras] = useState("mensal"); // "mensal" | "multimeses"
  const [resumoPeriodoFilter, setResumoPeriodoFilter] = useState("todos"); // "todos" | "2026-10" | "2026-11" | "2026-12" | "2027-01" | "2027-02"
  const [dashboardViewTab, setDashboardViewTab] = useState("cockpit"); // "cockpit" | "raiox" | "completo"

  // Sync to LocalStorage effects
  useEffect(() => {
    try { window.localStorage.setItem("climapress_equipe", JSON.stringify(equipe)); } catch (e) {}
  }, [equipe]);

  useEffect(() => {
    if (currentUser && equipe.length > 0 && !equipe.some(u => u.id === currentUser.id)) {
      setCurrentUser(equipe[0]);
    }
  }, [equipe, currentUser]);

  useEffect(() => {
    try { window.localStorage.setItem("climapress_current_user", JSON.stringify(currentUser)); } catch (e) {}
  }, [currentUser]);

  useEffect(() => {
    try { window.localStorage.setItem("climapress_obras", JSON.stringify(obras)); } catch (e) {}
  }, [obras]);

  // Carga única das obras do SEED_OBRAS (com as 21 tarefas padrões cada)
  useEffect(() => {
    try {
      if (window.localStorage.getItem(SEED_OBRAS_FLAG)) return;
      window.localStorage.setItem(SEED_OBRAS_FLAG, "true");
    } catch (e) { return; }
    const existentes = new Set(obras.map(o => o.nome.trim().toLowerCase()));
    const novas = SEED_OBRAS.filter(s => !existentes.has(s.nome.toLowerCase()));
    if (novas.length === 0) return;
    const fmt = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    const hoje = new Date();
    const todayStr = fmt(hoje);
    let obraId = Math.max(...obras.map(o => o.id), 0);
    let taskId = Math.max(...atividades.map(a => a.id), 0);
    const novasObras = [];
    const novasTarefas = [];
    novas.forEach(s => {
      obraId += 1;
      novasObras.push({ id: obraId, nome: s.nome, cliente: s.cliente, status: "Ativa" });
      DEFAULT_OBRA_TASKS.forEach(def => {
        taskId += 1;
        const dias = def.dias || 10;
        const fim = new Date(hoje); fim.setDate(fim.getDate() + dias);
        novasTarefas.push({
          id: taskId, obraNome: s.nome, atividade: def.atividade.toUpperCase(),
          fase: def.fase || "Projetos", dias, resp1: "A Definir", resp2: "", resp3: "",
          percentual: 0, isNA: false, inicioPrevisto: todayStr, terminoPrevisto: fmt(fim), lastUpdated: todayStr
        });
      });
    });
    setObras(prev => [...prev, ...novasObras]);
    setAtividades(prev => [...prev, ...novasTarefas]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try { window.localStorage.setItem("climapress_atividades", JSON.stringify(atividades)); } catch (e) {}
  }, [atividades]);

  useEffect(() => {
    try { window.localStorage.setItem("climapress_banco_horas", JSON.stringify(bancoHoras)); } catch (e) {}
  }, [bancoHoras]);

  useEffect(() => {
    try { window.localStorage.setItem("climapress_audit_logs", JSON.stringify(auditLogs)); } catch (e) {}
  }, [auditLogs]);

  useEffect(() => {
    try { window.localStorage.setItem("climapress_obras_excluidas", JSON.stringify(obrasExcluidas)); } catch (e) {}
  }, [obrasExcluidas]);

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginSenha, setLoginSenha] = useState("");
  const [loginError, setLoginError] = useState("");
  const [showLoginPass, setShowLoginPass] = useState(false);

  // Profile password renewal modal (Renovação com confirmação e validação de senha atual)
  const [isProfilePassModalOpen, setIsProfilePassModalOpen] = useState(false);
  const [currentProfilePassword, setCurrentProfilePassword] = useState("");
  const [newProfilePassword, setNewProfilePassword] = useState("");
  const [confirmProfilePassword, setConfirmProfilePassword] = useState("");
  const [profilePassError, setProfilePassError] = useState("");
  const [showProfileCurrentPass, setShowProfileCurrentPass] = useState(false);
  const [showProfileNewPass, setShowProfileNewPass] = useState(false);

  // Coordinator reset user password modal (Geração e renovação forçada pelo Coordenador)
  const [isResetUserPassModalOpen, setIsResetUserPassModalOpen] = useState(false);
  const [userToResetPass, setUserToResetPass] = useState(null);
  const [tempGeneratedPass, setTempGeneratedPass] = useState("");
  const [showTempResetPass, setShowTempResetPass] = useState(true);

  // Visibility toggles for create/invite modals
  const [showInvitePass, setShowInvitePass] = useState(false);
  const [showUserPass, setShowUserPass] = useState(false);

  // Feedback notifications
  const [feedbackMsg, setFeedbackMsg] = useState("");

  // Filter states
  const [raioXObra, setRaioXObra] = useState("Todas");
  const [resumoCardFilter, setResumoCardFilter] = useState("todos");
  const [minhasAtividadesObraFilter, setMinhasAtividadesObraFilter] = useState("Todas");
  const [dashboardMes, setDashboardMes] = useState("2026-11"); // Controle de Horas Mensais (YYYY-MM ou "todos")
  const HORAS_MENSAIS_POR_COLABORADOR = 176; // 44h semanais Time de Projetos x 4 semanas (8h diárias base, sem considerar hora extra)
  const [taskManagerObra, setTaskManagerObra] = useState(() => {
    const loaded = loadStorage("climapress_obras", INITIAL_OBRAS);
    return loaded[0]?.nome || "";
  });

  // Sincronização automática de taskManagerObra (BUG-01)
  useEffect(() => {
    if (obras.length > 0 && !obras.some(o => o.nome === taskManagerObra)) {
      setTaskManagerObra(obras[0].nome);
    }
  }, [obras, taskManagerObra]);

  // Helper para restaurar base de dados inicial para testes
  const handleResetToDemo = () => {
    if (window.confirm("Deseja restaurar toda a base de dados para o padrão de testes da Climapress? Todos os apontamentos e obras voltarão ao modelo original.")) {
      try {
        window.localStorage.removeItem("climapress_equipe");
        window.localStorage.removeItem("climapress_current_user");
        window.localStorage.removeItem("climapress_obras");
        window.localStorage.removeItem("climapress_atividades");
        window.localStorage.removeItem("climapress_banco_horas");
        window.localStorage.removeItem("climapress_audit_logs");
        window.localStorage.removeItem("climapress_obras_excluidas");
      } catch (e) {}
      setEquipe(INITIAL_EQUIPE);
      setCurrentUser(INITIAL_EQUIPE[0]);
      setObras(INITIAL_OBRAS);
      setAtividades(INITIAL_ACTIVITIES_LIST);
      setBancoHoras(INITIAL_TIME_ENTRIES);
      setAuditLogs([]);
      setObrasExcluidas([]);
      setObrasViewTab("ativas");
      setTaskManagerObra(INITIAL_OBRAS[0]?.nome || "");
      setRaioXObra("Todas");
      setMinhasAtividadesObraFilter("Todas");
      showFeedback("Base de dados restaurada para o padrão oficial de demonstração!");
    }
  };

  // Gantt specific controls
  const [ganttObraFilter, setGanttObraFilter] = useState("Todas");
  const [ganttHeaderMode, setGanttHeaderMode] = useState("semanas"); // semanas | datas
  const [ganttPaperSize, setGanttPaperSize] = useState("A3"); // A4 | A3 | A2 | A1 | A0
  const [ganttScrollPercent, setGanttScrollPercent] = useState(25);

  // Navigation scroll refs
  const headerNavRef = useRef(null);
  const quickSelectRef = useRef(null);
  const ganttScrollRef = useRef(null);
  const [showDemoLogins, setShowDemoLogins] = useState(true);

  // Modals
  const [isObraModalOpen, setIsObraModalOpen] = useState(false);
  const [obraModalMode, setObraModalMode] = useState("create"); // create | edit
  const [editingObra, setEditingObra] = useState({ id: 0, nome: "", cliente: "", status: "Ativa" });

  const [isDeleteObraModalOpen, setIsDeleteObraModalOpen] = useState(false);
  const [obraToDelete, setObraToDelete] = useState(null);
  const [deleteObraPassword, setDeleteObraPassword] = useState("");
  const [deleteObraError, setDeleteObraError] = useState("");

  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [taskModalMode, setTaskModalMode] = useState("create");
  const [editingTask, setEditingTask] = useState({
    id: 0,
    obraNome: "",
    atividade: "",
    fase: "Projetos",
    dias: 14,
    resp1: "A Definir",
    resp2: "",
    resp3: "",
    percentual: 0,
    isNA: false,
    inicioPrevisto: "2026-11-10",
    terminoPrevisto: "2026-11-24"
  });

  const [taskToDelete, setTaskToDelete] = useState(null);

  // Modal para Adicionar / Editar Profissional na Equipe
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [userModalMode, setUserModalMode] = useState("create"); // create | edit
  const [editingUser, setEditingUser] = useState({
    id: 0,
    nome: "",
    email: "",
    fone: "",
    role: "Colaborador",
    senha: "123"
  });
  const [userToDelete, setUserToDelete] = useState(null);

  // Modal de Convite Rápido de Usuário
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [inviteData, setInviteData] = useState({
    nome: "",
    email: "",
    fone: "",
    role: "Colaborador",
    senha: "123"
  });

  // Modal de Confirmação & Envio de E-mail de Convite
  const [inviteEmailModal, setInviteEmailModal] = useState({
    isOpen: false,
    user: null,
    subject: "",
    body: "",
    copied: false
  });

  // Helper de data local (AAAA-MM-DD) sem problemas de fuso horário
  const getRelativeDateStr = (daysAgo = 0) => {
    const d = new Date();
    d.setDate(d.getDate() - daysAgo);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Time logging modal from Minhas Atividades & Apontamento de Horas
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);
  const [activeTaskForTime, setActiveTaskForTime] = useState(null);
  const [newTimeEntry, setNewTimeEntry] = useState({
    data: getRelativeDateStr(0),
    horaInicio: "08:00",
    horaFim: "18:00",
    intervaloMin: 60,
    descricao: "",
    colaboradorId: 1,
    colaboradorNome: ""
  });

  // Role booleans
  const isCoordinator = currentUser?.role === "Coordenador";
  const isViewer = currentUser?.role === "Visualizador";
  const isCollaborator = currentUser?.role === "Colaborador";

  // Enforce collaborator route protection (Visualizadores podem ver todas as abas assim como coordenadores)
  useEffect(() => {
    const restrictedTabs = ["dashboard", "gestao_obras", "gestao_tarefas", "horas", "matriz", "gantt"];
    if (isCollaborator && restrictedTabs.includes(currentTab)) {
      setCurrentTab("minhas");
    }
  }, [isCollaborator, currentTab]);

  const showFeedback = (msg) => {
    setFeedbackMsg(msg);
    setTimeout(() => setFeedbackMsg(""), 4000);
  };

  const handleGlobalRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      showFeedback("Dados do sistema e cálculos atualizados com sucesso!");
    }, 600);
  };

  // --- CÁLCULO DE CAPACIDADE DE ENGENHARIA (44H/SEM = 176H/MÊS POR COLABORADOR) E CRUZAMENTO COM DEMANDA ---
  const MESES_OPCOES = useMemo(() => [
    { id: "2026-10", nome: "Outubro / 2026", mesAbrev: "Out/26" },
    { id: "2026-11", nome: "Novembro / 2026 (Mês Atual)", mesAbrev: "Nov/26" },
    { id: "2026-12", nome: "Dezembro / 2026", mesAbrev: "Dez/26" },
    { id: "2027-01", nome: "Janeiro / 2027", mesAbrev: "Jan/27" },
    { id: "2027-02", nome: "Fevereiro / 2027", mesAbrev: "Fev/27" },
    { id: "todos", nome: "Todos os Meses (Consolidado)", mesAbrev: "Geral" }
  ], []);

  // Time operacional de engenharia (exclui perfil de Diretoria/Visualizador)
  const equipeTecnica = useMemo(() => {
    return equipe.filter(u => u.role !== "Visualizador");
  }, [equipe]);

  // Função para calcular as horas de uma tarefa demandadas em um mês específico (distribuição por overlap de calendário - 100% blindada contra nulos e NaN)
  const getTaskHoursInMonth = (act, mesAno) => {
    if (!act) return 0;
    if (!mesAno || mesAno === "todos") return (Number(act.dias) || 14) * 10;
    if (!act.inicioPrevisto || !act.terminoPrevisto) return 0;

    const parts = String(mesAno).split("-");
    if (parts.length < 2) return (Number(act.dias) || 14) * 10;
    const ano = Number(parts[0]);
    const mes = Number(parts[1]);
    if (isNaN(ano) || isNaN(mes) || mes < 1 || mes > 12) return 0;

    const mStart = new Date(ano, mes - 1, 1).getTime();
    const mEnd = new Date(ano, mes, 0, 23, 59, 59).getTime(); // Último dia do mês

    const tStart = new Date(act.inicioPrevisto + "T00:00:00").getTime();
    const tEnd = new Date(act.terminoPrevisto + "T23:59:59").getTime();

    if (isNaN(tStart) || isNaN(tEnd) || tEnd < mStart || tStart > mEnd) return 0;

    const overlapStart = Math.max(tStart, mStart);
    const overlapEnd = Math.min(tEnd, mEnd);
    const overlapDays = Math.max(1, Math.round((overlapEnd - overlapStart) / 86400000) + 1);

    const totalTaskDays = Math.max(1, Math.round((tEnd - tStart) / 86400000) + 1);
    const totalHours = (Number(act.dias) || totalTaskDays) * 10;

    return Math.round((totalHours * (overlapDays / totalTaskDays)) * 10) / 10;
  };

  // --- STATS CALCULATIONS (MÉTRICAS CONSOLIDADAS E POR OBRA) ---
  const obrasStats = useMemo(() => {
    return obras.map((obra) => {
      const actsObra = atividades.filter((a) => a.obraNome === obra.nome && !a.isNA);
      const totalActs = actsObra.length;
      const concluidas = actsObra.filter((a) => a.percentual >= 100).length;
      const emAndamento = actsObra.filter((a) => a.percentual > 0 && a.percentual < 100).length;
      const futuras = actsObra.filter((a) => a.percentual === 0).length;

      const horasPrevistas = actsObra.reduce((acc, a) => acc + ((a.dias || 14) * 10), 0);
      const horasRealizadas = Math.round(
        bancoHoras
          .filter((b) => b.obraNome === obra.nome)
          .reduce((acc, curr) => acc + (curr.totalHoras || 0), 0) * 10
      ) / 10;

      const mediaPerc = totalActs > 0
        ? Math.round(actsObra.reduce((acc, a) => acc + a.percentual, 0) / totalActs * 10) / 10
        : 0;

      return {
        ...obra,
        totalActs,
        concluidas,
        emAndamento,
        futuras,
        horasPrevistas,
        horasRealizadas,
        mediaPerc
      };
    });
  }, [obras, atividades, bancoHoras]);

  const resumoStat = useMemo(() => {
    const isPeriodoEspecifico = resumoPeriodoFilter !== "todos";

    if (raioXObra === "Todas") {
      let totalPrev = 0;
      let totalConc = 0;
      let totalAndam = 0;
      let totalFut = 0;

      const filteredActs = atividades.filter(a => {
        if (a.isNA) return false;
        if (isPeriodoEspecifico) {
          return getTaskHoursInMonth(a, resumoPeriodoFilter) > 0;
        }
        return true;
      });

      filteredActs.forEach(a => {
        const hPrev = isPeriodoEspecifico ? getTaskHoursInMonth(a, resumoPeriodoFilter) : ((a.dias || 14) * 10);
        totalPrev += hPrev;
        if (a.percentual >= 100) totalConc++;
        else if (a.percentual > 0) totalAndam++;
        else totalFut++;
      });

      const totalReal = Math.round(
        bancoHoras
          .filter(b => isPeriodoEspecifico ? (b.data && b.data.startsWith(resumoPeriodoFilter)) : true)
          .reduce((acc, curr) => acc + (curr.totalHoras || 0), 0) * 10
      ) / 10;

      const mediaGlobal = filteredActs.length > 0
        ? Math.round(filteredActs.reduce((acc, a) => acc + a.percentual, 0) / filteredActs.length * 10) / 10
        : 0;

      return {
        cliente: "Todas as Obras / Multi-clientes",
        horasPrevistas: Math.round(totalPrev * 10) / 10,
        horasRealizadas: totalReal,
        concluidas: totalConc,
        emAndamento: totalAndam,
        futuras: totalFut,
        mediaPerc: mediaGlobal,
        totalAtividades: filteredActs.length
      };
    }

    const current = obras.find((o) => o.nome === raioXObra);
    if (!current) {
      return {
        cliente: "—",
        horasPrevistas: 0,
        horasRealizadas: 0,
        concluidas: 0,
        emAndamento: 0,
        futuras: 0,
        mediaPerc: 0,
        totalAtividades: 0
      };
    }

    const actsObra = atividades.filter(a => {
      if (a.obraNome !== raioXObra || a.isNA) return false;
      if (isPeriodoEspecifico) {
        return getTaskHoursInMonth(a, resumoPeriodoFilter) > 0;
      }
      return true;
    });

    let prevObra = 0;
    let conc = 0;
    let andam = 0;
    let fut = 0;

    actsObra.forEach(a => {
      const h = isPeriodoEspecifico ? getTaskHoursInMonth(a, resumoPeriodoFilter) : ((a.dias || 14) * 10);
      prevObra += h;
      if (a.percentual >= 100) conc++;
      else if (a.percentual > 0) andam++;
      else fut++;
    });

    const realObra = Math.round(
      bancoHoras
        .filter(b => b.obraNome === raioXObra && (isPeriodoEspecifico ? (b.data && b.data.startsWith(resumoPeriodoFilter)) : true))
        .reduce((acc, curr) => acc + (curr.totalHoras || 0), 0) * 10
    ) / 10;

    const media = actsObra.length > 0
      ? Math.round(actsObra.reduce((acc, a) => acc + a.percentual, 0) / actsObra.length * 10) / 10
      : 0;

    return {
      cliente: current.cliente,
      horasPrevistas: Math.round(prevObra * 10) / 10,
      horasRealizadas: realObra,
      concluidas: conc,
      emAndamento: andam,
      futuras: fut,
      mediaPerc: media,
      totalAtividades: actsObra.length
    };
  }, [raioXObra, resumoPeriodoFilter, obras, atividades, bancoHoras]);

  // Balanço Executivo de Horas (Capacidade Time de Projeto x Demanda) para o Dashboard
  const balancoHorasMes = useMemo(() => {
    const numTecnicos = equipeTecnica.length;
    const tecnicosAtivos = equipeTecnica.filter(u => (u.disponibilidade || "ativo") === "ativo");
    const tecnicosFerias = equipeTecnica.filter(u => u.disponibilidade === "ferias");
    const tecnicosCampo = equipeTecnica.filter(u => u.disponibilidade === "campo");

    const numAtivosProjetos = tecnicosAtivos.length;
    const multiplicadorMeses = dashboardMes === "todos" ? 5 : 1;
    const capacidadeTotalDisponivel = numAtivosProjetos * HORAS_MENSAIS_POR_COLABORADOR * multiplicadorMeses;

    let horasDemandadasTotal = 0;
    const horasDemandadasPorObra = {};
    obras.forEach(o => { horasDemandadasPorObra[o.nome] = 0; });

    atividades.forEach(a => {
      const hMes = getTaskHoursInMonth(a, dashboardMes);
      horasDemandadasTotal += hMes;
      if (horasDemandadasPorObra[a.obraNome] !== undefined) {
        horasDemandadasPorObra[a.obraNome] += hMes;
      }
    });

    horasDemandadasTotal = Math.round(horasDemandadasTotal * 10) / 10;

    const horasRealizadasNoMes = Math.round(
      bancoHoras
        .filter(b => dashboardMes === "todos" ? true : (b.data && b.data.startsWith(dashboardMes)))
        .reduce((acc, curr) => acc + (curr.totalHoras || 0), 0) * 10
    ) / 10;

    const saldoHoras = Math.round((capacidadeTotalDisponivel - horasDemandadasTotal) * 10) / 10;
    const taxaOcupacao = capacidadeTotalDisponivel > 0
      ? Math.round((horasDemandadasTotal / capacidadeTotalDisponivel) * 100)
      : (horasDemandadasTotal > 0 ? 100 : 0);

    // Atividades sem profissional vinculado ("A Definir")
    const tarefasPendentesAlocacao = atividades.filter(
      a => !a.resp1 || a.resp1 === "A Definir" || a.resp1 === "(A Definir)"
    );

    // Comparativo mês a mês para gráfico/régua de capacidade
    const comparativoMeses = MESES_OPCOES.filter(m => m.id !== "todos").map(m => {
      const capMes = numAtivosProjetos * HORAS_MENSAIS_POR_COLABORADOR;
      const demMes = Math.round(
        atividades.reduce((acc, a) => acc + getTaskHoursInMonth(a, m.id), 0) * 10
      ) / 10;
      const realMes = Math.round(
        bancoHoras
          .filter(b => b.data && b.data.startsWith(m.id))
          .reduce((acc, curr) => acc + (curr.totalHoras || 0), 0) * 10
      ) / 10;
      const ocupMes = capMes > 0 ? Math.round((demMes / capMes) * 100) : (demMes > 0 ? 100 : 0);
      return {
        ...m,
        capacidade: capMes,
        demanda: demMes,
        realizado: realMes,
        ocupacao: ocupMes
      };
    });

    return {
      numTecnicos,
      numAtivosProjetos,
      numFerias: tecnicosFerias.length,
      numCampo: tecnicosCampo.length,
      tecnicosAtivos,
      tecnicosFerias,
      tecnicosCampo,
      capacidadeTotalDisponivel,
      horasDemandadasTotal,
      horasRealizadasNoMes,
      saldoHoras,
      taxaOcupacao,
      horasDemandadasPorObra,
      tarefasPendentesAlocacao,
      comparativoMeses
    };
  }, [dashboardMes, equipeTecnica, atividades, bancoHoras, obras]);

  // --- AUTENTICAÇÃO, LOGIN & GESTÃO DE SENHAS ---
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginError("");
    const emailNorm = loginEmail.trim().toLowerCase();
    const user = equipe.find(u => u.email.toLowerCase() === emailNorm);
    if (!user) {
      setLoginError("E-mail não cadastrado na equipe da Climapress.");
      return;
    }
    if (user.senha !== loginSenha) {
      setLoginError("Senha incorreta. Verifique suas credenciais de acesso.");
      return;
    }
    setCurrentUser(user);
    setIsAuthenticated(true);
    setLoginSenha("");
    showFeedback(`Bem-vindo, ${user.nome}! Sessão iniciada como ${user.role}.`);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLoginEmail(currentUser?.email || "");
    setLoginSenha("");
    setLoginError("");
    showFeedback("Sessão encerrada com sucesso.");
  };

  // Coordenador gera e reseta senha temporária para membro da equipe
  const handleOpenResetUserPassword = (colab) => {
    setUserToResetPass(colab);
    setTempGeneratedPass(generateSecurePassword("Clima"));
    setShowTempResetPass(true);
    setIsResetUserPassModalOpen(true);
  };

  const handleConfirmResetUserPassword = (e) => {
    e.preventDefault();
    if (!userToResetPass || !tempGeneratedPass.trim()) return;

    const trimmed = tempGeneratedPass.trim();
    setEquipe(prev =>
      prev.map(u => (u.id === userToResetPass.id ? { ...u, senha: trimmed } : u))
    );
    if (currentUser?.id === userToResetPass.id) {
      setCurrentUser(prev => ({ ...prev, senha: trimmed }));
    }
    showFeedback(`Nova senha gerada e gravada para ${userToResetPass.nome}: "${trimmed}"`);
    setIsResetUserPassModalOpen(false);
    setUserToResetPass(null);
  };

  // Renovação de senha pelo próprio usuário no Perfil
  const handleSaveProfilePassword = (e) => {
    e.preventDefault();
    setProfilePassError("");

    if (currentProfilePassword !== currentUser?.senha) {
      setProfilePassError("Senha atual incorreta.");
      return;
    }

    if (newProfilePassword.length < 6) {
      setProfilePassError("A nova senha deve possuir no mínimo 6 caracteres.");
      return;
    }

    if (newProfilePassword !== confirmProfilePassword) {
      setProfilePassError("A confirmação da nova senha não confere.");
      return;
    }

    const trimmed = newProfilePassword.trim();
    setEquipe(prev =>
      prev.map(u => (u.id === currentUser?.id ? { ...u, senha: trimmed } : u))
    );
    setCurrentUser(prev => ({ ...prev, senha: trimmed }));
    showFeedback("Sua senha foi renovada com sucesso!");
    setIsProfilePassModalOpen(false);
    setCurrentProfilePassword("");
    setNewProfilePassword("");
    setConfirmProfilePassword("");
    setProfilePassError("");
  };

  // Helper para preparar e encaminhar e-mail corporativo de convite com credenciais
  const triggerInviteEmail = (targetUser) => {
    if (!targetUser || !targetUser.email) return;
    const appUrl = "https://climapress-controle-projetos.vercel.app/";
    const subject = `[Climapress Obras] Convite de Acesso ao Sistema — ${targetUser.nome}`;
    const body = `Olá, ${targetUser.nome}!\n\n` +
      `Você foi convidado(a) para acessar o Sistema Integrado de Gestão de Obras da Climapress Instalações.\n\n` +
      `Suas credenciais de acesso corporativo:\n` +
      `--------------------------------------------------\n` +
      `• Link de Acesso: ${appUrl}\n` +
      `• E-mail cadastrado: ${targetUser.email}\n` +
      `• Perfil de Acesso: ${targetUser.role}\n` +
      `• Senha inicial: ${targetUser.senha || "123"}\n` +
      `--------------------------------------------------\n\n` +
      `Instruções para o primeiro acesso:\n` +
      `1. Acesse o sistema pelo link acima no seu navegador (Google Chrome ou Microsoft Edge).\n` +
      `2. Insira seu e-mail corporativo (${targetUser.email}) e a senha inicial informada.\n` +
      `3. Recomendamos alterar sua senha no menu "Meu Perfil" após o primeiro login.\n\n` +
      `Em caso de dúvidas técnicas ou alinhamento de frentes, contate a coordenação técnica.`;

    // Disparo imediato via mailto para abrir o cliente de e-mail padrão do sistema (Outlook, Thunderbird, Mail)
    try {
      const mailtoUrl = `mailto:${encodeURIComponent(targetUser.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      const mailLink = document.createElement("a");
      mailLink.href = mailtoUrl;
      mailLink.target = "_blank";
      mailLink.rel = "noopener noreferrer";
      document.body.appendChild(mailLink);
      mailLink.click();
      document.body.removeChild(mailLink);
    } catch (err) {
      console.warn("Disparo automático de e-mail:", err);
    }

    setInviteEmailModal({
      isOpen: true,
      user: targetUser,
      subject,
      body,
      copied: false
    });
  };

  // Save or Edit User in Equipe (Liberado apenas para Coordenadores)
  const handleSaveUser = (e) => {
    e.preventDefault();
    if (!editingUser.nome.trim() || !editingUser.email.trim()) {
      alert("Preencha nome e e-mail do profissional.");
      return;
    }

    if (userModalMode === "create") {
      const nextId = Math.max(...equipe.map(u => u.id), 0) + 1;
      const newUser = {
        ...editingUser,
        id: nextId,
        nome: editingUser.nome.trim(),
        email: editingUser.email.trim(),
        fone: editingUser.fone.trim() || "(11) 98000-0000",
        role: editingUser.role || "Colaborador",
        disponibilidade: editingUser.disponibilidade || "ativo",
        senha: editingUser.senha || "123"
      };
      setEquipe(prev => [...prev, newUser]);
      setIsUserModalOpen(false);
      showFeedback(`Profissional "${newUser.nome}" cadastrado! E-mail de convite preparado.`);
      triggerInviteEmail(newUser);
    } else {
      const oldUser = equipe.find(u => u.id === editingUser.id);
      const newName = editingUser.nome.trim();
      const newEmail = editingUser.email.trim();
      const newDisp = editingUser.disponibilidade || oldUser?.disponibilidade || "ativo";

      if (oldUser && oldUser.nome !== newName) {
        const oldName = oldUser.nome;
        // Atualiza em cascata o nome do responsável em todas as frentes técnicas
        setAtividades(prev =>
          prev.map(a => ({
            ...a,
            resp1: a.resp1 === oldName ? newName : a.resp1,
            resp2: a.resp2 === oldName ? newName : a.resp2,
            resp3: a.resp3 === oldName ? newName : a.resp3
          }))
        );
        // Atualiza em cascata nos lançamentos do banco de horas
        setBancoHoras(prev =>
          prev.map(b => (b.colaboradorNome === oldName ? { ...b, colaboradorNome: newName } : b))
        );
      }

      setEquipe(prev => prev.map(u => (u.id === editingUser.id ? { ...u, ...editingUser, nome: newName, email: newEmail, disponibilidade: newDisp } : u)));
      if (currentUser?.id === editingUser.id) {
        setCurrentUser(prev => ({ ...prev, ...editingUser, nome: newName, email: newEmail, disponibilidade: newDisp }));
      }
      showFeedback(`Dados de "${newName}" atualizados com sucesso!`);
    }
    setIsUserModalOpen(false);
  };

  // BUG-05 RESOLUTION: Reatribuição automática de tarefas ao excluir usuário
  const confirmDeleteUser = () => {
    if (!userToDelete) return;
    if (userToDelete.id === currentUser?.id) {
      alert("Você não pode excluir o usuário atualmente conectado.");
      setUserToDelete(null);
      return;
    }

    const fallbackCoord = equipe.find(u => u.role === "Coordenador" && u.id !== userToDelete.id)?.nome || "Engº Murilo Miranda da Silva";
    let reassignedCount = 0;

    setAtividades(prev =>
      prev.map(a => {
        let changed = false;
        let newResp1 = a.resp1;
        let newResp2 = a.resp2;
        let newResp3 = a.resp3;

        if (a.resp1 === userToDelete.nome) {
          newResp1 = fallbackCoord;
          changed = true;
          reassignedCount++;
        }
        if (a.resp2 === userToDelete.nome) {
          newResp2 = "";
          changed = true;
        }
        if (a.resp3 === userToDelete.nome) {
          newResp3 = "";
          changed = true;
        }

        return changed ? { ...a, resp1: newResp1, resp2: newResp2, resp3: newResp3 } : a;
      })
    );

    setEquipe(prev => prev.filter(u => u.id !== userToDelete.id));
    if (reassignedCount > 0) {
      showFeedback(`Profissional "${userToDelete.nome}" removido. ${reassignedCount} frente(s) sob sua liderança foram reatribuídas para ${fallbackCoord}.`);
    } else {
      showFeedback(`Profissional "${userToDelete.nome}" removido da equipe.`);
    }
    setUserToDelete(null);
  };

  // Função para alternar rapidamente a disponibilidade do profissional (Ativo em Projetos, Férias ou Campo)
  const handleSetUserDisponibilidade = (userId, novaDisponibilidade) => {
    setEquipe(prev => prev.map(u => {
      if (u.id === userId) {
        return { ...u, disponibilidade: novaDisponibilidade };
      }
      return u;
    }));
    const userMod = equipe.find(u => u.id === userId);
    const labelDisp = novaDisponibilidade === "ferias" 
      ? "Férias (0h na capacidade de projetos)" 
      : novaDisponibilidade === "campo" 
      ? "Em Campo / Obras (0h na capacidade de projetos)" 
      : "Disponível em Projetos (176h/mês)";
    showFeedback(`Disponibilidade de ${userMod?.nome?.split(" ")[0] || "Profissional"} atualizada para "${labelDisp}".`);
  };

  // Helper de impressão do Gantt com injeção de CSS de tamanho de papel de plotter (A4, A3, A2, A1, A0)
  const handlePrintGantt = () => {
    const paperDimensions = {
      A4: "210mm 297mm",
      A3: "297mm 420mm",
      A2: "420mm 594mm",
      A1: "594mm 841mm",
      A0: "841mm 1189mm"
    };
    const chosenDim = paperDimensions[ganttPaperSize] || paperDimensions.A3;

    // Inject temporary print style tag
    const styleEl = document.createElement("style");
    styleEl.id = "gantt-dynamic-print-style";
    styleEl.innerHTML = `
      @page {
        size: ${ganttPaperSize} landscape !important;
        margin: 8mm !important;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
      }
    `;
    document.head.appendChild(styleEl);

    setTimeout(() => {
      window.print();
      const el = document.getElementById("gantt-dynamic-print-style");
      if (el) el.remove();
    }, 200);
  };

  // Gantt Timeline Columns configuration (18 Semanas completas: Outubro/2026 a Fevereiro/2027)
  const ganttWeeks = useMemo(() => [
    { sem: "Sem 41", dates: "05/10 a 11/10" },
    { sem: "Sem 42", dates: "12/10 a 18/10" },
    { sem: "Sem 43", dates: "19/10 a 25/10" },
    { sem: "Sem 44", dates: "26/10 a 01/11" },
    { sem: "Sem 45", dates: "02/11 a 08/11" },
    { sem: "Sem 46", dates: "09/11 a 15/11" },
    { sem: "Sem 47", dates: "16/11 a 22/11" },
    { sem: "Sem 48", dates: "23/11 a 29/11" },
    { sem: "Sem 49", dates: "30/11 a 06/12" },
    { sem: "Sem 50", dates: "07/12 a 13/12" },
    { sem: "Sem 51", dates: "14/12 a 20/12" },
    { sem: "Sem 52", dates: "21/12 a 27/12" },
    { sem: "Sem 01", dates: "28/12 a 03/01" },
    { sem: "Sem 02", dates: "04/01 a 10/01" },
    { sem: "Sem 03", dates: "11/01 a 17/01" },
    { sem: "Sem 04", dates: "18/01 a 24/01" },
    { sem: "Sem 05", dates: "25/01 a 31/01" },
    { sem: "Sem 06", dates: "01/02 a 07/02" }
  ], []);

  // Tasks assigned strictly to the logged-in user (ou todas se for visualizador)
  const minhasAtividades = useMemo(() => {
    if (isViewer) {
      return atividades;
    }
    return atividades.filter(a =>
      a.resp1 === currentUser?.nome ||
      a.resp2 === currentUser?.nome ||
      a.resp3 === currentUser?.nome
    );
  }, [atividades, currentUser, isViewer]);

  const obrasDoColaborador = useMemo(() => {
    const nomes = new Set(minhasAtividades.map(a => a.obraNome));
    return Array.from(nomes);
  }, [minhasAtividades]);

  // Handle task progress update and auto hours calculation on direct 100% completion
  const handleUpdateProgress = (actId, newPercentage, notas) => {
    const act = atividades.find(a => a.id === actId);
    if (!act) return;

    const numPerc = Math.min(100, Math.max(0, Number(newPercentage) || 0));

    setAtividades(prev =>
      prev.map(a => {
        if (a.id === actId) {
          return {
            ...a,
            percentual: numPerc,
            isNA: false,
            diarioNotas: notas !== undefined ? notas : a.diarioNotas,
            lastUpdated: new Date().toISOString().split("T")[0]
          };
        }
        return a;
      })
    );

    // BUG-06 RESOLUTION: Se a atividade era 100% e foi retrocedida para < 100%, estorna o lançamento automático
    if (numPerc < 100 && act.percentual === 100) {
      setBancoHoras(prev =>
        prev.filter(b => !(b.obraNome === act.obraNome && b.atividadeNome === act.atividade && (b.descricao.includes("Conclusão integral") || b.descricao.includes("Carga total computada na criação"))))
      );
      showFeedback(`Progresso ajustado para ${numPerc}%. Horas automáticas de conclusão foram estornadas.`);
      return;
    }

    // Se completou a atividade diretamente (100%), verifica e computa as horas restantes automaticamente
    if (numPerc === 100) {
      const horasPrevistas = (act.dias || 14) * 10;
      const horasJaApontadas = bancoHoras
        .filter(b => b.obraNome === act.obraNome && b.atividadeNome === act.atividade)
        .reduce((acc, curr) => acc + (curr.totalHoras || 0), 0);

      const saldoRestante = Math.round((horasPrevistas - horasJaApontadas) * 10) / 10;

      if (saldoRestante > 0) {
        const autoEntry = {
          id: Date.now(),
          colaboradorId: currentUser?.id || 1,
          colaboradorNome: currentUser?.nome || act.resp1,
          obraNome: act.obraNome,
          atividadeNome: act.atividade,
          data: new Date().toISOString().split("T")[0],
          horaInicio: "08:00",
          horaFim: "18:00",
          intervaloMin: 0,
          totalHoras: saldoRestante,
          descricao: `Conclusão integral da frente (${saldoRestante}h reconhecidas automaticamente a 100%).`,
          status: "Confirmado"
        };
        setBancoHoras(prev => [autoEntry, ...prev]);
        showFeedback(`Atividade concluída (100%)! ${saldoRestante}h foram computadas automaticamente no Banco de Horas.`);
        return;
      }
    }

    showFeedback(`Progresso atualizado para ${numPerc}% com sucesso!`);
  };

  // --- BIDIRECTIONAL SYNC FOR TASK MODAL DATES & DAYS (BLINDADO CONTRA DESLOCAMENTO DE FUSO HORÁRIO) ---
  const handleTaskDaysChange = (newDays) => {
    const days = Math.max(1, parseInt(newDays) || 1);
    const startStr = editingTask.inicioPrevisto || "2026-11-02";
    const start = new Date(startStr.includes("T") ? startStr : startStr + "T12:00:00");
    const end = new Date(start);
    end.setDate(end.getDate() + days);
    const year = end.getFullYear();
    const month = String(end.getMonth() + 1).padStart(2, "0");
    const day = String(end.getDate()).padStart(2, "0");
    setEditingTask(prev => ({
      ...prev,
      dias: days,
      terminoPrevisto: `${year}-${month}-${day}`
    }));
  };

  const handleTaskInicioChange = (newInicio) => {
    const start = new Date(newInicio + "T12:00:00");
    const days = Number(editingTask.dias) || 14;
    const end = new Date(start);
    end.setDate(end.getDate() + days);
    const year = end.getFullYear();
    const month = String(end.getMonth() + 1).padStart(2, "0");
    const day = String(end.getDate()).padStart(2, "0");
    setEditingTask(prev => ({
      ...prev,
      inicioPrevisto: newInicio,
      terminoPrevisto: `${year}-${month}-${day}`
    }));
  };

  const handleTaskTerminoChange = (newTermino) => {
    const startStr = editingTask.inicioPrevisto || "2026-11-02";
    const start = new Date(startStr + "T12:00:00");
    const end = new Date(newTermino + "T12:00:00");
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.max(1, Math.round(diffTime / (1000 * 60 * 60 * 24)));
    setEditingTask(prev => ({
      ...prev,
      terminoPrevisto: newTermino,
      dias: diffDays
    }));
  };

  // Save new or edited task
  const handleSaveTaskModal = (e) => {
    e.preventDefault();
    if (!editingTask.atividade.trim()) {
      alert("Informe a descrição da atividade.");
      return;
    }

    if (taskModalMode === "create") {
      const nextId = Math.max(...atividades.map(a => a.id), 0) + 1;
      const resp1Value = editingTask.resp1?.trim() || "A Definir";
      const newTask = {
        ...editingTask,
        id: nextId,
        obraNome: taskManagerObra,
        atividade: editingTask.atividade.trim().toUpperCase(),
        resp1: resp1Value,
        percentual: Number(editingTask.percentual) || 0,
        dias: Number(editingTask.dias) || 14,
        lastUpdated: new Date().toISOString().split("T")[0]
      };
      setAtividades(prev => [newTask, ...prev]);

      if (newTask.percentual === 100) {
        const horasTotais = newTask.dias * 10;
        setBancoHoras(prev => [
          {
            id: Date.now(),
            colaboradorId: currentUser?.id || 1,
            colaboradorNome: newTask.resp1 !== "A Definir" ? newTask.resp1 : currentUser?.nome,
            obraNome: newTask.obraNome,
            atividadeNome: newTask.atividade,
            data: new Date().toISOString().split("T")[0],
            horaInicio: "08:00",
            horaFim: "18:00",
            intervaloMin: 0,
            totalHoras: horasTotais,
            descricao: "Carga total computada na criação com 100% de avanço.",
            status: "Confirmado"
          },
          ...prev
        ]);
      }
      showFeedback(`Tarefa criada com sucesso em "${taskManagerObra}"${resp1Value === "A Definir" ? " (Pendente de Alocação de Responsável)" : ""}!`);
    } else {
      setAtividades(prev =>
        prev.map(a => (a.id === editingTask.id ? { 
          ...editingTask, 
          atividade: editingTask.atividade.trim().toUpperCase(),
          resp1: editingTask.resp1?.trim() || "A Definir",
          percentual: Number(editingTask.percentual) || 0,
          dias: Number(editingTask.dias) || 14,
          lastUpdated: new Date().toISOString().split("T")[0] 
        } : a))
      );
      showFeedback("Tarefa atualizada com sucesso!");
    }
    setIsTaskModalOpen(false);
  };

  // Confirm delete task
  const confirmDeleteTask = () => {
    if (!taskToDelete) return;
    setAtividades(prev => prev.filter(a => a.id !== taskToDelete.id));
    setBancoHoras(prev => prev.filter(b => !(b.obraNome === taskToDelete.obraNome && b.atividadeNome === taskToDelete.atividade)));
    showFeedback(`Atividade "${taskToDelete.atividade}" excluída com sucesso.`);
    setTaskToDelete(null);
  };

  // Obra creation and edition
  const handleSaveObra = (e) => {
    e.preventDefault();
    if (!editingObra.nome.trim() || !editingObra.cliente.trim()) {
      alert("Preencha o nome da obra e o cliente.");
      return;
    }

    if (obraModalMode === "create") {
      const newId = Math.max(...obras.map(o => o.id), 0) + 1;
      const newObraObj = {
        id: newId,
        nome: editingObra.nome.trim(),
        cliente: editingObra.cliente.trim(),
        status: editingObra.status || "Ativa"
      };

      // Geração automática das 21 tarefas padrões da Climapress
      const todayStr = getRelativeDateStr(0);
      let runningTaskId = Math.max(...atividades.map(a => a.id), 0);
      const defaultTasksToInsert = DEFAULT_OBRA_TASKS.map((def) => {
        runningTaskId += 1;
        const dias = def.dias || 10;
        return {
          id: runningTaskId,
          obraNome: newObraObj.nome,
          atividade: def.atividade.toUpperCase(),
          fase: def.fase || "Projetos",
          dias: dias,
          resp1: "A Definir",
          resp2: "",
          resp3: "",
          percentual: 0,
          isNA: false,
          inicioPrevisto: todayStr,
          terminoPrevisto: getRelativeDateStr(-dias),
          lastUpdated: todayStr
        };
      });

      setObras(prev => [...prev, newObraObj]);
      setAtividades(prev => [...prev, ...defaultTasksToInsert]);
      setTaskManagerObra(newObraObj.nome);
      showFeedback(`Obra "${newObraObj.nome}" cadastrada com 21 tarefas padrões lançadas automaticamente!`);
    } else {
      const oldObra = obras.find(o => o.id === editingObra.id);
      if (oldObra && oldObra.nome !== editingObra.nome.trim()) {
        const oldName = oldObra.nome;
        const newName = editingObra.nome.trim();
        setAtividades(prev => prev.map(a => (a.obraNome === oldName ? { ...a, obraNome: newName } : a)));
        setBancoHoras(prev => prev.map(b => (b.obraNome === oldName ? { ...b, obraNome: newName } : b)));
        if (taskManagerObra === oldName) setTaskManagerObra(newName);
        if (raioXObra === oldName) setRaioXObra(newName);
        if (minhasAtividadesObraFilter === oldName) setMinhasAtividadesObraFilter(newName);
        if (ganttObraFilter === oldName) setGanttObraFilter(newName);
      }
      setObras(prev => prev.map(o => (o.id === editingObra.id ? { ...editingObra, nome: editingObra.nome.trim(), cliente: editingObra.cliente.trim() } : o)));
      showFeedback(`Dados da obra "${editingObra.nome}" atualizados!`);
    }
    setIsObraModalOpen(false);
  };

  // Cascade delete Obra with 30-Day Recovery Period (Lixeira / Quarentena) & audit logging
  const handleExecuteDeleteObra = (e) => {
    e.preventDefault();
    if (!obraToDelete) return;

    if (deleteObraPassword.trim() !== currentUser?.senha?.trim()) {
      setDeleteObraError("Senha incorreta. A exclusão de uma obra exige validação da senha do coordenador.");
      return;
    }

    const obraNome = obraToDelete.nome;
    const tasksOfObra = atividades.filter(a => a.obraNome === obraNome);
    const hoursOfObra = bancoHoras.filter(b => b.obraNome === obraNome);

    // Salvar registro completo na Lixeira com quarentena de 30 dias para cancelamento/restauração
    const deletedRecord = {
      id: Date.now(),
      obraOriginalId: obraToDelete.id,
      obra: { ...obraToDelete },
      atividades: tasksOfObra,
      bancoHoras: hoursOfObra,
      deletedAt: new Date().toISOString(),
      deletedBy: currentUser?.nome || "Coordenador",
      deletedByEmail: currentUser?.email || "",
      diasRetencao: 30
    };

    setObrasExcluidas(prev => [deletedRecord, ...prev]);

    // Remover das visões operacionais ativas
    setObras(prev => prev.filter(o => o.id !== obraToDelete.id));
    setAtividades(prev => prev.filter(a => a.obraNome !== obraNome));
    setBancoHoras(prev => prev.filter(b => b.obraNome !== obraNome));

    // Audit log entry
    const newLog = {
      id: Date.now(),
      obraNome,
      coordenadorNome: currentUser?.nome,
      coordenadorEmail: currentUser?.email,
      timestamp: new Date().toLocaleString("pt-BR"),
      detalhes: `Obra movida para a Lixeira (30 dias para restauração): ${tasksOfObra.length} frentes técnicas e ${hoursOfObra.length} apontamentos preservados.`
    };
    setAuditLogs(prev => [newLog, ...prev]);

    if (taskManagerObra === obraNome) {
      const remaining = obras.filter(o => o.id !== obraToDelete.id);
      setTaskManagerObra(remaining[0]?.nome || "");
    }
    if (raioXObra === obraNome) {
      setRaioXObra("Todas");
    }
    if (minhasAtividadesObraFilter === obraNome) {
      setMinhasAtividadesObraFilter("Todas");
    }
    if (ganttObraFilter === obraNome) {
      setGanttObraFilter("Todas");
    }

    showFeedback(`Obra "${obraNome}" movida para a Lixeira. Você tem até 30 dias para cancelar a exclusão!`);
    setIsDeleteObraModalOpen(false);
    setObraToDelete(null);
    setDeleteObraPassword("");
    setDeleteObraError("");
  };

  // Cancelar Exclusão e Restaurar Obra da Lixeira (Período de 30 dias)
  const handleRestoreObra = (record) => {
    if (!record || !record.obra) return;
    const obraNome = record.obra.nome;

    // Verificar se já não existe outra obra ativa com o mesmo nome
    if (obras.some(o => o.nome.toLowerCase() === obraNome.toLowerCase())) {
      alert(`Já existe uma obra ativa cadastrada com o nome "${obraNome}". Altere o nome antes de restaurar.`);
      return;
    }

    // Restaurar obra, atividades e banco de horas garantindo integridade de IDs
    setObras(prev => [...prev, record.obra]);
    if (record.atividades && record.atividades.length > 0) {
      setAtividades(prev => {
        const existingIds = new Set(prev.map(a => a.id));
        let maxId = Math.max(...prev.map(a => a.id), 0);
        const safeActs = record.atividades.map(a => {
          if (existingIds.has(a.id)) {
            maxId++;
            return { ...a, id: maxId };
          }
          return a;
        });
        return [...prev, ...safeActs];
      });
    }
    if (record.bancoHoras && record.bancoHoras.length > 0) {
      setBancoHoras(prev => {
        const existingIds = new Set(prev.map(b => b.id));
        let maxId = Math.max(...prev.map(b => b.id), 0);
        const safeHours = record.bancoHoras.map(b => {
          if (existingIds.has(b.id)) {
            maxId++;
            return { ...b, id: maxId };
          }
          return b;
        });
        return [...prev, ...safeHours];
      });
    }

    // Remover da lixeira
    setObrasExcluidas(prev => prev.filter(item => item.id !== record.id));

    // Log de auditoria da restauração
    const restoreLog = {
      id: Date.now(),
      obraNome,
      coordenadorNome: currentUser?.nome,
      coordenadorEmail: currentUser?.email,
      timestamp: new Date().toLocaleString("pt-BR"),
      detalhes: `Exclusão cancelada (Obra restaurada da lixeira). ${record.atividades?.length || 0} frentes e ${record.bancoHoras?.length || 0} apontamentos recuperados.`
    };
    setAuditLogs(prev => [restoreLog, ...prev]);

    showFeedback(`Exclusão cancelada com sucesso! A obra "${obraNome}" e todo o seu escopo foram restaurados.`);
  };

  // Excluir Definitivamente da Lixeira (Expurgo Permanente)
  const handlePurgeObra = (recordId) => {
    const itemToPurge = obrasExcluidas.find(item => item.id === recordId);
    const nome = itemToPurge?.obra?.nome || "Empreendimento";
    if (window.confirm(`Tem certeza que deseja excluir DEFINITIVAMENTE a obra "${nome}"? Esta ação é irreversível e expurgará todos os dados associados.`)) {
      setObrasExcluidas(prev => prev.filter(item => item.id !== recordId));
      showFeedback(`Obra "${nome}" expurgada definitivamente da base de dados.`);
    }
  };

  // Abrir modal de apontamento a partir de uma atividade específica (Minhas Atividades)
  const handleOpenTimeModalForTask = (act) => {
    setActiveTaskForTime(act);
    setNewTimeEntry({
      data: getRelativeDateStr(0),
      horaInicio: "08:00",
      horaFim: "18:00",
      intervaloMin: 60,
      descricao: "",
      colaboradorId: currentUser?.id || 1,
      colaboradorNome: currentUser?.nome || "Engº Murilo Miranda da Silva"
    });
    setIsTimeModalOpen(true);
  };

  // Abrir modal de apontamento direto (Aba Apontamento de Horas)
  const handleOpenDirectTimeModal = () => {
    const defaultObra = taskManagerObra || obras[0]?.nome || "";
    const obraTasks = atividades.filter(a => a.obraNome === defaultObra);
    const defaultTask = obraTasks[0] || atividades[0] || null;

    setActiveTaskForTime(defaultTask || {
      id: 0,
      obraNome: defaultObra,
      atividade: "Apontamento Geral de Campo",
      percentual: 0
    });
    setNewTimeEntry({
      data: getRelativeDateStr(0),
      horaInicio: "08:00",
      horaFim: "18:00",
      intervaloMin: 60,
      descricao: "",
      colaboradorId: currentUser?.id || 1,
      colaboradorNome: currentUser?.nome || "Engº Murilo Miranda da Silva"
    });
    setIsTimeModalOpen(true);
  };

  // Time logging submission (Permite lançamento no dia de hoje e em qualquer data retroativa)
  const handleSaveTimeEntry = (e) => {
    e.preventDefault();
    if (!activeTaskForTime || !activeTaskForTime.obraNome || !activeTaskForTime.atividade) {
      alert("Selecione a obra e a atividade técnica.");
      return;
    }

    const [hI, mI] = (newTimeEntry.horaInicio || "08:00").split(":").map(Number);
    const [hF, mF] = (newTimeEntry.horaFim || "18:00").split(":").map(Number);
    let diffMinutes = ((hF * 60) + mF) - ((hI * 60) + mI);
    if (diffMinutes < 0) {
      // Suporte para turnos noturnos em data centers e hospitais que viram a noite (ex: 22:00 às 06:00)
      diffMinutes += 24 * 60;
    }
    diffMinutes -= (Number(newTimeEntry.intervaloMin) || 0);
    if (diffMinutes <= 0) diffMinutes = 60;
    const totalHorasCalculadas = Math.round((diffMinutes / 60) * 10) / 10;

    const chosenColabNome = newTimeEntry.colaboradorNome || currentUser?.nome || "Engº Murilo Miranda da Silva";
    const matchedColab = equipe.find(u => u.nome === chosenColabNome);

    const entry = {
      id: Date.now(),
      colaboradorId: matchedColab?.id || currentUser?.id || 1,
      colaboradorNome: chosenColabNome,
      obraNome: activeTaskForTime.obraNome,
      atividadeNome: activeTaskForTime.atividade,
      data: newTimeEntry.data || getRelativeDateStr(0),
      horaInicio: newTimeEntry.horaInicio,
      horaFim: newTimeEntry.horaFim,
      intervaloMin: Number(newTimeEntry.intervaloMin) || 0,
      totalHoras: totalHorasCalculadas,
      descricao: newTimeEntry.descricao || "Apontamento de horas em campo.",
      status: "Confirmado"
    };

    setBancoHoras(prev => [entry, ...prev]);

    // Atualização automática de início e avanço da atividade para qualquer profissional (Colaborador ou Coordenador)
    setAtividades(prev =>
      prev.map(a => {
        const isMatch = (activeTaskForTime.id && a.id === activeTaskForTime.id) ||
                        (a.obraNome === activeTaskForTime.obraNome && a.atividade === activeTaskForTime.atividade);
        if (isMatch) {
          const hPrev = (a.dias || 14) * 10;
          const hJaGastas = bancoHoras
            .filter(b => b.obraNome === a.obraNome && b.atividadeNome === a.atividade)
            .reduce((acc, curr) => acc + (curr.totalHoras || 0), 0);
          const totalComNovo = hJaGastas + totalHorasCalculadas;
          const pCalculado = hPrev > 0 ? Math.round((totalComNovo / hPrev) * 100) : 0;
          
          // Se estava em 0%, inicia a atividade com no mínimo 15% ou percentual proporcional de horas
          const novoP = a.percentual === 0
            ? Math.max(15, Math.min(95, pCalculado))
            : Math.max(a.percentual, Math.min(95, pCalculado));

          return {
            ...a,
            percentual: novoP,
            lastUpdated: new Date().toISOString().split("T")[0]
          };
        }
        return a;
      })
    );

    showFeedback(`${totalHorasCalculadas}h apontadas com sucesso para ${chosenColabNome} na data ${entry.data}!`);
    setIsTimeModalOpen(false);
    setActiveTaskForTime(null);
  };

  // Estornar / Excluir apontamento de horas (liberado para Coordenadores)
  const handleDeleteTimeEntry = (entryId) => {
    const entry = bancoHoras.find(b => b.id === entryId);
    if (!entry) return;
    if (window.confirm(`Deseja estornar o apontamento de ${entry.totalHoras}h de "${entry.colaboradorNome}" na obra "${entry.obraNome}" (${entry.data})?`)) {
      setBancoHoras(prev => prev.filter(b => b.id !== entryId));
      showFeedback(`Apontamento de ${entry.totalHoras}h estornado com sucesso.`);
    }
  };

  // --- REPORT EXPORTERS (BUG-04 RESOLUTION: IMPRESSÃO DIRETA SEM BLOQUEIO DE POPUP) ---
  const handleExportPDF = () => {
    try {
      // Remove iframe residual se existir
      const oldIframe = document.getElementById("climapress-pdf-iframe");
      if (oldIframe) oldIframe.remove();

      const tableDataRows = atividades.length > 0
        ? atividades.map(a => `
            <tr>
              <td>#${a.id}</td>
              <td><strong>${a.obraNome}</strong></td>
              <td>${a.atividade}</td>
              <td>${a.fase}</td>
              <td style="text-align:center;">${a.dias}d</td>
              <td style="text-align:center; font-weight:bold; color:#15365C;">${(a.dias || 14) * 10}h</td>
              <td>${a.resp1}</td>
              <td style="text-align:center; font-weight:bold; color:${a.percentual >= 100 ? '#059669' : a.percentual > 0 ? '#d97706' : '#64748b'};">${a.percentual}%</td>
              <td style="text-align:center;">${a.inicioPrevisto}</td>
              <td style="text-align:center;">${a.terminoPrevisto}</td>
            </tr>
          `).join("")
        : `<tr><td colspan="10" style="text-align:center; padding: 20px; color:#888;">Nenhuma atividade cadastrada no momento.</td></tr>`;

      const obrasSummaryRows = obrasStats.length > 0
        ? obrasStats.map(o => `
            <tr>
              <td><strong>${o.nome}</strong></td>
              <td>${o.cliente}</td>
              <td style="text-align:center; font-weight:bold;">${o.horasPrevistas}h</td>
              <td style="text-align:center; font-weight:bold; color:#059669;">${o.horasRealizadas}h</td>
              <td style="text-align:center; font-weight:bold;">${o.mediaPerc}%</td>
              <td style="text-align:center;">${o.concluidas}</td>
              <td style="text-align:center;">${o.emAndamento}</td>
              <td style="text-align:center;">${o.futuras}</td>
            </tr>
          `).join("")
        : `<tr><td colspan="8" style="text-align:center; padding: 20px; color:#888;">Nenhuma obra cadastrada ainda.</td></tr>`;

      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Relatório Oficial Climapress - ${currentTab.toUpperCase()}</title>
          <style>
            @page {
              size: A4 landscape;
              margin: 12mm;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
              color: #1e293b;
              margin: 0;
              padding: 15px;
              position: relative;
            }
            .watermark {
              position: fixed;
              top: 35%;
              left: 10%;
              width: 80%;
              text-align: center;
              font-size: 85pt;
              font-weight: 900;
              font-style: italic;
              color: rgba(229, 35, 41, 0.05);
              transform: rotate(-25deg);
              z-index: -1000;
              user-select: none;
              font-family: 'Arial Black', Arial, sans-serif;
            }
            .header-bar {
              border-bottom: 3px solid #E52329;
              padding-bottom: 12px;
              margin-bottom: 18px;
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
            }
            .title-box h1 {
              margin: 0;
              color: #15365C;
              font-size: 18pt;
              font-weight: 900;
            }
            .title-box p {
              margin: 3px 0 0 0;
              color: #E52329;
              font-size: 10pt;
              font-weight: bold;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .meta-box {
              text-align: right;
              font-size: 8.5pt;
              color: #64748b;
              line-height: 1.4;
            }
            h2 {
              font-size: 12pt;
              color: #15365C;
              margin: 16px 0 8px 0;
              text-transform: uppercase;
              border-left: 4px solid #15365C;
              padding-left: 8px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              font-size: 8.5pt;
              margin-bottom: 15px;
            }
            th, td {
              border: 1px solid #cbd5e1;
              padding: 6px 8px;
              text-align: left;
            }
            th {
              background-color: #15365C;
              color: #ffffff;
              font-weight: bold;
              text-transform: uppercase;
              font-size: 8pt;
            }
            tr:nth-child(even) {
              background-color: #f8fafc;
            }
            .footer-note {
              margin-top: 25px;
              border-top: 1px solid #e2e8f0;
              padding-top: 8px;
              display: flex;
              justify-content: space-between;
              font-size: 8pt;
              color: #64748b;
            }
          </style>
        </head>
        <body>
          <div class="watermark">CLIMAPRESS</div>

          <div class="header-bar">
            <div class="title-box">
              <h1>CLIMAPRESS INSTALAÇÕES DE SISTEMAS DE AR CONDICIONADO</h1>
              <p>Relatório Técnico & Executivo — ${currentTab.toUpperCase()}</p>
            </div>
            <div class="meta-box">
              <strong>Emissão:</strong> ${new Date().toLocaleDateString("pt-BR")} às ${new Date().toLocaleTimeString("pt-BR")}<br>
              <strong>Responsável Técnico:</strong> ${currentUser?.nome || "Engº Murilo Miranda da Silva"}<br>
              <strong>Perfil de Acesso:</strong> ${currentUser?.role || "Coordenador"}
            </div>
          </div>

          <h2>1. Panorama Consolidado das Obras</h2>
          <table>
            <thead>
              <tr>
                <th>Empreendimento</th>
                <th>Cliente</th>
                <th style="text-align:center;">Horas Prev.</th>
                <th style="text-align:center;">Horas Gastas</th>
                <th style="text-align:center;">% Conclusão</th>
                <th style="text-align:center;">Concluídas</th>
                <th style="text-align:center;">Em Andam.</th>
                <th style="text-align:center;">Futuras</th>
              </tr>
            </thead>
            <tbody>
              ${obrasSummaryRows}
            </tbody>
          </table>

          <h2>2. Relação Detalhada de Atividades e Frentes</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Obra</th>
                <th>Atividade Técnica</th>
                <th>Fase</th>
                <th style="text-align:center;">Prazo</th>
                <th style="text-align:center;">Horas Prev.</th>
                <th>Líder</th>
                <th style="text-align:center;">Progresso</th>
                <th style="text-align:center;">Início</th>
                <th style="text-align:center;">Término</th>
              </tr>
            </thead>
            <tbody>
              ${tableDataRows}
            </tbody>
          </table>

          <div class="footer-note">
            <span>Sistema desenvolvido sob responsabilidade técnica do <strong>Engº Murilo Miranda da Silva</strong></span>
            <span>Climapress Instalações de Sistemas de Ar condicionado • Documento Oficial</span>
          </div>
        </body>
        </html>
      `;

      const iframe = document.createElement("iframe");
      iframe.id = "climapress-pdf-iframe";
      iframe.style.position = "fixed";
      iframe.style.right = "0";
      iframe.style.bottom = "0";
      iframe.style.width = "0";
      iframe.style.height = "0";
      iframe.style.border = "none";
      document.body.appendChild(iframe);

      const frameDoc = iframe.contentWindow.document;
      frameDoc.open();
      frameDoc.write(htmlContent);
      frameDoc.close();

      setTimeout(() => {
        try {
          iframe.contentWindow.focus();
          iframe.contentWindow.print();
          showFeedback("Relatório PDF preparado para impressão e download!");
        } catch (e) {
          window.print();
        }
        setTimeout(() => {
          const toRemove = document.getElementById("climapress-pdf-iframe");
          if (toRemove) toRemove.remove();
        }, 3000);
      }, 400);
    } catch (err) {
      console.error(err);
      window.print();
    }
  };

  const handleExportWord = () => {
    const content = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><title>Relatório Climapress</title>
      <style>
        @page {
          mso-header: h1;
          mso-footer: f1;
        }
        body { 
          font-family: Arial, sans-serif; 
          font-size: 11pt; 
          background: #ffffff;
          position: relative;
        }
        /* Marca d'água elegante em documento Word */
        .watermark {
          position: fixed;
          top: 35%;
          left: 15%;
          width: 70%;
          text-align: center;
          font-size: 80pt;
          font-weight: 900;
          font-style: italic;
          color: rgba(229, 35, 41, 0.06);
          transform: rotate(-35deg);
          z-index: -1000;
          font-family: 'Arial Black', Arial, sans-serif;
        }
        table { border-collapse: collapse; width: 100%; margin-top: 15px; }
        th, td { border: 1px solid #999; padding: 6px 10px; text-align: left; }
        th { background-color: #15365C; color: #ffffff; }
        h1 { color: #E52329; font-size: 18pt; margin-bottom: 2px; }
        h2 { color: #15365C; font-size: 14pt; }
        .header-box { border-bottom: 3px solid #E52329; padding-bottom: 10px; margin-bottom: 20px; }
      </style>
      </head>
      <body>
        <div class="watermark">CLIMAPRESS</div>
        <div class="header-box">
          <h1>CLIMAPRESS INSTALAÇÕES DE SISTEMAS DE AR CONDICIONADO</h1>
          <p style="color:#555; font-size:10pt;">
            <strong>Aba:</strong> ${currentTab.toUpperCase()} | 
            <strong>Data de Emissão:</strong> ${new Date().toLocaleDateString("pt-BR")} às ${new Date().toLocaleTimeString("pt-BR")} |
            <strong>Responsável:</strong> ${currentUser?.nome} (${currentUser?.role})
          </p>
        </div>
        <h2>Resumo Geral das Obras — Horas e Avanço Físico</h2>
        <table>
          <tr><th>Obra</th><th>Cliente</th><th>Horas Previstas</th><th>Horas Gastas</th><th>% Conclusão Real</th><th>Concluídas</th><th>Em Andamento</th><th>Futuras</th></tr>
          ${obrasStats.length > 0 ? obrasStats.map(o => {
            const f = atividades.filter(a => a.obraNome === o.nome && !a.isNA && a.percentual === 0).length;
            return `<tr><td><strong>${o.nome}</strong></td><td>${o.cliente}</td><td>${o.horasPrevistas}h</td><td>${o.horasRealizadas}h</td><td>${o.mediaPerc}%</td><td>${o.concluidas}</td><td>${o.emAndamento}</td><td>${f}</td></tr>`;
          }).join("") : '<tr><td colspan="8">Nenhuma obra cadastrada no sistema.</td></tr>'}
        </table>
      </body></html>
    `;
    const blob = new Blob(["\ufeff", content], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Relatorio_Climapress_${currentTab}_${new Date().toISOString().split("T")[0]}.doc`;
    link.click();
    URL.revokeObjectURL(url);
    showFeedback("Relatório Word (.doc) baixado com marca d'água Climapress!");
  };

  const handleExportExcel = () => {
    const tableHtml = `
      <table border="1">
        <thead>
          <tr style="background:#15365C; color:#FFF; font-weight:bold; height:32px;">
            <th colspan="12" style="background:#15365C; font-size:14pt; text-align:center; color:#FFF;">CLIMAPRESS INSTALAÇÕES DE SISTEMAS DE AR CONDICIONADO — RELATÓRIO DE ATIVIDADES</th>
          </tr>
          <tr style="background:#E52329; color:#FFF; font-weight:bold; height:24px;">
            <th>ID</th>
            <th>Obra</th>
            <th>Atividade Técnica</th>
            <th>Fase</th>
            <th>Dias</th>
            <th>Horas Previstas</th>
            <th>Líder</th>
            <th>Apoio 1</th>
            <th>Apoio 2</th>
            <th>Progresso (%)</th>
            <th>Início</th>
            <th>Término</th>
          </tr>
        </thead>
        <tbody>
          ${atividades.length > 0 ? atividades.map(a => `
            <tr>
              <td>${a.id}</td>
              <td><strong>${a.obraNome}</strong></td>
              <td>${a.atividade}</td>
              <td>${a.fase}</td>
              <td>${a.dias}</td>
              <td>${(a.dias || 14) * 10}h</td>
              <td>${a.resp1}</td>
              <td>${a.resp2 || "-"}</td>
              <td>${a.resp3 || "-"}</td>
              <td style="font-weight:bold; color:${a.percentual >= 100 ? '#059669' : a.percentual > 0 ? '#d97706' : '#64748b'};">${a.percentual}%</td>
              <td>${a.inicioPrevisto}</td>
              <td>${a.terminoPrevisto}</td>
            </tr>
          `).join("") : '<tr><td colspan="12" style="text-align:center;">Nenhuma atividade cadastrada.</td></tr>'}
        </tbody>
      </table>
    `;
    const blob = new Blob(["\ufeff", tableHtml], { type: "application/vnd.ms-excel;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Planilha_Climapress_${new Date().toISOString().split("T")[0]}.xls`;
    link.click();
    URL.revokeObjectURL(url);
    showFeedback("Planilha Excel (.xls) baixada com sucesso!");
  };

  // Horizontal scroll helpers
  const scrollNav = (direction) => {
    if (headerNavRef.current) {
      headerNavRef.current.scrollBy({ left: direction === "left" ? -220 : 220, behavior: "smooth" });
    }
  };

  const scrollQuickSelect = (direction) => {
    if (quickSelectRef.current) {
      quickSelectRef.current.scrollBy({ left: direction === "left" ? -220 : 220, behavior: "smooth" });
    }
  };

  const scrollGantt = (direction) => {
    if (ganttScrollRef.current) {
      ganttScrollRef.current.scrollBy({ left: direction === "left" ? -350 : 350, behavior: "smooth" });
    }
  };

  const scrollGanttToPercent = (pct) => {
    if (ganttScrollRef.current) {
      const el = ganttScrollRef.current;
      const maxScroll = el.scrollWidth - el.clientWidth;
      el.scrollTo({ left: (pct / 100) * maxScroll, behavior: "smooth" });
      setGanttScrollPercent(pct);
    }
  };

  const scrollGanttToWeek = (weekIndex) => {
    if (ganttScrollRef.current) {
      const targetLeft = Math.max(0, weekIndex * 85);
      ganttScrollRef.current.scrollTo({ left: targetLeft, behavior: "smooth" });
    }
  };

  const handleGanttScrollEvent = (e) => {
    const el = e.currentTarget;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll > 0) {
      const currentPct = Math.round((el.scrollLeft / maxScroll) * 100);
      setGanttScrollPercent(currentPct);
    }
  };

  // Handler para convidar / cadastrar usuário rapidamente
  const handleInviteUser = (e) => {
    e.preventDefault();
    if (!inviteData.nome.trim() || !inviteData.email.trim()) {
      alert("Preencha ao menos o nome completo e e-mail do usuário convidado.");
      return;
    }

    const nextId = Math.max(...equipe.map(u => u.id), 0) + 1;
    const newUser = {
      id: nextId,
      nome: inviteData.nome.trim(),
      email: inviteData.email.trim(),
      fone: inviteData.fone.trim() || "(11) 98000-0000",
      role: inviteData.role || "Colaborador",
      disponibilidade: "ativo",
      senha: inviteData.senha || "123"
    };

    setEquipe(prev => [...prev, newUser]);
    setIsInviteModalOpen(false);
    setInviteData({ nome: "", email: "", fone: "", role: "Colaborador", senha: "123" });
    showFeedback(`Convite emitido com sucesso! E-mail encaminhado para ${newUser.email}.`);
    triggerInviteEmail(newUser);
  };

  // --- TELA DE LOGIN CORPORATIVA (AUTENTICAÇÃO REAL CLIMAPRESS) ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0e243d] flex flex-col justify-center items-center p-4 font-sans relative">
        {/* Toast Feedback */}
        {feedbackMsg && (
          <div className="fixed top-4 right-4 z-50 bg-[#15365C] text-white px-5 py-3 rounded-lg shadow-xl border-l-4 border-[#E52329] flex items-center gap-3 animate-fade-in text-sm font-semibold">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>{feedbackMsg}</span>
          </div>
        )}

        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-7 space-y-6 border border-slate-200">
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <ClimapressLogo className="h-12 w-auto" />
            </div>
            <h1 className="text-base font-black text-[#15365C] uppercase tracking-wide">
              Sistema Integrado de Obras
            </h1>
            <p className="text-xs text-slate-500 font-semibold">
              Controle Físico-Financeiro, Tarefas e Apontamentos HVAC
            </p>
          </div>

          {loginError && (
            <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-lg text-xs font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-600" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 block mb-1">E-mail Profissional</label>
              <input
                type="email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="seu.nome@climapress.com.br"
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#15365C] focus:outline-none"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="font-bold text-slate-700">Senha de Acesso</label>
                <button
                  type="button"
                  onClick={() => setShowLoginPass(!showLoginPass)}
                  className="text-slate-500 hover:text-[#15365C] flex items-center gap-1 text-[11px] font-semibold"
                >
                  {showLoginPass ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{showLoginPass ? "Ocultar" : "Mostrar"}</span>
                </button>
              </div>
              <input
                type={showLoginPass ? "text" : "password"}
                required
                value={loginSenha}
                onChange={(e) => setLoginSenha(e.target.value)}
                placeholder="Digite sua senha"
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#15365C] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#E52329] hover:bg-red-700 text-white rounded-lg font-black text-sm uppercase tracking-wider transition shadow-md active:scale-98 cursor-pointer"
            >
              Acessar Sistema
            </button>
          </form>

          {/* Atalho de Acesso Rápido para Testes e Simulação de Perfis */}
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                Modo Demonstração & Testes
              </span>
              <button
                type="button"
                onClick={() => setShowDemoLogins(!showDemoLogins)}
                className="text-[10px] font-semibold text-slate-400 hover:text-slate-600 underline cursor-pointer"
              >
                {showDemoLogins ? "Ocultar Atalhos" : "Exibir Atalhos"}
              </button>
            </div>
            
            {showDemoLogins && (
              <>
                <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-200 text-[10px] text-amber-900 leading-relaxed space-y-1">
                  <div className="font-bold flex items-center gap-1 text-amber-800">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 text-amber-600" />
                    <span>Ambiente de Homologação & Testes</span>
                  </div>
                  <p>
                    As senhas e atalhos rápidos abaixo existem <strong>exclusivamente para facilidade de testes</strong> e homologação das permissões (Coordenador, Colaborador e Visualizador).
                  </p>
                  <p className="text-slate-500 font-semibold">
                    * Em produção definitiva, as senhas são individuais, criptografadas e nunca exibidas.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-1.5 pt-1">
                  {equipe.map(colab => (
                    <button
                      key={colab.id}
                      type="button"
                      onClick={() => {
                        setCurrentUser(colab);
                        setIsAuthenticated(true);
                        showFeedback(`Entrou como: ${colab.nome} (${colab.role})`);
                      }}
                      className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 text-left transition cursor-pointer"
                      title="Clique para entrar diretamente com este usuário"
                    >
                      <div className="truncate">
                        <span className="font-bold text-xs text-[#15365C] block truncate">{colab.nome}</span>
                        <span className="text-[10px] text-slate-500 block truncate">{colab.email}</span>
                      </div>
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase flex-shrink-0 ${
                        colab.role === "Coordenador" ? "bg-amber-100 text-amber-800" : colab.role === "Visualizador" ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-[#15365C]"
                      }`}>
                        {colab.role}
                      </span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="text-center text-slate-400 text-[11px] mt-6">
          © {new Date().getFullYear()} Climapress Instalações • Responsável Técnico: Engº Murilo Miranda da Silva
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans flex flex-col relative print:bg-white">
      {/* MARCA D'ÁGUA EM RELATÓRIOS E IMPRESSÃO (PDF/PRINT) */}
      <div className="hidden print:flex fixed inset-0 pointer-events-none z-0 items-center justify-center opacity-[0.05] select-none">
        <ClimapressLogo className="w-[85vw] h-auto" />
      </div>

      {/* Toast Feedback */}
      {feedbackMsg && (
        <div className="fixed top-4 right-4 z-50 bg-[#15365C] text-white px-5 py-3 rounded-lg shadow-xl border-l-4 border-[#E52329] flex items-center gap-3 animate-fade-in text-sm font-semibold">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span>{feedbackMsg}</span>
        </div>
      )}

      {/* HEADER PRINCIPAL - ALTO CONTRASTE EXECUTIVO PARA LOGO CLIMAPRESS */}
      <header className="bg-white text-slate-800 shadow-sm border-b border-slate-200 sticky top-0 z-40 print:hidden">
        <div className="w-full px-3 sm:px-6 lg:px-8 mx-auto">
          <div className="flex items-center justify-between h-16 gap-3">
            {/* Logo Oficial Climapress com contraste total no fundo branco */}
            <div 
              className="flex items-center gap-3 flex-shrink-0 cursor-pointer group" 
              onClick={() => setCurrentTab(isCoordinator || isViewer ? "dashboard" : "minhas")}
              title="Climapress Engenharia"
            >
              <div className="p-1 transition-transform group-hover:scale-105 flex items-center">
                <ClimapressLogo className="h-9 sm:h-10 w-auto" />
              </div>
              <div className="hidden md:block pl-3 border-l border-slate-200">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#15365C] block">
                  Sistema Integrado de Engenharia
                </span>
                <span className="text-xs font-semibold text-slate-500">HVAC & Controle Físico-Financeiro</span>
              </div>
            </div>

            {/* User profile badge & Global actions */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              {isCoordinator && (
                <button
                  type="button"
                  onClick={handleResetToDemo}
                  className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-lg text-xs font-bold transition active:scale-95"
                  title="Restaurar toda a base de dados para o padrão oficial de demonstração"
                >
                  <RefreshCw className="w-3 h-3 text-rose-500" />
                  <span>Reset Demo</span>
                </button>
              )}

              <button
                type="button"
                onClick={handleGlobalRefresh}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-[#15365C] border border-slate-200 rounded-lg text-xs font-bold transition active:scale-95"
                title="Atualizar dados e recalcular índices"
              >
                <RefreshCw className={`w-3.5 h-3.5 text-blue-600 ${isRefreshing ? "animate-spin" : ""}`} />
                <span className="hidden sm:inline">Atualizar</span>
              </button>

              <div
                onClick={() => setCurrentTab("meu_perfil")}
                className="flex items-center gap-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg cursor-pointer transition shadow-xs"
                title="Meu Perfil"
              >
                <div className={`w-7 h-7 rounded-full text-white font-bold text-xs flex items-center justify-center ${
                  isCoordinator ? "bg-[#E52329]" : isViewer ? "bg-purple-600" : "bg-emerald-600"
                }`}>
                  {currentUser?.nome?.charAt(0) || "U"}
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-bold leading-tight truncate max-w-[130px] text-slate-800">{currentUser?.nome}</div>
                  <div className="text-[10px] text-amber-600 font-bold uppercase flex items-center gap-1">
                    {currentUser?.role}
                    {isViewer && <Eye className="w-2.5 h-2.5 text-purple-600 inline" />}
                  </div>
                </div>
              </div>

              {/* Selector de perfil para simulação / troca rápida */}
              <select
                value={currentUser?.id}
                onChange={(e) => {
                  const targetUser = equipe.find(u => u.id === Number(e.target.value));
                  if (targetUser) {
                    setCurrentUser(targetUser);
                    showFeedback(`Sessão alterada para: ${targetUser.nome} (${targetUser.role})`);
                  }
                }}
                className="px-2.5 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-900 rounded-lg text-[11px] font-black uppercase tracking-wider transition border border-amber-500/40 shadow-xs cursor-pointer outline-none"
                title="Alternar entre perfis para teste de permissões"
              >
                {equipe.map(u => (
                  <option key={u.id} value={u.id}>
                    {u.role}: {u.nome.split(" ")[0]}
                  </option>
                ))}
              </select>

              {/* Botão Encerrar Sessão / Logout */}
              <button
                type="button"
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold transition active:scale-95 shadow-xs"
                title="Encerrar sessão atual e voltar para a tela de login"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sair</span>
              </button>
            </div>
          </div>
        </div>

        {/* NAVEGAÇÃO HORIZONTAL SUAVE COM SETAS LATERAIS */}
        <div className="bg-[#15365C] border-t border-slate-200 relative">
          <div className="w-full px-2 sm:px-6 flex items-center relative">
            <button
              type="button"
              onClick={() => scrollNav("left")}
              className="p-1.5 bg-[#0e243d]/90 hover:bg-[#15365C] text-slate-300 hover:text-white rounded-l transition z-10"
              title="Rolar abas para a esquerda"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <nav
              ref={headerNavRef}
              className="flex items-center gap-1 overflow-x-auto py-2 px-1 scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {(isCoordinator || isViewer) && (
                <button
                  type="button"
                  onClick={() => setCurrentTab("dashboard")}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition flex-shrink-0 ${
                    currentTab === "dashboard" ? "bg-[#E52329] text-white shadow" : "text-slate-300 hover:bg-white/10"
                  }`}
                >
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  <span>Dashboard Executivo</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => setCurrentTab("minhas")}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition flex-shrink-0 ${
                  currentTab === "minhas" ? "bg-[#E52329] text-white shadow" : "text-slate-300 hover:bg-white/10"
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Minhas Atividades</span>
                <span className="ml-1 px-1.5 py-0.2 bg-white/20 rounded-full text-[10px] font-black">
                  {minhasAtividades.length}
                </span>
              </button>

              {(isCoordinator || isViewer) && (
                <>
                  <button
                    type="button"
                    onClick={() => setCurrentTab("gestao_obras")}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition flex-shrink-0 ${
                      currentTab === "gestao_obras" ? "bg-[#E52329] text-white shadow" : "text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <FolderPlus className="w-3.5 h-3.5" />
                    <span>Cadastro de Obras</span>
                    <span className="text-[9px] bg-amber-400 text-[#15365C] px-1 py-0.2 rounded font-black">
                      {isViewer ? "LEITURA" : "COORD"}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentTab("gestao_tarefas")}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition flex-shrink-0 ${
                      currentTab === "gestao_tarefas" ? "bg-[#E52329] text-white shadow" : "text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <ListPlus className="w-3.5 h-3.5" />
                    <span>Gestão de Tarefas</span>
                    <span className="text-[9px] bg-amber-400 text-[#15365C] px-1 py-0.2 rounded font-black">
                      {isViewer ? "LEITURA" : "COORD"}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentTab("horas")}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition flex-shrink-0 ${
                      currentTab === "horas" ? "bg-[#E52329] text-white shadow" : "text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>Apontamento de Horas</span>
                    <span className="text-[9px] bg-amber-400 text-[#15365C] px-1 py-0.2 rounded font-black">
                      {isViewer ? "LEITURA" : "GESTÃO"}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentTab("matriz")}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition flex-shrink-0 ${
                      currentTab === "matriz" ? "bg-[#E52329] text-white shadow" : "text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>Matriz de Alocação</span>
                    <span className="text-[9px] bg-amber-400 text-[#15365C] px-1 py-0.2 rounded font-black">
                      {isViewer ? "DIRETORIA" : "COORD"}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentTab("gantt")}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition flex-shrink-0 ${
                      currentTab === "gantt" ? "bg-[#E52329] text-white shadow" : "text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Cronograma de Gantt</span>
                    <span className="text-[9px] bg-amber-400 text-[#15365C] px-1 py-0.2 rounded font-black">
                      {isViewer ? "DIRETORIA" : "COORD"}
                    </span>
                  </button>
                </>
              )}

              <button
                type="button"
                onClick={() => setCurrentTab("meu_perfil")}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition flex-shrink-0 ${
                  currentTab === "meu_perfil" ? "bg-[#E52329] text-white shadow" : "text-slate-300 hover:bg-white/10"
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Meu Perfil</span>
              </button>
            </nav>

            <button
              type="button"
              onClick={() => scrollNav("right")}
              className="p-1.5 bg-[#0e243d]/90 hover:bg-[#15365C] text-slate-300 hover:text-white rounded-r transition z-10"
              title="Rolar abas para a direita"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* BARRA DE EXPORTAÇÃO MULTI-FORMATO (PDF, WORD, EXCEL) */}
      <div className="bg-white border-b border-slate-200 py-2.5 px-3 sm:px-6 shadow-xs print:hidden">
        <div className="w-full flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
            <FileText className="w-4 h-4 text-[#15365C]" />
            <span className="uppercase tracking-wider">Exportar Relatório desta Aba ({currentTab.toUpperCase()}):</span>
            {isViewer && (
              <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 text-[10px] font-black uppercase">
                Modo Visualizador / Diretoria (Somente Leitura)
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleExportPDF}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-lg text-xs font-bold transition active:scale-95"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PDF</span>
            </button>
            <button
              type="button"
              onClick={handleExportWord}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg text-xs font-bold transition active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Word</span>
            </button>
            <button
              type="button"
              onClick={handleExportExcel}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-lg text-xs font-bold transition active:scale-95"
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Excel</span>
            </button>
          </div>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL DINÂMICO - WIDE FLUID TOTAL (APROVEITAMENTO MÁXIMO DA TELA) */}
      <main className="w-full px-2 sm:px-4 lg:px-6 py-4 flex-1 space-y-5 max-w-full">
        {/* ========================================================= */}
        {/* ABA: DASHBOARD EXECUTIVO (COORDENADOR OU VISUALIZADOR)     */}
        {/* ========================================================= */}
        {currentTab === "dashboard" && (isCoordinator || isViewer) && (
          <div className="space-y-5 animate-fade-in">
            {/* 1. BARRA DE CONTROLE MASTER & FILTROS UNIFICADOS (COCKPIT HEADER) */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200/90 p-4 sm:p-5 space-y-4">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-3 border-b border-slate-100">
                {/* Identificação Executiva */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#15365C] text-white rounded-xl shadow-xs flex-shrink-0">
                    <BarChart2 className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-base sm:text-lg font-black text-[#15365C]">
                        Painel Executivo & Balanço Operacional
                      </h2>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-blue-50 text-[#15365C] border border-blue-200">
                        Jornada Time de Projetos (44h/Sem • 8h/dia)
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">
                      Capacidade nominal de engenharia x demanda consolidada dos empreendimentos
                    </p>
                  </div>
                </div>

                {/* Seletor de Modo de Exibição (Segmented Control Fluido) */}
                <div className="flex items-center bg-slate-100/90 p-1 rounded-xl border border-slate-200 text-xs font-bold self-start lg:self-auto">
                  <button
                    type="button"
                    onClick={() => setDashboardViewTab("cockpit")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition active:scale-95 cursor-pointer ${
                      dashboardViewTab === "cockpit"
                        ? "bg-[#15365C] text-white shadow-xs font-black"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <BarChart2 className="w-3.5 h-3.5" />
                    <span>Capacidade Time de Projeto</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDashboardViewTab("raiox")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition active:scale-95 cursor-pointer ${
                      dashboardViewTab === "raiox"
                        ? "bg-[#15365C] text-white shadow-xs font-black"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Raio-X das Obras</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDashboardViewTab("completo")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition active:scale-95 cursor-pointer ${
                      dashboardViewTab === "completo"
                        ? "bg-[#15365C] text-white shadow-xs font-black"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    <span>Visão Unificada</span>
                  </button>
                </div>
              </div>

              {/* Seletor Rápido de Mês em Chips / Pills Horizontais */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-0.5">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-black text-slate-500 mr-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#15365C]" />
                    Mês de Referência:
                  </span>
                  {MESES_OPCOES.map((m) => {
                    const isSelected = dashboardMes === m.id;
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => {
                          setDashboardMes(m.id);
                          setResumoPeriodoFilter(m.id);
                        }}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition active:scale-95 cursor-pointer flex items-center gap-1 ${
                          isSelected
                            ? "bg-[#15365C] text-white shadow-xs ring-2 ring-[#15365C]/20"
                            : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80"
                        }`}
                      >
                        {m.id === "2026-11" && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />}
                        <span>{m.mesAbrev}</span>
                        {m.id === "2026-11" && <span className="text-[10px] opacity-80">(Atual)</span>}
                      </button>
                    );
                  })}
                </div>

                <div className="text-[11px] text-slate-500 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal-500 inline-block"></span>
                  <span>
                    Referência ativa: <strong>{dashboardMes === "todos" ? "Consolidado Geral (5 Meses)" : MESES_OPCOES.find(m => m.id === dashboardMes)?.nome}</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* 2. RIBBON DE KPIs EXECUTIVOS (4 CARDS DE ALTO IMPACTO) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {/* KPI 1: Capacidade do Time */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-white to-blue-50/40 border border-slate-200 shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Capacidade Técnica</span>
                  <span className="p-1 rounded-md bg-blue-100 text-[#15365C]">
                    <Users className="w-4 h-4" />
                  </span>
                </div>
                <div className="text-2xl font-black text-[#15365C] tracking-tight">
                  {balancoHorasMes.capacidadeTotalDisponivel}h
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span><strong>{balancoHorasMes.numAtivosProjetos} de {balancoHorasMes.numTecnicos} ativos em projetos</strong></span>
                  <span className="font-mono text-[11px]">
                    {balancoHorasMes.numFerias > 0 || balancoHorasMes.numCampo > 0
                      ? `${balancoHorasMes.numFerias > 0 ? `${balancoHorasMes.numFerias} férias` : ""}${balancoHorasMes.numFerias > 0 && balancoHorasMes.numCampo > 0 ? " • " : ""}${balancoHorasMes.numCampo > 0 ? `${balancoHorasMes.numCampo} campo` : ""}`
                      : "176h/mês cada"}
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-teal-600 h-1.5 rounded-full w-full" />
                </div>
              </div>

              {/* KPI 2: Demanda Requerida */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-white to-amber-50/40 border border-amber-200/90 shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider">Demanda Requerida</span>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase border ${
                    balancoHorasMes.taxaOcupacao <= 80
                      ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                      : balancoHorasMes.taxaOcupacao <= 100
                      ? "bg-blue-50 text-[#15365C] border-blue-200"
                      : "bg-rose-50 text-rose-800 border-rose-200"
                  }`}>
                    {balancoHorasMes.taxaOcupacao}% Ocupação
                  </span>
                </div>
                <div className="text-2xl font-black text-amber-950 tracking-tight">
                  {balancoHorasMes.horasDemandadasTotal}h
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Projetado em {obras.length} obras</span>
                  <span className="font-bold text-amber-800">
                    {balancoHorasMes.taxaOcupacao <= 80 ? "Disponível" : balancoHorasMes.taxaOcupacao <= 100 ? "Ideal" : "Sobrecarga"}
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <div
                    className={`h-1.5 rounded-full transition-all ${
                      balancoHorasMes.taxaOcupacao <= 80 ? "bg-emerald-500" : balancoHorasMes.taxaOcupacao <= 100 ? "bg-[#15365C]" : "bg-rose-600"
                    }`}
                    style={{ width: `${Math.min(100, balancoHorasMes.taxaOcupacao)}%` }}
                  />
                </div>
              </div>

              {/* KPI 3: Saldo / Balanço de Horas */}
              <div className={`p-4 rounded-xl border shadow-2xs space-y-2 ${
                balancoHorasMes.saldoHoras >= 0
                  ? "bg-gradient-to-br from-white to-emerald-50/50 border-emerald-200/90"
                  : "bg-gradient-to-br from-white to-rose-50/60 border-rose-200/90"
              }`}>
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${
                    balancoHorasMes.saldoHoras >= 0 ? "text-emerald-800" : "text-rose-800"
                  }`}>
                    Balanço de Capacidade
                  </span>
                  <span className={`p-1 rounded-md ${
                    balancoHorasMes.saldoHoras >= 0 ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"
                  }`}>
                    {balancoHorasMes.saldoHoras >= 0 ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                  </span>
                </div>
                <div className={`text-2xl font-black tracking-tight ${
                  balancoHorasMes.saldoHoras >= 0 ? "text-emerald-800" : "text-rose-700"
                }`}>
                  {balancoHorasMes.saldoHoras >= 0 ? `+${balancoHorasMes.saldoHoras}h` : `${balancoHorasMes.saldoHoras}h`}
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className={balancoHorasMes.saldoHoras >= 0 ? "text-emerald-700 font-semibold" : "text-rose-700 font-semibold"}>
                    {balancoHorasMes.saldoHoras >= 0 ? "Folga disponível" : "Gargalo / Sobrecarga"}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {balancoHorasMes.saldoHoras >= 0 ? "Sem hora extra" : "Requer remanejamento"}
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <div
                    className={`h-1.5 rounded-full ${balancoHorasMes.saldoHoras >= 0 ? "bg-emerald-600" : "bg-rose-600"}`}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              {/* KPI 4: Execução & Conclusão Física */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Avanço Físico Real</span>
                  <span className="p-1 rounded-md bg-slate-100 text-[#15365C]">
                    <Clock className="w-4 h-4" />
                  </span>
                </div>
                <div className="text-2xl font-black text-[#15365C] tracking-tight">
                  {resumoStat.mediaPerc}%
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span><strong>{balancoHorasMes.horasRealizadasNoMes}h</strong> apontadas</span>
                  <span className="font-semibold text-emerald-700">
                    {Math.round((balancoHorasMes.horasRealizadasNoMes / (balancoHorasMes.horasDemandadasTotal || 1)) * 100)}% executado
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-[#E52329] h-1.5 rounded-full transition-all"
                    style={{ width: `${resumoStat.mediaPerc}%` }}
                  />
                </div>
              </div>
            </div>

            {/* 3. VISÃO A: COCKPIT DE CAPACIDADE TIME DE PROJETO & DEMANDA */}
            {(dashboardViewTab === "cockpit" || dashboardViewTab === "completo") && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  {/* Studio Visual: Balanço Proporcional do Mês (7 Colunas) */}
                  <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-5 space-y-4 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
                        <div>
                          <span className="text-xs font-black text-[#15365C] uppercase tracking-wider block">
                            Comparativo Direto de Horas — {dashboardMes === "todos" ? "Consolidado Geral" : MESES_OPCOES.find(m => m.id === dashboardMes)?.nome}
                          </span>
                          <span className="text-[11px] text-slate-500">
                            Capacidade Time de Projeto vs Carga de Trabalho Demandada
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] font-bold">
                          <span className="px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">
                            Disp: {balancoHorasMes.capacidadeTotalDisponivel}h
                          </span>
                          <span className="px-2 py-0.5 rounded bg-blue-50 text-[#15365C] border border-blue-200">
                            Nec: {balancoHorasMes.horasDemandadasTotal}h
                          </span>
                        </div>
                      </div>

                      {/* Aviso de Ajuste de Capacidade (Férias ou Campo) */}
                      {(balancoHorasMes.numFerias > 0 || balancoHorasMes.numCampo > 0) && (
                        <div className="p-2.5 bg-amber-50/90 border border-amber-200 rounded-xl flex items-center justify-between text-xs text-amber-900">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-amber-600 flex-shrink-0" />
                            <span>
                              <strong>Ajuste de Capacidade Ativo:</strong>{" "}
                              {balancoHorasMes.numFerias > 0 && `${balancoHorasMes.numFerias} profissional(is) em férias`}
                              {balancoHorasMes.numFerias > 0 && balancoHorasMes.numCampo > 0 && " • "}
                              {balancoHorasMes.numCampo > 0 && `${balancoHorasMes.numCampo} profissional(is) em campo`}{" "}
                              (horas deduzidas da disponibilidade de projetos).
                            </span>
                          </div>
                          <span className="px-2 py-0.5 bg-white rounded border border-amber-300 font-bold text-[10px] text-amber-800 flex-shrink-0">
                            -{((balancoHorasMes.numFerias + balancoHorasMes.numCampo) * 176 * (dashboardMes === "todos" ? 5 : 1))}h
                          </span>
                        </div>
                      )}

                      {/* 3 Barras Visuais Proporcionais */}
                      <div className="space-y-3 pt-1">
                        {/* Barra 1: Disponíveis */}
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-bold text-teal-900 flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-teal-600 inline-block"></span>
                              Capacidade Disponível (Time de Projetos • Base 44h/sem)
                            </span>
                            <span className="font-mono font-bold text-teal-800 text-xs">
                              {balancoHorasMes.capacidadeTotalDisponivel}h (100%)
                            </span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-lg h-6 p-0.5 border border-slate-200 flex items-center">
                            <div
                              className="h-full bg-teal-600 rounded-md shadow-2xs flex items-center justify-end px-2 text-[10px] font-black text-white"
                              style={{ width: "100%" }}
                            >
                              {balancoHorasMes.capacidadeTotalDisponivel}h
                            </div>
                          </div>
                        </div>

                        {/* Barra 2: Necessárias */}
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-bold text-[#15365C] flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#15365C] inline-block"></span>
                              Demanda Necessária (Todas as Obras)
                            </span>
                            <span className={`font-mono font-bold text-xs ${
                              balancoHorasMes.horasDemandadasTotal > balancoHorasMes.capacidadeTotalDisponivel ? "text-rose-600" : "text-[#15365C]"
                            }`}>
                              {balancoHorasMes.horasDemandadasTotal}h ({balancoHorasMes.taxaOcupacao}%)
                            </span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-lg h-6 p-0.5 border border-slate-200 flex items-center">
                            <div
                              className={`h-full rounded-md shadow-2xs flex items-center justify-end px-2 text-[10px] font-black text-white transition-all ${
                                balancoHorasMes.horasDemandadasTotal > balancoHorasMes.capacidadeTotalDisponivel
                                  ? "bg-rose-600"
                                  : balancoHorasMes.taxaOcupacao > 85
                                  ? "bg-amber-600"
                                  : "bg-[#15365C]"
                              }`}
                              style={{
                                width: `${Math.min(100, (balancoHorasMes.horasDemandadasTotal / (balancoHorasMes.capacidadeTotalDisponivel || 1)) * 100)}%`
                              }}
                            >
                              {balancoHorasMes.horasDemandadasTotal}h
                            </div>
                          </div>
                        </div>

                        {/* Barra 3: Apontadas */}
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-bold text-blue-900 flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span>
                              Horas Realizadas / Apontadas
                            </span>
                            <span className="font-mono font-bold text-blue-800 text-xs">
                              {balancoHorasMes.horasRealizadasNoMes}h ({Math.round((balancoHorasMes.horasRealizadasNoMes / (balancoHorasMes.horasDemandadasTotal || 1)) * 100)}%)
                            </span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-lg h-6 p-0.5 border border-slate-200 flex items-center">
                            <div
                              className="h-full bg-blue-500 rounded-md shadow-2xs flex items-center justify-end px-2 text-[10px] font-black text-white transition-all"
                              style={{
                                width: `${Math.min(100, (balancoHorasMes.horasRealizadasNoMes / (balancoHorasMes.capacidadeTotalDisponivel || 1)) * 100)}%`
                              }}
                            >
                              {balancoHorasMes.horasRealizadasNoMes}h
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Card de Diagnóstico Executivo */}
                      <div className={`p-3 rounded-xl border flex items-center gap-2.5 text-xs ${
                        balancoHorasMes.saldoHoras >= 0
                          ? "bg-emerald-50/70 border-emerald-200 text-emerald-900"
                          : "bg-rose-50/80 border-rose-200 text-rose-900"
                      }`}>
                        {balancoHorasMes.saldoHoras >= 0 ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                        )}
                        <span className="leading-snug">
                          {balancoHorasMes.saldoHoras >= 0
                            ? `Saldo Favorável: O time de engenharia dispõe de ${balancoHorasMes.saldoHoras}h livres no mês para absorver novas atividades sem risco de horas extras.`
                            : `Alerta de Gargalo: A demanda excede o teto regular da equipe em ${Math.abs(balancoHorasMes.saldoHoras)}h. Recomenda-se remanejamento de prazos ou reforço de alocação.`}
                        </span>
                      </div>
                    </div>

                    {/* Distribuição por Obra no Mês */}
                    <div className="pt-3 border-t border-slate-100 space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                        <span className="uppercase text-[10px] tracking-wider">Carga Demandada por Empreendimento ({dashboardMes === "todos" ? "Geral" : MESES_OPCOES.find(m => m.id === dashboardMes)?.mesAbrev})</span>
                        <span className="text-[10px] text-slate-400 font-normal">Clique para filtrar</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {obras.map(o => {
                          const hObra = balancoHorasMes.horasDemandadasPorObra[o.nome] || 0;
                          const percDoMes = balancoHorasMes.capacidadeTotalDisponivel > 0
                            ? Math.round((hObra / balancoHorasMes.capacidadeTotalDisponivel) * 100)
                            : 0;
                          return (
                            <button
                              key={o.id}
                              type="button"
                              onClick={() => {
                                setRaioXObra(o.nome);
                                setDashboardViewTab("raiox");
                              }}
                              className="p-2 bg-slate-50 hover:bg-blue-50/50 rounded-lg border border-slate-200 text-left transition active:scale-95 space-y-1 cursor-pointer"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-xs text-[#15365C] truncate">{o.nome}</span>
                                <span className="font-mono font-black text-[11px] text-amber-900 bg-amber-50 px-1 rounded">
                                  {hObra}h
                                </span>
                              </div>
                              <div className="flex items-center justify-between text-[10px] text-slate-500">
                                <span>{percDoMes}% da capacidade</span>
                                <span className="text-blue-600 font-bold">&rarr;</span>
                              </div>
                              <div className="w-full bg-slate-200 rounded-full h-1 overflow-hidden">
                                <div className="bg-[#15365C] h-1 rounded-full" style={{ width: `${Math.min(100, percDoMes)}%` }} />
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Linha do Tempo Comparativa 5 Meses (5 Colunas) */}
                  <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-5 space-y-3 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <div>
                          <span className="text-xs font-black text-[#15365C] uppercase tracking-wider block">
                            Linha do Tempo (5 Meses)
                          </span>
                          <span className="text-[11px] text-slate-500">
                            Evolução comparativa Out/26 a Fev/27
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold">
                          <span className="flex items-center gap-1 text-teal-700">
                            <span className="w-2 h-2 rounded bg-teal-600 inline-block"></span> Disp (528h)
                          </span>
                          <span className="flex items-center gap-1 text-[#15365C]">
                            <span className="w-2 h-2 rounded bg-[#15365C] inline-block"></span> Nec
                          </span>
                        </div>
                      </div>

                      {/* Colunas Pareadas Interativas */}
                      <div className="grid grid-cols-5 gap-2 pt-1">
                        {balancoHorasMes.comparativoMeses.map((m) => {
                          const isCurrentSelected = dashboardMes === m.id;
                          const isOverloaded = m.demanda > m.capacidade;
                          const maxRef = Math.max(m.capacidade, m.demanda, 600);
                          const alturaDisponivel = Math.round((m.capacidade / maxRef) * 110);
                          const alturaDemanda = Math.round((m.demanda / maxRef) * 110);

                          return (
                            <button
                              key={m.id}
                              type="button"
                              onClick={() => {
                                setDashboardMes(m.id);
                                setResumoPeriodoFilter(m.id);
                              }}
                              className={`p-2 rounded-xl border text-center transition cursor-pointer flex flex-col justify-between space-y-2 active:scale-95 ${
                                isCurrentSelected
                                  ? "bg-blue-50/70 border-[#15365C] shadow-xs ring-2 ring-[#15365C]/30"
                                  : "bg-slate-50/60 hover:bg-slate-100/80 border-slate-200"
                              }`}
                            >
                              <div className="pb-1 border-b border-slate-200/60">
                                <span className={`text-[11px] font-black block ${isCurrentSelected ? "text-[#15365C]" : "text-slate-700"}`}>
                                  {m.mesAbrev}
                                </span>
                              </div>

                              {/* Colunas Verticais Pareadas */}
                              <div className="h-28 flex items-end justify-center gap-1.5 pb-1 border-b border-slate-200/60">
                                {/* Coluna Disp */}
                                <div className="flex flex-col items-center">
                                  <div
                                    className="w-3.5 bg-teal-600 rounded-t shadow-2xs transition-all"
                                    style={{ height: `${alturaDisponivel}px` }}
                                    title={`Disponível: ${m.capacidade}h`}
                                  />
                                </div>
                                {/* Coluna Demanda */}
                                <div className="flex flex-col items-center">
                                  <div
                                    className={`w-3.5 rounded-t shadow-2xs transition-all ${isOverloaded ? "bg-rose-600" : "bg-[#15365C]"}`}
                                    style={{ height: `${alturaDemanda}px` }}
                                    title={`Demanda: ${m.demanda}h`}
                                  />
                                </div>
                              </div>

                              {/* Ocupação & Balanço */}
                              <div className="space-y-0.5">
                                <span className={`text-[10px] font-black block ${isOverloaded ? "text-rose-600" : "text-emerald-700"}`}>
                                  {m.capacidade - m.demanda >= 0 ? `+${Math.round((m.capacidade - m.demanda))}h` : `${Math.round((m.capacidade - m.demanda))}h`}
                                </span>
                                <span className="text-[9px] text-slate-400 block font-semibold">
                                  {m.ocupacao}%
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Alerta de Frentes Sem Responsável Vinculado */}
                    {balancoHorasMes.tarefasPendentesAlocacao.length > 0 && (
                      <div className="p-3 bg-amber-50 border border-amber-300 rounded-xl space-y-1.5 mt-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                            <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                            Alocação Técnica Pendente
                          </span>
                          <span className="px-1.5 py-0.2 rounded bg-amber-200/80 text-amber-900 font-black text-[10px]">
                            {balancoHorasMes.tarefasPendentesAlocacao.length} {balancoHorasMes.tarefasPendentesAlocacao.length === 1 ? "frente" : "frentes"}
                          </span>
                        </div>
                        <p className="text-[11px] text-amber-800 leading-tight">
                          Há atividades cadastradas com responsável <strong>"(A Definir)"</strong> aguardando atribuição de engenheiro.
                        </p>
                        <button
                          type="button"
                          onClick={() => setCurrentTab("gestao_tarefas")}
                          className="text-xs font-bold text-amber-900 hover:text-amber-950 underline cursor-pointer pt-0.5 block"
                        >
                          Abrir Gestão de Tarefas para Alocar &rarr;
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* 4. VISÃO B: RAIO-X DAS OBRAS & FRENTES TÉCNICAS */}
            {(dashboardViewTab === "raiox" || dashboardViewTab === "completo") && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden space-y-4 p-4 sm:p-5">
                {/* Header do Módulo Raio-X */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-3 border-b border-slate-100">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 bg-[#15365C] text-white rounded-lg shadow-xs">
                        <Building2 className="w-4 h-4 text-amber-300" />
                      </span>
                      <h3 className="text-base font-black text-[#15365C]">
                        Raio-X de Empreendimentos & Controle Físico
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500">
                      Acompanhamento individual por projeto, horas previstas x realizadas e status das atividades
                    </p>
                  </div>

                  {/* Seletor Rápido de Obra em Pills */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-500 mr-1">Obra:</span>
                    <button
                      type="button"
                      onClick={() => {
                        setRaioXObra("Todas");
                        setResumoCardFilter("todos");
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition active:scale-95 cursor-pointer ${
                        raioXObra === "Todas"
                          ? "bg-[#15365C] text-white shadow-xs font-black"
                          : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                      }`}
                    >
                      🌐 Todas as Obras ({obras.length})
                    </button>
                    {obras.map((o) => (
                      <button
                        key={o.id}
                        type="button"
                        onClick={() => {
                          setRaioXObra(o.nome);
                          setResumoCardFilter("todos");
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition active:scale-95 cursor-pointer truncate max-w-[170px] ${
                          raioXObra === o.nome
                            ? "bg-[#15365C] text-white shadow-xs font-black"
                            : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                        }`}
                      >
                        {o.nome}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Filtro Rápido de Período (Mês Vigente vs Ciclo Completo) */}
                <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/80 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-600 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#15365C]" />
                      Janela Temporal:
                    </span>
                    <div className="flex items-center bg-white p-0.5 rounded-lg border border-slate-200">
                      <button
                        type="button"
                        onClick={() => setResumoPeriodoFilter("todos")}
                        className={`px-3 py-1 rounded-md text-xs font-bold transition cursor-pointer ${
                          resumoPeriodoFilter === "todos"
                            ? "bg-[#15365C] text-white shadow-2xs font-black"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        📅 Todo o Ciclo da Obra
                      </button>
                      <button
                        type="button"
                        onClick={() => setResumoPeriodoFilter(dashboardMes === "todos" ? "2026-11" : dashboardMes)}
                        className={`px-3 py-1 rounded-md text-xs font-bold transition cursor-pointer ${
                          resumoPeriodoFilter !== "todos"
                            ? "bg-[#15365C] text-white shadow-2xs font-black"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        📌 Apenas Mês {dashboardMes === "todos" ? "Nov/26" : MESES_OPCOES.find(m => m.id === dashboardMes)?.mesAbrev}
                      </button>
                    </div>
                  </div>

                  <span className="text-[11px] text-slate-500 italic">
                    {resumoPeriodoFilter === "todos"
                      ? "* Computando escopo completo do início ao fim"
                      : `* Filtrando frentes e apontamentos referentes a ${MESES_OPCOES.find(m => m.id === resumoPeriodoFilter)?.nome || resumoPeriodoFilter}`}
                  </span>
                </div>

                {/* 7 Micro-Cards Interativos de Filtragem do Raio-X */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 text-center">
                  {/* 1. Cliente / Escopo */}
                  <button
                    type="button"
                    onClick={() => setResumoCardFilter("todos")}
                    className={`p-3 rounded-xl border transition cursor-pointer active:scale-95 flex flex-col justify-between ${
                      resumoCardFilter === "todos"
                        ? "bg-[#15365C] text-white border-[#15365C] shadow-xs ring-2 ring-blue-300"
                        : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800"
                    }`}
                  >
                    <span className={`text-[10px] font-bold uppercase block ${resumoCardFilter === "todos" ? "text-blue-200" : "text-slate-500"}`}>
                      Cliente / Escopo
                    </span>
                    <span className="text-xs sm:text-sm font-black truncate block my-1">
                      {resumoStat.cliente}
                    </span>
                    <span className={`text-[10px] block ${resumoCardFilter === "todos" ? "text-blue-200" : "text-slate-500"}`}>
                      {resumoStat.totalAtividades} frentes
                    </span>
                  </button>

                  {/* 2. Horas Previstas */}
                  <button
                    type="button"
                    onClick={() => setResumoCardFilter("previstas")}
                    className={`p-3 rounded-xl border transition cursor-pointer active:scale-95 flex flex-col justify-between ${
                      resumoCardFilter === "previstas"
                        ? "bg-blue-900 text-white border-blue-950 shadow-xs ring-2 ring-blue-300"
                        : "bg-slate-50 hover:bg-blue-50/50 border-slate-200 text-slate-800"
                    }`}
                  >
                    <span className={`text-[10px] font-bold uppercase block ${resumoCardFilter === "previstas" ? "text-blue-200" : "text-slate-500"}`}>
                      Horas Previstas
                    </span>
                    <span className={`text-base font-black my-1 block ${resumoCardFilter === "previstas" ? "text-white" : "text-[#15365C]"}`}>
                      {resumoStat.horasPrevistas}h
                    </span>
                    <span className={`text-[10px] block ${resumoCardFilter === "previstas" ? "text-blue-200" : "text-slate-500"}`}>
                      escopo planejado
                    </span>
                  </button>

                  {/* 3. Horas Gastas */}
                  <button
                    type="button"
                    onClick={() => setResumoCardFilter("gastas")}
                    className={`p-3 rounded-xl border transition cursor-pointer active:scale-95 flex flex-col justify-between ${
                      resumoCardFilter === "gastas"
                        ? "bg-emerald-700 text-white border-emerald-800 shadow-xs ring-2 ring-emerald-300"
                        : "bg-slate-50 hover:bg-emerald-50/50 border-slate-200 text-slate-800"
                    }`}
                  >
                    <span className={`text-[10px] font-bold uppercase block ${resumoCardFilter === "gastas" ? "text-emerald-100" : "text-slate-500"}`}>
                      Horas Gastas
                    </span>
                    <span className={`text-base font-black my-1 block ${resumoCardFilter === "gastas" ? "text-white" : "text-emerald-700"}`}>
                      {resumoStat.horasRealizadas}h
                    </span>
                    <span className={`text-[10px] font-semibold block ${resumoCardFilter === "gastas" ? "text-emerald-100" : "text-emerald-700"}`}>
                      {Math.round(((resumoStat.horasRealizadas / (resumoStat.horasPrevistas || 1)) * 100) * 10) / 10}% do previsto
                    </span>
                  </button>

                  {/* 4. Concluídas */}
                  <button
                    type="button"
                    onClick={() => setResumoCardFilter("concluidas")}
                    className={`p-3 rounded-xl border transition cursor-pointer active:scale-95 flex flex-col justify-between ${
                      resumoCardFilter === "concluidas"
                        ? "bg-emerald-600 text-white border-emerald-700 shadow-xs ring-2 ring-emerald-300"
                        : "bg-slate-50 hover:bg-emerald-50/50 border-slate-200 text-slate-800"
                    }`}
                  >
                    <span className={`text-[10px] font-bold uppercase block ${resumoCardFilter === "concluidas" ? "text-emerald-100" : "text-slate-500"}`}>
                      Concluídas (100%)
                    </span>
                    <span className={`text-base font-black my-1 block ${resumoCardFilter === "concluidas" ? "text-white" : "text-emerald-700"}`}>
                      {resumoStat.concluidas}
                    </span>
                    <span className={`text-[10px] block ${resumoCardFilter === "concluidas" ? "text-emerald-100" : "text-slate-500"}`}>
                      frentes finalizadas
                    </span>
                  </button>

                  {/* 5. Em Andamento */}
                  <button
                    type="button"
                    onClick={() => setResumoCardFilter("em_andamento")}
                    className={`p-3 rounded-xl border transition cursor-pointer active:scale-95 flex flex-col justify-between ${
                      resumoCardFilter === "em_andamento"
                        ? "bg-amber-600 text-white border-amber-700 shadow-xs ring-2 ring-amber-300"
                        : "bg-slate-50 hover:bg-amber-50/50 border-slate-200 text-slate-800"
                    }`}
                  >
                    <span className={`text-[10px] font-bold uppercase block ${resumoCardFilter === "em_andamento" ? "text-amber-100" : "text-slate-500"}`}>
                      Em Andamento
                    </span>
                    <span className={`text-base font-black my-1 block ${resumoCardFilter === "em_andamento" ? "text-white" : "text-amber-600"}`}>
                      {resumoStat.emAndamento}
                    </span>
                    <span className={`text-[10px] block ${resumoCardFilter === "em_andamento" ? "text-amber-100" : "text-slate-500"}`}>
                      em execução
                    </span>
                  </button>

                  {/* 6. Futuras */}
                  <button
                    type="button"
                    onClick={() => setResumoCardFilter("futuras")}
                    className={`p-3 rounded-xl border transition cursor-pointer active:scale-95 flex flex-col justify-between ${
                      resumoCardFilter === "futuras"
                        ? "bg-slate-700 text-white border-slate-800 shadow-xs ring-2 ring-slate-400"
                        : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800"
                    }`}
                  >
                    <span className={`text-[10px] font-bold uppercase block ${resumoCardFilter === "futuras" ? "text-slate-200" : "text-slate-500"}`}>
                      Frentes Futuras
                    </span>
                    <span className={`text-base font-black my-1 block ${resumoCardFilter === "futuras" ? "text-white" : "text-slate-700"}`}>
                      {resumoStat.futuras}
                    </span>
                    <span className={`text-[10px] block ${resumoCardFilter === "futuras" ? "text-slate-200" : "text-slate-500"}`}>
                      a iniciar (0%)
                    </span>
                  </button>

                  {/* 7. % Conclusão Real */}
                  <button
                    type="button"
                    onClick={() => setResumoCardFilter("percentual")}
                    className={`p-3 rounded-xl border transition cursor-pointer active:scale-95 flex flex-col justify-between ${
                      resumoCardFilter === "percentual"
                        ? "bg-[#E52329] text-white border-red-800 shadow-xs ring-2 ring-red-300"
                        : "bg-slate-50 hover:bg-red-50/50 border-slate-200 text-slate-800"
                    }`}
                  >
                    <span className={`text-[10px] font-bold uppercase block ${resumoCardFilter === "percentual" ? "text-red-100" : "text-slate-500"}`}>
                      % Conclusão Real
                    </span>
                    <span className={`text-base font-black my-1 block ${resumoCardFilter === "percentual" ? "text-white" : "text-[#15365C]"}`}>
                      {resumoStat.mediaPerc}%
                    </span>
                    <span className={`text-[10px] block ${resumoCardFilter === "percentual" ? "text-red-100" : "text-blue-500 font-semibold"}`}>
                      avanço médio
                    </span>
                  </button>
                </div>

                {/* Exibição: Grid de Cards para "Todas as Obras" OU Tabela Detalhada para Obra Específica */}
                {raioXObra === "Todas" ? (
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-[#15365C] uppercase tracking-wider">
                        Panorama Geral dos Empreendimentos ({obrasStats.length} Obras Cadastradas)
                      </span>
                      <span className="text-[11px] text-slate-500">
                        Clique em uma obra para examinar seu cronograma analítico
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                      {obrasStats.map((o) => {
                        const fCount = atividades.filter(a => a.obraNome === o.nome && !a.isNA && a.percentual === 0).length;
                        return (
                          <div
                            key={o.id}
                            onClick={() => {
                              setRaioXObra(o.nome);
                              setResumoCardFilter("todos");
                            }}
                            className="p-4 bg-slate-50/70 hover:bg-white border border-slate-200 hover:border-[#15365C] rounded-2xl hover:shadow-md transition cursor-pointer space-y-3 active:scale-98"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h4 className="font-black text-sm text-[#15365C] uppercase">{o.nome}</h4>
                                <span className="text-[11px] text-slate-500 font-semibold">{o.cliente}</span>
                              </div>
                              <span className="text-xs font-black px-2 py-0.5 rounded-full bg-blue-100 text-[#15365C] flex-shrink-0">
                                {o.mediaPerc}%
                              </span>
                            </div>

                            {/* Barra de Progresso Real */}
                            <div className="space-y-1">
                              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                                <div
                                  className="bg-[#E52329] h-2 rounded-full transition-all"
                                  style={{ width: `${o.mediaPerc}%` }}
                                />
                              </div>
                            </div>

                            {/* Horas Previstas vs Gastas */}
                            <div className="grid grid-cols-2 gap-2 text-center pt-1">
                              <div className="bg-white p-2 rounded-lg border border-slate-200/80">
                                <span className="text-[10px] text-slate-500 font-bold block uppercase">Previsto</span>
                                <span className="text-xs font-black text-[#15365C]">{o.horasPrevistas}h</span>
                              </div>
                              <div className="bg-white p-2 rounded-lg border border-slate-200/80">
                                <span className="text-[10px] text-slate-500 font-bold block uppercase">Realizado</span>
                                <span className="text-xs font-black text-emerald-700">{o.horasRealizadas}h</span>
                              </div>
                            </div>

                            <div className="flex justify-between items-center text-[10px] font-bold text-slate-600 pt-1 border-t border-slate-200/60">
                              <span className="text-emerald-700">{o.concluidas} conc.</span>
                              <span className="text-amber-700">{o.emAndamento} andam.</span>
                              <span className="text-slate-500">{fCount} futuras</span>
                              <span className="text-blue-600 font-black hover:underline">Ver Frentes &rarr;</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  /* Tabela Detalhada da Obra Selecionada */
                  <div className="space-y-3 pt-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-[#15365C] uppercase tracking-wider">
                          Atividades Técnicas: <span className="text-blue-600">{raioXObra}</span>
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border">
                          Filtro: {resumoCardFilter.toUpperCase()}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setRaioXObra("Todas");
                          setResumoCardFilter("todos");
                        }}
                        className="text-xs font-bold text-blue-600 hover:text-blue-800 underline cursor-pointer"
                      >
                        &larr; Voltar para Todas as Obras
                      </button>
                    </div>

                    <div className="overflow-x-auto border border-slate-200 rounded-xl">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 uppercase text-[10px] tracking-wider">
                            <th className="p-2.5">ID</th>
                            <th className="p-2.5">Atividade Técnica</th>
                            <th className="p-2.5">Fase</th>
                            <th className="p-2.5">Responsável</th>
                            <th className="p-2.5 text-center">Prazo</th>
                            <th className="p-2.5 text-center">Horas Prev.</th>
                            <th className="p-2.5 text-center">Horas Gastas</th>
                            <th className="p-2.5 text-center">% Real</th>
                            <th className="p-2.5 text-center">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {atividades
                            .filter(a => a.obraNome === raioXObra && !a.isNA)
                            .filter(a => {
                              if (resumoPeriodoFilter !== "todos") {
                                return getTaskHoursInMonth(a, resumoPeriodoFilter) > 0;
                              }
                              return true;
                            })
                            .filter(a => {
                              if (resumoCardFilter === "concluidas") return a.percentual >= 100;
                              if (resumoCardFilter === "em_andamento") return a.percentual > 0 && a.percentual < 100;
                              if (resumoCardFilter === "futuras") return a.percentual === 0;
                              if (resumoCardFilter === "gastas") {
                                const h = bancoHoras
                                  .filter(b => b.obraNome === a.obraNome && b.atividadeNome === a.atividade && (resumoPeriodoFilter === "todos" ? true : b.data && b.data.startsWith(resumoPeriodoFilter)))
                                  .reduce((acc, curr) => acc + curr.totalHoras, 0);
                                return h > 0;
                              }
                              return true;
                            })
                            .sort((a, b) => {
                              if (resumoCardFilter === "percentual") return b.percentual - a.percentual;
                              return a.id - b.id;
                            })
                            .map(act => {
                              const horasPrev = resumoPeriodoFilter !== "todos"
                                ? getTaskHoursInMonth(act, resumoPeriodoFilter)
                                : ((act.dias || 14) * 10);
                              const horasGastas = Math.round(
                                bancoHoras
                                  .filter(b => b.obraNome === act.obraNome && b.atividadeNome === act.atividade && (resumoPeriodoFilter === "todos" ? true : b.data && b.data.startsWith(resumoPeriodoFilter)))
                                  .reduce((acc, curr) => acc + curr.totalHoras, 0) * 10
                              ) / 10;
                              const isUnassigned = !act.resp1 || act.resp1 === "A Definir" || act.resp1 === "(A Definir)";

                              return (
                                <tr key={act.id} className="hover:bg-blue-50/30 transition">
                                  <td className="p-2.5 text-slate-400 font-mono">#{act.id}</td>
                                  <td className="p-2.5 font-bold text-[#15365C]">{act.atividade}</td>
                                  <td className="p-2.5">
                                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">
                                      {act.fase}
                                    </span>
                                  </td>
                                  <td className="p-2.5">
                                    {isUnassigned ? (
                                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-100 text-amber-900 border border-amber-300 inline-flex items-center gap-1">
                                        <AlertCircle className="w-3 h-3 text-amber-700" />
                                        (A Definir)
                                      </span>
                                    ) : (
                                      <span className="text-slate-700 font-medium">{act.resp1}</span>
                                    )}
                                  </td>
                                  <td className="p-2.5 text-center font-bold text-slate-600">{act.dias}d</td>
                                  <td className="p-2.5 text-center font-black text-[#15365C] bg-blue-50/40">{horasPrev}h</td>
                                  <td className="p-2.5 text-center font-black text-emerald-700 bg-emerald-50/40">{horasGastas}h</td>
                                  <td className="p-2.5 text-center font-bold">
                                    <div className="flex items-center justify-center gap-1.5">
                                      <div className="w-12 bg-slate-200 rounded-full h-1.5 overflow-hidden">
                                        <div
                                          className={`h-1.5 ${act.percentual >= 100 ? "bg-emerald-600" : act.percentual > 0 ? "bg-amber-500" : "bg-slate-300"}`}
                                          style={{ width: `${act.percentual}%` }}
                                        />
                                      </div>
                                      <span>{act.percentual}%</span>
                                    </div>
                                  </td>
                                  <td className="p-2.5 text-center">
                                    {act.percentual >= 100 ? (
                                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800">
                                        Concluído
                                      </span>
                                    ) : act.percentual > 0 ? (
                                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-100 text-amber-800">
                                        Em Andamento
                                      </span>
                                    ) : (
                                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-slate-100 text-slate-600">
                                        Futura (0%)
                                      </span>
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* ABA: MINHAS ATIVIDADES (COLABORADOR & COORDENADOR)        */}
        {/* ========================================================= */}
        {currentTab === "minhas" && (
          <div className="space-y-6">
            {/* Header da Aba com Seletor e Rolagem Horizontal */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-black text-[#15365C] flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    Painel Operacional — {isViewer ? "Todas as Atividades da Empresa (Modo Diretoria)" : `Atividades Atribuídas a ${currentUser?.nome}`}
                  </h2>
                  <p className="text-xs text-slate-500">
                    As horas apontadas por qualquer membro alocado (Titular ou Apoios) somam-se em conjunto na mesma atividade técnica.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-500">Filtrar Obra:</span>
                  <select
                    value={minhasAtividadesObraFilter}
                    onChange={(e) => setMinhasAtividadesObraFilter(e.target.value)}
                    className="p-2 border border-slate-300 rounded-lg text-xs font-bold text-[#15365C] bg-blue-50/50"
                  >
                    <option value="Todas">Todas as Minhas Obras ({obrasDoColaborador.length})</option>
                    {obrasDoColaborador.map((nome) => (
                      <option key={nome} value={nome}>{nome}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Pílulas de Seleção Rápida com Rolagem Horizontal Suave */}
              <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => scrollQuickSelect("left")}
                  className="p-1 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div
                  ref={quickSelectRef}
                  className="flex items-center gap-2 overflow-x-auto py-1 scroll-smooth"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  <button
                    type="button"
                    onClick={() => setMinhasAtividadesObraFilter("Todas")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition flex-shrink-0 ${
                      minhasAtividadesObraFilter === "Todas"
                        ? "bg-[#15365C] text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    Todas ({minhasAtividades.length})
                  </button>
                  {obrasDoColaborador.map((nome) => {
                    const count = minhasAtividades.filter(a => a.obraNome === nome).length;
                    return (
                      <button
                        key={nome}
                        type="button"
                        onClick={() => setMinhasAtividadesObraFilter(nome)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition flex-shrink-0 ${
                          minhasAtividadesObraFilter === nome
                            ? "bg-[#E52329] text-white"
                            : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                        }`}
                      >
                        {nome} ({count})
                      </button>
                    );
                  })}
                </div>
                <button
                  type="button"
                  onClick={() => scrollQuickSelect("right")}
                  className="p-1 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Grid dos Cards de Tarefas do Colaborador com detalhamento de horas em conjunto */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {minhasAtividades.filter(a => minhasAtividadesObraFilter === "Todas" || a.obraNome === minhasAtividadesObraFilter).length === 0 ? (
                <div className="col-span-full p-12 bg-white rounded-xl border border-slate-200 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-slate-300 mx-auto" />
                  <h3 className="text-base font-bold text-slate-700">Nenhuma atividade encontrada</h3>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    {minhasAtividadesObraFilter !== "Todas"
                      ? `Você não possui atividades alocadas especificamente na obra "${minhasAtividadesObraFilter}".`
                      : "No momento você não possui frentes de trabalho vinculadas diretamente ao seu perfil."}
                  </p>
                </div>
              ) : (
                minhasAtividades
                  .filter(a => minhasAtividadesObraFilter === "Todas" || a.obraNome === minhasAtividadesObraFilter)
                  .map((act) => {
                  const horasPrevistas = (act.dias || 14) * 10;
                  
                  // Apontamentos específicos desta atividade (somam todos os colaboradores alocados)
                  const apontamentosFrente = bancoHoras.filter(
                    b => b.obraNome === act.obraNome && b.atividadeNome === act.atividade
                  );
                  
                  const horasGastasTotal = Math.round(
                    apontamentosFrente.reduce((acc, curr) => acc + (curr.totalHoras || 0), 0) * 10
                  ) / 10;

                  // Agrupamento de horas apontadas por colaborador
                  const horasPorColaborador = {};
                  apontamentosFrente.forEach(ap => {
                    horasPorColaborador[ap.colaboradorNome] = (horasPorColaborador[ap.colaboradorNome] || 0) + ap.totalHoras;
                  });

                  // Percentual proporcional de horas executadas
                  const percHoras = horasPrevistas > 0 ? Math.round((horasGastasTotal / horasPrevistas) * 100) : 0;

                  // Percentual efetivo para exibição gráfica: se há horas apontadas e percentual físico ainda em 0%, inicia com no mínimo 15% ou percHoras
                  const percEfetivo = act.percentual > 0
                    ? act.percentual
                    : horasGastasTotal > 0
                    ? Math.max(15, Math.min(95, percHoras))
                    : 0;

                  const isConcluida = percEfetivo >= 100 || (horasPrevistas > 0 && horasGastasTotal >= horasPrevistas);
                  const isEmAndamento = !isConcluida && (percEfetivo > 0 || horasGastasTotal > 0);

                  return (
                    <div
                      key={act.id}
                      className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 space-y-4 hover:border-slate-300 transition"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-blue-100 text-[#15365C]">
                            {act.obraNome}
                          </span>
                          <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-600">
                            {act.fase}
                          </span>
                          <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800">
                            {act.dias}d • {horasPrevistas}h
                          </span>
                        </div>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                            isConcluida
                              ? "bg-emerald-100 text-emerald-800"
                              : isEmAndamento
                              ? "bg-amber-100 text-amber-800"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {isEmAndamento && <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse inline-block" />}
                          <span>{isConcluida ? "Concluído" : isEmAndamento ? "Em Andamento" : "Não Iniciado"}</span>
                        </span>
                      </div>

                      <h3 className="font-bold text-sm text-[#15365C]">{act.atividade}</h3>

                      {/* Equipe Alocada na Frente Técnica */}
                      <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 space-y-1.5 text-xs">
                        <div className="flex flex-wrap items-center justify-between gap-1 text-[11px]">
                          <span className="font-bold text-slate-600">Equipe Alocada:</span>
                          <div className="flex flex-wrap gap-1">
                            <span className="px-1.5 py-0.5 bg-blue-50 text-[#15365C] font-semibold rounded border border-blue-100">
                              Líder: {act.resp1}
                            </span>
                            {act.resp2 && (
                              <span className="px-1.5 py-0.5 bg-slate-100 text-slate-700 font-medium rounded">
                                Apoio 1: {act.resp2}
                              </span>
                            )}
                            {act.resp3 && (
                              <span className="px-1.5 py-0.5 bg-slate-100 text-slate-700 font-medium rounded">
                                Apoio 2: {act.resp3}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Transparência: Cômputo Conjunto de Horas */}
                        <div className="pt-1.5 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-1 text-[11px]">
                          <span className="font-bold text-emerald-800 flex items-center gap-1">
                            <Users className="w-3 h-3 text-emerald-700" />
                            Total Conjunto: <strong>{horasGastasTotal}h</strong> / {horasPrevistas}h
                          </span>
                          <span className="text-[10px] text-slate-500 italic">
                            {Object.keys(horasPorColaborador).length > 0
                              ? Object.entries(horasPorColaborador).map(([nome, h]) => `${nome.split(" ")[0]}: ${Math.round(h * 10) / 10}h`).join(" | ")
                              : "Nenhum apontamento ainda"}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
                        <div>
                          <span className="text-[10px] text-slate-400 font-bold uppercase block">Início Previsto</span>
                          <span className="font-semibold">{act.inicioPrevisto}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-400 font-bold uppercase block">Término Previsto</span>
                          <span className="font-semibold">{act.terminoPrevisto}</span>
                        </div>
                      </div>

                      {/* Gráfico 1: Barra de Carga Horária Executada (Atualiza imediatamente ao apontar horas) */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-bold">
                          <span className="text-slate-600 flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-blue-600" />
                            Carga Horária Apontada
                          </span>
                          <span className="font-mono font-bold text-[#15365C]">
                            {horasGastasTotal}h de {horasPrevistas}h ({percHoras}%)
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-2 rounded-full transition-all ${
                              percHoras >= 100 ? "bg-emerald-600" : "bg-blue-600"
                            }`}
                            style={{ width: `${Math.min(100, Math.max(horasGastasTotal > 0 ? 3 : 0, percHoras))}%` }}
                          />
                        </div>
                      </div>

                      {/* Gráfico 2: Barra de Progresso Físico */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-bold mb-1">
                          <span className="text-slate-600">Progresso Físico da Frente</span>
                          <span className="text-[#15365C] font-black">{percEfetivo}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-2 rounded-full transition-all ${
                              percEfetivo >= 100 ? "bg-emerald-600" : "bg-[#E52329]"
                            }`}
                            style={{ width: `${percEfetivo}%` }}
                          />
                        </div>
                        {!isCoordinator && (
                          <span className="text-[10px] text-slate-400 mt-0.5 block italic">
                            * Avanço físico validado pela Coordenação de Engenharia.
                          </span>
                        )}
                      </div>

                      {/* Ajuste de Percentual (Restrito exclusivamente a Coordenadores) */}
                      {isCoordinator && (
                        <div className="space-y-1.5 pt-2 border-t border-slate-100">
                          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                            <span className="text-[11px] font-bold text-amber-800 uppercase mr-1 flex-shrink-0">
                              Ajuste Coord:
                            </span>
                            {[0, 25, 50, 75, 100].map((val) => (
                              <button
                                key={val}
                                type="button"
                                onClick={() => handleUpdateProgress(act.id, val)}
                                className={`px-2.5 py-1 rounded text-xs font-bold transition flex-shrink-0 cursor-pointer ${
                                  act.percentual === val
                                    ? "bg-[#15365C] text-white shadow"
                                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                                }`}
                              >
                                {val}%
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Ações Operacionais: Apontamento de Horas (Liberado para Colaboradores e Coordenadores) */}
                      {!isViewer && (
                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                          <button
                            type="button"
                            onClick={() => handleOpenTimeModalForTask(act)}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 rounded-lg text-xs font-bold transition active:scale-95 cursor-pointer shadow-xs"
                            title="Apontar horas de hoje ou de dias anteriores nesta atividade"
                          >
                            <Clock className="w-3.5 h-3.5 text-amber-700" />
                            <span>Apontar Horas</span>
                          </button>
                          <span className="text-[10px] text-slate-400 italic">
                            Atualizado: {act.lastUpdated || "Recente"}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* ABA: CADASTRO DE OBRAS (COORDENADOR OU VISUALIZADOR)      */}
        {/* ========================================================= */}
        {currentTab === "gestao_obras" && (isCoordinator || isViewer) && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-black text-[#15365C] flex items-center gap-2">
                    <FolderPlus className="w-5 h-5 text-[#E52329]" />
                    Cadastro & Gestão Geral de Obras
                  </h2>
                  <p className="text-xs text-slate-500">
                    Cadastre novos contratos, edite empreendimentos ativos ou restaure obras excluídas nos últimos 30 dias.
                  </p>
                </div>
                
                <div className="flex flex-wrap items-center gap-3">
                  {/* Seletor de Visão: Ativas x Lixeira (Período de 30 dias) */}
                  <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs">
                    <button
                      type="button"
                      onClick={() => setObrasViewTab("ativas")}
                      className={`px-3 py-1.5 rounded-md font-bold transition flex items-center gap-1.5 ${
                        obrasViewTab === "ativas"
                          ? "bg-white text-[#15365C] shadow-xs font-black"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      <Building2 className="w-3.5 h-3.5" />
                      <span>Obras Ativas ({obras.length})</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setObrasViewTab("lixeira")}
                      className={`px-3 py-1.5 rounded-md font-bold transition flex items-center gap-1.5 ${
                        obrasViewTab === "lixeira"
                          ? "bg-white text-rose-700 shadow-xs font-black"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                      title="Obras excluídas que podem ser restauradas dentro do período de 30 dias"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Lixeira / Quarentena ({obrasExcluidas.length})</span>
                      {obrasExcluidas.length > 0 && (
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                      )}
                    </button>
                  </div>

                  {isCoordinator && obrasViewTab === "ativas" && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditingObra({ id: 0, nome: "", cliente: "", status: "Ativa" });
                        setObraModalMode("create");
                        setIsObraModalOpen(true);
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-[#E52329] hover:bg-red-700 text-white rounded-lg text-xs font-bold shadow transition active:scale-95"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Cadastrar Nova Obra</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* CONTEÚDO DA ABA SELECIONADA: OBRAS ATIVAS OU LIXEIRA (30 DIAS) */}
            {obrasViewTab === "ativas" ? (
              /* Grid de Obras Ativas */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {obrasStats.map((o) => (
                  <div
                    key={o.id}
                    className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 space-y-4 hover:border-slate-300 transition"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">
                        {o.status}
                      </span>
                      {isCoordinator && (
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setEditingObra(o);
                              setObraModalMode("edit");
                              setIsObraModalOpen(true);
                            }}
                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"
                            title="Editar Dados da Obra"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setObraToDelete(o);
                              setDeleteObraPassword("");
                              setDeleteObraError("");
                              setIsDeleteObraModalOpen(true);
                            }}
                            className="p-1.5 text-rose-600 hover:bg-rose-50 rounded"
                            title="Mover Obra para a Lixeira (com 30 dias de recuperação)"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>

                    <div>
                      <h3 className="font-black text-base text-[#15365C] uppercase">{o.nome}</h3>
                      <p className="text-xs text-slate-500 font-semibold">Cliente: {o.cliente}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-center bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">Frentes Ativas</span>
                        <span className="text-sm font-black text-[#15365C]">{o.totalActs}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">Conclusão Real</span>
                        <span className="text-sm font-black text-[#E52329]">{o.mediaPerc}%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100 text-slate-600">
                      <span>Horas: <strong>{o.horasRealizadas}h</strong> / {o.horasPrevistas}h</span>
                      <button
                        type="button"
                        onClick={() => {
                          setTaskManagerObra(o.nome);
                          setCurrentTab("gestao_tarefas");
                        }}
                        className="text-blue-600 font-bold hover:underline"
                      >
                        Gerenciar Tarefas &rarr;
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* LIXEIRA / QUARENTENA DE OBRAS EXCLUÍDAS (PERÍODO DE 30 DIAS PARA CANCELAR EXCLUSÃO) */
              <div className="space-y-4">
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs text-amber-900 leading-relaxed">
                    <strong className="block font-black text-amber-950">
                      Política de Retenção e Cancelamento de Exclusão (30 Dias)
                    </strong>
                    <p>
                      Obras excluídas permanecem preservadas nesta área durante <strong>30 dias corridos</strong> a partir da data de exclusão. Durante esse prazo, todo o escopo, tarefas e apontamentos podem ser <strong>restaurados instantaneamente com um clique</strong>.
                    </p>
                    <p className="text-slate-600 font-semibold text-[11px]">
                      * Dica de Engenharia: Para obras concluídas ou pausadas, a alternativa recomendada é mantê-las como "Arquivadas" para preservar o histórico ISO sem excluí-las.
                    </p>
                  </div>
                </div>

                {obrasExcluidas.length === 0 ? (
                  <div className="p-12 text-center bg-white rounded-xl border border-slate-200 space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                    <h3 className="font-bold text-sm text-slate-700">A lixeira está vazia</h3>
                    <p className="text-xs text-slate-400 max-w-md mx-auto">
                      Nenhuma obra foi excluída nos últimos 30 dias. Quando uma obra for excluída, ela aparecerá aqui para possibilitar o cancelamento da exclusão.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {obrasExcluidas.map((record) => {
                      const msElapsed = Date.now() - new Date(record.deletedAt).getTime();
                      const diasRestantes = Math.max(0, 30 - Math.floor(msElapsed / (1000 * 60 * 60 * 24)));
                      const isExpired = diasRestantes <= 0;

                      return (
                        <div
                          key={record.id}
                          className="bg-white rounded-xl shadow-sm border-2 border-dashed border-rose-200 p-5 space-y-4 hover:border-rose-400 transition"
                        >
                          <div className="flex items-center justify-between">
                            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                              isExpired ? "bg-slate-200 text-slate-700" : "bg-amber-100 text-amber-900 border border-amber-300"
                            }`}>
                              {isExpired ? "Exclusão Expirada" : `🕒 ${diasRestantes} dias para expirar`}
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono">
                              Excluída em: {new Date(record.deletedAt).toLocaleDateString("pt-BR")}
                            </span>
                          </div>

                          <div>
                            <h3 className="font-black text-base text-[#15365C] uppercase">{record.obra.nome}</h3>
                            <p className="text-xs text-slate-500 font-semibold">Cliente: {record.obra.cliente}</p>
                            <p className="text-[11px] text-slate-400 mt-0.5">Excluída por: {record.deletedBy}</p>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-center bg-rose-50/60 p-2.5 rounded-lg border border-rose-100">
                            <div>
                              <span className="text-[10px] text-slate-500 font-bold uppercase block">Frentes Salvas</span>
                              <span className="text-sm font-black text-[#15365C]">{record.atividades?.length || 0}</span>
                            </div>
                            <div>
                              <span className="text-[10px] text-slate-500 font-bold uppercase block">Apontamentos Salvos</span>
                              <span className="text-sm font-black text-amber-700">{record.bancoHoras?.length || 0}</span>
                            </div>
                          </div>

                          {isCoordinator && (
                            <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                              <button
                                type="button"
                                onClick={() => handleRestoreObra(record)}
                                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition shadow-xs active:scale-95 cursor-pointer"
                                title="Cancelar exclusão e restaurar obra com todas as atividades e apontamentos"
                              >
                                <RefreshCw className="w-3.5 h-3.5" />
                                <span>Restaurar Obra (Cancelar Exclusão)</span>
                              </button>
                              <button
                                type="button"
                                onClick={() => handlePurgeObra(record.id)}
                                className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg border border-rose-200 transition"
                                title="Excluir Definitivamente sem aguardar os 30 dias"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Registro de Auditoria de Exclusões */}
            {auditLogs.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                  <History className="w-4 h-4 text-slate-500" />
                  Histórico de Auditoria — Exclusões de Obras
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                        <th className="p-2">Obra Excluída</th>
                        <th className="p-2">Coordenador Responsável</th>
                        <th className="p-2">Data / Hora</th>
                        <th className="p-2">Detalhamento</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {auditLogs.map(log => (
                        <tr key={log.id}>
                          <td className="p-2 font-bold text-[#E52329]">{log.obraNome}</td>
                          <td className="p-2 text-slate-700">{log.coordenadorNome} ({log.coordenadorEmail})</td>
                          <td className="p-2 font-mono text-slate-500">{log.timestamp}</td>
                          <td className="p-2 text-slate-600">{log.detalhes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* ABA: GESTÃO DE TAREFAS POR OBRA (COORDENADOR OU VISUALIZADOR) */}
        {/* ========================================================= */}
        {currentTab === "gestao_tarefas" && (isCoordinator || isViewer) && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-black text-[#15365C] flex items-center gap-2">
                    <ListPlus className="w-5 h-5 text-amber-500" />
                    Gestão de Tarefas & Escopo Técnico por Obra
                  </h2>
                  <p className="text-xs text-slate-500">
                    Crie, edite prazos com conversão em horas (10h/dia) e sincronize os responsáveis de cada frente.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <select
                    value={taskManagerObra}
                    onChange={(e) => setTaskManagerObra(e.target.value)}
                    className="p-2 border border-slate-300 rounded-lg text-sm font-bold text-[#15365C] bg-amber-50/50"
                  >
                    {obras.map(o => (
                      <option key={o.id} value={o.nome}>{o.nome} ({o.cliente})</option>
                    ))}
                  </select>
                  {isCoordinator && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditingTask({
                          id: 0,
                          obraNome: taskManagerObra,
                          atividade: "",
                          fase: "Projetos",
                          dias: 14,
                          resp1: "A Definir",
                          resp2: "",
                          resp3: "",
                          percentual: 0,
                          isNA: false,
                          inicioPrevisto: "2026-11-02",
                          terminoPrevisto: "2026-11-16"
                        });
                        setTaskModalMode("create");
                        setIsTaskModalOpen(true);
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-[#15365C] hover:bg-blue-900 text-white rounded-lg text-xs font-bold shadow transition active:scale-95"
                    >
                      <Plus className="w-4 h-4 text-amber-300" />
                      <span>Incluir Tarefa Nesta Obra</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Tabela de Tarefas da Obra Selecionada */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-4 overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 uppercase text-[10px] tracking-wider">
                      <th className="p-2.5">ID</th>
                      <th className="p-2.5">Atividade Técnica</th>
                      <th className="p-2.5">Fase</th>
                      <th className="p-2.5">Titular (Líder)</th>
                      <th className="p-2.5">Apoio 1</th>
                      <th className="p-2.5">Apoio 2</th>
                      <th className="p-2.5 text-center">Dias</th>
                      <th className="p-2.5 text-center bg-amber-50/80 text-amber-900">Horas (10h/d)</th>
                      <th className="p-2.5 text-center">Início</th>
                      <th className="p-2.5 text-center">Término</th>
                      <th className="p-2.5 text-center">% Prog.</th>
                      {isCoordinator && <th className="p-2.5 text-center">Ações</th>}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {atividades.filter(a => a.obraNome === taskManagerObra).length === 0 ? (
                      <tr>
                        <td colSpan={isCoordinator ? 12 : 11} className="p-8 text-center text-slate-400">
                          Nenhuma atividade técnica cadastrada nesta obra ainda.
                          {isCoordinator && ' Clique em "Incluir Tarefa Nesta Obra" acima para iniciar o escopo.'}
                        </td>
                      </tr>
                    ) : (
                      atividades
                        .filter(a => a.obraNome === taskManagerObra)
                        .map((act) => (
                        <tr key={act.id} className="hover:bg-slate-50">
                          <td className="p-2.5 font-mono text-slate-400">#{act.id}</td>
                          <td className="p-2.5 font-bold text-[#15365C]">{act.atividade}</td>
                          <td className="p-2.5">
                            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">
                              {act.fase}
                            </span>
                          </td>
                          <td className="p-2.5 font-semibold text-slate-700">
                            {act.resp1 === "A Definir" || !act.resp1 ? (
                              <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 font-bold text-[10px] inline-flex items-center gap-1 shadow-2xs">
                                <AlertCircle className="w-3 h-3 text-amber-700 inline flex-shrink-0" />
                                A Definir
                              </span>
                            ) : (
                              act.resp1
                            )}
                          </td>
                          <td className="p-2.5 text-slate-500">{act.resp2 || "—"}</td>
                          <td className="p-2.5 text-slate-500">{act.resp3 || "—"}</td>
                          <td className="p-2.5 text-center font-bold text-slate-700">{act.dias}d</td>
                          <td className="p-2.5 text-center font-black text-amber-800 bg-amber-50/50">
                            {(act.dias || 14) * 10}h
                          </td>
                          <td className="p-2.5 text-center text-slate-600">{act.inicioPrevisto}</td>
                          <td className="p-2.5 text-center text-slate-600">{act.terminoPrevisto}</td>
                          <td className="p-2.5 text-center font-bold text-[#15365C]">{act.percentual}%</td>
                          {isCoordinator && (
                            <td className="p-2.5 text-center">
                              <div className="flex items-center justify-center gap-1.5">
                                <button
                                  type="button"
                                  onClick={() => {
                                    setEditingTask(act);
                                    setTaskModalMode("edit");
                                    setIsTaskModalOpen(true);
                                  }}
                                  className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                                  title="Editar Tarefa"
                                >
                                  <Edit2 className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setTaskToDelete(act)}
                                  className="p-1 text-rose-600 hover:bg-rose-50 rounded"
                                  title="Excluir Tarefa"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          )}
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* ABA: APONTAMENTO DE HORAS (GESTOR / COORDENADOR OU VISUALIZADOR) */}
        {/* ========================================================= */}
        {currentTab === "horas" && (isCoordinator || isViewer) && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-black text-[#15365C] flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-600" />
                    Banco de Horas & Apontamentos de Campo
                  </h2>
                  <p className="text-xs text-slate-500">
                    Histórico consolidado de horas executadas. Lance horas de hoje ou retroativas de qualquer dia anterior.
                  </p>
                </div>
                {!isViewer && (
                  <button
                    type="button"
                    onClick={handleOpenDirectTimeModal}
                    className="flex items-center gap-2 px-4 py-2 bg-[#E52329] hover:bg-red-700 text-white rounded-lg text-xs font-bold shadow transition active:scale-95 cursor-pointer"
                    title="Lançar horas em qualquer obra e atividade (hoje ou dias anteriores)"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Novo Apontamento de Horas</span>
                  </button>
                )}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-4 overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 uppercase text-[10px] tracking-wider">
                      <th className="p-2.5">Data</th>
                      <th className="p-2.5">Colaborador</th>
                      <th className="p-2.5">Obra</th>
                      <th className="p-2.5">Atividade</th>
                      <th className="p-2.5 text-center">Horário</th>
                      <th className="p-2.5 text-center">Total Horas</th>
                      <th className="p-2.5">Descrição do Trabalho Realizado</th>
                      <th className="p-2.5 text-center">Status</th>
                      {isCoordinator && <th className="p-2.5 text-center">Ações</th>}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {bancoHoras.length === 0 ? (
                      <tr>
                        <td colSpan={isCoordinator ? 9 : 8} className="p-8 text-center text-slate-400">
                          Nenhum apontamento de horas registrado ainda.
                          {!isViewer && ' Clique em "Novo Apontamento de Horas" acima para realizar um lançamento.'}
                        </td>
                      </tr>
                    ) : (
                      bancoHoras.map(b => (
                        <tr key={b.id} className="hover:bg-slate-50">
                          <td className="p-2.5 font-mono text-slate-600">{b.data}</td>
                          <td className="p-2.5 font-bold text-slate-700">{b.colaboradorNome}</td>
                          <td className="p-2.5 font-semibold text-[#15365C]">{b.obraNome}</td>
                          <td className="p-2.5 text-slate-700">{b.atividadeNome}</td>
                          <td className="p-2.5 text-center font-mono text-slate-500">
                            {b.horaInicio} às {b.horaFim}
                          </td>
                          <td className="p-2.5 text-center font-black text-emerald-700 bg-emerald-50/40">
                            {b.totalHoras}h
                          </td>
                          <td className="p-2.5 text-slate-600 max-w-xs truncate">{b.descricao}</td>
                          <td className="p-2.5 text-center">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                              {b.status}
                            </span>
                          </td>
                          {isCoordinator && (
                            <td className="p-2.5 text-center">
                              <button
                                type="button"
                                onClick={() => handleDeleteTimeEntry(b.id)}
                                className="p-1 text-rose-600 hover:bg-rose-50 rounded"
                                title="Estornar / Excluir este apontamento de horas"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          )}
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* ABA: MATRIZ DE ALOCAÇÃO & GESTÃO DA EQUIPE (COORD/VIEWER) */}
        {/* ========================================================= */}
        {currentTab === "matriz" && (isCoordinator || isViewer) && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-black text-[#15365C] flex items-center gap-2">
                    <Users className="w-5 h-5 text-indigo-600" />
                    Matriz de Alocação & Gestão de Profissionais
                  </h2>
                  <p className="text-xs text-slate-500">
                    {isCoordinator
                      ? "Convide profissionais, altere padrões de perfil (Coordenador, Colaborador ou Visualizador/Diretoria) ou gerencie a equipe."
                      : "Visualização executiva da equipe técnica e perfis de alocação (Modo Diretoria - Somente Leitura)."}
                  </p>
                </div>
                {isCoordinator && (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsInviteModalOpen(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-[#E52329] hover:bg-red-700 text-white rounded-lg text-xs font-bold shadow transition active:scale-95"
                    >
                      <UserPlus className="w-4 h-4" />
                      <span>Convidar Novo Usuário</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setEditingUser({
                          id: 0,
                          nome: "",
                          email: "",
                          fone: "",
                          role: "Colaborador",
                          disponibilidade: "ativo",
                          senha: "123"
                        });
                        setUserModalMode("create");
                        setIsUserModalOpen(true);
                      }}
                      className="flex items-center gap-2 px-3 py-2 bg-[#15365C] hover:bg-blue-900 text-white rounded-lg text-xs font-bold shadow transition active:scale-95"
                    >
                      <Plus className="w-3.5 h-3.5 text-amber-300" />
                      <span>Cadastro Completo</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* ITEM D: BANNER EXECUTIVO DE CAPACIDADE POR PROFISSIONAL */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#15365C] text-white rounded-lg shadow-2xs">
                  <Users className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <span className="font-black text-[#15365C] uppercase text-xs block">
                    Regra de Jornada Técnica: 8h Diárias • 44h Semanais (176h/mês por profissional do Time de Projetos)
                  </span>
                  <p className="text-slate-500 text-[11px]">
                    Capacidade nominal de execução sem considerar horas extras, válida para todos os <strong>Coordenadores</strong> e <strong>Colaboradores</strong> operacionais de Engenharia ativos em projetos.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg font-mono font-bold text-slate-700">
                  Carga por Engenheiro Ativo: <strong className="text-teal-700">176h/mês</strong>
                </span>
                <span className="px-3 py-1 bg-[#15365C] text-white rounded-lg font-mono font-black">
                  Capacidade Disponível do Time: {balancoHorasMes.capacidadeTotalDisponivel}h/mês ({balancoHorasMes.numAtivosProjetos} ativos{balancoHorasMes.numFerias > 0 ? ` • ${balancoHorasMes.numFerias} férias` : ""}{balancoHorasMes.numCampo > 0 ? ` • ${balancoHorasMes.numCampo} campo` : ""})
                </span>
              </div>
            </div>

            {/* Grid de Cards dos Membros da Equipe */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {equipe.map(colab => {
                const dispColab = colab.disponibilidade || "ativo"; // "ativo" | "ferias" | "campo"
                const isFerias = dispColab === "ferias";
                const isCampo = dispColab === "campo";
                const isAtivoProjetos = dispColab === "ativo";
                const isOperational = colab.role === "Coordenador" || colab.role === "Colaborador";

                const tarefasColab = atividades.filter(
                  a => a.resp1 === colab.nome || a.resp2 === colab.nome || a.resp3 === colab.nome
                );
                const obrasColab = Array.from(new Set(tarefasColab.map(a => a.obraNome)));
                const totalHorasPrevistas = tarefasColab.reduce((acc, a) => acc + ((a.dias || 14) * 10), 0);

                // Cálculo de capacidade do colaborador no mês selecionado (zerado se férias ou campo)
                const horasMensaisDisponiveis = isOperational && isAtivoProjetos ? (dashboardMes === "todos" ? 176 * 5 : 176) : 0;
                const horasDemandadasColabMes = Math.round(
                  tarefasColab.reduce((acc, a) => acc + getTaskHoursInMonth(a, dashboardMes), 0) * 10
                ) / 10;
                const saldoHorasColab = Math.round((horasMensaisDisponiveis - horasDemandadasColabMes) * 10) / 10;
                const percOcupacaoColab = horasMensaisDisponiveis > 0 
                  ? Math.round((horasDemandadasColabMes / horasMensaisDisponiveis) * 100) 
                  : (horasDemandadasColabMes > 0 ? 100 : 0);

                return (
                  <div
                    key={colab.id}
                    className={`bg-white rounded-xl shadow-sm border p-5 space-y-3.5 transition ${
                      isFerias ? "border-amber-200 bg-amber-50/20" : isCampo ? "border-blue-200 bg-blue-50/20" : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                          colab.role === "Coordenador"
                            ? "bg-amber-100 text-amber-800"
                            : colab.role === "Visualizador"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-blue-100 text-[#15365C]"
                        }`}>
                          {colab.role}
                        </span>
                        {isFerias && (
                          <span className="text-[10px] font-black px-2 py-0.5 rounded uppercase bg-amber-100 text-amber-800 border border-amber-300">
                            🏖️ Férias
                          </span>
                        )}
                        {isCampo && (
                          <span className="text-[10px] font-black px-2 py-0.5 rounded uppercase bg-blue-100 text-[#15365C] border border-blue-300">
                            🦺 Campo
                          </span>
                        )}
                      </div>

                      {isCoordinator && (
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => triggerInviteEmail(colab)}
                            className="p-1 text-emerald-600 hover:bg-emerald-50 rounded"
                            title="Encaminhar / Reenviar e-mail de convite com credenciais"
                          >
                            <Mail className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleOpenResetUserPassword(colab)}
                            className="p-1 text-amber-600 hover:bg-amber-50 rounded"
                            title="Gerar / Redefinir Senha deste profissional"
                          >
                            <Key className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setEditingUser({ ...colab, disponibilidade: colab.disponibilidade || "ativo" });
                              setUserModalMode("edit");
                              setIsUserModalOpen(true);
                            }}
                            className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                            title="Editar Perfil e Permissões"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setUserToDelete(colab)}
                            className="p-1 text-rose-600 hover:bg-rose-50 rounded"
                            title="Excluir Profissional"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>

                    <div>
                      <h3 className="font-black text-sm text-[#15365C]">{colab.nome}</h3>
                      <p className="text-xs text-slate-400">{colab.email}</p>
                      <p className="text-[11px] text-slate-500 font-mono mt-0.5">{colab.fone}</p>
                    </div>

                    {/* Controle Rápido de Status / Disponibilidade (Item A) */}
                    {isOperational && (
                      <div className="bg-slate-50/90 border border-slate-200 rounded-xl p-2.5 space-y-2">
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="font-bold text-slate-600 uppercase flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-[#15365C]" />
                            Disponibilidade no Time:
                          </span>
                          <span className={`px-2 py-0.5 rounded-full font-black text-[9px] uppercase border ${
                            isAtivoProjetos
                              ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                              : isFerias
                              ? "bg-amber-50 text-amber-800 border-amber-200"
                              : "bg-blue-50 text-blue-900 border-blue-200"
                          }`}>
                            {isAtivoProjetos ? "🟢 Projetos (176h)" : isFerias ? "🏖️ Férias (0h)" : "🦺 Campo (0h)"}
                          </span>
                        </div>

                        {isCoordinator ? (
                          <div className="grid grid-cols-3 gap-1">
                            <button
                              type="button"
                              onClick={() => handleSetUserDisponibilidade(colab.id, "ativo")}
                              className={`py-1 px-1 rounded text-[10px] font-bold transition flex items-center justify-center gap-1 cursor-pointer ${
                                isAtivoProjetos
                                  ? "bg-emerald-700 text-white shadow-xs font-black"
                                  : "bg-white text-slate-600 border border-slate-200 hover:bg-emerald-50 hover:text-emerald-800"
                              }`}
                              title="Disponível em Projetos de Engenharia (176h/mês)"
                            >
                              <span>🟢 Projetos</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => handleSetUserDisponibilidade(colab.id, "ferias")}
                              className={`py-1 px-1 rounded text-[10px] font-bold transition flex items-center justify-center gap-1 cursor-pointer ${
                                isFerias
                                  ? "bg-amber-600 text-white shadow-xs font-black"
                                  : "bg-white text-slate-600 border border-slate-200 hover:bg-amber-50 hover:text-amber-800"
                              }`}
                              title="Período de Férias (0h na capacidade do time de projetos)"
                            >
                              <span>🏖️ Férias</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => handleSetUserDisponibilidade(colab.id, "campo")}
                              className={`py-1 px-1 rounded text-[10px] font-bold transition flex items-center justify-center gap-1 cursor-pointer ${
                                isCampo
                                  ? "bg-[#15365C] text-white shadow-xs font-black"
                                  : "bg-white text-slate-600 border border-slate-200 hover:bg-blue-50 hover:text-[#15365C]"
                              }`}
                              title="Dedicado a Obras / Canteiro em Campo (0h de projetos)"
                            >
                              <span>🦺 Campo</span>
                            </button>
                          </div>
                        ) : (
                          <p className="text-[10px] text-slate-500 italic">
                            {isAtivoProjetos
                              ? "Profissional disponível na grade de projetos com 176h/mês."
                              : isFerias
                              ? "Profissional em férias. Capacidade zerada para projetos de engenharia."
                              : "Profissional em canteiro de obras. Sem horas disponíveis para projetos de escritório."}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Bloco de Capacidade de Execução Individual (Item D) */}
                    <div className="p-3 bg-gradient-to-br from-slate-50 to-blue-50/40 rounded-xl border border-slate-200/90 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-600 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-blue-600" />
                          Capacidade Time de Projeto ({dashboardMes === "todos" ? "Geral" : MESES_OPCOES.find(m => m.id === dashboardMes)?.mesAbrev})
                        </span>
                        {isOperational ? (
                          isAtivoProjetos ? (
                            <span className="text-[10px] font-black font-mono px-2 py-0.5 rounded bg-teal-100 text-teal-900 border border-teal-300">
                              Base: 176h/mês
                            </span>
                          ) : isFerias ? (
                            <span className="text-[10px] font-black font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                              0h • Férias
                            </span>
                          ) : (
                            <span className="text-[10px] font-black font-mono px-2 py-0.5 rounded bg-blue-100 text-[#15365C] border border-blue-300">
                              0h • Em Campo
                            </span>
                          )
                        ) : (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-900">
                            Somente Leitura
                          </span>
                        )}
                      </div>

                      {isOperational ? (
                        <>
                          <div className="grid grid-cols-3 gap-1.5 text-center">
                            <div className="bg-white p-1.5 rounded border border-slate-200/80">
                              <span className="text-[9px] text-slate-400 font-bold uppercase block">Pode Executar</span>
                              <span className={`text-xs font-black ${isAtivoProjetos ? "text-teal-800" : "text-slate-400"}`}>
                                {horasMensaisDisponiveis}h
                              </span>
                            </div>
                            <div className="bg-white p-1.5 rounded border border-slate-200/80">
                              <span className="text-[9px] text-slate-400 font-bold uppercase block">Alocado Mês</span>
                              <span className="text-xs font-black text-[#15365C]">{horasDemandadasColabMes}h</span>
                            </div>
                            <div className="bg-white p-1.5 rounded border border-slate-200/80">
                              <span className="text-[9px] text-slate-400 font-bold uppercase block">Saldo Livre</span>
                              <span className={`text-xs font-black ${saldoHorasColab >= 0 ? "text-emerald-700" : "text-rose-600"}`}>
                                {saldoHorasColab > 0 ? `+${saldoHorasColab}h` : `${saldoHorasColab}h`}
                              </span>
                            </div>
                          </div>

                          {/* Alerta de conflito de férias com tarefas */}
                          {isFerias && horasDemandadasColabMes > 0 && (
                            <div className="p-2 bg-rose-50 border border-rose-200 rounded text-[10px] text-rose-800 flex items-center gap-1.5">
                              <AlertCircle className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" />
                              <span><strong>Atenção:</strong> Há {horasDemandadasColabMes}h alocadas a este colaborador durante seu período de férias!</span>
                            </div>
                          )}

                          {isCampo && (
                            <div className="p-2 bg-blue-50 border border-blue-200 rounded text-[10px] text-[#15365C] flex items-center gap-1.5">
                              <Building2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                              <span>Dedicado a canteiro de obras. Sem disponibilidade para novos projetos de escritório.</span>
                            </div>
                          )}

                          {isAtivoProjetos && (
                            <div className="space-y-1 pt-0.5">
                              <div className="flex justify-between items-center text-[10px]">
                                <span className="text-slate-500 font-semibold">Jornada Time de Projetos: 8h/dia • 44h/semana</span>
                                <span className={`font-black ${percOcupacaoColab > 100 ? "text-rose-600" : percOcupacaoColab > 80 ? "text-amber-700" : "text-emerald-700"}`}>
                                  {percOcupacaoColab}% ocupação
                                </span>
                              </div>
                              <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                                <div
                                  className={`h-1.5 transition-all ${
                                    percOcupacaoColab > 100 ? "bg-rose-600" : percOcupacaoColab > 80 ? "bg-amber-500" : "bg-emerald-600"
                                  }`}
                                  style={{ width: `${Math.min(100, percOcupacaoColab)}%` }}
                                />
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="p-2 bg-white rounded border border-purple-100 text-[11px] text-purple-900 leading-tight">
                          Membro com perfil executivo de diretoria. Não participa da grade de capacidade operacional de 44h.
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-center bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">Frentes Totais</span>
                        <span className="text-sm font-black text-[#15365C]">{tarefasColab.length}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">Carga Total Projetos</span>
                        <span className="text-sm font-black text-amber-700">{totalHorasPrevistas}h</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Empreendimentos Ativos ({obrasColab.length}):</span>
                      <div className="flex flex-wrap gap-1">
                        {obrasColab.length > 0 ? (
                          obrasColab.map(obraNome => (
                            <span key={obraNome} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
                              {obraNome}
                            </span>
                          ))
                        ) : (
                          <span className="text-[10px] text-slate-400 italic">Nenhuma obra no momento</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* ABA: CRONOGRAMA DE GANTT (COORDENADOR OU VISUALIZADOR)    */}
        {/* ========================================================= */}
        {currentTab === "gantt" && (isCoordinator || isViewer) && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-black text-[#15365C] flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-emerald-600" />
                    Cronograma de Gantt ISO — Linha do Tempo Técnica
                  </h2>
                  <p className="text-xs text-slate-500">
                    Filtre por obra, alterne a visualização temporal (Semanas ou Datas) e imprima em formato técnico (A3, A2, A1, A0).
                  </p>
                </div>

                {/* Controles do Gantt: Filtro de Obra + Alternador de Visualização + Plotter Print */}
                <div className="flex flex-wrap items-center gap-3">
                  {/* Filtro por Obra */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-500">Obra:</span>
                    <select
                      value={ganttObraFilter}
                      onChange={(e) => setGanttObraFilter(e.target.value)}
                      className="p-1.5 border border-slate-300 rounded-lg text-xs font-bold text-[#15365C] bg-blue-50/50"
                    >
                      <option value="Todas">🌐 Todas as Obras</option>
                      {obras.map(o => (
                        <option key={o.id} value={o.nome}>{o.nome}</option>
                      ))}
                    </select>
                  </div>

                  {/* Alternador Semanas x Datas */}
                  <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
                    <button
                      type="button"
                      onClick={() => setGanttHeaderMode("semanas")}
                      className={`px-2.5 py-1 rounded text-xs font-bold transition ${
                        ganttHeaderMode === "semanas" ? "bg-[#15365C] text-white shadow-xs" : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Semanas (Sem 41 a 06)
                    </button>
                    <button
                      type="button"
                      onClick={() => setGanttHeaderMode("datas")}
                      className={`px-2.5 py-1 rounded text-xs font-bold transition ${
                        ganttHeaderMode === "datas" ? "bg-[#15365C] text-white shadow-xs" : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Datas (Início a Fim)
                    </button>
                  </div>

                  {/* Navegação Rápida do Cronograma Horizontal & Salto por Semanas */}
                  <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
                    <button
                      type="button"
                      onClick={() => scrollGanttToWeek(0)}
                      className="px-2 py-1 bg-white hover:bg-slate-50 text-slate-700 rounded text-xs font-bold shadow-xs transition"
                      title="Ir para o início do cronograma (Semana 41 - Out/26)"
                    >
                      ⏮ Sem 41
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollGantt("left")}
                      className="flex items-center gap-1 px-2.5 py-1 bg-white hover:bg-slate-50 text-slate-700 rounded text-xs font-bold shadow-xs transition"
                      title="Rolar cronograma para a esquerda"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Anterior</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollGanttToWeek(5)}
                      className="px-2.5 py-1 bg-[#15365C] hover:bg-blue-900 text-amber-300 rounded text-xs font-black shadow-xs transition flex items-center gap-1"
                      title="Ir para a Semana Atual (Semana 46 - Novembro/26)"
                    >
                      <span>📍 Sem 46 (Hoje)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollGantt("right")}
                      className="flex items-center gap-1 px-2.5 py-1 bg-white hover:bg-slate-50 text-slate-700 rounded text-xs font-bold shadow-xs transition"
                      title="Rolar cronograma para a direita"
                    >
                      <span>Próxima</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollGanttToWeek(17)}
                      className="px-2 py-1 bg-white hover:bg-slate-50 text-slate-700 rounded text-xs font-bold shadow-xs transition"
                      title="Ir para o final do cronograma (Semana 06 - Fev/27)"
                    >
                      Sem 06 ⏭
                    </button>
                  </div>

                  {/* Seletor de Formato de Plotagem (A4, A3, A2, A1, A0) + Botão de Imprimir */}
                  <div className="flex items-center gap-1.5 pl-2 border-l border-slate-200">
                    <span className="text-xs font-bold text-slate-500">Folha:</span>
                    <select
                      value={ganttPaperSize}
                      onChange={(e) => setGanttPaperSize(e.target.value)}
                      className="p-1.5 border border-slate-300 rounded-lg text-xs font-bold text-rose-800 bg-rose-50"
                      title="Formato de folha para plotagem/impressão técnica"
                    >
                      <option value="A4">A4 (210×297mm)</option>
                      <option value="A3">A3 (297×420mm) - Padrão</option>
                      <option value="A2">A2 (420×594mm)</option>
                      <option value="A1">A1 (594×841mm)</option>
                      <option value="A0">A0 (841×1189mm) - Plotter</option>
                    </select>
                    <button
                      type="button"
                      onClick={handlePrintGantt}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#E52329] hover:bg-red-700 text-white rounded-lg text-xs font-bold transition active:scale-95 shadow"
                      title="Imprimir gráfico de Gantt no formato de papel selecionado"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Plotar Gantt ({ganttPaperSize})</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Barra de Linha do Tempo e Controle Deslizante de Semanas */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-600">
                  <span className="font-black text-[#15365C] uppercase text-[11px] tracking-wider flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    Linha do Tempo:
                  </span>
                  <span className="font-semibold text-slate-500">18 Semanas Completas (05/10/2026 a 07/02/2027)</span>
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-200 text-[10px]">
                    Sem 46: Semana Vigente
                  </span>
                </div>

                <div className="flex items-center gap-3 flex-1 max-w-md">
                  <span className="text-[10px] font-bold text-slate-400 whitespace-nowrap">Sem 41 (Out)</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={ganttScrollPercent}
                    onChange={(e) => scrollGanttToPercent(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#15365C]"
                    title="Arraste para navegar rapidamente entre as 18 semanas do cronograma"
                  />
                  <span className="text-[10px] font-bold text-slate-400 whitespace-nowrap">Sem 06 (Fev)</span>
                </div>
              </div>
            </div>

            {/* Quadro Visual do Cronograma de Gantt com Barra de Rolagem Horizontal Técnica Sempre Visível */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden relative">
              <div 
                ref={ganttScrollRef}
                onScroll={handleGanttScrollEvent}
                className="custom-gantt-scroll p-4 max-h-[72vh] overflow-y-auto overflow-x-auto space-y-4 scroll-smooth"
              >
                <div className="min-w-[1850px] space-y-3">
                  <div className="flex items-center text-[11px] font-bold text-slate-600 uppercase pb-2 border-b border-slate-200 sticky top-0 bg-white z-30 shadow-xs">
                    <div className="w-[360px] min-w-[360px] md:w-[420px] md:min-w-[420px] lg:w-[460px] lg:min-w-[460px] 2xl:w-[520px] 2xl:min-w-[520px] flex-shrink-0 sticky left-0 bg-white z-40 pr-4 text-left font-black text-[#15365C] border-r-2 border-slate-200 shadow-[3px_0_6px_-2px_rgba(0,0,0,0.06)]">
                      Obra & Atividade Técnica
                    </div>
                    <div 
                      className="flex-1 grid gap-1 text-center pl-3"
                      style={{ gridTemplateColumns: `repeat(${ganttWeeks.length}, minmax(75px, 1fr))` }}
                    >
                      {ganttWeeks.map(w => (
                        <div 
                          key={w.sem} 
                          className={`py-1.5 px-0.5 rounded border min-w-[75px] transition ${
                            w.sem === "Sem 46" ? "bg-amber-100 border-amber-300 ring-2 ring-amber-400/50" : "bg-slate-50 border-slate-100"
                          }`}
                        >
                          <span className={`block leading-tight font-black ${
                            w.sem === "Sem 46" ? "text-amber-900" : "text-[#15365C]"
                          }`}>
                            {ganttHeaderMode === "semanas" ? w.sem : w.dates.split(" a ")[0]}
                          </span>
                          <span className="text-[9px] text-slate-400 block font-normal truncate">
                            {ganttHeaderMode === "semanas" ? w.dates : `a ${w.dates.split(" a ")[1]}`}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {atividades
                    .filter(a => ganttObraFilter === "Todas" || a.obraNome === ganttObraFilter)
                    .slice(0, 45)
                    .map(act => {
                      // Posicionamento e largura reais baseados no calendário completo de 18 semanas (Out/26 a Fev/27) - Proteção contra NaN
                      const timelineStart = new Date("2026-10-05T00:00:00").getTime();
                      const timelineEnd = new Date("2027-02-07T23:59:59").getTime();
                      const timelineDuration = timelineEnd - timelineStart;

                      let actStart = timelineStart;
                      if (act.inicioPrevisto) {
                        const parsed = new Date(act.inicioPrevisto + "T00:00:00").getTime();
                        if (!isNaN(parsed)) actStart = parsed;
                      }

                      let actEnd = actStart + ((Number(act.dias) || 14) * 86400000);
                      if (act.terminoPrevisto) {
                        const parsed = new Date(act.terminoPrevisto + "T23:59:59").getTime();
                        if (!isNaN(parsed)) actEnd = parsed;
                      }

                      const leftPercent = Math.max(0, Math.min(97, ((actStart - timelineStart) / timelineDuration) * 100));
                      const rawWidth = ((actEnd - actStart) / timelineDuration) * 100;
                      const widthPercent = Math.max(3, Math.min(100 - leftPercent, rawWidth));

                      return (
                        <div key={act.id} className="flex items-center text-xs py-2.5 border-b border-slate-100 hover:bg-slate-50/70 transition group">
                          <div className="w-[360px] min-w-[360px] md:w-[420px] md:min-w-[420px] lg:w-[460px] lg:min-w-[460px] 2xl:w-[520px] 2xl:min-w-[520px] flex-shrink-0 sticky left-0 bg-white group-hover:bg-slate-50/95 z-20 pr-4 font-semibold text-[#15365C] border-r-2 border-slate-200 shadow-[3px_0_6px_-2px_rgba(0,0,0,0.06)]">
                            <div className="flex items-center justify-between gap-1 mb-1">
                              <span className="font-black text-[10px] text-slate-700 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                                {act.obraNome}
                              </span>
                              <span className="text-[10px] text-amber-700 font-bold bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 font-mono flex-shrink-0">
                                {(act.dias || 14) * 10}h
                              </span>
                            </div>
                            <div className="font-bold text-xs sm:text-[13px] text-[#15365C] leading-snug break-words whitespace-normal">
                              {act.atividade}
                            </div>
                            <div className="text-[10px] text-slate-400 flex items-center justify-between mt-1.5">
                              <span>
                                Líder: {act.resp1 === "A Definir" || !act.resp1 ? (
                                  <strong className="text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded border border-amber-300 text-[10px] inline-flex items-center gap-0.5">⚠️ A Definir</strong>
                                ) : (
                                  <strong className="text-slate-700">{act.resp1}</strong>
                                )}
                              </span>
                              <span className="font-mono text-[9px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded flex-shrink-0 font-semibold">{act.dias} dias</span>
                            </div>
                          </div>

                          <div className="flex-1 pl-4 min-w-[1350px] relative">
                            <div className="bg-slate-100 rounded-lg h-7 relative overflow-hidden flex items-center border border-slate-200/50">
                              {/* Grid vertical de fundo para marcação das 18 semanas */}
                              <div 
                                className="absolute inset-0 grid pointer-events-none opacity-20"
                                style={{ gridTemplateColumns: `repeat(${ganttWeeks.length}, minmax(75px, 1fr))` }}
                              >
                                {ganttWeeks.map((_, i) => (
                                  <div key={i} className="border-r border-slate-400 h-full" />
                                ))}
                              </div>

                              <div
                                className="absolute h-full rounded-md shadow-xs overflow-hidden flex items-center transition-all bg-slate-200"
                                style={{
                                  left: `${leftPercent}%`,
                                  width: `${widthPercent}%`
                                }}
                                title={`${act.atividade} (${act.inicioPrevisto} a ${act.terminoPrevisto}) • Progresso: ${act.percentual}%`}
                              >
                                <div
                                  className={`h-full transition-all ${
                                    act.percentual >= 100 ? "bg-emerald-600" : act.percentual > 0 ? "bg-[#15365C]" : "bg-slate-400"
                                  }`}
                                  style={{ width: `${act.percentual}%` }}
                                />
                                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-white drop-shadow-xs px-1 select-none whitespace-nowrap">
                                  {act.percentual}%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>

              {/* DOCK FIXO DE ROLAGEM HORIZONTAL TÉCNICA - SEMPRE VISÍVEL NA BASE */}
              <div className="sticky bottom-0 bg-white/95 backdrop-blur-md border-t-2 border-slate-300 p-3 z-30 shadow-lg flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-[#15365C] flex items-center gap-1.5 uppercase tracking-wide">
                    <Clock className="w-4 h-4 text-blue-600" />
                    Barra de Rolagem das Semanas:
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 hidden sm:inline">
                    (Sem 41 a Sem 06 • Arraste ou use os botões)
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-1 max-w-xl mx-2">
                  <button
                    type="button"
                    onClick={() => scrollGantt("left")}
                    className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-[#15365C] rounded-lg text-xs font-bold transition flex items-center gap-1 shadow-xs border border-slate-200"
                    title="Rolar para a esquerda"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Esquerda</span>
                  </button>
                  <div className="flex-1 flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-slate-400">Sem 41</span>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={ganttScrollPercent}
                      onChange={(e) => scrollGanttToPercent(Number(e.target.value))}
                      className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#15365C]"
                      title="Arraste para rolar o cronograma horizontalmente entre todas as semanas"
                    />
                    <span className="text-[10px] font-bold text-slate-400">Sem 06</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => scrollGantt("right")}
                    className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-[#15365C] rounded-lg text-xs font-bold transition flex items-center gap-1 shadow-xs border border-slate-200"
                    title="Rolar para a direita"
                  >
                    <span>Direita</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => scrollGanttToWeek(5)}
                    className="px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-900 rounded-lg text-xs font-black transition shadow-xs flex items-center gap-1"
                    title="Ir para a Semana Vigente (Semana 46)"
                  >
                    📍 Sem 46 (Hoje)
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollGanttToWeek(17)}
                    className="px-3 py-1.5 bg-[#15365C] hover:bg-blue-900 text-white rounded-lg text-xs font-bold transition shadow-xs"
                    title="Ir para o final do cronograma (Semana 06 - Fevereiro/27)"
                  >
                    Sem 06 ⏭
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* ABA: MEU PERFIL                                           */}
        {/* ========================================================= */}
        {currentTab === "meu_perfil" && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-full text-white font-black text-2xl flex items-center justify-center ${
                  isCoordinator ? "bg-[#E52329]" : isViewer ? "bg-purple-600" : "bg-emerald-600"
                }`}>
                  {currentUser?.nome?.charAt(0)}
                </div>
                <div>
                  <h2 className="text-xl font-black text-[#15365C]">{currentUser?.nome}</h2>
                  <p className="text-xs text-amber-700 font-bold uppercase tracking-wider">{currentUser?.role}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-slate-400 font-bold uppercase block">E-mail Profissional</span>
                  <span className="font-semibold text-slate-800">{currentUser?.email}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-slate-400 font-bold uppercase block">Telefone / WhatsApp</span>
                  <span className="font-semibold text-slate-800">{currentUser?.fone}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setIsProfilePassModalOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-[#15365C] hover:bg-blue-900 text-white rounded-lg text-xs font-bold transition active:scale-95"
                >
                  <Lock className="w-3.5 h-3.5 text-amber-300" />
                  <span>Alterar Minha Senha</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ========================================================= */}
      {/* RODAPÉ OFICIAL CORPORATIVO DE ENGENHARIA                  */}
      {/* ========================================================= */}
      <footer className="bg-[#0e243d] text-slate-300 border-t border-blue-950 py-5 px-3 sm:px-5 text-center text-xs mt-auto print:hidden">
        <div className="w-full max-w-[98%] 2xl:max-w-[1780px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="bg-white/95 px-2 py-1 rounded-lg shadow-sm flex items-center">
              <ClimapressLogo className="h-5 w-auto" />
            </div>
            <span className="font-bold text-white text-[11px] tracking-wide">
              Climapress Instalações de Sistemas de Ar condicionado
            </span>
          </div>

          <div className="text-[11px] text-slate-400">
            Sistema desenvolvido sob responsabilidade técnica e autoria do{" "}
            <strong className="text-amber-300 font-bold">Engº Murilo Miranda da Silva</strong>
          </div>

          <div className="text-[10px] text-slate-400">
            © {new Date().getFullYear()} Climapress. Todos os direitos reservados. Versão Corporativa 2.6
          </div>
        </div>
      </footer>

      {/* ========================================================= */}
      {/* MODAL: CONVIDAR NOVO USUÁRIO                              */}
      {/* ========================================================= */}
      {isInviteModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-black text-sm text-[#15365C] uppercase flex items-center gap-2">
                <UserPlus className="w-4 h-4 text-[#E52329]" />
                Convidar / Adicionar Usuário ao App
              </h3>
              <button type="button" onClick={() => setIsInviteModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleInviteUser} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Nome Completo do Convidado</label>
                <input
                  type="text"
                  required
                  value={inviteData.nome}
                  onChange={(e) => setInviteData(prev => ({ ...prev, nome: e.target.value }))}
                  placeholder="Ex: Carlos Eduardo de Oliveira"
                  className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-[#15365C]"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">E-mail Profissional (Login)</label>
                <input
                  type="email"
                  required
                  value={inviteData.email}
                  onChange={(e) => setInviteData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="carlos.oliveira@climapress.com.br"
                  className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-[#15365C]"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Telefone / WhatsApp</label>
                <input
                  type="text"
                  value={inviteData.fone}
                  onChange={(e) => setInviteData(prev => ({ ...prev, fone: e.target.value }))}
                  placeholder="(11) 98765-4321"
                  className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-[#15365C]"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Perfil de Acesso</label>
                <select
                  value={inviteData.role}
                  onChange={(e) => setInviteData(prev => ({ ...prev, role: e.target.value }))}
                  className="w-full p-2.5 border rounded-lg font-bold text-[#15365C] bg-amber-50/50"
                >
                  <option value="Colaborador">Colaborador (Apontamento de Horas e Minhas Atividades)</option>
                  <option value="Coordenador">Coordenador (Gestão Plena: Obras, Tarefas e Equipe)</option>
                  <option value="Visualizador">Visualizador (Diretoria: Todas as telas em Modo Leitura)</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="font-bold text-slate-700">Senha Inicial de Acesso</label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setInviteData(prev => ({ ...prev, senha: generateSecurePassword("Clima") }))}
                      className="text-emerald-700 hover:text-emerald-800 text-[10px] font-bold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 cursor-pointer"
                      title="Gerar automaticamente uma senha segura corporativa"
                    >
                      <Key className="w-3 h-3 text-emerald-600" />
                      <span>Gerar Senha Segura</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowInvitePass(!showInvitePass)}
                      className="text-slate-500 hover:text-[#15365C] text-[10px] font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      {showInvitePass ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      <span>{showInvitePass ? "Ocultar" : "Ver"}</span>
                    </button>
                  </div>
                </div>
                <input
                  type={showInvitePass ? "text" : "password"}
                  value={inviteData.senha}
                  onChange={(e) => setInviteData(prev => ({ ...prev, senha: e.target.value }))}
                  placeholder="Ex: Clima@2026"
                  className="w-full p-2.5 border rounded-lg font-mono text-xs focus:ring-2 focus:ring-[#15365C]"
                />
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 text-blue-900 rounded-lg flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-[11px] font-medium leading-tight">
                  Ao confirmar, o sistema encaminhará automaticamente um e-mail com as credenciais de acesso e instruções para o convidado.
                </span>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setIsInviteModalOpen(false)}
                  className="px-4 py-2 border rounded-lg font-bold text-slate-600 hover:bg-slate-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#E52329] hover:bg-red-700 text-white rounded-lg font-bold shadow flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Confirmar & Enviar Convite</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: E-MAIL DE CONVITE ENVIADO / ENCAMINHAMENTO        */}
      {/* ========================================================= */}
      {inviteEmailModal.isOpen && inviteEmailModal.user && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 space-y-4 animate-fade-in border border-slate-200">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-black text-sm text-[#15365C] uppercase flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-600" />
                Convite de Acesso Encaminhado
              </h3>
              <button
                type="button"
                onClick={() => setInviteEmailModal(prev => ({ ...prev, isOpen: false }))}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>E-mail corporativo preparado para {inviteEmailModal.user.nome}!</span>
              </div>
              <p className="text-[11px] text-emerald-700">
                O cliente de e-mail padrão do sistema foi acionado para envio imediato para <strong>{inviteEmailModal.user.email}</strong>.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-700">Prévia do E-mail / Convite:</span>
                <span className="text-[10px] text-slate-400 font-mono truncate max-w-[200px]" title={inviteEmailModal.subject}>Assunto: {inviteEmailModal.subject}</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-[11px] font-mono text-slate-700 whitespace-pre-wrap max-h-48 overflow-y-auto select-all leading-relaxed">
                {inviteEmailModal.body}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t">
              <a
                href={`mailto:${encodeURIComponent(inviteEmailModal.user.email)}?subject=${encodeURIComponent(inviteEmailModal.subject)}&body=${encodeURIComponent(inviteEmailModal.body)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 bg-[#15365C] hover:bg-blue-900 text-white rounded-lg text-xs font-bold transition text-center"
              >
                <Mail className="w-3.5 h-3.5 text-amber-300" />
                <span>Abrir no E-mail (Outlook/Mail)</span>
              </a>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(inviteEmailModal.user.email)}&su=${encodeURIComponent(inviteEmailModal.subject)}&body=${encodeURIComponent(inviteEmailModal.body)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold transition text-center"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Abrir no Gmail Web</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  try {
                    navigator.clipboard.writeText(inviteEmailModal.body);
                    setInviteEmailModal(prev => ({ ...prev, copied: true }));
                    setTimeout(() => setInviteEmailModal(prev => ({ ...prev, copied: false })), 2500);
                  } catch (e) {}
                }}
                className={`flex items-center justify-center gap-1.5 px-3 py-2 border rounded-lg text-xs font-bold transition text-center ${
                  inviteEmailModal.copied
                    ? "bg-emerald-100 text-emerald-800 border-emerald-300"
                    : "border-slate-300 hover:bg-slate-50 text-slate-700"
                }`}
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{inviteEmailModal.copied ? "Texto Copiado!" : "Copiar Texto do Convite"}</span>
              </button>

              {inviteEmailModal.user.fone && (
                <a
                  href={`https://wa.me/55${inviteEmailModal.user.fone.replace(/\D/g, "")}?text=${encodeURIComponent(
                    `Olá ${inviteEmailModal.user.nome}, segue o seu convite de acesso ao Sistema Integrado de Obras da Climapress:\n\n${inviteEmailModal.body}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition text-center"
                >
                  <Send className="w-3.5 h-3.5 text-white" />
                  <span>Enviar via WhatsApp</span>
                </a>
              )}
            </div>

            <div className="flex justify-end pt-2 border-t">
              <button
                type="button"
                onClick={() => setInviteEmailModal(prev => ({ ...prev, isOpen: false }))}
                className="px-5 py-2 bg-[#E52329] hover:bg-red-700 text-white rounded-lg text-xs font-bold shadow"
              >
                Concluir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: CADASTRO / EDIÇÃO DE PROFISSIONAL (MATRIZ)         */}
      {/* ========================================================= */}
      {isUserModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-black text-sm text-[#15365C] uppercase flex items-center gap-2">
                <UserPlus className="w-4 h-4 text-amber-500" />
                {userModalMode === "create" ? "Cadastrar Novo Profissional" : "Editar Dados do Profissional"}
              </h3>
              <button type="button" onClick={() => setIsUserModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveUser} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Nome Completo</label>
                <input
                  type="text"
                  required
                  value={editingUser.nome}
                  onChange={(e) => setEditingUser(prev => ({ ...prev, nome: e.target.value }))}
                  placeholder="Ex: Carlos Eduardo de Oliveira"
                  className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-[#15365C]"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">E-mail Profissional</label>
                <input
                  type="email"
                  required
                  value={editingUser.email}
                  onChange={(e) => setEditingUser(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="carlos.oliveira@climapress.com.br"
                  className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-[#15365C]"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Telefone / WhatsApp</label>
                <input
                  type="text"
                  value={editingUser.fone}
                  onChange={(e) => setEditingUser(prev => ({ ...prev, fone: e.target.value }))}
                  placeholder="(11) 98765-4321"
                  className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-[#15365C]"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Padrão de Perfil / Acesso</label>
                <select
                  value={editingUser.role}
                  onChange={(e) => setEditingUser(prev => ({ ...prev, role: e.target.value }))}
                  className="w-full p-2.5 border rounded-lg font-bold text-[#15365C] bg-amber-50/50"
                >
                  <option value="Colaborador">Colaborador (Painel Operacional, Apontamento de Horas e Perfil)</option>
                  <option value="Coordenador">Coordenador (Gestão Completa: Inserir/Excluir Tarefas, Obras e Equipe)</option>
                  <option value="Visualizador">Visualizador (Diretoria: Visualiza todas as abas e filtros em modo somente leitura)</option>
                </select>
                <p className="text-[10px] text-slate-500 mt-1 italic">
                  * Visualizadores (Diretoria) podem consultar relatórios, filtros e cronogramas sem permissão de alteração.
                </p>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Disponibilidade no Time de Projetos</label>
                <select
                  value={editingUser.disponibilidade || "ativo"}
                  onChange={(e) => setEditingUser(prev => ({ ...prev, disponibilidade: e.target.value }))}
                  className="w-full p-2.5 border rounded-lg font-bold text-[#15365C] bg-white focus:ring-2 focus:ring-[#15365C]"
                >
                  <option value="ativo">🟢 Projetos (Ativo no Escritório • 176h/mês)</option>
                  <option value="ferias">🏖️ Em Férias (0h de capacidade em projetos no período)</option>
                  <option value="campo">🦺 Em Campo / Obras (0h de projetos • Dedicação a Canteiro)</option>
                </select>
                <p className="text-[10px] text-slate-500 mt-1 italic">
                  * Ao sinalizar Férias ou Campo, o sistema ajusta automaticamente a capacidade total do time e os saldos de horas do Dashboard.
                </p>
              </div>

              {userModalMode === "create" && (
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="font-bold text-slate-700">Senha Inicial de Acesso</label>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setEditingUser(prev => ({ ...prev, senha: generateSecurePassword("Clima") }))}
                        className="text-emerald-700 hover:text-emerald-800 text-[10px] font-bold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 cursor-pointer"
                        title="Gerar automaticamente uma senha segura corporativa"
                      >
                        <Key className="w-3 h-3 text-emerald-600" />
                        <span>Gerar Senha Segura</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowUserPass(!showUserPass)}
                        className="text-slate-500 hover:text-[#15365C] text-[10px] font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        {showUserPass ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                        <span>{showUserPass ? "Ocultar" : "Ver"}</span>
                      </button>
                    </div>
                  </div>
                  <input
                    type={showUserPass ? "text" : "password"}
                    value={editingUser.senha}
                    onChange={(e) => setEditingUser(prev => ({ ...prev, senha: e.target.value }))}
                    placeholder="Ex: Clima@2026"
                    className="w-full p-2.5 border rounded-lg font-mono text-xs focus:ring-2 focus:ring-[#15365C]"
                  />
                </div>
              )}

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setIsUserModalOpen(false)}
                  className="px-4 py-2 border rounded-lg font-bold text-slate-600 hover:bg-slate-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#15365C] hover:bg-blue-900 text-white rounded-lg font-bold shadow"
                >
                  Salvar Profissional
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: CONFIRMAR EXCLUSÃO DE PROFISSIONAL                 */}
      {/* ========================================================= */}
      {userToDelete && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-black text-sm text-rose-700 uppercase flex items-center gap-2">
                <Trash2 className="w-4 h-4 text-rose-600" />
                Excluir Membro da Equipe
              </h3>
              <button type="button" onClick={() => setUserToDelete(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-slate-600">
              Tem certeza que deseja remover o profissional <strong>"{userToDelete.nome}"</strong> ({userToDelete.role}) da equipe técnica?
            </p>
            <div className="flex justify-end gap-2 pt-3 border-t">
              <button
                type="button"
                onClick={() => setUserToDelete(null)}
                className="px-4 py-2 border rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={confirmDeleteUser}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold shadow"
              >
                Sim, Excluir Profissional
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: CADASTRO / EDIÇÃO DE OBRA                         */}
      {/* ========================================================= */}
      {isObraModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-black text-sm text-[#15365C] uppercase flex items-center gap-2">
                <FolderPlus className="w-4 h-4 text-[#E52329]" />
                {obraModalMode === "create" ? "Cadastrar Nova Obra" : "Editar Dados da Obra"}
              </h3>
              <button type="button" onClick={() => setIsObraModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveObra} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Nome do Empreendimento / Obra</label>
                <input
                  type="text"
                  required
                  value={editingObra.nome}
                  onChange={(e) => setEditingObra(prev => ({ ...prev, nome: e.target.value }))}
                  placeholder="Ex: Torre Corporate Faria Lima"
                  className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-[#15365C]"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Cliente / Contratante</label>
                <input
                  type="text"
                  required
                  value={editingObra.cliente}
                  onChange={(e) => setEditingObra(prev => ({ ...prev, cliente: e.target.value }))}
                  placeholder="Ex: Brookfield / AW Engenharia"
                  className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-[#15365C]"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Status Cadastral</label>
                <select
                  value={editingObra.status}
                  onChange={(e) => setEditingObra(prev => ({ ...prev, status: e.target.value }))}
                  className="w-full p-2.5 border rounded-lg font-bold text-[#15365C] bg-slate-50"
                >
                  <option value="Ativa">Ativa</option>
                  <option value="Mobilização">Mobilização</option>
                  <option value="Concluída">Concluída</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setIsObraModalOpen(false)}
                  className="px-4 py-2 border rounded-lg font-bold text-slate-600 hover:bg-slate-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#15365C] hover:bg-blue-900 text-white rounded-lg font-bold shadow"
                >
                  Salvar Obra
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: EXCLUSÃO DE OBRA EM CASCATA COM SENHA DO COORD.   */}
      {/* ========================================================= */}
      {isDeleteObraModalOpen && obraToDelete && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-black text-sm text-rose-700 uppercase flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-rose-600" />
                Excluir Obra e Todo o Escopo
              </h3>
              <button type="button" onClick={() => setIsDeleteObraModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs space-y-2 text-rose-900">
              <p>
                <strong>ATENÇÃO:</strong> Esta ação excluirá a obra <strong>"{obraToDelete.nome}"</strong> em definitivo, junto com <strong>todas as suas tarefas vinculadas</strong> e registros do banco de horas.
              </p>
              <p className="text-[11px] text-rose-700">
                Esta operação será registrada no log de auditoria corporativo com seu nome e horário.
              </p>
            </div>

            <form onSubmit={handleExecuteDeleteObra} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  Confirme digitando sua Senha de Coordenador ({currentUser?.nome})
                </label>
                <input
                  type="password"
                  required
                  value={deleteObraPassword}
                  onChange={(e) => {
                    setDeleteObraPassword(e.target.value);
                    setDeleteObraError("");
                  }}
                  placeholder="Sua senha de acesso"
                  className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-rose-500"
                />
                {deleteObraError && (
                  <p className="text-xs font-bold text-rose-600 mt-1">{deleteObraError}</p>
                )}
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setIsDeleteObraModalOpen(false)}
                  className="px-4 py-2 border rounded-lg font-bold text-slate-600 hover:bg-slate-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-bold shadow"
                >
                  Confirmar Exclusão em Cascata
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: CADASTRO / EDIÇÃO DE TAREFA (GESTÃO DE TAREFAS)   */}
      {/* ========================================================= */}
      {isTaskModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-black text-sm text-[#15365C] uppercase flex items-center gap-2">
                <ListPlus className="w-4 h-4 text-amber-500" />
                {taskModalMode === "create" ? `Nova Tarefa em "${taskManagerObra}"` : "Editar Tarefa Técnica"}
              </h3>
              <button type="button" onClick={() => setIsTaskModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveTaskModal} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Descrição da Atividade</label>
                <input
                  type="text"
                  required
                  value={editingTask.atividade}
                  onChange={(e) => setEditingTask(prev => ({ ...prev, atividade: e.target.value }))}
                  placeholder="Ex: PROJETO DE REDE DE DUTOS"
                  className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-[#15365C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Fase da Obra</label>
                  <select
                    value={editingTask.fase}
                    onChange={(e) => setEditingTask(prev => ({ ...prev, fase: e.target.value }))}
                    className="w-full p-2.5 border rounded-lg font-semibold"
                  >
                    <option value="Projetos">Projetos</option>
                    <option value="Suprimentos">Suprimentos</option>
                    <option value="Fabricação">Fabricação</option>
                    <option value="Campo">Campo</option>
                    <option value="Qualidade">Qualidade</option>
                    <option value="Comissionamento">Comissionamento</option>
                    <option value="Entrega">Entrega</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Prazo em Dias • <span className="text-amber-700 font-black">{(editingTask.dias || 14) * 10}h (10h/d)</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={editingTask.dias}
                    onChange={(e) => handleTaskDaysChange(e.target.value)}
                    className="w-full p-2.5 border rounded-lg font-bold"
                  />
                </div>
              </div>

              {/* Sincronização Bidirecional de Datas e Dias */}
              <div className="grid grid-cols-2 gap-3 p-2.5 bg-slate-50 border rounded-lg">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Início Previsto</label>
                  <input
                    type="date"
                    required
                    value={editingTask.inicioPrevisto}
                    onChange={(e) => handleTaskInicioChange(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Término Previsto</label>
                  <input
                    type="date"
                    required
                    value={editingTask.terminoPrevisto}
                    onChange={(e) => handleTaskTerminoChange(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
              </div>

              {/* Atribuição de Responsáveis (Líder + 2 Apoios) */}
              <div className="space-y-2">
                <label className="font-bold text-slate-700 block">Equipe Alocada (Até 3 Profissionais)</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold block mb-0.5">Titular (Líder)</span>
                    <select
                      value={editingTask.resp1 || "A Definir"}
                      onChange={(e) => setEditingTask(prev => ({ ...prev, resp1: e.target.value }))}
                      className="w-full p-2 border rounded-lg font-bold text-[#15365C] bg-amber-50/50"
                    >
                      <option value="A Definir">⚠️ (A Definir / Sem Vínculo)</option>
                      {equipe.filter(u => u.role !== "Visualizador").map(u => (
                        <option key={u.id} value={u.nome}>{u.nome} ({u.role})</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold block mb-0.5">Apoio 1</span>
                    <select
                      value={editingTask.resp2}
                      onChange={(e) => setEditingTask(prev => ({ ...prev, resp2: e.target.value }))}
                      className="w-full p-2 border rounded-lg"
                    >
                      <option value="">Nenhum</option>
                      {equipe.map(u => (
                        <option key={u.id} value={u.nome}>{u.nome}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold block mb-0.5">Apoio 2</span>
                    <select
                      value={editingTask.resp3}
                      onChange={(e) => setEditingTask(prev => ({ ...prev, resp3: e.target.value }))}
                      className="w-full p-2 border rounded-lg"
                    >
                      <option value="">Nenhum</option>
                      {equipe.map(u => (
                        <option key={u.id} value={u.nome}>{u.nome}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  Percentual Inicial / Progresso: {editingTask.percentual}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={editingTask.percentual}
                  onChange={(e) => setEditingTask(prev => ({ ...prev, percentual: Number(e.target.value) }))}
                  className="w-full"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setIsTaskModalOpen(false)}
                  className="px-4 py-2 border rounded-lg font-bold text-slate-600 hover:bg-slate-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#15365C] hover:bg-blue-900 text-white rounded-lg font-bold shadow"
                >
                  Salvar Tarefa
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: CONFIRMAÇÃO DE EXCLUSÃO DE TAREFA                  */}
      {/* ========================================================= */}
      {taskToDelete && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-black text-sm text-rose-700 uppercase flex items-center gap-2">
                <Trash2 className="w-4 h-4 text-rose-600" />
                Confirmar Exclusão de Atividade
              </h3>
              <button type="button" onClick={() => setTaskToDelete(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-slate-600">
              Tem certeza que deseja excluir a atividade <strong>"{taskToDelete.atividade}"</strong> da obra <strong>{taskToDelete.obraNome}</strong>?
            </p>
            <div className="flex justify-end gap-2 pt-3 border-t">
              <button
                type="button"
                onClick={() => setTaskToDelete(null)}
                className="px-4 py-2 border rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={confirmDeleteTask}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold shadow"
              >
                Sim, Excluir Atividade
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: APONTAMENTO DE HORAS                              */}
      {/* ========================================================= */}
      {isTimeModalOpen && activeTaskForTime && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-black text-sm text-[#15365C] uppercase flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600" />
                Lançar Horas Trabalhadas
              </h3>
              <button type="button" onClick={() => setIsTimeModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveTimeEntry} className="space-y-4 text-xs">
              {/* Seleção ou Visualização da Obra e Atividade */}
              <div className="space-y-2 p-3 bg-blue-50/70 border border-blue-100 rounded-xl">
                <div>
                  <label className="font-bold text-[#15365C] block mb-1">Empreendimento / Obra</label>
                  <select
                    value={activeTaskForTime.obraNome}
                    onChange={(e) => {
                      const selectedObraNome = e.target.value;
                      const obraTasks = atividades.filter(a => a.obraNome === selectedObraNome);
                      setActiveTaskForTime({
                        id: obraTasks[0]?.id || 0,
                        obraNome: selectedObraNome,
                        atividade: obraTasks[0]?.atividade || "",
                        percentual: obraTasks[0]?.percentual || 0
                      });
                    }}
                    className="w-full p-2 border border-slate-300 rounded-lg bg-white font-bold text-[#15365C]"
                  >
                    {obras.map(o => (
                      <option key={o.id} value={o.nome}>{o.nome} ({o.cliente})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Frente Técnica / Atividade</label>
                  <select
                    value={activeTaskForTime.atividade}
                    onChange={(e) => {
                      const selectedActNome = e.target.value;
                      const matched = atividades.find(a => a.obraNome === activeTaskForTime.obraNome && a.atividade === selectedActNome);
                      setActiveTaskForTime(prev => ({
                        ...prev,
                        id: matched?.id || 0,
                        atividade: selectedActNome,
                        percentual: matched?.percentual || 0
                      }));
                    }}
                    className="w-full p-2 border border-slate-300 rounded-lg bg-white font-semibold text-slate-800"
                  >
                    {atividades
                      .filter(a => a.obraNome === activeTaskForTime.obraNome)
                      .map(a => (
                        <option key={a.id} value={a.atividade}>
                          {a.atividade} ({a.fase} - {a.percentual}%)
                        </option>
                      ))}
                  </select>
                </div>

                {isCoordinator && (
                  <div>
                    <label className="font-bold text-amber-900 block mb-1">Profissional / Colaborador</label>
                    <select
                      value={newTimeEntry.colaboradorNome || currentUser?.nome}
                      onChange={(e) => {
                        const colabName = e.target.value;
                        const colab = equipe.find(u => u.nome === colabName);
                        setNewTimeEntry(prev => ({
                          ...prev,
                          colaboradorNome: colabName,
                          colaboradorId: colab?.id || currentUser?.id
                        }));
                      }}
                      className="w-full p-2 border border-amber-300 rounded-lg bg-amber-50/70 font-bold text-[#15365C]"
                    >
                      {equipe.map(u => (
                        <option key={u.id} value={u.nome}>{u.nome} ({u.role})</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {/* Data do Serviço com Botões de Acesso Rápido a Dias Anteriores */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="font-bold text-slate-700">Data do Serviço Realizado</label>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setNewTimeEntry(prev => ({ ...prev, data: getRelativeDateStr(0) }))}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold border transition cursor-pointer ${
                        newTimeEntry.data === getRelativeDateStr(0)
                          ? "bg-[#15365C] text-white border-[#15365C] shadow-xs"
                          : "bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200"
                      }`}
                    >
                      Hoje
                    </button>
                    <button
                      type="button"
                      onClick={() => setNewTimeEntry(prev => ({ ...prev, data: getRelativeDateStr(1) }))}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold border transition cursor-pointer ${
                        newTimeEntry.data === getRelativeDateStr(1)
                          ? "bg-[#15365C] text-white border-[#15365C] shadow-xs"
                          : "bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200"
                      }`}
                    >
                      Ontem
                    </button>
                    <button
                      type="button"
                      onClick={() => setNewTimeEntry(prev => ({ ...prev, data: getRelativeDateStr(2) }))}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold border transition cursor-pointer ${
                        newTimeEntry.data === getRelativeDateStr(2)
                          ? "bg-[#15365C] text-white border-[#15365C] shadow-xs"
                          : "bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200"
                      }`}
                    >
                      Anteontem
                    </button>
                  </div>
                </div>
                <input
                  type="date"
                  required
                  value={newTimeEntry.data}
                  onChange={(e) => setNewTimeEntry(prev => ({ ...prev, data: e.target.value }))}
                  className="w-full p-2.5 border rounded-lg font-semibold text-slate-800 focus:ring-2 focus:ring-[#15365C]"
                />
                <span className="text-[10px] text-slate-400 block italic">
                  * Você pode apontar horas de qualquer dia anterior selecionando a data no calendário acima.
                </span>
              </div>

              {/* Presets Rápidos de Período / Turno */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase block">Atalhos de Turno / Período:</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  <button
                    type="button"
                    onClick={() => setNewTimeEntry(prev => ({ ...prev, horaInicio: "08:00", horaFim: "12:00", intervaloMin: 0 }))}
                    className="p-1.5 rounded bg-slate-100 hover:bg-blue-50 hover:text-[#15365C] border border-slate-200 text-[10px] font-bold text-slate-700 transition cursor-pointer"
                  >
                    🌅 Manhã (4h)
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewTimeEntry(prev => ({ ...prev, horaInicio: "13:00", horaFim: "17:00", intervaloMin: 0 }))}
                    className="p-1.5 rounded bg-slate-100 hover:bg-blue-50 hover:text-[#15365C] border border-slate-200 text-[10px] font-bold text-slate-700 transition cursor-pointer"
                  >
                    ☀️ Tarde (4h)
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewTimeEntry(prev => ({ ...prev, horaInicio: "17:00", horaFim: "20:00", intervaloMin: 0 }))}
                    className="p-1.5 rounded bg-slate-100 hover:bg-blue-50 hover:text-[#15365C] border border-slate-200 text-[10px] font-bold text-slate-700 transition cursor-pointer"
                  >
                    🌙 Extra (3h)
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewTimeEntry(prev => ({ ...prev, horaInicio: "08:00", horaFim: "18:00", intervaloMin: 60 }))}
                    className="p-1.5 rounded bg-slate-100 hover:bg-blue-50 hover:text-[#15365C] border border-slate-200 text-[10px] font-bold text-slate-700 transition cursor-pointer"
                  >
                    📅 Integral (9h)
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Hora de Início</label>
                  <input
                    type="time"
                    required
                    value={newTimeEntry.horaInicio}
                    onChange={(e) => setNewTimeEntry(prev => ({ ...prev, horaInicio: e.target.value }))}
                    className="w-full p-2.5 border rounded-lg font-bold text-slate-800"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Hora de Término</label>
                  <input
                    type="time"
                    required
                    value={newTimeEntry.horaFim}
                    onChange={(e) => setNewTimeEntry(prev => ({ ...prev, horaFim: e.target.value }))}
                    className="w-full p-2.5 border rounded-lg font-bold text-slate-800"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 p-2.5 bg-slate-50 border rounded-lg">
                <div className="flex-1">
                  <label className="font-bold text-slate-700 block text-[11px] mb-0.5">Intervalo de Almoço (min)</label>
                  <input
                    type="number"
                    min="0"
                    step="15"
                    value={newTimeEntry.intervaloMin}
                    onChange={(e) => setNewTimeEntry(prev => ({ ...prev, intervaloMin: Number(e.target.value) }))}
                    className="w-full p-1.5 border rounded font-semibold text-slate-800"
                  />
                </div>
                <div className="text-right flex-shrink-0 pl-3 border-l border-slate-200">
                  <span className="text-[10px] text-slate-500 font-bold block uppercase">Total deste Lançamento</span>
                  <span className="text-base font-black text-emerald-700 font-mono">
                    {(() => {
                      const [hI, mI] = (newTimeEntry.horaInicio || "08:00").split(":").map(Number);
                      const [hF, mF] = (newTimeEntry.horaFim || "18:00").split(":").map(Number);
                      let diffMin = ((hF * 60) + mF) - ((hI * 60) + mI) - (Number(newTimeEntry.intervaloMin) || 0);
                      if (diffMin <= 0) diffMin = 60;
                      return `${Math.round((diffMin / 60) * 10) / 10}h`;
                    })()}
                  </span>
                </div>
              </div>

              {/* Resumo de outros projetos apontados no mesmo dia pelo profissional */}
              {(() => {
                const targetColab = newTimeEntry.colaboradorNome || currentUser?.nome;
                const sameDayEntries = bancoHoras.filter(b => b.data === newTimeEntry.data && (b.colaboradorNome === targetColab));
                const totalSameDay = Math.round(sameDayEntries.reduce((acc, curr) => acc + (curr.totalHoras || 0), 0) * 10) / 10;
                
                return (
                  <div className="p-2.5 bg-amber-50/70 border border-amber-200 rounded-lg space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-bold text-amber-900">
                      <span>Projetos apontados em {newTimeEntry.data}:</span>
                      <span className="px-1.5 py-0.2 bg-amber-200/70 rounded text-[10px] font-mono">
                        {totalSameDay}h acumuladas ({sameDayEntries.length} {sameDayEntries.length === 1 ? "frente" : "frentes"})
                      </span>
                    </div>
                    {sameDayEntries.length > 0 ? (
                      <div className="space-y-0.5 pt-1">
                        {sameDayEntries.map(entry => (
                          <div key={entry.id} className="text-[10px] text-amber-800 flex items-center justify-between border-b border-amber-100 last:border-none pb-0.5">
                            <span className="truncate max-w-[220px]">📍 <strong>{entry.obraNome}</strong>: {entry.atividadeNome}</span>
                            <span className="font-mono flex-shrink-0">{entry.horaInicio} às {entry.horaFim} ({entry.totalHoras}h)</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <span className="text-[10px] text-amber-700 italic block">
                        Nenhum outro apontamento registrado para {targetColab?.split(" ")[0]} nesta data ainda.
                      </span>
                    )}
                    <span className="text-[9px] text-amber-600 block italic pt-0.5">
                      ✓ Profissionais podem cadastrar múltiplos horários em obras diferentes no mesmo dia livremente.
                    </span>
                  </div>
                );
              })()}

              <div>
                <label className="font-bold text-slate-700 block mb-1">Descrição das Atividades Executadas</label>
                <textarea
                  rows="3"
                  required
                  value={newTimeEntry.descricao}
                  onChange={(e) => setNewTimeEntry(prev => ({ ...prev, descricao: e.target.value }))}
                  placeholder="Descreva o serviço executado em campo ou escritório..."
                  className="w-full p-2.5 border rounded-lg"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setIsTimeModalOpen(false)}
                  className="px-4 py-2 border rounded-lg font-bold text-slate-600 hover:bg-slate-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-bold shadow"
                >
                  Confirmar Apontamento
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: REDEFINIR SENHA DE USUÁRIO (COORDENADOR)           */}
      {/* ========================================================= */}
      {isResetUserPassModalOpen && userToResetPass && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-black text-sm text-[#15365C] uppercase flex items-center gap-2">
                <Key className="w-4 h-4 text-amber-500" />
                Redefinir Senha do Profissional
              </h3>
              <button
                type="button"
                onClick={() => setIsResetUserPassModalOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600">
              Você está gerando uma nova credencial de acesso para <strong>{userToResetPass.nome}</strong> ({userToResetPass.email}).
            </p>

            <form onSubmit={handleConfirmResetUserPassword} className="space-y-4 text-xs">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="font-bold text-slate-700">Nova Senha Gerada</label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setTempGeneratedPass(generateSecurePassword("Clima"))}
                      className="text-blue-700 hover:text-blue-800 text-[10px] font-bold flex items-center gap-1 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 cursor-pointer"
                    >
                      <RefreshCw className="w-3 h-3 text-blue-600" />
                      <span>Gerar Outra</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowTempResetPass(!showTempResetPass)}
                      className="text-slate-500 hover:text-[#15365C] text-[10px] font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      {showTempResetPass ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      <span>{showTempResetPass ? "Ocultar" : "Ver"}</span>
                    </button>
                  </div>
                </div>
                <div className="relative flex items-center">
                  <input
                    type={showTempResetPass ? "text" : "password"}
                    required
                    value={tempGeneratedPass}
                    onChange={(e) => setTempGeneratedPass(e.target.value)}
                    className="w-full p-2.5 pr-20 border rounded-lg font-mono text-sm font-bold text-[#15365C] bg-amber-50/40 focus:ring-2 focus:ring-[#15365C]"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard?.writeText(tempGeneratedPass);
                      showFeedback("Senha copiada para a área de transferência!");
                    }}
                    className="absolute right-2 px-2 py-1 bg-white hover:bg-slate-100 text-slate-600 border rounded text-[10px] font-bold flex items-center gap-1 shadow-xs cursor-pointer"
                    title="Copiar senha para enviar ao colaborador"
                  >
                    <Copy className="w-3 h-3" />
                    <span>Copiar</span>
                  </button>
                </div>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg text-[11px] text-blue-900 leading-relaxed">
                Ao confirmar, o colaborador poderá acessar o sistema imediatamente com esta nova senha. Copie e envie para ele com segurança.
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setIsResetUserPassModalOpen(false)}
                  className="px-4 py-2 border rounded-lg font-bold text-slate-600 hover:bg-slate-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#15365C] hover:bg-blue-900 text-white rounded-lg font-bold shadow cursor-pointer"
                >
                  Confirmar e Gravar Nova Senha
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: RENOVAÇÃO / ALTERAÇÃO DE SENHA PESSOAL             */}
      {/* ========================================================= */}
      {isProfilePassModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-black text-sm text-[#15365C] uppercase flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-600" />
                Renovar Minha Senha de Acesso
              </h3>
              <button
                type="button"
                onClick={() => {
                  setIsProfilePassModalOpen(false);
                  setProfilePassError("");
                }}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {profilePassError && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-lg text-xs font-bold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-600" />
                <span>{profilePassError}</span>
              </div>
            )}

            <form onSubmit={handleSaveProfilePassword} className="space-y-4 text-xs">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="font-bold text-slate-700">Senha Atual</label>
                  <button
                    type="button"
                    onClick={() => setShowProfileCurrentPass(!showProfileCurrentPass)}
                    className="text-slate-500 hover:text-[#15365C] text-[10px] font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    {showProfileCurrentPass ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                    <span>{showProfileCurrentPass ? "Ocultar" : "Ver"}</span>
                  </button>
                </div>
                <input
                  type={showProfileCurrentPass ? "text" : "password"}
                  required
                  value={currentProfilePassword}
                  onChange={(e) => setCurrentProfilePassword(e.target.value)}
                  placeholder="Digite sua senha atual"
                  className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-[#15365C]"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="font-bold text-slate-700">Nova Senha (mínimo 6 dígitos)</label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        const generated = generateSecurePassword("Clima");
                        setNewProfilePassword(generated);
                        setConfirmProfilePassword(generated);
                      }}
                      className="text-emerald-700 hover:text-emerald-800 text-[10px] font-bold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 cursor-pointer"
                      title="Sugerir uma senha corporativa forte"
                    >
                      <Key className="w-3 h-3 text-emerald-600" />
                      <span>Sugerir Forte</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowProfileNewPass(!showProfileNewPass)}
                      className="text-slate-500 hover:text-[#15365C] text-[10px] font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      {showProfileNewPass ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      <span>{showProfileNewPass ? "Ocultar" : "Ver"}</span>
                    </button>
                  </div>
                </div>
                <input
                  type={showProfileNewPass ? "text" : "password"}
                  required
                  value={newProfilePassword}
                  onChange={(e) => setNewProfilePassword(e.target.value)}
                  placeholder="Digite sua nova senha"
                  className="w-full p-2.5 border rounded-lg font-mono text-xs focus:ring-2 focus:ring-[#15365C]"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Confirmar Nova Senha</label>
                <input
                  type={showProfileNewPass ? "text" : "password"}
                  required
                  value={confirmProfilePassword}
                  onChange={(e) => setConfirmProfilePassword(e.target.value)}
                  placeholder="Repita exatamente a nova senha"
                  className="w-full p-2.5 border rounded-lg font-mono text-xs focus:ring-2 focus:ring-[#15365C]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => {
                    setIsProfilePassModalOpen(false);
                    setProfilePassError("");
                  }}
                  className="px-4 py-2 border rounded-lg font-bold text-slate-600 hover:bg-slate-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#15365C] hover:bg-blue-900 text-white rounded-lg font-bold shadow cursor-pointer"
                >
                  Salvar Nova Senha
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}