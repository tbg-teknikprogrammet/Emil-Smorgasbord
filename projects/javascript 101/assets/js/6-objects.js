// ********************************Uppgift*************************************
var movies = [
    {
        title: "Guardians of the galaxy",
        rating: "8,1/10 stars",
        hasWatched: true
    },
    {
        title: "Avengers: Infinity war",
        rating: "9,5/10 stars",
        hasWatched: false
    },
    {
        title: "Iron man 3",
        rating: "7,8/10 stars",
        hasWatched: true
    },
    {
        title: "Big chungus",
        rating: "1,2/10 stars",
        hasWatched: true
    }
];
movies.forEach(movieDB);


function movieDB(movie) {
    if (movie.hasWatched == true){
        console.log("You have seen " + movie.title + ", and it has a rating of " + movie.rating)
    }
    else {
        console.log("You have not seen " + movie.title + ", and it has a rating of " + movie.rating)
    }
}
