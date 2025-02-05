import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	// Add cache-control headers for images
	const response = NextResponse.next();

	if (request.nextUrl.pathname.match(/\.(jpg|jpeg|gif|png|svg|ico)$/)) {
		response.headers.set(
			"Cache-Control",
			"public, max-age=31536000, immutable"
		);
		response.headers.set(
			"Expires",
			new Date(Date.now() + 31536000000).toUTCString()
		);
	}

	return response;
}

export const config = {
	matcher: "/:path*",
};
