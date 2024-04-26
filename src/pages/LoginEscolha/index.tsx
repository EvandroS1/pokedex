/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image"; 
import {  ChevronLeft } from "lucide-react";
import BlueButton from "@/components/utils/BlueButton";
import { Button } from "@/components/ui/button";
import TransparentButton from "@/components/utils/TransparentButton";

export default function LoginEscolha() { 
  return (
      <div className="h-screen flex flex-col gap-4 text-center justify-center">
        <header className="justify-center flex">
          <div className="flex gap-36 py-5 absolute top-5 left-0">
            <ChevronLeft />
          <h1 className="font-semibold text-base ">Entrar</h1>
          </div>
        <img
                width={280}
                src="assets/EscolhaLogin/Group_39.png"
                alt="characters"
              />
        </header>
        <div className="">
            <h2 className="text-3xl  font-semibold"> Que bom te ver aqui novamente!</h2>
            <p className=" text-gray-600 mt-2">Como deseja se conectar?</p>
          <div className="flex flex-col gap-3 mt-14">
          
          <TransparentButton text="Continuar com o Google" icon="assets\icons\imgGoogle.png" />
          <TransparentButton text="Continuar com o GitHub" icon="assets\icons\Vector.png" width={20} />

          {BlueButton('Continuar com um e-mail')}
          </div>

        </div>
      </div>
  );
}
