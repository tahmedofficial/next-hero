import { NextResponse } from "next/server"

const user = false;

export const middleware = (request) => {

    const token = request.cookies.get("token");
    if (!token) {
        return NextResponse.redirect(new URL("/login", request.url))
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard", "/services"]
}