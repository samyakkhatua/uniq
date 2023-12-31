import { mustBeLoggedIn } from "@/lib/auth";
import Link from "next/link";

export async function Header() {

  const loggedIn = await mustBeLoggedIn();

  return (
    <nav className="max-w-5xl m-auto w-full px-4">
      <div className="flex items-center gap-8 justify-between py-4">
        <Link href={"/"} className="text-2xl font-semibold hover:opacity-90">
          UNIQ
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/#features"
            className="font-medium text-sm text-black hover:opacity-90"
          >
            Features
          </Link>
          <Link
            href="/#pricing"
            className="font-medium text-sm text-black hover:opacity-90"
          >
            Pricing
          </Link>

          {loggedIn ? (
            <>
              <Link
                href="/dashboard"
                className="font-medium text-sm text-white bg-black px-4 py-2 rounded-lg hover:opacity-90"
              >
                Dashboard
              </Link>
              <Link
                href="/api/auth/signout"
                className="font-medium text-sm text-white bg-black px-4 py-2 rounded-lg hover:opacity-90"
              >
                Log Out
              </Link>
            </>
          ) : (
            <Link
              href="/api/auth/signin"
              className="font-medium text-sm text-white bg-black px-4 py-2 rounded-lg hover:opacity-90"
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
