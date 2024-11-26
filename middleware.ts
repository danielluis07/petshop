import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { apiAuthPrefix, publicRoutes } from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);

  // Check if the route is public or starts with a public prefix
  const isPublicRoute = publicRoutes.some((route) =>
    nextUrl.pathname.startsWith(route)
  );

  // Allow API auth routes
  if (isApiAuthRoute) {
    return undefined;
  }

  // Allow public routes and dynamic routes like /products/[slug]
  if (isPublicRoute) {
    return undefined;
  }

  // Redirect to the login page if not logged in and trying to access a protected route
  if (!isLoggedIn) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    return Response.redirect(
      new URL(`/?callbackUrl=${encodedCallbackUrl}`, nextUrl)
    );
  }

  return undefined;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
