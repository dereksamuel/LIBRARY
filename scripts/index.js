let input = undefined;
let form = undefined;
let main = undefined;

window.addEventListener('load', () => {
  main = document.querySelector('.Hero');
  form = document.querySelector('.Menu__form');
  input = document.querySelector('.Menu__form__search');
  form.addEventListener('submit', sendQuery);
});

async function sendQuery(e) {
  e.preventDefault();
  const result = await fetch(`http://localhost:8005/library?search=${input.value}&type=title`);
  if (result.status === 500) {
    return alert('NO TENEMOS ESTE LIBRO');
  }
  window.location.href = `http://localhost:8005/library?search=${input.value}&type=title`;
}
