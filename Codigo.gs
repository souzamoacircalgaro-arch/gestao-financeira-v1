function salvarDados(dados) {
  const LOCK = LockService.getScriptLock();
  try {
    LOCK.waitLock(10000); 
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("Lancamentos");
    const dataAtual = new Date();
    const id = Utilities.formatDate(dataAtual, "GMT-3", "yyyyMMddHHmmss");
    
    // Define o tipo: Somente 'RECEBIMENTO' é Receita. Faturas e outros são Gastos.
    const tipoFinal = (dados.categoria === "RECEBIMENTO") ? "Receita" : "Gasto";

    sheet.appendRow([
      id,
      dataAtual,
      dados.categoria,
      dados.descricao.toUpperCase(),
      parseFloat(dados.valor),
      dados.meioPagamento,
      dados.mesRef,
      tipoFinal
    ]);

    return { status: "sucesso", msg: "Lançamento #" + id + " registrado como " + tipoFinal + "!" };
  } catch (e) {
    return { status: "erro", msg: "Erro: " + e.message };
  } finally {
    LOCK.releaseLock();
  }
}
