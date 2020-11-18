import React from 'react'
import { SelectableContent } from './styles'

function SelectableItem(props) {
    return(
        <SelectableContent onClick={()=>alert(props.title)}>
            <img src={props.image} alt={props.title}/>
            <p>{props.title}</p>
        </SelectableContent>
    )
}

export default SelectableItem