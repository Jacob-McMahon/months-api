document.querySelector('button').addEventListener('click', addParam)

async function addParam() {
    const userChoice = document.querySelector('input').value
    console.log(userChoice)
     document.querySelector('h2').innerText = userChoice
}