/* eslint-disable @next/next/no-img-element */
import React from "react";
import {  ChevronLeft } from "lucide-react";
import BlueButton from "@/components/utils/BlueButton";
import TransparentButton from "@/components/utils/TransparentButton";

export default function Cadastro() { 
  return (
      <div className="h-screen flex flex-col gap-4 text-center justify-center">
        <header className="justify-center items-center relative flex flex-col">
            <div className="absolute top-0 left-0">
              <ChevronLeft />
            </div>
          <div className="flex justify-center items-center pb-5 w-full">
          <h1 className="font-semibold text-base ">Criar conta</h1>
          </div>
        <img
                width={280}
                src="assets/cadastro/Group_39.png"
                alt="characters"
              />
        </header>
        <div className="">
            <h2 className="text-3xl  font-semibold">Falta pouco para explorar esse mundo!</h2>
            <p className=" text-gray-600 mt-2">Como deseja se conectar?</p>
          <div className="flex flex-col gap-3 mt-14">
          
          <TransparentButton text="Continuar com o Google" icon="assets\icons\imgGoogle.png" />
          <TransparentButton text="Continuar com a Apple" icon="assets\icons\Vector.png" width={20} />

          {BlueButton('Continuar com um e-mail')}
          </div>

        </div>
      </div>
  );
}
