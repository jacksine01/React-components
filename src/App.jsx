//button components:-

// import { Button } from "@/components/ui/button";
// function App() {
//   return (
//     <>
//       <div className="px-20">
//         <Button variant="primary" size="lg">
//           hello world!!
//         </Button>
//       </div>
//     </>
//   );
// }
// export default App;

// table components:-

// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// const invoices = [
//   {
//     invoice: "INV001",
//     paymentStatus: "Paid",
//     totalAmount: "$250.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV002",
//     paymentStatus: "Pending",
//     totalAmount: "$150.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV003",
//     paymentStatus: "Unpaid",
//     totalAmount: "$350.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV004",
//     paymentStatus: "Paid",
//     totalAmount: "$450.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV005",
//     paymentStatus: "Paid",
//     totalAmount: "$550.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV006",
//     paymentStatus: "Pending",
//     totalAmount: "$200.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV007",
//     paymentStatus: "Unpaid",
//     totalAmount: "$300.00",
//     paymentMethod: "Credit Card",
//   },
// ];

// export default function TableDemo() {
//   return (
//     <Table>
//       <TableCaption>A list of your recent invoices.</TableCaption>
//       <TableHeader>
//         <TableRow>
//           <TableHead className="w-[100px] bg-secondary text-white">
//             Invoice
//           </TableHead>
//           <TableHead className="text-center bg-secondary text-white">
//             Status
//           </TableHead>
//           <TableHead className="text-center bg-secondary text-white">
//             Method
//           </TableHead>
//           <TableHead className="text-center bg-secondary text-white">
//             Amount
//           </TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {invoices.map((invoice) => (
//           <TableRow key={invoice.invoice}>
//             <TableCell className="text-center text-primary bg-secondary">
//               {invoice.invoice}
//             </TableCell>
//             <TableCell className="text-center text-primary bg-secondary">
//               {invoice.paymentStatus}
//             </TableCell>
//             <TableCell className="text-center text-primary bg-secondary">
//               {invoice.paymentMethod}
//             </TableCell>
//             <TableCell className="text-center text-primary bg-secondary">
//               {invoice.totalAmount}
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//       <TableFooter>
//         <TableRow>
//           <TableCell colSpan={2} className=" text-white bg-secondary">
//             Online: 10
//           </TableCell>
//           <TableCell className="text-left text-white bg-secondary">
//             Playing: 7
//           </TableCell>
//           <TableCell colSpan={2} className="text-right text-white bg-secondary">
//             Betting: 2,500 bits
//           </TableCell>
//         </TableRow>
//       </TableFooter>
//     </Table>
//   );
// }

// input components:-

// import { Input } from "@/components/ui/input";

// export default function InputDemo() {
//   return (
//     <div>
//       <Input variant="secondary" size="lg" type="email" placeholder="Email" />
//     </div>
//   );
// }

// Scroll-area components:-

import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  );
}

// switch components:-

// import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";

// export default function SwitchDemo() {
//   return (
//     <div className="flex items-center space-x-2">
//       <Switch id="airplane-mode" />
//       <Label htmlFor="airplane-mode">Darkmode</Label>
//     </div>
//   );
// }
