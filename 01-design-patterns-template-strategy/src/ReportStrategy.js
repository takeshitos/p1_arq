
export default class ReportStrategy {
    format(cidades) {
        throw new Error('Este método deve ser implementado pelas subclasses');
    }
}

export class HTMLReportStrategy extends ReportStrategy {
    format(cidades) {
        let result = `
    <!DOCTYPE HTML>
    <html>
      <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <title>Relatório de Nomes de Cidades</title>
      </head>
      <body>
        <h1>Relatório de Nomes de Cidades</h1>
        <ul>
    `;

        for (let cidade of cidades) {
            result += '     <li>' + cidade['Nome'] + '</li>\n';
        }
        result += `
        </ul>
      </body>
    </html>`;

        return result;
    }
}

export class TXTReportStrategy extends ReportStrategy {
    format(cidades) {
        let result = `Relatório de Nomes de Cidades
  =============================\n`;

        for (let cidade of cidades) {
            result += '* ' + cidade['Nome'] + '\n';
        }

        return result;
    }
}
