const getCurrentDate = () => {
    let horloge = document.getElementById("horloge");
    let date = new Date();
    let option = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let fulldate = date.toLocaleDateString("fr-FR",option);
    horloge.children[0].innerHTML = `${fulldate} heure : ${hours}:${minutes}:${seconds}`
    setTimeout(getCurrentDate,1000);
}

getCurrentDate();