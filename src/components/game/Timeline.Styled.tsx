import styled from "@emotion/styled";


export const Timeline = styled.div({
    display: 'flex',
    width: '100vw',
    maxWidth: '400px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '12px'
})

export const MinimapContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})

export const MinimapItem = styled.div({
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
    gridTemplateColumns: 'repeat(3, auto)',
    margin: '4px'
})
