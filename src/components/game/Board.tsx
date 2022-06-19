import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { getGame, postCreateGame, postMakeMove } from '../../api/game'
import { IMove, Mark } from '../../types/DataTypes'
import { Button } from '../common/Button.Styled'
import { Overlay } from '../common/Common.Styled'
import { StyledBoard } from './Board.Styled'
import Cell from './Cell'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { MinimapContainer, Timeline } from './Timeline.Styled'
import Minimap from './Minimap'

const Board:React.FC = () => {

    // Check if a game is present in the localstorage, if so fetch that game.
    // Else create a new game and keep the id in the localstorage
    const [id, setId] = useState(window.localStorage.getItem('id'))

    const {
        data,
        isLoading,
        isError,
        refetch
    } = useQuery(
        ['getGame', id],
        () => getGame(id!),
        {
            enabled: id ? true : false
        }
    )
    
    const {
        isLoading: gameIsLoading,
        isError: gameIsError,
        mutate: gameMutate
    } = useMutation(
        postCreateGame, {
            onSuccess: (data) => {
                window.localStorage.setItem('id', data.data._id)
                setId(data.data._id)
            }
        }
    )

    const {
        isLoading: moveIsLoading,
        isError: moveIsError,
        mutate: moveMutate
        //@ts-ignore
    } = useMutation(
        postMakeMove, {
            onSuccess: refetch
        }
    )

    // Get the most recent move
    const board = data?.data.moves[data?.data.moves.length - 1].board
    const pointer = data?.data.nextMove
    const result = data?.data.result
    
    useEffect(() => {
        if(!id){
            gameMutate()
        }
    }, [id])

    useEffect(() => {
        if(moveIsError || gameIsError || isError){
            toast.error('There was a server error', {
                position: "top-right",
                autoClose: 5000
            })   
        }
    }, [moveIsError, gameIsError, isError])

    useEffect(() => {
        if(moveIsLoading){
            toast.info(`${pointer === 1 ? "X" : "O" } is Making a move`, {
                position: "top-right",
                autoClose: 1000
            })   
        }
        if(isLoading){
            toast.info('Getting the game', {
                position: "top-right",
                autoClose: 1000
            })   
        }
        if(gameIsLoading){
            toast.info('Creating the game', {
                position: "top-right",
                autoClose: 1000
            })   
        }
    }, [moveIsLoading, gameIsLoading, isLoading])


    const handleResetClick = () => {
        window.localStorage.removeItem('id')
        setId('')
    }

    const handleCellOnClick = (index:number) => {
        if(board && pointer && id){
            const tempBoard = [...board]
            tempBoard[index] = pointer
            moveMutate({
                id,
                board: tempBoard
            })
        }
    }

    return (
        <>  
            { result !== -2 &&
                <Overlay>
                    { result === 1 ? <div>X's Wins!</div> 
                    : result === -1 ? <div>O's Wins!</div> 
                    : <div>Draw!</div>}
                    <Button onClick={handleResetClick}>Start A New Game</Button>
                </Overlay>
            }
            <StyledBoard>
                {board?.map((mark:Mark, index:number) => {
                    return <Cell 
                                key={`${mark}-${index}`} 
                                mark={mark} 
                                pointer={pointer!}
                                index={index}
                                onClickHandler={handleCellOnClick}
                                loading={isLoading || gameIsLoading || moveIsLoading}
                            />
                })}
            </StyledBoard>
            <Timeline>
                {
                    data?.data.moves.map((item:IMove, index:number) => {
                        return  <MinimapContainer>
                                    <div>Move {index}</div>
                                    <Minimap key={item._id} board={item.board}/>
                                </MinimapContainer>
                    })
                }
            </Timeline>
        </>
    )
}

export default Board