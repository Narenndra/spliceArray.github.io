let arr = [1, 7, 3, 1, 0, 20, 77];
let startInputEle = document.getElementById("startIndexInput");
let deleteInputEle = document.getElementById("deleteCountInput");

let itemToAddEle = document.getElementById("itemToAddInput");

let spliceBtnEle = document.getElementById("spliceBtn");
let updatedArrayEle = document.getElementById("updatedArray");

spliceBtnEle.onclick = function() {
    let startIndex = startInputEle.value;
    let deleteCount = deleteInputEle.value;
    let addItem = itemToAddEle.value;

    arr.splice(startIndex, deleteCount, addItem);

    localStorage.setItem("list", JSON.stringify(arr));
    let items = JSON.parse(localStorage.getItem('list'));

    updatedArrayEle.textContent = items;

}