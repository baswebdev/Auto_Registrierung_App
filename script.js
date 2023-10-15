document.addEventListener("DOMContentLoaded", function() {
    const markeInput = document.getElementById("marke");
    const modellInput = document.getElementById("modell");
    const kontrollschildInput = document.getElementById("kontrollschild");
    const kmstandInput = document.getElementById("kmstand");
    const registrierenButton = document.getElementById("registrieren");
    const autoliste = document.getElementById("autoliste");
    let rowCount = 0;

    registrierenButton.addEventListener("click", function() {
        const marke = markeInput.value;
        const modell = modellInput.value;
        const kontrollschild = kontrollschildInput.value;
        const kmstand = kmstandInput.value;

        if (marke && modell && kontrollschild && kmstand) {
            const rowColor = rowCount % 2 === 0 ? "even" : "odd";
            const autoEintrag = document.createElement("tr");
            autoEintrag.className = rowColor;
            autoEintrag.innerHTML = `
                <td>${marke}</td>
                <td>${modell}</td>
                <td>${kontrollschild}</td>
                <td>${kmstand}</td>
                <td><button class="delete-button">Löschen</button></td>
            `;
            autoliste.appendChild(autoEintrag);

            const deleteButton = autoEintrag.querySelector(".delete-button");
            deleteButton.addEventListener("click", function() {
                autoliste.removeChild(autoEintrag);
            });

            markeInput.value = "";
            modellInput.value = "";
            kontrollschildInput.value = "";
            kmstandInput.value = "";

            rowCount++;
        } else {
            console.log("Bitte füllen Sie alle Felder aus.");
        }
    });
});
