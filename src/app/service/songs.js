import { faker } from "@faker-js/faker"
import { routes } from "../routes"

export const mostListenedToApi = async ()=>{
    const resp = await fetch('https://spotify-test-api.onrender.com/songs');
    const data = await resp.json()
    return data.splice(0,8)
}

export const episodesApi = async ()=>{
    const resp = await fetch('http://localhost:3001/songs');
    return resp.json()
}