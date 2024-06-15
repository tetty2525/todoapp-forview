// タスクの追加ボタンを押した時の処理
document.getElementById("addTaskBtn").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    const taskText = taskInput.value.trim();
    if (taskText != ""){
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
  
      // 削除ボタンを作成
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "delete";
      deleteButton.addEventListener("click", function() {
        taskList.removeChild(taskItem);
      });
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
      taskInput.value = "";
    }
  });
  
  //Enterキーを押した時の処理
  document.getElementById("taskInput").addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
      event.preventDefault();
      document.getElementById("addTaskBtn").click();
    }
  });