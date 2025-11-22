// This is a mock database used to simplify parts of the app not
// relevant to the demo. In a real app, this data would live in
// a relational database like PostgreSQL or MySQL, accessed through
// a database client or ORM.

export type Product = {
  id: string;
  name: string;
  image: string;
  category: string;
  price: number;
  stock: number;
  minStock: number;
  sizes: string[];
  supplier: string;
};

export type Section = {
  id: string;
  name: string;
  slug: string;
  categories: string[];
};

export type Category = {
  id: string;
  name: string;
  section: string;
  slug: string;
  products: string[];
};

export type Demo = {
  slug: string;
  name: string;
  nav_title?: string;
  description: string;
};

export type DemoCategory = { name: string; items: Demo[] };

const sections: Section[] = [
  { id: '1', name: 'Roupas Femininas', slug: 'feminino', categories: ['1', '2', '3'] },
  {
    id: '2',
    name: 'Roupas Masculinas',
    slug: 'masculino',
    categories: ['4', '5'],
  },
  { id: '3', name: 'Acessórios', slug: 'acessorios', categories: ['6'] },
];

const categories: Category[] = [
  { id: '1', name: 'Blusas', slug: 'blusas', section: '1', products: ['1'] },
  { id: '2', name: 'Vestidos', slug: 'vestidos', section: '1', products: ['2'] },
  { id: '3', name: 'Calças', slug: 'calcas', section: '1', products: ['3'] },
  { id: '4', name: 'Camisas', slug: 'camisas', section: '2', products: ['4', '5'] },
  { id: '5', name: 'Bermudas', slug: 'bermudas', section: '2', products: ['6'] },
  { id: '6', name: 'Bolsas', slug: 'bolsas', section: '3', products: ['7', '8', '9'] },
];

const products: Product[] = [
  { 
    id: '1', 
    name: 'Blusa Floral Plus Size', 
    image: 'top.png', 
    category: '1', 
    price: 89.90,
    stock: 15,
    minStock: 5,
    sizes: ['GG', 'XG', 'XXG'],
    supplier: 'Fornecedor A'
  },
  { 
    id: '2', 
    name: 'Vestido Longo Elegante', 
    image: 'shorts.png', 
    category: '2', 
    price: 159.90,
    stock: 3,
    minStock: 5,
    sizes: ['GG', 'XG', 'XXG', 'XXXG'],
    supplier: 'Fornecedor B'
  },
  { 
    id: '3', 
    name: 'Calça Jeans Plus Size', 
    image: 'shoes.png', 
    category: '3', 
    price: 129.90,
    stock: 22,
    minStock: 10,
    sizes: ['50', '52', '54', '56'],
    supplier: 'Fornecedor A'
  },
  { 
    id: '4', 
    name: 'Camisa Social Masculina', 
    image: 'phone.png', 
    category: '4', 
    price: 99.90,
    stock: 8,
    minStock: 5,
    sizes: ['GG', 'XG', 'XXG'],
    supplier: 'Fornecedor C'
  },
  {
    id: '5',
    name: 'Camisa Polo Plus Size',
    image: 'laptop.png',
    category: '4',
    price: 79.90,
    stock: 18,
    minStock: 8,
    sizes: ['GG', 'XG', 'XXG'],
    supplier: 'Fornecedor C'
  },
  {
    id: '6',
    name: 'Bermuda Sarja Masculina',
    image: 'tablet.png',
    category: '5',
    price: 89.90,
    stock: 12,
    minStock: 6,
    sizes: ['50', '52', '54', '56', '58'],
    supplier: 'Fornecedor B'
  },
  {
    id: '7',
    name: 'Bolsa Tiracolo Feminina',
    image: 'balls.png',
    category: '6',
    price: 119.90,
    stock: 25,
    minStock: 10,
    sizes: ['Único'],
    supplier: 'Fornecedor D'
  },
  {
    id: '8',
    name: 'Bolsa Grande Executiva',
    image: 'weights.png',
    category: '6',
    price: 149.90,
    stock: 7,
    minStock: 5,
    sizes: ['Único'],
    supplier: 'Fornecedor D'
  },
  { 
    id: '9', 
    name: 'Bolsa Casual Plus', 
    image: 'gloves.png', 
    category: '6', 
    price: 89.90,
    stock: 2,
    minStock: 5,
    sizes: ['Único'],
    supplier: 'Fornecedor D'
  },
];

const demos = [
  {
    name: 'Gestão',
    items: [
      {
        slug: 'layouts',
        name: 'Produtos',
        description: 'Visualize e gerencie o catálogo de produtos',
      },
      {
        slug: 'loading',
        name: 'Estoque',
        description: 'Controle de inventário e alertas de estoque baixo',
      },
      {
        slug: 'context',
        name: 'Comissões',
        description: 'Acompanhe comissões de vendas e relatórios',
      },
    ],
  },
  {
    name: 'Recursos Técnicos (Next.js)',
    items: [
      {
        slug: 'cached-components',
        name: 'Cache de Componentes',
        description: 'Exemplo de cache com React Server Components',
      },
      {
        slug: 'cached-functions',
        name: 'Cache de Funções',
        description: 'Exemplo de cache de funções',
      },
      {
        slug: 'cached-routes',
        name: 'Cache de Rotas',
        description: 'Exemplo de cache de segmentos de rota',
      },
      {
        slug: 'view-transitions',
        name: 'Transições',
        description: 'Animações entre páginas com View Transitions API',
      },
      {
        slug: 'route-groups',
        name: 'Grupos de Rotas',
        description: 'Organização de rotas sem afetar URLs',
      },
      {
        slug: 'parallel-routes',
        name: 'Rotas Paralelas',
        description: 'Renderização de múltiplas páginas no mesmo layout',
      },
      {
        slug: 'not-found',
        name: 'Página 404',
        description: 'Tratamento de páginas não encontradas',
      },
      {
        slug: 'error',
        name: 'Tratamento de Erros',
        description: 'Gerenciamento de erros da aplicação',
      },
      {
        slug: 'use-link-status',
        name: 'Status de Links',
        description: 'Feedback visual para interações com links',
      },
      {
        slug: 'remote-cache',
        name: 'Cache Remoto',
        description: 'Cache de dados em contextos dinâmicos',
      },
      {
        slug: 'private-cache',
        name: 'Cache Privado',
        description: 'Cache de dados específicos do usuário',
      },
    ],
  },
] as const satisfies DemoCategory[];

export type DemoSlug = (typeof demos)[number]['items'][number]['slug'];

export const data = { sections, categories, products, demos };
