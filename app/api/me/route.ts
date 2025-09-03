import { type NextRequest, NextResponse } from "next/server"
import axi from "@/lib/axi"
export async function GET(request: NextRequest) {
    // Check for auth cookie
    const authCookie = request.cookies.get("auth-token")

    if (!authCookie) {
        return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    try {
        // Call /auth/me on axi instance
        const response = await axi.get("/auth/me")
        console.log("/ME : ", response.data)

        // Only use the email, make everything dummy if not present
        const email = response.data?.email ?? "dummy@email.com"

        return NextResponse.json({ email })
    } catch (error) {
        console.error("Error fetching /auth/me:", error)
        return NextResponse.json({ email: "dummy@email.com" })
    }
}
