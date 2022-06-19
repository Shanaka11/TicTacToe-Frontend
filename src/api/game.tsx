import axios from "axios";
import { IGame, IMove } from "../types/DataTypes";
import { config } from "./comon";

// Create Game
export const postCreateGame = async () => {
    return axios.post<IGame>(`
        http://localhost:3001/api/games`, 
        {}, 
        config
    )
}

// Make Move
export const postMakeMove = async (move:any) => {
    const id = move.id
    delete move.id
    return axios.post<IGame>(`
        http://localhost:3001/api/games/${id}/move`, 
        move, 
        config
    )
}

// Get Game
export const getGame = async (gameId:string) => {
    return axios.get<IGame>(`
        http://localhost:3001/api/games/${gameId}`
    )
}