let bagItems;
onLoad();

function onLoad(){
    let bagItemStr = localStorage.getItem(`bagItems`);
    bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
}

function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem(`bagItems`,JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon(){
    let BagIconCountElement = document.querySelector(`.bag-item-count`);
    if(bagItems.length > 0){
        BagIconCountElement.style.visibility = `visible`;
    BagIconCountElement.innerText = bagItems.length;
    }else{
        BagIconCountElement.style.visibility = `hidden`;
    }
}

function displayItemsOnHomePage(){
    let itemContainerElement = document.querySelector(`.items-container`);
    if(!itemContainerElement){
        return;
    }

let innerHTML = '';

items.forEach(item =>{
    innerHTML += ` 
           <div class="item-container">
                <img class="item-image" src="${item.image}" alt="image 1">
                <div class="rating">
                  ${item.rating.stars}⭐ | ${item.rating.count}
                </div>
                <div class="company-name">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price">Rs ${item.current_price}</span>
                    <span class="original-price">Rs ${item.original_price}</span>
                    <span class="discount"> (${item.discount_percentage}% OFF)</span>
                </div>
                <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
            </div>`;
});
itemContainerElement.innerHTML = innerHTML;
}
