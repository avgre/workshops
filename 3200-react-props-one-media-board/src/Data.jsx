let videos = [ // 1
    { name: "Denali", id: '122375452', caption: "So touching" }, // 1
    { name: "Omelette", id: '65107797', caption: "Dogs are cute" } // 1
] // 1

let images = [ // 2
    { url: '/cat.jpeg', caption: 'A cat I like' }, // 2
    { url: '/dog.jpeg', caption: 'A dog I like' }, // 2
] // 2

let sounds = [ // 2
    { location: '/bell.mp3', caption: 'The sound of a bell' }, // 2
    { location: '/trombone.mp3', caption: 'Wah wah wah waaaah' } // 2
] // 2


let familyMembers = [ // 2
    { name: "Dad", quote: "Finish your homework before going outside!" }, // 2
    { name: "Mom", quote: "Listen to your father." }, // 2
] // 2

export { images, sounds, videos, familyMembers } // 3

/* meta
({
    text: {
        1: `This is where the data needed to display the videos is located.
        We declare a variable called videos that refers to an array. The array
        contains objects. Each object has a name, id and caption property. The id
        represents the id of the video on the Vimeo website. The name and the caption properties are
        text that we will display alongside the video`,
        2: `As part of your homework, you will have to display images, sounds and text on your webpage`,
        3: `The values are exported so that they can be used in App.jsx`


    }
})
*/