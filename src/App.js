import logo from './logo.svg'
import './App.css'
import responsive_redesign from './images/responsive_redesign.png'
import personas from './images/personas.png'
import iterative_design from './images/iterative_design.png'
import development from './images/development.png'

setInterval(changeColor, 3000)

function changeColor() {
  var newColor = getRandomColor()
  document.body.style.backgroundColor = newColor
}

function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const width = 50
const height = 50

let x = 0
let y = 0
let vx = 5
let vy = 5

const xMin = 0
const xMax = window.innerWidth - width
const yMin = 0
const yMax = window.innerHeight - height

const object = document.createElement('div')
object.style.width = `${width}px`
object.style.height = `${height}px`
object.style.backgroundColor = 'red'
object.style.position = 'absolute'
document.body.appendChild(object)

function animate() {

  x += vx
  y += vy

  if (x < xMin || x > xMax) {
    vx = -vx
  }
  if (y < yMin || y > yMax) {
    vy = -vy
  }

  object.style.left = `${x}px`
  object.style.top = `${y}px`

  setTimeout(animate, 1000 / 60)
}

animate()

function App() {
  setTimeout(function () {
    document.querySelector('.overlay').style.display = 'none'
  }, 3000)

  document.addEventListener('mousemove', function (e) {
    var fire = document.querySelector('.fire')
    fire.style.top = e.pageY + 'px'
    fire.style.left = e.pageX + 'px'
    fire.style.opacity = 1
    setTimeout(function () {
      fire.style.opacity = 0
    }, 300)
  })

  var shrinkTime = 5000
  var fontSize = 80
  var shrinkAmount = 1
  var shrinkInterval = 50

  function shrinkText() {
    fontSize -= shrinkAmount
    document.querySelector('.shrinking-text').style.fontSize = fontSize + 'px'

    if (fontSize <= 0) {
      clearInterval(interval)
    }
  }

  var interval = setInterval(shrinkText, shrinkInterval)

  setTimeout(function () {
    clearInterval(interval)
  }, shrinkTime)

  return (
    <div>
      <div class="container">
        <div class="fire"></div>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div class="overlay overlay-text">
        <h1 class="shrinking-text">WELCOME TO HAPPY DRAGON'S DOMAIN</h1>
      </div>
      <div class="portfolio-container">
        <div class="bouncing-text">
          <h1 class="breathe">Welcome to my World of Motion</h1>
        </div>
        <div class="portfolio-section" id="about">
          <h2>About Me</h2>
          <div class="about-me">
            <h3>Who am I?</h3>
            <p>Happy Dragon. Because I'm happy and I'm a dragon.</p>
            <h3>What am I?</h3>
            <p>
              I'm a figurative design student at Brown studying figurative and
              literative design, meaning that my work crosses the intersection
              between the literative and the figurative. Below are some of my
              works I would love to share with you and the rest of the world.
            </p>
          </div>
        </div>
        <div class="portfolio-section slideshow">
          <h2 id="work">My Life's Work:</h2>
          <a
            href="https://happydragon200.github.io/responsive-redesign"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={responsive_redesign} alt="responsive redesign" />
          </a>
          <p class="large">This is a piece displaying a redesigned website that responds to the movement of screen size. It scales on mobile, pc, and tablet platforms.</p>
          <a
            href="https://happydragon200personas.my.canva.site/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={personas} alt="personas" />
          </a>
          <p class="large">This is a piece that builds personas for users using a moving toaster conveyer belt.</p>
          <a
            href="https://www.figma.com/proto/DsgM32mCliKNCXyptgqzoF/Hi-Fi?node-id=1%3A3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={iterative_design} alt="iterative design" />
          </a>
          <p class="large">This one shows a prototype of a redesigned food delivery startup app based in Africa based on comments and feedback from users around the world.</p>
          <a
            href="https://happydragon200.github.io/development/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={development} alt="development" />
          </a>
          <p class="large">This piece is a bakery website that updates based on food added to cart and offers multiple live filtering options. </p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <a class="massive" id="contact" href="mailto:happydragon@gmail.com">Contact Me at happydragon@gmail.com</a>
        </div>
      </div>

      <body></body>
    </div>
  )
}

export default App
