import { type NextRequest, NextResponse } from "next/server"
import axi from "@/lib/axi"

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json()

        // Forward login request to backend API
        const apiRes = await axi.post("/auth/login", { email, password })

        const { message } = apiRes.data
        const setCookie = apiRes.headers["set-cookie"]

        const response = NextResponse.json({ message })

        if (setCookie) {
            // If multiple cookies, set all
            if (Array.isArray(setCookie)) {
                setCookie.forEach(cookie => response.headers.append("set-cookie", cookie))
            } else {
                response.headers.set("set-cookie", setCookie)
            }
        }

        return response
    } catch (error: any) {
        const status = error.response?.status || 500
        const message = error.response?.data?.error || "Login failed"
        return NextResponse.json({ error: message }, { status })
    }
}
