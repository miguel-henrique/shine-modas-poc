import { Boundary } from '#/ui/boundary';

export default function Byline() {
  return (
    <Boundary kind="solid" animateRerendering={false}>
      <div className="flex flex-col gap-3 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-400">Shine Modas</span>
          <span className="text-gray-800">|</span>
          <span className="text-gray-500">Sistema de Gestão de Estoque</span>
        </div>
        <div className="text-xs text-gray-700">
          PoC desenvolvida para Engenharia de Plataforma - IFSP
        </div>
        <div className="flex gap-4 text-xs font-medium">
          <a
            className="transition-colors hover:text-gray-400"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noreferrer"
          >
            Next.js Docs
          </a>
          <span className="text-gray-800">/</span>
          <a
            className="transition-colors hover:text-gray-400"
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
          >
            Powered by Vercel
          </a>
        </div>
      </div>
    </Boundary>
  );
}
