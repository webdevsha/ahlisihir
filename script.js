// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Get all existing li elements
const lis = document.querySelectorAll('li');

// Give each li element an onclick attribute
lis.forEach(li => {
  li.onclick = function() {
    // Do something with the li element here
    const text = li.textContent;

    // Create a temporary textarea element
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();

    // Copy the selected text to the clipboard
    document.execCommand("copy");
    swal('Text has been copied :)');

    // Remove the textarea element
    document.body.removeChild(textarea);
  };
});


// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var result = document.getElementById("AI_balas").textContent;
  var input = document.getElementById("AI_input").value;
  var inputValue = "Product Name:" + input + "-> Your Captions: " + result;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("AI_balas").textContent = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}