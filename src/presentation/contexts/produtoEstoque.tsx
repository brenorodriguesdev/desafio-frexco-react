import { createContext, useState } from "react";
import { EstoqueModel } from "../../domain/models/estoque/estoque";

interface ProdutoEstoqueContextProps {
    estoques: EstoqueModel[]
    setEstoques: (produtos: EstoqueModel[]) => void
    openModalCreate: boolean
    setOpenModalCreate: (open: boolean) => void
    openModalUpdate: boolean
    setOpenModalUpdate: (open: boolean) => void
    openModalDelete: boolean
    setOpenModalDelete: (open: boolean) => void
}
const ProdutoEstoqueContext = createContext<ProdutoEstoqueContextProps>({} as ProdutoEstoqueContextProps)

function ProdutoEstoqueProvider({ children }: any) {
    const [estoques, setEstoques] = useState<EstoqueModel[]>([])
    const [openModalCreate, setOpenModalCreate] = useState(false)
    const [openModalUpdate, setOpenModalUpdate] = useState(false)
    const [openModalDelete, setOpenModalDelete] = useState(false)

    return (
        <ProdutoEstoqueContext.Provider value={{
            estoques,
            setEstoques,
            openModalCreate,
            setOpenModalCreate,
            openModalUpdate,
            setOpenModalUpdate,
            openModalDelete,
            setOpenModalDelete
        }}>
            {children}
        </ProdutoEstoqueContext.Provider>
    )
}


export { ProdutoEstoqueContext, ProdutoEstoqueProvider }