import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";

import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";

import { useState } from "react";
import { AlertCircle } from "lucide-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type ButtonValue = "entrada" | "saida";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  // type: z.enum(["income", "outcome"]),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionHeader() {
  const [selectedButton, setSelectedButton] = useState<ButtonValue | null>(
    null
  );
  function handleButtonClick(buttonValue: ButtonValue | null) {
    setSelectedButton(buttonValue);
  }

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  });

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  }

  return (
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

        <form
          onSubmit={handleSubmit(handleCreateNewTransaction)}
          className="flex flex-col gap-4 py-4 items-center"
        >
          <div className="grid place-items-center gap-4 w-full">
            <Input
              placeholder="Descrição"
              className="col-span-3"
              required
              {...register("description")}
            />
          </div>

          <div className="grid place-items-center gap-4 w-full">
            <Input
              placeholder="Preço"
              className="col-span-3"
              required
              {...register("price", { valueAsNumber: true })}
            />
          </div>

          <div className="grid place-items-center gap-4 w-full">
            <Input
              placeholder="Categoria"
              className="col-span-3"
              required
              {...register("category")}
            />
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

          <Button
            className="w-full disabled:cursor-not-allowed disabled:bg-opacity-5 "
            type="submit"
            disabled={isSubmitting}
          >
            Cadastrar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
