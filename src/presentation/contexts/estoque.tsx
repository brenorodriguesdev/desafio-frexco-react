import { createContext, useState } from "react";
import { EstoqueModel } from "../../domain/models/estoque/estoque";

interface EstoqueContextProps {
    estoques: EstoqueModel[]
    setEstoques: (produtos: EstoqueModel[]) => void
    estoque: EstoqueModel | undefined
    setEstoque: (estoque: EstoqueModel) => void
    openModalCreate: boolean
    setOpenModalCreate: (open: boolean) => void
    openModalUpdate: boolean
    setOpenModalUpdate: (open: boolean) => void
    openModalDelete: boolean
    setOpenModalDelete: (open: boolean) => void
}
const EstoqueContext = createContext<EstoqueContextProps>({} as EstoqueContextProps)

function EstoqueProvider({ children }: any) {
    const [estoques, setEstoques] = useState<EstoqueModel[]>([])
    const [estoque, setEstoque] = useState<EstoqueModel | undefined>()
    const [openModalCreate, setOpenModalCreate] = useState(false)
    const [openModalUpdate, setOpenModalUpdate] = useState(false)
    const [openModalDelete, setOpenModalDelete] = useState(false)

    return (
        <EstoqueContext.Provider value={{
            estoques,
            setEstoques,
            estoque,
            setEstoque,
            openModalCreate,
            setOpenModalCreate,
            openModalUpdate,
            setOpenModalUpdate,
            openModalDelete,
            setOpenModalDelete
        }}>
            {children}
        </EstoqueContext.Provider>
    )
}


export { EstoqueContext, EstoqueProvider }