$(document).ready(function () {
    $("#submit-btn").click(function () {
      var name = $("#name").val();
      var contact = $("#contact").val();
      var email = $("#mail").val();
      var password = $("#password").val();
      var confirm_password = $("#confirm_password").val();

      if (
        name.length == 0 ||
        contact.length == 0 ||
        email.lenght == 0 ||
        password.length == 0
      ) {
        alert("All entries must be filled");
      }

      if (contact.length != 10) alert("Contact should be of 10 digit");
      if (password != confirm_password) alert("Password is not matching");

      console.log(name, contact, email, password);

      const fileSystem = require("fs");
      const data = {
        "Name": name,
        "Contact": contact,
        "Mail": email,
        "Password": password,
      };
      json_data = JSON.stringify(data);

      fileSystem.writeFile("data.json", json_data, (err) => {
        if (err) {
          console.log("Error writing file", err);
        } else {
          console.log("JSON data is written to the file successfully");
        }
      });
    });
  });