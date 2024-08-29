let str = "hai my name is abhishek sdfsdfsdfjksfjksd and i am a mern stack developer";

let largest = str.split(" ").reduce((largesstr, curr) => {
    if (curr.length > largesstr.length) {
        largesstr = curr;
    }
    return largesstr;
}, "");

console.log(largest);
