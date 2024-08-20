'use client' 

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { GoogleLogo, FacebookLogo, XLogo } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function handleNavigation() {
    router.push('/home');
  }

  return (
    <main className="flex flex-col w-1/4 space-y-2 p-8 justify-center border-2 border-slate-50 rounded-3xl">
      <h1 className="text-slate-50 text-3xl">Log In</h1>
      <p className="text-slate-50">Log in in our application to control your statistics.</p>
      <Input placeholder="e-mail" type="email" id="email" />
      <Input placeholder="senha" type="password" id="password" />
      <Button onClick={handleNavigation}>logar</Button>
      <div className="flex w-full h-full space-x-2">
        <Button className="bg-blue-700 w-full rounded p-3 text-slate-50 capitalize flex items-center justify-center"><FacebookLogo size={32} color="#ffffff" /></Button>
        <Button className="bg-red-700 w-full rounded p-3 text-slate-50 capitalize flex items-center justify-center"><GoogleLogo size={32} color="#ffffff" /></Button>
        <Button className="bg-cyan-700 w-full rounded p-3 text-slate-50 capitalize flex items-center justify-center"><XLogo size={32} color="#ffffff" /></Button>
      </div>
    </main>
  );
}
