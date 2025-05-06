// Create images

function create_images() {
    var imgs = [];

    for (i = 1; i <= 29; i++) {
        imgs.push(`./images/${i}.jpeg`);
    }

    for (i = 0; i < imgs.length; i++) {
        content = `<img src="${imgs[i]}" width="80%" class="portfolio_slide"></img>`;

        document.getElementById("design-portfolio").innerHTML += content;
    }
}

create_images();
