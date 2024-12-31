### 🚀 Desafio de Projeto: Criando um Validador de Bandeiras de Cartão de Crédito com o GitHub Copilot! 💳✨
 
Tive a oportunidade de participar do Bootcamp Microsoft AI for Tech, onde aprendi a utilizar a IA Generativa para desenvolver soluções inovadoras. Sob a orientação do especialista Felipe Aguiar, um verdadeiro mentor na área, estou aprimorando minhas habilidades full-stack básico e explorando o potencial do GitHub Copilot.
 
Essa experiência tem sido incrível e cheia de aprendizados! 💡💻
- 

### **Estrutura de diretórios/arquivos:**

Pastas/Arquivos:

-   GitHub Copilot
    
    -   assets
        -   base.png
    -   src
        -   index.js
    
    [readme.md](http://readme.md)

### Gerar o código para o arquivo index.js

**Script GitHUb Copilot:** create a function to validade a number credit card with base image ‘base.png’ to discover the field ‘Bandeira’

**Resultado:**

Gerado o código para o arquivo index.js com finalidade de validar as bandeiras:

-   visa
-   mastercard
-   amex
-   discover
-   diners
-   jcb

O código não gerou a validação para as bandeiras:

-   Elo
-   Hipercard

**Descrição do código:**

→ Este código inclui duas funções:

-   `validateCreditCardNumber`: Valida o número do cartão de crédito usando o algoritmo Luhn.
-   `getCardIssuer`: Determina o emissor do cartão com base no padrão de número do cartão.

A variável `cardNumber` pode ser substituída pelo número real do cartão que você deseja validar e identificar.

**Teste de validação:**

-   **visa: válido**
-   **mastercard: válido**
-   amex: inválido
-   **discover: válido**
-   diners: inválido
-   **jcb: válido**
