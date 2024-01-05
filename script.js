const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
const card = document.querySelector(".card");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    const isActive = accordionItemHeader.classList.contains("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;

    // Deactivate all accordion items
    accordionItemHeaders.forEach(item => {
      item.classList.remove("active");
      item.nextElementSibling.style.maxHeight = 0;
    });

    // Activate the clicked accordion item
    if (!isActive) {
      accordionItemHeader.classList.add("active");
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      card.style.height = (parseInt(card.style.height) + accordionItemBody.scrollHeight) + "px";
    }
  });
});

