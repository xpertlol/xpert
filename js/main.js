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

const pageviewsCount = document.getElementById('pageviews-count');
const visitsCount = document.getElementById('visits-count');

if (sessionStorage.getItem('visit') === null) {
  // New visit and pageview
  updateCounter('type=visit-pageview');
} else {
  // Pageview
  updateCounter('type=pageview');
}

function updateCounter(type) {

  fetch('http://127.0.0.1:3002/api?'+type) // Dynamic request with URL parameter
    .then(res => res.json())
    .then(data => {
      pageviewsCount.textContent = data.pageviews; // Display pageviews to user
      visitsCount.textContent = data.visits; // Display visits to user
    })

}

sessionStorage.setItem('visit', 'x');
// 'visit' item persists in storage for the remainder of the user 