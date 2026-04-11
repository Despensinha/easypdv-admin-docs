---
title: "modals"
description: "Documentacao do modulo modals no Despensinha ERP."
sidebar:
  order: 99
---

## Modais

Esta seção documenta as mudanças relacionadas aos modais usados na impressão de etiquetas.

## Visão geral

O modal de impressão de etiquetas foi atualizado para usar o novo tipo de dados `TagProductDto` no lugar de `TagProductData`.

Essa mudança afeta a forma como a lista de produtos é recebida pelo modal, mas não altera o comportamento visual ou a experiência de uso.

## O que mudou

Antes, o modal recebia os produtos com o tipo:

| Tipo antigo | Tipo novo |
|---|---|
| `TagProductData[]` | `TagProductDto[]` |

Agora, o componente trabalha com o DTO oficial usado na estrutura atual do sistema.

## Impacto na tela

O modal continua com a mesma função:

- exibir a impressão de etiquetas
- receber a lista de produtos selecionados
- permitir fechar o modal
- gerar a impressão usando o template escolhido

A diferença está apenas no tipo de dados esperado na propriedade `products`.

## Estrutura do componente

### `TagPrintModal`

| Campo | Tipo | Descrição |
|---|---|---|
| `show` | `boolean` | Controla se o modal fica aberto ou fechado |
| `products` | `TagProductDto[]` | Lista de produtos que serão usados na impressão |
| `onClose` | `() => void` | Função chamada ao fechar o modal |

## Novo tipo esperado

O modal agora recebe uma lista de `TagProductDto`.

### Exemplo de uso

```tsx
<TagPrintModal
  show={showModal}
  products={produtosSelecionados}
  onClose={handleClose}
/>
```

## Observações importantes

- O nome da propriedade `products` não mudou.
- Apenas o tipo dos itens da lista foi atualizado.
- Se você estiver montando os dados manualmente antes de abrir o modal, verifique se eles estão no formato de `TagProductDto`.
- Essa mudança ajuda a manter o código alinhado com os dados usados pelo editor de etiquetas.

## Resumo da alteração

| Item | Antes | Depois |
|---|---|---|
| Tipo de produtos do modal | `TagProductData[]` | `TagProductDto[]` |
| Comportamento da tela | Sem mudança | Sem mudança |
| Finalidade | Impressão de etiquetas | Impressão de etiquetas |

## Quando usar

Use esse modal sempre que for necessário imprimir etiquetas com base em uma lista de produtos já selecionados no sistema.

Se o fluxo da tela estiver ligado ao editor de etiquetas, prefira passar dados no formato `TagProductDto` para evitar incompatibilidades.