class story{

    constructor(){
        this.characters = new character();
        this.setting = {
            time:"",
            place:"",
            era:""
        }
        this.beginning = {
            prologue:"",
            origin:"",
            start:""
        }
        this.middle = []
        this.end = {
            conclusion:{
                finale:"",
                moral:""
            }
        }
    }
    get composition(){
        return this._beginning + " " + this._middle + " " + this._end;
    }
    get beginning() {
        return this._beginning.prologue + " " + this._beginning.origin + " " + this._beginning.start;
    }
    set beginning(value){this._beginning = value;}
}