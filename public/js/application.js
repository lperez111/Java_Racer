  var temp_player_1_key;
  var temp_player_2_key;
  var perm_player_1_key;
  var perm_player_2_key;  

$(document).ready(function() {
  $('#player_1_key').on( "keyup", function( event ) {
    console.log(event.which);
    temp_player_1_key = (event.which);
  });
  $('#player_2_key').on( "keyup", function( event ) {
    console.log(event.which);
    temp_player_2_key = (event.which);
  });
  $('#confirm').on( "click", function( event ){
    event.preventDefault();
    perm_player_1_key = temp_player_1_key;
    perm_player_2_key = temp_player_2_key;
    $.post('/add_racers', function(response){
      $('#make_the_players').replaceWith(response);
    });
    $(document).on("keyup", function(event){
      if (event.which == perm_player_1_key) {
        $('#player1_strip td.active').next().addClass('active').prev().removeClass('active');
      }
      if(event.which == perm_player_2_key) {
        $('#player2_strip td.active').next().addClass('active').prev().removeClass('active');
      }
      // if($('#player2_strip td').last()[0] == $('#player2_strip td.active')[0]) 
      // {
      //   alert("Player 2 wins");
      // }
      // if($('#player1_strip td').last()[0] == $('#player1_strip td.active')[0])
      // {
      //   alert("Player 1 wins")
      // }
    });
  });
});

//   // Prompt users for keys
//   // Start Game
//   // Each time a key is pressed increment active location
//   // When first player to finish.. finishes, alert the winner













//     // Detect which key was pressed and call the appropriate function
//     // Google "jquery keyup what key was pressed" if you don't know how
//   });
// });
//   //Row 1 active selector
  // $('#player1_strip td.active')

  // Row 2 active selector
  // $('#player2_strip td.active')

  //move players forward query
  //$('#player2_strip td.active').next().addClass('active').prev().removeClass('active')


// LOG WHICH KEY WAS PRESSED
//   $( "#whichkey" ).on( "keydown", function( event ) {
//   $( "#log" ).html( event.type + ": " +  event.which );
// });
