let SellList = [
    {
      Date: '4/10/2024',
      TotalBuy: '500',
      CashTK:'400',
      CollectionTk:'0',
      DueTk:'100',
      Balance:'-100',
    },
  ];
  
  CustomerSell();
  
  function addCustomerSell() {
    let date = document.querySelector('#date');
    let TotalBuy = document.querySelector('#total-buy');
    let cash = document.querySelector('#cash');
    let collection = document.querySelector('#collection');
    let due = document.querySelector('#due');
    // let name = document.querySelector('#name');

    let Cname = name.value;
    let Cdate = date.value;
    let CTotalBuy = TotalBuy.value;
    let Ccash = cash.value;
    let Ccollection = collection.value;
    let Cdue = due.value;


    SellList.push({ Date: Cname,
        TotalBuy: Cdate,
        CashTK:CTotalBuy,
        CollectionTk:Ccash,
        DueTk:Ccollection,
        Balance:Cdue,
    });

    // name.value = '';
    date.value = '';
    TotalBuy.value = '';
    cash.value = '';
    collection.value = '';
    due.value = '';
    CustomerSell();
  }
  
  function CustomerSell() {
    let containerElement = document.querySelector('.customername');
    let newHtml = '';
    for (let i = 0; i < SellList.length; i++) {
      let {Date, TotalBuy, CashTK, CollectionTk, DueTk} = SellList[i];
      newHtml += `
            <td>${Date}<td>
            <td>${TotalBuy}</td>
            <td>${CashTK}<td>
            <td>${CollectionTk}</td>
            <td>${DueTk}</td>

        <button class='btn-delete' onclick="SellList.splice(${i}, 1);
        displayItems();">Delete</button>
      `;
    }
    containerElement.innerHTML = newHtml;
  }