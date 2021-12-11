import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ListarCategoriasUseCase } from '../../domain/useCases/produto/listar-categorias'
import { CategoriaModel } from '../../domain/models/produto/categoria'
import { ProdutoModel } from '../../domain/models/produto/produto'
import { AtualizarProdutoUseCase } from '../../domain/useCases/produto/atualizar-produto'

interface ModalProdutoUpdateComponentProps {
    open: boolean
    setOpen: any
    listarCategoriasUseCase: ListarCategoriasUseCase
    atualizarProdutoUseCase: AtualizarProdutoUseCase
    produto: ProdutoModel | undefined
    produtos: ProdutoModel[]
    setProdutos: any
}
export default function ModalProdutoUpdateComponent({
    open,
    setOpen,
    listarCategoriasUseCase,
    atualizarProdutoUseCase,
    produto,
    produtos,
    setProdutos
}: ModalProdutoUpdateComponentProps) {

    const [categorias, setCategorias] = useState<CategoriaModel[]>([])

    useEffect(() => {
        async function listarCategorias() {
            try {
                const categorias = await listarCategoriasUseCase.listar()
                setCategorias(categorias)
            } catch (error) {
                setCategorias([])
            }
        }

        listarCategorias()
    })

    async function onCreate(event: any) {
        try {
            event.preventDefault()
            const id = produto ? produto.id : 0
            console.log(id)
            const nome = event.target[0].value
            const idCategoria = event.target[1].value
            await atualizarProdutoUseCase.atualizar({
                id,
                nome,
                idCategoria
            })

            const produtosEditados = produtos.map(produto => {
                if (produto.id === id) {
                    const categoria = categorias.find(categoria => categoria.id == idCategoria)
                    produto.nome = nome
                    if (categoria) {
                        produto.categoria = categoria
                    }
                }
                return produto
            })

            setProdutos(produtosEditados)
            
            setOpen(false)
        }
        catch (error: any) {
console.log(error.message)
        }
    }

    return (


        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                            <form className="space-y-8 divide-y divide-gray-200" onSubmit={event => onCreate(event)}>
                                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                                    <div>
                                        <div>
                                            <h3 className="text-lg leading-6 font-medium text-gray-900">Editar Produto</h3>
                                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                                Para editar um produto entre com os dados abaixo.
                                            </p>
                                        </div>

                                        <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                    Nome
                                                </label>
                                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                    <input
                                                        defaultValue={produto ? produto.nome : ""}
                                                        type="text"
                                                        name="nome"
                                                        id="nome"
                                                        className="max-w-lg block w-full shadow-sm focus:ring-green-500 focus:border-green-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                                <label htmlFor="country" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                    Categoria
                                                </label>
                                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                    <select
                                                        defaultValue={produto ? produto.categoria.id : ""}
                                                        id="categoria"
                                                        name="categoria"
                                                        className="max-w-lg block focus:ring-green-500 focus:border-green-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                                    >
                                                        <option></option>
                                                        {
                                                            categorias.map(categoria => (
                                                                <option value={categoria.id}>{categoria.nome}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-5">
                                    <div className="flex justify-end">
                                        <button
                                            onClick={() => setOpen(false)}
                                            type="button"
                                            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            type="submit"
                                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                        >
                                            Editar
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>

    )
}