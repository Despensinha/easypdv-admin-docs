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
            { label: 'Setup Guide', slug: 'introducao/setup-guide' },
            { label: 'Login Google', slug: 'introducao/login-google' },
          ],
        },
        {
          label: 'Dashboard',
          items: [
            { label: 'Dashboard', slug: 'dashboard/dashboard' },
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
            { label: 'Listas de Preço', slug: 'cadastros/listas-de-preco' },
            { label: 'Convites', slug: 'cadastros/convites' },
          ],
        },
        {
          label: 'Vendas',
          items: [
            { label: 'Visão Geral', slug: 'vendas' },
            { label: 'Pedidos de Venda', slug: 'vendas/pedidos-de-venda' },
            { label: 'Planograma', slug: 'vendas/planograma' },
            { label: 'NF-e Saída', slug: 'vendas/nfe-saida' },
            { label: 'NFC-e', slug: 'vendas/nfce' },
            { label: 'Cupons', slug: 'vendas/cupons' },
            { label: 'Recibos Fiscais', slug: 'vendas/recibos-fiscais' },
            { label: 'Inutilização NFC-e', slug: 'vendas/inutilizacao-nfce' },
          ],
        },
        {
          label: 'Suprimentos',
          items: [
            { label: 'Visão Geral', slug: 'suprimentos' },
            { label: 'Pedidos de Compra', slug: 'suprimentos/pedidos-de-compra' },
            { label: 'Picklists', slug: 'suprimentos/picklists' },
            { label: 'NF-e Entrada', slug: 'suprimentos/nfe-entrada' },
            { label: 'Estoque', slug: 'suprimentos/estoque' },
            { label: 'Inventário', slug: 'suprimentos/inventario' },
            { label: 'Tarefas de Estoque', slug: 'suprimentos/tarefas-de-estoque' },
          ],
        },
        {
          label: 'Financeiro',
          items: [
            { label: 'Visão Geral', slug: 'financeiro' },
            {
              label: 'Contas',
              items: [
                { label: 'Contas a Pagar', slug: 'financeiro/contas-a-pagar' },
                { label: 'Contas a Receber', slug: 'financeiro/contas-a-receber' },
                { label: 'Competência', slug: 'financeiro/competencia' },
                { label: 'Fluxo de Caixa', slug: 'financeiro/fluxo-de-caixa' },
              ],
            },
            {
              label: 'Bancos',
              items: [
                { label: 'Contas Bancárias', slug: 'financeiro/contas-bancarias' },
                { label: 'Extratos Bancários', slug: 'financeiro/extratos-bancarios' },
              ],
            },
            {
              label: 'Configuração',
              items: [
                { label: 'Categorias Financeiras', slug: 'financeiro/categorias-financeiras' },
              ],
            },
          ],
        },
        {
          label: 'Espaço Gestor',
          items: [
            { label: 'Espaço do Gestor', slug: 'espaco-gestor/espaco-do-gestor' },
          ],
        },
        {
          label: 'Espaço Contador',
          items: [
            { label: 'Espaço do Contador', slug: 'espaco-contador/espaco-do-contador' },
          ],
        },
        {
          label: 'Gerenciador de Arquivos',
          items: [
            { label: 'Gerenciador de Arquivos', slug: 'gerenciador-de-arquivos/gerenciador-de-arquivos' },
          ],
        },
        {
          label: 'Notificações',
          items: [
            { label: 'Notificações', slug: 'notificacoes/notificacoes' },
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
