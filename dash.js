const xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [1860,2540,3260,2800,3070,2110,2400,2210,2330,2478],
      backgroundColor:'#FFD0D0',
      borderWidth: 1,
      borderColor: "red",
      fill: true
    }, { 
      data: [2300,2700,2500,3000,2600,3000,3500,3500,3900,4200],
      backgroundColor:'#ECFFE6',
      borderWidth: 1,
      borderColor: "green",
      fill: true
   
    }]
  },
  options: {
    legend: {display: false}
  }
});


//for the donut chart//

var aValues = ["Lagos State", "Delta State", "Abuja FCT", "Ogun State", "Port Harcourt State"];
var bValues = [55, 45, 44, 14, 30];
var barColors = [
  "#C80036",
  "#102C57",
  "#FF6969",
  "#365E32",
  "#95D2B3"
];

new Chart("myChart2", {
  type: "doughnut",
  data: {
    labels: aValues,
    datasets: [{
      backgroundColor: barColors,
      data: bValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Number of Users From Various States in Nigeria"
    }
  }
});



//for the barchart on the inventorypage//

var xValue = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday","Sunday"];
var yValue = [55, 49, 37, 57, 40, 60, 45];
var barColors = ["red", "green","blue","orange","brown","purple","pink"];

new Chart("myChart3", {
  type: "bar",
  data: {
    labels: xValue,
    datasets: [{
      backgroundColor: barColors,
      data: yValue
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      fontSize:18,
      text: "Sales Report"
    }
  }
});


//script for the uploading of add product image

