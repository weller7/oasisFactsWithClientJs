document.querySelector('button').addEventListener('click', getRandom)


function getRandom() {

  fetch("https://oasis-api-snowy.vercel.app/api")
  .then (res => res.json())
  .then (data => {
    console.log(data)

    document.querySelector("#fact").innerText = data.fact
  })

  .catch (err => {
  console.log(`error ${err}`)
  })

}



// document.querySelector('button').addEventListener('click', apiRequest)

// async function apiRequest(){
//     const rapperName = document.querySelector('input').value
//     try{
//         const response = await fetch(`https://simple-rapper-api.herokuapp.com/api/${rapperName}`)
//         const data = await response.json()

//         console.log(data)
//         document.querySelector('h2').innerText = data.birthName
//     }catch(error){
//         console.log(error)
//     }
// }