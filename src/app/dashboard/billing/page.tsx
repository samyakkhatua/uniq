"use client";

import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();

  const success = searchParams?.get("success");

  let message;
  let textColorClass;
  let bgColorClass;

  if (success === "true") {
    message = "Payment successful!";
    textColorClass = "text-green-600";
    bgColorClass = "bg-green-100";
  } else if (success === "false") {
    message = "Payment failed.";
    textColorClass = "text-red-600";
    bgColorClass = "bg-red-100";
  } else {
    message = "Unknown payment status.";
    textColorClass = "text-gray-600";
    bgColorClass = "bg-gray-100";
  }

  return (
    <>
      <h3 className="text-4xl font-bold tracking-tight pt-4 pb-6">Billing</h3>

      <div className={`p-4 rounded ${bgColorClass}`}>
        <h1 className={`text-xl font-semibold ${textColorClass}`}>
          Payment Status
        </h1>
        <p className={`mt-2 ${textColorClass}`}>{message}</p>
      </div>
    </>
  );
}
