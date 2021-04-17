var  btnTranslate = document.querySelector("#btn-translate");
var txtInput= document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");



var url = "https://api.funtranslations.com/translate/minion.json"
function gettranslated(text){
  return url + "?" +"text=" + text
}
function errorhandler(){
 alert("max limit reached")
}
function clickhandler(){
  var inputxt = txtInput.value
  fetch(gettranslated(inputxt))
  .then (response => response.json())
  .then  (json => {
    var translatedtext = json.contents.translated;
    outputDiv.innerText = translatedtext;
  })
  .catch(errorhandler)
};
btnTranslate.addEventListener("click", clickhandler)


