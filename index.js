const [navigation] = document.getElementsByClassName('navbar-collapse');
document.addEventListener('click', () => {
  if (navigation.classList.contains('show')) {
    navigation.classList.remove('show');
  }
});
