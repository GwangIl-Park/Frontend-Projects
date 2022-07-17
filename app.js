const menuBar = document.getElementsByClassName('container-menubar')[0];
const menu = document.getElementsByClassName('container-menu')[0];
const sns = document.getElementsByClassName('container-sns')[0];

function onClickMenu() {
  menu.classList.toggle('active');
  sns.classList.toggle('active');
}

menuBar.addEventListener('click', onClickMenu);
