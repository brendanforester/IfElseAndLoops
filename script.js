var containerEle = document.body.querySelector(".container");
var animal = ["dog", "fish", "cat", "shark", "cat", "dog"];
var randomEle = document.querySelector(".random");

for (var i = 0; i < animal.length; i++) {
  var ele = document.createElement("div");
  if (animal[i] === "dog") {
    ele.innerHTML = "borf borf";
  } else if (animal[i] === "cat") {
    ele.innerHTML = "I am a cat.";
  } else {
    ele.innerHTML = "I am an animal.";
  }
  containerEle.appendChild(ele);
}

animal.sort(() => Math.random() - 0.5)

randomEle.addEventListener("click", function (){ 
  containerEle.innerHTML = "";
for (var i = 0; i < animal.length; i++) {
  var ele = document.createElement("div");
  if (animal[i] === "dog") {
    ele.innerHTML = "borf borf";
  } else if (animal[i] === "cat") {
    ele.innerHTML = "I am a cat.";
  } else {
    ele.innerHTML = "I am an animal.";
  }
  containerEle.appendChild(ele);
}; }
);