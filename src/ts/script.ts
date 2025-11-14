const inputs = [...document.querySelectorAll("input")];
const form = document.getElementById("form");
const sectionRatingForm = document.getElementById("rating-form") as HTMLElement;
const sectionThankYou = document.getElementById("thank-you") as HTMLElement;
const spanRate = document.getElementById("rate") as HTMLElement;

form?.addEventListener("submit", (event) => {
  event?.preventDefault();

  const checked = inputs.filter((input) => input.checked);
  if (checked.length === 0) return;

  sectionRatingForm.style.display = "none";
  sectionThankYou.style.display = "grid";
  showRate(checked[0].value);
});

const showRate = (rate: string) => (spanRate.innerHTML = rate);
