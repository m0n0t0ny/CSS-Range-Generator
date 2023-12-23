document.addEventListener("DOMContentLoaded", function () {
  const rangeInput = document.getElementById("range-1");

  // width
  const customWidth = document.getElementById("custom-width");

  customWidth.addEventListener("input", function () {
    const widthValue = customWidth.value;
    console.log("Width Value: ", widthValue);

    rangeInput.style.width = widthValue + "px";
  });

  // height
  const customHeight = document.getElementById("custom-height");

  customHeight.addEventListener("input", function () {
    const heightValue = customHeight.value;
    console.log("Height Value: ", heightValue);

    rangeInput.style.height = heightValue + "px";
  });

  // enable background-color

  const enableBgColorCheckbox = document.getElementById("enable-bg-color");
  const customBgColor = document.getElementById("custom-bg-color");

  enableBgColorCheckbox.addEventListener("change", function () {
    customBgColor.toggleAttribute("disabled");
    rangeInput.classList.toggle("enabled-bg-color");
  });

  // background-color
  customBgColor.addEventListener("input", function () {
    const bgColorValue = customBgColor.value;

    rangeInput.style.backgroundColor = bgColorValue;
  });
});
