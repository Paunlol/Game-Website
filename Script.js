let game_bx_1= document.getElementById('game-bx-1');
let game_bx_1_left_btn= document.getElementById('game-bx-1-left-btn');
let game_bx_1_right_btn= document.getElementById('game-bx-1-right-btn');

game_bx_1_left_btn.addEventListener('click',()=>{
    game_bx_1.scrollLeft -= 290;
});
game_bx_1_right_btn.addEventListener('click',()=>{
    game_bx_1.scrollLeft += 290;
});


let day_night= document.getElementById('day_night');
let day_night2= document.getElementById('day_night2');
day_night2.style.display = "none";
day_night.addEventListener('click',()=>{
    document.documentElement.style.setProperty('--color-1','rgb(184,184,184,.5)');
    document.documentElement.style.setProperty('--color-2','#000');
    document.documentElement.style.setProperty('--color-3','#fff');
    document.documentElement.style.setProperty('--color-4','rgb(0,0,0,.5)');
    document.documentElement.style.setProperty('--color-5','#6634a6');
    day_night.style.display = "none";
    day_night2.style.display = "unset";
});
day_night2.addEventListener('click',()=>{
    document.documentElement.style.setProperty('--color-1','#262b3f');
    document.documentElement.style.setProperty('--color-2','#ffffff');
    document.documentElement.style.setProperty('--color-3','#1e2337');
    document.documentElement.style.setProperty('--color-4','rgba(255,255,255,.5)');
    document.documentElement.style.setProperty('--color-5','greenyellow');
    day_night.style.display = "unset";
    day_night2.style.display = "none";
});

// Battery Navigator
var active_battery = document.getElementById('active_battery');
var battery_icon = document.getElementById('battery_icon');
var battery_level = document.getElementById('battery_level');
var audio1 = new Audio('audio/Charging.mp3');
// audio.play();

navigator.getBattery().then(battery =>{
    const battery_level_change = () =>{
        battery_level.innerText = (battery.level * 100) + "%";
    }
    setInterval(battery_level_change, 1000);
    battery_level_change();

    battery_icon.value = battery.charing;
    // alert(battery_icon.value);

    battert.addEventListener('chargingchange',() => {
        switch (battery.charging) {
            case true:
                battery_icon.classList.remove('bi-battery-half');
                battery_icon.classList.add('bi bi-battery-charging');
                active_battery.classList.add('active-battery');
                audio1.play();
                break;
        }
    })
})