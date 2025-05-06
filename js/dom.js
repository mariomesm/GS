const createDom = (name, image, id) => {
  const divContainer = document.createElement("div");
  const nameUser = document.createElement("h2");
  const imgCard = document.createElement("img");
  const button = document.createElement("a");

  nameUser.innerText = name;
  imgCard.setAttribute("src", image);
  button.innerText = "view";
  button.href = `./views/detailCard.html?Detail=${id}`;

  divContainer.classList.add("card-container", "col-sm-2", "col-5");
  imgCard.classList.add("img-card");
  button.classList.add("button");
  nameUser.classList.add("text-name");

  divContainer.append(nameUser, imgCard, button);
  return divContainer;
};

export { createDom };
