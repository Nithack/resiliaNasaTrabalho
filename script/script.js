function getNasaApiImagem() {
    try {
        let inputData = document.getElementById("dateDay").value
        let image = document.getElementById("imagem");
        let description = document.getElementById('description')
        let urlNasa = `https://api.nasa.gov/planetary/apod?date=${inputData}&api_key=oscmtG51PqUGmKUAg7tSHQBqKz2kWSLZEQOCvtaa`
        let nasaAPI = $.get(urlNasa, (data) => {
            let newSrc = data.url
            let newDescription = data.explanation
            console.log(data)
            image.src = newSrc
            description.innerHTML = newDescription
            swapScream()
        });
    } catch (error) {
        alert('ouve um erro tente novamente mais tarde')
    }



}
function swapScream() {
    var boxContent = document.getElementById("conteudo");
    var boxSearch = document.getElementById("pesquisa");
    boxSearch.classList.toggle('hide')
    boxContent.classList.toggle('hide')


}

