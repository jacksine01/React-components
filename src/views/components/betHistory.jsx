import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function BetHistory() {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "-",
      totalAmount: "$250.00",
      paymentMethod: "200",
      hash: "bc7d387dbd484a57284c14c3da0f1",
    },
    {
      invoice: "INV002",
      paymentStatus: "-",
      totalAmount: "$150.00",
      paymentMethod: "454",
      hash: "bc7d387dbd484a57284c14c3da0f1",
    },
    {
      invoice: "INV003",
      paymentStatus: "-",
      totalAmount: "$350.00",
      paymentMethod: "89",
      hash: "bc7d387dbd484a57284c14c3da0f1",
    },
    {
      invoice: "INV004",
      paymentStatus: "-",
      totalAmount: "$450.00",
      paymentMethod: "897",
      hash: "bc7d387dbd484a57284c14c3da0f1",
    },
    {
      invoice: "INV005",
      paymentStatus: "-",
      totalAmount: "$550.00",
      paymentMethod: "100",
      hash: "bc7d387dbd484a57284c14c3da0f1",
    },
    {
      invoice: "INV006",
      paymentStatus: "-",
      totalAmount: "$200.00",
      paymentMethod: "1000",
      hash: "bc7d387dbd484a57284c14c3da0f1",
    },
    {
      invoice: "INV007",
      paymentStatus: "-",
      totalAmount: "$300.00",
      paymentMethod: "147",
      hash: "bc7d387dbd484a57284c14c3da0f1",
    },
    {
      invoice: "INV001",
      paymentStatus: "-",
      totalAmount: "$250.00",
      paymentMethod: "329",
      hash: "bc7d387dbd484a57284c14c3da0f1",
    },
    {
      invoice: "INV001",
      paymentStatus: "-",
      totalAmount: "$250.00",
      paymentMethod: "200",
      hash: "bc7d387dbd484a57284c14c3da0f1",
    },
    {
      invoice: "INV002",
      paymentStatus: "-",
      totalAmount: "$150.00",
      paymentMethod: "454",
      hash: "bc7d387dbd484a57284c14c3da0f1",
    },
    {
      invoice: "INV003",
      paymentStatus: "-",
      totalAmount: "$350.00",
      paymentMethod: "89",
      hash: "bc7d387dbd484a57284c14c3da0f1",
    },
    {
      invoice: "INV001",
      paymentStatus: "-",
      totalAmount: "$250.00",
      paymentMethod: "200",
      hash: "bc7d387dbd484a57284c14c3da0f1",
    },
    {
      invoice: "INV002",
      paymentStatus: "-",
      totalAmount: "$150.00",
      paymentMethod: "454",
      hash: "bc7d387dbd484a57284c14c3da0f1",
    },
    {
      invoice: "INV003",
      paymentStatus: "-",
      totalAmount: "$350.00",
      paymentMethod: "89",
      hash: "bc7d387dbd484a57284c14c3da0f1",
    },
    {
      invoice: "INV004",
      paymentStatus: "-",
      totalAmount: "$450.00",
      paymentMethod: "897",
      hash: "bc7d387dbd484a57284c14c3da0f1",
    },
    {
      invoice: "INV005",
      paymentStatus: "-",
      totalAmount: "$550.00",
      paymentMethod: "100",
      hash: "bc7d387dbd484a57284c14c3da0f1",
    },
    {
      invoice: "INV006",
      paymentStatus: "-",
      totalAmount: "$200.00",
      paymentMethod: "1000",
      hash: "bc7d387dbd484a57284c14c3da0f1",
    },
    {
      invoice: "INV003",
      paymentStatus: "-",
      totalAmount: "$350.00",
      paymentMethod: "89",
      hash: "bc7d387dbd484a57284c14c3da0f1",
    },
    {
      invoice: "INV001",
      paymentStatus: "-",
      totalAmount: "$250.00",
      paymentMethod: "200",
      hash: "bc7d387dbd484a57284c14c3da0f1",
    },
    {
      invoice: "INV002",
      paymentStatus: "-",
      totalAmount: "$150.00",
      paymentMethod: "454",
      hash: "bc7d387dbd484a57284c14c3da0f1",
    },
    {
      invoice: "INV003",
      paymentStatus: "-",
      totalAmount: "$350.00",
      paymentMethod: "89",
      hash: "bc7d387dbd484a57284c14c3da0f1",
    },
    {
      invoice: "INV004",
      paymentStatus: "-",
      totalAmount: "$450.00",
      paymentMethod: "897",
      hash: "bc7d387dbd484a57284c14c3da0f1",
    },
    {
      invoice: "INV005",
      paymentStatus: "-",
      totalAmount: "$550.00",
      paymentMethod: "100",
      hash: "bc7d387dbd484a57284c14c3da0f1",
    },
    {
      invoice: "INV006",
      paymentStatus: "-",
      totalAmount: "$200.00",
      paymentMethod: "1000",
      hash: "bc7d387dbd484a57284c14c3da0f1",
    },
  ];

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
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className=" w-[333px] text-right text-primary bg-secondary">
                {invoice.invoice}
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
              <TableCell className=" w-[333px] text-right pr-4 text-white bg-secondary">
                {invoice.hash}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
}
