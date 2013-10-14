post '/new_game' do
  @game = Game.create()
  @player1.games << @game
  @player2.games << @game
end
