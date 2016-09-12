var harley = {
    name : "Street750",
    color: "Black",

    getBudgetForCustomStuff: function(amount) {
        return ("You need to lower budget",
               console.log(this.name)
               )
    },

    shoutOuts: [
        {kevin: "A cool black monster with 750cc"},
        {sam: "Heavy bike with full power"}
    ]
}
harley.getBudgetForCustomStuff(8000);




document.getElementById("test").innerHTML = harley.shoutOuts;