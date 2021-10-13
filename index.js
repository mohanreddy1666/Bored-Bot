const btn = document.getElementById('btn')

btn.addEventListener('click', function(){
    fetch('https://www.boredapi.com/api/activity')
    .then(Response => Response.json())
    .then(data => {
        console.log(data)
        document.getElementById("activity").textContent = data.activity
        document.getElementById("title").textContent = "🦾 HappyBot🦿"
        document.body.classList.add("fun")
    })
})