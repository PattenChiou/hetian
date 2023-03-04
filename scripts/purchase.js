$("#index_purchase").click(function (e){
  e.preventDefault();
  $("html,body").animate(
      {
          scrollTop: 0,
      },
      600
  );
});

const scriptURL="https://script.google.com/macros/s/AKfycbxRGlLG5yd0ZkvdskDlOHTEeje95PE0BoZavjuf_J1dZjFoFfrAVq_YZsVkDTArixSp/exec"
const form = document.forms['purchase']
$("#submit").click(function (e){
    e.preventDefault();
    fetch(scriptURL,{method: "POST",body: new FormData(form)})
    .then(response => alert("You have successfully submitted."))
    .catch(error => console.error("Error!", error.message));
  }
)

/*const form = document.forms['purchase']
          
          form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
              .then(response => alert("You have successfully submitted."))
              .catch(error => console.error('Error!', error.message))
          })*/

let price = {"H1":300, "H2":720, "H3":720, "H4":280, "H5":900, "H6":360, "H7":120};
total = $("#total_input");
H1 = $("#H1_select");
H2 = $("#H2_select");
H3 = $("#H3_select");
H4 = $("#H4_select");
H5 = $("#H5_select");
H6 = $("#H6_select");
H7 = $("#H7_select");
function calTotal(){
  total.val(String(
                    price["H1"] * H1.val() 
                  + price["H2"] * H2.val() 
                  + price["H3"] * H3.val()
                  + price["H4"] * H4.val()
                  + price["H5"] * H5.val()
                  + price["H6"] * H6.val()
                  + price["H7"] * H7.val())
  );
  //("總價:" + String(quantity.val()*price[product_name.val()]))
}
setInterval(calTotal,100);