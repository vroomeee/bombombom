function updateTimePassed() {
  const specificDate = new Date(2024, 9, 1, 0, 2, 0); // October 1, 2024, 00:02:00 AM

  setInterval(() => {
    const currentTime = new Date();
    const timeDifference = Math.floor((currentTime - specificDate) / 1000);

    const days = Math.floor(timeDifference / (3600 * 24));
    const hours = Math.floor((timeDifference % (3600 * 24)) / 3600);
    const minutes = Math.floor((timeDifference % 3600) / 60);
    const seconds = timeDifference % 60;

    document.getElementById(
      "timePassed"
    ).textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }, 1000);
}

function fadeOutInitialScreen() {
  const initialScreen = document.getElementById("initialScreen");
  const timePassedScreen = document.getElementById("timePassedScreen");

  initialScreen.classList.add("fade-out");

  setTimeout(() => {
    initialScreen.style.display = "none";
    timePassedScreen.classList.add("fade-in");
  }, 550);
}

document.body.addEventListener("click", fadeOutInitialScreen);

window.onload = updateTimePassed;
