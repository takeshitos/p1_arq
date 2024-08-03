import CidadesHTMLReport from './CidadesHTMLReporter.js';
import CidadesTXTReport from './CidadesTXTReporter.js';

class AbstractReportFactory {
  createHTMLReport() {
    throw new Error('Este método deve ser implementado pelas subclasses');
  }

  createTXTReport() {
    throw new Error('Este método deve ser implementado pelas subclasses');
  }
}

class SimpleReportFactory extends AbstractReportFactory {
  createHTMLReport() {
    return new CidadesHTMLReport();
  }

  createTXTReport() {
    return new CidadesTXTReport();
  }
}

class StyledReportFactory extends AbstractReportFactory {
  createHTMLReport() {
    const report = new CidadesHTMLReport();
    report.style = 'fancy';
    return report;
  }

  createTXTReport() {
    const report = new CidadesTXTReport();
    report.style = 'detailed';
    return report;
  }
}

export { AbstractReportFactory, SimpleReportFactory, StyledReportFactory };
