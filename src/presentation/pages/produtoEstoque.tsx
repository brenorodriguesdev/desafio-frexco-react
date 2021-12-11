import { useContext, useEffect } from 'react'
import { DeletarProdutoUseCase } from '../../domain/useCases/produto/deletar-produto'
import { ListarProdutosUseCase } from '../../domain/useCases/produto/listar-produtos'
import { makeAtualizarProdutoService } from '../../main/factories/services/produto/atualizar-produto'
import { makeCriarProdutoService } from '../../main/factories/services/produto/criar-produto'
import { makeListarCategoriasService } from '../../main/factories/services/produto/listar-categorias'
import ModalProdutoCreateComponent from '../components/modal-produto-create'
import ModalProdutoUpdateComponent from '../components/modal-produto-update'
import ModalProdutoEstoqueCreateComponent from '../components/modal-produtoEstoque-create'
import ModalProdutoEstoqueDeleteComponent from '../components/modal-produtoEstoque-delete'
import SideBarComponent from '../components/side-bar'
import { ProdutoEstoqueContext } from '../contexts/produtoEstoque'

interface ProdutoPageProps {
    listarProdutosUseCase: ListarProdutosUseCase
    deletarProdutoUseCase: DeletarProdutoUseCase
}

export default function ProdutoEstoquePage({ listarProdutosUseCase, deletarProdutoUseCase }: ProdutoPageProps) {

    const { setOpenModalCreate, openModalCreate, setOpenModalUpdate, openModalUpdate, setOpenModalDelete, openModalDelete } = useContext(ProdutoEstoqueContext)

    // useEffect(() => {
    //     async function listarProdutos() {
    //         try {
    //             const produtos = await listarProdutosUseCase.listar()
    //             setProdutos(produtos)
    //         } catch (error) {
    //             setProdutos([])
    //         }
    //     }

    //     listarProdutos()
    // }, [])

    return (
        <>
            <div>
                <SideBarComponent />

                <ModalProdutoEstoqueCreateComponent
                    open={openModalCreate}
                    setOpen={setOpenModalCreate}
                />


                <ModalProdutoEstoqueDeleteComponent
                    open={openModalDelete}
                    setOpen={setOpenModalDelete}
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
                                    {/* <TableComponent
                                        items={produtos}
                                        columns={[
                                            'id',
                                            'nome',
                                            'categoria.nome'
                                        ]}
                                        service={deletarProdutoUseCase}
                                        method="deletar"
                                        setItems={setProdutos}
                                        setOpenModalUpdate={setOpenModalUpdate}
                                        openModalUpdate={openModalUpdate}
                                        item={produto}
                                        setItem={setProduto}
                                    /> */}
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}