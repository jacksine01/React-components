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

export function UserHistory({ betData }) {
  const betDataArray = Array.isArray(betData) ? betData : [];

  const invoices = [...betDataArray];

  return (
    <ScrollArea>
      <ScrollBar />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-right bg-secondary text-white">
              USER
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
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, index) => (
            <TableRow key={index}>
              <TableCell className="text-right text-primary bg-secondary">
                {invoice.user}
              </TableCell>
              <TableCell className="text-right text-primary bg-secondary">
                {invoice.paymentStatus}
              </TableCell>
              <TableCell className="text-right text-primary bg-secondary">
                {invoice.betAmount}
              </TableCell>
              <TableCell className="text-right text-primary bg-secondary">
                {invoice.profit}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
}
