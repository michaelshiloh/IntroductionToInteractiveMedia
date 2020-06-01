<h1>NYU Abu Dhabi</h1>
<h1>Interactive Media Program</h1>
<h1>Course title: Introduction to Interactive Media</h1>

Course number: IM-UH 1010  
Credit Hours: 4  
Prerequisites: None  
Classroom: online  
Course website: [https://github.com/michaelshiloh/IntroductionToInteractiveMedia](https://github.com/michaelshiloh/IntroductionToInteractiveMedia)  

<h1>This document: Summer 2020 Lecture Notes</h1>
This is all subject to change


### 31 May 2020

#### Administration

- **Record Zoom!**
- Introductions
- Syllabus etc.
- Student lead discussions (assign dates)
- Join the Discord server [here](https://discord.gg/NASyNHw)

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
 	<li>Carlos Guedes' wonderful <a href="https://vimeo.com/235763130">Phobos</a>, Orquestra Robótica Disfuncional;(1 min)</li>
 	<li>Sudhu Tewari's <a href="https://www.youtube.com/watch?v=MjNB3nKPMb8" >Yasmin Electro Mechanical Sequencer</a></li>
 	<li>List of;<a href="http://eat.cca.edu/" >inspirational movies</a>;collected by;<a href="http://www.ultrafuzz.net/" >Barney Haynes</a>;(also;<a href="https://vimeo.com/barneyhaynes" >here</a>) and shown at his Interface classes.</li>
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
</ul>
</li>
</ul>

#### Let's get started

**Download Processing**
- Start now in case this takes a long time
- From [here](https://processing.org/download/)

**Github**
- What is Github?
- Difference between an account and a repository
- Follow along with me and create an account
- Instructions for this are
[here](https://github.com/michaelshiloh/resourcesForClasses#github-resources).

Please use your name for your account name so that I can more easily recognize it. 
If you don't want to use your name for privacy reasons, please choose an alias that I can
recognize as you.

Name your repository "Introduction to Interactive Media". 

- Edit your README.md file
	- What is README.md?
	- What is .md?
- Simple Markdown 
	- **Bold**
	- Paragraphs must be separated by a blank line
	- Inserting images: ![](eye-calipers.jpg)
	- Always remember to commit your changes!
	- More [here](https://github.com/michaelshiloh/resourcesForClasses#github-resources).

**Processing**

#### Simple shapes

- `ellipse()`
- `rect()`
- `size()`
- `triangle(x1, y1, x2, y2, x3, y3)`
- `line()`
- `point()`

What does this all mean?
- Functions
- Arguments or parameters

Controlling color, fill, and stroke

- `color()`
- `stroke()`
- `noStroke()`
- `fill()`
- `arc(100, 100, 100, 100, 0, 180)`
- `arc(100, 100, 100, 100, 0, PI, CHORD)`
- `random()`

Confused? 
- Google
- Processing reference page

#### Variables
- `int myNumber = 45;`
- `int myRandomNumber = random(255);`
- `int myRandomNumber = round(random(255));`
- Built-in variables
	- `width`, `height`
- Other variable types. `int` is by far most common, another common is `float`

Here is the Processing program (also called a 'sketch') we played with in
class:

````
size(400, 400);
ellipse(width/2, height/2, 50, 50);

/*
stroke(0,255,0);
fill(255,0,0);
//ellipse(100,100, 50, 50);

fill(255,0,0, 30);
//rect(30, 30, 50, 80);


// Now I will try to draw an arc
//arc(100, 100, 100, 100, 0, radians(180), CHORD);

// pick a random number up to 180
float myRandomArcSize = random(180);
int arcSizeAsInt = round (myRandomArcSize);
println(myRandomArcSize + "   " + arcSizeAsInt);

// convert that number to radians
float arcSizeInRadians = radians(myRandomArcSize);

print(myRandomArcSize + "    " + arcSizeInRadians);

// draw the arc
arc(100, 100, 100, 100, 0, arcSizeInRadians, CHORD);
*/
````

And here is the markdown code from my very short github demo. I fixed 
the link to the Youtube video (there is no exclamation point for links):

````
here is my first assignment

here is a picture of my wonderful assignment


![](eye-calipers.jpg)

[link to youtube video](https://www.youtube.com/watch?v=bIZsnKGV8TE)
````

You can inspect the whole repository I made in class
[here](https://github.com/michaelshiloh/introductionToIM)

### 2 June 2020

#### Administration

- Please arrive on time. Late counts against your participation grade. 10
	minutes late counts as unexcused absence. 
- Please speak up in class! It's even more important on Zoom, since I can't
	see your faces, I don't know if what I'm saying makes sense. Ask questions,
	make comments, give me feedback. This also counts as part of your 
	participation grade!
- We will look at selfies and hold the discussion in the middle to break
	things up

	
#### Animation
- `draw()`
- `setup()`

````
int foo = 0;

void setup() {
  size(300, 300);
}

void draw() {
  ellipse(foo, 50, 40, 40);
  foo = foo + 1;
}
````

`background()`

Static vs. active mode

Yesterday we were able to draw without using `setup()` and `draw()`. What's
the difference?

#### Interaction with Processing
- Two more interesting built-in variables: `mouseX`, `mouseY`
	- Using the cursor to draw
- conditionals

````
vvoid setup() {
  size(300, 300);
}

void draw() {
  if (mousePressed == true) {
    background(color(0, 0, 255));
  } else {
    background(color(200, 0, 0));
  }
}
````

Notes:
1. `mousePressed` is another built-in variable. There are many others.
1. `mousePressed` is a new type of data, namely a `boolean`, which means it has
	 only one of two values, `true` or `false`

#### Loops
`while()` is like `if()` but it keeps on doing it as long as condition is true

````
void setup() {
  size(300, 300);

  int foo = 50;

  while (foo < width) {
    ellipse(foo, 50, 40, 40);
    foo = foo + 50;
  }
}
````
You should get in the habit of giving meaningful names to your variables. What
is a better name for the variable foo?

#### Intermission I: Look at Selfies

- Today: 5 (counts as participation)

#### Functions

Every time you use one of the built-in 'commands', you are really using (or
more properly 'executing') a built-in function. Functions are a very important
building block of programming, and in addition to using built-in functions,
you can also create your own. In fact, you've already been doing that, when
you created the `setup()` and `draw()` functions. In the case of
`setup()` and `draw()`  you have to use those names, but when you create other
functions you can make up your own names. Just like variables names , good 
function names make your programs easier to understand.

Why create your own funtions?

- Reuse
- Clarity (remember the three reasons for clarity: yourself, sharing,
	grading)
- Easier to debug (what is debugging?)
	- **Reproduce bug with simplest possible example**

Let's rewrite the above to use a function


#### Variable Scope

````
int foo;  // this is a global variable, visible in all functions
void setup() {
  foo = 7;
}

void draw() {

  println(foo);

  int bar; // this is a local variable, visible only inside of draw()

  for (int i = 0; i < width/2; i++) { 
    // i is a local variable visible only inside this for() loop
    ellipse(i, height/2, 10,15);
  }
}
````

#### Intermission II: Discussion

Instructions to leader:

1. You have 15 minutes. Allow 3-5 mintes at the end to wrap up, so divide the
	 remaining 12-15 minutes into your questions or topics (say 2-5 minutes each)
	 and move on to the next question or topic even if there are still hands
	 raised

Instructions to everyone else:

1. Don't repeat what someone has already said

1. Don't just say that you liked or disliked the reading. Offer critical
	 insight. Why did you like or dislike it? What does it connect to?

1. Did it change your mind about something?

- Today: [A Brief Rant on the Future of Interaction
 Design](http://worrydream.com/ABriefRantOnTheFutureOfInteractionDesign/) - 
 Junior

#### Motion

Let's use make a ball bounce on the floor. First, make a circle move:

<pre>void setup() 
{ 
  size(500, 500);
  x = width/2;
} 

float speed = 5;
float x;
float y = 0;

void draw() {
  background(150);

  ellipse(x, y, 20, 20);

  y+=speed;
}
</pre>

Now, make it change directions when it hits the floor:

<pre>void setup() 
{ 
  size(500, 500);
  x = width/2;
} 

float speed = 5;
float x;
float y = 0;

void draw() {
  background(150);

  ellipse(x, y, 20, 20);

  y+=speed;

  if (y>=height) {
    speed = -speed;
  }
}
</pre>

Now, do two thing: 1) use gravity to increase its speed as it falls and 2) reduce its speed on each bounce:

<pre>void setup() 
{ 
  size(500, 500);
} 

float gravity = .1;
float speed = 0;
float x = 320;
float y = 0;

void draw() {
  background(150);
  ellipse(x, y, 20, 20);

  y+=speed;

  speed+=gravity;

  if (y>=height) {
    speed = 0.95 * speed; // this slows the acceleration
    speed = -speed; // this reverses
  }
}
</pre>

#### `for()` loops
