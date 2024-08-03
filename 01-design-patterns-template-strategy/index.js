// index.js
import { HTMLReportStrategy, TXTReportStrategy } from './src/ReportStrategy.js';
import CidadesReport from './src/CidadesReport.js';
import { FooterDecorator } from './src/ReportDecorator.js';
import { SimpleReportFactory, StyledReportFactory } from './src/ReportFactory.js';

const format = process.argv[2];
const factoryType = process.argv[3] || 'simple'; // Default to 'simple' if no argument is given

let factory;

if (factoryType === 'simple') {
  factory = new SimpleReportFactory();
} else if (factoryType === 'styled') {
  factory = new StyledReportFactory();
} else {
  throw new Error('Tipo de fábrica desconhecido');
}

try {
  let reporter;

  if (format === 'html') {
    reporter = factory.createHTMLReport();
  } else if (format === 'txt') {
    reporter = factory.createTXTReport();
  } else {
    throw new Error('Formato de relatório desconhecido');
  }

  // Adicionando o Decorator
  const decoratedReporter = new FooterDecorator(reporter);

  decoratedReporter.ler('./data/cidades-2.json');
  decoratedReporter.parse();
  const output = decoratedReporter.reportar();
  console.log(output);
} catch (error) {
  console.error(error.message);
}
