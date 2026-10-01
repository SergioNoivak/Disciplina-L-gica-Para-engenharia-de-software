# Lógica para Engenharia de Software (ESW418)

Repositório completo de material didático, aulas, códigos práticos, avaliações e controle acadêmico da disciplina **Lógica para Engenharia de Software** do curso de Engenharia de Software da **Universidade de Rio Verde (UniRV)** — Semestre **2026/1**.

---

## 📌 Visão Geral

A disciplina aborda os fundamentos matemáticos e lógicos essenciais para o desenvolvimento de software robusto, análise de algoritmos e modelagem de sistemas. O material combina teoria formal (escrita em LaTeX e apresentações interativas) com verificações computacionais práticas em **JavaScript (Node.js)**.

---

## 📁 Estrutura do Repositório

```text
.
├── apostila/               # Apostila completa e listas de exercícios escritas em LaTeX
│   ├── apostila.tex        # Fonte principal da apostila
│   ├── apostila.pdf        # Apostila compilada em PDF
│   ├── lista.tex / .pdf    # Lista de exercícios teóricos e práticos
│   └── ...                 # Imagens, diagramas Graphviz (.dot) e PlantUML (.puml)
├── aulas/                  # Conteúdo das aulas teóricas divididas por tópicos
│   ├── 1. Axiomas, Teoremas, Definições, Lemas e Corolários
│   ├── 2. Conjuntos (Parte 1 e Parte 2)
│   ├── 4. Relações e Propriedades
│   ├── 5. Análise Combinatória
│   ├── 6. Binômio de Newton
│   ├── 7. Álgebra Booleana
│   ├── 8. Resolução de Exercícios de Álgebra de Boole
│   ├── 9. Revisão de Binômio e Álgebra
│   ├── 10. Funções / Introdução à Análise de Algoritmos (Notação Big-O)
│   └── 11-13. Grafos, Subgrafos, Conectividade, Isomorfismo e Ordenação Topológica
├── programacao_relacoes/   # Algoritmos em Node.js demonstrando propriedades de Relações
├── teste/                  # Scripts e testes práticos em JavaScript
├── inicio_semestre/        # Documentação institucional (Programa da Disciplina e Cronograma ESW418)
├── provas/                 # Avaliações organizadas por etapas (N1, N2, N3)
├── livro/                  # Livros e materiais didáticos de referência
├── aulas_editaveis.zip     # Pacote com as apresentações editáveis da disciplina
└── otimo.pptx              # Apresentação complementar
```

---

## 📚 Tópicos Cobertos

1. **Fundamentos da Lógica Teórica e Matemática**
   - Axiomas, Teoremas, Lemas, Corolários e Definições formais.
2. **Teoria dos Conjuntos**
   - Operações com conjuntos, produtos cartesianos e propriedades.
3. **Relações e Suas Propriedades**
   - Domínio, imagem, matrizes de relação.
   - Propriedades: Reflexiva, Irreflexiva, Simétrica, Antissimétrica, Transitiva.
   - Relações de Equivalência e Ordens Parciais (Posets).
4. **Análise Combinatória e Binômio de Newton**
   - Arranjos, Permutações, Combinações e Aplicações em Algoritmos.
5. **Álgebra Booleana e Circuitos Lógicos**
   - Operadores lógicos, Simplificação de expressões, Tabelas Verdade.
6. **Introdução à Análise de Algoritmos**
   - Complexidade computacional e Notação Big-O (\(\mathcal{O}\)).
7. **Teoria dos Grafos**
   - Grafos orientados e não-orientados, componentes conexas, isomorfismo.
   - Caminhos/Ciclos Hamiltonianos e Eulerianos.
   - Ordenação Topológica e Algoritmos de Busca.

---

## 💻 Prática e Programação

Os diretórios [`programacao_relacoes`](file:///home/sergio/Documentos/unirv/2026-01/L%C3%B3gica%20para%20SW/programacao_relacoes) e [`teste`](file:///home/sergio/Documentos/unirv/2026-01/L%C3%B3gica%20para%20SW/teste) possuem algoritmos implementados em **JavaScript (Node.js)** para testar na prática os conceitos lógicos e relacionais.

### Como Executar os Scripts:

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu sistema.
2. Navegue até a pasta desejada:
   ```bash
   cd programacao_relacoes
   ```
3. Instale as dependências (se houver):
   ```bash
   npm install
   ```
4. Execute o script de teste:
   ```bash
   node 1.js
   ```

---

## 📄 Compilação da Apostila (LaTeX)

Para compilar o documento principal da apostila em PDF a partir do código fonte LaTeX:

```bash
cd apostila
latexmk -pdf apostila.tex
```

---

## 🏫 Informações Institucionais

- **Instituição:** Universidade de Rio Verde (UniRV)
- **Curso:** Engenharia de Software
- **Disciplina:** Lógica para Engenharia de Software (ESW418)
- **Período:** Semestre 2026/1
