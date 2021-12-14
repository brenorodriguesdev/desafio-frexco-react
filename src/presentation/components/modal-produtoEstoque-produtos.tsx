import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ProdutoEstoqueModel } from '../../domain/models/estoque/produtoEstoque'

interface ModalProdutoEstoqueCreateComponentProps {
    open: boolean
    setOpen: any
    produtosEstoque: ProdutoEstoqueModel[]
}

export default function ModalProdutoEstoqueProdutosComponent({
    open,
    setOpen,
    produtosEstoque
}: ModalProdutoEstoqueCreateComponentProps) {


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

                    {/* This element is to trick the browser into centering the modal contents. */}
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
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                            <div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                        Produtos
                                    </Dialog.Title>
                                </div>

                                <div className="mt-3 text-center sm:mt-5">
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            <div className="flow-root mt-6">
                                                <ul role="list" className="-my-5 divide-y divide-gray-200">
                                                    {produtosEstoque.map((produtoEstoque) => (
                                                        <li key={produtoEstoque.id} className="py-4">
                                                            <div className="flex items-center space-x-4">
                                                                <div className="flex-1 min-w-0">
                                                                    <p className="text-sm font-medium text-gray-900 truncate">{produtoEstoque?.produto?.nome}</p>
                                                                </div>
                                                                <div>
                                                                    <a
                                                                        href="#"
                                                                        className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                                                                    >
                                                                        Deletar
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-6">
                                <button
                                    type="button"
                                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm"
                                    onClick={() => setOpen(false)}
                                >
                                    Fechar
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>

    )
}