// get server response
// const fetch = require("node-fetch");
// const await = require("await");


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

          var url = createUrl(amount_val, input_val_from, input_val_to);

          fetch(url)
          .then(res => res.text()) 
          .then(i => document.getElementById('result').value = i)

          // document.getElementById('result').value = input_val_to + " " +input_val_from +" "+ amount_val;
      });


      function getDict(url) {

        fetch(url)
        .then(res => res.text()) 
        .then(data => JSON.parse(data)) 
        .then(i => console.log(i))
      }

      function getResponse(url) {

        fetch(url)
        .then(res => res.text()) 
        .then(i => console.log(i))
      }

      function createUrl(amount, from, to){

        return serverUrl +"currency/" +amount+"/"+from+"/"+to;

      }

      var serverUrl = 'http://localhost:5555/';


      getDict('http://localhost:5555/getcurrencydict');
      getResponse('http://localhost:5555/currency/100/USD/ILS');
      console.log(createUrl(100, 'EUR', 'ILS'));
