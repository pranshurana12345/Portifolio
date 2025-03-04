
const rcCardDrewId = "rc-card-drew"
const rcCardWroteId = "rc-card-wrote"
const cardDrew = document.getElementById(rcCardDrewId)
const cardWrote = document.getElementById(rcCardWroteId)
cardDrew.addEventListener("click", (e) => {
    openModal("drew", rcCardDrewId)
})
cardWrote.addEventListener("click", (e) => {
    openModal("wrote", rcCardWroteId)
})
//
function openModal(type, cardId) {
    console.log({ type, cardId });
    const prefix = "Pieces I recently "

    document.getElementById("modalTitle").innerText = prefix + type;
    document.getElementById("modalOverlay").classList.add("show");
    document.getElementById("modal").classList.add("show");

    let card = document.getElementById(cardId)
    card.classList.add("rc-card-active")

    fetchBlog()
}

function closeModal() {
    document.getElementById("modalOverlay").classList.remove("show");
    document.getElementById("modal").classList.remove("show");
    let cards = document.querySelectorAll('.rc-card')
    for (const card of cards) {
        card.classList.remove("rc-card-active")
    }
}

// Close modal when clicking outside of it
document.getElementById("modalOverlay").onclick = function (event) {
    if (event.target === this) {
        closeModal();
    }
};

let contentBox = document.getElementById('rc-content-box')


function fetchBlog() {


    let api4 = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pritam-debnath'
    fetch(api4).then((res) => {
        console.log({ res })
        return res.json()
    }).then((data) => {
        console.log({ data })

        let items = data.items
        for (const item of items) {
            let contentElement = document.createElement('a')
            contentElement.href = item.link
            contentElement.classList.add('rc-text-element')
            let itemTitle = item.title


            fadeTypingAnimation(contentElement,
                itemTitle
                , 100);

            contentBox.appendChild(contentElement)

        }

    }).catch((err) => {
        console.log({ err })

    })
}