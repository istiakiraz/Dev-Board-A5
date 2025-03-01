function checkTaskCompletion() {
    const taskNumber = document.getElementById('task-number').innerText;
    const convertTaskNumber = parseInt(taskNumber);
  
    if (convertTaskNumber === 0) {
      alert('Congrates!!! You have completed all the current task');
    }
  }

// box-01
document.getElementById('sub-box-01').addEventListener('click', function (event) {
    event.preventDefault();

    const taskNumber = document.getElementById('task-number').innerText;
    const convertTaskNumber = parseInt(taskNumber);

    const totalTask = document.getElementById('total-task').innerText;
    const convertTotalTask = parseInt(totalTask);

    let total = convertTotalTask + 1;
    document.getElementById('total-task').innerText = total

    if (convertTaskNumber >= 1) {
        let min = convertTaskNumber - 1;
        document.getElementById("task-number").innerText = min;
        alert('Board Updated Successfully')
    }

    // history added 
    const today = new Date();
    const save = document.getElementById('history')
    const addHistory = document.createElement('p');
    addHistory.classList.add("bg-[#F4F7FF]", "m-4" ,"p-4", "text-gray-500", "rounded-xl")
    addHistory.innerText = `You have Complete The Task Fix Mobile Button Issue at ${today.toLocaleString('en-BD', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}`;
    save.appendChild(addHistory)

    document.getElementById('sub-box-01').style.backgroundColor = 'gray'; 
    document.getElementById('sub-box-01').removeEventListener('click', arguments.callee);

    checkTaskCompletion();

})

// box-02
document.getElementById('sub-box-02').addEventListener('click', function (event) {
    event.preventDefault();

    const taskNumber = document.getElementById('task-number').innerText;
    const convertTaskNumber = parseInt(taskNumber);

    const totalTask = document.getElementById('total-task').innerText;
    const convertTotalTask = parseInt(totalTask);

    let total = convertTotalTask + 1;
    document.getElementById('total-task').innerText = total

   if(convertTaskNumber >= 1){
    let min = convertTaskNumber - 1;
    document.getElementById("task-number").innerText = min;
    alert('Board Updated Successfully')
   }

   // history added 
   const today = new Date();
   const save = document.getElementById('history')
   const addHistory = document.createElement('p');
   addHistory.classList.add("bg-[#F4F7FF]", "m-4" ,"p-4", "text-gray-500", "rounded-xl")
   addHistory.innerText = `You have Complete The Task Add Dark Mode at ${today.toLocaleString('en-BD', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}`;
   save.appendChild(addHistory)

   this.style.backgroundColor = "gray";
   this.removeEventListener('click', arguments.callee)

   checkTaskCompletion();

})

// box -03
document.getElementById('sub-box-03').addEventListener('click', function (event) {
    event.preventDefault();

    const taskNumber = document.getElementById('task-number').innerText;
    const convertTaskNumber = parseInt(taskNumber);

    const totalTask = document.getElementById('total-task').innerText;
    const convertTotalTask = parseInt(totalTask);

    let total = convertTotalTask + 1;
    document.getElementById('total-task').innerText = total

   if(convertTaskNumber >= 1){
    let min = convertTaskNumber - 1;
    document.getElementById("task-number").innerText = min;
    alert('Board Updated Successfully')
   }

   // history added 
   const today = new Date();
   const save = document.getElementById('history')
   const addHistory = document.createElement('p');
   addHistory.classList.add("bg-[#F4F7FF]", "m-4" ,"p-4", "text-gray-500", "rounded-xl")
   addHistory.innerText = `You have Complete The Task Optimize Home page at ${today.toLocaleString('en-BD', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}`;
   save.appendChild(addHistory)

   this.style.backgroundColor = "gray";
   this.removeEventListener('click', arguments.callee)

   checkTaskCompletion();

})

// box-04
document.getElementById('sub-box-04').addEventListener('click', function (event) {
    event.preventDefault();

    const taskNumber = document.getElementById('task-number').innerText;
    const convertTaskNumber = parseInt(taskNumber);

    const totalTask = document.getElementById('total-task').innerText;
    const convertTotalTask = parseInt(totalTask);

    let total = convertTotalTask + 1;
    document.getElementById('total-task').innerText = total

   if(convertTaskNumber >= 1){
    let min = convertTaskNumber - 1;
    document.getElementById("task-number").innerText = min;
    alert('Board Updated Successfully')
   }

   // history added 
   const today = new Date();
   const save = document.getElementById('history')
   const addHistory = document.createElement('p');
   addHistory.classList.add("bg-[#F4F7FF]", "m-4" ,"p-4", "text-gray-500", "rounded-xl")
   addHistory.innerText = `You have Complete The Task Add new emoji 🤲 at ${today.toLocaleString('en-BD', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}`;
   save.appendChild(addHistory)

   this.style.backgroundColor = "gray";
   this.removeEventListener('click', arguments.callee)

   checkTaskCompletion();

})
// box-05
document.getElementById('sub-box-05').addEventListener('click', function (event) {
    event.preventDefault();

    const taskNumber = document.getElementById('task-number').innerText;
    const convertTaskNumber = parseInt(taskNumber);

    const totalTask = document.getElementById('total-task').innerText;
    const convertTotalTask = parseInt(totalTask);

    let total = convertTotalTask + 1;
    document.getElementById('total-task').innerText = total

   if(convertTaskNumber >= 1){
    let min = convertTaskNumber - 1;
    document.getElementById("task-number").innerText = min;
    alert('Board Updated Successfully')
   }

   // history added 
   const today = new Date();
   const save = document.getElementById('history')
   const addHistory = document.createElement('p');
   addHistory.classList.add("bg-[#F4F7FF]", "m-4" ,"p-4", "text-gray-500", "rounded-xl")
   addHistory.innerText = `You have Complete The Task Integrate OpenAI API at ${today.toLocaleString('en-BD', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}`;
   save.appendChild(addHistory)


   this.style.backgroundColor = "gray";
   this.removeEventListener('click', arguments.callee)

   checkTaskCompletion();

   

})
// box-06
document.getElementById('sub-box-06').addEventListener('click', function (event) {
    event.preventDefault();

    const taskNumber = document.getElementById('task-number').innerText;
    const convertTaskNumber = parseInt(taskNumber);

    const totalTask = document.getElementById('total-task').innerText;
    const convertTotalTask = parseInt(totalTask);

    let total = convertTotalTask + 1;
    document.getElementById('total-task').innerText = total

   if(convertTaskNumber >= 1){
    let min = convertTaskNumber - 1;
    document.getElementById("task-number").innerText = min;
    alert('Board Updated Successfully')
   }

   // history added 
   const today = new Date();
   const save = document.getElementById('history')
   const addHistory = document.createElement('p');
   addHistory.classList.add("bg-[#F4F7FF]", "m-4" ,"p-4", "text-gray-500", "rounded-xl")
   addHistory.innerText = `You have Complete The Task Improve Job searching at ${today.toLocaleString('en-BD', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}`;
   save.appendChild(addHistory)


   this.style.backgroundColor = "gray";
   this.removeEventListener('click', arguments.callee)

   checkTaskCompletion();



})




