import { expect } from 'chai';
import { HTMLReportStrategy, TXTReportStrategy } from '../src/ReportStrategy.js';
import CidadesReport from '../src/CidadesReport.js';
import { FooterDecorator } from '../src/ReportDecorator.js';
import { SimpleReportFactory, StyledReportFactory } from '../src/ReportFactory.js';

const mockData = [
  { Nome: 'São Paulo' },
  { Nome: 'Rio de Janeiro' },
  { Nome: 'Curitiba' },
];

describe('Relatório de Cidades', function() {
  it('deve gerar um relatório HTML corretamente', function() {
    const factory = new SimpleReportFactory();
    const reporter = factory.createHTMLReport();
    reporter.cidades = mockData;
    const decoratedReporter = new FooterDecorator(reporter);

const expectedOutput = `<!DOCTYPE HTML>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Relatório de Nomes de Cidades</title>
  </head>
  <body>
    <h1>Relatório de Nomes de Cidades</h1>
    <ul>
      <li>São Paulo</li>
      <li>Rio de Janeiro</li>
      <li>Curitiba</li>
    </ul>
  </body>
</html>
-- Fim do Relatório --`;

    const output = decoratedReporter.reportar().trim();
    expect(output).to.equal(expectedOutput);
  });

  it('deve gerar um relatório TXT corretamente', function() {
    const factory = new StyledReportFactory();
    const reporter = factory.createTXTReport();
    reporter.cidades = mockData;
    const decoratedReporter = new FooterDecorator(reporter);

    const expectedOutput = `Relatório de Nomes de Cidades
=============================
* São Paulo
* Rio de Janeiro
* Curitiba

-- Fim do Relatório --`;

    const output = decoratedReporter.reportar().trim();
    expect(output).to.equal(expectedOutput);
  });
});
