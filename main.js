
// function playSound(e) { //function to throw the event 
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
    
//     // selcet the first unique attribute matching with css selector and related to audio tag
    
//     const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
//         if(!audio) return; // stops the function from running all together

//     audio.currentTime=0; 

//     //rewind to the start of the sound when you press over and over without waiting till the end of the sound

//     audio.play();
//     key.classList.add("playing");
// }

// //We could do setTimeout(() => { }, timeout); instead of below mentioned example but what if css will be changed or js file...
// // time set will be changed. See another option below

// function removeTransition(e){
//     if (e.propertyName !== 'transform') return; //skip it if its not transform
//     this.classList.remove("playing");
// }

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// window.addEventListener('keydown', playSound);