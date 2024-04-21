import { Button } from './ui/button';
import { Input } from './ui/input';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { TransactionsContext } from '@/contexts/TransactionsContext';
import { useContext } from 'react';

const searchFormSchema = z.object({
  query: z.string()
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function Search() {
  const { fetchTransactions } = useContext(TransactionsContext);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query);
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearchTransactions)}
      className='max-w-[1120px] flex flex-row  p-9 gap-4  m-auto'
    >
      <Input
        type='text'
        placeholder='Busque uma transição....'
        {...register('query')}
      />
      <Button
        type='submit'
        disabled={isSubmitting}
        className='bg-primary  disabled:cursor-not-allowed disabled:opacity-5;
'
      >
        Buscar
      </Button>
    </form>
  );
}
