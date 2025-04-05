document.querySelector('#displayName').addEventListener('click', generateName)

function generateName(){
    document.getElementById("generate").addEventListener("click", function () {
        // Get all the selected values
        let vibe = document.querySelector('input[name="vibe"]:checked')?.value
        let power = document.querySelector('input[name="superpower"]:checked')?.value
        let animal = document.querySelector('input[name="animal"]:checked')?.value
        let rap = document.querySelector('input[name="rap"]:checked')?.value
        let move = document.querySelector('input[name="move"]:checked')?.value
    
        // Check if all fields are selected
        if (!vibe || !power || !animal || !rap || !move) {
            document.getElementById("#displayName").textContent = "Answer all the questions first, warrior 🥷"
            return
        }
    
        let firstPart = {
            Chill: "Silent",
            Spontaneous: "Wild",
            Mysterious: "Ghost"
        }
    
        let powerPart = {
            Mindreader: "Mystic",
            Teleportation: "Shadow",
            Invisibility: "Hidden"
        }
    
        let animalPart = {
            Bunny: "Rabbit",
            Tiger: "Tiger",
            Bear: "Bear"
        }
    
        let rapStyle = {
            Storyteller: "the Prophet",
            Freestyle: "the Rhyme Slayer",
            Battle: "the Blade"
        }
    
        let moveStyle = {
            "Moves in Silence": "of the East",
            "Makes an Entrance": "the Thunder",
            "Stays Out the Way": "the Lone Wolf"
        }
    
        // Combine the parts into a name
        let wuTangName = firstPart[vibe] + " " + powerPart[power] + " " + animalPart[animal] + " " + rapStyle[rap] + " " + moveStyle[move];
    
        // Display the result
        document.getElementById("#displayName").textContent = "Your Wu-Tang name is: " + wuTangName;
    })
    
}