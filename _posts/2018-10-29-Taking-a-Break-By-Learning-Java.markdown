---
layout: post
title:  "Taking a Break (By Learning Java and TDDing FizzBuzz)"
date:   2018-10-29 13:00:00 +0100
categories: makers-academy java test-driven-development
---
# Taking a Break (By Learning Java and TDDing FizzBuzz)
![Learning Java By Test Driving Fizzbuzz](https://i.imgur.com/pWxJ1E2.png)

So today I become a senior developer (in the context of my course at Makers Academy). This means I've done two months of vigorous coding and I should be asking myself two questions:
```markdown
Am I having fun?
Am I a better developer than I was yesterday?
```

To both questions, a massive yes. It doesn't come as a surprise to me anymore. Lately, I've been waking up earlier, around five, to get some practice in coding. Whether that's demystifying the magic of Rails (more on that later) or watching tips on JavaScript's execution context (video material this Monday morning), I seem to head off to bed early because I know I'm more of an early bird kind of guy.

I am having fun. It's almost unfair to be having this much fun. I seem to love the challenge. This week, we are working on a mock version of Facebook. [Github repo here](https://github.com/Kharouk/acebook-ciCADA), and [deployed app here](http://acebook-cicada.eu-west-2.elasticbeanstalk.com/users/sign_in). It's a group project, and our fundamental goals as a team are to focus on teamwork and growing collaboratively. We, in my opinion, are making tidal waves in accomplishing our goals. The best part, it's all fun. Even when I am slightly uncomfortable with Rails. It's too perfect; I hear that word thrown around in my cohort. And maybe due to its perfection, I feel like I'm doing it the wrong way. I tell myself to let go, and read up on the bits of Rails I need to.

```bash
rails g scaffold User 
# So simple! This generates pages and the needed code to have Users
```
So I try to let go. Our challenge this weekend was to rebuild Instagram. [Github Repo here](https://github.com/Kharouk/instagram-challenge), and deployed app [here](https://pentagram-app.herokuapp.com/). On Saturday I pretty much built the app quickly, due to Rails. I incorporated Devise for my users and added multiple gems to do my bidding. It looked good, and I used Red-Green-Refactoring to build the application. But Sunday, I thought that I could either do more refactoring or try something else. I felt like I needed a break. Monday kicks off my last month at Makers as a student. I deserve a break.

So I started to learn the basics of Java.

It must be strange, to learn Java as a way to take a break. However, I should realize what kind of developer I am. I love building applications myself. I love getting into a programming language and creating something. I loved learning Ruby and building Sinatra apps from scratch. I love JavaScript and it's ecosystem. I'm not there yet with Rails, so until then I want to start fresh with a language that requires more patience and time then I thought.

I started with the famous 'hello world.' Actually, I started with needing to install the Java SDK on my computer, since I wondered why I couldn't just run the command java in my terminal. Already learning to debug Java!

As I waited to install Java, I looked up some key reading material. The differences between compiled and interpreted languages. Also, Static versus Dynamic languages. Lastly, where does Java fit into all of this?

Essentially, Java isn't specifically a compiled language nor an interpreted language. It's a mix between the two. Due to an issue that was prominent in early programming languages where if you wanted to develop an app for multiple platforms, you'd have to make multiple versions of that app; Java was the solution. From a high-level perspective, the Java compiler creates a file that's like it's own virtual machine. These files are bytecode files.

Interesting, right? Nowadays, I don't see platform independence as much of a problem anymore. Maybe when writing native code for iOS and Android, but frameworks like React Native try to solve that. Now you have languages that run on all platforms, without too much hassle. But I guess that's now. Back then, it must've been crazy to hear about Java and what the language was trying to solve.

Anyways the installation finished, so it's time to write up my 'hello world' code! Also, just to compare, Ruby was the first programming language I learned. Here's the code in Ruby:
```ruby
puts 'hello world!'
```
Lovely. Here it is in Java:
```java
public class Main {
	public static void main(String[] args) {
	  System.out.println("Hello, World!");
	}
}
```
😨

The good news, I see a bit of JavaScript in there, as well as Ruby. Before I panicked too much, I broke down what I knew. I saw class there, so I'm assuming I just wrote a class called Main. There's public. I never saw public before but I know Ruby has private methods, so I'm assuming we are clarifying to Java that this is a public class. Inside the class there looks like a function due to the function() {} format. It's also public and its name might be main as well. Lastly, I'm assuming that the println method is printing the line 'Hello World' out to the system.

That leaves a few other keywords that are unfamiliar to me. Static, void and (String[] args). With some quick research, I was able to decipher these strange keywords:
- **static** allows you to run the method without creating an instance of main. Kinda get it.
- **void** states that this method doesn't return any value. Okay, fair.
- **(String[] args)** says the method is an array of strings. I understand that when we run this program we get some strings back but why must we specify it here as an argument?

So that's ' hello world' in a nutshell. There's also a bunch of other things as well like there's more to class than just defining Main. It's also a requirement in Java for everything to be inside a class. Talk about POOD am I right Sandi? From here I spent my Sunday learning datatypes. How everything must be specifically stated. No room for errors. And I catch myself thinking how good it feels. Yes, writing beginner Java code feels good after a week and a day of Rails. But that's just me.

Before Java, I attempted FizzBuzz in Go. Whilst completing the challenge, I was stuck on compiling and wondered heavily why couldn't the creators of Go (come on Google) just have it be like Ruby?! So I didn't compile, because it felt pointless. It wasn't until I decided to practice a bit of Java that I now see why compiled languages exist, and why we still use them. I have not written a program yet that is massive, so I can't compare execution speeds with a program I wrote in Ruby, but I can imagine the difference. Anyways, I learned a bit more about the difference between java and javac. The latter is Java's compiler. I then looked into .class and how it's the 'bytecode' file that can be run on any platform (as long as you have java installed). After this, I was able to see 'Hello World' proudly displayed in my terminal.

![FizzBuzz in Java](https://i.imgur.com/CoLOETW.png)

Finally, the moment came to try out test-driven development in Java. I'm a huge fan of TDD, and I honestly think it's one of the main reasons I was able to develop as a developer so quickly in the last couple of months. So when learning a language, I also check out the testing. And the testing in Java is brutal. On top of that, I also wanted to solve JavaBuzz. No pressure.

My first challenge was navigating JUnit. JUnit is a testing framework for Java. My debugging process started as soon as I downloaded the .jar files for the framework. Just to get past the errors in my IDE was a mission. At first, it wasn't recognizing my methods and I realized I need to import not only the test package but also the specific assertions I want to use. 

Specific; probably how I'd describe Java in one word. Once I was able to import correctly, I had to write the test.

In classic TDD fashion, start with the simplest. Since I was trying to solve JavaBuzz, I tested to see if numbers are divisible by three.
```java
public class JavabuzzTest {
  @Test
  public void isDivisibleBy3() {
	Javabuzz javabuzz = new Javabuzz();
	boolean answer = javabuzz.divisibleBy3(3);
	assertEquals(true, answer);
  }
}
```
We create an overall class for the JavaBuzz test, and we use @Test to let the framework that the next method will be a test. We then write the method name, which is also the name of our test. We instantiate a new Javabuzz class, and we call the divisibleBy3 method which we save the return value to an assumed boolean answer. We then call assertEquals, a method provided to us if we:
```java
import static org.junit.Assert.assertEquals;
```
And then check if the answer is equal to true!

Simple! So then we create a Javabuzz.java file and write the method to solve the test:
```java
public class Javabuzz {
  public boolean divisibleBy3(int num) {
	if (num % 3 == 0) {
	  return true;
	} else {
	  return false;
	}
  }
}
```
Probably a better, more succinct way of solving this, but this is what I'm familiar with and it works. Now we have to run our tests to see if this passes. This is where I spent a lot of time debugging. I had no clue on how to run it. My approach to solving this problem started like this:

1. Compile both the program and the program test using `javac`.
2. Run them using `java`.
3. Results!
   
Unfortunately, it was not that simple. The errors that displayed seemed to have no clue what unit was or what Test was or what assertEquals was. Nothing I imported helped. So, browsing the JUnit docs, I discovered that I had to compile then run the test program in a very specific way.

To compile:
```bash
javac -cp .:junit-4.12.jar:hamcrest-core-1.3.jar JavabuzzTest.java
```
To run:
```bash
java -cp .:junit-4.12.jar:hamcrest-core-1.3.jar org.junit.runner.JUnitCore JavabuzzTest
```
This got to me. I was frustrated because visions of rspec and quick, simple testing in Ruby or JavaScript flooded my head. They ran their hands through my hair, easing my way into Test-Driven Development. Then the radical reality of Java showed me how other languages handle their business, and I was left writing the code you see above into my terminal constantly.

Breaking it down, the -cp flag (initially I thought copy), stands for CLASSPATH, which basically receives all the classes that are inside the zip files (.jar) and compiles them with our Test program. That's my basic definition. This then allows our program to use those classes when we run the second line to execute the program, and also include the org.junit.runner... to specify where are the classes located.

Finally, we can see if we passed our test. We run that long command and we get:
```bash
JUnit version 4.12
.
Time: 0.007

OK (1 test)
```
Thanks, JUnit, everything is a-okay. Also, here's how it would look like if we had failed our test:
```bash
1) isDivisibleBy3(JavabuzzTest)
java.lang.AssertionError: expected:<false> but was:<true>
	at org.junit.Assert.fail(Assert.java:88)
	at org.junit.Assert.failNotEquals(Assert.java:834)
	at org.junit.Assert.assertEquals(Assert.java:118)
	at org.junit.Assert.assertEquals(Assert.java:144)
	at JavabuzzTest.isDivisibleBy3(JavabuzzTest.java:14)
	at java.base/
<------- LOTS OF STUFF HERE SAYING THE SAME THING ------>
	org.junit.runners.ParentRunner.run(ParentRunner.java:363)
	at org.junit.runner.JUnitCore.run(JUnitCore.java:137)
	at org.junit.runner.JUnitCore.run(JUnitCore.java:115)
	at org.junit.runner.JUnitCore.runMain(JUnitCore.java:77)
	at org.junit.runner.JUnitCore.main(JUnitCore.java:36)

FAILURES!!!
Test run: 1,  Failures: 1
```
Quite a contrast on whether or not you pass or fail. Anyways, I continued to write tests, fail them, then pass them by writing the appropriate method. Here is my result. Please, feel free to correct me as I am eager to get better and learn.

The Tests:
```java
import static org.junit.Assert.assertEquals;

import java.util.ArrayList;

import org.junit.Test;

public class JavabuzzTest {
  @Test
  public void isDivisibleBy3() {
	Javabuzz javabuzz = new Javabuzz();
	boolean answer = javabuzz.divisibleBy3(3);
	assertEquals(answer, true);
  }
  
  @Test
  public void isNotDivisibleBy5() {
	Javabuzz javabuzz = new Javabuzz();
	boolean answer = javabuzz.divisibleBy5(6);
	assertEquals(answer, false);
  }
  
  @Test
  public void isDivisibleBy15() {
	Javabuzz javabuzz = new Javabuzz();
	boolean answer = javabuzz.divisibleBy15(15);
	assertEquals(answer, true);
  }
  
  @Test
  public void isDivisibleByAnything() {
	Javabuzz javabuzz = new Javabuzz();
	boolean answer = javabuzz.isDivisibleBy(5, 5);
	assertEquals(answer, true);
  }
  
  @Test
  public void JavaBuzzToFifteen() {
	Javabuzz javabuzz = new Javabuzz();
	ArrayList answer = javabuzz.start(16);
	assertEquals("Java", answer.get(3));
	assertEquals("Buzz", answer.get(5));
	assertEquals("7", answer.get(7));
	assertEquals("JavaBuzz", answer.get(15));
	// assertEquals(answer.get(16), "Java");
  }

  @Test(expected = IndexOutOfBoundsException.class)
  public void testIndexOutOfBoundsException() {
	Javabuzz javabuzz = new Javabuzz();
	ArrayList answer = javabuzz.start(16);
	Object o = answer.get(17);
  }
}
```
The Source Code:
```java
import java.util.ArrayList;

public class Javabuzz {
  public boolean divisibleBy3(int num) {
	if (num % 3 == 0) {
	  return true;
	} else {
	  return false;
	}
  }
  
  public boolean divisibleBy5(int num) {
	if (num % 5 == 0) {
	  return true;
	} else {
	  return false;
	}
  }
  
  public boolean divisibleBy15(int num) {
	if (num % 15 == 0) {
	  return true;
	} else {
	  return false;
	}
  }
  
  public boolean isDivisibleBy(int num, int secondNum) {
	if (num % secondNum == 0) {
	  return true;
	} else {
	  return false;
	}
  }

  public ArrayList<String> start(int num) {
	ArrayList<String> javabuzz = new ArrayList<String>(num);
	for (int i = 0; i < num; i++) {
	  if (divisibleBy15(i)) {
	  javabuzz.add("JavaBuzz");
	  }
	  else if (divisibleBy5(i)) {
		javabuzz.add("Buzz");
	  }
	  else if (divisibleBy3(i)) {
		javabuzz.add("Java");
	  } else {
		javabuzz.add(String.valueOf(i));
	  }
	}
	return javabuzz;
  }
```
Phew. What a fantastic Sunday. Feeling refreshed and I enjoyed my break from Rails. The biggest things I can take away from this is that it's important to address what you like and dislike in regards to learning and that it's okay to step away from something. 

People tell me it's important to take breaks away from coding in general but to go back to the two goals I've mentioned, I am having fun coding, I just want to take a break from the coding I need to do, rather than the code I want to do. And in regards to my second goal? I definitely feel like I'm a better developer than I was yesterday. Never imagined to write Java code so soon in my almost six-month career of coding, but I'm glad I did.

If you want to attempt it yourself, check out this [repo](https://github.com/makersacademy/java_intro) from [Ed Withers](https://dearshrewdwit.github.io/). It helped me a lot and was a fantastic way of getting the basics of Java.

----
I'm very new to technical writing and hope to continue doing more posts. If you have any feedback or tips, or just general questions or comments, please send it my way. Any feedback is important feedback as a developer, so I'd really appreciate it.
----
Want to see some 😎 content? Follow my coding Instagram account at [@codealist](https://www.instagram.com/codealist/).
---