const mainDiv = document.getElementById("main-div")
let getNews = () =>
    fetch("https://newsapi.org/v2/everything?q=politics&from=2023-05-24&sortBy=publishedAt&apiKey=2190fc732d284db18dcbb8347a3a1799")
        .then(res => res.json())
        .then(res => {
            const articles = res.articles;
            for (var i = 0; i < articles.length; i++) {
                console.log(articles[i].urlToImage);
            // let { publishedAt, urlToImage, title, content, author} = articles[i]
                if (articles[i].urlToImage) {
                    mainDiv.innerHTML += `
                    <a href="" class="news-link">
                        <div class="news-div">
                            <div class="image-div">
                                <div class="time-div">
                                  <i class="fa-solid fa-clock"></i>
                                  ${moment(articles[i].publishedAt.slice(0, 10), "YYYY-MM-DD").fromNow()}
                                </div>
                                <img src="${articles[i].urlToImage}" alt="" class="news-image">
                            </div>
                            <div class="news">
                               <h5 class="news-title">
                                    ${articles[i].title.slice(0, 30)}...
                               </h5>
                                 <div class="hr-line"></div>
                                    <p>${articles[i].content.slice(0, 150)}....</p>
                            </div>
                            <div class="author-div">
                                <span class="">${articles[i].author ? articles[i].author.split(" ").slice(0, 2).join(" ") : "Sualeh"}</span>
                            </div>
                        </div>
                    </a>
                `
                }

            }

        })
        .catch(err => console.log(err));


//    Title
//   Content
//   Author
// 