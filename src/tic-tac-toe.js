class TicTacToe {
    constructor() {
        this.check = false;
        this.player = 'x';
        this.matrix = [[null, null, null], [null, null, null], [null, null, null]];
    }

    getCurrentPlayerSymbol() { //should return `x` or `o`
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) { //should properly update class state (change current player, update marks storage etc.)
        if (this.matrix[rowIndex][columnIndex] == null) {
            this.check = true;
            this.matrix[rowIndex][columnIndex] = this.player;
            if (this.player == 'x') this.player = 'o';
            else
            if (this.player == 'o') this.player = 'x';
        } else {
            this.check = false;
        }
    }

    isFinished() { // should return true if game is finished (e.g. there is a winner or it is a draw)
        if (this.getWinner() != null) return true;
        else
            if (this.noMoreTurns() == true) return true;
        else
            return false;
    }

    getWinner() { // should return winner symbol (`x` or `o`) or null if there is no winner yet
        if ((this.matrix[0][0] == this.matrix[0][1]) && (this.matrix[0][1]  == this.matrix[0][2])
            && (this.matrix[0][0] != null) && (this.matrix[0][1] != null)&& (this.matrix[0][2] != null))
            return this.matrix[0][0];
        else if ((this.matrix[1][0] == this.matrix[1][1]) && (this.matrix[1][1]== this.matrix[1][2])
            && (this.matrix[1][0] != null) && (this.matrix[1][1] != null)&& (this.matrix[1][2] != null))
            return this.matrix[1][0];
        else if ((this.matrix[2][0] == this.matrix[2][1]) && (this.matrix[2][1] == this.matrix[2][2])
            && (this.matrix[2][0] != null) && (this.matrix[2][1] != null)&& (this.matrix[2][2] != null))
            return this.matrix[2][0];
        else if ((this.matrix[0][0] == this.matrix[1][0]) && (this.matrix[1][0] == this.matrix[2][0])
            && (this.matrix[0][0] != null) && (this.matrix[1][0] != null)&& (this.matrix[2][0] != null))
            return this.matrix[0][0];
        else if ((this.matrix[0][1] == this.matrix[1][1]) && (this.matrix[1][1] == this.matrix[2][1])
            && (this.matrix[0][1] != null) && (this.matrix[1][1] != null)&& (this.matrix[2][1] != null))
            return this.matrix[0][1];
        else if ((this.matrix[0][2] == this.matrix[1][2]) && (this.matrix[1][2] == this.matrix[2][2])
            && (this.matrix[0][2] != null) && (this.matrix[1][2] != null)&& (this.matrix[2][2] != null))
            return this.matrix[0][2];
        else if ((this.matrix[0][0] == this.matrix[1][1]) && (this.matrix[1][1] == this.matrix[2][2])
            && (this.matrix[0][0] != null) && (this.matrix[1][1] != null)&& (this.matrix[2][2] != null))
            return this.matrix[0][0];
        else if ((this.matrix[0][2] == this.matrix[1][1]) && (this.matrix[1][1] == this.matrix[2][0])
            && (this.matrix[0][2] != null) && (this.matrix[1][1] != null)&& (this.matrix[2][0] != null))
            return this.matrix[0][2];
        else return null;
    }

    noMoreTurns() { // should return true if there is no more fields to place a `x` or `o`
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                if (this.matrix[i][j] == null)
                    return false;
            }
        }
        return true;
    }

    isDraw() { // should return true if there is no more turns and no winner
        if ((this.noMoreTurns() == true) && (this.getWinner() == null)) return true;
        else
            return false;
    }

    getFieldValue(rowIndex, colIndex) { // should return `matrix[row][col]` value (if any) or `null`
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
