const scriptURL="https://script.google.com/macros/s/AKfycbxRGlLG5yd0ZkvdskDlOHTEeje95PE0BoZavjuf_J1dZjFoFfrAVq_YZsVkDTArixSp/exec"
const form = document.forms['purchase']
$("#submit").click(function (e){
    e.preventDefault();
    fetch(scriptURL,{method: "POST",body: new FormData(form)})
    .then(response => alert("You have successfully submitted."))
    .catch(error => console.error("Error!", error.message))
  }
)

/*const form = document.forms['purchase']
          
          form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
              .then(response => alert("You have successfully submitted."))
              .catch(error => console.error('Error!', error.message))
          })*/

let price = {"肉片":200};
input_total = $("#total");
quantity = $("#quantity");
product_name = $("#product_name");
function setTotal(){
  input_total.val(String(quantity.val()*price[product_name.val()]));
  //("總價:" + String(quantity.val()*price[product_name.val()]))
}
setInterval(setTotal,100);