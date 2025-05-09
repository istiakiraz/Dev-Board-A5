function displayTodayDate() {
    const today = new Date();

    const weekday = today.toLocaleString('en-BD', { weekday: 'short' });
    const month = today.toLocaleString('en-BD', { month: 'short' });
    const day = today.getDate();
    const year = today.getFullYear();


    document.getElementById("weekday").innerText = weekday;
    document.getElementById("month-day-year").innerHTML = `${month} ${day} ${year}`;
}

window.onload = displayTodayDate;


