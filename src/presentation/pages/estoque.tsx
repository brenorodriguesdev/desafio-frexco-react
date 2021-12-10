import { useEffect, useState } from 'react'
import { EstoqueModel } from '../../domain/models/estoque/estoque'
import { ListarEstoquesUseCase } from '../../domain/useCases/estoque/listar-estoques'
import SideBarComponent from '../components/side-bar'
import TableComponent from '../components/table'

interface EstoquePageProps {
  listarEstoquesUseCase: ListarEstoquesUseCase
}

export default function EstoquePage({ listarEstoquesUseCase }: EstoquePageProps) {

  const [estoques, setEstoques] = useState<EstoqueModel[]>([])

  useEffect(() => {
    async function listarProdutos() {
      try {
        const estoques = await listarEstoquesUseCase.listar()
        setEstoques(estoques)
      } catch (error) {
        setEstoques([])
      }
    }

    listarProdutos()
  }, [])

  return (
    <>
      <div>
        <SideBarComponent />

        <div className="md:pl-64 flex flex-col flex-1">
          <main className="flex-1">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Estoque</h1>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Replace with your content */}
                <div className="py-16">
                  <TableComponent items={estoques} columns={[
                    'id',
                    'nome'
                  ]} />
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>

      </div>
    </>
  )
}