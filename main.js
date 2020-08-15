var firebaseConfig = {
    apiKey: "AIzaSyBWJfjM-f7kOf89qsRSptyibGozdoNIoyg",
    authDomain: "rad-sad.firebaseapp.com",
    databaseURL: "https://rad-sad.firebaseio.com",
    projectId: "rad-sad",
    storageBucket: "rad-sad.appspot.com",
    messagingSenderId: "358073355012",
    appId: "1:358073355012:web:039795f64d1875b18f5e51",
    measurementId: "G-5NRWVHJNR8"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Get a reference to the database service
var database = firebase.database();


$(document).ready(function () {

    var nameG = "";
    var emailG = "";
    var messageG = "";

    $('.submit-btn').on("click", function (e) {
        e.preventDefault();

        var newMessageG = {
            nameG: $('.formNameEntry').val().trim(),
            emailG: $('.formEmailEntry').val().trim(),
            messageG: $('.formMessageEntry').val().trim()
        };

        $('input').val("");
        $('textarea').val("");

        database.ref().push(newMessageG);

        console.log(newMessageG);
        $(".successMessage").html("Message sent!");
    });

    database.ref().on("child_added", function (snapshot) {
        
        console.log(snapshot.val().nameG);
        console.log(snapshot.val().emailG);
        console.log(snapshot.val().messageG);

        // var tr = $("<tr>");

        // var tdName = $("<td>").text(snapshot.val().name);
        // var tdEmail = $("<td>").text(snapshot.val().email);
        // var tdMessage = $("<td>").text(snapshot.val().message);

        // tr.append(tdName).append(tdEmail).append(tdMessage);

        // $('.messages tbody').append(tr);

        // $(".messages").append(snapshot.val().name).append("  |  " + snapshot.val().email).append("  |  " + snapshot.val().message).append("<br><br>");


        $(".nameDrop").append("<span class='nameCol'>" + snapshot.val().nameG + "</span>").append("<br><br>");
        $(".emailDrop").append("<span class='emailCol'>" + snapshot.val().emailG + "</span>").append("<br><br>");
        $(".messageDrop").append("<span class='messageCol'>" + snapshot.val().messageG + "</span>").append("<br><br>");

        


    });
});