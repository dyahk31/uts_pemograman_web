const showInfected = document.getElementById("infected");
const showRecovered = document.getElementById("recovered");
const showFatal = document.getElementById("fatal");

if(top.location.pathname === '/data.html'){
    $(document).ready(() => {
        fetch('./stats.json')
        .then((data) => data.json())
        .then(data => {
            const showData = data.numbers

            showInfected.innerHTML = `${showData.infected}`;
            showRecovered.innerHTML = `${showData.recovered}`;
            showFatal.innerHTML = `${showData.fatal}`;
            console.log(data);
        })
    })
}

