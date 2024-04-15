import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function Search() {
  const { handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  function handleSearchTransactions(data: SearchFormInputs) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearchTransactions)}
      className="max-w-[1120px] flex flex-row  p-9 gap-4  m-auto"
    >
      <Input
        className="placeholder:text-slate-200"
        placeholder="Busque uma transição...."
      />
      <Button className="bg-primary">Buscar</Button>
    </form>
  );
}
