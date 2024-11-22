export { default } from "next-auth/middleware"

// macther untuk menentukan route yang diprotekted
export const config = { matcher: ["/users/:path*"] }