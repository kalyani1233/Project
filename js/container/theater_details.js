import theaterService from "../service/theaterService.js";

$(document).ready(function () {
  const theaterContainer = $("#theaterContainer");

  theaterService.getTheaterDetails()
    .then(response => {
      let theaters = response.data;

      for (let theater of theaters) {
        let theaterElement = $(`
        <div class="col mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">${theater.name}</h2>
            <p class="card-text">${theater.location}</p>
            <ul class="list-group list-group-flush">
            <!-- Show Timings -->
            ${theater.showTimings.map(showTiming => `
              <li class="list-group-item">
                <a href="../html/seats.html" class="list-group-item list-group-item-action text-success">${showTiming.day} - ${showTiming.time}</a>
              </li>`).join('')}
          </ul>
          



          </div>
        </div>
      </div>
        `);

        theaterContainer.append(theaterElement);
      }
    })
    .catch(error => {
      console.error(error);
    });
});
