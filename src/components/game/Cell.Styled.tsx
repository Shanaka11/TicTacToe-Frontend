import styled from "@emotion/styled";
import * as vars from '../../styles/vars'
import { Mark, Pointer } from "../../types/DataTypes";
import { ICell, ICellStyled } from "../../types/ICell";

// If mark is either 1 or -1 show a solid mark
// If its 0 then show a watered mark
const getXMark = (color: 'black'|'lightgrey' = 'black', size:'normal' | 'half') => {
    return {
        cursor: color === 'black' && 'not-allowed',
        '&::after, &::before': {
            content: '""',
            width: `calc(${size==='normal' ? vars.markSize : vars.halfMarkSize} * .15)`,
            height: size==='normal' ? vars.markSize : vars.halfMarkSize,
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

const getOMark = (color: 'black'|'lightgrey' = 'black', size:'normal' | 'half') => {
    return {
        cursor: color === 'black' && 'not-allowed',
        '&::after, &::before': {
            content: '""',
            position: 'absolute',
            borderRadius: '50%'
        },
        '&::before': {
            width: size==='normal' ? vars.markSize : vars.halfMarkSize,
            height: size==='normal' ? vars.markSize : vars.halfMarkSize,
            backgroundColor: color,
        },
        '&::after': {
            width: `calc(${size==='normal' ? vars.markSize : vars.halfMarkSize} * .7)`,
            height: `calc(${size==='normal' ? vars.markSize : vars.halfMarkSize} * .7)`,
            backgroundColor: 'white',
        }
    }
}

const getMarkStyle = (mark:Mark, pointer:Pointer, size:'normal' | 'half') => {
    if(mark === 1) return getXMark('black', size)
    if(mark === -1) return getOMark('black', size)
    if(pointer === 1) return {
        '&:hover' : getXMark("lightgrey", size)
    }
    return {
        '&:hover' : getOMark("lightgrey", size)
    }

}

const cellSize = {
    'half': {
        width: vars.halfBase,
        height: vars.halfBase
    },
    'normal': {
        width: vars.base,
        height: vars.base
    }
}

//@ts-ignore
export const StyledCell = styled.div<ICellStyled>({
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
({mark, pointer, size='normal'}) => {
        return getMarkStyle(mark, pointer, size)
},
({size = 'normal'}) => {
    return cellSize[size]
})