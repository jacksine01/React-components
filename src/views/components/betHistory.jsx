import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useQuery } from "@tanstack/react-query";

export function BetHistory() {
  const { data } = useQuery({
    queryKey: ["IRandomNumberLedger"],
    refetchInterval: 5000,
    queryFn: async () =>
      await fetch(`http://localhost:3001/api/socket`).then((response) =>
        response.json()
      ),
  });
  console.log({ data });

  return (
    <ScrollArea className="h-[545px]">
      <ScrollBar />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-right bg-secondary text-white">
              BUST
            </TableHead>
            <TableHead className="text-right bg-secondary text-white">
              @
            </TableHead>
            <TableHead className="text-right bg-secondary text-white">
              BET
            </TableHead>
            <TableHead className="text-right bg-secondary text-white">
              PROFIT
            </TableHead>
            <TableHead className="text-right pr-4 bg-secondary text-white">
              HASH
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data &&
            data.map((invoice, index) => (
              <TableRow key={index}>
                <TableCell className=" w-[333px] text-right text-primary bg-secondary">
                  {invoice.randomNumber}
                </TableCell>
                <TableCell className=" w-[333px] text-right text-white bg-secondary">
                  {invoice.paymentStatus}
                </TableCell>
                <TableCell className=" w-[333px] text-right text-white bg-secondary">
                  {invoice.paymentMethod}
                </TableCell>
                <TableCell className=" w-[333px] text-right text-white bg-secondary">
                  {invoice.totalAmount}
                </TableCell>
                <TableCell className=" w-[333px] text-right pr-4 text-white bg-secondary overflow-hidden">
                  {invoice.hash}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
}
