"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
export default function Home() {
  const [firstInputValue, setFirstInputValue] = useState(0);
  const [secondInputValue, setSecondInputValue] = useState(0);
  const [answer, setAnswer] = useState(0);
  const FirstInputValue = (e: { target: { value: string } }) => {
    setFirstInputValue(Number(e.target.value));
  };
  const SecondInputValue = (e: { target: { value: string } }) => {
    setSecondInputValue(Number(e.target.value));
  };
  console.log(firstInputValue, secondInputValue);

  const [selectedOperation, setSelectedOperation] = useState("");
  const handleChange = (value: string) => {
    setSelectedOperation(value);
  };
  const calculator = () => {
    if (selectedOperation == "+") {
      setAnswer(firstInputValue + secondInputValue);
    } else if (selectedOperation == "-") {
      setAnswer(firstInputValue - secondInputValue);
    } else if (selectedOperation == "*") {
      setAnswer(firstInputValue * secondInputValue);
    } else {
      setAnswer(firstInputValue / secondInputValue);
    }
  };

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-gradient-to-r from-cyan-500 to-blue-500">
      <Input
        className="w-[300px] font-bold font-mono h-[50px] text-3xl"
        value={firstInputValue}
        onChange={FirstInputValue}
      />
      <Select onValueChange={handleChange}>
        <SelectTrigger className="w-[100px] text-xl h-[50px]">
          <SelectValue placeholder="Select " />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="+">+</SelectItem>
            <SelectItem value="-">-</SelectItem>
            <SelectItem value="*">*</SelectItem>
            <SelectItem value="/">/</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input
        className="w-[300px] font-bold font-mono h-[50px] text-3xl"
        value={secondInputValue}
        onChange={SecondInputValue}
      />
      <Button className="w-[70px] text-xl h-[50px]" onClick={calculator}>
        =
      </Button>
      <div className="w-[300px] font-bold font-mono h-[50px] text-xl flex justify-start outline outline-gray-200 items-center rounded-md">
        {answer}
      </div>
    </div>
  );
}
