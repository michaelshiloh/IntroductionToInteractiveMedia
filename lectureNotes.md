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

[Today's lecture](#todays-lecture)


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

`frameRate()`

Yesterday we were able to draw without using `setup()` and `draw()`. What's
the difference?

Static vs. active mode

#### Interaction with Processing

- conditionals

````
void setup() {
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

**Important concepts**:
1. `mousePressed` is another built-in variable. There are many others.
1. `mousePressed` is a new type of data, namely a `boolean`, which means it has
	 only one of two values, `true` or `false`
1. Note that `{` and `}` indicate the blocks
1. The `else` part of an `if()` statement is optional (what happens if we
	 remove it?)

- Two more interesting built-in variables: `mouseX`, `mouseY`
	- Using the cursor to draw
	- Now use a mouse click to clear the screen
	- (Time permitting, primitive painting program)

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

<pre>

float gravity = .1;
float speed = 0;
float x = 320;
float y = 0;

void setup() 
{ 
  size(500, 500);
} 

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

#### `for()` loops (time permitting)

### 2 June 2020

#### Administration

- Record
- **Today I want to hear from people who didn't speak yesterday**
- As yesterday, we will look at homework assignments and have our discussion
	later.
- Look at other assignments on your own 
- For technical questions, best to use our Discord channel

#### Functions with arguments (parameters) and/or return values

First, review creating a function `drawTheBall()` with no arguments using
the last example from yesterday.

Next, let's tell it where to draw and the size `drawTheBall(locationX,
locationY, radius)`

* `locationX`, `locationY`, and `radius` are arguments to the
function `drawTheBall`. They provide information the function needs in order
to perform its task. 
* The parenthesis are where the arguments belong. 
* A function that takes no arguments will have empty parenthesis.
* You must always include the parenthesis when defining and calling a function, 
even if it has no arguments.

Functions can take no arguments, or as many as you want. (There is a limit but
it's very large - I've never run into it.)

Functions can also return information to the calling function
We've already seen
examples of built-in functions of this sort
when we used `random()` and `round()`:

<pre>
void setup() {
}

void draw() {
  float someRandomNumber;
  int roundedRandomNumber;

  someRandomNumber = random(100);
  roundedRandomNumber = round(someRandomNumber);

  println( "random number = " + 
          someRandomNumber + 
          " random number rounded to nearest integer = " + 
          roundedRandomNumber);
}
</pre>

**A brief note about formatting** 
* Long lines are difficult to read. Break them up in some clear way.
* White spaces (space, 'enter', tab) doesn't affect program so use them to
	make your program easier to read
* Use <CTRL>t or <Command>t to properly indent your code


Now, let's create a function that returns something. 

<pre>
/* 
 
 Change the color of the circle based on how far the mouse is from the center of the circle
 
 Based on Dan Shiffman's example 7.4 from Learning Processing
 http://learningprocessing.com/examples/chp07/example-07-04-returntype
 
 Modified 2 June 2020 MS - changed variable names
 */

void setup() {
  size(480, 270);
  ellipseMode(CENTER); // probably the default anyway
  stroke(0);
}

void draw() {

  // Erase the last frame
  background(255);

  // Get the distance from the mouse to the circle center
  float distanceMouseToCircleCenter = distance(width/2, height/2, mouseX, mouseY);

  // Change the fill color according to that distance
  fill(distanceMouseToCircleCenter*3, distanceMouseToCircleCenter*2, distanceMouseToCircleCenter);
  // What happens if the value is greater than 255?

  // Finally, draw the circle
  ellipse(width/2, height/2, 100, 100);
}

// Calculate the distance between two points x1,y1 and x2,y2
float distance(float x1, float y1, float x2, float y2) {
  float dx = x1 - x2; // distance in the x axis
  float dy = y1 - y2; // distance in the y axis
  float d = sqrt(dx*dx + dy*dy); // The Pythagorean theorem
  return d; // this is where we return the answer to the calling function
}

</pre>

* When we have no arguments, we leave the parenthesis empty. When we have no
	return value, we use the word `void` in place of the return type
* Functions can only return nothing, or one thing. No more (although that
	thing could be compound).
* So far we have learned of two data types: `int` and `float`. We have briefly
	mentioned `boolean` and `long`. A function can return any data type.

#### Arrays

Dan Shiffman has wonderful simple examples [here](http://learningprocessing.com/examples/chp09/example-09-01-array-declare). Look at Examples 9.1 - 9.7

<pre>
final int numberOfValues = 1000;

float[] values = new float[numberOfValues];

int n = 0;
while (n < values.length) {
  values[n] = random(0, 10);
  n = n + 1;
}

for (int i = 0; i < values.length; i++) {
  println(values[i]);
}
</pre>

* Arrays are siginified by square brackets `[]`
* Arrays can be of any data type, but can't be mixed types
* All of Dan Shiffman's books, examples, and videos are excellent
* As I mentioned yesterday, arrays and `for()` loops almost always show up
	together. If you use an array, you are probably going to have to use a
	`for()` loop.

A more advanced array example, and introduction to the very useful `map()`
function:

<pre>
float[] coswave; 

void setup() {
  size(900, 300);
  
  coswave = new float[width];
  for (int xPosition = 0; xPosition < width; xPosition++) {
    coswave[xPosition] = cos(radians(xPosition));
  }
  background(255);
  noLoop();
}

void draw() {
  for (int xPosition = 0; xPosition < width; xPosition++) {
    float waveHeight = map(coswave[xPosition], -1, 1, 0, height);
    point(xPosition, waveHeight);
  }
}
</pre>

Questions about the `map()` function? Ask me, or Google, or look at Dan
Shiffman's [map example](http://learningprocessing.com/examples/chp13/example-13-05-map)

#### Object Oriented Programming (OOP)

Work through [this](https://github.com/michaelshiloh/simpleProcessingClassExample) example


### 3 June 2020

#### Administration

- Record

#### Data Visualization

##### What is data visualization? Here are some examples

<ul>
 	<li><a title="http://benfry.com/allstreets/" href="http://benfry.com/allstreets/">Ben Fry</a></li>
 	<li><a href="http://www.aaronkoblin.com/project/flight-patterns/">Aaron Koblin</a></li>
 	<li>Jer Thorp
<ul>
 	<li><a href="http://blog.blprnt.com/blog/blprnt/just-landed-processing-twitter-metacarta-hidden-data">just landed</a>
<ul>
 	<li>just landed location</li>
 	<li>plus twitter home location</li>
</ul>
</li>
 	<li><a title="http://nytlabs.com/projects/cascade.html" href="http://nytlabs.com/projects/cascade.html">http://nytlabs.com/projects/cascade.html</a></li>
 	<li>Nytimes top <a href="https://www.flickr.com/photos/blprnt/sets/72157614008027965/with/3288898519/">coverage and connections</a></li>
</ul>
</li>
 	<li><a href="http://feltron.com/FAR14.html">nicholas feltron</a></li>
</ul>
<strong>Where to find data</strong>
<ul>
 	<li>Sources
<ul>
 	<li><a href="https://www.springboard.com/blog/free-public-data-sets-data-science-project/">https://www.springboard.com/blog/free-public-data-sets-data-science-project/</a></li>
 	<li>https://www.ndbc.noaa.gov/rt_data_access.shtml</li>
 	<li><a href="https://www.kaggle.com/datasets">Source</a> of datasets from Alia</li>
	<li>Also look at examples from last spring. You can see their Github
	repositories <a href="https://wp.nyu.edu/abudhabi_im_intro/student-github-repositories/">here</a></li>
</ul>
</li>
 	<li>Format
<ul>
 	<li>CSV</li>
 	<li>Can use a spreadsheet program to open data from many formats and then save as CSV</li>
</ul>
</li>
</ul>

##### How to process CSV files

Examples from Aaron Sherwood’s Introduction to Interactive Media <a href="https://github.com/aaronsherwood/introduction_interactive_media">Github repository</a>
<ul>
 	<li>load/split strings: splitCommas.pde</li>
 	<li>load save table: tableSaveLoad.pde</li>
 	<li>forces: lettersGravityWind.pde</li>
</ul>

##### JSON: Another data format

JSON is another format for organizing data in a file. It is more complex than CSV, and again Processing provides functions for parsing JSON

<a href="https://processing.org/examples/loadsavejson.html">https://processing.org/examples/loadsavejson.html</a>

If you want to learn more about JSON and also XML, 
which yet another data format, 
<a href="https://www.youtube.com/watch?v=rqROpUNb2aY">here</a> 
is a good introductory video tutorial.

<h3>Generative Text</h3>
Pull words from a file (CSV or JSON), 
and by using random() in a clever way,
write poems or slogans or whatever

#### Text 

<pre>
PFont f;
color red;
float x, y;

String message= "Important message";

void setup() {
  size(640, 360);

	// What fonts are available?
	String[] fontList = PFont.list();
  printArray(fontList);

  f = createFont("Monaco", 32);
  textFont(f, 32);
  red=color(255, 0, 0);

  x=width/2;
  y=height/2;

  fill(red);
  textAlign(LEFT);
  text(message, x, y);
}

</pre>

Professor Aaron Sherwood has some more advanced examples
using text
[here](https://github.com/aaronsherwood/introduction_interactive_media/tree/master/processingExamples)

#### Transformations

<ul>
 	<li>Transforms move the canvas so you can draw in different places with the same code</li>
 	<li>Available 2D transforms are `translate()`, `rotate()`, and `scale()`. (Why the parenthesis?)</li>
 	<li>pushMatrix() and popMatrix() allow you to remember where the canvas was, and then return to it's last position</li>
</ul>
Draw a house at a given location, no transform:
<pre>void house(int x, int y)
{
  triangle(x + 15, y, x, y + 15, x + 30, y + 15);
  rect(x, y + 15, 30, 30);
  rect(x + 12, y + 30, 10, 15);
}</pre>
Same result, but using a transform:
<pre>void house(int x, int y)
{
  pushMatrix();
  translate(x, y);
  triangle(15, 0, 0, 15, 30, 15);
  rect(0, 15, 30, 30);
  rect(12, 30, 10, 15);
  popMatrix();
}
</pre>
</ul>

##### Rotation and scaling 

Work through <a href="https://processing.org/tutorials/transform2d/">this</a> tutorial


* As always, Dan Shiffman has excellent
[examples](http://learningprocessing.com/examples/chp14/example-14-02-multiple-translation).


### 7 June 2020

#### Administration

- Is my record keeping correct?
- Record
- Look at assignments
- Review last Wednesday - it was a lot of material

#### Working with Images

<strong>PImage</strong>
<ul>
 	<li>Just another class, i.e. it has
<ul>
 	<li>Data (the pixels, width, height, etc.)</li>
 	<li>Functionality (image(), get(), etc.)</li>
</ul>
</li>
</ul>
</div>
<pre>PImage photo; 
void setup() { 
  size(700, 700); 
  photo = loadImage("/home/michael/useForCans.jpeg");
} 
void draw() { 
  image(photo, 10, 10);
	// How do you suppose you might scale the image?
}

</pre>
img.get(x,y) - Gets the color of the pixel at this location

img.get(x,y,w,h) - Gets a portion of the image
<pre>
PImage photo;

void setup() {
  photo = loadImage("/home/michael/useForCans.jpg");

  size(700, 700);

  image(photo, 10, 10);

  PImage newImage = photo.get(400, 550, 100, 100);

  image (newImage, 50, 50);
}
</pre>

Also

<pre>
image(photo, positionX, positionY, width, height);
tint(red, green, blue);
imageMode(CENTER);</pre>

Arrays of images

(File -> Examples -> Add Examples -> Learning Processing)

Where are the examples?

<pre>//Example15-3:Swappingimages

int maxImages = 4; // Total # of images
int imageIndex = 0; // Initial image to be displayed is the first

//Declaring an array of images.
PImage[] images = new PImage[maxImages]; 

void setup) {
  size(600, 500);

  // Loading the images into the array
  // Don't forget to put the JPG files in the data folder!
  for (int i = 0; i < images.length; i ++ ) {
    images[i]=loadImage( "/home/michael/img" + i + ".jpg" );
  }
}

void raw) {
  // Displaying one image
  image(images[imageIndex], 0, 0, width/2, height/2);
}

void mousePressed) {
  // A new image is picked randomly when the mouse is clicked
  // Note the index to the array must be an integer!
  imageIndex = int(random(images.length));
}
</pre>

Wait a minute, we never call ````mousePressed()````. What's up with that?
*Callback functions* are used for what is called event-driven programming.

**Pause** Working in pairs, do something with what we've learned so far

<strong>Pixels</strong>

You can access individual pixels using the special built-in array called ````pixels````. 
Before using it you must load images from the canvas into the ````pixels```` array ````usingloadPixels()````, 
and after making any changes you must call ````updatePixels()```` 
to write from the pixels array back to the canvas:

<pre>color pink = color(255, 102, 204);

loadPixels();

// change the first row to pink
for (int i = 0; i < width; i++) {
  pixels[i] = pink; 
}

updatePixels();
</pre>

the pixels array is one-dimensional, meaning if you want to go to a different row on the canvas you need to offset by that many widths:

<pre>color pink = color(255, 102, 204);

loadPixels();

// Change the fifth row to pink
for (int i = width*5; i < (width + width*5); i++) {
  pixels[i] = pink;
}

updatePixels();
</pre>

It's important to remember that a pixel is just a color (red, green, blue).
Anything so you can manipulate pixels mathematically 
e.g. make it fade:

<pre>int r = 255;
int change = -1;
void setup() {
  size(500,500);
}

void draw() {

  color myColor = color(r, 102, 204);

  loadPixels();
  for (int i = 0; i < width * height; i++) {
    pixels[i] = myColor;
  }
  updatePixels();

  r -= change;

  if (r < 0 || r > 255) {
    change = -change;
  }
}

</pre>

The ````pixels```` [data
type](https://processing.org/reference/color_datatype.html)

What are some of the things you can do with these tools?

- Print out the color where the mouse is
- Choose the color where the mouse is and use it for painting
- Write a simple paint program
- Make one horizontal line that follows the mouse
- Overlay a grid on an image
- Take an image and make an artistic collage
- Access the pixels of an image and for a particular color change that pixel with a pixel from another image (green screen effect)
- Draw slices of images somewhere else to "glitch" an image
	- randomly
	- using the mouse 
	- using data from a dataset you've downloaded from the web

Some other image functions that might be fun:

- tint()
- createImage()
- Brightness
- Filter()



### todays-lecture

### 8 June 2020

#### Administration

- Record

#### Look at assignments

#### Review

- Questions about ````PImage```` and its methods, ````image()````,
the ````pixels```` array, 
and ````loadPixels```` and ````updatePixels````

How do you find the most red pixel in an image?

````
/*
 How to find the most red pixel in an image

 8 June 2020 - MS - written

 Based xample 16-11 from Learning Processing
 */

// the image
PImage myPicture;

// The color we are searching for
final float searchColorR = 255;
final float searchColorG = 0;
final float searchColorB = 0;

void setup() {
  size(500, 500);
  myPicture = loadImage("/home/michael/useForCans.jpg");

  // If the image failed to load, print a warning and don't go further
  if (myPicture == null) {
    println("Image failed to load!");

    // This is what we call and "endless loop". Since true is always true,
    // the loop never stops, so the program doesn't continue. The loop
    // itself is empty so it does nothing. This is a common way to prevent
    // a program from continuing when you know it is impossible to work
    while (true)
      ;
  }
}

void draw() {

  image(myPicture, 0, 0, width, height);

  loadPixels();

  // Before we begin searching, the "world record" for closest color
  // is set to a high number that is easy for the first pixel to beat.
  float worldRecord = 500;

  // XY coordinate of closest color
  int closestX = 0;
  int closestY = 0;

  // Begin loop to walk through every pixel
  for (int x = 0; x < width; x ++ ) {
    for (int y = 0; y < height; y ++ ) {
      int loc = x + y*width;

      // Get the color of this individual pixel
      color currentColor = pixels[loc];

      // extract the r, g, and b components of this pixel
      float redComponent = red(currentColor);
      float greenComponent = green(currentColor);
      float blueComponent = blue(currentColor);

      // Using euclidean distance to compare colors.
			// First the color we are searching for
			// next the color of our current pixel
      float d = dist(
					searchColorR, searchColorG, searchColorB, 
					redComponent, greenComponent, blueComponent);

      // If current color is more similar to tracked color than
      // closest color, save current location and current difference
      if (d < worldRecord) {
        worldRecord = d;
        closestX = x;
        closestY = y;
      }
    }
  }

  // We only consider the color found if its color distance is less than 10.
  // This threshold of 10 is arbitrary and you can adjust this number 
	// depending on how accurate you require the tracking to be.
  if (worldRecord < 100) {

    // Draw a circle at the tracked pixel
		// make the size of the ellipse change so that we can see it
    ellipse(closestX, closestY, frameCount%20, frameCount%20);
  }
}
````

#### Sound

Install the Sound library

- Open Sketch -> Import Library -> Add Library (notice many other library
	options)
- Search for Sound
- Install the Sound library provided by The Processing Foundation

Play with examples

- File -> Examples -> Libraries -> Sound -> Oscillators -> SineWave
- File -> Examples -> Libraries -> Sound -> Effects -> BandPassFilter
- File -> Examples -> Libraries -> Sound -> Soundfile -> Keyboard

**Notes**
1. Some soundfiles don't work. I don't know why.
2. New concept: ````switch()``` statement
3. ````keyPressed()```` is another example of a ````callback function ````


Examples from Learning Processing chapter 20

- File -> Examples -> Contributed Examples -> Learning Processing ->
chp_20_sound -> example_20_02_sound_effect
- The first example sound file is one that does not work for me. 

#### Midterm project

See in [assignments](assignments.md)
