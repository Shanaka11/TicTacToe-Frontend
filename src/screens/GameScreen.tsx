import React from 'react'
import { Page } from '../components/common/Common.Styled'
import Board from '../components/game/Board'

const GameScreen:React.FC = () => {
  return (
    <Page>
        <Board />
    </Page>
  )
}

export default GameScreen