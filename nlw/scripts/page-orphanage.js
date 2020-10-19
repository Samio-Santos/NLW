const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWeelZoom: false,
  zoomControl: false,
};

const map = L.map("mapid", options).setView([-23.7044881, -46.8725772], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

L.marker([-23.7044881, -46.8725772], { icon }).addTo(map);

function selectimage(event) {
  const button = event.currentTarget;

  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  imageContainer.src = image.src
  imageContainer.style.objectfit = 'cover'

  button.classList.add("active");
}
