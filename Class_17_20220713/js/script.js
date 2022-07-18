//objekta definēšana ar literāļa palīdzību
const car = {type:"Fiat", model:"500", color:"white"};
//literālis var būt arī tukšs un īpašības un metodes var pievienot pēc tam

//objekta īpašības (property) izgūšana
console.log(car.type);
console.log(car["type"]);

//objekts ar metodi
/*
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    id: 666
    eyeColor: "blue",
    fullname: function(){
        return this.firstName + " " + this.lastName;
    }
  };
*/

  //savs piemērs
  const cars = {
    maker: "VW",
    region: "Europe",
    model: "Golf",
    type: function(){
        return this.maker + " " + this.model;
    }

  };