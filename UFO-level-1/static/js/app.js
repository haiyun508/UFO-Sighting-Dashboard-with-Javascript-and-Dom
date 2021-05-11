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

    // select the input element and get the raw html node
    var inputElement=d3.select("#datetime")

    // get the value property of the inputElement
    var inputValue=inputElement.property("value");

    // use the form input to filter the data by date
    var filteredData=tableData.filter(sighting=>sighting.datetime===inputValue);

    // clear table content
    d3.select("tbody").html("")

    // add the filtered data to table
    filteredData.forEach(sighting => {
        var row=tbody.append("tr");
        Object.entries(sighting).forEach(([key,value])=>{
        var cell=row.append("td");
        cell.text(value);
        });
    });
}

