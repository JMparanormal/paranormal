// Nastav si svoje údaje tu:
const CONFIG = {
  whatsappPhone: "421900000000", // napr. 4219XXXXXXXX (bez +, bez medzier)
  whatsappText: "Dobrý deň, mám záujem o očistu priestoru. Prosím o dostupné termíny.",
};

function buildWhatsAppLink() {
  const text = encodeURIComponent(CONFIG.whatsappText);
  return `https://wa.me/${CONFIG.whatsappPhone}?text=${text}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const wa = document.querySelector("[data-whatsapp]");
  if (wa) wa.setAttribute("href", buildWhatsAppLink());

  const waFloat = document.querySelector(".wa-float");
  if (waFloat) waFloat.setAttribute("href", buildWhatsAppLink());

  // Vysvieti aktívnu položku menu
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".menu a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.style.color = "var(--text)";
  });
});
