$(".openAttended").on("click", function () {
    $(".userHoursSpace").hide();
    $(".userProjectsAttended").show();
    $(".userProjectsPending").hide();
});

$(".openProjects").on("click", function () {
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
//     var projectList = data.user.project;
//     for (var i =0; i < projectList.length; i++){
//         var newProject = $("<div>").attr("class", "projectArea");

//         $(".userProjectsPending").prepend(newProject);

//         var newAttended = $("<div>").attr("class", "attendedArea");

//         $(".userProjectsAttended").prepend(newAttended);
//     }
// });