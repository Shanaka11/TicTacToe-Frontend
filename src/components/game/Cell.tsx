import React from 'react'
import { ICell } from '../../types/ICell'
import { StyledCell } from './Cell.Styled'


const Cell:React.FC<ICell> = ( { mark, pointer, loading, onClickHandler, index } ) => {
    
    return (
        <StyledCell 
            mark={mark} 
            pointer={pointer}
            onClick={() => {if (!loading )onClickHandler(index)}}
        />
    )
}

export default Cell