(function () {
  // ui.js

  const loader = document.getElementById("loader");
  const errorCard = document.getElementById("errorCard");
  const errorTitle = document.getElementById("errorTitle");
  const errorMsg = document.getElementById("errorMsg");
  const results = document.getElementById("results");
  const profileCard = document.getElementById("profileCard");
  const repoGrid = document.getElementById("repoGrid");
  const repoCountBadge = document.getElementById("repoCountBadge");
  const repoEmpty = document.getElementById("repoEmpty");
  const searchError = document.getElementById("searchError");
  const langFilter = document.getElementById("langFilter");

  /*
   * Loader
   */
  function showLoader() {
    loader.hidden = false;
  }

  function hideLoader() {
    loader.hidden = true;
  }

  /*
   * Error
   */
  function showError(title, message) {
    errorCard.hidden = false;
    results.hidden = true;
    errorTitle.textContent = title;
    errorMsg.textContent = message;
  }

  function hideError() {
    errorCard.hidden = true;
  }

  /*
   * Results
   */
  function showResults() {
    results.hidden = false;
  }

  function hideResults() {
    results.hidden = true;
  }

  /*
   * Search Error
   */
  function showSearchError(message) {
    searchError.hidden = false;
    searchError.textContent = message;
  }

  function hideSearchError() {
    searchError.hidden = true;
  }
})();