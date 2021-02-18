// Event Bubbling & Capturing


//As a developer I want...

//a form to appear in place of the 'Add Emoji' button when the 'Add Emoji' button is clicked
//an emoji can be entered into the input, submitted, and added to the "Emoji Bank"
//an alert saying "Emoji Submitted!" whenever an emoji is submitted
//the form turns back into the 'Add Emoji' button once an emoji has been successfully submitted
//an emoji I click on turns into '🤪'

// select the Add Emoji button 

const addEmojiArea = document.getElementById("add-emoji-area")

const emojiButton = document.getElementById("add-button")

const emojiBank = document.getElementById("emoji-bank")

emojiButton.addEventListener("click", handleClickEvent)


// control flow incase you want to do that

    // function handleEvent(e) {
    //     if (e.target.class === "emoji") {
    //         handleEmoji()
    //     } elseif(e.target.id === "emoji-area"){
    //         handleEmojiArea()
    //     }
    //     }
// }


// another way to write this function for event listeners 

// emojiButton.addEventListener("click", (event) => {

//     console.log("Hi")
// })

function handleClickEvent(e) {
    // e.target.remove()
    addEmojiArea.innerHTML = `
        <form id="emoji-form">
           <input name='emojiname' id='emoji-name' /> 
           <input id="emoji-button" type="submit" value="Create Emoji" />  
        </form>
    `
    // let form = document.createElement("form")
    // let input1 = document.createElement("input")
    // let submit = document.createElement("input")


    // input1.name = "emojiname"
    // input1.id =  "emoji-name"


    // submit.type = "submit"
    // submit.id = "emoji-button"
    // submit.value = "Create Emoji"

    // form.append(input1, submit)
    
    const form = document.getElementById("emoji-form")

    form.addEventListener("submit", handleSubmit)


}

function handleSubmit(e) {
    e.preventDefault()
    let emojiValue = e.target[0].value
    emojiBank.innerHTML += `
        <li class="emoji">${emojiValue}</li>
    `
    addEmojiArea.innerHTML = `<button id="add-button">Add Emoji</button>`
    const emojiButton = document.getElementById("add-button")
    emojiButton.addEventListener("click", handleClickEvent)
}


