---
title: Cupons
description: Criação e gestão de cupons de desconto no Despensinha ERP.
sidebar:
  order: 6
---

Os **Cupons** permitem aplicar descontos em pedidos de venda e no PDV, com controle de validade, valor mínimo e quantidade de usos.

## Como Criar um Cupom

1. Acesse **Vendas → Cupons**
2. Clique em **Novo Cupom**
3. Defina:
   - Código do cupom
   - Tipo de desconto (percentual ou valor fixo)
   - Valor do desconto
   - Data de validade
   - Valor mínimo do pedido (opcional)
   - Limite de usos (opcional, mínimo de 1)
4. Salve

## Aplicação

Cupons são aplicados nos pedidos de venda pelo campo **Código do Cupom** na tela de pedido. O sistema valida automaticamente as condições (validade, valor mínimo e limite de usos).

## Regras do Limite de Usos

Quando preencher o **Limite de usos**, informe um valor igual ou maior que **1**. Se deixar em branco, o cupom não terá limite de usos definido.