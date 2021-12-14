import { useState } from 'react'
import { ProdutoEstoqueModel } from '../../domain/models/estoque/produtoEstoque'
import { ListarProdutoEstoquePorEstoqueUseCase } from '../../domain/useCases/estoque/listar-produto-estoque-por-estoque'
import { makeAdicionarProdutoEstoqueService } from '../../main/factories/services/estoque/adicionar-produto-estoque'
import { makeDeletarProdutoEstoqueService } from '../../main/factories/services/estoque/deletar-produto-estoque'
import { makeBuscarProdutoService } from '../../main/factories/services/produto/buscar-produto'
import ModalProdutoEstoqueProdutoCreateComponent from './modal-produtoEstoque-produto-create'
import ModalProdutoEstoqueProdutoDeleteComponent from './modal-produtoEstoque-produto-delete'
import ModalProdutoEstoqueProdutosComponent from './modal-produtoEstoque-produtos'

interface TableComponentProps {
    items: any
    columns: string[]
    listarProdutoEstoquePorEstoqueUseCase: ListarProdutoEstoquePorEstoqueUseCase
}

export default function TableProdutoEstoqueComponent({
    items,
    columns,
    listarProdutoEstoquePorEstoqueUseCase
}: TableComponentProps) {

    const [openModalCreate, setOpenModalCreate] = useState(false)
    const [openModalDelete, setOpenModalDelete] = useState(false)
    const [openModalProdutos, setOpenModalProdutos] = useState(false)
    const [idEstoque, sedIdEstoque] = useState(0)
    const [produtosEstoque, setProdutosEstoque] = useState<ProdutoEstoqueModel[]>([])

    async function listarProdutoEstoquePorEstoque(id: number) {
        try {
            const produtosEstoque = await listarProdutoEstoquePorEstoqueUseCase.listar(id)
            setProdutosEstoque(produtosEstoque)
        } catch (error) {
            setProdutosEstoque([])
        }
    }

    return (



        <div className="flex flex-col">

            <ModalProdutoEstoqueProdutoCreateComponent open={openModalCreate}
                setOpen={setOpenModalCreate}
                adicionarProdutoEstoqueUseCase={makeAdicionarProdutoEstoqueService()}
                buscarProdutoUseCase={makeBuscarProdutoService()}
                idEstoque={idEstoque}
            />

            <ModalProdutoEstoqueProdutoDeleteComponent
                open={openModalDelete}
                setOpen={setOpenModalDelete}
                deletarProdutoEstoqueUseCase={makeDeletarProdutoEstoqueService()}
                buscarProdutoUseCase={makeBuscarProdutoService()}
                idEstoque={idEstoque}
            />

            <ModalProdutoEstoqueProdutosComponent
                open={openModalProdutos}
                setOpen={setOpenModalProdutos}
                produtosEstoque={produtosEstoque}
            />

            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>

                                    {
                                        columns.map((name, index) => (
                                            <th key={index}
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                {name.includes('.') ? name.split('.')[0] : name}
                                            </th>
                                        ))
                                    }

                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Produtos</span>
                                    </th>


                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item: any, index: number) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>

                                        {
                                            columns.map((name, index) => (
                                                <td key={index} className={index === 0 ? 'px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'
                                                    : 'px-6 py-4 whitespace-nowrap text-sm text-gray-500'}>{name.includes('.') ? item[name.split('.')[0]][name.split('.')[1]] : item[name]}</td>
                                            ))
                                        }

                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" className="text-green-600 hover:text-green-900" onClick={() => {
                                                setOpenModalProdutos(true)
                                                listarProdutoEstoquePorEstoque(item.id)
                                            }}>
                                                Visualizar Produtos
                                            </a>
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" className="text-green-600 hover:text-green-900" onClick={() => {
                                                setOpenModalCreate(true)
                                                sedIdEstoque(item.id)
                                            }}>
                                                Adicionar produto
                                            </a>
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" className="text-green-600 hover:text-green-900" onClick={() => {
                                                setOpenModalDelete(true)
                                                sedIdEstoque(item.id)
                                            }}>
                                                Excluir produto
                                            </a>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}