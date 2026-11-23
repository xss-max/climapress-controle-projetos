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

## 👥 Acesso Coordenador Principal

| Perfil | Nome do Usuário | E-mail de Login | Senha Padrão | Escopo de Acesso |
|:---|:---|:---|:---:|:---|
| **Coordenador** | Engº Murilo Miranda da Silva | `murilo.silva@climapress.com.br` | `123` | Acesso pleno a todas as abas, gestão de obras, tarefas, equipe, reset de senhas e auditoria. |

---

## 📦 Funcionalidades Principais

1. **Dashboard Executivo:** Raio-X físico-financeiro consolidado de todas as obras ou por empreendimento específico.
2. **Minhas Atividades:** Visão operacional de tarefas atribuídas com controle conjunto de horas por equipe.
3. **Gestão de Obras & Pacote Padrão de Tarefas:** Cadastro de novas obras com **lançamento automático das 21 tarefas técnicas e de suprimentos oficiais da Climapress**.
4. **Gestão de Tarefas:** Planejamento por fases (Projetos, Suprimentos, Campo, Comissionamento, Entrega) e cálculo de carga horária (10h/dia).
5. **Apontamento de Horas:** Banco de horas com histórico detalhado e cálculo automático de saldo na conclusão (100%).
6. **Matriz de Alocação & Convites com E-mail:** Gestão da equipe técnica com convites rápidos, disparo automático de e-mail corporativo com credenciais e link oficial (`https://climapress-controle-projetos.vercel.app/`).
7. **Cronograma de Gantt (ISO):** Linha do tempo proporcional em datas reais com suporte a plotagem em A4, A3, A2, A1 e A0.
8. **Relatórios Oficiais:** Exportação em PDF com folha timbrada via iframe sem bloqueios, Word com marca d'água e Excel.
9. **Segurança & Senhas:** Tela de login oficial, renovação de senhas em 3 etapas, gerador corporativo e botão de logout.
10. **Persistência Offline:** Sincronização automática em tempo real com `localStorage`.

---

## 📝 Histórico de Adequações (Versão 2.7.0 - Produção Oficial)

- **Base de Dados Limpa de Produção:** Remoção de todas as obras, atividades e apontamentos fictícios de teste anteriores.
- **Lançamento Automático de Tarefas Padrões da Climapress:** Ao cadastrar qualquer nova obra, o sistema cria automaticamente o pacote com as 21 tarefas técnicas oficiais (Projetos de Dutos, Hidráulica, Difusão, Elétrica, Automação; Solicitações de Ventiladores, Chillers, Bombas, Fancoil/AHU, Fancoletes, VRF, Válvulas, QE, Variadores, Tubulação/Dutos com isolamento; Start-up, Comissionamento/TAB, As Built e Data Book).
- **Link Oficial de Produção nos Convites:** Fixado o endereço `https://climapress-controle-projetos.vercel.app/`.

---

**Responsabilidade Técnica:** Engº Murilo Miranda da Silva  
**Climapress Instalações de Sistemas de Ar Condicionado**
