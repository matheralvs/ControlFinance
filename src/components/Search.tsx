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
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
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
        {...register("query")}
      />
      <Button
        type="button"
        disabled={isSubmitting}
        className="bg-primary  disabled:cursor-not-allowed disabled:opacity-5;
"
      >
        Buscar
      </Button>
    </form>
  );
}
