(function() {
    const button = document.getElementById("get_emoji");
    button.addEventListener("click", (e) => {
        const token = document.getElementById("token").value;
        const url = "https://slack.com/api/emoji.list?token=" + token;
        fetch(url).then((res) => {
            const json = res.json().then((body) => {
                const emojis = body.emoji;
                const images = Object.keys(emojis).map((name) => {
                    const url = emojis[name];
                    return {
                        name: name,
                        url: url
                    };
                });
                app.images = images.filter((i) => {
                    return i.url.match(/http.*/);
                });
            });;
        });
    });
    const app = new Vue({
        el: '#table',
        data: {
            images: []
        },
    });
})();
