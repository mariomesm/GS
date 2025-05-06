import { getCharactersById } from "./api.js";

const data = new URLSearchParams(window.location.search);
const infoData = data.get("Detail");

const detailCharacter = async (id) => {
  const detail = await getCharactersById(id);
  console.log(detail);
  const { image, name, species, status, type, gender, origin } = detail;
  if (type === "")
    document.getElementById("type-Person").classList.add("d-none");

  document.getElementById("img-Person").setAttribute("src", image);
  document.getElementById("name-Person").innerText = name;
  document.getElementById("gender-Person").innerText = `Genero: ${gender}`;
  document.getElementById("species-Person").innerText = `Especie: ${species}`;
  document.getElementById("status-Person").innerText = `Estatus: ${status}`;
  document.getElementById("type-Person").innerText = `Tipo: ${type}`;
  document.getElementById("origin-Person").innerText = `Origen: ${origin.name}`;
};

detailCharacter(infoData);
