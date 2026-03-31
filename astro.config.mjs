// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Despensinha ERP - Docs',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Português',
          lang: 'pt-BR',
        },
      },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Despensinha' }],
      sidebar: [
        {
          label: 'Introdução',
          items: [
            { label: 'Visão Geral', slug: 'introducao' },
          ],
        },
        {
          label: 'Cadastros',
          items: [
            { label: 'Visão Geral', slug: 'cadastros' },
            { label: 'Clientes', slug: 'cadastros/clientes' },
            { label: 'Fornecedores', slug: 'cadastros/fornecedores' },
            { label: 'Funcionários', slug: 'cadastros/funcionarios' },
            { label: 'Comunidade', slug: 'cadastros/comunidade' },
            { label: 'Ponto de Venda', slug: 'cadastros/ponto-de-venda' },
          ],
        },
        {
          label: 'Vendas',
          items: [
            { label: 'Visão Geral', slug: 'vendas' },
            { label: 'Pedidos de Venda', slug: 'vendas/pedidos-de-venda' },
            { label: 'NF-e Saída', slug: 'vendas/nfe-saida' },
            { label: 'NFC-e', slug: 'vendas/nfce' },
            { label: 'Cupons', slug: 'vendas/cupons' },
          ],
        },
        {
          label: 'Suprimentos',
          items: [
            { label: 'Visão Geral', slug: 'suprimentos' },
            { label: 'Pedidos de Compra', slug: 'suprimentos/pedidos-de-compra' },
            { label: 'NF-e Entrada', slug: 'suprimentos/nfe-entrada' },
            { label: 'Estoque', slug: 'suprimentos/estoque' },
            { label: 'Inventário', slug: 'suprimentos/inventario' },
          ],
        },
        {
          label: 'Financeiro',
          items: [
            { label: 'Visão Geral', slug: 'financeiro' },
            { label: 'Contas a Pagar', slug: 'financeiro/contas-a-pagar' },
            { label: 'Contas a Receber', slug: 'financeiro/contas-a-receber' },
            { label: 'Fluxo de Caixa', slug: 'financeiro/fluxo-de-caixa' },
          ],
        },
        {
          label: 'Preferências',
          items: [
            { label: 'Configurações', slug: 'preferencias' },
          ],
        },
        {
          label: 'Relatórios',
          items: [
            { label: 'Visão Geral', slug: 'relatorios' },
          ],
        },
        {
          label: 'FAQ',
          items: [
            { label: 'Perguntas Frequentes', slug: 'faq' },
          ],
        },
      ],
    }),
  ],
});
