$(document).ready(function() {
  $("button#big-button").click(function(event) {
    event.preventDefault();
//backend logic begins
//variable definition
    var ruby = 0
    var react = 0
    var cSharp = 0

    var question1 = $("#qCompanySize").val();
    var question2 = $("#qFrontOrBack").val();
    var question3 = $("#qEasyReliable").val();
    var question4 = $("#qHtmlJavascript").val();
    var question5 = $("#qUserBusiness").val();
    var question6 = $("#qWhichCompany").val();
//q1
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
//q2
    if (question2 === "Frontend") {
      react ++
    }
    else {
      ruby ++
      cSharp ++
    }
    console.log(ruby, react, cSharp)
//q3
    if (question3 === "Ease of Use") {
      react ++
      ruby ++
    }
    else {
      cSharp ++
    }
    console.log(ruby, react, cSharp)
//q4
    if (question4 === "HTML") {
      cSharp ++
      ruby ++
    }
    else {
      react ++
    }
    console.log(ruby, react, cSharp)
//q5
    if (question5 === "Inidividual Users") {
      react ++
    }
    else if (question5 === "Businesses") {
      cSharp ++
    }
    else {
      ruby ++
    }
    console.log(ruby, react, cSharp)
// q6
    if (question6 === "Microsoft") {
      cSharp ++
    }
    else if (question6 === "Netflix") {
      react ++
    }
    else if (question6 === "Airbnb") {
      ruby ++
    }
    else if (question6 === "Dropbox") {
      react ++
    }
    else if (question6 === "Blizzard") {
      cSharp ++
    }
    else if (question6 === "Soundcloud") {
      ruby ++
    }
    else if (question6 === "Instagram") {
      react ++
    }
    else {
      ruby ++
    }

    console.log(ruby, react, cSharp)
//result return
    if (ruby === react || cSharp === react || ruby === react) { //tiebreaker

    }
    else if (ruby > cSharp && ruby > react) { //ruby wins

    }
    else if (react >cSharp && react > ruby) { //react wins

    }
    else { //cSharp wins

    }

  });
});
