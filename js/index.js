let items = []
let total = 0;
function save(event){
    event.preventDefault()
    items.push(event.target.itemName.value)
    calculateTotal()
    console.log(items)
    console.log(total)

    document.querySelector("#total").innerHTML= total
}

function calculateTotal(){
    total = 450;
    return total
}
