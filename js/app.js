var Animal = {
    age: 0,
    grow: function(){
        this.age++; 
    },
    isAdult: function(){
        if(this.age > 3) {
            return true; 
        }
        return false; 
    }
};

var cat = function cat(){
    var newCat = Object.create(Animal)
    return newCat; 
};



var Calculator = {
    verify: function(x,y){
			if (typeof x !== 'number' || typeof y !== 'number'){
				return false; 
			}
			return true; 
    },
    add: function(x,y){
    	if (this.verify(x,y)) {
				return x+y; 
    	}
			throw 'both inputs must be numbers!'; 
    },
    subtract: function(x,y){
			if (this.verify(x,y)) {
				return x-y; 
			}
		throw 'both inputs must be numbers!';
    }
}; 