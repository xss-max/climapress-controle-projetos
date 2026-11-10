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

// --- INITIAL DATA: EQUIPE LIMPA COM APENAS O COORDENADOR RESPONSÁVEL ---
const INITIAL_EQUIPE = [
  {
    id: 1,
    nome: "Engº Murilo Miranda da Silva",
    email: "murilo.miranda@climapress.com.br",
    fone: "(11) 98765-4321",
    role: "Coordenador",
    senha: "123"
  }
];

// --- INITIAL DATA: OBRAS & TAREFAS ZERADAS PARA PRODUÇÃO ---
const INITIAL_OBRAS = [];
const INITIAL_ACTIVITIES_LIST = [];
const INITIAL_TIME_ENTRIES = [];

export default function App() {
  // Global States
  const [equipe, setEquipe] = useState(INITIAL_EQUIPE);
  const [currentUser, setCurrentUser] = useState(INITIAL_EQUIPE[0]); // Murilo Miranda (Coord)
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [currentTab, setCurrentTab] = useState("dashboard"); // dashboard | minhas | gestao_obras | gestao_tarefas | horas | matriz | gantt | meu_perfil
  const [obras, setObras] = useState(INITIAL_OBRAS);
  const [atividades, setAtividades] = useState(INITIAL_ACTIVITIES_LIST);
  const [bancoHoras, setBancoHoras] = useState(INITIAL_TIME_ENTRIES);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [auditLogs, setAuditLogs] = useState([]);

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginSenha, setLoginSenha] = useState("");
  const [loginError, setLoginError] = useState("");

  // Feedback notifications
  const [feedbackMsg, setFeedbackMsg] = useState("");

  // Filter states
  const [raioXObra, setRaioXObra] = useState("Todas");
  const [resumoCardFilter, setResumoCardFilter] = useState("todos");
  const [minhasAtividadesObraFilter, setMinhasAtividadesObraFilter] = useState("Todas");
  const [taskManagerObra, setTaskManagerObra] = useState("Nubank");

  // Gantt specific controls
  const [ganttObraFilter, setGanttObraFilter] = useState("Todas");
  const [ganttHeaderMode, setGanttHeaderMode] = useState("semanas"); // semanas | datas
  const [ganttPaperSize, setGanttPaperSize] = useState("A3"); // A4 | A3 | A2 | A1 | A0

  // Navigation scroll refs
  const headerNavRef = useRef(null);
  const quickSelectRef = useRef(null);

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
    resp1: "Engº Murilo Miranda da Silva",
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

  // Time logging modal from Minhas Atividades
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);
  const [activeTaskForTime, setActiveTaskForTime] = useState(null);
  const [newTimeEntry, setNewTimeEntry] = useState({
    data: new Date().toISOString().split("T")[0],
    horaInicio: "08:00",
    horaFim: "18:00",
    intervaloMin: 60,
    descricao: ""
  });

  // Profile password modal
  const [isProfilePassModalOpen, setIsProfilePassModalOpen] = useState(false);
  const [newProfilePassword, setNewProfilePassword] = useState("");

  // Role booleans
  const isCoordinator = currentUser?.role === "Coordenador";
  const isViewer = currentUser?.role === "Visualizador";
  const isCollaborator = currentUser?.role === "Colaborador";

  // Enforce collaborator route protection (Visualizadores podem ver todas as abas assim como coordenadores)
  useEffect(() => {
    const restrictedTabs = ["dashboard", "gestao_obras", "gestao_tarefas", "matriz", "gantt"];
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
    if (raioXObra === "Todas") {
      const totalPrev = obrasStats.reduce((acc, o) => acc + o.horasPrevistas, 0);
      const totalReal = Math.round(obrasStats.reduce((acc, o) => acc + o.horasRealizadas, 0) * 10) / 10;
      const totalConc = obrasStats.reduce((acc, o) => acc + o.concluidas, 0);
      const totalAndam = obrasStats.reduce((acc, o) => acc + o.emAndamento, 0);
      const totalFut = obrasStats.reduce((acc, o) => acc + o.futuras, 0);
      const mediaGlobal = obrasStats.length > 0
        ? Math.round(obrasStats.reduce((acc, o) => acc + o.mediaPerc, 0) / obrasStats.length * 10) / 10
        : 0;

      return {
        cliente: "Todas as Obras / Multi-clientes",
        horasPrevistas: totalPrev,
        horasRealizadas: totalReal,
        concluidas: totalConc,
        emAndamento: totalAndam,
        futuras: totalFut,
        mediaPerc: mediaGlobal
      };
    }

    const current = obrasStats.find((o) => o.nome === raioXObra);
    if (!current) {
      return {
        cliente: "—",
        horasPrevistas: 0,
        horasRealizadas: 0,
        concluidas: 0,
        emAndamento: 0,
        futuras: 0,
        mediaPerc: 0
      };
    }

    return {
      cliente: current.cliente,
      horasPrevistas: current.horasPrevistas,
      horasRealizadas: current.horasRealizadas,
      concluidas: current.concluidas,
      emAndamento: current.emAndamento,
      futuras: current.futuras,
      mediaPerc: current.mediaPerc
    };
  }, [raioXObra, obrasStats]);

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
        senha: editingUser.senha || "123"
      };
      setEquipe(prev => [...prev, newUser]);
      showFeedback(`Profissional "${newUser.nome}" cadastrado com perfil ${newUser.role}!`);
    } else {
      setEquipe(prev => prev.map(u => (u.id === editingUser.id ? { ...editingUser } : u)));
      if (currentUser?.id === editingUser.id) {
        setCurrentUser(editingUser);
      }
      showFeedback(`Dados de "${editingUser.nome}" atualizados com sucesso!`);
    }
    setIsUserModalOpen(false);
  };

  const confirmDeleteUser = () => {
    if (!userToDelete) return;
    if (userToDelete.id === currentUser?.id) {
      alert("Você não pode excluir o usuário atualmente conectado.");
      setUserToDelete(null);
      return;
    }
    setEquipe(prev => prev.filter(u => u.id !== userToDelete.id));
    showFeedback(`Profissional "${userToDelete.nome}" removido da equipe.`);
    setUserToDelete(null);
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

  // Gantt Timeline Columns configuration
  const ganttWeeks = useMemo(() => [
    { sem: "Sem 45", dates: "02/11 a 08/11" },
    { sem: "Sem 46", dates: "09/11 a 15/11" },
    { sem: "Sem 47", dates: "16/11 a 22/11" },
    { sem: "Sem 48", dates: "23/11 a 29/11" },
    { sem: "Sem 49", dates: "30/11 a 06/12" },
    { sem: "Sem 50", dates: "07/12 a 13/12" },
    { sem: "Sem 51", dates: "14/12 a 20/12" },
    { sem: "Sem 52", dates: "21/12 a 27/12" },
    { sem: "Sem 01", dates: "28/12 a 03/01" }
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

  // --- BIDIRECTIONAL SYNC FOR TASK MODAL DATES & DAYS ---
  const handleTaskDaysChange = (newDays) => {
    const days = Math.max(1, parseInt(newDays) || 1);
    const start = new Date(editingTask.inicioPrevisto || "2026-11-02");
    const end = new Date(start);
    end.setDate(end.getDate() + days);
    setEditingTask(prev => ({
      ...prev,
      dias: days,
      terminoPrevisto: end.toISOString().split("T")[0]
    }));
  };

  const handleTaskInicioChange = (newInicio) => {
    const start = new Date(newInicio);
    const days = editingTask.dias || 14;
    const end = new Date(start);
    end.setDate(end.getDate() + days);
    setEditingTask(prev => ({
      ...prev,
      inicioPrevisto: newInicio,
      terminoPrevisto: end.toISOString().split("T")[0]
    }));
  };

  const handleTaskTerminoChange = (newTermino) => {
    const start = new Date(editingTask.inicioPrevisto || "2026-11-02");
    const end = new Date(newTermino);
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
      const newTask = {
        ...editingTask,
        id: nextId,
        obraNome: taskManagerObra,
        atividade: editingTask.atividade.trim().toUpperCase(),
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
            colaboradorNome: newTask.resp1 || currentUser?.nome,
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
      showFeedback(`Tarefa criada com sucesso em "${taskManagerObra}" e vinculada aos responsáveis!`);
    } else {
      setAtividades(prev =>
        prev.map(a => (a.id === editingTask.id ? { ...editingTask, lastUpdated: new Date().toISOString().split("T")[0] } : a))
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
      setObras(prev => [...prev, newObraObj]);
      setTaskManagerObra(newObraObj.nome);
      showFeedback(`Obra "${newObraObj.nome}" cadastrada com sucesso!`);
    } else {
      const oldObra = obras.find(o => o.id === editingObra.id);
      if (oldObra && oldObra.nome !== editingObra.nome.trim()) {
        const oldName = oldObra.nome;
        const newName = editingObra.nome.trim();
        setAtividades(prev => prev.map(a => (a.obraNome === oldName ? { ...a, obraNome: newName } : a)));
        setBancoHoras(prev => prev.map(b => (b.obraNome === oldName ? { ...b, obraNome: newName } : b)));
        if (taskManagerObra === oldName) setTaskManagerObra(newName);
        if (raioXObra === oldName) setRaioXObra(newName);
      }
      setObras(prev => prev.map(o => (o.id === editingObra.id ? { ...editingObra, nome: editingObra.nome.trim(), cliente: editingObra.cliente.trim() } : o)));
      showFeedback(`Dados da obra "${editingObra.nome}" atualizados!`);
    }
    setIsObraModalOpen(false);
  };

  // Cascade delete Obra with Coordinator password validation & audit logging
  const handleExecuteDeleteObra = (e) => {
    e.preventDefault();
    if (!obraToDelete) return;

    if (deleteObraPassword !== currentUser?.senha) {
      setDeleteObraError("Senha incorreta. A exclusão de uma obra exige validação da senha do coordenador.");
      return;
    }

    const obraNome = obraToDelete.nome;
    const tasksCount = atividades.filter(a => a.obraNome === obraNome).length;
    const hoursCount = bancoHoras.filter(b => b.obraNome === obraNome).length;

    // Delete cascading
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
      detalhes: `Exclusão total em cascata: ${tasksCount} frentes técnicas e ${hoursCount} apontamentos removidos.`
    };
    setAuditLogs(prev => [newLog, ...prev]);

    if (taskManagerObra === obraNome) {
      const remaining = obras.filter(o => o.id !== obraToDelete.id);
      setTaskManagerObra(remaining[0]?.nome || "");
    }
    if (raioXObra === obraNome) {
      setRaioXObra("Todas");
    }

    showFeedback(`Obra "${obraNome}" e todo o seu escopo foram excluídos com sucesso.`);
    setIsDeleteObraModalOpen(false);
    setObraToDelete(null);
    setDeleteObraPassword("");
    setDeleteObraError("");
  };

  // Time logging submission
  const handleSaveTimeEntry = (e) => {
    e.preventDefault();
    if (!activeTaskForTime) return;

    const [hI, mI] = newTimeEntry.horaInicio.split(":").map(Number);
    const [hF, mF] = newTimeEntry.horaFim.split(":").map(Number);
    let diffMinutes = ((hF * 60) + mF) - ((hI * 60) + mI) - (Number(newTimeEntry.intervaloMin) || 0);
    if (diffMinutes <= 0) diffMinutes = 60;
    const totalHorasCalculadas = Math.round((diffMinutes / 60) * 10) / 10;

    const entry = {
      id: Date.now(),
      colaboradorId: currentUser?.id || 1,
      colaboradorNome: currentUser?.nome,
      obraNome: activeTaskForTime.obraNome,
      atividadeNome: activeTaskForTime.atividade,
      data: newTimeEntry.data,
      horaInicio: newTimeEntry.horaInicio,
      horaFim: newTimeEntry.horaFim,
      intervaloMin: Number(newTimeEntry.intervaloMin) || 0,
      totalHoras: totalHorasCalculadas,
      descricao: newTimeEntry.descricao || "Apontamento de horas em campo.",
      status: "Confirmado"
    };

    setBancoHoras(prev => [entry, ...prev]);

    // If activity was 0%, mark it in progress (25%)
    if (activeTaskForTime.percentual === 0) {
      handleUpdateProgress(activeTaskForTime.id, 25, "Iniciado trabalho técnico na frente.");
    }

    showFeedback(`${totalHorasCalculadas}h registradas com sucesso em "${activeTaskForTime.atividade}"!`);
    setIsTimeModalOpen(false);
    setActiveTaskForTime(null);
  };

  // --- REPORT EXPORTERS (PDF ROBUSTO COM JANELA POPUP E MARCA D'ÁGUA, WORD, EXCEL) ---
  const handleExportPDF = () => {
    try {
      const printWindow = window.open("", "_blank", "width=1000,height=750");
      if (!printWindow) {
        window.print();
        return;
      }

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

          <script>
            window.onload = function() {
              window.focus();
              setTimeout(function() {
                window.print();
              }, 400);
            };
          </script>
        </body>
        </html>
      `;

      printWindow.document.open();
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      showFeedback("Relatório PDF preparado para impressão e download!");
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
      senha: inviteData.senha || "123"
    };

    setEquipe(prev => [...prev, newUser]);
    setIsInviteModalOpen(false);
    setInviteData({ nome: "", email: "", fone: "", role: "Colaborador", senha: "123" });
    showFeedback(`Convite gerado com sucesso! "${newUser.nome}" agora pode acessar como ${newUser.role}.`);
  };

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

      {/* HEADER PRINCIPAL */}
      <header className="bg-[#15365C] text-white shadow-md sticky top-0 z-40 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-3">
            {/* Logo Oficial Climapress com estilo moderno */}
            <div 
              className="flex items-center gap-3 flex-shrink-0 cursor-pointer group" 
              onClick={() => setCurrentTab(isCoordinator || isViewer ? "dashboard" : "minhas")}
              title="Climapress Engenharia"
            >
              <div className="drop-shadow-md group-hover:scale-[1.02] transition-transform">
                <ClimapressLogo className="h-11 w-auto" />
              </div>
              <div className="hidden md:block pl-3 border-l border-blue-900/60">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block">
                  Sistema Integrado de Engenharia
                </span>
                <span className="text-xs font-semibold text-slate-300">HVAC & Controle Físico-Financeiro</span>
              </div>
            </div>

            {/* User profile badge & Global actions */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <button
                type="button"
                onClick={handleGlobalRefresh}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold transition active:scale-95"
                title="Atualizar dados e recalcular índices"
              >
                <RefreshCw className={`w-3.5 h-3.5 text-amber-300 ${isRefreshing ? "animate-spin" : ""}`} />
                <span className="hidden sm:inline">Atualizar</span>
              </button>

              <div
                onClick={() => setCurrentTab("meu_perfil")}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-lg cursor-pointer transition"
                title="Meu Perfil"
              >
                <div className={`w-7 h-7 rounded-full text-white font-bold text-xs flex items-center justify-center ${
                  isCoordinator ? "bg-[#E52329]" : isViewer ? "bg-purple-600" : "bg-emerald-600"
                }`}>
                  {currentUser?.nome?.charAt(0) || "U"}
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-bold leading-tight truncate max-w-[130px]">{currentUser?.nome}</div>
                  <div className="text-[10px] text-amber-300 font-semibold uppercase flex items-center gap-1">
                    {currentUser?.role}
                    {isViewer && <Eye className="w-2.5 h-2.5 text-purple-300 inline" />}
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
                className="px-2 py-1 bg-amber-400 hover:bg-amber-300 text-[#15365C] rounded text-[11px] font-black uppercase tracking-wider transition border-none cursor-pointer outline-none"
                title="Alternar entre perfis para teste de permissões"
              >
                {equipe.map(u => (
                  <option key={u.id} value={u.id}>
                    {u.role}: {u.nome.split(" ")[0]}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* NAVEGAÇÃO HORIZONTAL SUAVE COM SETAS LATERAIS */}
        <div className="bg-[#0e243d] border-t border-blue-900/40 relative">
          <div className="max-w-7xl mx-auto px-4 flex items-center relative">
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
                </>
              )}

              <button
                type="button"
                onClick={() => setCurrentTab("horas")}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition flex-shrink-0 ${
                  currentTab === "horas" ? "bg-[#E52329] text-white shadow" : "text-slate-300 hover:bg-white/10"
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Apontamento de Horas</span>
              </button>

              {(isCoordinator || isViewer) && (
                <>
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
      <div className="bg-white border-b border-slate-200 py-2.5 px-4 sm:px-6 shadow-sm print:hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
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

      {/* CONTEÚDO PRINCIPAL DINÂMICO */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full space-y-6">
        {/* ========================================================= */}
        {/* ABA: DASHBOARD EXECUTIVO (COORDENADOR OU VISUALIZADOR)     */}
        {/* ========================================================= */}
        {currentTab === "dashboard" && (isCoordinator || isViewer) && (
          <div className="space-y-6">
            {/* MÓDULO RESUMO DE ATIVIDADES */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-[#15365C] px-5 py-3 text-white flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <PlayCircle className="w-5 h-5 text-amber-300" />
                  <h3 className="text-xs font-bold uppercase tracking-wider">
                    Resumo de Atividades — Controle Físico e Horas
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold text-blue-200 uppercase tracking-wider">Filtro Atual:</span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#E52329] text-white">
                    {raioXObra}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-100">
                  <div className="flex flex-wrap items-center gap-3">
                    <label htmlFor="select-raiox-obra" className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Filtrar Empreendimento / Obra:
                    </label>
                    <select
                      id="select-raiox-obra"
                      value={raioXObra}
                      onChange={(e) => {
                        setRaioXObra(e.target.value);
                        setResumoCardFilter("todos");
                      }}
                      className="p-2 border border-slate-300 rounded-lg font-bold text-sm text-[#15365C] bg-amber-50/50 focus:outline-none focus:ring-2 focus:ring-[#15365C]"
                    >
                      <option value="Todas">🌐 Todas as Obras (Visão Consolidada)</option>
                      {obras.map(o => (
                        <option key={o.id} value={o.nome}>{o.nome} ({o.cliente})</option>
                      ))}
                    </select>
                  </div>
                  <span className="text-xs text-slate-500 italic">
                    {raioXObra === "Todas"
                      ? "* Exibindo o panorama consolidado com o resumo individual de cada obra logo abaixo"
                      : "* Clique nos botões para filtrar as atividades correspondentes"}
                  </span>
                </div>

                {/* VISÃO QUANDO "TODAS AS OBRAS" ESTIVER SELECIONADA: EXIBE APENAS A OPÇÃO CLIENTE/ESCOPO */}
                {raioXObra === "Todas" ? (
                  <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-blue-50/60 rounded-xl border border-slate-200 gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="p-3 bg-[#15365C] text-white rounded-xl shadow-sm">
                        <Building2 className="w-6 h-6 text-amber-300" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase text-slate-500 tracking-wider block">
                          Cliente / Escopo Consolidado
                        </span>
                        <h4 className="text-lg font-black text-[#15365C] uppercase">
                          {resumoStat.cliente} ({obras.length} Empreendimentos)
                        </h4>
                        <p className="text-xs text-slate-600">
                          {resumoStat.horasPrevistas}h previstas no escopo total • {resumoStat.horasRealizadas}h realizadas ({resumoStat.mediaPerc}% concluído)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1.5 rounded-lg">
                        {resumoStat.concluidas} Concluídas
                      </span>
                      <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1.5 rounded-lg">
                        {resumoStat.emAndamento} Em Andamento
                      </span>
                      <span className="text-xs font-bold text-slate-700 bg-slate-200 px-3 py-1.5 rounded-lg">
                        {resumoStat.futuras} Futuras
                      </span>
                    </div>
                  </div>
                ) : (
                  /* VISÃO OBRA INDIVIDUAL: BOTÕES INTERATIVOS COM FRENTES FUTURAS E % CONCLUSÃO REAL NA EXTREMIDADE DIREITA */
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 text-center">
                    {/* 1. Card Cliente / Escopo */}
                    <button
                      type="button"
                      onClick={() => setResumoCardFilter("todos")}
                      className={`p-3 rounded-lg border transition cursor-pointer active:scale-95 ${
                        resumoCardFilter === "todos"
                          ? "bg-[#15365C] text-white border-[#15365C] shadow-md ring-2 ring-blue-300"
                          : "bg-slate-50 hover:bg-blue-50 border-slate-200 text-slate-800"
                      }`}
                    >
                      <span className={`text-[10px] font-bold uppercase block ${resumoCardFilter === "todos" ? "text-blue-200" : "text-slate-500"}`}>
                        Cliente
                      </span>
                      <span className="text-sm font-black truncate block mt-1">
                        {resumoStat.cliente}
                      </span>
                      <span className={`text-[9px] font-semibold block ${resumoCardFilter === "todos" ? "text-blue-200" : "text-slate-500"}`}>
                        todas as frentes
                      </span>
                    </button>

                    {/* 2. Card Horas Previstas */}
                    <button
                      type="button"
                      onClick={() => setResumoCardFilter("previstas")}
                      className={`p-3 rounded-lg border transition cursor-pointer active:scale-95 ${
                        resumoCardFilter === "previstas"
                          ? "bg-blue-900 text-white border-blue-950 shadow-md ring-2 ring-blue-300"
                          : "bg-slate-50 hover:bg-blue-50 border-slate-200 text-slate-800"
                      }`}
                    >
                      <span className={`text-[10px] font-bold uppercase block ${resumoCardFilter === "previstas" ? "text-blue-200" : "text-slate-500"}`}>
                        Horas Previstas
                      </span>
                      <span className={`text-sm font-black mt-1 block ${resumoCardFilter === "previstas" ? "text-white" : "text-[#15365C]"}`}>
                        {resumoStat.horasPrevistas}h
                      </span>
                      <span className={`text-[9px] font-semibold block ${resumoCardFilter === "previstas" ? "text-blue-200" : "text-slate-500"}`}>
                        escopo contratado
                      </span>
                    </button>

                    {/* 3. Card Horas Gastas */}
                    <button
                      type="button"
                      onClick={() => setResumoCardFilter("gastas")}
                      className={`p-3 rounded-lg border transition cursor-pointer active:scale-95 ${
                        resumoCardFilter === "gastas"
                          ? "bg-emerald-700 text-white border-emerald-800 shadow-md ring-2 ring-emerald-300"
                          : "bg-slate-50 hover:bg-emerald-50 border-slate-200 text-slate-800"
                      }`}
                    >
                      <span className={`text-[10px] font-bold uppercase block ${resumoCardFilter === "gastas" ? "text-emerald-100" : "text-slate-500"}`}>
                        Horas Gastas
                      </span>
                      <span className={`text-sm font-black mt-1 block ${resumoCardFilter === "gastas" ? "text-white" : "text-emerald-700"}`}>
                        {resumoStat.horasRealizadas}h
                      </span>
                      <span className={`text-[9px] font-semibold block ${resumoCardFilter === "gastas" ? "text-emerald-100" : "text-emerald-600"}`}>
                        {Math.round(((resumoStat.horasRealizadas / (resumoStat.horasPrevistas || 1)) * 100) * 10) / 10}% do previsto
                      </span>
                    </button>

                    {/* 4. Card Concluídas */}
                    <button
                      type="button"
                      onClick={() => setResumoCardFilter("concluidas")}
                      className={`p-3 rounded-lg border transition cursor-pointer active:scale-95 ${
                        resumoCardFilter === "concluidas"
                          ? "bg-emerald-600 text-white border-emerald-700 shadow-md ring-2 ring-emerald-300"
                          : "bg-slate-50 hover:bg-emerald-50 border-slate-200 text-slate-800"
                      }`}
                    >
                      <span className={`text-[10px] font-bold uppercase block ${resumoCardFilter === "concluidas" ? "text-emerald-100" : "text-slate-500"}`}>
                        Concluídas
                      </span>
                      <span className={`text-sm font-black mt-1 block ${resumoCardFilter === "concluidas" ? "text-white" : "text-emerald-700"}`}>
                        {resumoStat.concluidas}
                      </span>
                      <span className={`text-[9px] font-semibold block ${resumoCardFilter === "concluidas" ? "text-emerald-100" : "text-slate-500"}`}>
                        frentes 100%
                      </span>
                    </button>

                    {/* 5. Card Em Andamento */}
                    <button
                      type="button"
                      onClick={() => setResumoCardFilter("em_andamento")}
                      className={`p-3 rounded-lg border transition cursor-pointer active:scale-95 ${
                        resumoCardFilter === "em_andamento"
                          ? "bg-amber-600 text-white border-amber-700 shadow-md ring-2 ring-amber-300"
                          : "bg-slate-50 hover:bg-amber-50 border-slate-200 text-slate-800"
                      }`}
                    >
                      <span className={`text-[10px] font-bold uppercase block ${resumoCardFilter === "em_andamento" ? "text-amber-100" : "text-slate-500"}`}>
                        Em Andamento
                      </span>
                      <span className={`text-sm font-black mt-1 block ${resumoCardFilter === "em_andamento" ? "text-white" : "text-amber-600"}`}>
                        {resumoStat.emAndamento}
                      </span>
                      <span className={`text-[9px] font-semibold block ${resumoCardFilter === "em_andamento" ? "text-amber-100" : "text-slate-500"}`}>
                        em execução
                      </span>
                    </button>

                    {/* 6. Card Frentes Futuras */}
                    <button
                      type="button"
                      onClick={() => setResumoCardFilter("futuras")}
                      className={`p-3 rounded-lg border transition cursor-pointer active:scale-95 ${
                        resumoCardFilter === "futuras"
                          ? "bg-slate-700 text-white border-slate-800 shadow-md ring-2 ring-slate-400"
                          : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800"
                      }`}
                    >
                      <span className={`text-[10px] font-bold uppercase block ${resumoCardFilter === "futuras" ? "text-slate-200" : "text-slate-500"}`}>
                        Frentes Futuras
                      </span>
                      <span className={`text-sm font-black mt-1 block ${resumoCardFilter === "futuras" ? "text-white" : "text-slate-700"}`}>
                        {resumoStat.futuras}
                      </span>
                      <span className={`text-[9px] font-semibold block ${resumoCardFilter === "futuras" ? "text-slate-200" : "text-slate-500"}`}>
                        a iniciar (0%)
                      </span>
                    </button>

                    {/* 7. Card % Conclusão Real (Extremidade Direita) */}
                    <button
                      type="button"
                      onClick={() => setResumoCardFilter("percentual")}
                      className={`p-3 rounded-lg border transition cursor-pointer active:scale-95 ${
                        resumoCardFilter === "percentual"
                          ? "bg-[#E52329] text-white border-red-800 shadow-md ring-2 ring-red-300"
                          : "bg-slate-50 hover:bg-red-50 border-slate-200 text-slate-800"
                      }`}
                    >
                      <span className={`text-[10px] font-bold uppercase block ${resumoCardFilter === "percentual" ? "text-red-100" : "text-slate-500"}`}>
                        % Conclusão Real
                      </span>
                      <span className={`text-sm font-black mt-1 block ${resumoCardFilter === "percentual" ? "text-white" : "text-[#15365C]"}`}>
                        {resumoStat.mediaPerc}%
                      </span>
                      <span className={`text-[9px] font-semibold block ${resumoCardFilter === "percentual" ? "text-red-100" : "text-blue-500"}`}>
                        avanço da obra
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* SEÇÃO INFERIOR DINÂMICA BASEADA NO FILTRO */}
            {raioXObra === "Todas" ? (
              /* VISÃO TODAS AS OBRAS: RESUMO DE CADA OBRA */
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-[#15365C] px-5 py-3 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-amber-300" />
                    <h3 className="text-xs font-bold uppercase tracking-wider">
                      Resumo Individual de Cada Obra ({obrasStats.length} Empreendimentos Cadastrados)
                    </h3>
                  </div>
                  <span className="text-xs text-blue-200 font-semibold">
                    Clique em qualquer obra para abrir seu detalhamento
                  </span>
                </div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {obrasStats.map((o) => {
                    const fCount = atividades.filter(a => a.obraNome === o.nome && !a.isNA && a.percentual === 0).length;
                    return (
                      <div
                        key={o.id}
                        onClick={() => {
                          setRaioXObra(o.nome);
                          setResumoCardFilter("todos");
                        }}
                        className="p-4 border border-slate-200 rounded-xl hover:border-[#15365C] hover:shadow-md transition bg-slate-50/50 cursor-pointer space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-sm text-[#15365C] uppercase">{o.nome}</h4>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-[#15365C]">
                            {o.cliente}
                          </span>
                        </div>

                        {/* Barra de Progresso Real */}
                        <div>
                          <div className="flex justify-between text-xs font-bold mb-1">
                            <span className="text-slate-600">Conclusão Real</span>
                            <span className="text-[#15365C] font-black">{o.mediaPerc}%</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div
                              className="bg-[#E52329] h-2 rounded-full transition-all"
                              style={{ width: `${o.mediaPerc}%` }}
                            />
                          </div>
                        </div>

                        {/* Indicadores de Horas */}
                        <div className="grid grid-cols-2 gap-2 text-center pt-2 border-t border-slate-200">
                          <div className="bg-white p-2 rounded border border-slate-100">
                            <span className="text-[10px] text-slate-500 font-bold block uppercase">Previsto</span>
                            <span className="text-xs font-black text-[#15365C]">{o.horasPrevistas}h</span>
                          </div>
                          <div className="bg-white p-2 rounded border border-slate-100">
                            <span className="text-[10px] text-slate-500 font-bold block uppercase">Gasto</span>
                            <span className="text-xs font-black text-emerald-700">{o.horasRealizadas}h</span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center text-[10px] font-semibold text-slate-600 pt-1">
                          <span className="text-emerald-700 font-bold">{o.concluidas} conc.</span>
                          <span className="text-amber-700 font-bold">{o.emAndamento} andam.</span>
                          <span className="text-slate-500 font-bold">{fCount} futuras</span>
                          <span className="text-blue-600 font-black">Abrir &rarr;</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* VISÃO OBRA INDIVIDUAL: DESCRITIVO DE ATIVIDADES */
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-[#15365C] px-5 py-3 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ListPlus className="w-4 h-4 text-amber-300" />
                    <h3 className="text-xs font-bold uppercase tracking-wider">
                      Descritivo de Atividades — Obra: <span className="text-amber-300">{raioXObra}</span>
                    </h3>
                  </div>
                  <span className="text-xs text-blue-200 font-semibold">
                    Filtro Ativo: {resumoCardFilter.toUpperCase()}
                  </span>
                </div>

                <div className="p-4 overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 uppercase text-[10px] tracking-wider">
                        <th className="p-2.5">ID</th>
                        <th className="p-2.5">Atividade Técnica</th>
                        <th className="p-2.5">Fase</th>
                        <th className="p-2.5">Líder</th>
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
                          if (resumoCardFilter === "concluidas") return a.percentual >= 100;
                          if (resumoCardFilter === "em_andamento") return a.percentual > 0 && a.percentual < 100;
                          if (resumoCardFilter === "futuras") return a.percentual === 0;
                          if (resumoCardFilter === "gastas") {
                            const h = bancoHoras
                              .filter(b => b.obraNome === a.obraNome && b.atividadeNome === a.atividade)
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
                          const horasPrev = (act.dias || 14) * 10;
                          const horasGastas = Math.round(
                            bancoHoras
                              .filter(b => b.obraNome === act.obraNome && b.atividadeNome === act.atividade)
                              .reduce((acc, curr) => acc + curr.totalHoras, 0) * 10
                          ) / 10;

                          return (
                            <tr key={act.id} className="hover:bg-slate-50">
                              <td className="p-2.5 text-slate-400 font-mono">#{act.id}</td>
                              <td className="p-2.5 font-bold text-[#15365C]">{act.atividade}</td>
                              <td className="p-2.5">
                                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">
                                  {act.fase}
                                </span>
                              </td>
                              <td className="p-2.5 text-slate-700">{act.resp1}</td>
                              <td className="p-2.5 text-center font-bold text-slate-600">{act.dias}d</td>
                              <td className="p-2.5 text-center font-black text-[#15365C] bg-blue-50/50">{horasPrev}h</td>
                              <td className="p-2.5 text-center font-black text-emerald-700 bg-emerald-50/50">{horasGastas}h</td>
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
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                                    Concluído
                                  </span>
                                ) : act.percentual > 0 ? (
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                                    Em Andamento
                                  </span>
                                ) : (
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">
                                    Futura (A Iniciar)
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
              {minhasAtividades
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
                          className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                            act.percentual >= 100
                              ? "bg-emerald-100 text-emerald-800"
                              : act.percentual > 0
                              ? "bg-amber-100 text-amber-800"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {act.percentual >= 100 ? "Concluído" : act.percentual > 0 ? "Em Andamento" : "Não Iniciado"}
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

                      {/* Barra de Progresso Físico */}
                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1">
                          <span className="text-slate-600">Progresso Físico</span>
                          <span className="text-[#15365C]">{act.percentual}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all ${
                              act.percentual >= 100 ? "bg-emerald-600" : "bg-[#E52329]"
                            }`}
                            style={{ width: `${act.percentual}%` }}
                          />
                        </div>
                      </div>

                      {/* Botões Rápidos de Percentual com Rolagem Horizontal (Desativados em modo Visualizador) */}
                      {!isViewer && (
                        <div className="space-y-2 pt-2 border-t border-slate-100">
                          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                            <span className="text-[11px] font-bold text-slate-500 uppercase mr-1 flex-shrink-0">
                              Ajuste Rápido:
                            </span>
                            {[0, 25, 50, 75, 100].map((val) => (
                              <button
                                key={val}
                                type="button"
                                onClick={() => handleUpdateProgress(act.id, val)}
                                className={`px-3 py-1 rounded text-xs font-bold transition flex-shrink-0 ${
                                  act.percentual === val
                                    ? "bg-[#15365C] text-white shadow"
                                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                                }`}
                              >
                                {val}%
                              </button>
                            ))}
                          </div>

                          {/* Ações: Apontar Horas */}
                          <div className="flex items-center justify-between gap-3 pt-2">
                            <button
                              type="button"
                              onClick={() => {
                                setActiveTaskForTime(act);
                                setIsTimeModalOpen(true);
                              }}
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 rounded-lg text-xs font-bold transition active:scale-95"
                            >
                              <Clock className="w-3.5 h-3.5 text-amber-700" />
                              <span>Apontar Horas</span>
                            </button>
                            <span className="text-[10px] text-slate-400 italic">
                              Atualizado: {act.lastUpdated || "Recente"}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
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
                    Cadastre novos contratos ou edite os empreendimentos ativos da Climapress.
                  </p>
                </div>
                {isCoordinator && (
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
                {isViewer && (
                  <span className="px-3 py-1 rounded bg-slate-100 text-slate-600 text-xs font-bold">
                    Visualização Executiva (Edição Restrita à Coordenação)
                  </span>
                )}
              </div>
            </div>

            {/* Grid de Obras Cadastradas */}
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
                          title="Excluir Obra e todo o seu escopo com validação de senha"
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
                          resp1: currentUser?.nome || INITIAL_EQUIPE[0].nome,
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
                    {atividades
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
                          <td className="p-2.5 font-semibold text-slate-700">{act.resp1}</td>
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
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* ABA: APONTAMENTO DE HORAS (BANCO DE HORAS)                */}
        {/* ========================================================= */}
        {currentTab === "horas" && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 space-y-3">
              <h2 className="text-lg font-black text-[#15365C] flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-600" />
                Banco de Horas & Apontamentos de Campo
              </h2>
              <p className="text-xs text-slate-500">
                Histórico consolidado de horas executadas nas frentes de engenharia e instalações.
              </p>
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
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {bancoHoras.map(b => (
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
                      </tr>
                    ))}
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

            {/* Grid de Cards dos Membros da Equipe */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {equipe.map(colab => {
                const tarefasColab = atividades.filter(
                  a => a.resp1 === colab.nome || a.resp2 === colab.nome || a.resp3 === colab.nome
                );
                const obrasColab = Array.from(new Set(tarefasColab.map(a => a.obraNome)));
                const totalHorasPrevistas = tarefasColab.reduce((acc, a) => acc + ((a.dias || 14) * 10), 0);

                return (
                  <div
                    key={colab.id}
                    className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 space-y-3 hover:border-slate-300 transition"
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                        colab.role === "Coordenador"
                          ? "bg-amber-100 text-amber-800"
                          : colab.role === "Visualizador"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-blue-100 text-[#15365C]"
                      }`}>
                        {colab.role}
                      </span>
                      {isCoordinator && (
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => {
                              setEditingUser(colab);
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

                    <div className="grid grid-cols-2 gap-2 text-center bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">Frentes</span>
                        <span className="text-sm font-black text-[#15365C]">{tarefasColab.length}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">Carga Prevista</span>
                        <span className="text-sm font-black text-amber-700">{totalHorasPrevistas}h</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Empreendimentos ({obrasColab.length}):</span>
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
                      Semanas (Sem 45...)
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
            </div>

            {/* Quadro Visual do Cronograma de Gantt */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 overflow-x-auto space-y-4">
              <div className="min-w-[950px] space-y-3">
                <div className="grid grid-cols-12 gap-1 text-[11px] font-bold text-slate-600 uppercase pb-2 border-b border-slate-200 text-center">
                  <div className="col-span-3 text-left">Obra & Atividade Técnica</div>
                  {ganttWeeks.map(w => (
                    <div key={w.sem} className="col-span-1 bg-slate-50 py-1 rounded border border-slate-100">
                      <span className="block leading-tight text-[#15365C]">
                        {ganttHeaderMode === "semanas" ? w.sem : w.dates.split(" a ")[0]}
                      </span>
                      <span className="text-[9px] text-slate-400 block font-normal">
                        {ganttHeaderMode === "semanas" ? w.dates : `a ${w.dates.split(" a ")[1]}`}
                      </span>
                    </div>
                  ))}
                </div>

                {atividades
                  .filter(a => ganttObraFilter === "Todas" || a.obraNome === ganttObraFilter)
                  .slice(0, 35)
                  .map(act => (
                    <div key={act.id} className="grid grid-cols-12 gap-1 items-center text-xs py-1.5 border-b border-slate-50 hover:bg-slate-50/60 transition">
                      <div className="col-span-3 truncate font-semibold text-[#15365C]" title={`${act.obraNome}: ${act.atividade} (${act.resp1})`}>
                        <div className="flex items-center justify-between">
                          <span className="font-black text-[10px] text-slate-500 uppercase">{act.obraNome}</span>
                          <span className="text-[10px] text-slate-400 font-mono">{(act.dias || 14) * 10}h</span>
                        </div>
                        <div className="truncate font-bold">{act.atividade}</div>
                        <div className="text-[10px] text-slate-400">Líder: {act.resp1}</div>
                      </div>
                      <div className="col-span-9 bg-slate-100 rounded-lg h-6 relative overflow-hidden flex items-center">
                        <div
                          className={`h-full rounded-lg transition-all flex items-center justify-end px-2 text-[10px] font-black text-white ${
                            act.percentual >= 100 ? "bg-emerald-600" : act.percentual > 0 ? "bg-[#15365C]" : "bg-slate-400"
                          }`}
                          style={{
                            width: `${Math.min(100, Math.max(18, act.percentual))}%`,
                            marginLeft: `${(act.id % 4) * 7}%`
                          }}
                        >
                          {act.percentual}%
                        </div>
                      </div>
                    </div>
                  ))}
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
      <footer className="bg-[#0e243d] text-slate-300 border-t border-blue-950 py-5 px-4 text-center text-xs mt-auto print:hidden">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ClimapressLogo className="h-6 w-auto" />
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
                <label className="font-bold text-slate-700 block mb-1">Senha Inicial de Acesso</label>
                <input
                  type="password"
                  value={inviteData.senha}
                  onChange={(e) => setInviteData(prev => ({ ...prev, senha: e.target.value }))}
                  placeholder="Padrão: 123"
                  className="w-full p-2.5 border rounded-lg"
                />
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
                  className="px-4 py-2 bg-[#E52329] hover:bg-red-700 text-white rounded-lg font-bold shadow"
                >
                  Confirmar Convite
                </button>
              </div>
            </form>
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

              {userModalMode === "create" && (
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Senha Inicial de Acesso</label>
                  <input
                    type="password"
                    value={editingUser.senha}
                    onChange={(e) => setEditingUser(prev => ({ ...prev, senha: e.target.value }))}
                    placeholder="Padrão: 123"
                    className="w-full p-2.5 border rounded-lg"
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
                    <span className="text-[10px] text-slate-500 font-bold block mb-0.5">Titular (Líder) *</span>
                    <select
                      required
                      value={editingTask.resp1}
                      onChange={(e) => setEditingTask(prev => ({ ...prev, resp1: e.target.value }))}
                      className="w-full p-2 border rounded-lg font-bold text-[#15365C]"
                    >
                      <option value="">Selecione...</option>
                      {equipe.map(u => (
                        <option key={u.id} value={u.nome}>{u.nome}</option>
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
              <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
                <span className="font-bold text-[#15365C] block">{activeTaskForTime.obraNome}</span>
                <span className="text-slate-700 block">{activeTaskForTime.atividade}</span>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Data do Serviço</label>
                <input
                  type="date"
                  required
                  value={newTimeEntry.data}
                  onChange={(e) => setNewTimeEntry(prev => ({ ...prev, data: e.target.value }))}
                  className="w-full p-2.5 border rounded-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Hora de Início</label>
                  <input
                    type="time"
                    required
                    value={newTimeEntry.horaInicio}
                    onChange={(e) => setNewTimeEntry(prev => ({ ...prev, horaInicio: e.target.value }))}
                    className="w-full p-2.5 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Hora de Término</label>
                  <input
                    type="time"
                    required
                    value={newTimeEntry.horaFim}
                    onChange={(e) => setNewTimeEntry(prev => ({ ...prev, horaFim: e.target.value }))}
                    className="w-full p-2.5 border rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Intervalo de Almoço (minutos)</label>
                <input
                  type="number"
                  min="0"
                  step="15"
                  value={newTimeEntry.intervaloMin}
                  onChange={(e) => setNewTimeEntry(prev => ({ ...prev, intervaloMin: Number(e.target.value) }))}
                  className="w-full p-2.5 border rounded-lg"
                />
              </div>

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
      {/* MODAL: ALTERAR SENHA DO PERFIL                            */}
      {/* ========================================================= */}
      {isProfilePassModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-black text-sm text-[#15365C] uppercase flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#15365C]" />
                Alterar Minha Senha
              </h3>
              <button type="button" onClick={() => setIsProfilePassModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!newProfilePassword.trim()) return;
                setEquipe(prev =>
                  prev.map(u => (u.id === currentUser?.id ? { ...u, senha: newProfilePassword.trim() } : u))
                );
                setCurrentUser(prev => ({ ...prev, senha: newProfilePassword.trim() }));
                showFeedback("Senha alterada com sucesso!");
                setIsProfilePassModalOpen(false);
                setNewProfilePassword("");
              }}
              className="space-y-4 text-xs"
            >
              <div>
                <label className="font-bold text-slate-700 block mb-1">Nova Senha de Acesso</label>
                <input
                  type="password"
                  required
                  value={newProfilePassword}
                  onChange={(e) => setNewProfilePassword(e.target.value)}
                  placeholder="Digite sua nova senha"
                  className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-[#15365C]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setIsProfilePassModalOpen(false)}
                  className="px-4 py-2 border rounded-lg font-bold text-slate-600 hover:bg-slate-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#15365C] hover:bg-blue-900 text-white rounded-lg font-bold shadow"
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
