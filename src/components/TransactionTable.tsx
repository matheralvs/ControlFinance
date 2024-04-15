import { useContext } from "react";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";
import { TransactionsContext } from "@/contexts/TransactionsContext";
import { dataFormatter, priceFormatter } from "@/utils/formatter";

export function TransactionTable() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Table className="max-w-[1120px] p-9   gap-4  m-auto">
      <TableBody className=" p-28 bg-gray-900  ">
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell className="font-medium">
              {transaction.description}
            </TableCell>

            <TableCell>
              {transaction.type === "income" && " - "}
              {priceFormatter.format(transaction.price)}
            </TableCell>

            <TableCell className="text-right">{transaction.category}</TableCell>
            <TableCell>
              {dataFormatter.format(new Date(transaction.createAt))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
