import { MoveRight } from 'lucide-react'
import { ProgressCircle } from '../components/progress-circle'

export default function Home() {
  return (
    <div>
      {/* HEADER */}
      <div className="bg-gradient-to-t from-marine-600 to-marine-500 px-6 py-5 flex flex-col gap-8">
        <img
          src="https://github.com/edimilsonbraz.png"
          alt=""
          className="rounded-full w-16 h-16 self-end"
        />
        <span className="text-2xl font-bold leading-heading text-marine-50">
          Dashboard
        </span>
      </div>

      <main className="p-6 flex flex-col gap-4">
        <span className="text-lg font-bold leading-heading">Coleções</span>

        <div className="flex flex-col gap-5 py-6 px-5 rounded-lg border border-mirage-100 shadow-lg">
          <span className="uppercase font-bold text-sm text-mirage-600 leading-heading">
            Javascript
          </span>
          <div className="space-y-2">
            <h2 className="font-bold leading-heading">
              Fundamentos do JavaScript
            </h2>
            <p className="text-smoke-800 text-sm leading-base">
              Treine seus conhecimentos nos fundamentos do JavaScript como
              Arrays, variáveis, condicionais e estruturas de repetição.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <a
              href="#"
              className="bg-marine-500 text-mirage-50 font-bold text-sm rounded-md py-3 px-5 flex items-center gap-3"
            >
              Acessar coleção
              <MoveRight className="w-5 h-5" />
            </a>

            <div className="flex items-center gap-2">
              <div className="w-6 h-6">
                <ProgressCircle progress={50} />
              </div>
              <span className="text-smoke-600 text-sm leading-base">8/16</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
