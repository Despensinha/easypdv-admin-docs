---
title: Cupons
description: Criação e gestão de cupons de desconto no Despensinha ERP.
sidebar:
  order: 6
---

Os **Cupons** permitem aplicar descontos em pedidos de venda e no PDV, com controle de validade, valor mínimo, quantidade de usos e também frete grátis.

## Como Criar um Cupom

1. Acesse **Vendas → Cupons**
2. Clique em **Novo Cupom**
3. Defina:
   - Nome do cupom
   - Código do cupom
   - Tipo de desconto
   - Valor do desconto
   - Data de validade
   - Valor mínimo do pedido (opcional)
   - Limite de usos (opcional)
4. Salve

## Tipos de Cupom

| Tipo | Descrição |
|---|---|
| Porcentagem | Aplica um desconto em percentual sobre o pedido |
| Valor fixo | Aplica um valor fixo de desconto |
| Frete grátis | Remove o valor do frete do pedido |

## Regras do Código

O código do cupom precisa seguir estas regras:

| Regra | Valor |
|---|---|
| Tamanho mínimo | 4 caracteres |
| Tamanho máximo | 20 caracteres |

## Aplicação

Cupons são aplicados nos pedidos de venda pelo campo **Código do Cupom** na tela de pedido. O sistema valida automaticamente as condições do cupom, como validade, valor mínimo e limite de usos. Quando o cupom for do tipo **Frete grátis**, o sistema aplica a condição correspondente no pedido.