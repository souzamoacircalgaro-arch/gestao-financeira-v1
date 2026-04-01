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

    return { status: "sucesso", msg: "Lançamento #" + id + " registrado!" };
  } catch (e) {
    return { status: "erro", msg: "Erro: " + e.message };
  } finally {
    LOCK.releaseLock();
  }
}
