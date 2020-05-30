<h1>NYU Abu Dhabi</h1>
<h1>Interactive Media Program</h1>
<h1>Course title: Introduction to Interactive Media</h1>

Course number: IM-UH 1010  
Credit Hours: 4  
Prerequisites: None  
- Classroom: online  
- Course website: [https://github.com/michaelshiloh/IntroductionToInteractiveMedia](https://github.com/michaelshiloh/IntroductionToInteractiveMedia)  

<h1>This document: Summer 2020 Lecture Notes</h1>
This is all subject to change


### 31 May 2020

Administration

- **Record Zoom!**
- Introductions
- Syllabus etc.
- What’s the class about?
- Examples
- Student lead discussions (assign dates)

Let's get started

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

Simple shapes

- ellipse()
- rect();
- size();
- triangle(x1, y1, x2, y2, x3, y3);
- line()
- point()

What does this all mean?
- Functions
- Arguments or parameters

Controlling color, fill, and stroke

- color()
- stroke()
- noStroke()
- fill()
- arc(100, 100, 100, 100, 0, 180);
- arc(100, 100, 100, 100, 0, PI, CHORD);
- random()

Confused? 
- Google
- Processing reference page

Variables
- int myNumber = 45;
- int myRandomNumber = random(255);
- int myRandomNumber = round(random(255));
- Built-in variables
	- width, height



### 2 June 2020

Look at Selfies

Interaction


----------------
not organized yet








mouseX
mouseY
More on interaction

 if (mousePressed == true) {
     background(color(0,0,255));
  } else {
     background(color(200,0,0));
  }
Callback functions: allow for event driven behavior!

void setup() {
  size(500, 500);
}

void draw() {
  ellipse(mouseX, mouseY, 10, 10);
}

void mousePressed() {
    background(255);
}
Here is an example that shows you how to change a state variable when a mouse is clicked

boolean pleaseClearScreen = false;

void setup() {
  size(500, 500);
}

void draw() {
  ellipse(mouseX, mouseY, 10, 10);

  if (pleaseClearScreen == true) {
    background(255);
  }
}

void mousePressed() {
  pleaseClearScreen = true;
}
Aside: Review the concept of variable scope

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
You can get a callback (also sometimes called a notification) when a key is pressed:

final int ellipseWidth = 100;
final int ellipseHeight = 150;

final int rectWidth = 100;
final int rectHeight = 150;

void setup()
{
  size(500, 500);
}

boolean statePendingKey = false;

void draw()
{
  if (statePendingKey) {
    if (key == 'a') {
      println("drawing ellipse");
      ellipse(width/2, height/2, ellipseWidth, ellipseHeight);
    } else if (key == 'b') {
      println("drawing rect");
      rect(width/2, height/2, rectWidth, rectHeight);
    }
  }
}

void keyPressed() {
  statePendingKey = true;
}
There is a bug in the above! Can you spot it? How would you fix it?

Note that order matters!




June 3 (Sun)
             Show the seles
             Drawing shapes, using the cursor to draw
             Functions,  array, text
            
  
  

     
   
    
      
