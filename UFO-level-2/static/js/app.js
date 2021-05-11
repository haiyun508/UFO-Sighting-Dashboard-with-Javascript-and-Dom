// from data.js
var tableData = data;
// get a reference to the table body
var tbody=d3.select("tbody")

// Loop Through `data` 
// Use d3 to append one table row `tr` for each UFO sighting object
// use d3 to append 1 cell per sighting value()
tableData.forEach(sighting => {
    var row=tbody.append("tr");
    Object.entries(sighting).forEach(([key,value])=>{
    var cell=row.append("td");
    cell.text(value);
    });
});

// get reference to the form and the filter button
var form=d3.select("form");
var button=d3.select("#filter-btn");

//create event handlers
button.on("click",runEnter);
form.on("submit",runEnter);

// create event handler function
function runEnter(){

    // prevent the page from refreshing
    d3.event.preventDefault();

    // select the input elements and get the value property 
    var dateElement=d3.select("#date").property("value");
    var cityElement=d3.select("#city").property("value");
    var stateElement=d3.select("#state").property("value");
    var countryElement=d3.select("#country").property("value");
    var shapeElement=d3.select("#shape").property("value");
    // console.log(dateElement)
    // console.log(cityElement)
    // console.log(stateElement)
    // console.log(countryElement)
    // console.log(shapeElement)

    // use the form input to filter the data by date
    var filteredData=tableData.filter(sighting=>sighting.datetime===dateElement
                                                &&sighting.city===cityElement
                                                &&sighting.state===stateElement
                                                &&sighting.country===countryElement
                                                &&sighting.shape===shapeElement);

    // clear table content
    d3.select("tbody").html("");

    // add the filtered data to table
    filteredData.forEach(sighting => {
        var row=tbody.append("tr");
        Object.entries(sighting).forEach(([key,value])=>{
        var cell=row.append("td");
        cell.text(value);
        });
    });
}

