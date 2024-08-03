# Projeto 1 - Ricardo Takeshi Outi Miyamoto 2348144

### LINK DO PROJETO NO GITHUB
https://github.com/takeshitos/p1_arq


## Padrão de Projeto Criacional: Abstract Factory
###  Justificativa
O Abstract Factory é útil quando temos famílias de objetos relacionados ou dependentes que devem ser criados juntos. No caso, utilizei para criar relatórios que incluem não apenas o formato, mas também estilos adicionais ou funcionalidades específicas.

### Implementação
Criei fábrica abstrata que produza tanto o relatório HTML quanto o TXT, potencialmente com diferentes estilos ou cabeçalhos.

## Padrão de Projeto Estrutural: Decorator
### Justificativa
O padrão Decorator adiciona comportamentos ou responsabilidades a objetos dinamicamente. Utilizei para adicionar funcionalidades adicionais aos relatórios, como cabeçalhos ou rodapés extras, sem modificar as classes de relatório originais.

Implementação
Decorator que adiciona um rodapé aos relatórios.

## Padrão de Projeto Comportamental: State
### Justificativa
O padrão State permite que um objeto altere seu comportamento quando seu estado interno muda. Apliquei para gerenciar diferentes estados de um relatório, como "não lido", "parsing", e "pronto".

Implementação
Implementação de estados para o relatório que alteram como ele se comporta quando certas ações são executadas. Ler, parse, reportar.

# REFATORAÇÃO SOLID

### Single Responsibility Principle (SRP):
Cada classe agora tem uma responsabilidade única. Por exemplo, CidadesReport apenas lida com a leitura e parsing dos dados, enquanto as estratégias lidam com o formato do relatório.

### Open/Closed Principle (OCP):
As estratégias de relatório (HTMLReportStrategy e TXTReportStrategy) permitem que novos formatos sejam adicionados sem modificar as classes existentes, apenas estendendo ReportStrategy.

### Dependency Inversion Principle (DIP):
CidadesReport depende de abstrações (ReportStrategy), não de implementações concretas, permitindo a fácil intercambiabilidade das estratégias.

## Estrutura do Projeto

- `src/`: Contém o código-fonte do projeto.
- `data/`: Contém arquivos de dados, como `cidades-2.json`.
- `test/`: Contém scripts de teste.

## Executando os Testes

Os testes são realizados usando Mocha e Chai. Para garantir que as saídas dos relatórios estão corretas, siga as instruções abaixo.

### Passos para Executar os Testes

1. **Certifique-se de que todas as dependências estão instaladas**:

    Execute:

    ```sh
    npm install
    ```

2. **Execute os testes**:

    Execute o seguinte comando para rodar os testes definidos no arquivo `test/reportTest.js`:

    ```sh
    npm test
    ```

3. **Verifique a saída dos testes**:

    Após executar o comando acima, você verá a saída dos testes no console. Certifique-se de que todos os testes passem sem erros. Se algum teste falhar, o erro será exibido no console, indicando onde o problema pode estar.

## Estrutura do Teste

Os testes são definidos no arquivo `test/reportTest.js` e verificam o formato dos relatórios gerados. O script de teste:

- Verifica se o relatório HTML é gerado corretamente.
- Verifica se o relatório TXT é gerado corretamente.

Cada teste compara a saída gerada pelo sistema com a saída esperada.
