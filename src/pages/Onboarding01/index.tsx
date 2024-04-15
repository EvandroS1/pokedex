
import BlueButton from "@/components/utils/BlueButton";
import React from "react";



export default function onBoarding01() {
  return (
    <>
        <div className="h-screen flex flex-col justify-between">
          <div className="h-4/5 flex flex-col justify-center">
            <header className="flex justify-center">
              <img
                width={350}
                src="assets/onBoarding/Group_28.png"
                alt="characters"
              />
            </header>
            <section>
              <h1 className="text-3xl font-semibold text-center mt-12">
                Todos os Pokémons em um só Lugar
              </h1>
              <p className="text-gray-600 text-sm text-center mt-12">
                Acesse uma vasta lista de Pokémon de todas as gerações já feitas pela
                Nintendo
              </p>
            </section>
          </div>
          <div className="mb-12">
            {BlueButton('Continuar')}
          </div>
        </div>
        </>
  
  );
}
