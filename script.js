document.addEventListener("DOMContentLoaded", () => {
    let batteryLevel = 100;
    let steps = 0;

    function updateTime() {
        const now = new Date();
        document.getElementById("time").textContent = now.toLocaleTimeString("lt-LT", { hour: "2-digit", minute: "2-digit" });
        document.getElementById("date").textContent = now.toISOString().split("T")[0];
    }

    function drainBattery() {
        if (batteryLevel > 0) {
            batteryLevel--;
            document.getElementById("battery").textContent = batteryLevel + "%";
        }
    }

    document.getElementById("steps").addEventListener("click", () => {
        if (steps < 10000) {
            steps++;
        } else {
            steps = 0;
        }
        document.getElementById("steps").textContent = `👣 ${steps}`;
    });

    function updateHeartRate() {
        document.getElementById("heartRate").textContent = Math.floor(Math.random() * 40) + 60;
    }

    function updateNotifications() {
        document.getElementById("notifications").textContent = Math.floor(Math.random() * 5);
    }

    setInterval(updateTime, 1000);
    setInterval(drainBattery, 60000);
    setInterval(updateHeartRate, 5000);
    setInterval(updateNotifications, 10000);

    updateTime();
});
