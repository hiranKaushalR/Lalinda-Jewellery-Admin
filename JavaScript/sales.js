// TODO: Optimize the code by using functions

// Getting ID For main section
const all = document.getElementById("all");
const colombo = document.getElementById("colombo");
const ampara = document.getElementById("ampara");
const salesDetailAll = document.getElementById("sales-detail-all");
const salesDetailColombo = document.getElementById("sales-detail-colombo");
const salesDetailAmpara = document.getElementById("sales-detail-ampara");

// Getting ID for sub sections
// Getting ID from All Scttion
// Filter bar in All section
const allProductsInAllSection = document.getElementById(
  "all-products-in-all-section"
);
const necklaceProductsInAllSection = document.getElementById(
  "necklace-products-in-all-section"
);
const braceletsProductsInAllSection = document.getElementById(
  "bracelets-products-in-all-section"
);
const earringsProductsInAllSection = document.getElementById(
  "earrings-products-in-all-section"
);

const ringsProductsInAllSection = document.getElementById(
  "rings-products-in-all-section"
);

// Body-container in All section
const allProductsDetailContainerInAllSection = document.getElementById(
  "all-products-detail-container-in-all-section"
);

const necklaceProductsDetailContainerInAllSection = document.getElementById(
  "necklace-products-detail-container-in-all-section"
);

const braceletsProductsDetailContainerInAllSection = document.getElementById(
  "bracelets-products-detail-container-in-all-section"
);

const earringsProductsDetailContainerInAllSection = document.getElementById(
  "earrings-products-detail-container-in-all-section"
);

const ringsProductsDetailContainerInAllSection = document.getElementById(
  "rings-products-detail-container-in-all-section"
);

// Getting ID from Colombo Scttion
// Filter bar in Colombo section
const allProductsInColomboSection = document.getElementById(
  "all-products-in-colombo-section"
);
const necklaceProductsInColomboSection = document.getElementById(
  "necklace-products-in-colombo-section"
);
const braceletsProductsInColomboSection = document.getElementById(
  "bracelets-products-in-colombo-section"
);
const earringsProductsInColomboSection = document.getElementById(
  "earrings-products-in-colombo-section"
);
const ringsProductsInColomboSection = document.getElementById(
  "rings-products-in-colombo-section"
);

// Body-container in Colombo section
const allProductsDetailContainerInColomboSection = document.getElementById(
  "all-products-detail-container-in-colombo-section"
);

const necklaceProductsDetailContainerInColomboSection = document.getElementById(
  "necklace-products-detail-container-in-colombo-section"
);

const braceletsProductsDetailContainerInColomboSection =
  document.getElementById(
    "bracelets-products-detail-container-in-colombo-section"
  );

const earringsProductsDetailContainerInColomboSection = document.getElementById(
  "earrings-products-detail-container-in-colombo-section"
);

const ringsProductsDetailContainerInColomboSection = document.getElementById(
  "rings-products-detail-container-in-colombo-section"
);

// Getting ID from Ampara Scttion
// Filter bar in Ampara section
const allProductsInAmparaSection = document.getElementById(
  "all-products-in-ampara-section"
);
const necklaceProductsInAmparaSection = document.getElementById(
  "necklace-products-in-ampara-section"
);
const braceletsProductsInAmparaSection = document.getElementById(
  "bracelets-products-in-ampara-section"
);
const earringsProductsInAmparaSection = document.getElementById(
  "earrings-products-in-ampara-section"
);
const ringsProductsInAmparaSection = document.getElementById(
  "rings-products-in-ampara-section"
);

// Body-container in Ampara section
const allProductsDetailContainerInAmparaSection = document.getElementById(
  "all-products-detail-container-in-ampara-section"
);

const necklaceProductsDetailContainerInAmparaSection = document.getElementById(
  "necklace-products-detail-container-in-ampara-section"
);

const braceletsProductsDetailContainerInAmparaSection = document.getElementById(
  "bracelets-products-detail-container-in-ampara-section"
);

const earringsProductsDetailContainerInAmparaSection = document.getElementById(
  "earrings-products-detail-container-in-ampara-section"
);

const ringsProductsDetailContainerInAmparaSection = document.getElementById(
  "rings-products-detail-container-in-ampara-section"
);

// Main section Styling
salesDetailColombo.style.display = "none";
salesDetailAmpara.style.display = "none";
all.style.backgroundColor = "#CCCCCC";
colombo.style.backgroundColor = "#008080";
ampara.style.backgroundColor = "#008080";
colombo.style.color = "#FFFFFF";
ampara.style.color = "#FFFFFF";

// Sub section styling
allProductsInAllSection.style.color = "#00B8F0";
necklaceProductsInAllSection.style.color = "#D9D9D9";
braceletsProductsInAllSection.style.color = "#D9D9D9";
earringsProductsInAllSection.style.color = "#D9D9D9";
ringsProductsInAllSection.style.color = "#D9D9D9";

allProductsInAllSection.style.backgroundColor = "#D9D9D9";
necklaceProductsInAllSection.style.backgroundColor = "#00B8F0";
braceletsProductsInAllSection.style.backgroundColor = "#00B8F0";
earringsProductsInAllSection.style.backgroundColor = "#00B8F0";
ringsProductsInAllSection.style.backgroundColor = "#00B8F0";
allProductsDetailContainerInAllSection.style.display = "block";
necklaceProductsDetailContainerInAllSection.style.display = "none";
braceletsProductsDetailContainerInAllSection.style.display = "none";
earringsProductsDetailContainerInAllSection.style.display = "none";
ringsProductsDetailContainerInAllSection.style.display = "none";

all.addEventListener("click", () => {
  salesDetailAll.style.display = "block";
  salesDetailColombo.style.display = "none";
  salesDetailAmpara.style.display = "none";
  all.style.backgroundColor = "#CCCCCC";
  colombo.style.backgroundColor = "#008080";
  ampara.style.backgroundColor = "#008080";
  all.style.color = "#000000";
  colombo.style.color = "#FFFFFF";
  ampara.style.color = "#FFFFFF";

  // Sub section styling
  allProductsInAllSection.style.color = "#00B8F0";
  necklaceProductsInAllSection.style.color = "#D9D9D9";
  braceletsProductsInAllSection.style.color = "#D9D9D9";
  earringsProductsInAllSection.style.color = "#D9D9D9";
  ringsProductsInAllSection.style.color = "#D9D9D9";

  allProductsInAllSection.style.backgroundColor = "#D9D9D9";
  necklaceProductsInAllSection.style.backgroundColor = "#00B8F0";
  braceletsProductsInAllSection.style.backgroundColor = "#00B8F0";
  earringsProductsInAllSection.style.backgroundColor = "#00B8F0";
  ringsProductsInAllSection.style.backgroundColor = "#00B8F0";
  allProductsDetailContainerInAllSection.style.display = "block";
  necklaceProductsDetailContainerInAllSection.style.display = "none";
  braceletsProductsDetailContainerInAllSection.style.display = "none";
  earringsProductsDetailContainerInAllSection.style.display = "none";
  ringsProductsDetailContainerInAllSection.style.display = "none";
});

colombo.addEventListener("click", () => {
  salesDetailAll.style.display = "none";
  salesDetailColombo.style.display = "block";
  salesDetailAmpara.style.display = "none";
  all.style.backgroundColor = "#008080";
  colombo.style.backgroundColor = "#CCCCCC";
  ampara.style.backgroundColor = "#008080";
  all.style.color = "#FFFFFF";
  colombo.style.color = "#000000";
  ampara.style.color = "#FFFFFF";

  // Sub section styling
  allProductsInColomboSection.style.color = "#00B8F0";
  necklaceProductsInColomboSection.style.color = "#D9D9D9";
  braceletsProductsInColomboSection.style.color = "#D9D9D9";
  earringsProductsInColomboSection.style.color = "#D9D9D9";
  ringsProductsInColomboSection.style.color = "#D9D9D9";

  allProductsInColomboSection.style.backgroundColor = "#D9D9D9";
  necklaceProductsInColomboSection.style.backgroundColor = "#00B8F0";
  braceletsProductsInColomboSection.style.backgroundColor = "#00B8F0";
  earringsProductsInColomboSection.style.backgroundColor = "#00B8F0";
  ringsProductsInColomboSection.style.backgroundColor = "#00B8F0";
  allProductsDetailContainerInColomboSection.style.display = "block";
  necklaceProductsDetailContainerInColomboSection.style.display = "none";
  braceletsProductsDetailContainerInColomboSection.style.display = "none";
  earringsProductsDetailContainerInColomboSection.style.display = "none";
  ringsProductsDetailContainerInColomboSection.style.display = "none";
});

ampara.addEventListener("click", () => {
  salesDetailAll.style.display = "none";
  salesDetailColombo.style.display = "none";
  salesDetailAmpara.style.display = "block";
  all.style.backgroundColor = "#008080";
  colombo.style.backgroundColor = "#008080";
  ampara.style.backgroundColor = "#CCCCCC";
  all.style.color = "#FFFFFF";
  colombo.style.color = "#FFFFFF";
  ampara.style.color = "#000000";

  // Sub section styling
  allProductsInAmparaSection.style.color = "#00B8F0";
  necklaceProductsInAmparaSection.style.color = "#D9D9D9";
  braceletsProductsInAmparaSection.style.color = "#D9D9D9";
  earringsProductsInAmparaSection.style.color = "#D9D9D9";
  ringsProductsInAmparaSection.style.color = "#D9D9D9";

  allProductsInAmparaSection.style.backgroundColor = "#D9D9D9";
  necklaceProductsInAmparaSection.style.backgroundColor = "#00B8F0";
  braceletsProductsInAmparaSection.style.backgroundColor = "#00B8F0";
  earringsProductsInAmparaSection.style.backgroundColor = "#00B8F0";
  ringsProductsInAmparaSection.style.backgroundColor = "#00B8F0";
  allProductsDetailContainerInAmparaSection.style.display = "block";
  necklaceProductsDetailContainerInAmparaSection.style.display = "none";
  braceletsProductsDetailContainerInAmparaSection.style.display = "none";
  earringsProductsDetailContainerInAmparaSection.style.display = "none";
  ringsProductsDetailContainerInAmparaSection.style.display = "none";
});

// Sub Filter Bar
// All Section
// All tab in all
allProductsInAllSection.addEventListener("click", () => {
  allProductsInAllSection.style.color = "#00B8F0";
  necklaceProductsInAllSection.style.color = "#D9D9D9";
  braceletsProductsInAllSection.style.color = "#D9D9D9";
  earringsProductsInAllSection.style.color = "#D9D9D9";
  ringsProductsInAllSection.style.color = "#D9D9D9";

  allProductsInAllSection.style.backgroundColor = "#D9D9D9";
  necklaceProductsInAllSection.style.backgroundColor = "#00B8F0";
  braceletsProductsInAllSection.style.backgroundColor = "#00B8F0";
  earringsProductsInAllSection.style.backgroundColor = "#00B8F0";
  ringsProductsInAllSection.style.backgroundColor = "#00B8F0";
  allProductsDetailContainerInAllSection.style.display = "block";
  necklaceProductsDetailContainerInAllSection.style.display = "none";
  braceletsProductsDetailContainerInAllSection.style.display = "none";
  earringsProductsDetailContainerInAllSection.style.display = "none";
  ringsProductsDetailContainerInAllSection.style.display = "none";
});

// Necklace tab in all
necklaceProductsInAllSection.addEventListener("click", () => {
  allProductsInAllSection.style.color = "#D9D9D9";
  necklaceProductsInAllSection.style.color = "#00B8F0";
  braceletsProductsInAllSection.style.color = "#D9D9D9";
  earringsProductsInAllSection.style.color = "#D9D9D9";
  ringsProductsInAllSection.style.color = "#D9D9D9";

  allProductsInAllSection.style.backgroundColor = "#00B8F0";
  necklaceProductsInAllSection.style.backgroundColor = "#D9D9D9";
  braceletsProductsInAllSection.style.backgroundColor = "#00B8F0";
  earringsProductsInAllSection.style.backgroundColor = "#00B8F0";
  ringsProductsInAllSection.style.backgroundColor = "#00B8F0";
  allProductsDetailContainerInAllSection.style.display = "none";
  necklaceProductsDetailContainerInAllSection.style.display = "block";
  braceletsProductsDetailContainerInAllSection.style.display = "none";
  earringsProductsDetailContainerInAllSection.style.display = "none";
  ringsProductsDetailContainerInAllSection.style.display = "none";
});

// Bracelets tab in all
braceletsProductsInAllSection.addEventListener("click", () => {
  allProductsInAllSection.style.color = "#D9D9D9";
  necklaceProductsInAllSection.style.color = "#D9D9D9";
  braceletsProductsInAllSection.style.color = "#00B8F0";
  earringsProductsInAllSection.style.color = "#D9D9D9";
  ringsProductsInAllSection.style.color = "#D9D9D9";

  allProductsInAllSection.style.backgroundColor = "#00B8F0";
  necklaceProductsInAllSection.style.backgroundColor = "#00B8F0";
  braceletsProductsInAllSection.style.backgroundColor = "#D9D9D9";
  earringsProductsInAllSection.style.backgroundColor = "#00B8F0";
  ringsProductsInAllSection.style.backgroundColor = "#00B8F0";
  allProductsDetailContainerInAllSection.style.display = "none";
  necklaceProductsDetailContainerInAllSection.style.display = "none";
  braceletsProductsDetailContainerInAllSection.style.display = "block";
  earringsProductsDetailContainerInAllSection.style.display = "none";
  ringsProductsDetailContainerInAllSection.style.display = "none";
});

// Earrings tab in all
earringsProductsInAllSection.addEventListener("click", () => {
  allProductsInAllSection.style.color = "#D9D9D9";
  necklaceProductsInAllSection.style.color = "#D9D9D9";
  braceletsProductsInAllSection.style.color = "#D9D9D9";
  earringsProductsInAllSection.style.color = "#00B8F0";
  ringsProductsInAllSection.style.color = "#D9D9D9";

  allProductsInAllSection.style.backgroundColor = "#00B8F0";
  necklaceProductsInAllSection.style.backgroundColor = "#00B8F0";
  braceletsProductsInAllSection.style.backgroundColor = "#00B8F0";
  earringsProductsInAllSection.style.backgroundColor = "#D9D9D9";
  ringsProductsInAllSection.style.backgroundColor = "#00B8F0";
  allProductsDetailContainerInAllSection.style.display = "none";
  necklaceProductsDetailContainerInAllSection.style.display = "none";
  braceletsProductsDetailContainerInAllSection.style.display = "none";
  earringsProductsDetailContainerInAllSection.style.display = "block";
  ringsProductsDetailContainerInAllSection.style.display = "none";
});

// Rings tab in all
ringsProductsInAllSection.addEventListener("click", () => {
  allProductsInAllSection.style.color = "#D9D9D9";
  necklaceProductsInAllSection.style.color = "#D9D9D9";
  braceletsProductsInAllSection.style.color = "#D9D9D9";
  earringsProductsInAllSection.style.color = "#D9D9D9";
  ringsProductsInAllSection.style.color = "#00B8F0";

  allProductsInAllSection.style.backgroundColor = "#00B8F0";
  necklaceProductsInAllSection.style.backgroundColor = "#00B8F0";
  braceletsProductsInAllSection.style.backgroundColor = "#00B8F0";
  earringsProductsInAllSection.style.backgroundColor = "#00B8F0";
  ringsProductsInAllSection.style.backgroundColor = "#D9D9D9";
  allProductsDetailContainerInAllSection.style.display = "none";
  necklaceProductsDetailContainerInAllSection.style.display = "none";
  braceletsProductsDetailContainerInAllSection.style.display = "none";
  earringsProductsDetailContainerInAllSection.style.display = "none";
  ringsProductsDetailContainerInAllSection.style.display = "block";
});




// Sub Filter Bar
// Colombo Section
// All tab in Colombo
allProductsInColomboSection.addEventListener("click", () => {
  allProductsInColomboSection.style.color = "#00B8F0";
  necklaceProductsInColomboSection.style.color = "#D9D9D9";
  braceletsProductsInColomboSection.style.color = "#D9D9D9";
  earringsProductsInColomboSection.style.color = "#D9D9D9";
  ringsProductsInColomboSection.style.color = "#D9D9D9";

  allProductsInColomboSection.style.backgroundColor = "#D9D9D9";
  necklaceProductsInColomboSection.style.backgroundColor = "#00B8F0";
  braceletsProductsInColomboSection.style.backgroundColor = "#00B8F0";
  earringsProductsInColomboSection.style.backgroundColor = "#00B8F0";
  ringsProductsInColomboSection.style.backgroundColor = "#00B8F0";
  allProductsDetailContainerInColomboSection.style.display = "block";
  necklaceProductsDetailContainerInColomboSection.style.display = "none";
  braceletsProductsDetailContainerInColomboSection.style.display = "none";
  earringsProductsDetailContainerInColomboSection.style.display = "none";
  ringsProductsDetailContainerInColomboSection.style.display = "none";
});

// Necklace tab in Colombo
necklaceProductsInColomboSection.addEventListener("click", () => {
  allProductsInColomboSection.style.color = "#D9D9D9";
  necklaceProductsInColomboSection.style.color = "#00B8F0";
  braceletsProductsInColomboSection.style.color = "#D9D9D9";
  earringsProductsInColomboSection.style.color = "#D9D9D9";
  ringsProductsInColomboSection.style.color = "#D9D9D9";

  allProductsInColomboSection.style.backgroundColor = "#00B8F0";
  necklaceProductsInColomboSection.style.backgroundColor = "#D9D9D9";
  braceletsProductsInColomboSection.style.backgroundColor = "#00B8F0";
  earringsProductsInColomboSection.style.backgroundColor = "#00B8F0";
  ringsProductsInColomboSection.style.backgroundColor = "#00B8F0";
  allProductsDetailContainerInColomboSection.style.display = "none";
  necklaceProductsDetailContainerInColomboSection.style.display = "block";
  braceletsProductsDetailContainerInColomboSection.style.display = "none";
  earringsProductsDetailContainerInColomboSection.style.display = "none";
  ringsProductsDetailContainerInColomboSection.style.display = "none";
});

// Bracelets tab in Colombo
braceletsProductsInColomboSection.addEventListener("click", () => {
  allProductsInColomboSection.style.color = "#D9D9D9";
  necklaceProductsInColomboSection.style.color = "#D9D9D9";
  braceletsProductsInColomboSection.style.color = "#00B8F0";
  earringsProductsInColomboSection.style.color = "#D9D9D9";
  ringsProductsInColomboSection.style.color = "#D9D9D9";

  allProductsInColomboSection.style.backgroundColor = "#00B8F0";
  necklaceProductsInColomboSection.style.backgroundColor = "#00B8F0";
  braceletsProductsInColomboSection.style.backgroundColor = "#D9D9D9";
  earringsProductsInColomboSection.style.backgroundColor = "#00B8F0";
  ringsProductsInColomboSection.style.backgroundColor = "#00B8F0";
  allProductsDetailContainerInColomboSection.style.display = "none";
  necklaceProductsDetailContainerInColomboSection.style.display = "none";
  braceletsProductsDetailContainerInColomboSection.style.display = "block";
  earringsProductsDetailContainerInColomboSection.style.display = "none";
  ringsProductsDetailContainerInColomboSection.style.display = "none";
});

// Earrings tab in Colombo
earringsProductsInColomboSection.addEventListener("click", () => {
  allProductsInColomboSection.style.color = "#D9D9D9";
  necklaceProductsInColomboSection.style.color = "#D9D9D9";
  braceletsProductsInColomboSection.style.color = "#D9D9D9";
  earringsProductsInColomboSection.style.color = "#00B8F0";
  ringsProductsInColomboSection.style.color = "#D9D9D9";

  allProductsInColomboSection.style.backgroundColor = "#00B8F0";
  necklaceProductsInColomboSection.style.backgroundColor = "#00B8F0";
  braceletsProductsInColomboSection.style.backgroundColor = "#00B8F0";
  earringsProductsInColomboSection.style.backgroundColor = "#D9D9D9";
  ringsProductsInColomboSection.style.backgroundColor = "#00B8F0";
  allProductsDetailContainerInColomboSection.style.display = "none";
  necklaceProductsDetailContainerInColomboSection.style.display = "none";
  braceletsProductsDetailContainerInColomboSection.style.display = "none";
  earringsProductsDetailContainerInColomboSection.style.display = "block";
  ringsProductsDetailContainerInColomboSection.style.display = "none";
});

// Rings tab in Colombo
ringsProductsInColomboSection.addEventListener("click", () => {
  allProductsInColomboSection.style.color = "#D9D9D9";
  necklaceProductsInColomboSection.style.color = "#D9D9D9";
  braceletsProductsInColomboSection.style.color = "#D9D9D9";
  earringsProductsInColomboSection.style.color = "#D9D9D9";
  ringsProductsInColomboSection.style.color = "#00B8F0";

  allProductsInColomboSection.style.backgroundColor = "#00B8F0";
  necklaceProductsInColomboSection.style.backgroundColor = "#00B8F0";
  braceletsProductsInColomboSection.style.backgroundColor = "#00B8F0";
  earringsProductsInColomboSection.style.backgroundColor = "#00B8F0";
  ringsProductsInColomboSection.style.backgroundColor = "#D9D9D9";
  allProductsDetailContainerInColomboSection.style.display = "none";
  necklaceProductsDetailContainerInColomboSection.style.display = "none";
  braceletsProductsDetailContainerInColomboSection.style.display = "none";
  earringsProductsDetailContainerInColomboSection.style.display = "none";
  ringsProductsDetailContainerInColomboSection.style.display = "block";
});

// Ampara Section
// All tab in Ampara
allProductsInAmparaSection.addEventListener("click", () => {
  allProductsInAmparaSection.style.color = "#00B8F0";
  necklaceProductsInAmparaSection.style.color = "#D9D9D9";
  braceletsProductsInAmparaSection.style.color = "#D9D9D9";
  earringsProductsInAmparaSection.style.color = "#D9D9D9";
  ringsProductsInAmparaSection.style.color = "#D9D9D9";

  allProductsInAmparaSection.style.backgroundColor = "#D9D9D9";
  necklaceProductsInAmparaSection.style.backgroundColor = "#00B8F0";
  braceletsProductsInAmparaSection.style.backgroundColor = "#00B8F0";
  earringsProductsInAmparaSection.style.backgroundColor = "#00B8F0";
  ringsProductsInAmparaSection.style.backgroundColor = "#00B8F0";
  allProductsDetailContainerInAmparaSection.style.display = "block";
  necklaceProductsDetailContainerInAmparaSection.style.display = "none";
  braceletsProductsDetailContainerInAmparaSection.style.display = "none";
  earringsProductsDetailContainerInAmparaSection.style.display = "none";
  ringsProductsDetailContainerInAmparaSection.style.display = "none";
});

// Necklace tab in Ampara
necklaceProductsInAmparaSection.addEventListener("click", () => {
  allProductsInAmparaSection.style.color = "#D9D9D9";
  necklaceProductsInAmparaSection.style.color = "#00B8F0";
  braceletsProductsInAmparaSection.style.color = "#D9D9D9";
  earringsProductsInAmparaSection.style.color = "#D9D9D9";
  ringsProductsInAmparaSection.style.color = "#D9D9D9";

  allProductsInAmparaSection.style.backgroundColor = "#00B8F0";
  necklaceProductsInAmparaSection.style.backgroundColor = "#D9D9D9";
  braceletsProductsInAmparaSection.style.backgroundColor = "#00B8F0";
  earringsProductsInAmparaSection.style.backgroundColor = "#00B8F0";
  ringsProductsInAmparaSection.style.backgroundColor = "#00B8F0";
  allProductsDetailContainerInAmparaSection.style.display = "none";
  necklaceProductsDetailContainerInAmparaSection.style.display = "block";
  braceletsProductsDetailContainerInAmparaSection.style.display = "none";
  earringsProductsDetailContainerInAmparaSection.style.display = "none";
  ringsProductsDetailContainerInAmparaSection.style.display = "none";
});

// Bracelets tab in Ampara
braceletsProductsInAmparaSection.addEventListener("click", () => {
  allProductsInAmparaSection.style.color = "#D9D9D9";
  necklaceProductsInAmparaSection.style.color = "#D9D9D9";
  braceletsProductsInAmparaSection.style.color = "#00B8F0";
  earringsProductsInAmparaSection.style.color = "#D9D9D9";
  ringsProductsInAmparaSection.style.color = "#D9D9D9";

  allProductsInAmparaSection.style.backgroundColor = "#00B8F0";
  necklaceProductsInAmparaSection.style.backgroundColor = "#00B8F0";
  braceletsProductsInAmparaSection.style.backgroundColor = "#D9D9D9";
  earringsProductsInAmparaSection.style.backgroundColor = "#00B8F0";
  ringsProductsInAmparaSection.style.backgroundColor = "#00B8F0";
  allProductsDetailContainerInAmparaSection.style.display = "none";
  necklaceProductsDetailContainerInAmparaSection.style.display = "none";
  braceletsProductsDetailContainerInAmparaSection.style.display = "block";
  earringsProductsDetailContainerInAmparaSection.style.display = "none";
  ringsProductsDetailContainerInAmparaSection.style.display = "none";
});

// Earrings tab in Ampara
earringsProductsInAmparaSection.addEventListener("click", () => {
  allProductsInAmparaSection.style.color = "#D9D9D9";
  necklaceProductsInAmparaSection.style.color = "#D9D9D9";
  braceletsProductsInAmparaSection.style.color = "#D9D9D9";
  earringsProductsInAmparaSection.style.color = "#00B8F0";
  ringsProductsInAmparaSection.style.color = "#D9D9D9";

  allProductsInAmparaSection.style.backgroundColor = "#00B8F0";
  necklaceProductsInAmparaSection.style.backgroundColor = "#00B8F0";
  braceletsProductsInAmparaSection.style.backgroundColor = "#00B8F0";
  earringsProductsInAmparaSection.style.backgroundColor = "#D9D9D9";
  ringsProductsInAmparaSection.style.backgroundColor = "#00B8F0";
  allProductsDetailContainerInAmparaSection.style.display = "none";
  necklaceProductsDetailContainerInAmparaSection.style.display = "none";
  braceletsProductsDetailContainerInAmparaSection.style.display = "none";
  earringsProductsDetailContainerInAmparaSection.style.display = "block";
  ringsProductsDetailContainerInAmparaSection.style.display = "none";
});

// Rings tab in Ampara
ringsProductsInAmparaSection.addEventListener("click", () => {
  allProductsInAmparaSection.style.color = "#D9D9D9";
  necklaceProductsInAmparaSection.style.color = "#D9D9D9";
  braceletsProductsInAmparaSection.style.color = "#D9D9D9";
  earringsProductsInAmparaSection.style.color = "#D9D9D9";
  ringsProductsInAmparaSection.style.color = "#00B8F0";

  allProductsInAmparaSection.style.backgroundColor = "#00B8F0";
  necklaceProductsInAmparaSection.style.backgroundColor = "#00B8F0";
  braceletsProductsInAmparaSection.style.backgroundColor = "#00B8F0";
  earringsProductsInAmparaSection.style.backgroundColor = "#00B8F0";
  ringsProductsInAmparaSection.style.backgroundColor = "#D9D9D9";
  allProductsDetailContainerInAmparaSection.style.display = "none";
  necklaceProductsDetailContainerInAmparaSection.style.display = "none";
  braceletsProductsDetailContainerInAmparaSection.style.display = "none";
  earringsProductsDetailContainerInAmparaSection.style.display = "none";
  ringsProductsDetailContainerInAmparaSection.style.display = "block";
});