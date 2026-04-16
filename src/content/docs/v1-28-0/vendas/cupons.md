---
title: Cupons
description: Criação e gestão de cupons de desconto no Despensinha ERP.
sidebar:
  order: 6
---

Os **Cupons** permitem aplicar descontos em pedidos de venda e no PDV, com controle de validade, valor mínimo e quantidade de usos.

As **Promoções** permitem criar descontos automáticos para produtos, categorias ou marcas, com regras de prioridade, acumulação, período de validade e limite de uso.

## Como Criar um Cupom

1. Acesse **Vendas → Cupons**
2. Clique em **Novo Cupom**
3. Defina:
   - Código do cupom
   - Tipo de desconto (percentual ou valor fixo)
   - Valor do desconto
   - Data de validade
   - Valor mínimo do pedido (opcional)
   - Limite de usos (opcional)
4. Salve

## Como Criar uma Promoção

1. Acesse **Vendas → Promoções**
2. Clique em **Nova Promoção**
3. Defina:
   - Nome da promoção
   - Texto de exibição
   - Tipo de desconto
   - Valor do desconto
   - Valor máximo de desconto
   - Valor mínimo de compra
   - Prioridade
   - Se a promoção pode ser acumulada
   - Limites de uso
   - Itens da promoção
   - Pontos de venda participantes
4. Salve

## Aplicação

Cupons são aplicados nos pedidos de venda pelo campo **Código do Cupom** na tela de pedido. O sistema valida automaticamente as condições (validade, valor mínimo e limite de usos).

As promoções são aplicadas automaticamente conforme as regras cadastradas, levando em conta os itens da promoção, a situação, o período, a prioridade e a possibilidade de acumulação.

## Lista de Promoções

Na tela de **Promoções**, você pode:

- Visualizar as promoções cadastradas
- Filtrar por período, situação e tipo de desconto
- Criar uma nova promoção
- Editar uma promoção
- Remover uma promoção
- Ativar ou desativar promoções
- Ver os detalhes completos de uma promoção

## Campos da Promoção

| Campo | Descrição |
|---|---|
| Nome | Nome interno da promoção |
| Texto de exibição | Texto mostrado para o cliente |
| Situação | Indica se a promoção está ativa ou inativa |
| Tipo de desconto | Desconto por porcentagem ou por valor fixo |
| Valor do desconto | Valor aplicado na promoção |
| Valor máximo de desconto | Limite máximo do desconto gerado |
| Valor mínimo de compra | Valor mínimo necessário para usar a promoção |
| Prioridade | Define a ordem de aplicação das promoções |
| Acumulável | Permite somar com outras promoções |
| Limite por usuário | Quantas vezes cada usuário pode usar |
| Limite total de usos | Quantidade total permitida |
| Orçamento limite | Valor total máximo permitido para a promoção |
| Itens da promoção | Produtos, categorias ou marcas incluídos |
| Pontos de venda | Lojas ou unidades onde a promoção vale |