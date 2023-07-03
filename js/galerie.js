function galerie(e){
    document.getElementById("misEnAvant").classList.remove('hidden');
    document.getElementById("photoAvant").src = e.srcElement.src;
}
function galeriePrecedent(){
    photos = document.getElementsByClassName("photo-galerie");
    sourceImage = document.getElementById("photoAvant").src;
    console.log(photos.length);
    for(i=0; i<photos.length; i++){
        if(photos[i].src == sourceImage){
            if(i > 0){
                var photoAAfficher = photos[i - 1];
            }
            else{
                var photoAAfficher = photos[photos.length - 1];              
            }
        }
    }
    document.getElementById("photoAvant").src = photoAAfficher.src;
}
function galerieSuivant(){
    photos = document.getElementsByClassName("photo-galerie");
    sourceImage = document.getElementById("photoAvant").src;
    console.log(photos.length);
    for(i=0; i<photos.length; i++){
        if(photos[i].src == sourceImage){
            if(i < photos.length){
                var photoAAfficher = photos[i + 1];
            }
            else{
                var photoAAfficher = photos[0];              
            }
        }
    }
    document.getElementById("photoAvant").src = photoAAfficher.src;
}
function fermerGalerie(){
    document.getElementById("misEnAvant").classList.add('hidden');
}