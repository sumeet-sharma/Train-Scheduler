$(document).ready(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCG9RX_GvFjEcqFo1-muNva64zVCt4kgwY",
    authDomain: "bootcamp-project90.firebaseapp.com",
    databaseURL: "https://bootcamp-project90.firebaseio.com",
    projectId: "bootcamp-project90",
    storageBucket: "bootcamp-project90.appspot.com",
    messagingSenderId: "164481652818"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  // On add train button click,
  $("#add-train-btn").on("click", function(event){
      event.preventDefault();

      // get the data from the input boxes and store it in a variable
      var trainName = $("#Train-name-input").val().trim();
      var destination = $("#destination-input").val().trim();
      var firstTrain = $("#first-train-input").val().trim();
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

        console.log(tName);
        console.log(dest);
        console.log(fTrain);
        console.log(tFreq);
      })

      $("#trains-table > tbody").append("<tr><td>" + tName + "</td><td>" + dest + "</td><td>" +
        tFreq + "</td><td>");
  })

  


