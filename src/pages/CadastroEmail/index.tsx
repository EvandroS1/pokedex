/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import BlueButton from "@/components/utils/BlueButton";
import InputBox from "@/components/utils/InputBox";

export default function Cadastro() {
  const [desabled, setDesabled] = useState(true)
  return (
    <div className="flex flex-col justify-between h-screen">
    <div className="flex flex-col gap-4 mt-10 text-center justify-center">
      <header className="justify-center items-center relative flex flex-col">
        <div className="absolute top-0 left-0">
          <ChevronLeft />
        </div>
        <div className="flex justify-center items-center pb-5 w-full">
          <h1 className="font-bold text-base ">Criar conta</h1>
        </div>
      </header>
      <div className="">
        <h2 className="text-3xl  font-light">
          Vamos começar!
          <br />{" "}
        </h2>
        <h2 className="text-3xl  font-bold pb-6">
          Qual é o seu e-mail?</h2>
          {InputBox(
            {
              type:'text',
              placeholder:'E-mail'
            }
          )} 
          <p className="text-gray-700 pt-2">Use um endereço de e-mail válido.</p>
      </div>
        </div>
        <div className="mb-10">
          {BlueButton("Continuar", desabled)}
        </div>
    </div>
  );
}
