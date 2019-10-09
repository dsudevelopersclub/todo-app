(function () {
  function addTask() {
    var li = document.createElement("li");
    var todoInput = document.getElementById("todoInput").value || "Default Value";
    li.appendChild(document.createTextNode(todoInput));
    document.getElementById("todoList").appendChild(li);
    document.getElementById("todoInput").value = "";
  };

  document.getElementById("todoList").addEventListener("click", function (event) {
    if ("LI" === event.target.tagName) {
      event.target.parentNode.removeChild(event.target);
    }
  });

  document.getElementById("todoInput").addEventListener('keyup', function (event) {
    // the key code for the enter key is 13
    if (13 === event.keyCode) {
      addTask();
    }
  });

  document.getElementById("todoSubmit").addEventListener("click", function () {
    addTask();
  });
})();