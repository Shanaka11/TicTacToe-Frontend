import styled from "@emotion/styled";
import * as vars from '../../styles/vars'
import { ICell, Mark, Pointer } from "../../types/ICell";

// If mark is either 1 or -1 show a solid mark
// If its 0 then show a watered mark
const getXMark = (color: 'black'|'lightgrey' = 'black') => {
    return {
        cursor: color === 'black' && 'not-allowed',
        '&::after, &::before': {
            content: '""',
            width: `calc(${vars.markSize} * .15)`,
            height: vars.markSize,
            backgroundColor: color,
            position: 'absolute'
        },
        '&::before': {
            transform: 'rotate(45deg)'
        },
        '&::after': {
            transform: 'rotate(-45deg)'
        }
    }
}

const getOMark = (color: 'black'|'lightgrey' = 'black') => {
    return {
        cursor: color === 'black' && 'not-allowed',
        '&::after, &::before': {
            content: '""',
            position: 'absolute',
            borderRadius: '50%'
        },
        '&::before': {
            width: vars.markSize,
            height: vars.markSize,
            backgroundColor: color,
        },
        '&::after': {
            width: `calc(${vars.markSize} * .7)`,
            height: `calc(${vars.markSize} * .7)`,
            backgroundColor: 'white',
        }
    }
}

const getMarkStyle = (mark:Mark, pointer:Pointer) => {
    if(mark === 1) return getXMark()
    if(mark === -1) return getOMark()
    if(pointer === 1) return {
        '&:hover' : getXMark("lightgrey")
    }
    return {
        '&:hover' : getOMark("lightgrey")
    }

}

const markStyle = {
    1 : {
        
    },

    "-1" : {
        
    },
    0 : {
        '&:hover': {
            '&::after, &::before': {
                content: '""',
                width: `calc(${vars.markSize} * .15)`,
                height: vars.markSize,
                backgroundColor: 'lightGrey',
                position: 'absolute'
            },
            '&::before': {
                transform: 'rotate(45deg)'
            },
            '&::after': {
                transform: 'rotate(-45deg)'
            }
        }
    }

}

//@ts-ignore
export const StyledCell = styled.div<ICell>({
    width: vars.base,
    height: vars.base,
    border: '1px solid black', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',

    '&:first-of-type, &:nth-of-type(2), &:nth-of-type(3)' : {
        borderTop: 'none'
    },

    '&:nth-of-type(3n + 1)' : {
        borderLeft: 'none'
    },

    '&:nth-of-type(3n + 3)' : {
        borderRight: 'none'
    },

    '&:last-of-type, &:nth-of-type(8), &:nth-of-type(7)' : {
        borderBottom: 'none'
    }
},
({mark, pointer}) => {
        return getMarkStyle(mark, pointer)
})