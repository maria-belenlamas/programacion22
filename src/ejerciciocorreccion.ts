let posicion: number = Number(prompt("ingrese su posicion"));

if (posicion === 1) {
  console.log("Entregar medalla de oro");
} else {
  if (posicion === 2) {
    console.log("Entregar medalla de plata");
  } else {
    if (posicion === 3) {
      console.log("Entregar medalla de bronce");
    } else {
      console.log("Entregar mención de participación");
    }
  }
}
