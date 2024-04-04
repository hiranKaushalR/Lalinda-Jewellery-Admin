const all = document.getElementById("all");
const colombo = document.getElementById("colombo");
const ampara = document.getElementById("ampara");
const inventoryDetailAll = document.getElementById("inventory-detail-all");
const inventoryDetailColombo = document.getElementById(
  "inventory-detail-colombo"
);
const inventoryDetailAmpara = document.getElementById(
  "inventory-detail-ampara"
);

inventoryDetailColombo.style.display = "none";
inventoryDetailAmpara.style.display = "none";
all.style.backgroundColor = "#CCCCCC";
colombo.style.backgroundColor = "#008080";
ampara.style.backgroundColor = "#008080";
colombo.style.color = "#FFFFFF";
ampara.style.color = "#FFFFFF";
inventoryDetailAll.style.display = "flex";

all.addEventListener("click", () => {
  inventoryDetailAll.style.display = "block";
  inventoryDetailColombo.style.display = "none";
  inventoryDetailAmpara.style.display = "none";
  all.style.backgroundColor = "#CCCCCC";
  colombo.style.backgroundColor = "#008080";
  ampara.style.backgroundColor = "#008080";
  all.style.color = "#000000";
  colombo.style.color = "#FFFFFF";
  ampara.style.color = "#FFFFFF";
  inventoryDetailAll.style.display = "flex";
});

colombo.addEventListener("click", () => {
  inventoryDetailAll.style.display = "none";
  inventoryDetailColombo.style.display = "block";
  inventoryDetailAmpara.style.display = "none";
  all.style.backgroundColor = "#008080";
  colombo.style.backgroundColor = "#CCCCCC";
  ampara.style.backgroundColor = "#008080";
  all.style.color = "#FFFFFF";
  colombo.style.color = "#000000";
  ampara.style.color = "#FFFFFF";
  inventoryDetailColombo.style.display = "flex";
});

ampara.addEventListener("click", () => {
  inventoryDetailAll.style.display = "none";
  inventoryDetailColombo.style.display = "none";
  inventoryDetailAmpara.style.display = "block";
  all.style.backgroundColor = "#008080";
  colombo.style.backgroundColor = "#008080";
  ampara.style.backgroundColor = "#CCCCCC";
  all.style.color = "#FFFFFF";
  colombo.style.color = "#FFFFFF";
  ampara.style.color = "#000000";
  inventoryDetailAmpara.style.display = "flex";
});
