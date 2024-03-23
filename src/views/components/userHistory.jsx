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

export function UserHistory() {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "-",
      totalAmount: "$250.00",
      paymentMethod: "200",
    },
    {
      invoice: "INV002",
      paymentStatus: "-",
      totalAmount: "$150.00",
      paymentMethod: "454",
    },
    {
      invoice: "INV003",
      paymentStatus: "-",
      totalAmount: "$350.00",
      paymentMethod: "89",
    },
    {
      invoice: "INV004",
      paymentStatus: "-",
      totalAmount: "$450.00",
      paymentMethod: "897",
    },
    {
      invoice: "INV005",
      paymentStatus: "-",
      totalAmount: "$550.00",
      paymentMethod: "100",
    },
    {
      invoice: "INV006",
      paymentStatus: "-",
      totalAmount: "$200.00",
      paymentMethod: "1000",
    },
    {
      invoice: "INV007",
      paymentStatus: "-",
      totalAmount: "$300.00",
      paymentMethod: "147",
    },
    {
      invoice: "INV001",
      paymentStatus: "-",
      totalAmount: "$250.00",
      paymentMethod: "329",
    },
    {
      invoice: "INV002",
      paymentStatus: "-",
      totalAmount: "$150.00",
      paymentMethod: "540",
    },
    {
      invoice: "INV003",
      paymentStatus: "-",
      totalAmount: "$350.00",
      paymentMethod: "310",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "515",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
  ];

  return (
    <ScrollArea className="">
      <ScrollBar />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] bg-secondary text-white">
              USER
            </TableHead>
            <TableHead className="text-center bg-secondary text-white">
              @
            </TableHead>
            <TableHead className="text-center bg-secondary text-white">
              BET
            </TableHead>
            <TableHead className="text-center bg-secondary text-white">
              PROFIT
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="text-center text-primary bg-secondary">
                {invoice.invoice}
              </TableCell>
              <TableCell className="text-center text-primary bg-secondary">
                {invoice.paymentStatus}
              </TableCell>
              <TableCell className="text-center text-primary bg-secondary">
                {invoice.paymentMethod}
              </TableCell>
              <TableCell className="text-center text-primary bg-secondary">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
}
