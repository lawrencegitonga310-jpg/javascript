// Exporting modules
// We export modules so that we can use/utelise them in other files/module in our programs

export const calculator = (x, y) =>{
    let difference = x-y

    console.log("The difference of the the two numbers is:", difference)
};

export const simpleInterest = (principle, rate, time){
    let si = (principle* rate* time)/100
    console.log("The simple interest gained is:", si)

};