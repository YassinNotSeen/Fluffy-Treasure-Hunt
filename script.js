// script.js - Example for future local storage use
document.addEventListener('DOMContentLoaded', () => {
    const currentStage = localStorage.getItem('currentStage') || 1;
    console.log(`You are on stage ${currentStage}`);
});
