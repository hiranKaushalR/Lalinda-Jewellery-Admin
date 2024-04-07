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
const allReportInAllSection = document.getElementById(
  "all-report-in-all-section"
);
const necklaceReportInAllSection = document.getElementById(
  "necklace-report-in-all-section"
);
const braceletsReportInAllSection = document.getElementById(
  "bracelets-report-in-all-section"
);
const earringsReportInAllSection = document.getElementById(
  "earrings-report-in-all-section"
);

const ringsReportInAllSection = document.getElementById(
  "rings-report-in-all-section"
);

// Body-container in All section
const allReportDetailContainerInAllSection = document.getElementById(
  "all-report-detail-container-in-all-section"
);

const necklaceReportDetailContainerInAllSection = document.getElementById(
  "necklace-report-detail-container-in-all-section"
);

const braceletsReportDetailContainerInAllSection = document.getElementById(
  "bracelets-report-detail-container-in-all-section"
);

const earringsReportDetailContainerInAllSection = document.getElementById(
  "earrings-report-detail-container-in-all-section"
);

const ringsReportDetailContainerInAllSection = document.getElementById(
  "rings-report-detail-container-in-all-section"
);

// Getting ID from Colombo Scttion
// Filter bar in Colombo section
const allReportInColomboSection = document.getElementById(
  "all-report-in-colombo-section"
);
const necklaceReportInColomboSection = document.getElementById(
  "necklace-report-in-colombo-section"
);
const braceletsReportInColomboSection = document.getElementById(
  "bracelets-report-in-colombo-section"
);
const earringsReportInColomboSection = document.getElementById(
  "earrings-report-in-colombo-section"
);
const ringsReportInColomboSection = document.getElementById(
  "rings-report-in-colombo-section"
);

// Body-container in Colombo section
const allReportDetailContainerInColomboSection = document.getElementById(
  "all-report-detail-container-in-colombo-section"
);

const necklaceReportDetailContainerInColomboSection = document.getElementById(
  "necklace-report-detail-container-in-colombo-section"
);

const braceletsReportDetailContainerInColomboSection = document.getElementById(
  "bracelets-report-detail-container-in-colombo-section"
);

const earringsReportDetailContainerInColomboSection = document.getElementById(
  "earrings-report-detail-container-in-colombo-section"
);

const ringsReportDetailContainerInColomboSection = document.getElementById(
  "rings-report-detail-container-in-colombo-section"
);

// Getting ID from Ampara Scttion
// Filter bar in Ampara section
const allReportInAmparaSection = document.getElementById(
  "all-report-in-ampara-section"
);
const necklaceReportInAmparaSection = document.getElementById(
  "necklace-report-in-ampara-section"
);
const braceletsReportInAmparaSection = document.getElementById(
  "bracelets-report-in-ampara-section"
);
const earringsReportInAmparaSection = document.getElementById(
  "earrings-report-in-ampara-section"
);
const ringsReportInAmparaSection = document.getElementById(
  "rings-report-in-ampara-section"
);

// Body-container in Ampara section
const allReportDetailContainerInAmparaSection = document.getElementById(
  "all-report-detail-container-in-ampara-section"
);

const necklaceReportDetailContainerInAmparaSection = document.getElementById(
  "necklace-report-detail-container-in-ampara-section"
);

const braceletsReportDetailContainerInAmparaSection = document.getElementById(
  "bracelets-report-detail-container-in-ampara-section"
);

const earringsReportDetailContainerInAmparaSection = document.getElementById(
  "earrings-report-detail-container-in-ampara-section"
);

const ringsReportDetailContainerInAmparaSection = document.getElementById(
  "rings-report-detail-container-in-ampara-section"
);

// Getting ID for Charts
const doughnutInAllAllSection = document.getElementById(
  "doughnut-in-all-all-section"
);
const barchartInAllAllSection = document.getElementById(
  "barchart-in-all-all-section"
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
allReportInAllSection.style.color = "#00B8F0";
necklaceReportInAllSection.style.color = "#D9D9D9";
braceletsReportInAllSection.style.color = "#D9D9D9";
earringsReportInAllSection.style.color = "#D9D9D9";
ringsReportInAllSection.style.color = "#D9D9D9";

allReportInAllSection.style.backgroundColor = "#D9D9D9";
necklaceReportInAllSection.style.backgroundColor = "#00B8F0";
braceletsReportInAllSection.style.backgroundColor = "#00B8F0";
earringsReportInAllSection.style.backgroundColor = "#00B8F0";
ringsReportInAllSection.style.backgroundColor = "#00B8F0";
allReportDetailContainerInAllSection.style.display = "block";
necklaceReportDetailContainerInAllSection.style.display = "none";
braceletsReportDetailContainerInAllSection.style.display = "none";
earringsReportDetailContainerInAllSection.style.display = "none";
ringsReportDetailContainerInAllSection.style.display = "none";

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
  allReportInAllSection.style.color = "#00B8F0";
  necklaceReportInAllSection.style.color = "#D9D9D9";
  braceletsReportInAllSection.style.color = "#D9D9D9";
  earringsReportInAllSection.style.color = "#D9D9D9";
  ringsReportInAllSection.style.color = "#D9D9D9";

  allReportInAllSection.style.backgroundColor = "#D9D9D9";
  necklaceReportInAllSection.style.backgroundColor = "#00B8F0";
  braceletsReportInAllSection.style.backgroundColor = "#00B8F0";
  earringsReportInAllSection.style.backgroundColor = "#00B8F0";
  ringsReportInAllSection.style.backgroundColor = "#00B8F0";
  allReportDetailContainerInAllSection.style.display = "block";
  necklaceReportDetailContainerInAllSection.style.display = "none";
  braceletsReportDetailContainerInAllSection.style.display = "none";
  earringsReportDetailContainerInAllSection.style.display = "none";
  ringsReportDetailContainerInAllSection.style.display = "none";
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
  allReportInColomboSection.style.color = "#00B8F0";
  necklaceReportInColomboSection.style.color = "#D9D9D9";
  braceletsReportInColomboSection.style.color = "#D9D9D9";
  earringsReportInColomboSection.style.color = "#D9D9D9";
  ringsReportInColomboSection.style.color = "#D9D9D9";

  allReportInColomboSection.style.backgroundColor = "#D9D9D9";
  necklaceReportInColomboSection.style.backgroundColor = "#00B8F0";
  braceletsReportInColomboSection.style.backgroundColor = "#00B8F0";
  earringsReportInColomboSection.style.backgroundColor = "#00B8F0";
  ringsReportInColomboSection.style.backgroundColor = "#00B8F0";
  allReportDetailContainerInColomboSection.style.display = "block";
  necklaceReportDetailContainerInColomboSection.style.display = "none";
  braceletsReportDetailContainerInColomboSection.style.display = "none";
  earringsReportDetailContainerInColomboSection.style.display = "none";
  ringsReportDetailContainerInColomboSection.style.display = "none";
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
  allReportInAmparaSection.style.color = "#00B8F0";
  necklaceReportInAmparaSection.style.color = "#D9D9D9";
  braceletsReportInAmparaSection.style.color = "#D9D9D9";
  earringsReportInAmparaSection.style.color = "#D9D9D9";
  ringsReportInAmparaSection.style.color = "#D9D9D9";

  allReportInAmparaSection.style.backgroundColor = "#D9D9D9";
  necklaceReportInAmparaSection.style.backgroundColor = "#00B8F0";
  braceletsReportInAmparaSection.style.backgroundColor = "#00B8F0";
  earringsReportInAmparaSection.style.backgroundColor = "#00B8F0";
  ringsReportInAmparaSection.style.backgroundColor = "#00B8F0";
  allReportDetailContainerInAmparaSection.style.display = "block";
  necklaceReportDetailContainerInAmparaSection.style.display = "none";
  braceletsReportDetailContainerInAmparaSection.style.display = "none";
  earringsReportDetailContainerInAmparaSection.style.display = "none";
  ringsReportDetailContainerInAmparaSection.style.display = "none";
});

// Sub Filter Bar
// All Section
// All tab in all
allReportInAllSection.addEventListener("click", () => {
  allReportInAllSection.style.color = "#00B8F0";
  necklaceReportInAllSection.style.color = "#D9D9D9";
  braceletsReportInAllSection.style.color = "#D9D9D9";
  earringsReportInAllSection.style.color = "#D9D9D9";
  ringsReportInAllSection.style.color = "#D9D9D9";

  allReportInAllSection.style.backgroundColor = "#D9D9D9";
  necklaceReportInAllSection.style.backgroundColor = "#00B8F0";
  braceletsReportInAllSection.style.backgroundColor = "#00B8F0";
  earringsReportInAllSection.style.backgroundColor = "#00B8F0";
  ringsReportInAllSection.style.backgroundColor = "#00B8F0";
  allReportDetailContainerInAllSection.style.display = "block";
  necklaceReportDetailContainerInAllSection.style.display = "none";
  braceletsReportDetailContainerInAllSection.style.display = "none";
  earringsReportDetailContainerInAllSection.style.display = "none";
  ringsReportDetailContainerInAllSection.style.display = "none";
});

// Necklace tab in all
necklaceReportInAllSection.addEventListener("click", () => {
  allReportInAllSection.style.color = "#D9D9D9";
  necklaceReportInAllSection.style.color = "#00B8F0";
  braceletsReportInAllSection.style.color = "#D9D9D9";
  earringsReportInAllSection.style.color = "#D9D9D9";
  ringsReportInAllSection.style.color = "#D9D9D9";

  allReportInAllSection.style.backgroundColor = "#00B8F0";
  necklaceReportInAllSection.style.backgroundColor = "#D9D9D9";
  braceletsReportInAllSection.style.backgroundColor = "#00B8F0";
  earringsReportInAllSection.style.backgroundColor = "#00B8F0";
  ringsReportInAllSection.style.backgroundColor = "#00B8F0";
  allReportDetailContainerInAllSection.style.display = "none";
  necklaceReportDetailContainerInAllSection.style.display = "block";
  braceletsReportDetailContainerInAllSection.style.display = "none";
  earringsReportDetailContainerInAllSection.style.display = "none";
  ringsReportDetailContainerInAllSection.style.display = "none";
});

// Bracelets tab in all
braceletsReportInAllSection.addEventListener("click", () => {
  allReportInAllSection.style.color = "#D9D9D9";
  necklaceReportInAllSection.style.color = "#D9D9D9";
  braceletsReportInAllSection.style.color = "#00B8F0";
  earringsReportInAllSection.style.color = "#D9D9D9";
  ringsReportInAllSection.style.color = "#D9D9D9";

  allReportInAllSection.style.backgroundColor = "#00B8F0";
  necklaceReportInAllSection.style.backgroundColor = "#00B8F0";
  braceletsReportInAllSection.style.backgroundColor = "#D9D9D9";
  earringsReportInAllSection.style.backgroundColor = "#00B8F0";
  ringsReportInAllSection.style.backgroundColor = "#00B8F0";
  allReportDetailContainerInAllSection.style.display = "none";
  necklaceReportDetailContainerInAllSection.style.display = "none";
  braceletsReportDetailContainerInAllSection.style.display = "block";
  earringsReportDetailContainerInAllSection.style.display = "none";
  ringsReportDetailContainerInAllSection.style.display = "none";
});

// Earrings tab in all
earringsReportInAllSection.addEventListener("click", () => {
  allReportInAllSection.style.color = "#D9D9D9";
  necklaceReportInAllSection.style.color = "#D9D9D9";
  braceletsReportInAllSection.style.color = "#D9D9D9";
  earringsReportInAllSection.style.color = "#00B8F0";
  ringsReportInAllSection.style.color = "#D9D9D9";

  allReportInAllSection.style.backgroundColor = "#00B8F0";
  necklaceReportInAllSection.style.backgroundColor = "#00B8F0";
  braceletsReportInAllSection.style.backgroundColor = "#00B8F0";
  earringsReportInAllSection.style.backgroundColor = "#D9D9D9";
  ringsReportInAllSection.style.backgroundColor = "#00B8F0";
  allReportDetailContainerInAllSection.style.display = "none";
  necklaceReportDetailContainerInAllSection.style.display = "none";
  braceletsReportDetailContainerInAllSection.style.display = "none";
  earringsReportDetailContainerInAllSection.style.display = "block";
  ringsReportDetailContainerInAllSection.style.display = "none";
});

// Rings tab in all
ringsReportInAllSection.addEventListener("click", () => {
  allReportInAllSection.style.color = "#D9D9D9";
  necklaceReportInAllSection.style.color = "#D9D9D9";
  braceletsReportInAllSection.style.color = "#D9D9D9";
  earringsReportInAllSection.style.color = "#D9D9D9";
  ringsReportInAllSection.style.color = "#00B8F0";

  allReportInAllSection.style.backgroundColor = "#00B8F0";
  necklaceReportInAllSection.style.backgroundColor = "#00B8F0";
  braceletsReportInAllSection.style.backgroundColor = "#00B8F0";
  earringsReportInAllSection.style.backgroundColor = "#00B8F0";
  ringsReportInAllSection.style.backgroundColor = "#D9D9D9";
  allReportDetailContainerInAllSection.style.display = "none";
  necklaceReportDetailContainerInAllSection.style.display = "none";
  braceletsReportDetailContainerInAllSection.style.display = "none";
  earringsReportDetailContainerInAllSection.style.display = "none";
  ringsReportDetailContainerInAllSection.style.display = "block";
});

// Sub Filter Bar
// Colombo Section
// All tab in Colombo
allReportInColomboSection.addEventListener("click", () => {
  allReportInColomboSection.style.color = "#00B8F0";
  necklaceReportInColomboSection.style.color = "#D9D9D9";
  braceletsReportInColomboSection.style.color = "#D9D9D9";
  earringsReportInColomboSection.style.color = "#D9D9D9";
  ringsReportInColomboSection.style.color = "#D9D9D9";

  allReportInColomboSection.style.backgroundColor = "#D9D9D9";
  necklaceReportInColomboSection.style.backgroundColor = "#00B8F0";
  braceletsReportInColomboSection.style.backgroundColor = "#00B8F0";
  earringsReportInColomboSection.style.backgroundColor = "#00B8F0";
  ringsReportInColomboSection.style.backgroundColor = "#00B8F0";
  allReportDetailContainerInColomboSection.style.display = "block";
  necklaceReportDetailContainerInColomboSection.style.display = "none";
  braceletsReportDetailContainerInColomboSection.style.display = "none";
  earringsReportDetailContainerInColomboSection.style.display = "none";
  ringsReportDetailContainerInColomboSection.style.display = "none";
});

// Necklace tab in Colombo
necklaceReportInColomboSection.addEventListener("click", () => {
  allReportInColomboSection.style.color = "#D9D9D9";
  necklaceReportInColomboSection.style.color = "#00B8F0";
  braceletsReportInColomboSection.style.color = "#D9D9D9";
  earringsReportInColomboSection.style.color = "#D9D9D9";
  ringsReportInColomboSection.style.color = "#D9D9D9";

  allReportInColomboSection.style.backgroundColor = "#00B8F0";
  necklaceReportInColomboSection.style.backgroundColor = "#D9D9D9";
  braceletsReportInColomboSection.style.backgroundColor = "#00B8F0";
  earringsReportInColomboSection.style.backgroundColor = "#00B8F0";
  ringsReportInColomboSection.style.backgroundColor = "#00B8F0";
  allReportDetailContainerInColomboSection.style.display = "none";
  necklaceReportDetailContainerInColomboSection.style.display = "block";
  braceletsReportDetailContainerInColomboSection.style.display = "none";
  earringsReportDetailContainerInColomboSection.style.display = "none";
  ringsReportDetailContainerInColomboSection.style.display = "none";
});

// Bracelets tab in Colombo
braceletsReportInColomboSection.addEventListener("click", () => {
  allReportInColomboSection.style.color = "#D9D9D9";
  necklaceReportInColomboSection.style.color = "#D9D9D9";
  braceletsReportInColomboSection.style.color = "#00B8F0";
  earringsReportInColomboSection.style.color = "#D9D9D9";
  ringsReportInColomboSection.style.color = "#D9D9D9";

  allReportInColomboSection.style.backgroundColor = "#00B8F0";
  necklaceReportInColomboSection.style.backgroundColor = "#00B8F0";
  braceletsReportInColomboSection.style.backgroundColor = "#D9D9D9";
  earringsReportInColomboSection.style.backgroundColor = "#00B8F0";
  ringsReportInColomboSection.style.backgroundColor = "#00B8F0";
  allReportDetailContainerInColomboSection.style.display = "none";
  necklaceReportDetailContainerInColomboSection.style.display = "none";
  braceletsReportDetailContainerInColomboSection.style.display = "block";
  earringsReportDetailContainerInColomboSection.style.display = "none";
  ringsReportDetailContainerInColomboSection.style.display = "none";
});

// Earrings tab in Colombo
earringsReportInColomboSection.addEventListener("click", () => {
  allReportInColomboSection.style.color = "#D9D9D9";
  necklaceReportInColomboSection.style.color = "#D9D9D9";
  braceletsReportInColomboSection.style.color = "#D9D9D9";
  earringsReportInColomboSection.style.color = "#00B8F0";
  ringsReportInColomboSection.style.color = "#D9D9D9";

  allReportInColomboSection.style.backgroundColor = "#00B8F0";
  necklaceReportInColomboSection.style.backgroundColor = "#00B8F0";
  braceletsReportInColomboSection.style.backgroundColor = "#00B8F0";
  earringsReportInColomboSection.style.backgroundColor = "#D9D9D9";
  ringsReportInColomboSection.style.backgroundColor = "#00B8F0";
  allReportDetailContainerInColomboSection.style.display = "none";
  necklaceReportDetailContainerInColomboSection.style.display = "none";
  braceletsReportDetailContainerInColomboSection.style.display = "none";
  earringsReportDetailContainerInColomboSection.style.display = "block";
  ringsReportDetailContainerInColomboSection.style.display = "none";
});

// Rings tab in Colombo
ringsReportInColomboSection.addEventListener("click", () => {
  allReportInColomboSection.style.color = "#D9D9D9";
  necklaceReportInColomboSection.style.color = "#D9D9D9";
  braceletsReportInColomboSection.style.color = "#D9D9D9";
  earringsReportInColomboSection.style.color = "#D9D9D9";
  ringsReportInColomboSection.style.color = "#00B8F0";

  allReportInColomboSection.style.backgroundColor = "#00B8F0";
  necklaceReportInColomboSection.style.backgroundColor = "#00B8F0";
  braceletsReportInColomboSection.style.backgroundColor = "#00B8F0";
  earringsReportInColomboSection.style.backgroundColor = "#00B8F0";
  ringsReportInColomboSection.style.backgroundColor = "#D9D9D9";
  allReportDetailContainerInColomboSection.style.display = "none";
  necklaceReportDetailContainerInColomboSection.style.display = "none";
  braceletsReportDetailContainerInColomboSection.style.display = "none";
  earringsReportDetailContainerInColomboSection.style.display = "none";
  ringsReportDetailContainerInColomboSection.style.display = "block";
});

// Ampara Section
// All tab in Ampara
allReportInAmparaSection.addEventListener("click", () => {
  allReportInAmparaSection.style.color = "#00B8F0";
  necklaceReportInAmparaSection.style.color = "#D9D9D9";
  braceletsReportInAmparaSection.style.color = "#D9D9D9";
  earringsReportInAmparaSection.style.color = "#D9D9D9";
  ringsReportInAmparaSection.style.color = "#D9D9D9";

  allReportInAmparaSection.style.backgroundColor = "#D9D9D9";
  necklaceReportInAmparaSection.style.backgroundColor = "#00B8F0";
  braceletsReportInAmparaSection.style.backgroundColor = "#00B8F0";
  earringsReportInAmparaSection.style.backgroundColor = "#00B8F0";
  ringsReportInAmparaSection.style.backgroundColor = "#00B8F0";
  allReportDetailContainerInAmparaSection.style.display = "block";
  necklaceReportDetailContainerInAmparaSection.style.display = "none";
  braceletsReportDetailContainerInAmparaSection.style.display = "none";
  earringsReportDetailContainerInAmparaSection.style.display = "none";
  ringsReportDetailContainerInAmparaSection.style.display = "none";
});

// Necklace tab in Ampara
necklaceReportInAmparaSection.addEventListener("click", () => {
  allReportInAmparaSection.style.color = "#D9D9D9";
  necklaceReportInAmparaSection.style.color = "#00B8F0";
  braceletsReportInAmparaSection.style.color = "#D9D9D9";
  earringsReportInAmparaSection.style.color = "#D9D9D9";
  ringsReportInAmparaSection.style.color = "#D9D9D9";

  allReportInAmparaSection.style.backgroundColor = "#00B8F0";
  necklaceReportInAmparaSection.style.backgroundColor = "#D9D9D9";
  braceletsReportInAmparaSection.style.backgroundColor = "#00B8F0";
  earringsReportInAmparaSection.style.backgroundColor = "#00B8F0";
  ringsReportInAmparaSection.style.backgroundColor = "#00B8F0";
  allReportDetailContainerInAmparaSection.style.display = "none";
  necklaceReportDetailContainerInAmparaSection.style.display = "block";
  braceletsReportDetailContainerInAmparaSection.style.display = "none";
  earringsReportDetailContainerInAmparaSection.style.display = "none";
  ringsReportDetailContainerInAmparaSection.style.display = "none";
});

// Bracelets tab in Ampara
braceletsReportInAmparaSection.addEventListener("click", () => {
  allReportInAmparaSection.style.color = "#D9D9D9";
  necklaceReportInAmparaSection.style.color = "#D9D9D9";
  braceletsReportInAmparaSection.style.color = "#00B8F0";
  earringsReportInAmparaSection.style.color = "#D9D9D9";
  ringsReportInAmparaSection.style.color = "#D9D9D9";

  allReportInAmparaSection.style.backgroundColor = "#00B8F0";
  necklaceReportInAmparaSection.style.backgroundColor = "#00B8F0";
  braceletsReportInAmparaSection.style.backgroundColor = "#D9D9D9";
  earringsReportInAmparaSection.style.backgroundColor = "#00B8F0";
  ringsReportInAmparaSection.style.backgroundColor = "#00B8F0";
  allReportDetailContainerInAmparaSection.style.display = "none";
  necklaceReportDetailContainerInAmparaSection.style.display = "none";
  braceletsReportDetailContainerInAmparaSection.style.display = "block";
  earringsReportDetailContainerInAmparaSection.style.display = "none";
  ringsReportDetailContainerInAmparaSection.style.display = "none";
});

// Earrings tab in Ampara
earringsReportInAmparaSection.addEventListener("click", () => {
  allReportInAmparaSection.style.color = "#D9D9D9";
  necklaceReportInAmparaSection.style.color = "#D9D9D9";
  braceletsReportInAmparaSection.style.color = "#D9D9D9";
  earringsReportInAmparaSection.style.color = "#00B8F0";
  ringsReportInAmparaSection.style.color = "#D9D9D9";

  allReportInAmparaSection.style.backgroundColor = "#00B8F0";
  necklaceReportInAmparaSection.style.backgroundColor = "#00B8F0";
  braceletsReportInAmparaSection.style.backgroundColor = "#00B8F0";
  earringsReportInAmparaSection.style.backgroundColor = "#D9D9D9";
  ringsReportInAmparaSection.style.backgroundColor = "#00B8F0";
  allReportDetailContainerInAmparaSection.style.display = "none";
  necklaceReportDetailContainerInAmparaSection.style.display = "none";
  braceletsReportDetailContainerInAmparaSection.style.display = "none";
  earringsReportDetailContainerInAmparaSection.style.display = "block";
  ringsReportDetailContainerInAmparaSection.style.display = "none";
});

// Rings tab in Ampara
ringsReportInAmparaSection.addEventListener("click", () => {
  allReportInAmparaSection.style.color = "#D9D9D9";
  necklaceReportInAmparaSection.style.color = "#D9D9D9";
  braceletsReportInAmparaSection.style.color = "#D9D9D9";
  earringsReportInAmparaSection.style.color = "#D9D9D9";
  ringsReportInAmparaSection.style.color = "#00B8F0";

  allReportInAmparaSection.style.backgroundColor = "#00B8F0";
  necklaceReportInAmparaSection.style.backgroundColor = "#00B8F0";
  braceletsReportInAmparaSection.style.backgroundColor = "#00B8F0";
  earringsReportInAmparaSection.style.backgroundColor = "#00B8F0";
  ringsReportInAmparaSection.style.backgroundColor = "#D9D9D9";
  allReportDetailContainerInAmparaSection.style.display = "none";
  necklaceReportDetailContainerInAmparaSection.style.display = "none";
  braceletsReportDetailContainerInAmparaSection.style.display = "none";
  earringsReportDetailContainerInAmparaSection.style.display = "none";
  ringsReportDetailContainerInAmparaSection.style.display = "block";
});

// Charts
// Barchart Function
function barChart(selector, data) {
  const barChartInAllConfig = new Chart(selector, {
    type: "bar",
    data: data,
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

// Doughnut (pie) Chart function
function doughnutChart(selector, data, saledCount, AllProductCount) {
  const documentLabel = {
    type: "beforeDatasetsDraw",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx } = chart;
      ctx.save();
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;
      ctx.font = `bold ${
        window.innerWidth >= 1200 ? "24px" : "16px"
      }  sans-serif`;
      ctx.fillStyle = "#000000";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`${saledCount}/${AllProductCount} Sales`, xCoor, yCoor);
    },
  };

  const doughnutInAllConfig = new Chart(selector, {
    type: "doughnut",
    data: data,
    plugins: [documentLabel],
  });
}

// data
const AllProductCounInColombo = 110;
const saledCountInColombo = 52;
const remainingProductCountInColombo = AllProductCounInColombo - saledCountInColombo
const testPie = {
  datasets: [
    {
      label: "My First Dataset",
      data: [saledCountInColombo, remainingProductCountInColombo],
      backgroundColor: ["#FFD700", "#FFFFFF"],
      borderColor: "#000000",
      borderDash: [5],
      weight: 0.1,
      hoverOffset: 10,
    },
  ],
};


const testBar = {
    labels: ["Jan", "Feb", "Mar"],
    datasets: [
      {
        label: "Rings",
        backgroundColor: "#FFD700",
        borderColor: "#000000",
        data: [67, 25, 80],
      },
      {
        label: "Bracelets",
        backgroundColor: "#c2b469",
        borderColor: "#000000",
        data: [39, 52, 11],
      },
      {
        label: "Chains",
        backgroundColor: "#B09500",
        borderColor: "#000000",
        data: [15, 11, 59],
      },
      {
        label: "Earrings",
        backgroundColor: "#001F3F",
        borderColor: "#000000",
        data: [92, 74, 47],
      },
    ],
  };

  barChart(barchartInAllAllSection, testBar);

doughnutChart(
    doughnutInAllAllSection,
  testPie,
  saledCountInColombo,
  AllProductCounInColombo
);
