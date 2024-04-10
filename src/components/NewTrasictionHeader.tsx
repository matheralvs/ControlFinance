import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";
import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";

export function NewTrasictionHeader() {
  return (
    <div className="flex justify-center gap-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-primary" variant="outline">
            New Transition
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Nova Transação</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 py-4 items-center">
            <div className="grid place-items-center gap-4 w-full">
              <Input placeholder="Descrição" className="col-span-3" />
            </div>

            <div className="grid place-items-center gap-4 w-full">
              <Input placeholder="Preço" className="col-span-3" />
            </div>

            <div className="grid place-items-center gap-4 w-full">
              <Input placeholder="Preço" className="col-span-3" />
            </div>
          </div>

          <div className="flex flex-row justify-center gap-4">
            <Button className="flex gap-3">
              <ArrowCircleUp fontSize={16} color="#F75A68" />
              Entrada
            </Button>
            <Button className="flex gap-3">
              <ArrowCircleDown fontSize={16} color="#00875F" />
              Saida
            </Button>
          </div>

          <DialogFooter>
            <Button type="submit">Cadastrar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
