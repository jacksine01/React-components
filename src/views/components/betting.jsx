import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import shortid from "shortid";

export function Betting({ addBetData }) {
  const [betAmount, setBetAmount] = useState("");
  const [payoutNumber, setPayoutNumber] = useState("");

  const handleBet = () => {
    const newBet = {
      id: shortid.generate(),
      betAmount: parseFloat(betAmount),
      payoutNumber: parseFloat(payoutNumber),
    };

    addBetData(newBet);

    setBetAmount("");
    setPayoutNumber("");
  };

  return (
    <div>
      <Input
        variant="secondary"
        size="xl"
        className="block m-[auto] mt-[100px] mb-2 items-center "
        type="number"
        min="1"
        max="20000"
        placeholder="enter bet"
        value={betAmount}
        onChange={(e) => setBetAmount(e.target.value)}
      />
      <Input
        variant="secondary"
        size="xl"
        className="block m-[auto] mb-2 items-center"
        type="number"
        min="1.01"
        max="100"
        step="1.00"
        placeholder="payout number"
        value={payoutNumber}
        onChange={(e) => setPayoutNumber(e.target.value)}
      />
      <Button
        className="w-[65%] ml-[105px] text-[30px] h-[3.5rem]"
        variant="primary"
        type="submit"
        onClick={handleBet}
      >
        BET
      </Button>
    </div>
  );
}
