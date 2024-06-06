document.addEventListener("DOMContentLoaded", function () {
  const fromDate = flatpickr("#from", {
    dateFormat: "d-m-d",
    altInput: true,
    altFormat: "d_m_Y",
    onChange: function (selectedDates, dateStr, instance) {
      toDate.set("minDate", dateStr);
    },
    allowInput: true,
    clickOpens: false,
  });

  const toDate = flatpickr("#to", {
    dateFormat: "d-m-d",
    altInput: true,
    altFormat: "d_m_Y",
    onChange: function (selectedDates, dateStr, instance) {
      fromDate.set("maxDate", dateStr);
    },
    allowInput: true,
    clickOpens: false,
  });

  document.querySelectorAll("[data-toggle]").forEach(function (toggleButton) {
    toggleButton.addEventListener("click", function (e) {
      const input = e.currentTarget.closest(".flatpickr").querySelector("[data-input]");
      if (input && input._flatpickr) {
        input._flatpickr.toggle();
      }
    });
  });

  document.querySelectorAll("[data-clear]").forEach(function (clearButton) {
    clearButton.addEventListener("click", function (e) {
      const input = e.currentTarget.closest(".flatpickr").querySelector("[data-input]");
      if (input && input._flatpickr) {
        input._flatpickr.clear();
      }
    });
  });

  document.querySelector(".button--block-view").addEventListener("click", function () {
    document.querySelector(".layout__wrapper").classList.add("layout__wrapper--block");
    document.querySelector(".layout__wrapper").classList.remove("layout__wrapper--flex");
  });

  document.querySelector(".button--flex-view").addEventListener("click", function () {
    document.querySelector(".layout__wrapper").classList.add("layout__wrapper--flex");
    document.querySelector(".layout__wrapper").classList.remove("layout__wrapper--block");
  });

  document.querySelector(".button--load-more").addEventListener("click", function () {
    const hiddenCards = document.querySelectorAll(".card.hidden");
    for (let i = 0; i < 4 && i < hiddenCards.length; i++) {
      hiddenCards[i].classList.remove("hidden");
    }
    if (document.querySelectorAll(".card.hidden").length === 0) {
      this.style.display = "none";
    }
  });
});
