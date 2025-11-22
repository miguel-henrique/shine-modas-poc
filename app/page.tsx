import db from '#/lib/db';
import { Boundary } from '#/ui/boundary';
import { LinkStatus } from '#/ui/link-status';
import Link from 'next/link';

export default function Page() {
  const demos = db.demo.findMany();
  const products = db.product.findMany();
  
  // Calcular métricas
  const totalProducts = products.length;
  const lowStockProducts = products.filter(p => p.stock <= p.minStock);
  const totalStockValue = products.reduce((sum, p) => sum + (p.price * p.stock), 0);
  const outOfStockCount = products.filter(p => p.stock === 0).length;

  return (
    <div className="flex flex-col gap-9">
      {/* Header Dashboard */}
      <Boundary
        label="Dashboard"
        animateRerendering={false}
        kind="solid"
        className="flex flex-col gap-6"
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-100">
            Bem-vindo ao Shine Modas
          </h1>
          <p className="mt-1 text-sm text-gray-400">
            Sistema de Gestão de Estoque - Moda Plus Size
          </p>
        </div>

        {/* Cards de Métricas */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          <div className="rounded-lg bg-blue-900/30 border border-blue-800 p-4">
            <div className="text-sm font-medium text-blue-300">Total de Produtos</div>
            <div className="mt-2 text-3xl font-bold text-blue-100">{totalProducts}</div>
          </div>

          <div className="rounded-lg bg-red-900/30 border border-red-800 p-4">
            <div className="text-sm font-medium text-red-300">Estoque Baixo</div>
            <div className="mt-2 text-3xl font-bold text-red-100">{lowStockProducts.length}</div>
            <div className="mt-1 text-xs text-red-400">Produtos abaixo do mínimo</div>
          </div>

          <div className="rounded-lg bg-green-900/30 border border-green-800 p-4">
            <div className="text-sm font-medium text-green-300">Valor em Estoque</div>
            <div className="mt-2 text-3xl font-bold text-green-100">
              R$ {totalStockValue.toFixed(2)}
            </div>
          </div>

          <div className="rounded-lg bg-orange-900/30 border border-orange-800 p-4">
            <div className="text-sm font-medium text-orange-300">Sem Estoque</div>
            <div className="mt-2 text-3xl font-bold text-orange-100">{outOfStockCount}</div>
            <div className="mt-1 text-xs text-orange-400">Produtos esgotados</div>
          </div>
        </div>

        {/* Alertas de Estoque Baixo */}
        {lowStockProducts.length > 0 && (
          <div className="rounded-lg bg-red-950/50 border border-red-900 p-4">
            <h3 className="font-semibold text-red-300 mb-3">⚠️ Alertas de Estoque</h3>
            <div className="space-y-2">
              {lowStockProducts.slice(0, 3).map((product) => (
                <div key={product.id} className="flex justify-between text-sm">
                  <span className="text-gray-300">{product.name}</span>
                  <span className="text-red-400 font-medium">
                    Estoque: {product.stock} (Mín: {product.minStock})
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </Boundary>

      {/* Menu de Navegação */}
      <Boundary
        label="Menu"
        animateRerendering={false}
        kind="solid"
        className="flex flex-col gap-9"
      >
        {demos.map((section) => {
          return (
            <div key={section.name} className="flex flex-col gap-3">
              <div className="font-mono text-xs font-semibold tracking-wider text-gray-700 uppercase">
                {section.name}
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {section.items.map((item) => {
                  return (
                    <Link
                      href={`/${item.slug}`}
                      key={item.name}
                      className="group flex flex-col gap-1 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                    >
                      <div className="flex items-center justify-between font-medium text-gray-200 group-hover:text-gray-50">
                        {item.name} <LinkStatus />
                      </div>

                      {item.description ? (
                        <div className="line-clamp-3 text-[13px] text-gray-500 group-hover:text-gray-300">
                          {item.description}
                        </div>
                      ) : null}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </Boundary>
    </div>
  );
}
