function displayTalk(id)
{
  var talk = $(".talkAbstract#" + id);
  talk.show();

  var time = 200;
  $(".blackout").fadeIn(time);
  $(".talksContent").slideDown(time);
}

function hideAllConferenceElements()
{
  $(".blackout").hide();
  $(".talksContent").hide();
  $(".talkAbstract").hide();
}

$(document).ready(function() {
  hideAllConferenceElements();

  $(".talkLink").click(function() {
    displayTalk(this.id);
  });

  $(".blackout").click(function(event) {
    if($(event.target).hasClass("blackout"))
      hideAllConferenceElements();
  });
});
