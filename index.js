// Import stylesheets
import "./style.css";

function validateForm() {
  var isFormValid = true;
  var fname = InputFirstName.value;
  var namePattern = /^[a-z A-Z]+$/;
  console.log("phone/mobile", InputNumberType.value);
  console.log("fname", fname);
  if (fname == "") {
    fnameMsg.innerHTML = "Please enter your First Name.";
    InputFirstName.focus();
    isFormValid = false;
  } else if (!namePattern.test(fname)) {
    fnameMsg.innerHTML = "First Name must be alphabets.";
    InputFirstName.focus();
    isFormValid = false;
  } else {
    fnameMsg.innerHTML = "";
    isFormValid = true;
  }

  var lname = InputLastName.value;
  console.log("lname", lname);
  if (lname == "") {
    lnameMsg.innerHTML = "Please enter your Last Name.";
    // InputLastName.focus();
    isFormValid = false;
  } else if (!namePattern.test(lname)) {
    lnameMsg.innerHTML = "Last Name must be alphabets.";
    // InputLastName.focus();
    isFormValid = false;
  } else {
    isFormValid = true;
    lnameMsg.innerHTML = "";
  }

  var streetAddress = InputStreetAddress.value;

  if (!streetAddress) {
    streetAddressMsg.innerHTML = "Please enter your Street Address.";
    $("#streetAddressMsg").addClass("text-danger");
    // InputStreetAddress.focus();
    isFormValid = false;
  } else {
    streetAddressMsg.innerHTML = "";
    isFormValid = true;
  }
  var city = InputCity.value;

  if (city == "") {
    cityMsg.innerHTML = "Please enter your City name.";
    isFormValid = false;
  } else {
    cityMsg.innerHTML = "";
    isFormValid = true;
  }

  var state = InputState.value;
  if (state == "") {
    stateMsg.innerHTML = "please enter State code.";
    $("#stateMsg").addClass("text-danger");
    isFormValid = false;
  } else {
    stateMsg.innerHTML = "";
    isFormValid = true;
  }

  var zip = InputZip.value;
  zipPattern = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
  if (zip == "") {
    zipMsg.innerHTML = "Please enter your Zip code.";
    isFormValid = false;
  } else if (!zipPattern.test(zip)) {
    zipMsg.innerHTML = "Please enter valid Zip code.";
    isFormValid = false;
  } else {
    zipMsg.innerHTML = "";
    isFormValid = true;
  }

  var phoneType = InputNumberType.value;
  var phoneNumber = InputPhone.value;
  var numberPattern = /^\d{10}$/;
  var digit = /[0-9]/;
  if (phoneNumber == "") {
    phoneMsg.innerHTML = "Please enter Phone Number.";
    isFormValid = false;
  } else if (phoneType == "Mobile") {
    if (!numberPattern.test(phoneNumber)) {
      phoneMsg.innerHTML = "Please enter 10 digit Mobile Number. ";
      isFormValid = false;
    }
  } else if (phoneType == "Home") {
    if (!digit.test(phoneNumber)) {
      phoneMsg.innerHTML = "Please enter Numbers only. ";
      isFormValid = false;
    }
  } else {
    phoneMsg.innerHTML = "";
    isFormValid = true;
  }
  return isFormValid;
}

function clearForm() {
  lnameMsg.innerHTML = "";
  fnameMsg.innerHTML = "";
  streetAddressMsg.innerHTML = "";
  cityMsg.innerHTML = "";
  stateMsg.innerHTML = "";
  zipMsg.innerHTML = "";
  phoneMsg.innerHTML = "";
}