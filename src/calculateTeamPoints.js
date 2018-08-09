// Given an array of players
// returns a sorted array of teams with the total team points for active players.
// The output is sorted in descending order by points
// input: [{ team: 'green', name: 'Bob', points: 5, isActive: true }, ...]
// output: [{ team: 'green', points: 40 }, ...]
module.exports = (players) => {
  var res = [];
  var teams = [];

  for ( player of players )
  {
    if ( teams.indexOf( player.team ) == -1 )
    {
      teams.push( player.team );

      let result = { team: player.team, points: 0 }

      if( player.isActive )
      {
        result.points = player.points;
      }

      res[player.team] = result;
    }
    else
    {
      if( player.isActive )
      {
        res[player.team].points = res[player.team].points + player.points;
      }
    }
  }
  }

  return res;
}
