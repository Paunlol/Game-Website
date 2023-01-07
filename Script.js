let game_bx_1= document.getElementById('game-bx-1')
let game_bx_1_left_btn= document.getElementById('game-bx-1-left-btn')
let game_bx_1_right_btn= document.getElementById('game-bx-1-right-btn')

game_bx_1_left_btn.addEventListener('click',()=>{
    game_bx_1.scrollLeft -= 290;
});
game_bx_1_right_btn.addEventListener('click',()=>{
    game_bx_1.scrollLeft += 290;
});