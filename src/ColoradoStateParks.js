import React from "react";
import howManyParks from "./parks/howManyParks";
import { trees, wildlife } from "./parks/RockyMountain";
import { MesaVerde as City } from "./parks/MesaVerde";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  console.log(trees)
  wildlife()
  return (
    <>
      <h1>Colorado State Parks!</h1>

      <City />
    </>
  );
}

export default ColoradoStateParks;