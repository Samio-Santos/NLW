const map = L.map("mapid").setView([-23.7044881, -46.8725772], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconsize: [58, 68],
  iconAnchor: [29, 68],
});

// L.marker([-23.7044881, -46.8725772], { icon }).addTo(map)

let marker;

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  marker && map.removeLayer(marker);

  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// Adicionar o campo de fatos

function addPhotoField() {
  //pegar o container de fotos #images
  const container = document.querySelector("#images");

  //pegar o container para duplicar .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");

  //realizar o clone da última imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //verefixar se o campo está vazio, se sim, não adicionar ao container de imagens
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  //limpar o campo antes de adicionar ao container de imagens
  input.value = "";

  //adicionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    //limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  //deletae o campo
  span.parentNode.remove();
}

//select yes or no

function toggleSelect(event) {
  //retirar a class .active (dos botões)
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));

  //colocar a class .active
  const button = event.currentTarget;
  button.classList.add("active");

  // atualizar o meu input hidden com o valor selecionado
  const input = document.querySelector("[name='open_on_weekends']");

  input.value = button.dataset.value;
}
