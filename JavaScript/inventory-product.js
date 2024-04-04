const all = document.getElementById("all");
const colombo = document.getElementById("colombo");
const ampara = document.getElementById("ampara");
const inventoryProductDetailAll = document.getElementById("inventory-product-detail-all");
const inventoryProductDetailColombo = document.getElementById(
  "inventory-product-detail-colombo"
);
const inventoryProductDetailAmpara = document.getElementById(
  "inventory-product-detail-ampara"
);

inventoryProductDetailColombo.style.display = "none";
inventoryProductDetailAmpara.style.display = "none";
all.style.backgroundColor = "#CCCCCC";
colombo.style.backgroundColor = "#008080";
ampara.style.backgroundColor = "#008080";
colombo.style.color = "#FFFFFF";
ampara.style.color = "#FFFFFF";
inventoryProductDetailAll.style.display = "flex";

all.addEventListener("click", () => {
  inventoryProductDetailAll.style.display = "block";
  inventoryProductDetailColombo.style.display = "none";
  inventoryProductDetailAmpara.style.display = "none";
  all.style.backgroundColor = "#CCCCCC";
  colombo.style.backgroundColor = "#008080";
  ampara.style.backgroundColor = "#008080";
  all.style.color = "#000000";
  colombo.style.color = "#FFFFFF";
  ampara.style.color = "#FFFFFF";
  inventoryProductDetailAll.style.display = "flex";
});

colombo.addEventListener("click", () => {
  inventoryProductDetailAll.style.display = "none";
  inventoryProductDetailColombo.style.display = "block";
  inventoryProductDetailAmpara.style.display = "none";
  all.style.backgroundColor = "#008080";
  colombo.style.backgroundColor = "#CCCCCC";
  ampara.style.backgroundColor = "#008080";
  all.style.color = "#FFFFFF";
  colombo.style.color = "#000000";
  ampara.style.color = "#FFFFFF";
  inventoryProductDetailColombo.style.display = "flex";
});

ampara.addEventListener("click", () => {
  inventoryProductDetailAll.style.display = "none";
  inventoryProductDetailColombo.style.display = "none";
  inventoryProductDetailAmpara.style.display = "block";
  all.style.backgroundColor = "#008080";
  colombo.style.backgroundColor = "#008080";
  ampara.style.backgroundColor = "#CCCCCC";
  all.style.color = "#FFFFFF";
  colombo.style.color = "#FFFFFF";
  ampara.style.color = "#000000";
  inventoryProductDetailAmpara.style.display = "flex";
});