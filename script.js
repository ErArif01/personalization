document.addEventListener('DOMContentLoaded', function () {
  personalizeContent();
});

function personalizeContent() {
  var userPreferences = getUserPreferences();

// Example: Personalize greeting based on user preferences
if (userPreferences && userPreferences.language === 'fr') {
  document.getElementById('personalized-greeting').innerText = 'Bonjour,Utilisateur!';
}

// Example: Dynamically update content based on user preferences
if (userPreferences && userPreferences.theme === 'dark') {
    document.body.classList.add('dark-mode');
}
}

function getUserPreferences() {
  var storedPreferences = localStorage.getItem'userPreferences');
  return storedPreferences ? JSON.parse(storedPreferences): null;
}

function savePreferences() {
  var language = document.getElementById('language').value;
  var theme = document.getElementById('theme').value;

  var userPreferences = {
    language,
    theme: theme,
  };
  
  localStorage.setItem('userPreferences', JSON,stringify(userPreferences));
  // Update content based on new preferences
personalizeContent();
}
