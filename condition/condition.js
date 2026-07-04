let signal = prompt("Enter signal color (red, yellow, green):");
let youcan;

signal = signal.toLowerCase();

if (signal === "red") {
    youcan = "stop";
}
else if (signal === "yellow") {
    youcan = "slow down";
}
else if (signal === "green") {
    youcan = "go";
}
else {
    youcan = "Invalid signal color";
}

console.log(youcan);