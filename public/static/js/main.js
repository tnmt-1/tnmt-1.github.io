[...document.getElementsByClassName('colorToggle')].forEach(e => {
  e.addEventListener('click', function () {
    let bodyTag = document.getElementsByTagName('body')[0];

    if (bodyTag.classList.contains('lightMode')) {
      bodyTag.classList.replace('lightMode', 'darkMode');
      document.getElementById('color-scheme-light').style.display = 'none';
      document.getElementById('color-scheme-dark').style.display = 'block';
    } else {
      bodyTag.classList.replace('darkMode', 'lightMode');
      document.getElementById('color-scheme-light').style.display = 'block';
      document.getElementById('color-scheme-dark').style.display = 'none';
    }
  })
});

function handleDarkMode() {
  let bodyTag = document.getElementsByTagName('body')[0];
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    bodyTag.classList.add('darkMode');
    document.getElementById('color-scheme-light').style.display = 'none';
    document.getElementById('color-scheme-dark').style.display = 'block';
  } else {
    bodyTag.classList.add('lightMode');
    document.getElementById('color-scheme-light').style.display = 'block';
    document.getElementById('color-scheme-dark').style.display = 'none';
  }
}

window.onload = handleDarkMode;
