function gameObject() {
    const teams = {
      home: {
        teamName: "Brooklyn Nets",
        colors: [`Black`, `White`],
        players: {
          'Alan Anderson': {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },//alan ends
          'Reggie Evans': {
            number: 14,
            shoe: 12,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },//reggie ends
          'Brook Lopez': {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },//brook ends
          'Mason Plumlee': {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },//mason ends
          'Jerry Terry': {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          }//jerry ends
        }//players ends
      },//home ends
      away: {
        teamName: "Charlotte Hornets",
        colors: [`Turquoise`, `Purple`],
        players: {
          'Jeff Adrien': {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },//jeff ends
         'Bismak Biyombo': {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },//bismak ends
          'DeSagna Diop': {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },//deSagna ends
          'Ben Gordon': {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },//ben ends
          'Brendan Haywood': {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          }//brendan ends
        }//players ends
      }//away ends
    }//teams object ends
    return teams
}// gameObject function ends

let info = gameObject()
let teams = Object.entries(info.away.players).concat(Object.entries(info.home.players))
let team = Object.entries(info)

function numPointsScored(name) {

  for (let [key, value] of teams) {
    if (key === name) {
      return value.points
    }
  }
}

function shoeSize(name) {

  for (let [key, value] of teams) {
    if (key === name) {
      return value.shoe
    }
  }
}

function teamColors(teamName) {

  for (let [key, value] of team) {
    if (value.teamName === teamName) {
      return value.colors
    }
  }
}


function teamNames() {

  let theTeams = []
  for (let [key, value] of team) {
    theTeams.push(value.teamName)
  }
  return theTeams
}

function playerNumbers(teamName) {

  for (let [key, value] of team) {
    let players = Object.entries(value.players)

    if (value.teamName === teamName) {
      let playerJerseys = []
      for (let [key, value] of players) {
        playerJerseys.push(value.number)
      }
    return playerJerseys
    }
  }
}


function playerStats(playerName) {
  console.log(teams)
  for (let [key, value] of teams) {
    if (key === playerName) {
      return value
    }
  }
}

function bigShoeRebounds() {
  let shoeSizes = []
  for (let [key, value] of teams) {
    shoeSizes.push(value.shoe)
  }
  return Math.max(...shoeSizes)
}

function mostPointsScored() {
  let allPoints = []
  for (let [key, value] of teams) {
    allPoints.push(value.points)
  }
  return Math.max(...allPoints)
}

function winningTeam() {
  let homeTeam = Object.entries(info.home.players)
  let awayTeam = Object.entries(info.away.players)

  let homeTeamPoints = [];
  let awayTeamPoints = [];

  for (let [key, value] of homeTeam) {
    homeTeamPoints.push(value.points)
  }
  for (let [key, value] of awayTeam) {
    awayTeamPoints.push(value.points)
  }

  const homeSum = homeTeamPoints.reduce((total, currentValue) => {
    return total + currentValue
  }, 0)
  const awaySum = awayTeamPoints.reduce((total, currentValue) => {
    return total + currentValue
  }, 0)

  if (homeSum > awaySum) {
    console.log(info.home.teamName)
  } else {
    console.log(info.away.teamName)
  }

}


// console.log(numPointsScored('Brook Lopez'))
// console.log(shoeSize('Brendan Haywood'))
// console.log(teamColors('Charlotte Hornets'))
// console.log(teamNames('Charlotte Hornets'))
// console.log(playerNumbers('Brooklyn Nets'))
// console.log(playerStats('Alan Anderson'))
// console.log(bigShoeRebounds())
// console.log(mostPointsScored())
// console.log(winningTeam())

