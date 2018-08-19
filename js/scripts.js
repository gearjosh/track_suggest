$(document).ready(function() {
  $("button#big-button").click(function(event) {
    event.preventDefault();
    $(".winner-block").hide();
    $(".tiebreaker-block").hide();

    var ruby = 0;
    var react = 0;
    var cSharp = 0;
    var companySize = $("#qCompanySize").val();
    var frontOrBack = $("#qFrontOrBack").val();
    var easyReliable = $("#qEasyReliable").val();
    var htmlJavascript = $("#qHtmlJavascript").val();
    var userBusiness = $("#qUserBusiness").val();
    var whichCompany = $("#qWhichCompany").val();
    var tRuby = $("select#qTiebreak").children("option#tRuby");
    var tCSharp = $("select#qTiebreak").children("option#tCSharp");
    var tReact = $("select#qTiebreak").children("option#tReact");


    if (companySize === "Big Company") {
      cSharp ++;
    } else if (companySize === "Small Company") {
      ruby ++;
    } else {
      react ++;
    }

    if (frontOrBack === "Frontend") {
      react ++;
    } else {
      ruby ++;
      cSharp ++;
    }

    if (easyReliable === "Ease of Use") {
      react ++;
      ruby ++;
    } else {
      cSharp ++;
    }

    if (htmlJavascript === "HTML") {
      cSharp ++;
      ruby ++;
    } else {
      react ++;
    }

    if (userBusiness === "Individual Users") {
      react ++;
    } else if (userBusiness === "Businesses") {
      cSharp ++;
    } else {
      ruby ++;
    }

    if (whichCompany === "Miscrosoft") {
      cSharp ++;
    } else if (whichCompany === "Netflix") {
      react ++;
    } else if (whichCompany === "Airbnb") {
      ruby ++;
    } else if (whichCompany === "Dropbox") {
      react ++;
    } else if (whichCompany === "Blizzard") {
      cSharp ++;
    } else if (whichCompany === "Soundcloud") {
      ruby ++;
    } else if (whichCompany === "Instagram") {
      react ++;
    } else {
      ruby ++;
    }

    tRuby.show();
    tCSharp.show();
    tReact.show();
    if ((cSharp < (react && ruby)) || (react < (cSharp && ruby)) || (ruby < (cSharp && react))) {

      if (ruby === react) {
        $(".tiebreaker-block").show();
        tCSharp.hide();
        $("button#tie-button").click(function(event) {
          event.preventDefault();
          var tiebreak = $("#qTiebreak").val();
          if (tiebreak === "Slow Runtime Speed") {
            ruby += 0.5;
          } else {
            react += 0.5;
          }
        });
      } else if (cSharp === react) {
        $(".tiebreaker-block").show();
        tRuby.hide();
        $("button#tie-button").click(function(event) {
          event.preventDefault();
          var tiebreak = $("#qTiebreak").val();
          if (tiebreak === "Hard to Learn") {
            cSharp += 0.5;
          } else {
            react += 0.5;
          }
        });
      } else if (ruby === cSharp) {
        $(".tiebreaker-block").show();
        tReact.hide();
        $("button#tie-button").click(function(event) {
          event.preventDefault();
          var tiebreak = $("#qTiebreak").val();
          if (tiebreak === "Slow Runtime Speed") {
            ruby += 0.5;
          } else {
            cSharp += 0.5;
          }
        });
      } else {
        $(".tiebreaker-block").hide();
      }
    }
    if ($(".tiebreaker-block").is(':visible')) {
      $("button#tie-button").click(function(event) {
        event.preventDefault();
        if (ruby > cSharp && ruby > react) {
          $("#winner-pic").attr("src", "img/ruby.png");
          $("#winner-link").attr("href", "https://www.ruby-lang.org/en/")
          $("#winner-name").html("Ruby");
          $("#winner-button").html("Ruby");
          $(".winner-block").show();
          $(".tiebreaker-block").hide();
        } else if (react > cSharp && react > ruby) {
          $("#winner-pic").attr("src", "img/react.png");
          $("#winner-link").attr("href", "https://reactjs.org/");
          $("#winner-name").html("React");
          $("#winner-button").html("React");
          $(".winner-block").show();
          $(".tiebreaker-block").hide();
        } else if (cSharp > react && cSharp > ruby) {
          $("#winner-pic").attr("src", "img/csharp.jpg");
          $("#winner-link").attr("href", "https://docs.microsoft.com/en-us/dotnet/csharp/");
          $("#winner-name").html("C#");
          $("#winner-button").html("C#");
          $(".winner-block").show();
          $(".tiebreaker-block").hide();
        }
      });
    } else {

      if (ruby > cSharp && ruby > react) {
        $("#winner-pic").attr("src", "img/ruby.png");
        $("#winner-link").attr("href", "https://www.ruby-lang.org/en/");
        $("#winner-name").html("Ruby");
        $("#winner-button").html("Ruby");
        $(".winner-block").show();
      } else if (react > cSharp && react > ruby) {
        $("#winner-pic").attr("src", "img/react.png");
        $("#winner-link").attr("href", "https://reactjs.org/");
        $("#winner-name").html("React");
        $("#winner-button").html("React");
        $(".winner-block").show();
      } else if (cSharp > react && cSharp > ruby) {
        $("#winner-pic").attr("src", "img/csharp.jpg");
        $("#winner-link").attr("href", "https://docs.microsoft.com/en-us/dotnet/csharp/");
        $("#winner-name").html("C#");
        $("#winner-button").html("C#");
        $(".winner-block").show();
      }
    }
  });
});
