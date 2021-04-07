//press keys to play the drums!

//define selectors
const a = document.querySelector('.one')
const s = document.querySelector('.two')
const d = document.querySelector('.three')
const f = document.querySelector('.four')
const g = document.querySelector('.five')
const h = document.querySelector('.six')
const j = document.querySelector('.seven')
const k = document.querySelector('.eight')
const l = document.querySelector('.nine')

//create event listeners for key press and letting go
document.addEventListener("keydown", pressed)
document.addEventListener("keyup", unpressed)


//let go 
function unpressed(event) {
    switch (event.code) {
        case 'KeyA':
            {
                a.classList.toggle('red')
                break;
            }
        case 'KeyS':
            {
                s.classList.toggle('red')
                break;
            }
        case 'KeyD':
            {
                d.classList.toggle('red')
                break;
            }
        case 'KeyF':
            {
                f.classList.toggle('red')
                break;
            }
        case 'KeyG':
            {
                g.classList.toggle('red')
                break;
            }
        case 'KeyH':
            {
                h.classList.toggle('red')
                break;
            }
        case 'KeyJ':
            {
                j.classList.toggle('red')
                break;
            }
        case 'KeyK':
            {
                k.classList.toggle('red')
                break;
            }
        case 'KeyL':
            {
                l.classList.toggle('red')
                break;
            }
        default:
            { console.log(event.code) }
    }
}



//press key down
function pressed(event) {

    switch (event.code) {
        case 'KeyA':
            {
                let audio = new Audio('./drums/Bass-Drum-Hit-Level-6a-www.fesliyanstudios.com.mp3')
                a.classList.toggle('red')
                audio.play();
                break;
            }
        case 'KeyS':
            {
                let audio = new Audio('./drums/Snare-Drum-Hit-Level-4b-www.fesliyanstudios.com.mp3')
                s.classList.toggle('red')
                audio.play();
                break;
            }
        case 'KeyD':
            {
                let audio = new Audio('./drums/Splash-Cymbal-Hit-Short-www.fesliyanstudios.com.mp3')
                d.classList.toggle('red')
                audio.play();
                break;
            }
        case 'KeyF':
            {
                let audio = new Audio('./drums/Medium-Tom-Drum-Hit-Level-5A-www.fesliyanstudios.com.mp3')
                f.classList.toggle('red')
                audio.play();
                break;
            }
        case 'KeyG':
            {
                let audio = new Audio('./drums/Hi-Hat-Closed-Hit-C2-www.fesliyanstudios.com.mp3')
                g.classList.toggle('red')
                audio.play();
                break;
            }
        case 'KeyH':
            {
                let audio = new Audio('./drums/Floor-Tom-Drum-Hit-Level-7B-www.fesliyanstudios.com.mp3')
                h.classList.toggle('red')
                audio.play();
                break;
            }
        case 'KeyJ':
            {
                let audio = new Audio('./drums/Drum-Sticks-Hit-G-www.fesliyanstudios.com.mp3')
                j.classList.toggle('red')
                audio.play();
                break;
            }
        case 'KeyK':
            {
                let audio = new Audio('./drums/Crash-Cymbal-Hit-C-www.fesliyanstudios.com.mp3')
                k.classList.toggle('red')
                audio.play();
                break;
            }
        case 'KeyL':
            {
                let audio = new Audio('./drums/Small-Tom-Drum-Hit-Level-6A-www.fesliyanstudios.com.mp3')
                l.classList.toggle('red')
                audio.play();
                break;
            }
        default:
            { console.log(event.code) }
    }

}

