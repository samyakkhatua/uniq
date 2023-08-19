import { Header } from "@/components/header";
import { mustBeLoggedIn } from "@/lib/auth";
import {
  createCheckoutLink,
  createCustomerIfNull,
  hasSubscription,
} from "@/lib/stripe";
import React from "react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await mustBeLoggedIn();

  return (
    <div className="">
      <Header />
      <div className="max-w-5xl m-auto w-full px-4">{children}</div>
    </div>
  );
}
