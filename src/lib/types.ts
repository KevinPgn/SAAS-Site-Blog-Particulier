import {z} from 'zod';

export interface UserProps{
    id: string
    name: string
    email: string
    image: string 
    plan: boolean
    sites: any
    posts: any
}