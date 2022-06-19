import styled from "@emotion/styled";

export const Button = styled.button({
    textTransform: 'uppercase',
    fontSize: '2rem',
    backgroundColor: 'white',
    border: '1px solid black',
    padding: '.25em .5em',
    cursor: 'pointer',
    transition: '0.2s linear',

    '&:hover': {
        backgroundColor: 'black',
        border: '1px solid white',
        color: 'white'
    }
})