import styled from '@emotion/styled'

export const Page = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'grid',
  placeItems: 'center'
})

export const Overlay = styled.div({
  zIndex: 2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0, .9)',
  color: 'white',
  fontSize: '5rem'
})