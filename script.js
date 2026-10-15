const form = document.querySelector("#contact form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: { Accept: "application/json" }
        });

        if (response.ok) {
            form.reset();
        }
    } catch (error) {
        status.textContent = "Network error. Please try again.";
    }
});
