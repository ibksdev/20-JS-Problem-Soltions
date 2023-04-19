//Q12: A social media app needs to find all unique hastags used in a user's post.
const userPost = [
	"Just wait for a #run #fitness",
	"Enjoying the #weekend #friends ",
	"Can't wait for the #vacation #beach"
];
const hashtags = new Set();
for (let post of userPost){
	const words = post.split(" ");
	for ( let word of words){
		if ( word.startsWith("#"))
		{
			hashtags.add(word.slice(1));
		}
	}
}
console.log(hashtags);