import jwt from 'jsonwebtoken'
import { decode } from 'next-auth/jwt'

export function signJwtToken(payload, options = {}) {
    const secret = process.env.NEXTAUTH_SECRET
    const token = jwt.sign(payload, secret, options)

    return token
}

export async function verifyJwtToken(sessionToken){
    try {
        const decoded = await decode({
            token: sessionToken,
            secret: process.env.NEXTAUTH_secret
        })

        return decoded
    } catch (error) {
        console.error(error)
        return null
    }
}