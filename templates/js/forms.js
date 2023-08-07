// ajax
$(document).ready(function () {
  $("#form-m").submit(function (event) {
    event.preventDefault();

    if ($("#email-m").val().indexOf("@") + 1 === 0) {
      $("#email-m").addClass("invalid");
      $("#email-m").next().addClass("show");
      return;
    }

    if ($("#phone-m").val().length < 8) {
      $("#phone-m").addClass("invalid");
      $("#phone-m").next().addClass("show");
      return;
    }
    var formData = {
      name: $("#name-m").val(),
      email: $("#email-m").val(),
      phone: $("#phone-m").val(),
    };

    $.ajax({
      type: "POST",
      url: "set_data.php",
      data: formData,
      dataType: "json",
      encode: true,
    });
    window.open('https://secure.wayforpay.com/button/b3744925dc3cb', '_blunk')
    document.querySelectorAll("#form-m input").forEach((e) => (e.value = ""));
  });

  $("#main-from").submit(function (event) {
    event.preventDefault();

    if ($("#email").val().indexOf("@") + 1 === 0) {
      $("#email").addClass("invalid");
      $("#email").next().addClass("show");
      return;
    }

    if ($("#phone").val().length < 8) {
      $("#phone").addClass("invalid");
      $("#phone").next().addClass("show");
      return;
    }
    var formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      phone: $("#phone").val(),
    };

    $.ajax({
      type: "POST",
      url: "set_data.php",
      data: formData,
      dataType: "json",
      encode: true,
    });
    window.open('https://secure.wayforpay.com/button/b3744925dc3cb', '_blunk')
    document.querySelectorAll("#main-from input").forEach((e) => (e.value = ""));
  });
});

// inputs vallid
document.addEventListener("DOMContentLoaded", function () {
  var elements = document.getElementsByTagName("INPUT");
  for (var i = 0; i < elements.length; i++) {
    elements[i].oninvalid = function (e) {
        e.target.setCustomValidity("");
      e.target.classList.remove("invalid");
      if (!e.target.validity.valid) {
        e.target.classList.add("invalid");
        e.target.setCustomValidity('Заповніть це поле');
      }
    };
    elements[i].oninput = function (e) {
        let nextEl = e.target.nextElementSibling
        e.target.setCustomValidity("");
      e.target.classList.remove("invalid");
      if (nextEl){
        if (nextEl.classList.contains("show")) {
            nextEl.classList.remove("show");
          }
      }
    };
  }
});
