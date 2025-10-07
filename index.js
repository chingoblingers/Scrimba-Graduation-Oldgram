const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const contentScreen = document.getElementById("screen")

function loadContent(){

const contentReel = posts.map(userPost => {
    const {name,username,location,avatar,post,comment,likes} = userPost
    return  `  <section>
    <div class="user container"> 
        <img src="./${avatar}" class="user-icon">
        <div class="user-info">
            <p class="name"> ${name} </p>
            <p> ${location}</p>
        </div> 
    </div>
    <img src="./${post}" class="user-photo">

    <div class="container">

        <div class="interact-icons">
            <img src="./images/icon-heart.png" class="interact">
            <img src="./images/icon-comment.png" class="interact">
            <img src="./images/icon-dm.png" class="interact">
        </div>

        <div class="likes"> 
         ${likes} likes
        </div>
        <div class="status"> 
          <strong> ${username} </strong> ${comment}
        </div>
    </div>     
    </section>
 `
}).join("") 

contentScreen.innerHTML = contentReel

}

loadContent()