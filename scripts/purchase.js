const scriptURL="https://script.google.com/macros/s/AKfycbxRGlLG5yd0ZkvdskDlOHTEeje95PE0BoZavjuf_J1dZjFoFfrAVq_YZsVkDTArixSp/exec"
const form = document.forms['purchase']
          
          form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
              .then(response => alert("You have successfully submitted."))
              .catch(error => console.error('Error!', error.message))
          })