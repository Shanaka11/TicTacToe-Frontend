export type Pointer = 1 | -1
export type Mark =  0 | Pointer
export type Result = -2 | Mark

export interface IMove {
    board: Mark[],
    _id: string
}

export interface IGame {
	nextMove: Pointer,
	result: Result,
	moves: IMove[],
	_id: string,
	createdAt: string,
	updatedAt: string,
	__v: number    
}