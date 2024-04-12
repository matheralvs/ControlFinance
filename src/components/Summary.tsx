import { Card, CardHeader } from "@/components/ui/card";
import { TransactionsContext } from "@/contexts/TransactionsContext";
import { CurrencyDollar, ArrowCircleUp, ArrowCircleDown } from "phosphor-react";
import { useContext } from "react";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);
  console.log(transactions);

  return (
    <div className=" overflow-hidden w-full max-w-fit mx-auto px-4 ">
      <div className=" overflow-x-scroll flex gap-4 snap-x flex-row py-8">
        <Card className=" min-w-[250px] md:min-w-[350px] whitespace-nowrap snap-center">
          <CardHeader>
            <span>Saida</span>

            <p>R$ 17.400,00</p>

            <ArrowCircleUp fontSize={32} color="#F75A68" />
          </CardHeader>
        </Card>

        <Card className=" min-w-[250px] md:min-w-[350px] whitespace-nowrap snap-center">
          <CardHeader>
            <span>Entrada</span>

            <p>R$ 17.400,00</p>

            <ArrowCircleDown fontSize={32} color="#00875F" />
          </CardHeader>
        </Card>

        <Card className=" min-w-[250px] md:min-w-[350px] whitespace-nowrap snap-center bg-primary">
          <CardHeader>
            <span>Total</span>

            <p>R$ 17.400,00</p>
            <CurrencyDollar fontSize={32} color="#fff" />
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
