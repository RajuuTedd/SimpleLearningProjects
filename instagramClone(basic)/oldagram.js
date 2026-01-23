const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const feedContainer = document.getElementById("feed-container");

feedContainer.innerHTML = "";

posts.forEach((postData) => {
  const postHtml = `  <section class="post-container">
        <section class="username-name">
          <img src="${postData.avatar}" alt="${postData.name}" class="Avatar" />
          <div class="profile-info">
            <p class="user-name">${postData.name}</p>
            <p class="user-location">${postData.location}</p>
          </div>
        </section>

        <img src="${postData.post}" alt="post by ${
    postData.name
  }" class="Post" />

        <section class="buttons">
          <button class="icon-btn like-btn">
            <img src="images/icon-heart.png" alt="Heart icon" class="icon" />
          </button>
          <button class="icon-btn">
            <img src="images/icon-comment.png" alt="Comment icon" class="icon" />
          </button>
          <button class="icon-btn">
            <img src="images/icon-dm.png" alt="DM icon" class="icon" />
          </button>
        </section>
        
        <p><span class="likes">${postData.likes.toLocaleString()}</span> <b>likes</b></p>
        <p><b>${postData.username}</b> ${postData.comment}</p>
    </section>
  `;

  feedContainer.innerHTML += postHtml;
});
