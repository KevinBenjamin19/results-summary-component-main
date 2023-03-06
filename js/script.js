
const boxSummaryContent = document.querySelector(".box-summary-content")


async function getText(){
    fetch ("./data.json")
    .then((r) => r.json())
    .then(data => {console.log(data)
    
        data.forEach(({category , score , icon}) => {
        boxSummaryContent.innerHTML += `
        <div class="${category}">
            <div>
            <img src="${icon}" alt="">
            <h3>${category}</h3>
            </div>
            <p> <span> ${score} </span> / 100</p>
        </div>`
           

    });

    });
    

}

getText();