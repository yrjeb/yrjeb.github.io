const shareButton = document.getElementById("share-button");
const shareBlock = document.getElementById("share-block");
const shareBlockBox = shareBlock.querySelector(".share-block-box");
const triangle = shareBlock.querySelector(".share-block-arrow");
const article = document.getElementById("article");

shareButton.addEventListener("mouseenter", (event) => {
  event.stopPropagation();
  if (window.innerWidth < 650) {
    article.style.position = "relative";
    shareBlock.style.bottom = 0;
    shareBlock.style.right = 0;
    shareBlock.style.left = 0;
    shareBlock.style["flex-direction"] = "row";
    shareBlock.style.justifyContent = "start";
    shareBlock.style.width = "100%";
    shareBlockBox.style.width = "70%"
    shareBlockBox.style.height = "32px";
    shareBlock.style["background-color"] = "hsl(217, 19%, 35%)";
    triangle.style.display = "none";
    shareButton.style.position = "absolute";
    shareButton.style.bottom = "1rem";
    shareButton.style.right = "1rem";
    shareButton.style.zIndex = "1000";
  } else {
    // Button Position Relative to the View Port
    const rect = event.target.getBoundingClientRect();
    shareBlock.style.top = `${rect.top - 75}px`;
    shareBlock.style.left = `${rect.left - 100}px`;
  }

  shareBlock.style.visibility = "visible";
});

shareButton.addEventListener("mouseleave", (event) => {
  event.stopPropagation();
  shareBlock.style.visibility = "hidden";
  shareButton.style.position = "static";
  shareBlockBox.style.width = "200px"
  shareBlockBox.style.height = "auto";
  shareBlockBox["background-color"] = "white";
  triangle.style.display = "block";
});
