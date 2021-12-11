import { useState } from 'react'
import ModalDeleteComponent from './modal-delete'

interface TableComponentProps {
    items: any
    columns: string[]
    service: any
    method: string
    setItems: any
    item: any
    setItem: any
    openModalUpdate: boolean
    setOpenModalUpdate: any
}

export default function TableComponent({
    items,
    columns,
    service,
    method,
    setItems,
    item,
    setItem,
    openModalUpdate,
    setOpenModalUpdate }: TableComponentProps) {

    const [openModalDelete, setOpenModalDelete] = useState(false)

    return (



        <div className="flex flex-col">

            <ModalDeleteComponent open={openModalDelete}
                setOpen={setOpenModalDelete}
                service={service}
                method={method}
                idItem={item ? item.id : 0}
                items={items}
                setItems={setItems}
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
                                        <span className="sr-only">Editar</span>
                                    </th>

                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Excluir</span>
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
                                                setItem(item)
                                                setOpenModalUpdate(true)
                                            }}>
                                                Editar
                                            </a>
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" className="text-green-600 hover:text-green-900" onClick={() => {
                                                setItem(item)
                                                setOpenModalDelete(true)
                                            }}>
                                                Excluir
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