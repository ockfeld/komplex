// Classic 90s Status Bar & Hit Counter Script
(function () {
  // Update status bar text if supported
  window.defaultStatus = "WELCOME TO THE OCKFELD METHOD // SOMATIC DEFIANCE ARCHIVE (1996-2026)";

  // Persistent local hit counter starting at 001155
  var counterEl = document.getElementById("hit-counter");
  if (counterEl) {
    var baseCount = 1155;
    try {
      var stored = localStorage.getItem("ockfeld_90s_hits_1155");
      var hits = stored ? parseInt(stored, 10) + 1 : baseCount;
      localStorage.setItem("ockfeld_90s_hits_1155", hits);
      counterEl.textContent = String(hits).padStart(6, "0");
    } catch (e) {
      counterEl.textContent = "001155";
    }
  }

  // Random essay jump for WebRing "Random" button
  var randomBtn = document.getElementById("webring-random");
  if (randomBtn) {
    randomBtn.addEventListener("click", function (e) {
      e.preventDefault();
      var totalPosts = 7;
      var pick = Math.floor(Math.random() * totalPosts) + 1;
      window.location.hash = "post-" + pick;
    });
  }
})();
