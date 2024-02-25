function getProductNameAndAmount(targetId){
    const prodeuctName = targetId.children[1].children[1].innerText;
    const setProductName = document.getElementById("set-product-name");
    const li = document.createElement('li');
    li.innerText = prodeuctName;
    setProductName.appendChild(li);
    const productPriceStr = targetId.children[1].children[2].children[0].innerText;
    const productPrice = parseFloat(productPriceStr);
    const totalPriceElement = document.getElementById('total-price');
    const previousTotalPriceStr = totalPriceElement.innerText;
    const previousTotalPrice = parseFloat(previousTotalPriceStr);
    const newTotalPrice = previousTotalPrice + productPrice;
    totalPriceElement.innerText = newTotalPrice;
    if(totalPriceElement.innerText > 0){
        const purchaseBtn = document.getElementById('purchase-btn');
        purchaseBtn.removeAttribute('disabled');
    }
    if(totalPriceElement.innerText >= 200){
        const applyBtn = document.getElementById('apply-btn');
        applyBtn.removeAttribute('disabled')
    }
}
function setInnerText(elementId,innerText){
    const element = document.getElementById(elementId);
    element.innerText = innerText;
}
function getDiscountAntTotal(target){
    const coupenCodeField = target.previousElementSibling.value;
    target.previousElementSibling.value = "";
    const totalPriceElement = document.getElementById('total-price');
    const totalPriceStr = totalPriceElement.innerText;
    const totalPrice = parseFloat(totalPriceStr);
    if(coupenCodeField === "SELL200"){
        const dicount = (totalPrice * 20) / 100;
        setInnerText('dicount',dicount)
        const total = totalPrice - dicount;
        setInnerText('total',total);
    }
    else{
        alert("Please enter valid coupon")
    }
}
function clearAllData(){
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.innerText = 0;
    setInnerText('dicount',0)
    setInnerText('total',0);
    const setProductName = document.getElementById("set-product-name");
    while (setProductName.firstChild) {
        setProductName.removeChild(setProductName.firstChild);
      }
}
