import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export default function Home() {
  return (
    <main className="flex flex-col w-1/2 space-y-2 p-8 justify-center border-2 border-slate-50 rounded-3xl">
      <Input placeholder="e-mail" type="email" id="email" />
      <Input placeholder="senha" type="password" id="password" />
      <Button>Logar</Button>
    </main>
  );
}
