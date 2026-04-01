# 💰 Sistema de Gestão Financeira V1 - Souza Moacir

Aplicação Web de alta performance desenvolvida para controle financeiro pessoal, integrada ao **Google Sheets** via **Google Apps Script**. O sistema oferece uma interface *Mobile-First* moderna para lançamentos rápidos e acompanhamento de saldo em tempo real.

## 🚀 Diferenciais do Projeto
- **Interface Moderna (UI/UX):** Design limpo com dashboard de Ganhos e Sobra Total no topo.
- **Categorização Financeira:** Separação inteligente entre Contas de Consumo, Faturas e Títulos de Crédito.
- **Meios de Pagamento:** Suporte para PIX, Débito, Crédito, Dinheiro e Depósito.
- **Segurança de Dados:** Processamento via Google V8 Engine com travas de escrita (LockService) para evitar corrupção de dados.
- **Backup Automático:** Função integrada para envio de relatórios semanais em PDF por e-mail.

## 🛠️ Tecnologias Utilizadas
- **Frontend:** HTML5, CSS3 (Bootstrap Custom), JavaScript.
- **Backend:** Google Apps Script (Server-side JavaScript).
- **Banco de Dados:** Google Sheets API.

## 📊 Estrutura do Banco de Dados
Os dados são organizados cronologicamente na aba `Lancamentos` com as colunas:
`ID | Data_Hora | Categoria | Descricao | Valor | Meio_Pagamento | Mes_Ref | Tipo`

## 🔗 Demonstração
Acesse o aplicativo funcional através do link abaixo:
[Abrir Aplicativo Financeiro](https://google.com)
