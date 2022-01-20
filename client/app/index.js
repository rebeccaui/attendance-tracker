$(document).ready(function(){


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

    // Function to GET ten pokemon from API
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
                    console.log(studentName);
                    renderRoster(studentName);
                }
            })


        })
    }

    // Render the pokemon that belong in the selected trainer's class
    function renderRoster(studentName) {
        const rosterContainer = $("#roster-container");

        let studentNameDiv = $("<span>").html(studentName);

        rosterContainer.append(studentNameDiv);
    }

});