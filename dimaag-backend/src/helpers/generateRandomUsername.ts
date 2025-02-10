const adjectives = [
    "Swift", "Brave", "Clever", "Mighty", "Jolly", "Witty", "Fierce", "Nimble",
    "Lively", "Bold", "Fearless", "Gentle", "Happy", "Eager", "Dynamic", "Bright",
    "Zesty", "Daring", "Cheerful", "Quick", "Energetic", "Cunning", "Vibrant", "Charming",
    "Adventurous", "Shiny", "Playful", "Crafty", "Brilliant", "Dazzling", "Electric", "Savvy",
    "Radiant", "Gallant", "Crisp", "Jubilant", "Sly", "Speedy", "Breezy", "Jumpy"
];

const nouns = [
    "Tiger", "Falcon", "Panda", "Wolf", "Phoenix", "Otter", "Cheetah", "Hawk",
    "Leopard", "Dragon", "Eagle", "Shark", "Lion", "Dolphin", "Panther", "Fox",
    "Rhino", "Griffin", "Bear", "Jaguar", "Lynx", "Bison", "Cobra", "Tornado",
    "Husky", "Raven", "Stallion", "Gazelle", "Octopus", "Thunder", "Vortex", "Scorpion",
    "Condor", "T-Rex", "Mustang", "Orca", "Mammoth", "Puma", "Kraken", "Gorilla"
];

export function generateRandomUsername() {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const number = Math.floor(1000 + Math.random() * 9000); // Four-digit random number
    return `${adj}${noun}${number}`;
}


