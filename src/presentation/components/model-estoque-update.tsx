import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ListarCategoriasUseCase } from '../../domain/useCases/produto/listar-categorias'
import { AtualizarEstoqueUseCase } from '../../domain/useCases/estoque/atualizar-estoque'
import { EstoqueModel } from '../../domain/models/estoque/estoque'

interface ModalEstoqueUpdateComponentProps {
    open: boolean
    setOpen: any
    atualizarEstoqueUseCase: AtualizarEstoqueUseCase
    estoque: EstoqueModel | undefined
    estoques: EstoqueModel[]
    setEstoques: any
}
export default function ModalEstoqueUpdateComponent({
    open,
    setOpen,
    atualizarEstoqueUseCase,
    estoque,
    estoques,
    setEstoques
}: ModalEstoqueUpdateComponentProps) {

    async function onCreate(event: any) {
        try {
            event.preventDefault()
            const id = estoque ? estoque.id : 0
            const nome = event.target[0].value

            await atualizarEstoqueUseCase.atualizar({
                id,
                nome
            })

            const estoquesEditados = estoques.map(estoque => {
                if (estoque.id === id) {
                    estoque.nome = nome
                
                }
                return estoque
            })

            setEstoques(estoquesEditados)
            
            setOpen(false)
        }
        catch (error: any) {
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
                                            <h3 className="text-lg leading-6 font-medium text-gray-900">Editar Estoque</h3>
                                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                                Para editar um estoque entre com os dados abaixo.
                                            </p>
                                        </div>

                                        <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                    Nome
                                                </label>
                                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                    <input
                                                        defaultValue={estoque ? estoque.nome : ""}
                                                        type="text"
                                                        name="nome"
                                                        id="nome"
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