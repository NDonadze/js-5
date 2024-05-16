const users = [
    {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    image: "./img/userImage1.jpeg",
    },
    {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    image: "./img/userImage1.jpeg",
    },
    {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    image: "./img/userImage1.jpeg",
    },
    {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    image: "./img/userImage1.jpeg",
    },
    {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    image: "./img/userImage1.jpeg",
    },
    {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    image: "./img/userImage1.jpeg",
    }
    ];
    let userName = [];
    for (let k = 0; k < users.length; k++) {
        const elementImage = users[k].image;
        const name = `${users[k].first_name} ${users[k].last_name}`;
        console.log(name)
    }
