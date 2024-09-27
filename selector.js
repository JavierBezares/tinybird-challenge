export function createSelector(options) {
  let titleNode = document.getElementById("title");

  let selectList = document.createElement("select");
  selectList.id = "mySelect";
  titleNode.parentNode.insertBefore(selectList, titleNode.nextSibling);
  
  selectList.addEventListener("change", onSelectorChange);

  options.forEach(option => {
    let optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.text = option;
    selectList.appendChild(optionElement);
  });
}

function onSelectorChange(event) {
  console.log("evento", event.target.value);
}