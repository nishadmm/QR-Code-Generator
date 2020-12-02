// Generate QR code
function generateQRCode() {
  // Input value
  const input = document.getElementById('input').value;

  // Get QR from API
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;

  if (input === '') {

    // Show alert
    removeCurrentAlert();
    const div = document.createElement('div');
    div.className = 'alert';
    div.appendChild(document.createTextNode('Please give the text'));
    const main = document.querySelector('.main');
    const header = document.querySelector('h1');
    main.insertBefore(div, header);

    setTimeout(() => {
      removeCurrentAlert();
    }, 4000);

  } else {
    // Show QR
    document.getElementById('qr').setAttribute('src', url);

    //or
    // var img = document.getElementById('qr');
    // img.src = url;
  }

  // Remove current alert
  function removeCurrentAlert() {
    const current = document.querySelector('.alert');
    if (current) {
      current.remove();
    }
  }
}