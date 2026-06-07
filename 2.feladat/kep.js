function kepValtoDivKeszito(kezdokepUrl, masodikKepUrl) {
 
    const ujDiv = document.createElement('div');

    
    ujDiv.style.width = '600px';
    ujDiv.style.height = '400px';
    ujDiv.style.backgroundSize = 'cover';
    ujDiv.style.backgroundPosition = 'center';
    ujDiv.style.cursor = 'pointer';
    ujDiv.style.borderRadius = '10px';
    ujDiv.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
    ujDiv.style.transition = 'background-image 0.5s ease-in-out, transform 0.2s ease';
    
    ujDiv.style.backgroundImage = `url('${kezdokepUrl}')`;

    
    ujDiv.addEventListener('click', function () {
        
        ujDiv.style.backgroundImage = `url('${masodikKepUrl}')`;

        
        setTimeout(function () {
            
            ujDiv.style.backgroundImage = `url('${kezdokepUrl}')`;
        }, 2000);
    });

    return ujDiv;
}


const elsoKep = "img/szorfestenger.jpg";
const masodikKep = "img/szorfdeszka.jpg";


const SzuperDiv = kepValtoDivKeszito(elsoKep, masodikKep);


document.body.appendChild(SzuperDiv);