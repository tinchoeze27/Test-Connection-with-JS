const checkOnlineStatus = async () => {
    try {
      const online = await fetch("/img/icon.png"); //Solicita este archivo
      return online.status >= 200 && online.status < 300; //Si el navegador devuelve estos valores entre 200 a 299
    } catch (err) {
      return false; 
    }
  };
  
  setInterval(async () => {
    const result = await checkOnlineStatus();
    const statusDisplay = document.getElementById("status");
    statusDisplay.textContent = result ? "Online" : "Offline";
  }, 3000); // Tiempo de intervalo a verificar en segundos
  
  // forgot to include async load event listener in the video! 
  window.addEventListener("load", async (event) => {
    const statusDisplay = document.getElementById("status");
    statusDisplay.textContent = (await checkOnlineStatus())
      ? "Online"
      : "Offline";
  });