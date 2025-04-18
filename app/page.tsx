import Image from "next/image";
import Head from "next/head";
import { lusitana } from "./ui/fonts";
import heroDesktop from "../public/hero-desktop.png";
import heroMobile from "../public/hero-mobile.png"
import AcmeLogo from "./ui/acme-logo";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";


export default function Home() {
  
  return (

    <>
    <Head>
      <title>meta titre</title>
      <meta name="description" content="ceci est meta description" />
      <meta property="og:title" content="ceci est meta titre" />
      <meta property="og:description" content="ceci est meta description new" />
    </Head>

    <main className="flex min-h-screen flex-col p-6">
    <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
      { /* logo */}
      <AcmeLogo />
    </div>
    <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
      <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Bienvenue chez ACME</strong>
            <br />
            Application de Next.js proposée par Vercel.
        </p>
        <p><Link href="/login" className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">Login <ArrowRightIcon className="w-5 md:w-6"/></Link></p>
      </div>
      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      { /* image */}
          <Image src={heroDesktop} className="hidden md:block" width={1000} height={760} alt="Capture d'écran version desktop"/>
          <Image src={heroMobile} className="block md:hidden" width={560} height={620} alt="Capture d'écran version mobile"/>
      </div>
    </div>
  </main>

  </>
  );
}
