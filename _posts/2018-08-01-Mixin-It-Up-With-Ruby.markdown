---
layout: post
title:  "Mixin' It Up - Ruby Style"
date:   2018-08-01 22:00:00 +0100
categories: 100-days-of-code daythree
---

![Just Another Unsplash Photograph]({{ "https://images.unsplash.com/photo-1525373698358-041e3a460346?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4051df9e2f82d0f19d2df4eb6dbe7711&auto=format&fit=crop&w=1600&q=80" | absolute_url }})

# Mixin’ it up - Ruby Style

It’s currently 10:40 am. I’m at a cafe nearby Makers Academy, a bootcamp in London that I'm desperate to get into. I’ve been trying to force myself to do some Ruby katas on Codewars. But I can’t focus. I need to focus on something ruby-related since I have an interview at Makers in thirty minutes. That interview is the next step on my path to becoming a Software Engineer.

So I’m nervous. I also can’t drink my coffee too quickly because I know I’ll keep ordering more. Which will just make me more nervous.

Catch 22.

Fine. Instead, I’m going to mix it up. Yesterday I learned a bit about modules in Ruby. What they are, why I even need them. I let some hours pass before I talk about Modules. I don’t understand them yet, but I thought a blogpost about it wouldn’t hurt.

An instructor from [Treehouse](https://www.teamtreehouse.com) said that modules are like a container for behaviours and classes. So, like many other objects in programming languages, it’s just another object that can hold a lot of information. As if I needed more.

```ruby
module SimpleModule
  VERSION = 1.0 # Constants. Can not be changed
  WARPED = "Hello World!"
end
```

Then I am introduced to how a module - a _SimpleModule_ - looks like. At the same time, I learn that Ruby also has constants! I studied a bit of JavaScript before plunging into Ruby so I felt warm and fuzzy seeing familiar terms. In Ruby you capitalise constants. However, as the instructor introduced constants briefly, he never mentioned if the whole word had to be capitalised, or just the first character. So, I will add this to what I’ll call, “my collection of unanswered questions.”

```md
1.  Is uppercasing constants mandatory?
```

I hope to answer these questions at the end of the blogpost.

So I’ve created a module now. The world’s most uninteresting module, but a module nonetheless. However others might call it the perfect model of a module.

But how does one access constants or methods inside the module? Introducing, the “Constant Resolution Operator” - which is a fancy way of calling the “::” operator. So within IRB (Interactive Ruby Shell), in order to call VERSION, I had to type:

```ruby
irb(main): load "./simple_module.rb"
irb(main): SimpleModule::Version # => 1.0
```

IRB gave me back 1.0, as expected. So at this point, I was wondering to myself probably the same exact thing you’re wondering.

```md
2.  Why do I need modules? Couldn't I just create a class and call
    SimpleClass.version instead?
```

That just seems easier to me, and as a beginner I just have to question why things are the way they are. But there is one explanation, and it’s something called **Namespacing.**

Be warned. I’m about to repeat myself. Namespaces are a container for other items. Classes, constants, _modules_, etc. These can all be included. So why am I repeating myself? Well that’s because I said Modules had the exact same definition. Modules are also containers! This is where, as a beginner, I feel confused.

It seems I’m not the only one who has this issue. This questions comes from another student trying to grasp namespacing and modules:

```md
3.  I seem to be confused about the use of Namespacing in Ruby. I was under the
    impression that it was best practice to keep classes seperate and in their own
    rb file, so why then do we use modules to namespace multiple classes in the
    same file?
```

The question (found [here](https://teamtreehouse.com/community/namespacing-in-ruby)) is a great question because it’s better worded than what was inside my head; “Why the hell am I using modules??” When searching for the answer, I found this:
“Namespacing allows you to group similar objects, but also load multiple libraries without clashing.”
Now we’ve kinda talked about the first part of the question, where we can group similar objects together. An example would be:

```ruby
module LaserBots
  class Player # To call the class Player we use LaserBots::Player
	attr_reader :name
	def initialize(name)
	  @name = name
	end
  end

  class Robot
	attr_reader :name
	def initialize(name)
	  @name = name
	end

	def target_player(name)
		Player.new(name)
	end
	end

end
```

I can see why we use modules here. LaserBots can have multiple classes such as a Player class or a Robot class. Maybe we’re creating a game and these objects have similar characteristics. Therefore it would be cleaner to group them together. And when we call the classes we just use the “::” operator.

However that second part of the question is approaching what I think is the intermediate knowledge tier of Ruby. Loading multiple libraries into my program insinuates that I have a large project where I need to start using pre-written code. Or maybe when I’m using Rails or Sinatra one day. I don’t doubt that if I look at the source code of Rails I’ll being seeing many modules.

So that’s my representation of modules in Ruby. For beginners. I’m sure a master Rubyist could come by this blog post and sweep me off my feet, whispering sweet definitions akin to ELI5 explanations into my ear.

### What about mixin’ it up Alex?

So when you get into learning about modules, eventually you’ll see the term ‘mixin.’ To me, it’s as unfamiliar as when I see ‘regex.’ For someone reason, these words irk me. They seem unnatural. Uncanny. They're not a familiar tool I host in my toolkit of development.

The flirtatious word of mixin is best described as it is what it says it is. It mixes in where you put it. So if we went back to that definition of namespacing where we talked about loading libraries in, it’s actually pretty similar to that. You mix in a mixin with your other code. It might be a module that’s already been created. So you _include_ it into your code, especially if by default you don’t have access to it.

Again, examples work wonders. There is a module out there, in the wide lands of Ruby, called the ‘Comparable Module.’ It is part of what is known as the Ruby Core. However you can’t access it right away. You can’t just type up the code -- you’ll get in error. You have to _include_ it into your program. Mix it in real good.

```ruby
class Player
  include Comparable # Gives us all the methods Comparable has
  attr_accessor :name, :score

  def <=> (other_player) # Comparable gives us the spaceship operator
	score <=> other_player.score
  end

  def initialize(name, score)
	@name = name
	@score = score
  end
end
```

Phew. Okay, there’s a lot in here. First we see a class called Player. Inside, we’re including the Comparable module. Two things here. There’s no outer module and I’d assume that we could nest modules inside classes, right? Right?!

```md
4.  Can I nest modules inside classes and other objects?
```

Now the strange thing for me was seeing that ‘spaceship operator’. Especially because I don’t really see a spaceship in \<=\>. I see two mouths biting into the same sandwich. Well that spaceship operator actually allows us to compare two different objects.

So when we define it (using def), and give it a parameter(other_player), we could then compare the score of something with the score of this new parameter. In this case, players. So if we run:

```ruby
player1 = Player.new("Alex", 100)
player2 = Player.new("Hunter", 80)

puts "player1 > player2: %s" % (player1 > player2)
```

We instantiate two objects with the Player class, give them pretty names like ‘Alex’ and ‘Hunter’, with a score. Then we print out a simple sentence but boy does that sentence come with weight.

I will first say that if we hadn’t included Comparable, this would return us an error. Specifically: an undefined method “\>”. To me that means Ruby has no clue what I’m trying to do. Why are there spaceships in my body? Why have people forgotten to tell me what this is? Am I out of the loop? These are the questions I imagine Ruby asks herself at night.

So, instead of giving her a restless night of sleep, we just give her an instruction. Hey, Ruby. What ‘\>’ is doing is comparing the score between player one and player two. If player one’s score is greater than player two’s, return me a little true. Otherwise, tell player one to go false themselves.

So Ruby, now understanding what the \<=\> method is supposed to do, returns us a true because player one has 100 points.

Fun, right? But if you’re like me, you are probably wondering…

```md
5.  Why the hell do we need to 'include' the Comparable module? Why doesn't it come
    prebuilt into ruby?
```

I don’t know (yet), okay? I’m just a guy who’s guessing what questions you may or may not have!!

That’s just one example of using the comparable module and this blogpost is only a tiny example of modules and mixins. If this has been unclear to you, please let me know. It is my first time trying to describe code and my process of thinking, so if something doesn’t make sense, or is incorrect, let me know. If you have questions you think I might have the answer to, ask them. Doesn’t hurt right? I promise to be less judgemental than Stack Overflow.

Now, let’s recap all the questions we came up with.

```md
1.  Is uppercasing constants mandatory?
2.  Why do I need modules? Couldn't I just create a class?
3.  Namespacing confusion - Best practice with classes, etc.
4.  Can I nest modules inside classes and other objects?
5.  Why do we need to include the comparable module?
```

Now let me introduce to you my good friend Google. They’ll be here answering these questions for me.

1.  Nope. As long as the first letter is capitalised, the rest is smooth sailing. Just don’t define any constants in a method or you’ll be faced with a big no-no.
2.  Essentially modules create playgrounds, where all your constants and variables, classes and methods can play together. No one from outside the playground can interfere with said constants and variables. They live in their bubble, only to be disturbed when called upon. Sometimes, however, a module wants to be explore the big, crazy world that is your other programs. Thus the whole ‘include’ scenario we’ve seen with the Comparable module.
3.  Similar question to the one above. Hopefully answered correctly \*crosses fingers \*.
4.  Yes, you can. Testing it on IRB shows you can but it seems that unless you’re requiring or including a module, there’s no reason for it to be nested. Correct me if I’m wrong.
5.  Technically I was wrong; it’s not like comparable isn’t in the grand scheme of things. It is still a part of the Ruby core. But it’s also not directly included.. That’s the point of it being called a mixin? Hmm.. Maybe this [link](https://medium.com/@farsi_mehdi/the-comparable-mixin-8a3096fa1a0a) can explain it better.

---

<br>
Phew. As I write this sentence, It’s 7:14 pm, the same day. Quite a big jump, no? Today was day three of my [\#100DaysOfCode](http://100daysofcode.com/) and while I’ve focused more on my interview, this blog post and some research on blockchain, it was less of a coding day and more of a successful in-general kind of day.

If you’re wondering about my interview, I passed! Solving the logical questions and the coding challenges proved to be more fun than anxiety-inducing. It was a pleasure to hear that I did very well. It almost feels like the last two weeks of severe studying has paid off. Kidding, it feels even better. So excited to begin on the 6th of August!

In regards to this blog post, I decided to challenge myself today and write about code. It was a good start to help me retain the knowledge. I do believe I have more of an understanding when it comes to the basics of modules and mixins. I can’t wait to do more of these sorts of posts.

My next goal is to begin learning how to set up Rails locally. I want to **build myself a cryptocurrency portfolio app** using Rails. Ooooooooo. Can’t wait.

Check out my post about tough times but better days in my [last post](https://kharouk.github.io/100-days-of-code/dayone/2018/07/30/100-Days-Of-Hard-Work.html).

---

<br>
What do you think? Today the assignment I gave myself was to explain as best as I could a topic that I'm both learning and unfamiliar with. Do you think I did okay?

Want to see the log report for my #100daysOfCode challenge? See it here on the forked [repository.](https://github.com/Kharouk/100-Days-Challenge/blob/master/log.md)

Want more? Follow me on:

- [Twitter](https://www.twitter.com/alexkharouk)
- [Medium](https://www.medium.com/@codelist)
- [Github](https://www.github.com/kharouk)
