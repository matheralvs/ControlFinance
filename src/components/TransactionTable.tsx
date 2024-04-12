import { useContext } from "react";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";
import { TransactionsContext } from "@/contexts/TransactionsContext";

export function TransactionTable() {
  const { transactions } = useContext(TransactionsContext);
  console.log(transactions);

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
