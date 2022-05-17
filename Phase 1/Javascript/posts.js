var likeButton;

document.getElementById("popup").addEventListener("click", function(){
    document.querySelector(".writePosts").classList.add("active");
    document.querySelector("#popup").style.display="none";
});

document.getElementById("closeBtn").addEventListener("click", function(){
    document.querySelector(".writePosts").classList.remove("active");
    document.querySelector("#popup").style.display="block";
});

const list = [];
const postsHere = document.getElementsByClassName('posts');
const initializeList = () => {
    let postContainer = document.getElementsByClassName('container');
    for (let i = 0; i < postContainer.length; i++) {
        list[i] = postContainer[i];
    }
}

function Post (name, topic, content, photo) {
    let container = document.createElement('div');
    let header = document.createElement('div');
    let headerBody = document.createElement('div');
    let headerInfo = document.createElement('div');
    let headerName = document.createElement('h2');
    let footer = document.createElement('div');
    let desc = document.createElement('div');
    let descName = document.createElement('h2');
    let footerInfo = document.createElement('div');
    let buttons = document.createElement('div');
    let actions = document.createElement('div');
    let like = document.createElement('span');
    let comment = document.createElement('span');
    let save = document.createElement('span');
    let contents = document.createElement('span');
	let upvote = document.createElement('span');
	let downvote = document.createElement('span');
	let picInfo = document.createElement('div');
	let picture = document.createElement('img');
	
    container.setAttribute('class', 'container');
    header.setAttribute('class', 'header');
    headerBody.setAttribute('class', 'header-body');
    headerInfo.setAttribute('class', 'header-info');
    headerName.setAttribute('class', 'header-name');
    footer.setAttribute('class', 'footer');
    desc.setAttribute('class', 'description');
    descName.setAttribute('class', 'description-name');
    footerInfo.setAttribute('class', 'footer-info');
    buttons.setAttribute('class', 'footer-buttons');
    actions.setAttribute('class', 'footer-actions');
    like.setAttribute('class', 'like');
    comment.setAttribute('class', 'comment');
    save.setAttribute('class', 'save');
	upvote.setAttribute('class', 'upvote');
	downvote.setAttribute('class', 'downvote');
	picInfo.setAttribute('class', 'imageCon');
	picture.setAttribute('class', 'image');
	
    actions.appendChild(like);
    actions.appendChild(comment);
    actions.appendChild(save);
	actions.appendChild(upvote);
	actions.appendChild(downvote);
    buttons.appendChild(actions);
	
    headerName.innerHTML = name;
    descName.innerHTML = topic;
    contents.innerHTML = content;
	
	picture.src = photo;
	picInfo.appendChild(picture);
	
    footerInfo.appendChild(contents);
    desc.appendChild(descName);
    footer.appendChild(desc);
	footer.appendChild(picInfo);
    footer.appendChild(footerInfo);
    footer.appendChild(buttons);
    headerInfo.appendChild(headerName);
    headerBody.appendChild(headerInfo);
    header.appendChild(headerBody);
    container.appendChild(header);
    container.appendChild(footer);
    postsHere[0].insertBefore(container, postsHere[1]);
	
    initializeList();
}

const submit = document.getElementById("postSubmit");
submit.addEventListener("click", function() {
    let postTitle = document.getElementById("postTitle");
    let postContent = document.getElementById("desc");
	let tryVal = "../images/sprites2.png";
    Post('Sample', postTitle.value, postContent.value, tryVal);
    postTitle.value = '';
    postContent.value = '';
});

function samplePostName(i) {
	var PostName;
	switch (i) {
		case 0:
			PostName = "Eren Jaeger";
			break;
		case 1:
			PostName = "Joey From Route 30";
			break;
		case 2:
			PostName = "Leonardo";
			break;
		case 3:
			PostName = "8GIG";
			break;
		case 4:
			PostName = "A Random Guy With A Mustache";
			break;
	}
	return PostName;
}

function samplePostTitle(i) {
	var PostTitle;
	switch (i) {
		case 0:
			PostTitle = "Outside World";
			break;
		case 1:
			PostTitle = "Cute Animals";
			break;
		case 2:
			PostTitle = "The Da Cringey Code";
			break;
		case 3:
			PostTitle = "Did You Know?";
			break;
		case 4:
			PostTitle = "A Random Trivia For All Of You";
			break;
	}
	return PostTitle;
}

function samplePostComment(i) {
	var PostComment;
	switch (i) {
		case 0:
			PostComment = "I have never been in the outside world since I was born. " 
						+ "However, I have been intrigued by how other people from other places interact with each other. "
						+ "I have been thinking, what is it like in the outside world? "
						+ "Is it the same here in Paradis Island?"
						+ "<br>"
						+ "P.S. I want to visit Marley soon!";
			break;
		case 1:
			PostComment = "I started my journey to become a pet master since I was 10, since it is the legal age to start training your pets! "
						+ "I am in love with my pet rat, named Rattata, as it can learn different moves as it grows older! "
						+ "I also love competing my pets with other trainers, helping my pet Rattata grow stronger! "
						+ "Please meet me at Route 30 with my legendary Rattata!";
			break;
		case 2:
			PostComment = "Hello World!" 
						+ "<br><br>"
						+ "I am thinking of creating a code called The Da Cringey Code which is about the concept of cringe. "
						+ "So, here is the ultimate question: What makes the man's pick-up-line cringeworthy? "
						+ "Please help me to create this ultimate code to help other people like yourself! "
						+ "I want to hear your thoughts!";
			break;
		case 3:
			PostComment = "This is my first post regarding random facts!"
						+ "<br><br>"
						+ "Did you know that bees communicate with one another by wiggling their lower body. "
						+ "It shows that despite not having a language like humans, bees communicate with a different way. "
						+ "It is also known as the 'wiggle dance', that tells other bees where the food is. "
						+ "I wonder, do animals also have their way of communicating with each other, such as, dogs? "
						+ "<br><br>"
						+ "Help me figure it out! Thank you all!";
			break;
		case 4:
			PostComment = "For today's trivia is about Mathematics!"
						+ "<br><br>"
						+ "First, multiply 1 by 8, and add it by 1. Then, 12 by 8, and add it by 2. Then, 123 by 8, and add it by 3. Until you reach 123456789. "
						+ "You would see that 123456789 multiply by 8, then adding by 9 is 987654321. "
						+ "<br><br>"
						+ "Pretty cool, right? Just a simple mathematics trivia."
						+ "<br>"
						+ "That's all! ";
			break;
	}
	return PostComment;
}

function sampleImage(i) {
	var photo = "";
	switch (i) {
		case 0:
			photo = "../images/paradis.jpg";
			break;
		case 1:
			photo = "../images/rattata.png";
			break;
		case 2:
			photo = "../images/cringe.jpg";
			break;
		case 3:
			photo = "../images/bees.jpg";
			break;
		case 4:
			photo = "../images/math.jpg";
			break;
	}
	return photo;
}

function samplePosts() {
    for (let i = 0; i < 5; i++) {
		Post(samplePostName(i), samplePostTitle(i), samplePostComment(i), sampleImage(i));
    }
}

samplePosts();
initializeList();

/*TODO: Problem */
document.getElementsById("likeBtn").onclick = function click() {
	
};
