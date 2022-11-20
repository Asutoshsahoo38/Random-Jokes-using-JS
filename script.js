let myjokes =[
    {
       
        "joke": "Have a great weekend!\nI hope your code behaves the same on Monday as it did on Friday."
    },
    {
        
        "joke": "The generation of random numbers is too important to be left to chance."
    },
    {
       
        "joke": "// This line doesn't actually do anything, but the code stops working when I delete it."
    },
    {
      
        "joke": "Debugging is like being the detective in a crime movie where you're also the murderer at the same time."
    },
    {
        "joke": "Today I learned that changing random stuff until your program works is \"hacky\" and a \"bad coding practice\" but if you do it fast enough it's \"Machine Learning\" and pays 4x your current salary."
    },
    {
       
        "joke": "A byte walks into a bar looking miserable.\nThe bartender asks it: \"What's wrong buddy?\"\n\"Parity error.\" it replies. \n\"Ah that makes sense, I thought you looked a bit off.\""
    },
    {
        
        "joke": "A guy walks into a bar and asks for 1.4 root beers.\nThe bartender says \"I'll have to charge you extra, that's a root beer float\".\nThe guy says \"In that case, better make it a double.\""
    },
    {
        
        "joke": "The glass is neither half-full nor half-empty, the glass is twice as big as it needs to be."
    },
    {
        
        "joke": "\"Can I tell you a TCP joke?\"\n\"Please tell me a TCP joke.\"\n\"OK, I'll tell you a TCP joke.\""},
    {
        
        "joke": "Hey Girl,\nRoses are #ff0000,\nViolets are #0000ff,\nI use hex codes,\nBut I'd use RGB for you."}
];
let index = Math.floor(Math.random()*(myjokes.length-1)) 
jokes.innerHTML = myjokes[index].joke       