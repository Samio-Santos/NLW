const map = L.map("mapid").setView([-23.7044881, -46.8725772], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
  iconUrl: "./images/map-marker.svg",
  iconsize: [58, 68],
  iconAnchor: [29, 68],
  popAnchor: [170, 2],
});

const popup = L.popup({
  closeButton: false,
  classeName: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./images/arrow-white.svg"> </a>'
);

L.marker([-23.7044881, -46.8725772], { icon }).addTo(map).bindPopup(popup);
