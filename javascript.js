const button = document.getElementById("btn").addEventListener("click",submitMovive)

function submitMovive(){
    const title = document.getElementById("Movietitle").value
    const url = document.getElementById("Movieurl").value
    if ( title === '' || url === '') {
        alert('Please fill in both fields.');
        return;
    }

    const paragraph = document.createElement("p")
    paragraph.textContent = title;

    const link = document.createElement("a")
    link.href = url;

    

    const container = document.getElementById("image_container")
    const imageItem = document.createElement('div');
    imageItem.className = "image_item";

    imageItem.appendChild(link);
    imageItem.appendChild(paragraph)
    container.appendChild(imageItem)
   
}

   







