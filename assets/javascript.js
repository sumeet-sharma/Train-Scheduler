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
      var newTrain = {
          "trainName": trainName,
          "destination": destination,
          "firstTrain": firstTrain,
          "frequency": freq
      };

      // push the newTrain object to the database
      database.ref("/trains").push(newTrain);

      // console the input values
      console.log(newTrain.trainName);
      console.log(newTrain.destination);
      console.log(newTrain.firstTrain);
      console.log(newTrain.frequency);

      // alert the user 
      alert("Train successfully added");

      // clear the input fields
      $("#Train-name-input").val("");
      $("#destination-input").val("");
      $("#first-train-input").val("");
      $("#frequency-input").val("");

      })

      // Synching the database with the website
    database.ref().on("child_added", function(snapshot, prevChildKey){
        console.log(snapshot.val());

        var newTrainName = snapshot.val().trainName;
        var newDestination = snapshot.val().destination;
        var newFirstTrain = snapshot.val().firstTrain;
        var newFreq = snapshot.val().frequency;

      //logging the info
      //console.log(trainName);
      console.log(newDestination);
      console.log(newFirsTrain);
      console.log(NewFreq);

      // Add the input data into the table
      // modify the html to add the row for the newly added train
      
      $("#trains-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
  frequency + "</td><td>");


  })

  
})

