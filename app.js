
// function to create the input form. This gets appended to the div tag with input id.
// This will have an input element that captures the user-input text.
const createInput = () => {
	let formElement = document.createElement('form');
	formElement.method = 'get';
	let inputElement = document.createElement('input');
	inputElement.id = 'inputText';
	inputElement.type = 'text';
	inputElement.placeholder = 'How was your day?';
	formElement.appendChild(inputElement);
	document.getElementById('input').appendChild(formElement);	
}

// function to create the post button. This gets appended to the div tag with postButton id.
// This will have one button that has a function to capture the user-input text and add to the archive of posts.
const createPostButton = () => {
	let buttonElement = document.createElement('button');
	buttonElement.textContent = 'Post';
	document.getElementById('postButton').appendChild(buttonElement);
}

// function to create the output form. This gets appended to the div tag with output id.
// This will have a table element that will display the archive of posts.
const createOutput = () => {
	let outputElement = document.createElement('table');
	document.getElementById('output').appendChild(outputElement);	
}

// an array of initial posts to display at the beginning.
const posts = [
	"Skate ipsum dolor sit amet, yeah poseur casper nosebone downhill wax coping.",
	"Tom Knox salad grind Saran Wrap ollie hole Christ air dude shoveit smith grind.",
	"Hang up cess slide air axle set rail slide boardslide manual."
];

// 
const initialPosts = () => {
	for (let i = 0; i < posts.length; i++) {
		let rowElement = document.createElement('tr');
		let displayElement = document.createElement('td');
		let deleteElement = document.createElement('button');
		displayElement.textContent = posts[i];
		deleteElement.setAttribute('onclick', 'deletePost('+ i+')');
		deleteElement.textContent = 'X';
		rowElement.appendChild(displayElement);
		rowElement.appendChild(deleteElement);
		document.getElementById('output').appendChild(rowElement);
	}	
};

document.getElementById("postButton").addEventListener("click", (event) => {
  let newPost = document.getElementById("inputText").value;
  posts.push(newPost);
  updatePosts();
});

const postInput = () => {
	return document.getElementById('inputText').value();
}

const updatePosts = () => {
	let m = posts.length - 1;
	let rowElement = document.createElement('tr');
	let displayElement = document.createElement('td');
	let deleteElement = document.createElement('button');
	displayElement.textContent = posts[m];
	deleteElement.setAttribute('onclick', 'deletePost('+ m +')');
	deleteElement.textContent = 'X';
	rowElement.appendChild(displayElement);
	rowElement.appendChild(deleteElement);
	document.getElementById('output').appendChild(rowElement);
}

createInput();
createPostButton();
initialPosts();
createOutput();

// To-do: 13Dec2017
// Clear the input field after post.
// Use localStorage.
// Add more comments.