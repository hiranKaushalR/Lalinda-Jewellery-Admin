const all = document.getElementById("all");
const colombo = document.getElementById("colombo");
const ampara = document.getElementById("ampara");
const allDetail = document.getElementById("details-about-all");
const colomboDetail = document.getElementById("details-about-colombo");
const amparaDetail = document.getElementById("details-about-ampara");

// Getting id for charts
const doughnutInAll = document
  .getElementById("doughnut-in-all")
  .getContext("2d");

const doughnutInColombo = document
  .getElementById("doughnut-in-colombo")
  .getContext("2d");

const doughnutInAmpara = document
  .getElementById("doughnut-in-ampara")
  .getContext("2d");

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


// Data for charts
// Barcharts
// Barchart in Colombo page
const dataForBarchartInColombo = {
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

// Barchart in Ampara page
const dataForBarchartInAmpara = {
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

// Barchart in All page
const dataForBarchartInAll = {
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

// Doughnut (Pie) Charts
//  Doughnut (Pie) Chart in Colombo page
const AllProductCounInColombo = 110;
const saledCountInColombo = 52;
const remainingProductCountInColombo = AllProductCounInColombo - saledCountInColombo
const dataForDoughnutInColombo = {
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

//  Doughnut (Pie) Chart in Ampara page
const AllProductCounInAmpara = 120;
const saledCountInAmpara = 71;
const remainingProductCountInAmpara = AllProductCounInAmpara - saledCountInAmpara
const dataForDoughnutInAmpara = {
  datasets: [
    {
      label: "My First Dataset",
      data: [saledCountInAmpara, remainingProductCountInAmpara],
      backgroundColor: ["#FFD700", "#FFFFFF"],
      borderColor: "#000000",
      borderDash: [5],
      weight: 0.1,
      hoverOffset: 10,
    },
  ],
};

//  Doughnut (Pie) Chart in All page
const AllProductCounInAll = AllProductCounInAmpara + AllProductCounInColombo;
const saledCountInAll = saledCountInAmpara + saledCountInColombo;
const remainingProductCountInAll = AllProductCounInAll - saledCountInAll
const dataForDoughnutInAll = {
  datasets: [
    {
      label: "My First Dataset",
      data: [saledCountInAll, remainingProductCountInAll],
      backgroundColor: ["#FFD700", "#FFFFFF"],
      borderColor: "#000000",
      borderDash: [5],
      weight: 0.1,
      hoverOffset: 10,
    },
  ],
};

barChart(barchartInAll, dataForBarchartInAll);
barChart(barchartInColombo, dataForBarchartInColombo);
barChart(barchartInAmpara, dataForBarchartInAmpara);

doughnutChart(
  doughnutInAll,
  dataForDoughnutInAll,
  saledCountInAll,
  AllProductCounInAll
);
doughnutChart(
  doughnutInColombo,
  dataForDoughnutInColombo,
  saledCountInColombo,
  AllProductCounInColombo
);
doughnutChart(
  doughnutInAmpara,
  dataForDoughnutInAmpara,
  saledCountInAmpara,
  AllProductCounInAmpara
);
