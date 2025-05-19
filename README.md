# CODIFICA---DESENVOLVEDOR-FULL-STACK-JR

## 📘 Lista de Exercícios - Codifica - Formação Desenvolvedor Full Stack JR

Este projeto contém uma lista de exercícios propostos pela formação **Codifica - Desenvolvedor Full Stack JR**. Os exercícios são voltados à prática de **JavaScript básico no terminal**, utilizando estruturas de controle, repetição e lógica condicional.

---

### ✅ Requisitos

Antes de começar, você precisa ter o seguinte instalado na sua máquina:

* [Node.js](https://nodejs.org) (versão recomendada: LTS 18+)
* Um editor de código (ex: VS Code)
* Terminal de linha de comando (cmd, PowerShell, Git Bash ou terminal integrado do VS Code)

---

### ⚙️ Como configurar o ambiente

1. **Crie uma pasta para o projeto:**

```bash
mkdir lista-exercicios-js
cd lista-exercicios-js
```

2. **Inicialize o projeto Node.js (opcional, mas recomendado):**

```bash
npm init -y
```

3. **Instale o pacote `prompt-sync` para ler dados do usuário via terminal:**

```bash
npm install prompt-sync
```

4. **Crie os arquivos dos exercícios:**

Cada exercício pode ser salvo como um arquivo separado, por exemplo:

```
ex01-par-impar.js
ex02-classificacao-idade.js
ex03-nota.js
...
ex15-fibonacci.js
```

---

### ▶️ Como executar os exercícios

No terminal, navegue até a pasta do projeto e execute um exercício com:

```bash
node nome-do-arquivo.js
```

Exemplo:

```bash
node ex01-par-impar.js
```

---

### 📋 Lista de Exercícios

1. **Par ou Ímpar:**
   Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando `if`.

2. **Classificação de Idade:**
   Classifica uma idade como criança, adolescente, adulto ou idoso usando `if-else`.

3. **Classificação de Nota:**
   Recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação" ou "Reprovado" com `if-else if`.

4. **Menu Interativo:**
   Crie um menu com 3 opções e implemente com `switch-case`.

5. **IMC:**
   Calcula o Índice de Massa Corporal e determina a categoria de peso usando `if-else`.

6. **Tipo de Triângulo:**
   Verifica se três lados formam um triângulo e identifica seu tipo (isósceles, escaleno ou equilátero).

7. **Preço das Maçãs:**
   Calcula o valor total da compra com base na quantidade de maçãs.

8. **Ordem Crescente:**
   Lê dois valores diferentes e os imprime em ordem crescente.

9. **Contagem Regressiva:**
   Mostra a contagem de 10 até 1 usando um `for`.

10. **Repetição de Número:**
    Lê um número inteiro e o imprime 10 vezes.

11. **Soma de 5 Números:**
    Solicita 5 números e mostra a soma total com `for`.

12. **Tabuada:**
    Exibe a tabuada de um número de 1 a 10 com `for`.

13. **Média de Decimais:**
    Recebe números decimais até que o usuário digite 0 e calcula a média.

14. **Fatorial:**
    Calcula o fatorial de um número com `for` ou `while`.

15. **Fibonacci:**
    Gera e imprime os 10 primeiros números da sequência de Fibonacci com `for`.

---

### 🧠 Dica

Sempre que for executar um exercício que usa `prompt-sync`, certifique-se de que você **instalou o pacote** com:

```bash
npm install prompt-sync
```

E no topo do arquivo, importe assim:

```javascript
const prompt = require('prompt-sync')();
```


