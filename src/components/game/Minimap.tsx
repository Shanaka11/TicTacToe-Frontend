import React from 'react'
import { Mark } from '../../types/DataTypes'
import { IMinimap } from '../../types/IMinimap'
import { StyledCell } from './Cell.Styled'
import { MinimapItem } from './Timeline.Styled'

const Minimap:React.FC<IMinimap> = ({ board }) => {
    return (
        <MinimapItem>
            {
                board.map((item:Mark, index:number)=> {
                    return <StyledCell key={index} size='half' mark={item} pointer={1}/>
                })
            }
        </MinimapItem>
    )
}

export default Minimap