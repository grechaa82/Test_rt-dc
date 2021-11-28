const data = [
	{"pet": "Dog", "name": "Marah"},
	{"pet": "Cat", "name": "Lindae"},
	{"pet": "Parrot", "name": "Timon"},
	{"pet": "Dog", "name": "Wang"},
	{"pet": "Cat", "name": "Raymond"},
	{"pet": "Dog", "name": "Madonna"},
	{"pet": "Parrot", "name": "Ray"},
	{"pet": "Cat", "name": "Rina"},
	{"pet": "Dog", "name": "Hakeem"},
	{"pet": "Cat", "name": "Chaim"}
]

function AddRow(tableRow) {
    let tableBody = document.getElementById(tableRow),
        lastTr = tableBody.lastElementChild
        trClone = lastTr.cloneNode(true);
    tableBody.append(trClone);
};

function DeleteRow(This) {
    This.closest('tr').remove();
};

function RenderTable() {
    const tbodyEl = document.querySelector("tbody");
    for (var i in data) {
        const petEl = data[i].pet
        const nameEl = data[i].name
        console.log(petEl);
        tbodyEl.innerHTML += `
            <tr>
                <td><input type="text" placeholder="${petEl}"></td>
                <td><input type="text" placeholder="${nameEl}"></td>
                <td><button class="duttonDeleteRow" onclick="DeleteRow(this)">Delete</button></td>
            </tr>
        `;
    }
}