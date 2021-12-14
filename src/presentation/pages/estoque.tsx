import { useContext, useEffect } from 'react'
import { DeletarEstoqueUseCase } from '../../domain/useCases/estoque/deletar-estoque'
import { ListarEstoquesUseCase } from '../../domain/useCases/estoque/listar-estoques'
import { makeAtualizarEstoqueService } from '../../main/factories/services/estoque/atualizar-estoque'
import { makeCriarEstoqueService } from '../../main/factories/services/estoque/criar-estoque'
import ModalEstoqueCreateComponent from '../components/modal-estoque-create'
import ModalEstoqueUpdateComponent from '../components/modal-estoque-update'
import SideBarComponent from '../components/side-bar'
import TableComponent from '../components/table'
import { EstoqueContext } from '../contexts/estoque'

interface EstoquePageProps {
  listarEstoquesUseCase: ListarEstoquesUseCase
  deletarEstoqueUsecase: DeletarEstoqueUseCase
}

export default function EstoquePage({ listarEstoquesUseCase, deletarEstoqueUsecase }: EstoquePageProps) {

  const {
    estoques,
    setEstoques,
    estoque,
    setEstoque,
    setOpenModalCreate,
    openModalCreate,
    setOpenModalUpdate,
    openModalUpdate } = useContext(EstoqueContext)

  useEffect(() => {
    async function listarEstoques() {
      try {
        const estoques = await listarEstoquesUseCase.listar()
        setEstoques(estoques)
      } catch (error) {
        setEstoques([])
      }
    }

    listarEstoques()
  }, [])

  return (
    <>
      <div>
        <SideBarComponent />

        <ModalEstoqueCreateComponent
          open={openModalCreate}
          setOpen={setOpenModalCreate}
          setEstoques={setEstoques}
          estoques={estoques}
          criarEstoqueUseCase={makeCriarEstoqueService()}
        />

        <ModalEstoqueUpdateComponent
          open={openModalUpdate}
          setOpen={setOpenModalUpdate}
          atualizarEstoqueUseCase={makeAtualizarEstoqueService()}
          estoque={estoque}
          estoques={estoques}
          setEstoques={setEstoques}
        />

        <div className="md:pl-64 flex flex-col flex-1">
          <main className="flex-1">
            <div className="py-6">

              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

                <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                  <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                    <div className="ml-4 mt-2">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Estoque</h3>
                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0">
                      <button
                        onClick={() => setOpenModalCreate(true)}
                        type="button"
                        className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Criar novo estoque
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Replace with your content */}
                <div className="py-8">
                  <TableComponent items={estoques} columns={[
                    'id',
                    'nome'
                  ]}
                    service={deletarEstoqueUsecase} method="deletar"
                    setItems={setEstoques}
                    setItem={setEstoque}
                    item={estoque}
                    openModalUpdate={openModalUpdate}
                    setOpenModalUpdate={setOpenModalUpdate}
                  />
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