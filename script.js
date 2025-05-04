function adotar(nomePet) {
    alert(`Você demonstrou interesse em adotar o(a) ${nomePet}! Entraremos em contato em breve.`);
}

const modal = document.getElementById("interestModal");
const btns = document.querySelectorAll(".interest-btn");
const span = document.querySelector(".close");

btns.forEach(btn => {
  btn.onclick = function() {
    modal.style.display = "block";
  };
});

span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.getElementById("interestForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Obrigado pelo interesse! Entraremos em contato em breve.");
  modal.style.display = "none";
  this.reset();
});
