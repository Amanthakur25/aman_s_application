function googleTranslateElementInit() {
  if (!window.__GOOGLE_TRANSLATION_CONFIG__) {
    return;
  }
  new google.translate.TranslateElement({
    pageLanguage: window.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage,
    autoDisplay: false // Prevent automatic display of the banner
  }, 'google_translate_element');

  // Hide the Google Translate bar if it appears
  setTimeout(function() {
    var banner = document.querySelector('.goog-te-banner-frame');
    if (banner) {
      banner.style.display = 'none';
    }
    
    // Also hide the body top padding that Google Translate adds
    document.body.style.top = '0px';
    
    // Hide any other Google Translate elements
    var frames = document.querySelectorAll('.goog-te-banner-frame, .goog-te-menu-frame');
    frames.forEach(function(frame) {
      frame.style.display = 'none';
    });
  }, 100);
  
  // Additional timeout to ensure elements are hidden
  setTimeout(function() {
    document.body.style.top = '0px';
  }, 500);
}