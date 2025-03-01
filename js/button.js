// theme button
document.getElementById('theme-btn').addEventListener('click', function(event){
    event.preventDefault();

    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;

})

// clear button
document.getElementById('Clear-btn').addEventListener('click', function(event){
    event.preventDefault();

    document.getElementById('history').innerHTML = "";
    
})

// discover button

document.getElementById('discover').addEventListener('click', function(event){
    event.preventDefault();

    window.location.href="./discover.html"

})



