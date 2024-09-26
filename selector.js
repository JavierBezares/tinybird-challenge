export function createSelector(options) {
  let titleNode = document.getElementById("title");
  
  //Create and append select list
  var selectList = document.createElement("select");
  selectList.id = "mySelect";
  titleNode.parentNode.insertBefore(selectList, titleNode.nextSibling);
  
  selectList.addEventListener("change", updateValue);
  
  function updateValue(event) {
    console.log("evento", event.target.value);
  }
  
  //Create and append the options
  for (var i = 0; i < options.length; i++) {
      var option = document.createElement("option");
      option.value = options[i];
      option.text = options[i];
      selectList.appendChild(option);
  }
}