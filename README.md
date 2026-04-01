# 💰 Sistema de Gestão Financeira V1

Aplicação Web de controle financeiro pessoal integrada ao **Google Sheets** via **Google Apps Script**. O sistema permite o lançamento rápido de despesas e receitas diretamente pelo navegador (Mobile First), com atualização automática de saldo.

## 🚀 Funcionalidades
- **Lançamento Rápido:** Interface otimizada para smartphones.
- **Categorização Inteligente:** Separação entre Contas de Consumo, Faturas e Títulos.
- **Dashboard em Tempo Real:** Visualização de Ganhos e Sobra no topo do app.
- **Banco de Dados em Nuvem:** Todos os dados são salvos em uma planilha do Google Sheets.
- **Backup Automático:** Função integrada para envio de relatórios semanais por e-mail.

## 🛠️ Tecnologias Utilizadas
- **Frontend:** HTML5, CSS3 (Bootstrap 5), JavaScript.
- **Backend:** Google Apps Script (JavaScript/V8 Engine).
- **Database:** Google Sheets API.

## 📈 Estrutura da Planilha
O sistema utiliza uma aba chamada `Lancamentos` com as colunas:
`ID | Data_Hora | Categoria | Descricao | Valor | Meio_Pagamento | Mes_Ref | Tipo`
