var PLAYERS = [
  {
    name: "Morisson Son",
    score: 47,
    id: 1,
  }, 
  {
    name: "Ilyes Dakhlaoui",
    score: 37,
    id: 2,
  }, 
  {
    name: "Mamadou NDIAYE",
    score: 38,
    id: 3,
  }
];

// Header Component 

function Header(props) {
  return (
    <div className="header">
        <h1>{props.title}</h1>
    </div>
  );
}

// Header PropTypes
Header.propTypes = {
  title: React.PropTypes.string.isRequired,
}

// Counter Class Component 
var Counter = React.createClass({
  propTypes: {
    initialScore: React.PropTypes.number.isRequired, 
  },

  getInitialState: function() {
    return {
      score: this.props.initialScore,
    }
  },

  incrementScore: function() {
    this.setState({
      score: (this.state.score + 1),
    });
  }, 

  decrementScore: function() {
    this.setState({
      score: (this.state.score - 1),
    });
  },

  render: function() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <div className="counter-score"> {this.state.score} </div>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
});

// Counter functional Component
// function Counter(props) {
//   return (
//     <div className="counter">
//       <button className="counter-action decrement"> - </button>
//       <div className="counter-score"> {props.score} </div>
//       <button className="counter-action increment"> + </button>
//     </div>
//   );
// }
// Counter PropTypes 
// Counter.propTypes = {
//   score: React.PropTypes.number.isRequired,
// }

// Player Class Component
// var Player = React.createClass({
//   render: function() {
//     return (
//       <div className="player">
//         <div className="player-name">
//           {this.props.name}
//         </div>
//         <div className="player-score">
//           <Counter initialScore={props.score}/>                  
//         </div>
//       </div>
//     )
//   }
// });

// Player Component
function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
        <Counter initialScore={props.score}/>                  
      </div>
    </div>
  );
}

// Player PropTypes
Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
}

// Application Component
function Application(props) {
  return (
    <div className="scoreboard">
        <Header title={props.title} />
      <div className="players">
        {
          props.players.map(function(player) {
            return <Player name={player.name} score={player.score} key={player.id} />;
          })
        }
      </div>
    </div>
  );
}

// Application PropTypes
Application.propTypes = {
 title: React.PropTypes.string, 
 players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired,
 })).isRequired,
}

Application.defaultProps = {
  title: "Scoreboard",
}

{/*Rendering Application component; the main component of our application*/}

ReactDOM.render(<Application title="Scoreboard" players={PLAYERS} />, document.getElementById('container'));