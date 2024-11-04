let button = document.getElementById('submit-btn');
let inpBox = document.getElementById('input-box');
let farValue = document.getElementById('far-value');
let pmt = prompt('Type juman and press ok for next step');
if (pmt == `juman`) {
  button.style.visibility = 'visible';
  inpBox.style.visibility = 'visible';
  button.addEventListener('click', function () {
    let celcius = Number(inpBox.value);
    let far = (celcius * 9) / 5 + 32;
    if (inpBox.value !== null) {
      farValue.textContent = far;
    } else {
      document.write('dont use negative values ');
    }
  });
} else {
  alert('Ulta falta manush er name lekhile hoito no jibe dii ebe lekho');
}
