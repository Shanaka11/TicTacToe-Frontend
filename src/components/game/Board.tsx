import React, { useState } from 'react'
import { Pointer, Result } from '../../types/ICell'
import { Button } from '../common/Button.Styled'
import { Overlay } from '../common/Common.Styled'
import { StyledBoard } from './Board.Styled'
import Cell from './Cell'

const Board:React.FC = () => {

    // nextMove
    const [pointer, setPointer] = useState<Pointer>(-1)
    // result
    const [result, setResult] = useState<Result>(-2)

    return (
        <>  { result !== -2 &&
                <Overlay>
                    {/* <div>X's Wins!</div> */}
                    {/* <div>O's Wins!</div> */}
                    {/* <div>Draw!</div> */}
                    <Button>Start A New Game</Button>
                </Overlay>
            }
            <StyledBoard>
                <Cell mark={1} pointer={pointer}/>
                <Cell mark={-1} pointer={pointer}/>
                <Cell mark={0} pointer={pointer}/>
                <Cell mark={0} pointer={pointer}/>
                <Cell mark={0} pointer={pointer}/>
                <Cell mark={0} pointer={pointer}/>
                <Cell mark={0} pointer={pointer}/>
                <Cell mark={0} pointer={pointer}/>
                <Cell mark={0} pointer={pointer}/>
            </StyledBoard>
        </>
    )
}

export default Board