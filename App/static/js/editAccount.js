document.addEventListener("DOMContentLoaded", function () {
  var ProfilePic = document.getElementById("ProfileImage");
  var inputFile = document.getElementById("image");

  inputFile.addEventListener("change", function () {
    if (inputFile.files.length > 0) {
      ProfilePic.src = URL.createObjectURL(inputFile.files[0]);
    }
  });
});
function ShowEdit(btn) {
  AllInput = document.querySelectorAll("input");
  AllInput.forEach((element) => {
    element.removeAttribute("disabled");
    element.removeAttribute("hidden");
  });
  document.getElementById("passwordSection").removeAttribute("hidden");
  btn.value = "Save";
  btn.removeAttribute("onclick");
  btn.type = "submit";
}
function MouseHoverOnInput(btn) {
  if (document.getElementById("image").disabled) {
    btn.style.cursor = "not-allowed";
  } else {
    btn.style.cursor = "pointer";
  }
}
