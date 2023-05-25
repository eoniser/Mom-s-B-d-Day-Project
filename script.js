const poemLines = [
    "Line 1 of the poem",
    "Line 2 of the poem",
    "Line 3 of the poem",
    "Line 4 of the poem"
  ];
  
  const poemElement = document.getElementById("poem");
  
  let currentIndex = 0;
  
  function cyclePoem() {
    poemElement.textContent = poemLines[currentIndex];
    currentIndex = (currentIndex + 1) % poemLines.length;
  }
  
  setInterval(cyclePoem, 5000);