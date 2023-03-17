var Dashboard = document.getElementById("dashboard")
var DashboardTab = document.getElementById("dashboardTab")
var TransactionForm = document.getElementById("transactionForm")
var TransactionFormTab = document.getElementById("transactionFormTab")
var Inventory = document.getElementById("inventory")
var InventoryTab = document.getElementById("inventoryTab")

function showDashboard(){
    Dashboard.style.display = "flex"
    DashboardTab.style.color = "aqua"
    TransactionForm.style.display = "none"
    TransactionFormTab.style.color = "white"
    Inventory.style.display = "none"
    InventoryTab.style.color = "white"
}
function showTransactionForm(){
    Dashboard.style.display = "none"
    DashboardTab.style.color = "white"
    TransactionForm.style.display = "flex"
    TransactionFormTab.style.color = "aqua"
    Inventory.style.display = "none"
    InventoryTab.style.color = "white"
}
function showInventory(){
    Dashboard.style.display = "none"
    DashboardTab.style.color = "white"
    TransactionForm.style.display = "none"
    TransactionFormTab.style.color = "white"
    Inventory.style.display = "flex"
    InventoryTab.style.color = "aqua"
}

let SHEET_ID = '11x642NDAwfS9Og-47HpTZFNhaHVZ1Q_fVxDVVVfIHNc';
let SHEET_TITLE = 'CEBU-INVENTORY';
let SHEET_RANGE = 'A1:k1000'

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);
debugger
fetch(FULL_URL)
.then(res =>  res.json())
.then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0,-2));

    let item_id = document.getElementById('item_id');
    let item_name = document.getElementById('item_name');
    let available_stock = document.getElementById('available_stock');
    console.log(data.table.rows[0].c[1].v)
    console.log(data.table.rows[0].c[2].v)
    console.log(data.table.rows[0].c[10].v)


    itemIdList = []

    for(let i=0; i<data.table.rows.length;i++){
        itemIdList.push(data.table.rows[i].c[1].v)
    }

    itemIdList.sort();
    itemIdList.forEach(function(item){
        let newOption = document.createElement('option');
        newOption.text = item;
        newOption.value = item;
        newOption.id = 'selectId';
        item_id.appendChild(newOption);
    });

    item_id.onchange = writeToScreen;
    function writeToScreen(){
        item_id.innerText = this.value
    };
    
    // myFunction(itemNameList) ;

    //     for(let i=0; i<data.table.rows.length;i++)
    //     if(item_id.value == data.table.rows[i].c[1].v){
    //         itemname.value = data.table.rows[i].c[2].v
    //         stock.value = data.table.rows[i].c[10].v
    //     }

    // for(let i=0; i<data.table.rows.length;i++){
    //     itemList.push({item_id : data.table.rows[i].c[1].v , item_name : data.table.rows[i].c[2].v , stockk : data.table.rows[i].c[10].v})
    // }

    // itemIdList = []

    // for(let i=0; i<data.table.rows.length;i++){
    //     itemIdList.push([data.table.rows[i].c[1].v])
    // }
    // itemIdList.sort();
    // itemIdList.forEach(function(item){
    //     let newOption = document.createElement('option');
    //     newOption.text = item;
    //     newOption.value = item;
    //     item_id.appendChild(newOption);
    // });
    // item_id.onchange = writeToScreen;
    // function writeToScreen(){
    //     item_id.innerText = this.value
    // };

    // for(let i=0; i<data.table.rows.length;i++){
    //     itemNameList.push(data.table.rows[i].c[2].v)
    // }
    // itemNameList.sort();
    // itemNameList.forEach(function(item){
    //     let newOption = document.createElement('option');
    //     newOption.text = item;
    //     newOption.value = item;
    //     item_name.appendChild(newOption);
    // });

    // item_name.onchange = writeToScreen;
    // function writeToScreen(){
    //     itemNameList.innerText = this.value
    // };
    

})


// console.log(itemIdList.length)
// // // console.log(itemNameList)
// // console.log(itemList)







// // function search(){
// //     for(x=0 ; x<511 ; x++){
// //         if(item_id.value == )
// //     }
// // }
// console.log(item_id_list)

