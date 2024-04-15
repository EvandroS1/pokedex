import BlueButton from "@/components/utils/BlueButton";
import Button from "@mui/material/Button";
import React from "react";

export default function onBoarding01() {
  return (
    <>
      <div className="h-screen flex flex-col justify-between relative">
      <div className="absolute right-2 top-6">
            <a href="" className="flex justify-center gap-2">
              <button className="text-lg font-semibold">Pular</button>
              <img src="assets/icons/arrow_right.png" alt="" />
            </a>
          </div>
        <div className="h-4/5 flex flex-col justify-center mt-28">
          <header className="flex justify-center">
            <img
              width={350}
              src="assets/login-cadastro/Group_29_1.png"
              alt="characters"
            />
          </header>
          <section>
            <h1 className="text-3xl font-semibold text-center mt-12">
            Está pronto para essa aventura?
            </h1>
            <p className="text-gray-600 text-sm text-center mt-12">
            Basta criar uma conta e começar a explorar o mundo dos Pokémon hoje!
            </p>
          </section>
        </div>
        <div className="mb-14 w-full text-center flex flex-col gap-4">
          {BlueButton('Criar conta')}
          <a href="" className="text-blue-500 text-lg font-bold">Ja tenho uma conta</a>
        </div>
      </div>
    </>
  );
}
