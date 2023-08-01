const form = document.getElementById('form_contact')
const inputContactName = document.getElementById('contact_name')
const inputContactNumber = document.getElementById('contact_number')
const contactName = []
const contactNumber = []
let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()
    addContact()
    updateTable()
    updateTotal()
})

function addContact() {
    if ((contactName.includes(inputContactName.value))||(contactNumber.includes(inputContactNumber.value))) {
        alert('Número/nome já existem')
    } else {
        contactName.push(inputContactName.value)
        contactNumber.push(inputContactNumber.value)

        let linha = '<tr>'
        linha += `<td><span><img src="./images/icon_usuer.png" id="img_user" alt="user icon"></span></td>`
        linha += `<td id="name_user">${inputContactName.value}</td>`
        linha += `<td>${inputContactNumber.value}</td>`
        linha += '</tr>'
    
        linhas += linha
    }

    inputContactName.value = '';
    inputContactNumber.value = '';
}

function updateTable() {
    const bodyTable = document.querySelector('tbody')
    bodyTable.innerHTML = linhas
}

function updateTotal() {
    document.getElementById('total_contact').innerHTML = contactNumber.length
}