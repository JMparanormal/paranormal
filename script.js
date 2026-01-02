// Uprav pred nahratím:
const CONFIG = {
  whatsappPhone: "421917717171", // bez +, bez medzier
  whatsappText:
    "Dobrý deň, prosím o pomoc s duchovnou očistou priestoru. Mesto: ___. Stručne čo sa deje: ___.",
};

function waLink() {
  return `https://wa.me/${CONFIG.whatsappPhone}?text=${encodeURIComponent(CONFIG.whatsappText)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  // WhatsApp odkazy
  document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    el.setAttribute("href", waLink());
  });

  // Active menu
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".menu a").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });

  // Year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});


