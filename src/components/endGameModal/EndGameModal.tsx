import "./endGameModal.scss"
const EndGameModal = ( {score} : {score : number}) => {
    return (
    <div className="end-game-modal">
      <div className="modal-content">
        <h2>Game Over!</h2>
        <p>Hai totalizzato {score} punti!</p>
      </div>
    </div>
  );
}
export default EndGameModal