//File Name: index.js
//Student's Name: Ashutosh Kansal
//StudentID: 301233980
//Date: 22 June, 2023

// Submit event handler for adding a user
$("#add_user").submit(function (event) {
  alert("Data Inserted Successfully");
});

// Submit event handler for updating a user
$("#update_user").submit(function (event) {
  event.preventDefault();

  // Convert form data to an object
  var unindexed_array = $(this).serializeArray();
  var data = {};

  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });

  //creating AJAX request for updating user
  var request = {
    url: `http://localhost:3000/api/users/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert("Data Updated Successfully!");
    window.location.href = "http://localhost:3000/listofcontacts";
  });
});

// Check if the current page is the list of contacts page
if (window.location.pathname == "/listofcontacts") {
  // Click event handler for deleting a user
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");

    //Creating AJAX request for deleting user
    var request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: "DELETE",
    };

    // Confirm the deletion and send the request

    if (confirm("Do you really want to delete this record?")) {
      $.ajax(request).done(function (response) {
        alert("Data Deleted Successfully!");
        location.reload();
      });
    }
  });
}
