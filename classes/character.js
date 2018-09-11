class character{

    constructor(){
        this.name={
            first:"",
            middle:"",
            last:""
        }
        this.age=0
        this.isGenderFemale = true;
        this.Pronouns = [];
        this.GoodTraits = {};
        this.BadTraits = {};
        this.Favorites = {
            "food":[]
        };
    }
    get name(){return this._name.first + " " + this._name.middle + " " + this._name.last;}
    get age(){return this._age;}
    get isGenderFemale(){return this._isGenderFemale;}
    get Pronouns(){return this._Pronouns;}
    get GoodTraits(){return this._GoodTraits;}
    get BadTraits(){return this._BadTraits;}
    get Favorites(){return this._Favorites;}

    set first(value){this._name.first = value;}
    set middle(value){this._name.middle = value;}
    set last(value){this._name.last = value;}
    set name(value){this._name = value;}
    
    set age(value){this._age = value;}
    set isGenderFemale(value){this._isGenderFemale = value;}
    set Pronouns(value){this._Pronouns = value;}
    set GoodTraits(value){this._GoodTraits = value;}
    set BadTraits(value){this._BadTraits = value;}
    set Favorites(value){this._Favorites = value;}

    // addGoodTrait(value){}
}