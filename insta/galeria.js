let publi = 0;

const paragraph = document.getElementById("fotos");

paragraph.innerHTML = `<strong>${publi}</strong> Publicaciones`;

function uploadImages() {
    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;
    const previewContainer = document.getElementById('preview');
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = function(event) {
        const imgElement = document.createElement('img');
        imgElement.src = event.target.result;
        imgElement.style.width = '200px';
        imgElement.style.height = '200px';
        imgElement.style.marginRight = '10px';
        imgElement.style.objectFit = 'cover';
        previewContainer.insertBefore(imgElement, previewContainer.firstChild);
      }

      reader.readAsDataURL(file);
    }
    publi = publi + 1;
    paragraph.innerHTML = `<strong>${publi}</strong> Publicaciones`;
}


  
  