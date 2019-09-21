$(".openAttended").on("click", function() {
  $(".userHoursSpace").hide();
  $(".userProjectsAttended").show();
  $(".userProjectsPending").hide();
});
$(".openProjects").on("click", function() {
  $(".userHoursSpace").hide();
  $(".userProjectsAttended").hide();
  $(".userProjectsPending").show();
});
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
