import { Table, TableBody, TableCell, TableRow } from "./ui/table";
import { TransactionsContext } from "@/contexts/TransactionsContext";
import { dataFormatter, priceFormatter } from "@/utils/formatter";
import { useContextSelector } from "use-context-selector";

export function TransactionTable() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  return (
    <Table className="max-w-[1120px] p-9   gap-4  m-auto">
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell className="font-medium">
              {transaction.description}
            </TableCell>

            <TableCell>
              {transaction.type === "outcome" && "- "}
              {priceFormatter.format(transaction.price)}
            </TableCell>

            <TableCell className="text-right">{transaction.category}</TableCell>
            <TableCell>
              {transaction.createdAt
                ? dataFormatter.format(new Date(transaction.createdAt))
                : "Invalid Date"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
