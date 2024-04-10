import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Search() {
  return (
    <div className="max-w-[1120px] flex flex-row  p-9 gap-4  m-auto">
      <Input
        className="placeholder:text-slate-200"
        placeholder="Busque uma transição...."
      />
      <Button className="bg-primary">Buscar</Button>
    </div>
  );
}
