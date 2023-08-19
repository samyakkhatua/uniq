import {
  createCheckoutLink,
  createCustomerIfNull,
  hasSubscription,
} from "@/lib/stripe";
import Link from "next/link";

import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
const prisma = new PrismaClient();

export default async function Page() {
  const session = await getServerSession(authOptions);
  const customer = await createCustomerIfNull();
  const hasSubsciption = await hasSubscription();
  const checkoutLink = await createCheckoutLink(String(customer));

  const user = await prisma.user.findFirst({
    where: {
      email: session?.user?.email,
    },
  });

  return (
    <main>
      <h5>Dashboard</h5>

      <Link href="/dashboard/billing"> Billing </Link>

      {hasSubsciption ? (
        <div className="flex flex-col gap-4">
          <div className="rounded-md px-4 py-2 bg-emerald-400 font-medium text-white">
            You have an subscription!
          </div>

          <div className="divide-y divide-zinc-200 border border-zinc-200 rounded-md">
            <p className="text-sm text-black px-6 py-4 font-medium">API Key</p>
            <p className="text-sm font-mono text-zinc-800 px-6 py-8">{user?.api_key}</p>
          </div>
        </div>
      ) : (
        <>
          <div className="min-h-[60h] grid place-items-center rounded-lg px-6 py-10 bg-slate-200">
            <Link
              href={String(checkoutLink)}
              className="font-medium text-base hover:underline"
            >
              You have no subscription, checkout Now!!!
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
