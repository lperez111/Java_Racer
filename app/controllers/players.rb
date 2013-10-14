post '/add_racers' do
  @player1 = Player.create(name: params[:player_1_name])  
  @player2 = Player.create(name: params[:player_2_name])
  post '/new_game'
end
