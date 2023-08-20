import { Header } from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />

      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-5xl p-6 rounded-md">
          <div className="flex mb-16">
            <div className="max-w-xl mt-[150px] mb-16">
              <h1 className="text-5xl font-semibold ">
                Generate Unique IDs with Our UUID Generator API
              </h1>
              <p className="text-lg text-gray-600 mb-6 pt-2">
                Welcome to the <strong>UUID Generator API</strong> – the perfect
                solution for generating universally unique identifiers quickly
                and efficiently for your applications.
              </p>
            </div>
            <div>
              <img className="" src="/images/uniq_logo.png" alt="Uniq_logo" />
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-3">What is a UUID?</h2>
          <p className="text-gray-600 mb-6">
            A UUID (Universally Unique Identifier) is a 128-bit identifier
            that's unique across the globe. It's commonly used in various
            applications to ensure data integrity, traceability, and uniqueness.
          </p>

          <h2 className="text-xl font-semibold mb-3">
            Features That Set Us Apart
          </h2>
          <ul className="list-disc pl-6 mb-6">
            <li>
              Fast and Reliable: Our API is designed for speed and
              dependability, ensuring you can generate UUIDs seamlessly without
              any hassle.
            </li>
            <li>
              Secure: We prioritize the security of your data, so you can
              generate IDs with confidence, knowing that your information is
              safeguarded.
            </li>
            <li>
              Scalable: Whether you're handling a small project or a large-scale
              application, our API scales with your needs, providing consistent
              performance.
            </li>
            <li>
              Customizable: Tailor your UUIDs to meet your application's
              specific requirements using our flexible API options.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-3">
            Benefits of Using Our UUID Generator API
          </h2>
          <ul className="list-disc pl-6 mb-6">
            <li>
              Save Time: Say goodbye to writing complex UUID generation code.
              Our API simplifies the process and lets you focus on your core
              application logic.
            </li>
            <li>
              Consistency: Ensure data integrity across your systems by
              utilizing unique IDs that are virtually impossible to duplicate.
            </li>
            <li>
              Developer-Friendly: Integrate our API seamlessly into your
              projects, no matter your programming language or platform of
              choice.
            </li>
            <li>
              Efficiency: Free up valuable resources by letting our API handle
              the UUID generation, allowing you to allocate more time to
              building great features.
            </li>
          </ul>

          <div className="flex justify-between mb-6">
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-center"
            >
              Get Started
            </a>
            <a
              href="#"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full text-center"
            >
              Explore Plans
            </a>
          </div>

          <p className="text-center text-gray-500">
            Join our growing community of developers and businesses using our
            UUID Generator API to enhance their applications. Start generating
            unique IDs today!
          </p>
        </div>
      </div>
    </main>
  );
}
