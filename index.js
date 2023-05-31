const signNowButton = document.getElementById("sign-now-button");
const modal = document.getElementById("thanks-modal");
const addSignature = (person) => {
  const newSignature = document.createElement("p");
  newSignature.textContent = `🖊️ ${person.name} from ${person.hometown} supports this.`;

  const signaturesSection = document.querySelector(".signatures");
  signaturesSection.appendChild(newSignature);
};

const toggleModal = (person) => {
  const modalText = document.getElementById("thanks-modal-content");
  modalText.textContent = `Thank you, ${person.name}!`;

  modal.style.display = "flex";
  const intervalId = setInterval(scaleImage, 500);

  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 4000);
};
signNowButton.addEventListener("click", validateForm);


    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
  }
};


if (!containsErrors) {
  addSignature(person); 
  toggleModal(person);

  for (let i = 0; i < petitionInputs.length; i++) {
    petitionInputs[i].value = "";
  }
}
let scaleFactor = 1;
const modalImage = document.querySelector("#thanks-modal img");

const scaleImage = () => {
  scaleFactor = (scaleFactor === 1) ? 0.8 : 1;
  modalImage.style.transform = `scale(${scaleFactor})`;
};
