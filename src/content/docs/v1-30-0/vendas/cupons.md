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
   - Limite de usos (opcional)
4. Salve

## Aplicação

Cupons são aplicados nos pedidos de venda pelo campo **Código do Cupom** na tela de pedido. O sistema valida automaticamente as condições configuradas, como validade, valor mínimo e limite de usos.

## Planogramas

Nos **Planogramas**, agora é possível imprimir etiquetas direto da lista de planogramas ativos.

### Como imprimir etiquetas

1. Acesse **Vendas → Planogramas**
2. Na linha do planograma, clique em **Imprimir Etiquetas**
3. Escolha o que deseja imprimir:
   - **Todos**
   - **Alterados**
   - **Sem etiqueta**
4. Se escolher **Alterados**, também é possível filtrar por:
   - **Últimas 24h**
   - **Últimos 7 dias**
   - **Desde última impressão**
5. Selecione o **modelo da etiqueta**
6. Informe a quantidade de **cópias**
7. Clique em **Imprimir**

### Observações

| Campo | Descrição |
|---|---|
| Todos | Imprime etiquetas de todos os produtos do planograma |
| Alterados | Imprime apenas produtos alterados dentro do período escolhido |
| Sem etiqueta | Imprime somente produtos que ainda não têm etiqueta |
| Modelo da etiqueta | Define o layout usado na impressão |
| Cópias | Quantidade de etiquetas por produto |

Se não houver produtos para o filtro selecionado, o sistema avisa e não gera a impressão.