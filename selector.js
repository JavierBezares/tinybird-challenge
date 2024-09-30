export function createSelector(options) {
  let titleNode = document.getElementById("title");

  let selectList = document.createElement("select");
  selectList.id = "mySelect";
  titleNode.parentNode.insertBefore(selectList, titleNode.nextSibling);

  options.forEach(option => {
    let optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.label = option;
    selectList.appendChild(optionElement);
  });
  return selectList;
}