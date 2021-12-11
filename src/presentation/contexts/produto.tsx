import { createContext, useState } from "react";
import { ProdutoModel } from "../../domain/models/produto/produto";

interface ProdutoContextProps {
    produtos: ProdutoModel[]
    setProdutos: (produtos: ProdutoModel[]) => void
    produto: ProdutoModel | undefined
    setProduto: (produto: ProdutoModel) => void
    openModalCreate: boolean
    setOpenModalCreate: (open: boolean) => void
    openModalUpdate: boolean
    setOpenModalUpdate: (open: boolean) => void
    openModalDelete: boolean
    setOpenModalDelete: (open: boolean) => void
}
const ProdutoContext = createContext<ProdutoContextProps>({} as ProdutoContextProps)

function ProdutoProvider({ children }: any) {
    const [produtos, setProdutos] = useState<ProdutoModel[]>([])
    const [produto, setProduto] = useState<ProdutoModel | undefined>()
    const [openModalCreate, setOpenModalCreate] = useState(false)
    const [openModalUpdate, setOpenModalUpdate] = useState(false)
    const [openModalDelete, setOpenModalDelete] = useState(false)

    return (
        <ProdutoContext.Provider value={{
            produtos,
            setProdutos,
            produto,
            setProduto,
            openModalCreate,
            setOpenModalCreate,
            openModalUpdate,
            setOpenModalUpdate,
            openModalDelete,
            setOpenModalDelete
        }}>
            {children}
        </ProdutoContext.Provider>
    )
}


export { ProdutoContext, ProdutoProvider }