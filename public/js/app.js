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