import React from 'react'
import { ICell } from '../../types/ICell'
import { StyledCell } from './Cell.Styled'


const Cell:React.FC<ICell> = ( { mark, pointer } ) => {
  return (
    <StyledCell mark={mark} pointer={pointer}/>
  )
}

export default Cell