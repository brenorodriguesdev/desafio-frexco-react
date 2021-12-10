interface TableComponentProps {
    items: any
    columns: string[]
}

export default function TableComponent({ items, columns }: TableComponentProps) {



    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>

                                    {
                                        columns.map(name => (
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                {name}
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
                                                <td className={index === 0 ? 'px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900' 
                                                : 'px-6 py-4 whitespace-nowrap text-sm text-gray-500'}>{item[name]}</td>
                                            ))
                                        }

                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                Editar
                                            </a>
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
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