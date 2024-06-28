import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export default function Home() {
  return (
    <main className="flex flex-col w-1/2 space-y-2 p-8 justify-center border-2 border-slate-50 rounded-3xl">
      <h1 className="text-slate-50 text-3xl">Log In</h1>
      <p className="text-slate-50">Log in in our application to control your statistics.</p>
      <Input placeholder="e-mail" type="email" id="email" />
      <Input placeholder="senha" type="password" id="password" />
      <Button>logar</Button>
      <div className="flex w-full h-full space-x-2">
        <Button className="bg-blue-700 w-full rounded p-3 text-slate-50 capitalize">log in with facebook</Button>
        <Button className="bg-red-700 w-full rounded p-3 text-slate-50 capitalize">log in with google</Button>
        <Button className="bg-cyan-700 w-full rounded p-3 text-slate-50 capitalize">log in with twitter</Button>
      </div>
    </main>
  );
}
