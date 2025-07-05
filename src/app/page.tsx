import TestForms from "@/forms/signInForms/TestForms";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#121212] text-white flex flex-col">
      <div className="p-5 px-8 flex items-center justify-between shadow-md">
        <div>
          <Image src="/logo.png" alt="logo" height={100} width={100} />
        </div>
        <div className="flex gap-6 text-lg font-medium">
          <Link href="/all-forms" className="group flex items-center gap-1 transition">
            <span className="text-white">Forms</span>
            <span className="text-white group-hover:text-violet-600 text-xl">•</span>
          </Link>
          <Link href="/Contribute" className="group flex items-center gap-1 transition">
            <span className="text-white">Contribute</span>
            <span className="text-white group-hover:text-violet-600 text-xl">•</span>
          </Link>
        </div>

        <div className="flex gap-3">
          <Link
            href="/log-in"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition font-semibold"
          >
            Log In
          </Link>
          <Link
            href="/register"
            className="bg-white text-[#121212] hover:bg-gray-200 px-4 py-2 rounded-lg transition font-semibold"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 mt-40">
        <h1 className="text-4xl md:text-5xl font-extrabold max-w-3xl leading-snug">
          A UI Form Library with Built-in Email Sending
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-xl">
          Build forms quickly and send emails directly from your app — without relying on third-party email APIs.
        </p>
        <Link
          href="/all-forms"
          className="mt-6 bg-violet-600  text-white px-6 py-3 rounded-md text-lg font-semibold transition"
        >
          Explore Forms
        </Link>
      </div>

      <div className="mt-10 ml-5">
        <h1 className="font-sans text-5xl">Latest Forms</h1>
      </div>

      <TestForms/>
    </div>
  );
}
