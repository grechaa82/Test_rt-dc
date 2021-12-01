var data = [
	{pet: "Dog", name: "Marah"},
	{pet: "Cat", name: "Lindae"},
	{pet: "Parrot", name: "Timon"},
	{pet: "Dog", name: "Wang"},
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

function saveСhanges() {
    var newData = [];
    x = document.getElementById("Table").rows.length;
    for(i=1;i<x;i++){
        var tr = document.getElementsByTagName("tr")[i];
        for(j=0; j<1; j++) {
            var pet = tr.getElementsByTagName("td")[j].innerText;
        };
        for(m=1; m<2; m++) {
            var name = tr.getElementsByTagName("td")[j].innerText;
        };
        newData.push({pet, name});
    };
    data = newData;
    newData = [];
};

function RenderTable() {
    lenTr = document.getElementById('tableBody').rows.length;
    
    for (var i=0; i < lenTr; i++){
        var z = document.getElementById("IdTr");
        z.remove();
    };

    var tbodyEl = document.getElementById("tableBody");
    for (var i in data) {
        let petEl = data[i].pet;
        let nameEl = data[i].name;
        tbodyEl.innerHTML += `
            <tr id="IdTr">
                <td contenteditable="true" class="TdPet">${petEl}</td>
                <td contenteditable="true" class="Tdname">${nameEl}</td>
                <td><button class="duttonDeleteRow" onclick="DeleteRow(this)">Delete</button></td>
            </tr>
        `;
    };
}