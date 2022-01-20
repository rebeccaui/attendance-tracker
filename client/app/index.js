
    // //Including FusionCharts Dependencies
    // var FusionCharts = require('fusioncharts');
    // var Charts = require('fusioncharts/fusioncharts.charts');
    // var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');
    // var $ = require('jquery');
    // var jQueryFusionCharts = require('jquery-fusioncharts');
    
    // Charts(FusionCharts); // Resolve Charts as dependency for FusionCharts
    
    // FusionTheme(FusionCharts); // Resolve Fusion theme as dependency for FusionCharts
    
    // jQueryFusionCharts(FusionCharts); //Resolve jQueryFusionCharts as dependency for FusionCharts    


$(document).ready(function(){

    // When the value of the dropdown selection changes
    // Use that value to pass the offset number to the API queryURL
    $("#roster-selection").on("change", function() {

        $("#roster-container").html("");
        
        switch ($("#roster-selection").val()) {
            case "Ash":
                getPokemon(0);
            break;
            case "Red":
                getPokemon(10);
            break;
            case "Misty":
                getPokemon(20);
            break;
            case "Brock":
                getPokemon(30);
            break;
            case "Gary":
                getPokemon(40);
            break;
        }
    });

    // Function to GET ten pokemon at a time from API
    // Pass offset prop into function for queryURL
    function getPokemon(offset) {
        $("#submit").on("click", function() {

            let trainerName = $("#roster-selection").val();
            console.log(trainerName);

            let queryURL = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=" + offset;

            $.ajax({
                url: queryURL,
                method: "GET"
            })
            .then(function(res) {

                $("#roster-container").html("");

                const results = res.results
                console.log(results)

                for (let i = 0; i < results.length; i++) {
                    let studentName = results[i].name;
                    //let studentType = results[i].type
                    console.log(studentName);
                    renderRoster(studentName);
                }
            })


        })
    }

    // Render the pokemon that belong in the selected trainer's class
    function renderRoster(studentName) {
        const rosterContainer = $("#roster-container");

        let studentNameDiv = $("<p>").html(studentName);

        rosterContainer.append(studentNameDiv);
    }




// SAMPLE DATA FOR CHARTING

// Preparing the chart data
const redRoster = [
    {
      label: "Metapod",
      value: "Bug"
    },
    {
      label: "Butterfree",
      value: "Bug"
    },
    {
      label: "Weedle",
      value: "Bug"
    },
    {
      label: "Kakuna",
      value: "Bug"
    },
    {
      label: "Beedrill",
      value: "Bug"
    },
    {
      label: "Pidgey",
      value: "Flying"
    },
    {
      label: "Pidgeotto",
      value: "Flying"
    },
    {
      label: "Pidgeot",
      value: "Flying"
    },
    {
      label: "Rattata",
      value: "Normal"
    },
    {
      label: "Raticate",
      value: "Normal"
    }
  ];

  // Create a JSON object to store the chart configurations
    const chartConfig = {
        //Specify the chart type
        type: "column2d",
        //Set the container object
        renderAt: "chart-container",
        //Specify the width of the chart
        width: "100%",
        //Specify the height of the chart
        height: "400",
        //Set the type of data
        dataFormat: "json",
        dataSource: {
        chart: {
            //Set the chart caption
            caption: "Red's Class Distribution of Pokemon Types",
            //Set the chart subcaption
            //subCaption: "",
            //Set the x-axis name
            xAxisName: "Country",
            //Set the y-axis name
            yAxisName: "Reserves (MMbbl)",
            numberSuffix: "K",
            //Set the theme for your chart
            theme: "fusion"
        },
        // Chart Data from Step 2
        data: redRoster
        }
    };

    // FusionCharts.ready(function(){
    //     var fusioncharts = new FusionCharts(chartConfig);
    //     fusioncharts.render();
    // });

});