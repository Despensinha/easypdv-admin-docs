---
title: Estoque
description: Controle de saldo e movimentações de estoque no Despensinha ERP.
sidebar:
  order: 5
---

O módulo de **Estoque** exibe o saldo atual de produtos por armazém e registra todas as movimentações de entrada e saída.

## Consulta de Saldo

Acesse **Suprimentos → Estoque** para visualizar o saldo de cada produto por armazém. Use os filtros para buscar por produto, categoria ou armazém.

## Conferência de Estoque

A conferência de estoque permite revisar a quantidade dos produtos e marcar os itens como conferidos.

Ao iniciar uma conferência, é possível filtrar os itens por:

| Filtro | Descrição |
|--------|------------|
| Todos | Exibe todos os itens disponíveis para conferência |
| 7 dias | Exibe itens com última conferência há até 7 dias |
| 15 dias | Exibe itens com última conferência há até 15 dias |
| 30 dias | Exibe itens com última conferência há até 30 dias |
| 60 dias | Exibe itens com última conferência há até 60 dias |
| 90 dias | Exibe itens com última conferência há até 90 dias |

Na lista da conferência, algumas colunas ficam visíveis apenas em telas maiores, como:

| Coluna | Exibição |
|--------|----------|
| Imagem | Oculta em telas menores que `md` |
| Situação | Oculta em telas menores que `md` |
| Qtd anterior | Oculta em telas menores que `sm` |

Nos botões de ação, o sistema adapta o texto para telas menores, mostrando apenas o ícone quando necessário.

## Movimentações

Cada operação que afeta o estoque gera uma movimentação registrada:

| Tipo | Origem |
|------|--------|
| Entrada | NF-e de Entrada, ajuste manual |
| Saída | NFC-e, NF-e de Saída, ajuste manual |
| Transferência | Movimentação entre armazéns |

## Armazéns

O sistema suporta múltiplos armazéns. Cada PDV é vinculado a um armazém específico de onde o estoque é baixado nas vendas.

## Alertas de Estoque Mínimo

Produtos com estoque abaixo do mínimo configurado são exibidos no dashboard e na listagem do estoque com alerta visual.