//Trigger del flash alla cattura
  const triggerFlash = () => {
    document.body.classList.add("flash-screen");
    setTimeout(() => {
      document.body.classList.remove("flash-screen");
    }, 300);
  };

  export default triggerFlash