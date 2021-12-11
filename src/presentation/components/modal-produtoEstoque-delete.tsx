import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface ModalProdutoEstoqueDeleteComponentProps {
    open: boolean
    setOpen: any
}
export default function ModalProdutoEstoqueDeleteComponent({
    open,
    setOpen,
}: ModalProdutoEstoqueDeleteComponentProps) {

    async function onCreate(event: any) {
        try {
            event.preventDefault()
            // const nome = event.target[0].value
            // const estoque = await criarEstoqueUseCase.criar({
            //     nome
            // })
            // const lista: any = estoques
            // lista.push(estoque)
            // setEstoques(lista)
            setOpen(false)
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
                                            <h3 className="text-lg leading-6 font-medium text-gray-900">Remover produto a Estoque</h3>
                                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                                Para remover um produto de um estoque entre com os dados abaixo.
                                            </p>
                                        </div>



                                        <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                                <label htmlFor="estoque" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                    Id do Estoque
                                                </label>
                                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                    <input
                                                        type="text"
                                                        name="estoque"
                                                        id="estoque"
                                                        className="max-w-lg block w-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
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
                                                        readOnly={true}
                                                        disabled={true}
                                                        type="text"
                                                        name="nome-estoque"
                                                        id="nome-estoque"
                                                        className="max-w-lg block w-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
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
                                                        type="text"
                                                        name="produto"
                                                        id="produto"
                                                        className="max-w-lg block w-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
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
                                                        readOnly={true}
                                                        disabled={true}
                                                        type="text"
                                                        name="nome-produto"
                                                        id="nome-produto"
                                                        className="max-w-lg block w-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                                    />
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
                                            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            type="submit"
                                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                        >
                                            Remover
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