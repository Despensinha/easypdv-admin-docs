---
title: Cupons
description: Criação e gestão de cupons de desconto no Despensinha ERP.
sidebar:
  order: 6
---

Os **Planogramas** permitem organizar e visualizar a exposição dos produtos na loja, com controle por status e opção de impressão de etiquetas.

## Como Criar um Planograma

1. Acesse **Vendas → Planogramas**
2. Clique em **Novo Planograma**
3. Preencha os dados do planograma
4. Salve

## Aplicação

Os planogramas ficam disponíveis na lista de **Vendas → Planogramas**. Conforme o status, o sistema permite ações como:

- **Visualizar** os detalhes do planograma
- **Imprimir Etiquetas** dos produtos do planograma quando ele estiver ativo

## Impressão de Etiquetas

Para imprimir as etiquetas de um planograma:

1. Acesse **Vendas → Planogramas**
2. No planograma com status **Ativo**, clique em **Imprimir Etiquetas**
3. Escolha o que deseja imprimir:
   - **Todos os produtos**
   - **Produtos com alterações recentes**
4. Se escolher produtos com alterações recentes, selecione o período
5. Escolha o **modelo da etiqueta**
6. Defina a quantidade de **cópias**
7. Clique em **Imprimir**

O sistema busca os produtos do planograma, gera as etiquetas com o modelo escolhido e envia para impressão.

## Configurações da Impressão

| Campo | Descrição |
| --- | --- |
| Filtro | Define se serão impressos todos os produtos ou apenas os que tiveram alterações recentes |
| Período | Usado somente quando o filtro é de alterações recentes |
| Modelo da etiqueta | Define o layout que será usado na impressão |
| Cópias | Quantidade de etiquetas por produto |

## Observações

- Se nenhum produto for encontrado para o filtro selecionado, o sistema avisa na tela
- A opção **Imprimir Etiquetas** aparece apenas para planogramas com status **Ativo**
- O sistema valida se o planograma informado é válido antes de gerar as etiquetas