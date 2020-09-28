//JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      var form = document.getElementById("password-reset") as HTMLInputElement;

      form.addEventListener(
        "submit",
        function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          } else if (form.checkValidity() === true) {
            event.preventDefault();
            var emailAddress = (<HTMLInputElement>(
              document.getElementById("email")
            )).value;
            sendRequest(emailAddress);
          }
          form.classList.add("was-validated");
        },
        false
      );
    },
    false
  );
})();

function sendRequest(emailAddress) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      var response = JSON.parse(xhr.response);
      var form = document.getElementById("password-reset");
      var formErrorEl = document.getElementById("form-error-feedback");
      if (response.errors === undefined || response.errors.length == 0) {
        form.classList.remove("error");
        handleSuccess();
      } else {
        form.classList.add("error");
        formErrorEl.innerHTML = response.errors[0].detail;
      }
    }
  };
  xhr.open(
    "POST",
    "http://localhost:3005/customer/account/resetPassword",
    true
  );
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(
    JSON.stringify({
      email: emailAddress,
    })
  );
}

function handleSuccess() {
  alert("Success");
}
