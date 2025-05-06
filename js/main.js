import { createDom } from "./dom.js";
import { getCharacters} from "./api.js";

const fillDataFromDom = async () => {
  const data = await getCharacters();
  const containerCards = document.getElementById("container-cards")
  data.results.forEach(item =>{
    const {name,image,id} = item
    containerCards.appendChild(createDom(name,image,id))
  })
};

fillDataFromDom()
