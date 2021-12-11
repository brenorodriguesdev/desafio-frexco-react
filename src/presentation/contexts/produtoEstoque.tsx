import { createContext, useState } from "react";

interface ProdutoEstoqueContextProps {
    openModalCreate: boolean
    setOpenModalCreate: (open: boolean) => void
    openModalUpdate: boolean
    setOpenModalUpdate: (open: boolean) => void
    openModalDelete: boolean
    setOpenModalDelete: (open: boolean) => void
}
const ProdutoEstoqueContext = createContext<ProdutoEstoqueContextProps>({} as ProdutoEstoqueContextProps)

function ProdutoEstoqueProvider({ children }: any) {
    const [openModalCreate, setOpenModalCreate] = useState(false)
    const [openModalUpdate, setOpenModalUpdate] = useState(false)
    const [openModalDelete, setOpenModalDelete] = useState(false)

    return (
        <ProdutoEstoqueContext.Provider value={{
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