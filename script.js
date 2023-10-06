window.addEventListener('scroll', function() {
  var homeSection = document.getElementById('home');
  var featuresSection = document.getElementById('features');
  var downloadsSection = document.getElementById('downloads');
  var contactSection = document.getElementById('contact');

  var homeSectionPosition = homeSection.getBoundingClientRect().top;
  var featuresSectionPosition = featuresSection.getBoundingClientRect().top;
  var downloadsSectionPosition = downloadsSection.getBoundingClientRect().top;
  var contactSectionPosition = contactSection.getBoundingClientRect().top;

  var windowHeight = window.innerHeight;

  if (homeSectionPosition < windowHeight) {
    homeSection.classList.add('fade-in');
  }

  if (featuresSectionPosition < windowHeight) {
    featuresSection.classList.add('fade-in');
  }

  if (downloadsSectionPosition < windowHeight) {
    downloadsSection.classList.add('fade-in');
  }

  if (contactSectionPosition < windowHeight) {
    contactSection.classList.add('fade-in');
  }
});
