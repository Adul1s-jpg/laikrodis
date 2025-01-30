// Funkcija laikui atnaujinti
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

// Funkcija baterijos lygiui mažinti
let batteryLevel = 100;
function updateBattery() {
    if (batteryLevel > 0) {
        batteryLevel--;
        document.getElementById('battery').innerText = `${batteryLevel}%`;
    }
}

setInterval(updateBattery, 60000);

//Heartrate
function generateRandomHeartbeat() {
    // Atsitiktinis širdies ritmas nuo 60 iki 100 bpm
    return Math.floor(Math.random() * (100 - 60 + 1)) + 60;
}

function updateHeartbeat() {
    const heartbeatElement = document.getElementById("heartbeat-value");
    heartbeatElement.textContent = generateRandomHeartbeat();
}

// Atnaujinti širdies ritmą kas 3 sekundes
setInterval(updateHeartbeat, 3000);

// Žingsnių skaičiavimas su animacija
let steps = 3457;
const stepsElement = document.getElementById('steps');
stepsElement.addEventListener('click', function () {
    steps += Math.floor(Math.random() * 10) + 1;
    stepsElement.innerHTML = `🚶 <span>${steps}</span> / 6,000`;

    // Animacija
    stepsElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        stepsElement.style.transform = 'scale(1)';
    }, 200);
});

// Laiko atnaujinimas kas sekundę
setInterval(updateTime, 1000);
updateTime();
