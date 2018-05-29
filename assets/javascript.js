$(document).ready(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDrFHFKV7N6rKBchxyGTeV5HV6pveDltfg",
    authDomain: "uoftcodingbootcamp2018.firebaseapp.com",
    databaseURL: "https://uoftcodingbootcamp2018.firebaseio.com",
    projectId: "uoftcodingbootcamp2018",
    storageBucket: "",
    messagingSenderId: "63986299458"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  // On add train button click,
  $("#add-train-btn").on("click", function(event){
      event.preventDefault();

      // get the data from the input boxes and store it in a variable
      var trainName = $("#Train-name-input").val().trim();
      var destination = $("#destination-input").val().trim();
      var firstTrain = moment($("#first-train-input").val().trim(), 'HH:mm').subtract(10,'years').format('X');
      var freq = $("#frequency-input").val().trim();

      // create an object of add train input
      

      // push the newTrain object to the database
      database.ref().push({
        name: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: freq
      });

      // console the input values
      console.log(trainName);
      console.log(destination);
      console.log(firstTrain);
      console.log(freq);

      // alert the user 
      alert("Train successfully added");

      // clear the input fields
      $("#Train-name-input").val("");
      $("#destination-input").val("");
      $("#first-train-input").val("");
      $("#frequency-input").val("");
      })

      // synching the database with the website
      database.ref().on("child_added", function(childSnapshot, prevChildKey){
        console.log(childSnapshot.val());

        var tName = childSnapshot.val().name;
        var dest = childSnapshot.val().destination;
        var fTrain = childSnapshot.val().firstTrain;
        var tFreq = childSnapshot.val().frequency;

        var remainder = moment().diff(moment.unix(firstTrain),"minutes")%frequency;
	  		var minutes = frequency - remainder;
  			var arrival = moment().add(minutes,'m').format('hh:mm A');


        console.log(tName);
        console.log(dest);
        console.log(fTrain);
        console.log(tFreq);

        console.log(remainder);
        console.log(minutes);
        console.log(arrival);
      })

      $("#trains-table > tbody").append("<tr><td>" + tName + "</td><td>" + dest + "</td><td>" +
        tFreq + "</td><td>");
  })

  


