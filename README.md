# Arquitetura de Micro Serviços com Docker e Node.js

Este projeto cria uma arquitetura de micro serviços para uma aplicação de e-commerce utilizando Docker e Node.js. A aplicação inclui dois serviços principais: um serviço de produtos e um serviço de pedidos.

## Estrutura do Projeto

micro-servicos-ecommerce/
│
├── product-service/
│   ├── src/
│   │   └── server.js
│   ├── .gitignore
│   ├── Dockerfile
│   ├── package.json
│   └── package-lock.json
│
├── order-service/
│   ├── src/
│   │   └── server.js
│   ├── .gitignore
│   ├── Dockerfile
│   ├── package.json
│   └── package-lock.json
│
├── docker-compose.yml
└── README.md

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/micro-servicos-ecommerce.git
   cd micro-servicos-ecommerce

2.  Construa e inicie os serviços Docker:
    docker-compose up --build

3.  Acesse os serviços no navegador:
    Serviço de Produtos: http://localhost:3001/products
    Serviço de Pedidos: http://localhost:3002/orders
    