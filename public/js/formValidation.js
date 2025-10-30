document.getElementById("destination-form").onsubmit = () => {
  clearErrors();

  let isValid = true;

  let dropdown = document.getElementById("destination");
  let destination = dropdown.options[dropdown.selectedIndex].value;
  let date = document.getElementById("destination-date").value;
  let numberOfTravelers = document.getElementById("travelers").value;

  if (!destination) {
    isValid = false;
    document.getElementById("err-destination").style.display = "block";
  }

  if (!date) {
    date = new Date().getFullYear();
  }

  if (numberOfTravelers < 1) {
    isValid = false;
    document.getElementById("err-travelers").style.display = "block";
  }

  return isValid;
};

function clearErrors() {
  let errors = document.getElementsByClassName("error");
  for (let error of errors) {
    error.style.display = "none";
  }
}
