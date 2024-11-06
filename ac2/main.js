function addCard() {
    let randomn = Math.random()

    const cardContainer = document.getElementById("cardContainer");
    const cardTitle = document.getElementById("cardTitle").value || "Card title";

    const card = document.createElement("div");
    card.className = "card";
    card.style.width = "18rem";

    const cardImg = document.createElement("img");
    cardImg.className = "card-img-top";
    cardImg.src = "https://picsum.photos/1400/700?random="+randomn;
    card.appendChild(cardImg);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitleElement = document.createElement("h5");
    cardTitleElement.className = "card-title";
    cardTitleElement.textContent = cardTitle;
    cardBody.appendChild(cardTitleElement);


    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger";
    deleteButton.textContent = "Apagar";
    deleteButton.onclick = function() {
        cardContainer.removeChild(card);
    };
    cardBody.appendChild(deleteButton);

    card.appendChild(cardBody);
    cardContainer.appendChild(card);


    document.getElementById("cardTitle").value = "";
}

function deleteAllCards() {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";
}