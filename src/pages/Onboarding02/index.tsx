import Button from "@mui/material/Button";
import React from "react";

export default function onBoarding01() {
  return (
    <>
      <div className="h-screen flex flex-col justify-between">
        <div className="h-4/5 flex flex-col justify-center">
          <header className="flex justify-center">
            <img
              width={350}
              src="assets/onBoarding/Group_29.png"
              alt="characters"
            />
          </header>
          <section>
            <h1 className="text-3xl font-semibold text-center mt-12">
              Mantenha sua Pokédex atualizada
            </h1>
            <p className="text-gray-600 text-sm text-center mt-12">
              Cadastre-se e mantenha seu perfil, pokémon favoritos,
              configurações e muito mais, salvos no aplicativo, mesmo sem
              conexão com a internet.
            </p>
          </section>
        </div>
        <div className="mb-12">
          <Button
            variant="contained"
            className="rounded-full w-full h-14 normal-case text-lg"
          >
            Vamos começar!
          </Button>
        </div>
      </div>
    </>
  );
}
