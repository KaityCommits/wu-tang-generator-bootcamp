document.querySelector('button').addEventListener('click', generateName)

function generateName(){
        let vibe = document.querySelector('input[name="vibe"]:checked')?.value
        let power = document.querySelector('input[name="superpower"]:checked')?.value
        let animal = document.querySelector('input[name="animal"]:checked')?.value
        let rap = document.querySelector('input[name="rap"]:checked')?.value
        let move = document.querySelector('input[name="move"]:checked')?.value
    
        if (!vibe || !power || !animal || !rap || !move) {
            document.getElementById("displayName").textContent = "Answer all questions."
            return
        }
    
        let firstPart = {
            chill: "Solo",
            spontaneous: "Wild",
            mysterious: "Ghost"
        }
    
        let powerPart = {
            mindreader: "Mystic",
            teleportation: "Shadow",
            invisibility: "Hidden"
        }
    
        let animalPart = {
            bunny: "Rabbit",
            tiger: "Tiger",
            bear: "Bear"
        }
    
        let rapStyle = {
            storyteller: "the Prophet",
            freestyle: "the Rhyme Slayer",
            battle: "the Blade"
        }
    
        let moveStyle = {
            "moves in silence": "of the Hush",
            "makes an entrance": "of the Loud",
            "stays out the way": "of the Lonely"
        }
    
        let wuTangName = firstPart[vibe] + " " + powerPart[power] + " " + animalPart[animal] + " " + rapStyle[rap] + " " + moveStyle[move];

        document.getElementById("displayName").textContent = "Your Wu-Tang name is: " + wuTangName;
    }