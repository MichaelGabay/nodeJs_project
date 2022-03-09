window.onload = () => {
    declerEvents();
    document.querySelector("#id_info").innerHTML = "signup user<br>body-> name: email: password:";  
    document.querySelector("#id_data").innerHTML =
`{
    "name": "dekel levy",
    "email": "dekelL@gmail.com",
    "password": "*******",
    "role": "user",
    "date_created": "2022-03-03T20:12:11.487Z",
    "_id": "62212240947fe5e52399c8eb",
    "__v": 0
}`
}

const declerEvents = () => {
    document.querySelector("#id_in").addEventListener("click", () => {
        document.querySelector("#id_info").innerHTML = "whit query s you can search in name or in info and whith query page search in next ten documents ";

        document.querySelector("#id_data").innerHTML =
            `[
    {
    "_id": "62163f4f6cf0377b00d4dac3",
    "name": "Sharper Image Thunder Jet X Stunt Drone",
    "info": "The Sharper Image Thunder Jet X Stunt Drone has the features you need to have fun - 360 degree stunting, light weight foam design, and landing wheels.",
    "category": "Tehnology",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/8/optimized/18087158_fpx.tif",
    "price": 49.99,
    "date_created": "2022-02-23T13:57:29.883Z",
    "User_id": "621638565d2b3bea0107a392",
    "__v": 0
    },
    {
    "_id": "62163fd8b43b4a8a37adaeab",
    "name": "Sharper Image Toy Remote Control Side Drifter Monster Truck",
    "info": "Rethink The Impossible Forget what has been possible with traditional remote control cars and observe the future of movement. No longer are the only options forward and backwards, we can now drive side to side.",
    "category": "Tehnology",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/0/optimized/17981600_fpx.tif",
    "price": 34.99,
    "date_created": "2022-02-23T14:08:19.422Z",
    "User_id": "621638565d2b3bea0107a392",
    "__v": 0
    },
    {
    "_id": "6216403fb43b4a8a37adaead",
    "name": "Sharper Image Remote Control Gravity Rover",
    "info": "The Sharper Image Gravity Rover climbs from floor to walls and even onto the ceiling! Downforce propellers and oversized wheels help the rover drive up any surface and cling to the ceiling while the 2.4 GHz remote control allows for long-range control.",
    "category": "Tehnology",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/2/optimized/20096932_fpx.tif",
    "price": 39.99,
    "date_created": "2022-02-23T14:08:19.422Z",
    "User_id": "621638565d2b3bea0107a392",
    "__v": 0
    },
    {
    "_id": "62164092b43b4a8a37adaeaf",
    "name": "Sharper Image Toy Rc Robotic Robotosaur Mini",
    "info": "Where technology meets fun your children will love the mini robot's cute size and easy-to-use controls Inspire Stem Interest in children make learning engaging and exciting for children of all ages with a toy that combines interactive fun with science and engineering concepts.",
    "category": "Tehnology",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/1/optimized/17379211_fpx.tif",
    "price": 17.99,
    "date_created": "2022-02-23T14:08:19.422Z",
    "User_id": "621638565d2b3bea0107a392",
    "__v": 0
    }
]`

    })

    document.querySelector("#id_in1").addEventListener("click", () => {
        document.querySelector("#id_info").innerHTML = "search in category with params=(Technology)";

        document.querySelector("#id_data").innerHTML =
            `[
    {
    "_id": "62163f4f6cf0377b00d4dac3",
    "name": "Sharper Image Thunder Jet X Stunt Drone",
    "info": "The Sharper Image Thunder Jet X Stunt Drone has the features you need to have fun - 360 degree stunting, light weight foam design, and landing wheels.",
    "category": "Technology",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/8/optimized/18087158_fpx.tif",
    "price": 49.99,
    "date_created": "2022-02-23T13:57:29.883Z",
    "User_id": "621638565d2b3bea0107a392",
    "__v": 0
    },
    {
    "_id": "62163fd8b43b4a8a37adaeab",
    "name": "Sharper Image Toy Remote Control Side Drifter Monster Truck",
    "info": "Rethink The Impossible Forget what has been possible with traditional remote control cars and observe the future of movement. No longer are the only options forward and backwards, we can now drive side to side.",
    "category": "Technology",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/0/optimized/17981600_fpx.tif",
    "price": 34.99,
    "date_created": "2022-02-23T14:08:19.422Z",
    "User_id": "621638565d2b3bea0107a392",
    "__v": 0
    },
    {
    "_id": "6216403fb43b4a8a37adaead",
    "name": "Sharper Image Remote Control Gravity Rover",
    "info": "The Sharper Image Gravity Rover climbs from floor to walls and even onto the ceiling! Downforce propellers and oversized wheels help the rover drive up any surface and cling to the ceiling while the 2.4 GHz remote control allows for long-range control.",
    "category": "Technology",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/2/optimized/20096932_fpx.tif",
    "price": 39.99,
    "date_created": "2022-02-23T14:08:19.422Z",
    "User_id": "621638565d2b3bea0107a392",
    "__v": 0
    },
    {
    "_id": "62164092b43b4a8a37adaeaf",
    "name": "Sharper Image Toy Rc Robotic Robotosaur Mini",
    "info": "Where technology meets fun your children will love the mini robot's cute size and easy-to-use controls Inspire Stem Interest in children make learning engaging and exciting for children of all ages with a toy that combines interactive fun with science and engineering concepts.",
    "category": "Technology",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/1/optimized/17379211_fpx.tif",
    "price": 17.99,
    "date_created": "2022-02-23T14:08:19.422Z",
    "User_id": "621638565d2b3bea0107a392",
    "__v": 0
    }
]`



    })

    document.querySelector("#id_in2").addEventListener("click", () => {
        document.querySelector("#id_info").innerHTML = "search between max price and min price";
        document.querySelector("#id_data").innerHTML =
`[
    {
    "_id": "62163f4f6cf0377b00d4dac3",
    "name": "Sharper Image Thunder Jet X Stunt Drone",
    "info": "The Sharper Image Thunder Jet X Stunt Drone has the features you need to have fun - 360 degree stunting, light weight foam design, and landing wheels.",
    "category": "Technology",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/8/optimized/18087158_fpx.tif",
    "price": 49.99,
    "date_created": "2022-02-23T13:57:29.883Z",
    "User_id": "621638565d2b3bea0107a392",
    "__v": 0
    },
    {
    "_id": "62163fd8b43b4a8a37adaeab",
    "name": "Sharper Image Toy Remote Control Side Drifter Monster Truck",
    "info": "Rethink The Impossible Forget what has been possible with traditional remote control cars and observe the future of movement. No longer are the only options forward and backwards, we can now drive side to side.",
    "category": "Technology",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/0/optimized/17981600_fpx.tif",
    "price": 34.99,
    "date_created": "2022-02-23T14:08:19.422Z",
    "User_id": "621638565d2b3bea0107a392",
    "__v": 0
    },
    {
    "_id": "6216403fb43b4a8a37adaead",
    "name": "Sharper Image Remote Control Gravity Rover",
    "info": "The Sharper Image Gravity Rover climbs from floor to walls and even onto the ceiling! Downforce propellers and oversized wheels help the rover drive up any surface and cling to the ceiling while the 2.4 GHz remote control allows for long-range control.",
    "category": "Technology",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/2/optimized/20096932_fpx.tif",
    "price": 39.99,
    "date_created": "2022-02-23T14:08:19.422Z",
    "User_id": "621638565d2b3bea0107a392",
    "__v": 0
    },
    {
    "_id": "62164092b43b4a8a37adaeaf",
    "name": "Sharper Image Toy Rc Robotic Robotosaur Mini",
    "info": "Where technology meets fun your children will love the mini robot's cute size and easy-to-use controls Inspire Stem Interest in children make learning engaging and exciting for children of all ages with a toy that combines interactive fun with science and engineering concepts.",
    "category": "Technology",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/1/optimized/17379211_fpx.tif",
    "price": 17.99,
    "date_created": "2022-02-23T14:08:19.422Z",
    "User_id": "621638565d2b3bea0107a392",
    "__v": 0
    },
    {
    "_id": "62164150b43b4a8a37adaeb2",
    "name": "Mag-Genius Magnetic Building Blocks 60 Piece Set",
    "info": "Mag-Genius's 60 Piece set Features 60 pieces of translucent magnet tiles, watch your little one have a blast building and playing with all sorts of magnetic structures all day long. Staged Toys Not Included",
    "category": "Engineering",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/3/optimized/20793223_fpx.tif",
    "price": 29.99,
    "date_created": "2022-02-23T14:08:19.422Z",
    "User_id": "621638705d2b3bea0107a394",
    "__v": 0
    },
    {
    "_id": "6216419bb43b4a8a37adaeb4",
    "name": "Paw Patrol 34 Piece Buildable Vehicle Playset 2",
    "info": "Your little one is going to love building Marshall's City Fire Rescue inspired by Paw Patrol The Movie. They can set the scene by building a house fire to send the pups off to the rescue to put out the fire with the fire truck's launcher.",
    "category": "Engineering",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/0/optimized/19873280_fpx.tif",
    "price": 20.99,
    "date_created": "2022-02-23T14:08:19.422Z",
    "User_id": "621638705d2b3bea0107a394",
    "__v": 0
    },
    {
    "_id": "621642ddc9b8c65281106fbe",
    "name": "Box CanDIY Totally Twilight Night Jars Set by Handstand Kids",
    "info": "Give the nighttime a magical glow creating beautiful night lights This 18 piece set has everything needed make Real night lights! Includes jars, Led lights, charms, ribbons, powder glitter, transparent paper, silhouette & inspirational quotes sticker sheets and instructions, all in a keepsake storage box made from recycled cardboard.",
    "category": "arts",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/18264767_fpx.tif",
    "price": 22.99,
    "date_created": "2022-02-23T14:21:14.165Z",
    "User_id": "621638805d2b3bea0107a396",
    "__v": 0
    },
    {
    "_id": "62164320c9b8c65281106fc0",
    "name": "Toy Chef Children's Toy Electric Guitar",
    "info": "Inspire your child to become a musician by introducing them to this fun toy. This toy guitar can help a child develop skills and ideas of how a true guitar works. With it's built in rhythms and instrument sounds, your child will be ready to play out of the box.",
    "category": "arts",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/6/optimized/19282476_fpx.tif",
    "price": 24.99,
    "date_created": "2022-02-23T14:21:14.165Z",
    "User_id": "621638805d2b3bea0107a396",
    "__v": 0
    },
    {
    "_id": "62164360c9b8c65281106fc2",
    "name": "Cra Z Art Shimmer N Sparkle Crazy Lights The Real 8 in 1 Nail Design Studio",
    "info": "The ultimate 8 in 1 nail art fun. Design, paint, stencil, glitter, decorate, foil, sticker and gem. A rockin nailtastic light up extravaganza. Special light up feature, cool colors dance to sounds. Create salon style nails.",
    "category": "arts",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/5/optimized/11428845_fpx.tif",
    "price": 41.99,
    "date_created": "2022-02-23T14:21:14.165Z",
    "User_id": "621638805d2b3bea0107a396",
    "__v": 0
    }
]`


    })

    document.querySelector("#id_in3").addEventListener("click", () => {
        document.querySelector("#id_info").innerHTML = "add toy, you need to send token!<br>body-> name: info: category: img_url: price:";
        document.querySelector("#id_data").innerHTML =
`{
    "name": " dellet",
    "info": "Crayola wooden table and chairs set, 4 easy-access fabric compartments, additional organizers, flip over the dry erase table top, to a traditional chalkboard surface.",
    "category": "arts",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/6/optimized/11479256_fpx.tif",
    "price": 108.99,
    "date_created": "2022-03-03T18:37:14.304Z",
    "_id": "62211106b798be289b9ba38e",
    "User_id": "621638805d2b3bea0107a396",
    "__v": 0
}`

    })

    document.querySelector("#id_in4").addEventListener("click", () => {
        document.querySelector("#id_info").innerHTML = "appdate toy, you need to send token!<br>/id you wont to appdate";
        document.querySelector("#id_data").innerHTML =
`{
    "acknowledged": true,
    "modifiedCount": 1,
    "upsertedId": null,
    "upsertedCount": 0,
    "matchedCount": 0
}`

    })
    document.querySelector("#id_in12").addEventListener("click", () => {
        document.querySelector("#id_info").innerHTML = "get all the toys";
        document.querySelector("#id_data").innerHTML =
`[
    {
    "_id": "62163f4f6cf0377b00d4dac3",
    "name": "Sharper Image Thunder Jet X Stunt Drone",
    "info": "The Sharper Image Thunder Jet X Stunt Drone has the features you need to have fun - 360 degree stunting, light weight foam design, and landing wheels.",
    "category": "Technology",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/8/optimized/18087158_fpx.tif",
    "price": 49.99,
    "date_created": "2022-02-23T13:57:29.883Z",
    "User_id": "621638565d2b3bea0107a392",
    "__v": 0
    },
    {
    "_id": "62163fd8b43b4a8a37adaeab",
    "name": "Sharper Image Toy Remote Control Side Drifter Monster Truck",
    "info": "Rethink The Impossible Forget what has been possible with traditional remote control cars and observe the future of movement. No longer are the only options forward and backwards, we can now drive side to side.",
    "category": "Technology",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/0/optimized/17981600_fpx.tif",
    "price": 34.99,
    "date_created": "2022-02-23T14:08:19.422Z",
    "User_id": "621638565d2b3bea0107a392",
    "__v": 0
    },
    {
    "_id": "6216403fb43b4a8a37adaead",
    "name": "Sharper Image Remote Control Gravity Rover",
    "info": "The Sharper Image Gravity Rover climbs from floor to walls and even onto the ceiling! Downforce propellers and oversized wheels help the rover drive up any surface and cling to the ceiling while the 2.4 GHz remote control allows for long-range control.",
    "category": "Technology",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/2/optimized/20096932_fpx.tif",
    "price": 39.99,
    "date_created": "2022-02-23T14:08:19.422Z",
    "User_id": "621638565d2b3bea0107a392",
    "__v": 0
    },
    {
    "_id": "62164092b43b4a8a37adaeaf",
    "name": "Sharper Image Toy Rc Robotic Robotosaur Mini",
    "info": "Where technology meets fun your children will love the mini robot's cute size and easy-to-use controls Inspire Stem Interest in children make learning engaging and exciting for children of all ages with a toy that combines interactive fun with science and engineering concepts.",
    "category": "Technology",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/1/optimized/17379211_fpx.tif",
    "price": 17.99,
    "date_created": "2022-02-23T14:08:19.422Z",
    "User_id": "621638565d2b3bea0107a392",
    "__v": 0
    },
    {
    "_id": "62164150b43b4a8a37adaeb2",
    "name": "Mag-Genius Magnetic Building Blocks 60 Piece Set",
    "info": "Mag-Genius's 60 Piece set Features 60 pieces of translucent magnet tiles, watch your little one have a blast building and playing with all sorts of magnetic structures all day long. Staged Toys Not Included",
    "category": "Engineering",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/3/optimized/20793223_fpx.tif",
    "price": 29.99,
    "date_created": "2022-02-23T14:08:19.422Z",
    "User_id": "621638705d2b3bea0107a394",
    "__v": 0
    },
    {
    "_id": "6216419bb43b4a8a37adaeb4",
    "name": "Paw Patrol 34 Piece Buildable Vehicle Playset 2",
    "info": "Your little one is going to love building Marshall's City Fire Rescue inspired by Paw Patrol The Movie. They can set the scene by building a house fire to send the pups off to the rescue to put out the fire with the fire truck's launcher.",
    "category": "Engineering",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/0/optimized/19873280_fpx.tif",
    "price": 20.99,
    "date_created": "2022-02-23T14:08:19.422Z",
    "User_id": "621638705d2b3bea0107a394",
    "__v": 0
    },
    {
    "_id": "621641e7b43b4a8a37adaeb6",
    "name": "Lego Millennium Falcon 1353 Pieces Toy Set",
    "info": "Own the Millennium Falcon from Star Wars- The Rise of Skywalker.",
    "category": "Engineering",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/9/optimized/20951819_fpx.tif",
    "price": 159.99,
    "date_created": "2022-02-23T14:08:19.422Z",
    "User_id": "621638705d2b3bea0107a394",
    "__v": 0
    },
    {
    "_id": "62164227b43b4a8a37adaeb8",
    "name": "Bachmann Trains Thomas And Friends Gordon The Express",
    "info": "Bachmann trains thomas and friends gordon the express engine locomotive with moving eyes. Build your thomas and friends collection one friend at a time. Compatible with bachmann ho scale e z track and other popular brands of ho scale track. Metal wheels. International style hook and loop couplers.",
    "category": "Engineering",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/9/optimized/10695189_fpx.tif",
    "price": 113.99,
    "date_created": "2022-02-23T14:08:19.422Z",
    "User_id": "621638705d2b3bea0107a394",
    "__v": 0
    },
    {
    "_id": "621642ddc9b8c65281106fbe",
    "name": "Box CanDIY Totally Twilight Night Jars Set by Handstand Kids",
    "info": "Give the nighttime a magical glow creating beautiful night lights This 18 piece set has everything needed make Real night lights! Includes jars, Led lights, charms, ribbons, powder glitter, transparent paper, silhouette & inspirational quotes sticker sheets and instructions, all in a keepsake storage box made from recycled cardboard.",
    "category": "arts",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/18264767_fpx.tif",
    "price": 22.99,
    "date_created": "2022-02-23T14:21:14.165Z",
    "User_id": "621638805d2b3bea0107a396",
    "__v": 0
    },
    {
    "_id": "62164320c9b8c65281106fc0",
    "name": "Toy Chef Children's Toy Electric Guitar",
    "info": "Inspire your child to become a musician by introducing them to this fun toy. This toy guitar can help a child develop skills and ideas of how a true guitar works. With it's built in rhythms and instrument sounds, your child will be ready to play out of the box.",
    "category": "arts",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/6/optimized/19282476_fpx.tif",
    "price": 24.99,
    "date_created": "2022-02-23T14:21:14.165Z",
    "User_id": "621638805d2b3bea0107a396",
    "__v": 0
    },
    {
    "_id": "62164360c9b8c65281106fc2",
    "name": "Cra Z Art Shimmer N Sparkle Crazy Lights The Real 8 in 1 Nail Design Studio",
    "info": "The ultimate 8 in 1 nail art fun. Design, paint, stencil, glitter, decorate, foil, sticker and gem. A rockin nailtastic light up extravaganza. Special light up feature, cool colors dance to sounds. Create salon style nails.",
    "category": "arts",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/5/optimized/11428845_fpx.tif",
    "price": 41.99,
    "date_created": "2022-02-23T14:21:14.165Z",
    "User_id": "621638805d2b3bea0107a396",
    "__v": 0
    },
    {
    "_id": "621643e3c9b8c65281106fc4",
    "name": "Crayola Wooden Table and Chair Set",
    "info": "Crayola wooden table and chairs set, 4 easy-access fabric compartments, additional organizers, flip over the dry erase table top, to a traditional chalkboard surface.",
    "category": "arts",
    "img_url": "https://slimages.macysassets.com/is/image/MCY/products/6/optimized/11479256_fpx.tif",
    "price": 108.99,
    "date_created": "2022-02-23T14:21:14.165Z",
    "User_id": "621638805d2b3bea0107a396",
    "__v": 0
    }
    ]`

    })
    document.querySelector("#id_in5").addEventListener("click", () => {
        document.querySelector("#id_info").innerHTML = "delete toy, you need to send token!<br>/id you wont to delete";
        document.querySelector("#id_data").innerHTML =
`{
    "deletedCount": 1
}`

    })
    document.querySelector("#id_in6").addEventListener("click", () => {
        document.querySelector("#id_info").innerHTML = "signup user<br>body-> name: email: password:";  
        document.querySelector("#id_data").innerHTML =
`{
    "name": "dekel levy",
    "email": "dekelL@gmail.com",
    "password": "*******",
    "role": "user",
    "date_created": "2022-03-03T20:12:11.487Z",
    "_id": "62212240947fe5e52399c8eb",
    "__v": 0
}`

    })
    document.querySelector("#id_in7").addEventListener("click", () => {
        document.querySelector("#id_info").innerHTML = "login user<br>body-> email: password:";  
        document.querySelector("#id_data").innerHTML =
`{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE2Mzg1NjVkMmIzYmVhMDEwN2EzOTIiLCJfcm9sZSI6InVzZXIiLCJpYXQiOjE2NDYzMzkyNjMsImV4cCI6MTY0NjM0Mjg2M30.LHnq6uiljnQlVkomF8Eok7lM9SJG4DfjL7-ZVOh9Ujg"
}`

    })
    document.querySelector("#id_in8").addEventListener("click", () => {
        document.querySelector("#id_info").innerHTML = "send token and get status";  
        document.querySelector("#id_data").innerHTML =
`{
    "status": "ok"
}`

    })

}
