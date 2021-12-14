import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AdicionarProdutoEstoqueUseCase } from '../../domain/useCases/estoque/adicionar-produto-estoque'
import { BuscarEstoqueUseCase } from '../../domain/useCases/estoque/buscar-produto'
import { BuscarProdutoUseCase } from '../../domain/useCases/produto/buscar-produto'
import { ProdutoModel } from '../../domain/models/produto/produto'
import { EstoqueModel } from '../../domain/models/estoque/estoque'

interface ModalProdutoEstoqueCreateComponentProps {
    open: boolean
    setOpen: any
    adicionarProdutoEstoqueUseCase: AdicionarProdutoEstoqueUseCase
    buscarProdutoUseCase: BuscarProdutoUseCase
    buscarEstoqueUseCase: BuscarEstoqueUseCase
}

var buscarProdutoTimeOut: NodeJS.Timeout
var buscarEstoqueTimeOut: NodeJS.Timeout

export default function ModalProdutoEstoqueCreateComponent({
    open,
    setOpen,
    adicionarProdutoEstoqueUseCase,
    buscarProdutoUseCase,
    buscarEstoqueUseCase
}: ModalProdutoEstoqueCreateComponentProps) {
    const [produto, setProduto] = useState<ProdutoModel | undefined>()
    const [estoque, setEstoque] = useState<EstoqueModel | undefined>()

    async function buscarProduto(id: number) {
        if (buscarProdutoTimeOut)
            clearTimeout(buscarProdutoTimeOut)
        buscarProdutoTimeOut = setTimeout(async () => {
            try {
                const produto = await buscarProdutoUseCase.buscar(id)
                if (produto instanceof Error) {
                    return setProduto(undefined)
                }
                return setProduto(produto)
            }
            catch (error) {
                return setProduto(undefined)
            }
        }, 500)
    }


    async function buscarEstoque(id: number) {
        if (buscarEstoqueTimeOut)
            clearTimeout(buscarEstoqueTimeOut)
        buscarEstoqueTimeOut = setTimeout(async () => {
            try {
                const estoque = await buscarEstoqueUseCase.buscar(id)
                if (estoque instanceof Error) {
                    return setEstoque(undefined)
                }
                return setEstoque(estoque)
            }
            catch (error) {
                return setEstoque(undefined)
            }
        }, 500)
    }

    async function onCreate(event: any) {
        try {
            event.preventDefault()
            const idEstoque = event.target[0].value
            const idProduto = event.target[2].value

            await adicionarProdutoEstoqueUseCase.adicionar({
                idProduto,
                idEstoque
            })

            setOpen(false)
            setProduto(undefined)
            setEstoque(undefined)
        }
        catch (error) {

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
                                            <h3 className="text-lg leading-6 font-medium text-gray-900">Adicionar produto a Estoque</h3>
                                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                                Para adicionar um produto a um estoque entre com os dados abaixo.
                                            </p>
                                        </div>



                                        <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                                <label htmlFor="estoque" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                    Id do Estoque
                                                </label>
                                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                    <input
                                                        onChange={(e) => buscarEstoque(Number(e.target.value))}
                                                        type="text"
                                                        name="estoque"
                                                        id="estoque"
                                                        className="max-w-lg block w-full shadow-sm focus:ring-green-500 focus:border-green-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                                <label htmlFor="nome-estoque" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                    Nome do Estoque
                                                </label>
                                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                    <input
                                                        value={estoque ? estoque.nome : ''}
                                                        readOnly={true}
                                                        disabled={true}
                                                        type="text"
                                                        name="nome-estoque"
                                                        id="nome-estoque"
                                                        className="max-w-lg block w-full shadow-sm focus:ring-green-500 focus:border-green-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                                <label htmlFor="produto" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                    Id do Produto
                                                </label>
                                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                    <input
                                                        onChange={(e) => buscarProduto(Number(e.target.value))}
                                                        type="text"
                                                        name="produto"
                                                        id="produto"
                                                        className="max-w-lg block w-full shadow-sm focus:ring-green-500 focus:border-green-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                                <label htmlFor="nome-produto" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                    Nome do Produto
                                                </label>
                                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                    <input
                                                        value={produto ? produto.nome : ''}
                                                        readOnly={true}
                                                        disabled={true}
                                                        type="text"
                                                        name="nome-produto"
                                                        id="nome-produto"
                                                        className="max-w-lg block w-full shadow-sm focus:ring-green-500 focus:border-green-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div className="pt-5">
                                    <div className="flex justify-end">
                                        <button
                                            onClick={() => {
                                                setOpen(false)
                                                setProduto(undefined)
                                                setEstoque(undefined)
                                            }}
                                            type="button"
                                            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            type="submit"
                                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                        >
                                            Adicionar
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