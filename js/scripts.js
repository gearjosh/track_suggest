$(document).ready(function() {
  $("button#big-button").click(function(event) {
    event.preventDefault();
    var ruby = 0
    var react = 0
    var cSharp = 0

    var question1 = $("#qCompanySize").val();
    var question2 = $("#qFrontOrBack").val();
    var question3 = $("#qEasyReliable").val();
    var question4 = $("#qHtmlJavascript").val();
    var question5 = $("#qUserBusiness").val();
    var question6 = $("#qWhichCompany").val();

    if (question1 === "Big Company") {
      cSharp ++
    }
    else if (question1 === "Small Company") {
      ruby ++
    }
    else {
      react ++
    }
    console.log(ruby, react, cSharp)
  });
});
