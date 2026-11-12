# Climapress — Sistema Integrado de Gestão de Obras (HVAC)

Sistema corporativo de controle físico-financeiro, gestão de tarefas e apontamento de horas de engenharia e instalações mecânicas da **Climapress Instalações de Sistemas de Ar Condicionado**.

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- Navegador moderno (Google Chrome ou Microsoft Edge)

### Execução do Projeto
No terminal do projeto (`c:\Users\murilo.silva\Desktop\Climapress-app`):

```bash
# 1. Instalar as dependências (se ainda não tiver instalado)
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev
```

O aplicativo estará disponível em:
> **http://localhost:3000/** ou **http://localhost:5173/**

---

## 👥 Níveis de Acesso e Credenciais de Teste

| Perfil | Nome do Usuário | E-mail de Login | Senha Padrão | Escopo de Acesso |
|:---|:---|:---|:---:|:---|
| **Coordenador** | Engº Murilo Miranda da Silva | `murilo.miranda@climapress.com.br` | `123` | Acesso pleno a todas as 8 abas, gestão de obras, tarefas, equipe, reset de senhas e auditoria. |
| **Colaborador** | Lucas Gabriel da Silva (Projetista) | `lucas.silva@climapress.com.br` | `123` | Painel operacional, apontamento de horas em campo e controle de suas frentes técnicas. |
| **Colaborador** | Carlos Eduardo Santos (Encarregado) | `carlos.santos@climapress.com.br` | `123` | Apontamento de horas, atualização de progresso de instalações e cômputo conjunto. |
| **Visualizador** | Dra. Mariana Costa Mendes (Diretoria) | `mariana.costa@climapress.com.br` | `123` | Modo leitura em todas as telas executivas, relatórios e cronograma de Gantt. |

---

## 📦 Funcionalidades Principais

1. **Dashboard Executivo:** Raio-X físico-financeiro consolidado de todas as obras ou por empreendimento específico.
2. **Minhas Atividades:** Visão operacional de tarefas atribuídas com controle conjunto de horas por equipe.
3. **Gestão de Obras:** Cadastro contratual com exclusão protegida por senha de coordenador e rastreamento em auditoria.
4. **Gestão de Tarefas:** Planejamento por fases (Projetos, Tubulação, Dutos, Elétrica, Comissionamento) e cálculo de carga horária (10h/dia).
5. **Apontamento de Horas:** Banco de horas com histórico detalhado e cálculo automático de saldo na conclusão (100%).
6. **Matriz de Alocação:** Gestão da equipe técnica com convites rápidos, geração de senhas seguras e redefinição administrativa.
7. **Cronograma de Gantt (ISO):** Linha do tempo proporcional em datas reais com suporte a plotagem em A4, A3, A2, A1 e A0.
8. **Relatórios Oficiais:** Exportação em PDF com folha timbrada via iframe sem bloqueios, Word com marca d'água e Excel.
9. **Segurança & Senhas:** Tela de login oficial, renovação de senhas em 3 etapas, gerador corporativo e botão de logout.
10. **Persistência Offline:** Sincronização automática em tempo real com `localStorage`.

---

## 📝 Histórico de Adequações (Versão 2.6.2)

- **Correção BUG-01:** Sincronização dinâmica de seleção de obras na gestão de tarefas.
- **Correção BUG-02:** Persistência de dados em `localStorage` com botão `Reset Demo` para restauração rápida.
- **Correção BUG-03:** Gráfico de Gantt baseado na matemática real de datas do calendário.
- **Correção BUG-04:** Impressão de PDF via *iframe* isolado para evitar bloqueios de pop-up.
- **Correção BUG-05:** Reatribuição automática de tarefas sob liderança de colaborador excluído para o Coordenador.
- **Correção BUG-06:** Estorno automático de horas de conclusão integral ao retroceder o percentual da frente.
- **Módulo de Senhas:** Gerador de senhas seguras (`generateSecurePassword`), visualizador de senhas com ícone de olho, renovação no perfil com validação da senha atual e confirmação, reset administrativo pelo Coordenador e Tela de Login corporativa com Logout.

---

**Responsabilidade Técnica:** Engº Murilo Miranda da Silva  
**Climapress Instalações de Sistemas de Ar Condicionado**
