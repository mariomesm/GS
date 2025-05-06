const URLAPI = "https://rickandmortyapi.com/api";
const FILLCHARACTERS = "character";

const getCharacters = async () => {
  const response = await fetch(`${URLAPI}/${FILLCHARACTERS}`);
  const data = await response.json();
  return data;
};

const getCharactersById = async (id) => {
  const response = await fetch(`${URLAPI}/${FILLCHARACTERS}/${id}`);
  const data = await response.json();
  return data;
};
export { getCharacters, getCharactersById };
