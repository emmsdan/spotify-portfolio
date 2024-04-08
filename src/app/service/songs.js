import { faker } from "@faker-js/faker"
import { routes } from "../routes"
import { env } from "../../env";

export const mostListenedToApi = async ()=>{
    const resp = await fetch(`${env.BASE_API}/songs`);
    const data = await resp.json()
    return data.splice(0,8)
}

export const episodesApi = async ()=>{
    const resp = await fetch(`${env.BASE_API}/songs`);
    return resp.json()
}