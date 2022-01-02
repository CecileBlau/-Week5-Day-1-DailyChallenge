//When you click the Send button, send the data as JSON.
const urlSearchParamsObj = new URLSearchParams(window.location.search);
console.log(URLSearchParams)

let results = document.getElementById("displayValues");

for (const [key, value] of urlSearchParamsObj.entries()) {
	let paragraph = document.createElement("p");
	paragraph.textContent = JSON.stringify(`${key}: ${value}`);
	results.appendChild(paragraph)
}