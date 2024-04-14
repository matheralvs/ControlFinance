import { Card, CardHeader } from "@/components/ui/card";
import { TransactionsContext } from "@/contexts/TransactionsContext";
import { dataFormatter, priceFormatter } from "@/utils/formatter";

import { CurrencyDollar, ArrowCircleUp, ArrowCircleDown } from "phosphor-react";

import { useContext } from "react";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcome += transaction.price;
        acc.total -= transaction.price;
      }
      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return (
    <div className=" overflow-hidden w-full max-w-fit mx-auto px-4 ">
      <div className=" overflow-x-scroll flex gap-4 snap-x flex-row py-8">
        <Card className=" min-w-[250px] md:min-w-[350px] whitespace-nowrap snap-center">
          <CardHeader>
            <span>Saida</span>

            <strong>{priceFormatter.format(summary.income)}</strong>

            <ArrowCircleUp fontSize={32} color="#F75A68" />
          </CardHeader>
        </Card>

        <Card className=" min-w-[250px] md:min-w-[350px] whitespace-nowrap snap-center">
          <CardHeader>
            <span>Entrada</span>

            <strong>{priceFormatter.format(summary.outcome)}</strong>

            <ArrowCircleDown fontSize={32} color="#00875F" />
          </CardHeader>
        </Card>

        <Card className=" min-w-[250px] md:min-w-[350px] whitespace-nowrap snap-center bg-primary">
          <CardHeader>
            <span>Total</span>

            <strong>{priceFormatter.format(summary.total)}</strong>
            <CurrencyDollar fontSize={32} color="#fff" />
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
