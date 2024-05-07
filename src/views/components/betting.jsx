import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";

export function Betting({ addBetData }) {
  const [betAmount, setBetAmount] = useState("");
  const [payoutNumber, setPayoutNumber] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [betCount, setBetCount] = useState(0);

  const handleBet = async (e) => {
    // const newBet = {
    //   id: shortid.generate(),
    //   betAmount: betAmount,
    //   payoutNumber: payoutNumber,
    // };

    const payload = {
      betAmount: betAmount,
      payoutNumber: payoutNumber,
    };
    addBetData(payload);

    setBetAmount("");
    setPayoutNumber("");

    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/addBet", payload);
      setBetAmount(""), setPayoutNumber("");
      setTotalAmount((prevTotal) => prevTotal + parseFloat(betAmount));
      setBetCount((prevCount) => prevCount + 1);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
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
        className="w-[65%] ml-[100px] text-[30px] h-[3.5rem]"
        variant="primary"
        type="submit"
        onClick={handleBet}
      >
        BET
      </Button>
      <p>Total Amount: {totalAmount}</p>
      <p>Playing: {betCount}</p>
    </div>
  );
}
