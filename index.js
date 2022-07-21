
const width = 28
const grid = document.querySelector('.grid')
const scoreDisplay = document.getElementById('score')
scoreDisplay.classList.add("ss")
let squares = []
let score = 0


const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

function createBoard() {

    for(let i =0;i < layout.length;i++)
    {
        const square = document.createElement("div")

        grid.appendChild(square)
        squares.push(square)

      if(layout[i] === 0)
      {
          squares[i].classList.add('pac-dot')
      }
      else if(layout[i] === 1)
      {
          squares[i].classList.add("wall")
      }
      else if(layout[i] === 2)
      {
          squares[i].classList.add("ghost-lair")
      }
      else if(layout[i] === 3)
      {
          squares[i].classList.add("power-pellet")
      }

    }

}

createBoard()


let pacmanCurrentIndex = 490

squares[pacmanCurrentIndex].classList.add("pacman")

function control(e) {
    squares[pacmanCurrentIndex].classList.remove('pacman')
    switch(e.keyCode) {
        case 40:
        
        if ( !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair') && 
            !squares[pacmanCurrentIndex + width].classList.contains('wall') 
        &&  pacmanCurrentIndex + width < width * width) 
        pacmanCurrentIndex += width
        break
        case 38:
       
        if (!squares[pacmanCurrentIndex - width].classList.contains('ghost-lair') &&   
            !squares[pacmanCurrentIndex - width].classList.contains('wall') 
        &&pacmanCurrentIndex - width >=0) 
        pacmanCurrentIndex -= width
        break
        case 37: 
        console.log('pressed left')
        if(!squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair') && 
             !squares[pacmanCurrentIndex - 1].classList.contains('wall') 
             && pacmanCurrentIndex % width !==0) 
             pacmanCurrentIndex -=1

             if (pacmanCurrentIndex === 364) {
                pacmanCurrentIndex = 391
            }
        break
        case 39:
        console.log('pressed right')
        if( !squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair') &&  
            !squares[pacmanCurrentIndex + 1].classList.contains('wall') && pacmanCurrentIndex % width < width -1)
             pacmanCurrentIndex +=1

             if (pacmanCurrentIndex === 391) {
                pacmanCurrentIndex = 364
            }
        break
    }
    squares[pacmanCurrentIndex].classList.add('pacman')
    pacDotEaten()
    powerPelletEaten()
    wonGame()
}
document.addEventListener('keyup', control)




function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
        squares[pacmanCurrentIndex].classList.remove('pac-dot')
        score++
        scoreDisplay.innerHTML = ("  ",score)
    }
}

function powerPelletEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
        squares[pacmanCurrentIndex].classList.remove('power-pellet')
        score += 10
        ghosts.forEach(ghost => ghost.isScared = true)
        scoreDisplay.innerHTML =("  ",score)
        setTimeout(unScareGhosts,10000)
    }
}
function unScareGhosts() {
    ghosts.forEach(ghost => ghost.isScared = false)
}

class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN
    }
}

const ghosts = [
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500)
]


ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghost')
})

ghosts.forEach(ghost => moveGhosts(ghost))

function moveGhosts(ghost)
{
    const directions = [-1,+1,-width,+width]
    let direction = directions[Math.floor(Math.random()* directions.length)]

   
    ghost.timerId = setInterval(function(){

        if (
            !squares[ghost.currentIndex + direction].classList.contains('wall') &&
            !squares[ghost.currentIndex + direction].classList.contains('ghost')
        )
        {
        squares[ghost.currentIndex].classList.remove(ghost.className)
        squares[ghost.currentIndex].classList.remove('ghost',"scared-ghost")
        ghost.currentIndex += direction

        squares[ghost.currentIndex].classList.add(ghost.className)
        squares[ghost.currentIndex].classList.add('ghost')
        }
        else
        {
         direction = directions[Math.floor(Math.random() * directions.length)]
        }

        if (ghost.isScared) {
            squares[ghost.currentIndex].classList.add('scared-ghost')
        }

        if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pacman')) {
            
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
            
            ghost.currentIndex = ghost.startIndex
           
            score +=100
           
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        }
        wonGame()
        gameOver()
        
    },ghost.speed)
   
}

function gameOver()
{
    if(squares[pacmanCurrentIndex].classList.contains("ghost") && 
    !squares[pacmanCurrentIndex].classList.contains("scared-ghost"))
    {
       
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keyup', control)
        scoreDisplay.classList.add("LOST")
        scoreDisplay.innerHTML = "  youlose  " +score


    }
}

function wonGame()
{
    if(score >= 74)
    {
       
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keyup', control)
        scoreDisplay.innerHTML = "you Won" + score
        scoreDisplay.classList.add("won")
    }
}
