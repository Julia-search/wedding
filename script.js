const rsvpForm = document.querySelector("#rsvp-form");

if (rsvpForm) {
  const responsePreview = document.querySelector("#response-preview");

  rsvpForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(rsvpForm);
    const name = formData.get("name") || "Без имени";
    const attendance = formData.get("attendance") || "Не указано";
    const plusOne = formData.get("plus_one") || "Не указано";
    const comment = formData.get("comment") || "Без комментария";

    responsePreview.textContent = [
      "Черновик ответа:",
      `Имя и фамилия: ${name}`,
      `Сможете приехать: ${attendance}`,
      `Будете с парой: ${plusOne}`,
      `Комментарий: ${comment}`,
    ].join("\n");
  });
}

const detailsHotspot = document.querySelector(".hotspot--details");
const detailsAnchor = document.querySelector("#details-anchor");

if (detailsHotspot && detailsAnchor) {
  detailsHotspot.addEventListener("click", (event) => {
    event.preventDefault();
    detailsAnchor.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
