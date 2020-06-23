import endpoints from '../api/APIendpoints';

export const getTouits = (updateTouits) => {
    const getTouitsRequest = new XMLHttpRequest();

    getTouitsRequest.addEventListener('readystatechange', function() {
        if (getTouitsRequest.readyState === XMLHttpRequest.DONE && getTouitsRequest.status === 200) { 
            const tousLesMessages = JSON.parse(getTouitsRequest.responseText).messages;
            let touits = [];
            for (let touit of tousLesMessages) {
                touits.push({
                    "pseudo" : touit.name,
                    "message" : touit.message,
                    // "nbLikes" : touit.likes,
                    // "nbComments" : touit.comments_count,
                    "idtouit" : touit.id
                });
            };
            updateTouits(touits);
        };
    });

    getTouitsRequest.open("GET", endpoints.LI, true);
    getTouitsRequest.send();
}

export const sendTouit = (pseudo, message, updateTouits) => {
    const nouveauMessage = new FormData();
    nouveauMessage.append('name', pseudo.value);
    nouveauMessage.append('message', message.value);

    const postTouitRequest = new XMLHttpRequest();
    postTouitRequest.open("POST", endpoints.SE, true);
    postTouitRequest.addEventListener('readystatechange', function() {
        if (postTouitRequest.readyState === XMLHttpRequest.DONE && postTouitRequest.status === 200 && JSON.parse(postTouitRequest.responseText).error !== undefined) {
            alert(JSON.parse(postTouitRequest.responseText).error);
        };
    });
    postTouitRequest.send(nouveauMessage);
    getTouits(updateTouits);
}

export const getTrendings = (updateTrendings) => {
    const getTrendingsRequest = new XMLHttpRequest();

    getTrendingsRequest.addEventListener('readystatechange', function (){
        if (getTrendingsRequest.readyState === XMLHttpRequest.DONE && getTrendingsRequest.status === 200) { 
            const trendings = Object.entries(JSON.parse(getTrendingsRequest.responseText));
            trendings.sort(function(a, b){
                return b[1]-a[1];
            });
            updateTrendings(trendings);
        };
    });

    getTrendingsRequest.open('GET', endpoints.TR, true);
    getTrendingsRequest.send();
}