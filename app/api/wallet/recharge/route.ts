import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    // Check for auth cookie
    const authCookie = request.cookies.get("auth-token")

    if (!authCookie) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const { amount } = await request.json()

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 })
    }

    // Mock wallet recharge - in real app, process payment and update database
    const currentBalance = 250.0 // This would come from database
    const newBalance = currentBalance + amount

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      newBalance,
      message: `Successfully added ₹${amount} to wallet`,
    })
  } catch (error) {
    return NextResponse.json({ error: "Recharge failed" }, { status: 500 })
  }
}
