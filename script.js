// let videoData = {
//     title: "Title1",
//     description: "Description1",
//     url: "url",
//     user: {
//         name: "Username",
//         subscribers: 1000,
//     },
// }

// console.log(videoItem);
// console.log(videoItem.user.name);
// console.log(videoItem["title"]);

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

sostav.forEach(function(vagon) {
    console.log(vagon.tovar.name)

})

