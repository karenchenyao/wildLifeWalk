//Name: Yao Chen
//ID: 134082197
//Email: ychen569@myseneca.ca
//Section: Web222 NDD

function validate() {
  document.getElementById("LatitudeError").innerHTML = ""; /*clear data*/
  document.getElementById("LongitudeError").innerHTML = "";

  var latitude = document
    .getElementById("Latitude")
    .value.trim(); /*retrieve data from form*/
  var longitude = document.getElementById("Longitude").value.trim();

  if (latitude < -90 || latitude > 90) {
    document.getElementById("LatitudeError").innerHTML =
      "must be valid Latitude (-90 to 90)";
    return false;
  } /*validate data and display notice and stop form being submitted*/

  if (longitude < -180 || longitude > 180) {
    document.getElementById("LongitudeError").innerHTML =
      "must be valid Longitude (-180 to 180)";
    return false;
  }

  return true; /*submit*/
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  console.log(
    "TODO - validate the longitude, latitude values before submitting"
  );
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
