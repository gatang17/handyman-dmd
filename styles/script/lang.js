async function loadLanguage() {
    try {
    const response = await fetch('lang.json'); // tu archivo único
    const data = await response.json();
  
    const userLang = navigator.language.startsWith('en') ? 'en' : 'es';
    const texts = data[userLang];
  
    // Reemplazar textos
    document.getElementById("title").innerText = texts.title;
    document.getElementById("subtitle").innerText = texts.subtitle;
    document.getElementById("contactButton").innerText = texts.contactButton;
  
    document.getElementById("servicesSectionTitle").innerText = texts.servicesSectionTitle;
  
    document.getElementById("service1Title").innerText = texts.service1Title;
    document.getElementById("service1Description").innerText = texts.service1Description;
    document.getElementById("service1Button").innerText = texts.service1Button;
  
    document.getElementById("service2Title").innerText = texts.service2Title;
    document.getElementById("service2Description").innerText = texts.service2Description;
    document.getElementById("service2Button").innerText = texts.service2Button;
  
    document.getElementById("service3Title").innerText = texts.service3Title;
    document.getElementById("service3Description").innerText = texts.service3Description;
    document.getElementById("service3Button").innerText = texts.service3Button;
  
    document.getElementById("serviceIncludeTitle").innerText = texts.serviceIncludeTitle;
    document.getElementById("item1").innerText = texts.item1;
    document.getElementById("item2").innerText = texts.item2;
    document.getElementById("item3").innerText = texts.item3;
    document.getElementById("item4").innerText = texts.item4;
    document.getElementById("freeEstimate").innerText = texts.freeEstimate;
  
    document.getElementById("ctaTitle").innerText = texts.ctaTitle;
    document.getElementById("ctaText").innerText = texts.ctaText;
    document.getElementById("ctaButton").innerText = texts.ctaButton;
  }
  
 catch (error) {
    console.error("Error cargando JSON:", error);
  }
}

loadLanguage();