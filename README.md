# TORRE-2

## Sobre o Projeto

Este projeto consiste em um jogo interativo de destruição tática bidimensional, baseado na mecânica de tiro ao alvo e colisão de corpos rígidos. A aplicação foi desenvolvida utilizando HTML, CSS e a biblioteca **p5.js**, integrando o motor de física **Matter.js** para gerenciar a gravidade, restrições elásticas e a destruição de estruturas em tempo real.

O cenário apresenta uma pirâmide ou torre composta por múltiplos blocos dinâmicos empilhados sobre plataformas estáveis. O jogador utiliza um estilingue físico para arremessar um projétil poligonal contra a estrutura; ao serem atingidos, os blocos sofrem com a transferência de impacto, caem sob o efeito da gravidade e, após atingirem um determinado limite ou velocidade de queda, desaparecem gradualmente (efeito de fade-out) da simulação.

---

## Funcionalidades

* Mecânica de mira e disparo de projétil utilizando restrição elástica ajustável (`SlingShot.js`).
* Simulação física realista de equilíbrio, atrito e colisão em cadeia utilizando a engine `Matter.js`.
* Estrutura de pirâmide modular gerada dinamicamente através de blocos individuais baseados em classes (`Block.js`).
* Sistema de pontuação ou remoção automatizada de blocos quando a sua integridade física cai abaixo de um limite estabelecido.
* Renderização limpa vinculando sprites customizados ao polígono de ataque (`polygon.png`) e aos alvos (`block.png`).

---

## Tecnologias Utilizadas

* **HTML5**
* **CSS3**
* **p5.js** (e extensões: p5.dom, p5.play, p5.sound)
* **Matter.js** (Engine de física 2D)

---

## Objetivo

O principal objetivo deste projeto é aprofundar os conceitos de Programação Orientada a Objetos (POO) e manipulação do canal Alpha (transparência) em engines de física 2D. O foco está em criar pilhas estáveis de corpos rígidos e aplicar lógica condicional para monitorar o estado individual de cada bloco, gerenciando o ciclo de vida do objeto na tela (remoção do mundo físico e efeito visual de sumiço).

---

## Aprendizados

Durante o desenvolvimento deste projeto, foram aplicados conceitos como:

* Implementação de restrições do tipo estilingue (`Matter.Constraint`) com detecção de liberação via eventos do mouse.
* Controle e decaimento gradual da propriedade de transparência (`tint()` ou canais RGBA do p5.js) para criar o efeito visual dos blocos sumindo após a queda.
* Remoção segura de corpos rígidos do motor físico (`World.remove`) para otimização de memória e performance da simulação.
* Construção de layouts estáticos e elevados (`Stand.js` e `Ground.js`) para suportar pilhas de corpos com atrito calibrado.
* Organização modular e estruturada separando bibliotecas de terceiros (`libraries/`) e lógicas de componentes do jogo (`scripts/`).

---

## Como Executar

1. Clone este repositório:
```bash
git clone [https://github.com/seu-usuario/TORRE-2.git](https://github.com/seu-usuario/TORRE-2.git)
```

2. Acesse a pasta do projeto:

```bash
cd TORRE-2
```

3. Abra o arquivo index.html em seu navegador de preferência, puxe o polígono no estilingue e mire na torre de blocos para derrubá-los.

---

## Estrutura do Projeto

```text
TORRE-2/
│
├── assets\img/
│   ├── block.png
│   └── polygon.png
│
├── libraries/
│   ├── matter.js
│   ├── p5.dom.min.js
│   ├── p5.js
│   ├── p5.play.js
│   └── p5.sound.min.js
│
├── scripts/
│   ├── Block.js
│   ├── Ground.js
│   ├── sketch.js
│   ├── SlingShot.js
│   └── Stand.js
│
├── style/
│   └── style.css
│
├── index.html
└── README.md
```
---

## Licença
Este projeto foi desenvolvido exclusivamente para fins educacionais e de aprendizado.

Desenvolvido como prática de desenvolvimento de jogos digitais e destruição física procedural, criando uma simulação de estilingue contra blocos com p5.js e Matter.js.
