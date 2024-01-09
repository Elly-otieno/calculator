const content = document.getElementById(`content`);
const theme = document.querySelector(`.theme`);
let isDarkMode = false;

theme.addEventListener(`click`, ()=>{
    isDarkMode = !isDarkMode;
    content.style.backgroundColor = isDarkMode ? 'grey': '#145d8e';
})

const displayOnInput= (value)=>{
    let display = document.getElementById(`display`);
    display.value += value;
};

const calculate = ()=>{
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = `Error`;
    }
}
const deleteCharacter = ()=>{
    display.value = display.value.slice(0, -1);
}
const clearAll = ()=>{
    display.value = ``;
}