function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Fintech Souza Moacir')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function salvarDados(dados) {
  const LOCK = LockService.getScriptLock();
  try {
    LOCK.waitLock(10000); 
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("Lancamentos");

    const dataAtual = new Date();
    const id = Utilities.formatDate(dataAtual, "GMT-3", "yyyyMMddHHmmss");
    
    sheet.appendRow([
      id,
      dataAtual,
      dados.categoria,
      dados.descricao.toUpperCase(),
      parseFloat(dados.valor),
      dados.meioPagamento,
      dados.mesRef,
      dados.categoria === "RECEBIMENTO" ? "Receita" : "Gasto"
    ]);

    return { status: "sucesso", msg: "Lançamento #" + id + " salvo com sucesso!" };
  } catch (e) {
    return { status: "erro", msg: "Erro técnico: " + e.message };
  } finally {
    LOCK.releaseLock();
  }
}

function carregarDashboard() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Lancamentos");
  if (!sheet || sheet.getLastRow() < 2) return { receita: 0, gasto: 0, sobra: 0 };

  const valores = sheet.getDataRange().getValues();
  let receita = 0, gasto = 0;

  for (let i = 1; i < valores.length; i++) {
    let v = parseFloat(valores[i][4]) || 0; // Coluna E (Valor)
    let t = valores[i][7];                 // Coluna H (Tipo)
    t === "Receita" ? receita += v : gasto += v;
  }

  return {
    receita: receita.toFixed(2),
    gasto: gasto.toFixed(2),
    sobra: (receita - gasto).toFixed(2)
  };
}
