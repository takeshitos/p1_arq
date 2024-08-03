
export default class ReportDecorator {
    constructor(report) {
      this.report = report;
    }
  
    ler(caminho) {
      this.report.ler(caminho);
    }
  
    parse() {
      this.report.parse();
    }
  
    reportar() {
      return this.report.reportar();
    }
  }
  
  export class FooterDecorator extends ReportDecorator {
    reportar() {
      const content = super.reportar();
      return `${content}\n-- Fim do Relatório --`;
    }
  }
  