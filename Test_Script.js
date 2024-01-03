var x=0;
let y=10;

/*const car = {brand: "TOyOTA",
            model: "JeEP", 
            color: "ReD", 
            info: function(){
                return this.color + " " + this.brand + " " + this.model;
            }
        }
*/
class Kar{
    constructor(brand, model, color){
        this.brand = brand;
        this.model = model;
        this.color = color;
    }
    info(){
        return this.color + " " + this.brand + " " + this.model;
    }
}

function myFunction(){
    document.getElementById("demo").innerHTML = "Paragraph Changed.";
}

function doMath(){
    alert(mult(x, y))
}

function incr_x(){
        x++;
}

function mult(a,b){
    return a*b
}

function aqe_Req(age, bingamongus){
        let message = (age<3) ? "Liar, how u typing this":
            (age < 18) ? "CHILD ur too young":
            (age < 122)? "K":
            "How u alive";

        switch(bingamongus){
            case 1:
                alert("there is a bingus amongus");
                break;
            case 2:
                alert("WHY GOD WHY");
                break;
            case 3:
                alert("there is a bingus wanted in 30 countries.");
                break;
            default:
                alert("we done here, bing out");
        }

        /*let sum = (arg0, arg1) => arg0+arg1;
        sum(a, b);*/
        /*let object1 = Car("Toyota", "Camry", "Blue");
        let object2 = null;
        let curCar = object1 ?? object2*/
}

function carInfo(){
    alert(car.info())
}

let car = new Kar("Toyota", "Camry", "Blue")