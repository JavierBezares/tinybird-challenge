export function createSelector(options) {
  const titleNode = document.getElementById("title");

  const selectList = document.createElement("select");
  selectList.id = "mySelect";
  titleNode.parentNode.insertBefore(selectList, titleNode.nextSibling);

  options.forEach(option => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.label = option;
    selectList.appendChild(optionElement);
  });
  return selectList;
}