import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Betting() {
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
      />
      <Input
        variant="secondary"
        size="xl"
        className="block m-[auto] mb-2 items-center"
        type="number"
        min="1.01"
        max="1000"
        step="1.01"
        placeholder="payout number"
      />
      <Button
        className="w-[65%] ml-[105px] text-[30px] h-[3.5rem]"
        variant="primary"
      >
        BET
      </Button>
    </div>
  );
}
