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
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";

import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";

import { AlertCircle } from "lucide-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const {
    control,
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
              type="text"
              placeholder="Descrição"
              className="col-span-3"
              required
              {...register("description")}
            />
          </div>

          <div className="grid place-items-center gap-4 w-full">
            <Input
              type="text"
              placeholder="Preço"
              className="col-span-3"
              required
              {...register("price", { valueAsNumber: true })}
            />
          </div>

          <div className="grid place-items-center gap-4 w-full">
            <Input
              type="text"
              placeholder="Categoria"
              className="col-span-3"
              required
              {...register("category")}
            />
          </div>

          <DialogDescription className="flex flex-row justify-center items-center gap-2">
            <AlertCircle />
            Selecione uma das opções
          </DialogDescription>

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              console.log(field);
              return (
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row justify-center gap-4"
                >
                  <RadioGroupItem
                    className="flex max-w-[300px] gap-3 hover:bg-green-400 p-2 items-center rounded-md "
                    value="income"
                  >
                    <ArrowCircleUp fontSize={16} color="#F75A68" />
                    Entrada
                  </RadioGroupItem>

                  <RadioGroupItem
                    className="flex gap-3 hover:bg-rose-400 p-2 items-center rounded-md"
                    value="outcome"
                  >
                    <ArrowCircleDown fontSize={16} color="#00875F" />
                    Saida
                  </RadioGroupItem>
                </RadioGroup>
              );
            }}
          />
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
