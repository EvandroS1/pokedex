/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image"; 
import {  ChevronLeft } from "lucide-react";
import BlueButton from "@/components/utils/BlueButton";
import { Button } from "@/components/ui/button";
import TransparentButton from "@/components/utils/TransparentButton";

export default function LoginEscolha() { 
  return (
    <>
      <div className="h-screen flex flex-col">
        <header className="justify-center flex">
          <div className="text-center">
          <div className="flex text-center justify-center py-5">
            <ChevronLeft className="flex absolute top-5 left-0 "/>
          <h1 className="font-semibold text-base text-center">Entrar</h1>
          </div>
        <img
                width={280}
                src="assets/EscolhaLogin/Group_39.png"
                alt="characters"
              />
              </div>
        </header>
        <div className="">
          <h2 className="text-3xl text-center font-semibold"> Que bom te ver aqui novamente!</h2>
          <p className="text-center text-gray-600 mt-2">Como deseja se conectar?</p>
          <div className="flex flex-col gap-3 mt-4">
          
          <TransparentButton text="Continuar com o Google" icon="assets\icons\imgGoogle.png" />
          <TransparentButton text="Continuar com o GitHub" icon="assets\icons\Vector.png" />

          {BlueButton('Continuar com um e-mail')}
          </div>

        </div>
      </div>
    </>
  );
}
