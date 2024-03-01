/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./styles.css";

function Square({ value, onClick }) {
	return (
		<button onClick={onClick} className="TTT-Square">
			{value}
		</button>
	);
}

export default function TicTacToe() {
	const [squares, setSquares] = useState(Array(9).fill(""));
	const [status, setStatus] = useState("");
	const [isXTurn, setIsXTurn] = useState(false);

	function getWinner(squares) {
		const winningPatterns = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let i = 0; i < winningPatterns.length; i++) {
			const [x, y, z] = winningPatterns[i];
			if (
				squares[x] &&
				squares[x] === squares[y] &&
				squares[x] === squares[z]
			) {
				return squares[x];
			}
		}
		return null;
	}

	function handleClick(getCurrentSquare) {
		let copySquares = [...squares];
		if (getWinner(copySquares) || copySquares[getCurrentSquare]) return;
		copySquares[getCurrentSquare] = isXTurn ? "X" : "O";
		setIsXTurn(!isXTurn);
		setSquares(copySquares);
	}

	function handleRestart() {
		setIsXTurn(false);
		setSquares(Array(9).fill(""));
	}

	useEffect(() => {
		if (!getWinner(squares) && squares.every((item) => item !== "")) {
			setStatus("This is a Draw! Please Restart the Game");
		} else if (getWinner(squares)) {
			setStatus(`Winner is ${getWinner(squares)}. Please restart the Game!`);
		} else {
			setStatus(`Next Player is ${isXTurn ? "X" : "O"}`);
		}
	}, [squares, isXTurn]);
	return (
		<div className="TTT-Content">
			<h1>TIC TAC TOE</h1>
			<div className="TTT-Container">
				<div className="TTT-ROw">
					<Square value={squares[0]} onClick={() => handleClick(0)} />
					<Square value={squares[1]} onClick={() => handleClick(1)} />
					<Square value={squares[2]} onClick={() => handleClick(2)} />
				</div>
				<div className="TTT-ROw">
					<Square value={squares[3]} onClick={() => handleClick(3)} />
					<Square value={squares[4]} onClick={() => handleClick(4)} />
					<Square value={squares[5]} onClick={() => handleClick(5)} />
				</div>
				<div className="TTT-ROw">
					<Square value={squares[6]} onClick={() => handleClick(6)} />
					<Square value={squares[7]} onClick={() => handleClick(7)} />
					<Square value={squares[8]} onClick={() => handleClick(8)} />
				</div>
				<h1>{status}</h1>
				<button className="TTT-RestartButton" onClick={handleRestart}>
					Restart
				</button>
			</div>
		</div>
	);
}
