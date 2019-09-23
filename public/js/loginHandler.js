document.getElementById("signup").addEventListener("click", function(e) {
  e.preventDefault();
  clearFormErrors();
  const formData = new FormData();
  formData.append("avatar", document.getElementById("avatar").files[0]);
  formData.append("password", document.getElementById("pass").value);
  formData.append("email", document.getElementById("email").value);
  formData.append("firstName", document.getElementById("fname").value);
  formData.append("lastName", document.getElementById("lname").value);
  formData.append("userName", document.getElementById("uname").value);
  fetch("api/signup", {
    method: "POST",
    body: formData
  })
    .then(res => {
      return res.json();
    })
    .then(data => {
      if (data.errors) {
        return handleErrors(data.errors);
      }
      window.location.href = data;
    });
});

function clearFormErrors() {
  let errorFields = $(".error-message");
  $.each(errorFields, function(index) {
    $(errorFields[index]).html("");
  });

  let errorInputs = $(".error");
  $.each(errorInputs, function(index) {
    $(errorInputs[index]).removeClass("error");
  });

  $(".login-error").html("");
}

function handleErrors(errors) {
  let errorClass = "signup";
  for (let error of errors) {
    if (error.message.includes("userName")) {
      let target = $(`.${errorClass}userName`);
      target.find("input").toggleClass("error");
      target
        .find(".error-message")
        .html(`<p class="error-text">${error.message}</p>`);
    }
    if (error.message.includes("email")) {
      let target = $(`.${errorClass}userEmail`);
      target.find("input").toggleClass("error");
      target
        .find(".error-message")
        .html(`<p class="error-text">${error.message}</p>`);
    }
    if (error.message.includes("image")) {
      let target = $(`.${errorClass}userPhoto`);
      target.find("input").toggleClass("error");
      target
        .find(".error-message")
        .html(`<p class="error-text">${error.message}</p>`);
    }
  }
}

document.getElementById("signin").addEventListener("click", function(e) {
  clearFormErrors();
  e.preventDefault();
  fetch("api/login", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: document.getElementById("sign_name").value,
      password: document.getElementById("sign_pass").value
    }) // body data type must match "Content-Type" header
  }).then(res => {
    if (res.status === 400) {
      handleLoginErrors("username or password cannot be empty");
    }
    if (res.status === 401) {
      handleLoginErrors("username or password are incorrect");
    }
  });
});

function handleLoginErrors(message) {
  $("#sign_name").toggleClass("error");
  $("#sign_pass").toggleClass("error");
  $(".login-error").html(`<p class="error-text">${message}</p>`);
}
