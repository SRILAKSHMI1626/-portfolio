// small interactivity
document.getElementById('year').innerText = new Date().getFullYear();

function submitForm(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  // this demo doesn't actually send emails; just show a thank you
  alert(`Thanks ${name}! I will reach you soon. (Demo)`);
  e.target.reset();
}
