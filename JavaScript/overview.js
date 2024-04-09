const all = document.getElementById("all");
const colombo = document.getElementById("colombo");
const ampara = document.getElementById("ampara");
const allDetail = document.getElementById("details-about-all");
const colomboDetail = document.getElementById("details-about-colombo");
const amparaDetail = document.getElementById("details-about-ampara");

// Getting id for charts
const barchartInAll = document
  .getElementById("barchart-in-all")
  .getContext("2d");

const barchartInColombo = document
  .getElementById("barchart-in-colombo")
  .getContext("2d");

const barchartInAmpara = document
  .getElementById("barchart-in-ampara")
  .getContext("2d");

// Default styling in filter bar (Selecting All | show all | hide Ampara & Colombo)
colomboDetail.style.display = "none";
amparaDetail.style.display = "none";
all.style.backgroundColor = "#CCCCCC";
colombo.style.backgroundColor = "#008080";
ampara.style.backgroundColor = "#008080";
colombo.style.color = "#FFFFFF";
ampara.style.color = "#FFFFFF";
allDetail.style.display = "flex";

all.addEventListener("click", () => {
  allDetail.style.display = "block";
  colomboDetail.style.display = "none";
  amparaDetail.style.display = "none";
  all.style.backgroundColor = "#CCCCCC";
  colombo.style.backgroundColor = "#008080";
  ampara.style.backgroundColor = "#008080";
  all.style.color = "#000000";
  colombo.style.color = "#FFFFFF";
  ampara.style.color = "#FFFFFF";
  allDetail.style.display = "flex";
});

colombo.addEventListener("click", () => {
  allDetail.style.display = "none";
  colomboDetail.style.display = "block";
  amparaDetail.style.display = "none";
  all.style.backgroundColor = "#008080";
  colombo.style.backgroundColor = "#CCCCCC";
  ampara.style.backgroundColor = "#008080";
  all.style.color = "#FFFFFF";
  colombo.style.color = "#000000";
  ampara.style.color = "#FFFFFF";
  colomboDetail.style.display = "flex";
});

ampara.addEventListener("click", () => {
  allDetail.style.display = "none";
  colomboDetail.style.display = "none";
  amparaDetail.style.display = "block";
  all.style.backgroundColor = "#008080";
  colombo.style.backgroundColor = "#008080";
  ampara.style.backgroundColor = "#CCCCCC";
  all.style.color = "#FFFFFF";
  colombo.style.color = "#FFFFFF";
  ampara.style.color = "#000000";
  amparaDetail.style.display = "flex";
});

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

// Data for charts
// Barcharts
// Barchart in Colombo page
const dataForBarchartInColombo = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Rings",
      backgroundColor: "#FFD700",
      borderColor: "#000000",
      data: [67, 25, 80, 40, 60, 75, 80, 15, 63, 85, 12, 56],
    },
    {
      label: "Bracelets",
      backgroundColor: "#c2b469",
      borderColor: "#000000",
      data: [67, 25, 80, 40, 60, 75, 80, 15, 63, 85, 12, 56],
    },
    {
      label: "Chains",
      backgroundColor: "#B09500",
      borderColor: "#000000",
      data: [67, 25, 80, 40, 60, 75, 80, 15, 63, 85, 12, 56],
    },
    {
      label: "Earrings",
      backgroundColor: "#001F3F",
      borderColor: "#000000",
      data: [67, 25, 80, 40, 60, 75, 80, 15, 63, 85, 12, 56],
    },
  ],
};

// Barchart in Ampara page
const dataForBarchartInAmpara = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Rings",
      backgroundColor: "#FFD700",
      borderColor: "#000000",
      data: [67, 25, 80, 40, 60, 75, 80, 15, 63, 85, 12, 56],
    },
    {
      label: "Bracelets",
      backgroundColor: "#c2b469",
      borderColor: "#000000",
      data: [67, 25, 80, 40, 60, 75, 80, 15, 63, 85, 12, 56],
    },
    {
      label: "Chains",
      backgroundColor: "#B09500",
      borderColor: "#000000",
      data: [67, 25, 80, 40, 60, 75, 80, 15, 63, 85, 12, 56],
    },
    {
      label: "Earrings",
      backgroundColor: "#001F3F",
      borderColor: "#000000",
      data: [67, 25, 80, 40, 60, 75, 80, 15, 63, 85, 12, 56],
    },
  ],
};

// Barchart in All page
const dataForBarchartInAll = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Rings",
      backgroundColor: "#FFD700",
      borderColor: "#000000",
      data: [67, 25, 80, 40, 60, 75, 80, 15, 63, 85, 12, 56],
    },
    {
      label: "Bracelets",
      backgroundColor: "#c2b469",
      borderColor: "#000000",
      data: [67, 25, 80, 40, 60, 75, 80, 15, 63, 85, 12, 56],
    },
    {
      label: "Chains",
      backgroundColor: "#B09500",
      borderColor: "#000000",
      data: [67, 25, 80, 40, 60, 75, 80, 15, 63, 85, 12, 56],
    },
    {
      label: "Earrings",
      backgroundColor: "#001F3F",
      borderColor: "#000000",
      data: [67, 25, 80, 40, 60, 75, 80, 15, 63, 85, 12, 56],
    },
  ],
};

barChart(barchartInAll, dataForBarchartInAll);
barChart(barchartInColombo, dataForBarchartInColombo);
barChart(barchartInAmpara, dataForBarchartInAmpara);
