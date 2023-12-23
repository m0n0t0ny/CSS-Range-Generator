document.addEventListener("DOMContentLoaded", () => {
  const rangeInput = document.getElementById("range-1");

  // width
  const customWidth = document.getElementById("custom-width");

  customWidth.addEventListener("input", () => {
    const widthValue = customWidth.value;
    console.log("Width Value: ", widthValue);

    rangeInput.style.width = widthValue + "px";
  });

  // height
  const customHeight = document.getElementById("custom-height");

  customHeight.addEventListener("input", () => {
    const heightValue = customHeight.value;
    console.log("Height Value: ", heightValue);

    rangeInput.style.height = heightValue + "px";
  });

  // enable background-color
  const enableBgColorCheckbox = document.getElementById("enable-bg-color");
  const customBgColor = document.getElementById("custom-bg-color");

  enableBgColorCheckbox.addEventListener("change", () => {
    customBgColor.toggleAttribute("disabled");
    rangeInput.classList.toggle("enabled-bg-color");
  });

  // background-color
  customBgColor.addEventListener("input", () => {
    const bgColorValue = customBgColor.value;
    rangeInput.style.backgroundColor = bgColorValue;
  });

  // border-width
  const borderWidthInput = document.getElementById("border-width");

  borderWidthInput.addEventListener("input", () => {
    const borderWidthValue = borderWidthInput.value;
    rangeInput.style.border = borderWidthValue + "px solid #ff0000";
  });

  // border-style
  const borderStyleSelect = document.getElementById("border-style");

  borderStyleSelect.addEventListener("change", () => {
    const borderStyleValue = borderStyleSelect.value;
    rangeInput.style.borderStyle = getBorderStyle(borderStyleValue);
  });

  function getBorderStyle(value) {
    switch (value) {
      case "1":
        return "dotted";
      case "2":
        return "dashed";
      case "3":
        return "double";
      case "4":
        return "groove";
      case "5":
        return "ridge";
      case "6":
        return "inset";
      case "7":
        return "outset";
      case "8":
        return "none";
      case "9":
        return "hidden";
      default:
        return "solid";
    }
  }

  // custom-border-color
  const customBorderColorInput = document.getElementById("custom-border-color");

  customBorderColorInput.addEventListener("input", () => {
    const borderColorValue = customBorderColorInput.value;
    rangeInput.style.borderColor = borderColorValue;
  });
});
