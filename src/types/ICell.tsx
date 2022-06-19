import { Mark, Pointer } from "./DataTypes";


export interface ICellStyled {
    mark: Mark,
    pointer:  Pointer,
    size?: 'normal' | 'half'
}

export interface ICell {
    mark: Mark,
    pointer:  Pointer,
    index: number,
    onClickHandler: (index:number) => void
    loading: boolean
}
