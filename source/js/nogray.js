(function() {
  document.querySelectorAll('style').forEach($style => {
    if (/grayscale\s*\(\s*100%\s*\)/.test($style.innerHTML)) {
        $style.remove();
    }
  })
})();
