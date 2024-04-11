import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";

interface Transaction {
  id: number;
  description: string;
  type: "entrada" | "saída";
  price: number;
  category: string;
  createAt: string;
}

export function TransactionTable() {
  const [transactions, setTransaction] = useState<Transaction[]>([]);

  async function loadTransactions() {
    const resp = await fetch("http://localhost:3000/transactions");
    const data = await resp.json();

    setTransaction(data);
  }
  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <Table className="max-w-[1120px]  p-9 gap-4  m-auto">
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell className="font-medium">
              {transaction.description}
            </TableCell>
            <TableCell>{transaction.type}</TableCell>
            <TableCell>{transaction.price}</TableCell>
            <TableCell className="text-right">{transaction.category}</TableCell>
            <TableCell>{transaction.createAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
