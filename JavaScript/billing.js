const moreContactInfoButton = document.getElementById(
  "more-contact-info-button"
);

const moreContactInfo = document.getElementById("more-contact-info");

moreContactInfo.style.display = "none";
moreContactInfoButton.addEventListener("click", () => {
  moreContactInfo.style.display = "block";
  moreContactInfoButton.style.display = "none";
});
