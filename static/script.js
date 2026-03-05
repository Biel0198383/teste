const form = document.getElementById("form");
const results = document.getElementById("results");

form.addEventListener("submit", async (e) => {

e.preventDefault();

const data = new FormData(form);

const res = await fetch("/process", {
method: "POST",
body: data
});

const json = await res.json();

results.innerHTML = "";

json.forEach(v => {

const link = document.createElement("a");
link.href = "/download/" + v.file;
link.innerText = "Baixar " + v.file;

results.appendChild(link);
results.appendChild(document.createElement("br"));

});

});
