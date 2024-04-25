document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("status");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const formData = new FormData(form);
      fetch(form.action, {
        method: "POST",
        headers: {
          "Content-Type": "https://docs.google.com/spreadsheets/d/1b9XP61IBXWp1-ZiDmtjL-PYAzIu-nnZZGQ9PogTnuC4/edit#gid=0"
        },
        body: new URLSearchParams(formData).toString()
      })
      .then(response => {
        if (response.ok) {
          status.textContent = "Message sent!";
          form.reset();
        } else {
          throw new Error("Form submission failed!");
        }
      })
      .catch(error => {
        status.textContent = "There was an error: " + error;
      });
    });
  });
  