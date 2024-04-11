import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";

import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";

import { useState } from "react";
import { AlertCircle } from "lucide-react";

type ButtonValue = "entrada" | "saida";

export function NewTrasictionHeader() {
  const [selectedButton, setSelectedButton] = useState<ButtonValue | null>(
    null
  );
  function handleButtonClick(buttonValue: ButtonValue | null) {
    setSelectedButton(buttonValue);
  }

  return (
    <form>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-primary" variant="outline">
            Nova Transação
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
              <Input placeholder="Categoria" className="col-span-3" />
            </div>
          </div>

          <div className="flex flex-row justify-center gap-4">
            <Button
              className={`flex gap-3 ${
                selectedButton === "entrada"
                  ? "bg-green-400"
                  : "bg-secondary-foreground"
              } hover:bg-green-500`}
              onClick={() => handleButtonClick("entrada")}
            >
              <ArrowCircleUp fontSize={16} color="#F75A68" />
              Entrada
            </Button>
            <Button
              className={`flex gap-3 ${
                selectedButton === "saida"
                  ? "bg-green-400"
                  : "bg-secondary-foreground"
              } hover:bg-green-500`}
              onClick={() => handleButtonClick("saida")}
            >
              <ArrowCircleDown fontSize={16} color="#00875F" />
              Saida
            </Button>
          </div>

          <DialogDescription className="flex flex-row justify-center items-center gap-2">
            <AlertCircle /> Selecione uma das opções
          </DialogDescription>

          <DialogFooter>
            <Button className="w-full" type="submit">
              Cadastrar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </form>
  );
}
