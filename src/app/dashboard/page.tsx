import {
  createCheckoutLink,
  createCustomerIfNull,
  hasSubscription,
} from "@/lib/stripe";
import Link from "next/link";

export default async function Page() {
  const customer = await createCustomerIfNull();
  const hasSubsciption = await hasSubscription();
  const checkoutLink = await createCheckoutLink(String(customer));

  return (
    <main>

      <h5>Dashboard</h5>

      {hasSubsciption ? (
        <div className="rounded-md px-4 py-2 bg-emerald-400 font-medium text-white">
            You have an subscription!
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
