import React, { createContext, useContext, useState } from 'react'

const DEFAULT_STATE = {
    itens: [],
    setItens: ()=>{}
}

const itensContext = createContext(DEFAULT_STATE);

function ItensProvider({children}) {
    const [ itens, setItens ] = useState(DEFAULT_STATE.itens)
    return(
        <itensContext.Provider value={{itens, setItens}}>
            {children}
        </itensContext.Provider>
    )
}

export default ItensProvider

export function useItens() {
    const context = useContext(itensContext)

    if (!context) {
        throw new Error('Use itens must to be used within itensProvider')
    }
    
    const { itens, setItens } = context

    return { itens, setItens }
}