export type Pointer = 1 | -1
export type Mark =  0 | Pointer
export type Result = -2 | Mark

export interface ICell {
    mark: Mark,
    pointer:  Pointer
}