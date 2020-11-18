import React, { useState, useCallback } from 'react'
import { SelectableContent } from './styles'
import { useItens } from '../../context/selectedItens'

function SelectableItem(props) {
    const [selected, setSelected] = useState(false)

    const { itens, setItens } = useItens()

    const select = useCallback(()=>{
        setSelected(!selected)
        if (!selected) {
            setItens([...itens, props.title])
        }else {
            setItens(itens.filter((e)=> { return e !== props.title }))
        }
    },[selected, setSelected, setItens, itens, props.title]) 

    return(
        <SelectableContent selected={selected} onClick={select}>
            <img src={props.image} alt={props.title}/>
            <p>{props.title}</p>
        </SelectableContent>
    )
}

export default SelectableItem