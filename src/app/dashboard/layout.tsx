import { Header } from "@/components/header";
import { mustBeLoggedIn } from "@/lib/auth";
import {
  createCheckoutLink,
  createCustomerIfNull,
  hasSubscription,
} from "@/lib/stripe";
import { redirect } from "next/navigation";
import React from "react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const logginStatus = await mustBeLoggedIn();

  if (!logginStatus) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="">
      <Header />
      <div className="max-w-5xl m-auto w-full px-4">{children}</div>
    </div>
  );
}
