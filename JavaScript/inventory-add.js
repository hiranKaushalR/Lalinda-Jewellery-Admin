new gridjs.Grid({
    search: true,
    pagination: {
      limit: 8,
      summary: false
    },
    columns: [{name: 'Index', sort: true}, {name: "Name", sort: true }, {name: "Buying Price", sort: true},  {name: "Category", sort: true},  {name: "Quantity", sort: true},  {name: "Quickly", sort: true},  {name: "Weight", sort: true}],
    data: [
      [1, 'Golden Bracelet', '40 000', 'Bracelet', 24, '18K', '175 g'],
      [2, 'Golden Ring', '26 000', 'Ring', 21, '24K', '145 g'],
      [3, 'Golden Neckless', '30 000', 'Neckless', 21, '20K', '180 g'],
      [4, 'Golden Earring', '55 000', 'Earring', 28, '28K', '125 g'],
      [1, 'Golden Bracelet', '40 000', 'Bracelet', 24, '18K', '175 g'],
      [2, 'Golden Ring', '26 000', 'Ring', 21, '24K', '145 g'],
      [3, 'Golden Neckless', '30 000', 'Neckless', 21, '20K', '180 g'],
      [4, 'Golden Earring', '55 000', 'Earring', 28, '28K', '125 g'],
      [2, 'Golden Ring', '26 000', 'Ring', 21, '24K', '145 g'],
      [3, 'Golden Neckless', '30 000', 'Neckless', 21, '20K', '180 g'],
      [1, 'Golden Bracelet', '40 000', 'Bracelet', 24, '18K', '175 g'],
      [3, 'Golden Neckless', '30 000', 'Neckless', 21, '20K', '180 g'],
    ]
  }).render(document.getElementById("supply-detail-table"));
  