"use strict";
const inputs = [...document.querySelectorAll("input")];
const form = document.getElementById("form");
const sectionRatingForm = document.getElementById("rating-form");
const sectionThankYou = document.getElementById("thank-you");
const spanRate = document.getElementById("rate");
form?.addEventListener("submit", (event) => {
    event?.preventDefault();
    const checked = inputs.filter((input) => input.checked);
    if (checked.length === 0)
        return;
    sectionRatingForm.style.display = "none";
    sectionThankYou.style.display = "grid";
    showRate(checked[0].value);
});
const showRate = (rate) => (spanRate.innerHTML = rate);
//# sourceMappingURL=script.js.map