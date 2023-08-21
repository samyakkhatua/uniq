import { Header } from "@/components/header"
import { mustBeLoggedIn } from "@/lib/auth"
import { redirect } from "next/navigation";

export default async function BillingLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    const logginStatus = await mustBeLoggedIn();
    
    if (!logginStatus){
      redirect("/api/auth/signin");
    }

    return (
      <section>
        {children}
      </section>
    )
  }