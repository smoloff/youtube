let sostav = [

    {
        number:0,
        weight: 100,
        tovar: {
            name: "kartoshka",
            weight: 500,
        }
    },

    {
        number:1,
        weight: 200,
        tovar: {
            name: "cucumber",
            weight: 200,
        }
    },

    {
        number:2,
        weight: 100,
        tovar: {
            name: "apples",
            weight: 100,
        }
    },

];

sostav.forEach((vagon) => {
    console.log(vagon.tovar.name)

})

