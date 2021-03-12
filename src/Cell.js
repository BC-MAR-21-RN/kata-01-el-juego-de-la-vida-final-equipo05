class Cell{
    constructor(state){
        this.state = state;
    }

    cellTransform(){
        if (this.state)  return '*'
        else if (!this.state) return '.'
    }

}

module.exports = Cell;
