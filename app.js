// get server response


function fromFunction() {

    var x = document.getElementById("mySelect-from").value;

    document.getElementById('from-input').value = x;

  }

  function toFunction() {

      var x = document.getElementById("mySelect-to").value;

      document.getElementById('to-input').value = x;

      }


      $("#add-btn").click(function() {


          var input_val_to = $("#to-input").val();
          var input_val_from = $("#from-input").val();
          var amount_val = $("#inputamount").val();

          document.getElementById('result').value = input_val_to + " " +input_val_from +" "+ amount_val;

      });



    //   fetch('http://localhost:5555/currency/123/eng/he')
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = "http://localhost:5555/currency/123/eng/he"; // site that doesn’t send Access-Control-*
      fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
      .then(response => response.text())
      .then(contents => console.log(contents))
      .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
