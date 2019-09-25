$("#projSubmit").on("click", function(e) {
  e.preventDefault();
  clearErrors();
  var title = $("#projTitle").val();
  var urlPhoto = $("#urlPhoto").val();
  if (urlPhoto === "" || /.(png|gif|jpg$)/.test(urlPhoto)) {
    urlPhoto =
      "http://simcloud.com/~atw/wp-content/uploads/2016/10/default.png";
  }
  var projDate = $("#projDate").val();
  var projTime = $("#projTime").val();
  var cap = $("#capacity").val();
  var detail = $("#eventDetails")
    .val()
    .trim();
  var url = $("#urlLink").val();

  let errors = false;

  if (!title) {
    errors = true;
    $("#projTitle").toggleClass("error");
  }
  if (!projDate) {
    errors = true;
    $("#projDate").toggleClass("error");
  }
  if (!projTime) {
    errors = true;
    $("#projTime").toggleClass("error");
  }
  if (!cap) {
    errors = true;
    $("#capacity").toggleClass("error");
  }
  if (!detail) {
    errors = true;
    $("#eventDetails").toggleClass("error");
  }
  if (errors) {
    $("#projectError").html(
      "<p class='error-text'>Please fill missing fields</p>"
    );
    return;
  }

  $.post(
    "/api/newProject",
    {
      title: title,
      photo: urlPhoto,
      eventDate: projDate,
      eventTime: projTime,
      capacity: cap,
      description: detail,
      link: url
    },
    function(results) {
      window.location.href = "projects/" + results.id;
    }
  );
});

function clearErrors() {
  let errorFields = $(".error-message");
  $.each(errorFields, function(index) {
    $(errorFields[index]).html("");
  });

  let errorInputs = $(".error");
  $.each(errorInputs, function(index) {
    $(errorInputs[index]).removeClass("error");
  });
}
