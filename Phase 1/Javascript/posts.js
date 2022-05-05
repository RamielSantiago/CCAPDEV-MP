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

function Post (name, topic, content) {
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
    actions.appendChild(like);
    actions.appendChild(comment);
    actions.appendChild(save);
    buttons.appendChild(actions);
    headerName.innerHTML = name;
    descName.innerHTML = topic;
    contents.innerHTML = content;
    footerInfo.appendChild(contents);
    desc.appendChild(descName);
    footer.appendChild(desc);
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
    Post('Sample', postTitle.value, postContent.value);
    postTitle.value = '';
    postContent.value = '';
});

function samplePosts() {
    for (let i = 0; i < 5; i++) {
        Post('Sample', 'Sample', 'Sample');
    }
}

samplePosts();
initializeList();
