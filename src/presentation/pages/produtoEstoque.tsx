import { useContext, useEffect } from 'react'
import { ListarEstoquesUseCase } from '../../domain/useCases/estoque/listar-estoques'
import { DeletarProdutoUseCase } from '../../domain/useCases/produto/deletar-produto'
import { makeAdicionarProdutoEstoqueService } from '../../main/factories/services/estoque/adicionar-produto-estoque'
import { makeBuscarEstoqueService } from '../../main/factories/services/estoque/buscar-estoque'
import { makeDeletarProdutoEstoqueService } from '../../main/factories/services/estoque/deletar-produto-estoque'
import { makeListarEstoquesServiceListarProdutoEstoquePorEstoqueService } from '../../main/factories/services/estoque/listar-produto-estoque-por-estoque'
import { makeBuscarProdutoService } from '../../main/factories/services/produto/buscar-produto'
import ModalProdutoEstoqueCreateComponent from '../components/modal-produtoEstoque-create'
import ModalProdutoEstoqueDeleteComponent from '../components/modal-produtoEstoque-delete'
import SideBarComponent from '../components/side-bar'
import TableProdutoEstoqueComponent from '../components/table-produtoEstoque'
import { ProdutoEstoqueContext } from '../contexts/produtoEstoque'

interface ProdutoEstoquePageProps {
    listarEstoquesUseCase: ListarEstoquesUseCase
    deletarProdutoUseCase: DeletarProdutoUseCase
}

export default function ProdutoEstoquePage({ listarEstoquesUseCase, deletarProdutoUseCase }: ProdutoEstoquePageProps) {

    const { setOpenModalCreate, openModalCreate, setOpenModalDelete, openModalDelete, estoques, setEstoques } = useContext(ProdutoEstoqueContext)

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

                <ModalProdutoEstoqueCreateComponent
                    open={openModalCreate}
                    setOpen={setOpenModalCreate}
                    adicionarProdutoEstoqueUseCase={makeAdicionarProdutoEstoqueService()}
                    buscarProdutoUseCase={makeBuscarProdutoService()}
                    buscarEstoqueUseCase={makeBuscarEstoqueService()}
                />


                <ModalProdutoEstoqueDeleteComponent
                    open={openModalDelete}
                    setOpen={setOpenModalDelete}
                    deletarProdutoEstoqueUseCase={makeDeletarProdutoEstoqueService()}
                    buscarProdutoUseCase={makeBuscarProdutoService()}
                    buscarEstoqueUseCase={makeBuscarEstoqueService()}
                />

                <div className="md:pl-64 flex flex-col flex-1">
                    <main className="flex-1">
                        <div className="py-6">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

                                <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                                    <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                                        <div className="ml-4 mt-2">
                                            <h3 className="text-lg leading-6 font-medium text-gray-900">Produtos em Estoque</h3>
                                        </div>
                                        <div className="ml-4 mt-2 flex-shrink-0">
                                            <button
                                                onClick={() => setOpenModalCreate(true)}
                                                type="button"
                                                style={{ marginRight: '1rem' }}
                                                className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                            >
                                                Adicionar produto a estoque
                                            </button>

                                            <button
                                                onClick={() => setOpenModalDelete(true)}
                                                type="button"
                                                className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                            >
                                                Remover produto a estoque
                                            </button>

                                        </div>


                                    </div>
                                </div>

                            </div>

                            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                <div className="py-8">
                                    <TableProdutoEstoqueComponent items={estoques} columns={[
                                        'id',
                                        'nome'
                                    ]} 
                                    listarProdutoEstoquePorEstoqueUseCase={makeListarEstoquesServiceListarProdutoEstoquePorEstoqueService()}
                                    />
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}