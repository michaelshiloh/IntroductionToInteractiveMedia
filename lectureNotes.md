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

### Thursday 2 February
##### todays-lecture
#### Administration
- Attendance

#### Today
- Questions, review, etc
- Painting program
- Loops

##### Painting program
Vladimir's
[implementation](https://editor.p5js.org/vsharkovski/sketches/0E5JFi1Pk)

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


# Week 3

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

````
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
````

