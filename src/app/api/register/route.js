import db from '@/lib/db'
import bcrypt from 'bcrypt'
import User from '@/models/User'
import getCorsHeaders from '@/lib/apiCors'

export async function POST(req) {
    try {
        await db.connect()

        const { username, email, password: pass } = await req.json()

        console.log(username, email, pass)

        const isExisting = await User.findOne({ email })

        if (isExisting) {
            throw new Error("User already exists")
        }

        const hashedPassword = await bcrypt.hash(pass, 10)

        const newUser = await User.create({ username, email, password: hashedPassword })

        const { password, ...user } = newUser._doc

        return new Response(JSON.stringify(user), { status: 201, headers: getCorsHeaders(req.headers.get("origin") || "") })
    } catch (error) {
        return new Response(JSON.stringify(error.message), { status: 500 })
    }
}