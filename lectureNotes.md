## New York University Abu Dhabi    
## Interactive Media Program    
## Course title: Introduction to Interactive Media  
Course number: IM-UH 1010   
Section: 1 (Michael Shiloh's section)
Credit Hours: 4         
Prerequisites: None       

Shortcut to [today's lecture](lectureNotes.md/#todays-lecture)  

Course website: [https://github.com/michaelshiloh/IntroductionToInteractiveMedia](https://github.com/michaelshiloh/IntroductionToInteractiveMedia)      
Wordpress site: [intro.nyuadim.com/](https://intro.nyuadim.com/)

Instructor: Michael Shiloh mshiloh@nyu.edu    
Office hours: If you want to meet schedule an appointment [here](https://calendly.com/michaelshiloh/office_hours)

Meeting times:    
- 3:35-6:15pm Tuesday
- 5:00-6:15pm Thursday

Session: Spring 2025  

Class location: C3-029 (IM Lab)  
- [Syllabus](https://intro.nyuadim.com/syllabus/)  
- [Example sketches](https://editor.p5js.org/michaelshiloh/sketches)
- [Weekly schedule](https://intro.nyuadim.com/)
- [Lecture notes](lectureNotes.md)
- [Previous sessions](previousSessions/previousSessions.md)

**Everything here is subject to change**


This document: Lecture notes

### Tuesday 21 January 2025 3:35 - 6:15
#### Today
- Administration
- Introduction (to the course, to each other, etc.)
- Introduction to programming (if we have time)

#### Administration
- Phones

#### Introduction to class
* Join Discord 
* Join Wordpress site
* What are some examples of IM projects? 
	Spend a few minutes Googling 
	and put links in Discord
* What is IM?
	- Discussion
* Homework, projects, and grading
	- Most of you come into this class with different 
		backgrounds, skills, and knowledge, so 
		in IM, we grade by creativity, imagination, communication, 
        effort and progress, 
		not by a fixed level of accomplishment.
	- In IM we strongly encourage experimentation, thinking outside the box,
		and risk taking. 
		However taking risks is only possible 
		if failure doesn't have catastrophic results. 
		If failure results in a poor grade, 
		how does that encourage risk taking?
		- Discussion
		- MVP
	- Discussion

* Introductions

- Syllabus etc.

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

Make an account on: p5js.org

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

Controlling fill, stroke, and color

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


##### Pause

Many of you already know the material we cover in these first few weeks
so why sit through class?
- This is not a coding class. This class includes design and critique
- Since you already know how to code, your creativity
	and critical thinking will be judged to a high standard
- I expect full attention and engagement. Doing something not related to class
	is rude, disrespectful, and will result in a reduced grade. The
	cellphone/laptop rules that we discussed last week is really about
	attention and respect, not about technology
- Please use the restroom before class. 
    We will take frequent breaks in class. 
    If you need an additional break please ask me when is a good time. 
    If you regularly require more frequent breaks please discuss with me
    privately or request an accommodation from the Moses Center

#### Homework
- [Homework schedule](https://intro.nyuadim.com/). Note the deadline
    "Assignments due midnight before first class of following week"
- Late homework
- Let's look at some of your homework

#### Notes on variables
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


