import {
  createCheckoutLink,
  createCustomerIfNull,
  hasSubscription,
  stripe,
} from "@/lib/stripe";
import Link from "next/link";

import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import HowToUse from "@/components/howToUse";
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

  const top10Recentlogs = await prisma.log.findMany({
    where: {
      userId: user?.id,
    },
    orderBy: {
      created: "desc",
    },
    take: 10,
  });

  let current_usage = 0;

  if (hasSubsciption) {
    const subscriptions = await stripe.subscriptions.list({
      customer: String(user?.stripe_customer_id),
    });
    const invoice = await stripe.invoices.retrieveUpcoming({
      subscription: subscriptions.data.at(0)?.id,
    });

    current_usage = invoice.amount_due;
  }

  return (
    <main className="mb-6">
      <h5 className="text-4xl font-bold tracking-tight pt-4 pb-6">Dashboard</h5>

      <Link
        href="/dashboard/billing"
        className=" text-lg text-black hover:opacity-90 pb-6"
      >
        <p className="mb-2">
          Billing<span aria-hidden="true">→</span>
        </p>
      </Link>

      {hasSubsciption ? (
        <div className="flex flex-col gap-4 pt-2">
          <div className="rounded-md px-4 py-2 bg-emerald-400 font-medium text-white">
            You have an active subscription!
          </div>

          <HowToUse api_key={user?.api_key} />

          <div className="divide-y divide-zinc-200 border border-zinc-200 rounded-md">
            <p className="text-sm text-black px-6 py-4 font-medium">
              Current Usage
            </p>
            <p className="text-sm font-mono text-zinc-800 px-6 py-4">
              {current_usage / 100}
            </p>
          </div>

          <div className="divide-y divide-zinc-200 border border-zinc-200 rounded-md">
            <p className="text-sm text-black px-6 py-4 font-medium">API Key</p>
            <p className="text-sm font-mono text-zinc-800 px-6 py-8">
              {user?.api_key}
            </p>
          </div>

          <div className="divide-y divide-zinc-200 border border-zinc-200 rounded-md">
            <p className="text-sm text-black px-6 py-4 font-medium">
              Log Events
            </p>
            {top10Recentlogs.map((item, index) => (
              <div className="flex items-center gap-4" key={index}>
                <p className="text-sm font-mono text-zinc-800 px-6 py-4">
                  {item.method}
                </p>
                <p className="text-sm font-mono text-zinc-800 px-6 py-4">
                  {item.status}
                </p>
                <p className="text-sm font-mono text-zinc-800 px-6 py-4">
                  {item.created.toDateString()}
                </p>
                <p className="text-sm font-mono text-zinc-800 px-6 py-4">
                  {item.created.toTimeString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="min-h-[60h] grid place-items-center rounded-lg px-6 py-10 bg-slate-200 font-medium">
            <Link
              href={String(checkoutLink)}
              className="font-medium text-base hover:underline"
            >
              You have no active subscription, checkout Now!!!
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
