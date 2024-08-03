import * as fs from 'node:fs';
import { UnreadState, ParsedState, ReadyState } from './ReportState.js';

export default class CidadesReport {
  constructor(strategy) {
    this.strategy = strategy;
    this.state = new UnreadState(this);
    this.cidades = null;
  }

  lerArquivo(caminho) {
    this.cidades = fs.readFileSync(caminho, 'utf-8');
  }

  parseArquivo() {
    this.cidades = JSON.parse(this.cidades);
  }

  gerarRelatorio() {
    return this.strategy.format(this.cidades);
  }

  // Métodos que alteram o estado do relatório
  ler(caminho) {
    this.state.ler(caminho);
  }

  parse() {
    this.state.parse();
  }

  reportar() {
    return this.state.reportar();
  }
}
