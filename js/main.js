/* Menu Active Codes */

let targets = document.querySelectorAll('[data-target]')
targets.forEach(element => {
  element.addEventListener('click', () => {
    var target = document.querySelector(element.dataset.target)
    targets.forEach(element2 => {
      var target2 = document.querySelector(element2.dataset.target)
      element2.style.color = 'var(--menu_text_color)'
      target2.style.display = 'none'
    });
    element.style.color = 'var(--menu_active_text_color)'
    target.style.display= 'flex'
  })
})

setInterval(() => {
  console.warn(`  / _____ \\    |____ ____|    / ___ \\     | ____ \\   | |
  / /     \\_\\       | |       / /   \\ \\    | |   \\ \\  | |
  | |               | |      / /     \\ \\   | |   | |  | |
  \\ \\______         | |      | |     | |   | |___/ /  | |
   \\______ \\        | |      | |     | |   |  ____/   | |
          \\ \\       | |      | |     | |   | |        | |
   _      | |       | |      \\ \\     / /   | |        |_|
  \\ \\_____/ /       | |       \\ \\___/ /    | |         _
   \\_______/        |_|        \\_____/     |_|        |_|`);
}, 1000);

setInterval(() => {
  console.log(`  / _____ \\    |____ ____|    / ___ \\     | ____ \\   | |
  / /     \\_\\       | |       / /   \\ \\    | |   \\ \\  | |
  | |               | |      / /     \\ \\   | |   | |  | |
  \\ \\______         | |      | |     | |   | |___/ /  | |
   \\______ \\        | |      | |     | |   |  ____/   | |
          \\ \\       | |      | |     | |   | |        | |
   _      | |       | |      \\ \\     / /   | |        |_|
  \\ \\_____/ /       | |       \\ \\___/ /    | |         _
   \\_______/        |_|        \\_____/     |_|        |_|`);
}, 1000);

var n = localStorage.getItem('on_load_counter');

if (n === null) {
    n = 0;
}

n++;

localStorage.setItem("on_load_counter", n);

document.getElementById('CounterVisitor').innerHTML = n;
