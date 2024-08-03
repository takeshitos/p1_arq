
class ReportState {
    constructor(reporter) {
      this.reporter = reporter;
    }
  
    ler() {
      throw new Error('Operação não permitida no estado atual');
    }
  
    parse() {
      throw new Error('Operação não permitida no estado atual');
    }
  
    reportar() {
      throw new Error('Operação não permitida no estado atual');
    }
  }
  
  class UnreadState extends ReportState {
    ler(caminho) {
      this.reporter.lerArquivo(caminho);
      this.reporter.state = new ParsedState(this.reporter);
    }
  }
  
  class ParsedState extends ReportState {
    parse() {
      this.reporter.parseArquivo();
      this.reporter.state = new ReadyState(this.reporter);
    }
  }
  
  class ReadyState extends ReportState {
    reportar() {
      return this.reporter.gerarRelatorio();
    }
  }
  
  export { UnreadState, ParsedState, ReadyState };
  