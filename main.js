var validName;
var validAddress;
var validPhone;
var validPostal;
var validEmail;
var validLength;
var validWidth;
var validRadius;

function validateName() {
  var clientName = document.getElementById("clientName").value;
  var isName = isNaN(clientName);
  if (isName == false) {
    document.getElementById("clientName").classList.add("is-invalid");
    document.getElementById("clientName").classList.remove("is-valid");
    validName = false;
  } else {
    document.getElementById("clientName").classList.add("is-valid");
    document.getElementById("clientName").classList.remove("is-invalid");
    validName = true;
  }
  checkForm();
}

function validateAddress() {
  var address = document.getElementById("address").value;
  var pattern = new RegExp("^[a-zA-Z0-9- ]+$");
  if (pattern.test(address)) {
    document.getElementById("address").classList.add("is-valid");
    document.getElementById("address").classList.remove("is-invalid");
    validAddress = true;
  } else {
    document.getElementById("address").classList.add("is-invalid");
    document.getElementById("address").classList.remove("is-valid");
    validAddress = false;
  }
  checkForm();
}

function validatePhone() {
  var telephone = document.getElementById("telephone").value;
  var pattern = new RegExp("^[0-9]{3}-[0-9]{3}-[0-9]{4}$");
  if (pattern.test(telephone)) {
    document.getElementById("telephone").classList.add("is-valid");
    document.getElementById("telephone").classList.remove("is-invalid");
    validPhone = true;
  } else {
    document.getElementById("telephone").classList.add("is-invalid");
    document.getElementById("telephone").classList.remove("is-valid");
    validPhone = false;
  }
  checkForm();
}

function validatePostalCode() {
  var postalCode = document.getElementById("postalCode").value;
  var pattern = new RegExp("^[a-zA-Z][0-9][a-zA-Z][0-9][a-zA-Z][0-9]$");
  if (pattern.test(postalCode)) {
    document.getElementById("postalCode").classList.add("is-valid");
    document.getElementById("postalCode").classList.remove("is-invalid");
    validPostal = true;
  } else {
    document.getElementById("postalCode").classList.add("is-invalid");
    document.getElementById("postalCode").classList.remove("is-valid");
    validPostal = false;
  }
  checkForm();
}

function validateEmail() {
  var email = document.getElementById("email").value;
  var pattern = new RegExp("^[a-zA-Z0-9_.-]+@[a-zA-Z]+[.][a-zA-Z]{2,}$");
  if (pattern.test(email)) {
    document.getElementById("email").classList.add("is-valid");
    document.getElementById("email").classList.remove("is-invalid");
    validEmail = true;
  } else {
    document.getElementById("email").classList.add("is-invalid");
    document.getElementById("email").classList.remove("is-valid");
    validEmail = false;
  }
  checkForm();
}

function validateLength() {
  var length = document.getElementById("length").value;
  length = parseFloat(length);
  if (length >= 0) {
    document.getElementById("length").classList.add("is-valid");
    document.getElementById("length").classList.remove("is-invalid");
  } else {
    document.getElementById("length").classList.add("is-invalid");
    document.getElementById("length").classList.remove("is-valid");
  }
  checkForm();
}

function validateWidth() {
  var width = document.getElementById("width").value;
  width = parseFloat(width);
  if (width >= 0) {
    document.getElementById("width").classList.add("is-valid");
    document.getElementById("width").classList.remove("is-invalid");
  } else {
    document.getElementById("width").classList.add("is-invalid");
    document.getElementById("width").classList.remove("is-valid");
  }
  checkForm();
}

function validateHeight() {
  var height = document.getElementById("height").value;
  height = parseFloat(height);
  if (height >= 0) {
    document.getElementById("height").classList.add("is-valid");
    document.getElementById("height").classList.remove("is-invalid");
  } else {
    document.getElementById("height").classList.add("is-invalid");
    document.getElementById("height").classList.remove("is-valid");
  }
  checkForm();
}

function validateRadius() {
  var radius = document.getElementById("radius").value;
  radius = parseFloat(radius);
  if (radius >= 0) {
    document.getElementById("radius").classList.add("is-valid");
    document.getElementById("radius").classList.remove("is-invalid");
  } else {
    document.getElementById("radius").classList.add("is-invalid");
    document.getElementById("radius").classList.remove("is-valid");
  }
  checkForm();
}

function validateRadius2() {
  var radius2 = document.getElementById("radius2").value;
  radius2 = parseFloat(radius2);
  if (radius2 >= 0) {
    document.getElementById("radius2").classList.add("is-valid");
    document.getElementById("radius2").classList.remove("is-invalid");
  } else {
    document.getElementById("radius2").classList.add("is-invalid");
    document.getElementById("radius2").classList.remove("is-valid");
  }
  checkForm();
}

function displayPlanterOption() {
  var infoPage = "";
  var div = "planterSection";
  var option = document.getElementById("planterSelection");
  if (option.value == 1) {
    infoPage = "planter1.html";
  } else if (option.value == 2) {
    infoPage = "planter2.html";
  } else if (option.value == 3) {
    infoPage = "planter3.html";
  } else if (option.value == 4) {
    infoPage = "planter4.html";
  } else {
    infoPage = "blank.html";
  }

  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById(div).innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", infoPage, true);
  xhr.send();
}

function displayPlanter1() {
  var message = "";
  var clientName = document.getElementById("clientName").value;
  var address = document.getElementById("address").value;
  var postalCode = document.getElementById("postalCode").value;
  var telephone = document.getElementById("telephone").value;
  var email = document.getElementById("email").value;
  var lengthValue = document.getElementById("length");
  if (lengthValue) {
    var length = document.getElementById("length").value;
  }
  var widthValue = document.getElementById("width");
  if (widthValue) {
    var width = document.getElementById("width").value;
  }
  var heightValue = document.getElementById("height");
  if (heightValue) {
    var height = document.getElementById("height").value;
  }

  var dimensions = length * width * height;

  var planterTotal = dimensions * 0.001;

  message += "<h4 class='mt-4'>Customer Details</h4>";
  message += "<hr>";
  message += "<h6>" + clientName + "</h6>";
  message += "<h6>" + address + "</h6>";
  message += "<h6>" + postalCode + "</h6>";
  message += "<h6>" + telephone + "</h6>";
  message += "<h6>" + email + "</h6><br>";
  message += "<h4>Order Details</h4><hr>";
  message += "<h6>Type Of Planter: square/rectangular planter</h6>";
  message +=
    "<h6>Dimensions: " + width + " x " + length + " x " + height + "</h6>";
  message += "<h6>Volume: " + dimensions + "cm3" + "</h6>";
  message += "<h6>Total Cost $" + planterTotal.toFixed(2) + "</h6>";

  document.getElementById("order").innerHTML = message;
}

function displayPlanter2() {
  var message = "";
  var clientName = document.getElementById("clientName").value;
  var address = document.getElementById("address").value;
  var postalCode = document.getElementById("postalCode").value;
  var telephone = document.getElementById("telephone").value;
  var email = document.getElementById("email").value;

  var radiusValue = document.getElementById("radius");
  if (radiusValue) {
    var radius = document.getElementById("radius").value;
  }
  var heightValue = document.getElementById("height");
  if (heightValue) {
    var height = document.getElementById("height").value;
  }

  var dimensions = Math.PI * radius * radius * height;

  var planterTotal = dimensions * 0.0012;

  message += "<h4 class='mt-4'>Customer Details</h4>";
  message += "<hr>";
  message += "<h6>" + clientName + "</h6>";
  message += "<h6>" + address + "</h6>";
  message += "<h6>" + postalCode + "</h6>";
  message += "<h6>" + telephone + "</h6>";
  message += "<h6>" + email + "</h6><br>";
  message += "<h4>Order Details</h4><hr>";
  message += "<h6>Type Of Planter: Flat Bottomed Cylinder Planter</h6>";
  message += "<h6>Dimensions: " + radius + " x " + height + "</h6>";
  message += "<h6>Volume: " + dimensions.toFixed(2) + "cm3" + "</h6>";
  message += "<h6>Total Cost $" + planterTotal.toFixed(2) + "</h6>";

  document.getElementById("order").innerHTML = message;
}

function displayPlanter3() {
  var message = "";
  var clientName = document.getElementById("clientName").value;
  var address = document.getElementById("address").value;
  var postalCode = document.getElementById("postalCode").value;
  var telephone = document.getElementById("telephone").value;
  var email = document.getElementById("email").value;

  var radiusValue = document.getElementById("radius");
  if (radiusValue) {
    var radius = document.getElementById("radius").value;
  }

  var dimensions = 0.5 * (1.3333 * Math.PI * radius * radius * radius);

  var planterTotal = dimensions * 0.0015;

  message += "<h4 class='mt-4'>Customer Details</h4>";
  message += "<hr>";
  message += "<h6>" + clientName + "</h6>";
  message += "<h6>" + address + "</h6>";
  message += "<h6>" + postalCode + "</h6>";
  message += "<h6>" + telephone + "</h6>";
  message += "<h6>" + email + "</h6><br>";
  message += "<h4>Order Details</h4><hr>";
  message += "<h6>Type Of Planter: ½ Spherical Planter</h6>";
  message += "<h6>Dimensions: " + radius + "</h6>";
  message += "<h6>Volume: " + dimensions.toFixed(2) + "cm3" + "</h6>";
  message += "<h6>Total Cost $" + planterTotal.toFixed(2) + "</h6>";

  document.getElementById("order").innerHTML = message;
}

function displayPlanter4() {
  var message = "";
  var clientName = document.getElementById("clientName").value;
  var address = document.getElementById("address").value;
  var postalCode = document.getElementById("postalCode").value;
  var telephone = document.getElementById("telephone").value;
  var email = document.getElementById("email").value;

  var topRadiusValue = document.getElementById("radius");
  if (topRadiusValue) {
    var topRadius = document.getElementById("radius").value;
  }
  var bottomRadiusValue = document.getElementById("radius2");
  if (bottomRadiusValue) {
    var bottomRadius = document.getElementById("radius2").value;
  }
  var heightValue = document.getElementById("height");
  if (heightValue) {
    var height = document.getElementById("height").value;
  }

  var dimensions =
    (1 / 3) *
    Math.PI *
    height *
    (topRadius * topRadius +
      topRadius * bottomRadius +
      bottomRadius * bottomRadius);

  var planterTotal = dimensions * 0.002;

  message += "<h4 class='mt-4'>Customer Details</h4>";
  message += "<hr>";
  message += "<h6>" + clientName + "</h6>";
  message += "<h6>" + address + "</h6>";
  message += "<h6>" + postalCode + "</h6>";
  message += "<h6>" + telephone + "</h6>";
  message += "<h6>" + email + "</h6><br>";
  message += "<h4>Order Details</h4><hr>";
  message += "<h6>Type Of Planter: Truncated cone planter</h6>";
  message +=
    "<h6>Dimensions: " +
    topRadius +
    " x " +
    bottomRadius +
    " x " +
    height +
    "</h6>";
  message += "<h6>Volume: " + dimensions.toFixed(2) + "cm3" + "</h6>";
  message += "<h6>Total Cost $" + planterTotal.toFixed(2) + "</h6>";

  document.getElementById("order").innerHTML = message;
}

function checkForm() {
  var formFilled = true;
  var buttonEnabled = document.getElementById("submitButton");
  document
    .getElementById("newPlantersForm")
    .querySelectorAll("[required]")
    .forEach(function (i) {
      if (!i.value) {
        formFilled = false;
      }
    });
  if (formFilled && buttonEnabled) {
    document.getElementById("submitButton").disabled = false;
  }
}
