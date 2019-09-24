//Login Page disclaimer
$("#disclaimerButton").on("click", function() {
  var disclaim =
    "<h3 style='text-align:center;'>Nicecity Disclaimer</h3><p class='dispara'>The information contained on https://nicecity.herokuapp.com/ website (the \"Service\") is for general information purposes only.</p><p class='dispara'>Nicecity assumes no responsibility for errors or omissions in the contents on the Service.</p><p class='dispara'>In no event shall Nicecity be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. Nicecity reserves the right to make additions, deletions, or modification to the contents on the Service at any time without prior notice. This Disclaimer for Nicecity has been created with the help of <a href='https://www.termsfeed.com/' target='_blank'>TermsFeed</a>.</p><p class='dispara'>Nicecity does not warrant that the website is free of viruses or other harmful components.</p>";
  $("#disclaimer").html(disclaim);
});

// Javascript for tabs on Profile Page
$(".openAttended").on("click", function() {
  $(".userHoursSpace").hide();
  $(".userProjectsAttended").show();
  $(".userProjectsPending").hide();
  console.log("hey");
});

$(".openProjects").on("click", function() {
  $(".userHoursSpace").hide();
  $(".userProjectsAttended").hide();
  $(".userProjectsPending").show();
});

// Profile Page - if div for activities empty...
projects = [];
if (projects.length === 0) {
  var noProject = $("<div>").attr("class", "noProjectAppended");
  var words =
    "<h2>Your volunteer box is currently empty. Take a peek at the latest projects posted:   <a href='/projects'>HERE<a><h2>";
  noProject.append(words);
  $(".userProjectsPending").append(noProject);
}

//Project Page - do not allow user to give negative number volunteers
// var cap = $("#capacity").val();
// if (cap <= 0){
//   $("#capacity").val("0");
// }
// $.get("/profile").then(function(data) {
//   console.log("Hello");
//   //console.log(data);
// });
// var url =;
// $.get(url).then(function(data){
//     userData = data.user;
//     $("#name").text(userData.name);
//     $(".userEmail").text(userData.email);
//     $("#userPhoto").attr("src", userData.image);
// });
// $.get(url).then(function(data){
// var projectList = data.user.project;
// for (var i =0; i < projectList.length; i++){
//     var newProject =   '<div class="card" id="newProjectCard" style="width: 60rem; margin-left:18%;">'+
//                         '<p class="card-text text-center"></p>'+
//                         '<img id="imageProject" src="" class="card-img-top" alt="">'+
//                         '<div class="card-body">'+
//                         '<p class="detailsProject">Details:</p>'+
//                         '</div>'+
//                         '<ul class="list-group list-group-flush">'+
//                         '<li class="list-group-item">Host:</li>'+
//                         '</ul>'+
//                         '<div class="card-body">'+
//                         '<a href="" style="float:left;"></a>'+
//                         '<div class="hours" style="width:75px; height:75px; float:right;"></div>'+'</div>'+'</div>';
//     $(".userProjectsPending").prepend(newProject);

//     var newAttended =  '<div class="card" id="newAttendedCard" style="width: 60rem; margin-left:18%;">'+
//                         '<p id="imageProject" class="card-text text-center"></p>'+
//                         '<img src="" class="card-img-top" alt="">'+
//                         '<div class="card-body">'+
//                         '<p class="detailsAttended">Details:</p>'+
//                         '</div>'+
//                         '<ul class="list-group list-group-flush">'+
//                         '<li class="list-group-item">Host:</li>'+
//                         '</ul>'+
//                         '<div class="card-body">'+
//                         '<a href="" style="float:left;">link</a>'+
//                         '<div class="hours" style="width:75px; height:75px; float:right;"></div>'+'</div>'+'</div>';

//     $(".userProjectsAttended").prepend(newAttended);
// }
// });
