function ProfanityCheck() {
  String.prototype.contains = function(str) { return this.indexOf(str) != -1; };

  var profanities = new Array("ass", "cunt", "pope", "shit", "fuck", "rape", "faggot", "retard");

  var containsProfanity = function(text){
      var returnVal = false;
      for (var i = 0; i < profanities.length; i++) {
          if(text.toLowerCase().contains(profanities[i].toLowerCase())){
              returnVal = true;
              break;
          }
      }
      return returnVal;
  }

  var myText = document.getElementById('text').value;

  if(containsProfanity(myText)){
      alert('That name contains profanity. Please try another username.');
  }
  else{
    if((document.getElementById('text').value && document.getElementById('email').value && document.getElementById('tel').value != '' ) {
      alert('Form submitted.');
    }
    else {
      alert('Please fill out the remaining fields');
    }
  }
}
