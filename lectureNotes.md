## New York University Abu Dhabi    
## Interactive Media Program    
## Course title: Introduction to interactive Media  
Course number: IM-UH 1010   
Section: 1    
Credit Hours: 4         
Prerequisites: None       

Shortcut to [today's lecture](lectureNotes.md/#todays-lecture)  

Course website: [https://github.com/michaelshiloh/IntroductionToInteractiveMedia](https://github.com/michaelshiloh/IntroductionToInteractiveMedia)      
Wordpress site: [intro.nyuadim.com/](https://intro.nyuadim.com/)

Instructor: Michael Shiloh mshiloh@nyu.edu    
Office hours: By appointment  
Meeting times:    
	12:45-2:00 Tuesday  
	11:20-2:00 Thursday     
Session: Spring 2023  
Class location: C3-029 (IM Lab)  
- [Zoom](TBA)
- [Syllabus](https://intro.nyuadim.com/syllabus/)  
- [Weekly schedule](https://intro.nyuadim.com/spring-22-weekly-schedule/)  
- [Example sketches](https://editor.p5js.org/michaelshiloh/sketches)
- [Lecture notes](lectureNotes.md)
- [Previous sessions](previousSessions/previousSessions.md)

**Everything here is subject to change**


This document: Lecture notes

### Tuesday 24 January 2023

#### Administration
Attendance

#### Introduction to class
* Join Discord
* What are some examples of IM projects? 
	Spend a few minutes Googling 
	and put links in Discord
* What is IM?
	- Discussion
* Homework, projects, and grading
	- Most of you come into this class with different 
		backgrounds, skills, and knowledge, so 
		in IM, we grade by effort and progress, 
		not by a fixed level of accomplishment.
		- Challenge: How do I evaluate evaluate effort and progress? 
			- Discussion
	- In IM we strongly encourage experimentation, thinking outside the box,
		and risk taking. 
		However taking risks is only possible 
		if failure doesn't have catastrophic results. 
		If failure results in a poor grade, 
		how does that encourage risk taking?
		- Discussion
		- MVP
* Phone and laptop policies
	- Discussion

* introductions

- Syllabus etc.
- **Connect to Zoom 10 minutes early**
	- This is to make sure you have time to fix any potential Zoom issues
	- You may keep your camera and mic turned off until class time

#### What’s the class about?

<ul>
 	<li>
Digital computation beyond computers (sometimes called "physical computing") considering humanistic needs in design and usability</li>
 	<li>
Computers traditionally lacked knowledge of outside world beyond a keyboard, mouse</li>
<li>Look critically at products and designs</li>
 	<li>
As artists and designers, we can explore new paradigms of interaction with machines and each other</li>
 	<li>
Relatively easily and inexpensively explore creative computation through open source software and hardware</li>
 	<li>
No background needed, strong DIY attitude</li>
 	<li>
Low barrier to entry, high ceiling</li>
</ul>
- Examples
<ul>
 	<li>Carlos Guedes' wonderful <a href="https://vimeo.com/235763130">Phobos</a>, Orquestra Robótica Disfuncional (1 min)</li>
 	<li>Sudhu Tewari's <a href="https://www.youtube.com/watch?v=MjNB3nKPMb8" >Yasmin Electro Mechanical Sequencer</a></li>
 	<li>List of <a href="http://eat.cca.edu/" >inspirational movies</a> collected by <a href="http://www.ultrafuzz.net/" >Barney Haynes</a> (also <a href="https://vimeo.com/barneyhaynes" >here</a>) and shown at his interface classes.</li>
 	<li>List collected by <a href="https://github.com/zamfi">J.D. Zamfirescu</a>
<li><a href="http://www.youtube.com/watch?v=zkpH1BjD6Wc" >Tree-climbing robot</a></li>
<li><a href="http://www.youtube.com/watch?v=tOsNXg2vAd4#t=120" >Insect robot</a></li>
<li><a href="http://www.youtube.com/watch?v=YblSltHDbIU" >Treadbot</a></li>
<li><a href="http://www.future-cities-lab.net/projects/#/murmurwall/" >Murmur Wall</a></li>
<li><a href="http://vimeo.com/72826106" >Floating Couch</a></li>
<li><a href="https://www.youtube.com/watch?v=BZysu9QcceM#t=36" >Wooden Segment Mirror</a></li>
<li><a href="https://www.youtube.com/watch?v=pNkz8wEJljc" >Generative design</a></li>
<li><a href="https://vimeo.com/71044541" >Textile weaving</a></li>
<li><a href="https://www.youtube.com/watch?v=czuhNcNU6qU" >Projection mapping</a></li>
<li><a href="http://www.youtube.com/watch?v=sLVXmsbVwUs#t=20" >Laser
harp</a></li>
<li><a href="http://vimeo.com/57082262#at=130" >Arc-o-matic</a></li>
<li><a href="https://www.youtube.com/watch?v=w4cdbV2oaEc" >Eggbot</a></li>
<li><a href="http://www.youtube.com/watch?v=kx9D74t7GD8#t=89"
>Textspresso</a></li>
<li><a href="http://www.youtube.com/watch?v=pCC1GXnYfFI#t=11" >Shapoko / tinyg</a></li>
<li><a href="http://www.youtube.com/watch?v=NAbiAzYhTOQ" >Makerbot Replicator</a></li>
<li><a href="https://www.youtube.com/watch?v=0DNkbZvVYvc"
>Roomba</a></li></li>
 	<li><a href="https://www.youtube.com/watch?v=1G0MzlfMPuM" >Golan Levin: Art that looks back at you</a></li>
 	<li><a href="https://www.youtube.com/watch?v=PV_w38ldZaE" >Drawdio</a></li>
 	<li>Claire Neel's <a href="https://youtu.be/lYERKTf5YtI" >reactive eye</a></li>
 	<li>Professor Aaron Sherwood's <a href="http://aaron-sherwood.com/works/firewall/">Reactive Wall</a></li>
 	<li><a href="http://melissafelderman.com/digitalgraffitiwall/index.html">Digital Graffiti Wall</a></li>
 	<li><a href="http://www.willjfield.com/itp-2/explorer-space-simulator/">Space Simulator</a></li>
 	<li><a href="https://vimeo.com/114414122">Wind based jug organ</a></li>
 	<li><a href="http://www.yining1023.com/?p=392">Atmospheric Touch Lamp</a></li>
 	<li><a href="http://andysigler.com/projects/dipinator/">The Dipinator</a></li>
 	<li><a href="http://www.gabebc.com/Jitterbox">Jitterbox</a></li>
 	<li><a href="http://macdavel.blogspot.ae/">Youtube DDR</a></li>
 	<li><a href="https://lilikha.wordpress.com/">I Hand a Dream</a></li>
 	<li><a
	href="https://www.snibbe.com/art/boundaryfunctions#:~:text=Boundary%20Functions%20is%20a%20work,dynamically%20changing%20as%20they%20move">Boundry Function</a></li>
 	<li><a
	href="http://www.carlpisaturo.com/index.html">Carl Pisaturo</a></li>
 	<li><a
	href="https://twitter.com/fastworkers6/status/1570198046327046144">Servo
	Motor</a></li>
</ul>
</li>
</ul>

### Thursday 26 January
#### Today
- Introduction to programming in p5.js
- Primitive drawing functions
- How to tell where you are on the canvas
- Homework (see weekly schedule above)

#### Let's get started

##### Simple shapes in p5.js

Open the p5.js editor by visiting editor.p5.js

If you don't already have an account on p5.js you might want to do so now, or
after class. If you do it now you can save what you do in class

type this in:

```
function setup() {
  circle(50, 80, 30);
  square (80, 30, 40);
}
```

- `circle()`
- `square()`
- `ellipse()`
- `rect()`
- `fill()`

Spend a few minutes playing with this

##### Variables

```
function setup() {
  createCanvas(200,200);
  let foo = 20;
  circle(50,50, foo);
  square (90, 90, foo);
}
```

Now let's break this down one step at a time
- `setup()`
- `circle()`
- `let`
- `createCanvas()`

More primitive drawing functions

- `triangle()`
- `line()`
- `point()`

What does this all mean?
- Functions
- Variables
- Arguments or parameters
- Order of execution
- Computer does what you tell it to do, not what you are thinking
	- Errors happen when what you tell it is different from what you want it to
		do

Controlling color, fill, and stroke

- `stroke()`
- `noStroke()`
- `fill()`
- `arc(100, 100, 100, 100, 0, 180)`
- `arc(100, 100, 100, 100, 0, radians(180), CHORD)`
- `background(240)`

##### In-class exercise

Working in pairs, try to make a simple picture of a house 

##### What did you discover?
- Anything surprising?
- Any questions?

##### Big hint #1
Sometimes it's hard to know the coordinates of where you want to put stuff.
Wouldn't it be nice if you could put your mouse somewhere, and have the
computer tell you the coordinates of that point?

Good news everyone!

```
function setup() {
  createCanvas(200, 200);
  background(220);
  print(mouseX + "," + mouseY);
}
```
What's going on here:
- `print()`
- Built-in variables `mouseX` and `mouseY`
- Build strings of characters using the `+` sign

but that's not very useful. Why does it only print the coordinates once?
- Hint: the function `setup()` only runs once at the beginning. Maybe there is
	another function that runs more than once?

```
function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(220);
  print(mouseX + "," + mouseY);
}
```

# Woah!

If the `draw()` function runs continuously, can we use it to make things
change?

```
function setup() {
  createCanvas(200, 200);
	let xPosition = 0;
}

function draw() {
  circle(xPosition, 50, 30);
	xPosition = xPosition + 1;
}
```

##### Why didn't that work?

Variable scope:

```
let xPosition; // this is now a global variable

function setup() {
  createCanvas(200, 200);
	xPosition = 0; // don't recreate the variable, but do initialize it
}

function draw() {
  circle(xPosition, 50, 30);
	xPosition = xPosition + 1;
}
```

##### Built-in variables
- `mouseX`, `mouseY`
- `width`, `height`
- many others; we will discover more as we go along

Javascript is not a typed language: you don't need to declare
	a variable's type
- `let myNumber = 4.5;`
- `let myString = "the quick brown fox";`
- `let myArray = ["the", "quick", "brown", "fox"];`
- `let myRandomNumber = random(255);`
- `let myRandomNumber = round(random(255));`

It's important to be aware of the difference between a variables name and
a variable's value

How can we find out what a variable's value is?
`print()` 

##### Notes:

- Local vs. Global variables
- Built-in variables

````
// Example usage of a global variable

let count; // this is now a global variable

function setup() {
  circle(50, 50, 30);
  count = 7; // the variable is initialized here
}

function draw() {
  count = count + 1; // not algebra!
  // The result of the right hand side calculation
  // replaces whatever value was stored in the variable
  // on the left side of the '=' sign
  // end result: the variable "count" is incremented by 1

  print (count);
}
````

### Tuesday 31 January
#### Today
- Homework
- Lecture logistics and rules
- Animation, Conditionals, Loops

#### Homework
- [Homework schedule](https://intro.nyuadim.com/). Note the deadline
- Late homework
- Let's look at [your
	homework](https://github.com/michaelshiloh/IntroductionToInteractiveMedia/blob/master/studentAccounts.md)

#### Lecture logistics and rules
Many of you already know the material we cover in these first few weeks
so why sit through class?
- This is not a coding class. This class includes design and critique
- Since you already know how to code, your creativity
	and critical thinking will be judged to a high standard
- Today we will try something different:
	I will give a very quick overview of the material to be 
		covered and then give you challenges which you are expected to solve in
		creative ways. We will all then engage in critique of your works.
- I expect full attention and engagement. Doing something not related to class
	is rude, disrespectful, and will result in a reduced grade. The
	cellphone/laptop rules that we discussed last Tuesday is really about
	attention and respect, not about technology

#### Animation, Conditionals, Loops

##### Animation

Use the `draw()` function to draw something different in each frame. This can
be the location of a shape but you can manipulate anything such as color also:

The  `draw()` function is called once per frame. Think of it as drawing a new
page on a ["flip book"](https://en.wikipedia.org/wiki/Flip_book)

````
let foo = 0;

function setup() {
  createCanvas(300, 300);
}

function draw() {
  ellipse(foo, 50, 40, 40);
  foo = foo + 1;
}
````

By default, the previous frame is not erased. Sometimes this is useful.
Use the `background()` function to "paint" over any previous drawings. 

````
function setup() {
  createCanvas(500, 500);
}

let triangleTopLeftX = 0;
let redValue = 255;

function draw() {
  // erase previous drawings
  background(10, 255, 255);

  // Move the triangle
  triangleTopLeftX = triangleTopLeftX + 1;

	// If the triangle reaches the right edge, move to the left edge
  if (triangleTopLeftX >= width) {
    triangleTopLeftX = 0;
  }

  // Change the value of red
  redValue = redValue - 1;

	//If red reaches a certian level, reset it
  if (redValue === 55) {
		redValue = 255;
	}

  // Select the fill for the triangle
  fill(redValue, redValue - 100, redValue - 100);

  // Draw the triangle
  triangle(
    triangleTopLeftX,
    20, // top left corner
    triangleTopLeftX + 100,
    30, // top right corner
    triangleTopLeftX + 50,
    200
  ); // bottom corner
  
  // Select the fill for the circle
  fill(10,20, 240);

  // Draw the circle
  circle(mouseX, mouseY, 30);
  print("mouse coordinates = " + mouseX + ", " + mouseY);
}

````

##### How often does the `draw()` loop run?

````
function setup() {
  frameRate(10);       // frameRate() is a function
  print(frameRate()); // framerate does not change immediately
}

function draw() {
  print(frameRate());
}
````

##### Conditionals 

One of the most important features of computer programming is the ability to
do different things based on the outcome of some previous event 

````
function setup() {
  createCanvas(300, 300);
}

function draw() {
  if (mouseIsPressed === true) {
    background(0, 0, 255);
  } else {
    background(200, 0, 0);
  }
}
````

**Notes**:
1. `mouseIsPressed` is another built-in variable. There are many others.
1. `mouseIsPressed` is a new type of data, namely a `boolean`, 
	which means it has
	 only one of two values, `true` or `false`
1. Note that `{` and `}` indicate the blocks
1. The `else` part of an `if()` statement is optional (what happens if we
	 remove it?)

In class exercise:
- Using the cursor to draw
- Now use a mouse press to clear the screen
- Clear the screen if the mouse is pressed inside a certain circle
- Combine these to create a primitive painting program

[Here](https://editor.p5js.org/michaelshiloh/sketches/izE0kdT_Q) is the
example that we developed in class

### Thursday 2 February

#### Today
- Questions, review, etc
- Painting program
- Loops

##### Painting program
- Vladimir's
[paint program](https://editor.p5js.org/vsharkovski/sketches/0E5JFi1Pk)
- Jun's
[paint program](https://editor.p5js.org/ojmjunming/sketches/8GQSFuizb)

##### Loops

- `while()` is like `if()` but it keeps on doing it as long as condition is true
	- Whereas `if()` does it only once
	- The assumption is that something changes while you're doing the loop which
		might eventually make the condition false, otherwise you'd be stuck there
		forever
- `for()` is a variation in structure but basically does the same

````
function setup() {
  createCanvas(300, 300);

  let foo = 50; // create and initialize a variable

  while (foo < width) { // keep going as long as the condition is true
    ellipse(foo, 50, 40, 40);
		// modify the variable so something different happens next time
    foo = foo + 50; 
  }
}
````

1. You should get in the habit of giving meaningful names to your variables.
	1. What is a better name for the variable foo?
1. What would happen if you replace the `while()` with `if()`?

Another example:

````
function setup() {
  let done = false;
  let counter = 0;
  while (!done) {
    print(counter++);
    if (counter >= 10) {
      done = true;
      print("done");
    }
  }
}
````

There is another way to make a loop using the keyword `for()`. The `for()`
loop structure combines the initialization step and the incrementation step
into the `for()` loop construction:

````
function setup() {
  createCanvas(300, 300);

  // initialization, condition, and incrementation all in one line
  for (let foo = 50; foo < width; foo = foo + 50)  {
    ellipse(foo, 50, 40, 40);
  }
}
````

Which should you use? Whichever is easier for you to understand. Remember that
**most of the time spent programming is fixing problems**, and **whatever you
understand best will probably have fewer problems**.

Both `for()` loops and `while()` loops can be nested, meaning a loop inside a
loop:

````

function setup() {
  createCanvas(700, 700);
  background(230);
  fill(0);

  let yPos = 0;
  let xPos = 0;

  for (yPos = 30; yPos < height; yPos=yPos + 40) {
    for (xPos = 20; xPos<width; xPos=xPos + 40) {
      circle(xPos,yPos, 5);
    }
  }
}

````

Note that I've done all the above looping examples in `setup()` and not in
`draw()`, so there is no animation in these examples. Loops can be used in
`draw()` as well.

##### In class exercise

1. Create a work of art inspired by these early examples of computer graphics: 
- [COMPUTER_GRAPHICS_AND_ART_Aug1977](http://dada.compart-bremen.de/docUploads/COMPUTER_GRAPHICS_AND_ART_Aug1977.pdf)
- [ProgrammInformation21_PI21](http://dada.compart-bremen.de/docUploads/ProgrammInformation21_PI21.pdf)
- [COMPUTER_GRAPHICS_AND_ART_May1976](http://dada.compart-bremen.de/docUploads/COMPUTER_GRAPHICS_AND_ART_May1976.pdf)

1. Create a work of art inspired by Aaron's [examples](https://github.com/aaronsherwood/introduction_interactive_media/tree/master/processingExamples)


### Tuesday 7 February

#### Today
- Functions
- Arrays
- Object Oriented Programming

#### Functions

Every time you use one of the built-in 'commands', you are really using (or
more properly 'calling') a built-in function. Functions are a very important
building block of programming, and in addition to using built-in functions,
you can also create your own. In fact, you've already been doing that, when
you created the `setup()` and `draw()` functions. In the case of
`setup()` and `draw()` you have to use those names, but when you create other
functions you can make up your own names. Just like variables names, good 
function names make your programs easier to understand.

Why create your own functions?

- Reuse (if it's something you might do again)
- Clarity (remember your three important audiences: yourself, others learning
	from you, me when I grade your work)
- Easier to debug (what is debugging?)
	- One of the most powerful ways to approach
	a bug is to reproduce it with simplest possible example. 
	This is much easier when the thing that's causing
	the problem is already a function.
- Modularity
- Flexibility (with good choice of parameters)

````
function setup() {
  createCanvas(300, 300);

  // initialization, condition, and incrementation all in one line
  for (let foo = 50; foo < width; foo = foo + 50)  {
    rect(foo, 50, 40, 40);
    line(foo, 50, foo+20, 30);
    line(foo+20, 30, foo+40, 50);
  }
}
````

Now let's make a function called `drawOneHouse()`. If we want to
draw a house at different locations, we need a way to tell
the function `drawOneHouse()` where to put the house. Functions accommodate
this by allowing us to pass information into the function by putting 
that information in the parenthesis. In the function, we store this
information in temporary variables that we can use in the function:

````
function setup() {
  createCanvas(300, 300);

  for (let foo = 50; foo < width; foo = foo + 50) {
    drawOneHouseAt(foo);
  }
}

function drawOneHouseAt( x) {
  rect(x, 50, 40, 40);
  line(x, 50, x+20, 30);
  line(x+20, 30, x+40, 50);
}
````

**Notes**
1. I've said this before and I'll keep saying: 
	**Choose descriptive names for your variables and functions!** 
	`foo` is a bad name, `xPos` is a good name,
	 `houseXPos` is a better name.
1. The value of `foo` (50, 100, 150 ...) is the information passed to the
	 function so that the function can do it's work. The proper name for this
	 information is an **argument**
1. The variable `x` is a temporary variable that **only exists in the function**.
	 This variable is used to store the argument that was passed into the
	 function so that the function can do its work. Once the function is
	 finished, this variable is no longer needed and is destroyed. 
	 A variable used in this way is called a **parameter**
1. Functions may take zero, one, or multiple arguments. When you write 
	a function, you decide how many arguments you need. For example, we might
	have included the house size or roof height or house y location. (Of course
	when you use functions that someone else wrote 
	you must use the proper number of parameters.)
1. Functions can return information as well, for example the `random()`
	 function. Functions can either return one piece of information, or none.
	We will see later how to do this. 

#### Variable Scope (again)

```
let foo;  // this is a global variable, visible in all functions

function setup() {
  foo = 7;
}

function draw() {

  print(foo);

  let bar; // this is a local variable, visible only inside of draw()

  for (let i = 0; i < width/2; i++) { 
    // i is a local variable visible only inside this for() loop
    ellipse(i, height/2, 10,15);
  }
}
```

#### Arrays

[Really simple array
example](https://editor.p5js.org/michaelshiloh/sketches/8TB1ONGFA)


Why is it better to write:

```
 if ("d" == key) {
```

rather than:

```
 if (key == "d") {
```

#### Object oriented programming

A simple bouncing ball example:
1. First, let's make a ball bounce off all 4 walls of the canvas
2. Identify carefully and isolate what's in `setup()`, 
	what does the moving, and what does the drawing?

```
function setup() {
  createCanvas(400, 400);
  xPos = width / 2;
  yPos = random(100, 300);
  xSpeed = 4;
  ySpeed = 7;
}

function draw() {
  background(220);

  // move the ball
  xPos += xSpeed;
  yPos += ySpeed;

  // check for collisions
  // check first for left and right wall
  if (xPos <= 15 || xPos >= (width-15)) {
    xSpeed = -xSpeed;
  }

  // do the same for the ceiling and the floor
  if (yPos <= 15 || yPos >= (height-15)) {
    ySpeed = -ySpeed;
  }

  circle(xPos, yPos, 30);
}
```

3. Now carefully write the class:
	1. The code in `setup()` is most likely the *constructor*
	1. The moving code and the drawing code are most likely 
		the two member functions you'll need

```
class BouncingBall {
  constructor() {
    this.xPos = width / 2;
    this.yPos = random(100, 300);
    this.xSpeed = 4;
    this.ySpeed = 7;
  }

  move() {
    // move the ball
    this.xPos += this.xSpeed;
    this.yPos += this.ySpeed;
  }

  checkForCollisions() {
    // check first for left and right wall
    if (this.xPos <= 15 || this.xPos >= width - 15) {
      this.xSpeed = -this.xSpeed;
    }

    // do the same for the ceiling and the floor
    if (this.yPos <= 15 || this.yPos >= height - 15) {
      this.ySpeed = -this.ySpeed;
    }
  }

  draw() {
    circle(this.xPos, this.yPos, 30);
  }
}

let myBouncingBall;

function setup() {
  createCanvas(400, 400);
  myBouncingBall = new BouncingBall();
}

function draw() {
  background(240);
  myBouncingBall.move();
  myBouncingBall.checkForCollisions();
  myBouncingBall.draw();
}
```

### Thursday 9 February

#### Today
- Participation and engagement
- Review arrays and OOP
- Arrays of objects
- IM instructors and lab rules

#### Review arrays and OOP

- Review the class example we did on Tuesday
	- What does `this` mean?
- Functions in a class are mostly like any other functions 
	- For example, it's often useful to pass initialization information to the
		constructor, like
		[this](https://editor.p5js.org/mangtronix/sketches/-7sWqG_Bu) example

How to use the modulo function to make something happen less often than every
frame: 

```
let shade = 0;
let changeAmount = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(shade);

  // change the shade only on every other frame
  if (frameCount % 2 == 0) {
    shade += changeAmount;

    // make sure the shade stays between 0 and 255
    if (shade <= 0 || shade >= 255) {
      changeAmount = -changeAmount;
    }
  }
}
```

#### Arrays of objects

Here then is the bouncing ball example, this time creating 10 
balls, and storing them in an array:

```
class BouncingBall {
  constructor(xSpeed0, ySpeed0) {
    this.xPos = width / 2;
    this.yPos = random(100, 300);
    this.xSpeed = xSpeed0;
    this.ySpeed = ySpeed0;
  }

  move() {
    // move the ball
    this.xPos += this.xSpeed;
    this.yPos += this.ySpeed;
  }

  checkForCollisions() {
    // check first for left and right wall
    if (this.xPos <= 15 || this.xPos >= width - 15) {
      this.xSpeed = -this.xSpeed;
    }

    // do the same for the ceiling and the floor
    if (this.yPos <= 15 || this.yPos >= height - 15) {
      this.ySpeed = -this.ySpeed;
    }
  }

  draw() {
    circle(this.xPos, this.yPos, 30);
  }
}

let ball = [];

function setup() {
  
  createCanvas(400, 400);
  
  for (let i = 0; i < 10; i++) {
    // each ball will have a slightly different
    // initial speed in the X axis, but all balls
    // will have the same speed in the Y axis
    ball[i] = new BouncingBall(i + 1, 2);
  }
}

function draw() {
  background(240);

  for (let i = 0; i < 10; i++) {
    ball[i].move();
    ball[i].checkForCollisions();
    ball[i].draw();
  }
}
```

[Here](https://p5js.org/examples/arrays-array-objects.html)
is another example showing how to make an array of objects

##### In class exercise
Modify your computer graphic homework assignment to 
use at least one class

##### Homework

For those of you who know how to use classes and arrays, I want you to use
this homework assignment to develop your creativity. We will critique your
assignments in class, so pay extra attention to aesthetics. I don't expect you
all to be artists, but everyone can pay attention to the visual appearance of
their work and make conscious choices. Be ready to discuss your work in this
context, explaining your influences, inspiration, and choices. 

### Tuesday 14 February

#### Today
-  Reading discussion
-  Notes on arrays
-  Transformations
-  Working with text: Putting on canvas, data visualization, generative text

#### Notes on arrays

- [How to remove elements from an array](https://love2dev.com/blog/javascript-remove-from-array/)
- [Adding unique IDs](https://editor.p5js.org/michaelshiloh/sketches/4K4yYYVQA) to objects in an array for identification
- Randomly choosing elements from an array
	[example](https://editor.p5js.org/mangtronix/sketches/DMnZyF6Xc)

#### Transformations
Transformations move the coordinate system
so you can draw in different places with the same code
- Available 2D transforms are 
	- `translate()`
	- `rotate()`
	- `scale()`
- `push()` and `pop()` allow you to remember (record) where the canvas was, 
and then return to a stored position later

Example: Draw a house at a given location, no transform:

```
function house(x, y)
{
  triangle(x + 15, y, x, y + 15, x + 30, y + 15);
  rect(x, y + 15, 30, 30);
  rect(x + 12, y + 30, 10, 15);
}
```

Same result, but using a transform:

```
function house(x, y)
{
	// Using transformations, no need for clumsy
	// offsets to each drawing function
  translate(x, y);
  triangle(15, 0, 0, 15, 30, 15);
  rect(0, 15, 30, 30);
  rect(12, 30, 10, 15);
}
```

Why do this?
- Easier to read (and hence less likely to have errors)
- Easier to code complex motions relative to other motions

**Notes**
- Just like with `fill()` and `rectMode()`, once you've moved the origin it
	stays there unless you return it to its starting position. E.g. try putting
	a circle in the center of the canvas `ellipse (width/2, height/2, 20);`
- Whenever you do a transformation, it's good practice to **always** 
	- Store where you were before the transformation using`push()` 
	- return where you were after the transformation using `pop()`

```
function house(x, y)
{
  push();
  translate(x, y);
  triangle(15, 0, 0, 15, 30, 15);
  rect(0, 15, 30, 30);
  rect(12, 30, 10, 15);
  pop();
}
```

*Suggestion*
- I encourage you to see what the other section is up to; the other teacher and
I often exchange ideas and build on each other's examples and lectures. In
particular, Mang has curated a very nice list of [Additional
Resources](https://github.com/mangtronix/IntroductionToInteractiveMedia/blob/master/lectureNotes.md#week-22-additional-resources)
on transformations.

### Thursday 16 February
#### Today
- Transformations (rotation and scaling)

#### Rotation and scaling 

```
function setup() {
  createCanvas(400,400);
  background(240);

  // the red rectangle is drawn before the rotation so
  // it will stay in place
  fill(255, 0, 0);
  rect(200, 200, 100, 100);
  line(0, 0, 200, 200);

  // Now a green rectangle
  fill(0, 255, 0);

  // rotation is done here. all subsequent drawing
  // is done post-rotation
  rotate(radians(10));

  // the green rectangle is drawn after rotating the canvas
  rect(200, 200, 100, 100);
  line(0, 0, 200, 200);
}
```

Work through 
[this](https://genekogan.com/code/p5js-transformations/) 
nice explanation of transformations with great examples

#### Working with text: Putting on canvas, data visualization, generative text

##### Putting text on the canvas

Basic default text:

```
function setup() {
  createCanvas(400, 400);

  text("My Important Message", width / 2, height / 2);
}
```

###### Using a specific font

```
function setup() {
  createCanvas(400, 400);
  textFont("Courier New", 25);

  text("My Important Message", width / 2, height / 2);
}
```
- Fonts that seem to be available are 'Courier New' (monospace), and
	'Helvetica' (non-monospace)
- You can also load your own fonts but that requires uploading them to the
	p5.js server. For more information look at the p5 reference for typography:
	Help->Reference->LoadFont Typography 
- Note that p5.js is **asynchronous** and that `loadFont()` is
	**non-blocking**, meaning that `setup()` will continue even if the
	`loadFont()` hasn't finished. 
- What are *blocking* vs. *non-blocking* functions?
- There are two ways to force your program to
wait for the font to load:
	- Use `preLoad()`
	- Specify an optional callback function in `loadFont()`

###### Selecting one of many fonts

Note that loading a font takes time, so if you expect to use multiple fonts
it's best to preload all of them, and then switch between them using
`textFont()`

###### Further exploration

There are of course many other things you can do with text. You can look at Help->Reference->Typography and File->Examples->Typography for ideas and examples.

Some advanced examples using text are
[here](https://github.com/aaronsherwood/introduction_interactive_media/tree/master/processingExamples)

Some awesome examples alas without code:
- https://www.syedrezaali.com/generative-typography-experiments/

##### Data Visualization

What is data visualization? Here are some examples:

- [Ben Fry](http://benfry.com/allstreets/)
- [Aaron Koblin](http://www.aaronkoblin.com/project/flight-patterns)
- [Jer Thorp](https://www.jerthorp.com/portfolio) e.g. Just Landed

###### Finding data

Sources

- https://www.springboard.com/blog/free-public-data-sets-data-science-project/
- https://www.ndbc.noaa.gov/rt_data_access.shtml
- https://www.kaggle.com/datasets
- Professor Mathura's 
	[list of data sources](https://github.com/MathuraMG/ConnectionsLabSpring22/blob/master/Week_3_JSON_Fetch/README.md#list-of-data-sources)

###### Data formats

- The most common format is CSV, especially as you can use any spreadsheet
	(Excel, OpenOffice Calc, Google Sheets) to export any table in CSV format
- Other formats are JSON and XML. We won't spend much time on them, but there
	are p5.js libraries available for parsing them


###### Worked example: Getting and working with a CSV file

- A [database](https://eerscmap.usgs.gov/uswtdb/) of energy generated by wind turbines
- Click "Get Data"
- Scroll down a bit to "Tabular Data: CSV format" and click on "CSV
format".
	- This will download a `.zip` file.
- Unzip the file.
	- This will create `uswtdb_v4_1_20210721.csv`
- This is a plain text file; you can view it with a text editor
	- You will see that the first line is the heading of each column
	- Some of the fields are numerical (e.g. case_id)
	- Some of the fields are text (e.g. t_state, t_county)
	- Some of the fields are missing (e.g. faa_ors, faa_asn)
- Upload the file into your sketch (Sketch Files -> Upload Files)
- Now you can load this file into an array of `Strings` and then process each
	line one at a time, pulling out individual fields:

```
/*
 * example to process a CSV file containing data
 * about wind turbines in the USA
 * Source: https://eerscmap.usgs.gov/uswtdb/
 */

// An array of strings to hold the entire file
let strings = [];

// For scaling, we want to know the minimum and maximum latitude and longitude
let minLat;
let maxLat;
let minLong;
let maxLong;

function preload() {
  // The text from the file is loaded into an array.
  strings = loadStrings("uswtdb_v5_3_20230113.csv");
}

function setup() {
  createCanvas(500, 400);
  background(235);

  // Did we succeed to load anything?
  if (strings == null) {
    print("failed to load the file, stopping here");

    // this is an endless loop; it's a common way
    // to prevent a program from continuing when
    // something is so wrong that there is no sense
    // in continuing
    while (true) {}
  }

  print(
    "strings loaded from file successfully, read " + strings.length + " lines"
  );

  // Find the minimum and maximum latitude
  // and longitude
  findMinMaxLatLong();
}

function findMinMaxLatLong() {
  let singleRow = [];

  // loop over each row in the file
  for (let csvRowNumber = 1; csvRowNumber < strings.length; csvRowNumber++) {
    // get a single row and split that row
    // into individual words
    singleRow = split(strings[csvRowNumber], ",");

    // We know that the last two fields are the
    // latitude and longitude and so they are
    // numerical:
    let longitude = float(singleRow[25]);
    let latitude = float(singleRow[26]);

    // The file may be missing a field, in which case
    // the converstion to a float might have failed
    if (isNaN(longitude) || isNaN(latitude)) {
      print("conversion to float failed; skipping row " + csvRowNumber);
    } else {
      if (csvRowNumber == 1) {
        minLat = latitude - 10;
        maxLat = latitude + 10;
        minLong = longitude - 10;
        maxLong = longitude + 10;
      }

      if (latitude < minLat) minLat = latitude;
      if (latitude > maxLat) maxLat = latitude;
      if (longitude < minLong) minLong = longitude;
      if (longitude > maxLong) maxLong = longitude;
    }
  } // end of for() loop

  print("Latitude (min, max) = (" + minLat + "," + maxLat + ") ");
  print("Longitude (min, max) = (" + minLong + "," + maxLong + ")");
} // end of findMinMaxLatLong

let csvRowNumber = 1;
// Skip the first line, since we know it's a header

function draw() {
  let singleRow = [];

  // get a single row and split that row into
  // individual words
  singleRow = split(strings[csvRowNumber], ",");

  // This really slows things
  // down so use only when debugging
  //print("Row " +
  // csvRowNumber +
  //   " contains " +
  //   singleRow.length +
  //   " fields" );

  // We know that the last two fields are the
  // latitude and longitude and so they are
  // numerical:
  let longitude = float(singleRow[25]);
  let latitude = float(singleRow[26]);

  // use only when debugging
  // print("Latitude " +
  // latitude +
  //   " longitude " +
  //   longitude );

  // Check for non-numerical strings.
  if (isNaN(longitude) || isNaN(latitude)) {
    print("conversion to float failed; skipping row " + csvRowNumber);
  } else {
    // scale that to fit on our canvas
    //print(csvRowNumber);
    let ypos = map(latitude, minLat, maxLat, 0, height);
    let xpos = map(longitude, minLong, maxLong, 0, width);

    // Put a mark there
    point(xpos, ypos);
  } // end of valid data

  csvRowNumber++;
  if (csvRowNumber >= strings.length) {
    print("finished");
    noLoop();
  }
}

```


Things to notice:
1. The `split()` function does half the magic
1. The `int()` or `float()` function does much of the rest
1. Data files might have errors in them and you need to defend your program
	 against them
1. `loop()` and `noLoop()` can be used anytime you want to start or stop the
	 `draw()` function from repeating


##### JSON and XML: Other file formats

JSON and XML are other format for organizing data in a file.
They are more complex than CSV, and again p5.js provides functions.

###### Generative Text

Pull words from a CSV file
and by using `random()` in a clever way,
write poems or slogans or whatever.

[Here](https://editor.p5js.org/michaelshiloh/sketches/XSlxycR-c) is a terribly
lame example:


#### Look at homework. Is it creative?

#### More Data Visualization and generative text (Time permitting):

- have students make a scroller in pairs
- add randomness/perlin noise
- have them look at circle letters, 
	come up with questions and explanations in pairs
- have students work through example on their own and use data
- show generative word from circles sketch

### Tuesday 21 February
##### todays-lecture
#### Administration
- Attendance

#### Today
- Discussion
- Look at and comment on homework

##### Discussion
Aaron and Naz

##### Look at and comment on homework
- Be consistent with other section: embed code in Wordpress blog
- Give me your screen name on the blog (put in studentAccounts)
- Look at homework
