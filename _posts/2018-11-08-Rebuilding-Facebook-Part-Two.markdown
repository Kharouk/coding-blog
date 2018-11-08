# Rebuilding Facebook - Fluency In Programming- Part II
[Last post][1] I discussed the importance of teamwork and my experience working in a team for two weeks. Doing what? Building Facebook from scratch. No *starter code*, no big tutorial covering the beginning, middle, or end. Just the open source tools that developers can use. In my last point, I brought up the three main goals I had when working on this project.

	- I use an agile product development process
	- I can program fluently
	- I can justify the way I work

The first goal was semi-accomplished. I felt that we had the right mindset from the get go, but we lacked in execution towards the end. To summarise that post, teamwork can have its ups and downs but it’s important to remember that everyone works differently and it’s vital to communicate.

This post will be more technical. The second goal is all about being confident in saying, in an interview, that `I can program fluently`.  First of all, just thinking about confidently telling an employer that I’m a fluent programmer feels like I am lying. It’s easy to just say *no, you’re not* or a more reasonable  *I’m still improving*, rather than saying **yes. I am a fluent programmer.** And if it is difficult, then it’s important to have evidence to prove yourself (and others) otherwise.

When I first considered this goal, I wondered how to gather that evidence. It’s such an overwhelming phrase, maybe even a bit cocky. But it’s an important principle in Makers. Teamwork is good, great code is brilliant, but essentially I am at a bootcamp to learn how to program. Therefore, what things could prove that I am a fluent programmer? Well, building Facebook from scratch could be a good piece of evidence! 

We built Facebook using a few open-source tools. We used a web framework called Ruby on Rails that none of us really ever used professionally. Sure, we wrote in Ruby before and even used a smaller framework Sinatra, but nothing to the scale that Rails provided us. We also decided to use the PostgreSQL database rather than the built-in Sqlite. This is due to personal preference and our experience use Postgres before the project. We also incorporated Continuous Integration using Travis, as well as deploying our production build to AWS Elastic Beanstalk! That was troublesome, and a big struggle for us, however it was rewarding once our application deployed! 

Some other things we used continuously were testing frameworks like RSpec for unit-testing and Capybara for e2e/feature-testing. We also used a Linter called Rubocop to make sure our code was properly formatted and SimpleCov (with CodeClimate) to make sure our test coverage was high enough to merge into our master branch (our main Github branch for deploying to production). In some parts of our application, we even included React. We had the spare time in our last week to include some React Components, which allowed us to get some Front-End practice with the famous framework. 

That’s our toolkit. The toolkit that allowed us to remake Facebook. It doesn’t feel like much, actually. You hear so many frameworks these days and terms regarding Single Page Applications or Static Sites but you realise all you need is to master a web framework like Rails and you can essentially create a web application. But does that make me a fluent programmer? Knowing how to use Rails?

https://y.yarn.co/de246995-2c76-455a-8a55-873478146830_text_hi.gif
- Richard Hendriks trying to learn Cloud.

It’s not about Rails being ‘easy’. It’s about how Rails works and how to deal with it. For me, the hardest part about Rails is how it does everything for me. I wrote a blog post where I do FizzBuzz in Java as a contrast to using Rails. People call it the _magic of rails_, where generating controllers or models are as easy as a command in the terminal. 
<blockquote class="twitter-tweet" data-conversation="none" data-lang="en-gb"><p lang="en" dir="ltr">Honorable mention: Rails&#39; magic seriously tripped me up! <a href="https://twitter.com/hashtag/CodeNewbie?src=hash&amp;ref_src=twsrc%5Etfw">#CodeNewbie</a></p>&mdash; Ali Spittel 💁 (@ASpittel) <a href="https://twitter.com/ASpittel/status/1055269313177964544?ref_src=twsrc%5Etfw">25 October 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

It is the uncomfortable sensation of wondering *Am I using this right? Do I need to know more than this?* It’s the unfamiliarity of programming that leads me to bring up my first piece of evidence as a fluent programmer.

## I am comfortable with being uncomfortable
When we were building Facebook, there were times I just wondered to myself, *why, why does it work?* A good example is when dealing with Controllers and views. By just naming a method `index` in your Page Controller will point to your `index.html.erb`. You don’t tell Rails to do that; *it knows.* It reads your mind and sees your intent. Rails knows you better than you know yourself. **Magic**.  🤔 

So there times during our project where I decided to explore these “magical” elements of Rails. On reflection, I wondered about how much research one should do in order to understand these things. The fact that Rails allows us to quickly build an MVC application is remarkable, and I do not want to recreate Rails. 

At the end of the first week, a teammate brought up “being comfortable with the unknown” in our Retro. I think that’s a good thing to think about when working on a project where you may not be familiar with the tech. Although I want to improve on understanding how things work in Rails, it’s important to grow understand that these features was implemented to make life easier. I don’t need to know everything about Rails, especially when time spent researching how these features work could be better spent in improving our application. It’s all about that cost-benefit analysis in regards to time. That balance in programming.

##  Balance in Fluency
When I think about being fluent in any language (not just programming), I think about being able to have a conversation with someone in that language. I wouldn’t say knowing the language perfectly is the prime definition of being fluent. I’m sure there are people (like me) who can speak fluent Russian but can’t write it. I’m sure people (like me) can understand the context when someone speaks in Portuguese, but doesn’t necessarily know the language. In these cases, I don’t know the language perfectly, but I know aspects of it. What I’d probably do is** talk to someone** in the language to improve; **keep learning** the language; **practice** in that language. 

If I can do those three things, I’d say I’m developing fluently. Or at least developing the skills towards fluency. You can guess what I’m doing here.

### Talking to Somebody
I think to develop your fluency in programming involves discussion. Whether you’re talking to your partner what you’ve learned whilst avoiding technobabble. Or you’re curious about a new framework so you open a discussion online. Just talking about programming (or writing blogs about it 🙃) will improve your fluency. With our Facebook, we had daily discussions regarding our program and programming in general. When one of us shared knowledge on API requests, we all benefited and grew a bit more fluent. When we talked about the pitfalls to scaffolds in Rails, things about the framework grew a bit more clearly. 

### Keep Learning
Expected. I could potentially learn Portuguese if I keep having conversations but if I’m not actively learning, then there might be principles I miss, rules of the language that I won’t pick up. Programming is so, so accessible, and it’s growing bigger every day. Thousands of blogs a day, all wanting to help out new programmers. When working on Facebook, we constantly browsed tutorials on how to implement React into Rails. How to set up our database on AWS. Even wondered how to change font on the screen without reloading the page! Not one member of our group will say they didn’t learn anything. We researched constantly and even allowed morning sessions where we researched independently and then share what we’ve learned with the rest of the group during lunch time. 

### Practice\++
Cheesy. It’s probably not helpful when you ask someone how to improve in something, and they tell you to keep practicing. It’s so important! Whether you’re doing 100 Days of Code or you’re taking what you’ve learned in a tutorial and applying it to a small project, it’s good practice. And you know what they say about practice?
<div style="width:100%;height:0;padding-bottom:55%;position:relative;"><iframe src="https://giphy.com/embed/xT39CZiSHAkLg2861a" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/nutsandbolts-viceland-nuts-bolts-xT39CZiSHAkLg2861a">via GIPHY</a></p>
Whenever we implemented a feature into our Facebook app I didn’t fully understand, I would spend some time on my own to research the feature and rebuild it myself. Some examples where understanding Fetch:

As well as when I wanted to try building a live chat again with ActionCable and Redis: 


## Am I a Fluent Programmer?
These three components to finding balance in fluency can be applied to anything, not just programming. I guess they’re kind of like a mantra. You keep repeating them, and acting on them, then I’d say you’re a fluent programmer. Speaking of which, am *I* a fluent programmer? I would definitely say I’m on the right path, and building a Facebook clone in just two weeks has definitely improved my programming fluency. Therefore if I was asked in an interview, I’d say yes. Not because I am, full-stop, but because I am constantly growing as a programmer and I understand that no one can be 100% fluent in programming. 

----
As mentioned in my previous post, it’s tech-week! At the time of writing this post, I have completed my first tech-test which was to create a banking system in the console. We could do it in Ruby or JavaScript but I decided to challenge myself even further and do it in Java! It proved to be way more challenging than I expected but I was able to complete the tech-test with goals that I felt were accomplished. There will be a blog post about it soon!

Meanwhile, this is part two of a three part series. Fancy. Part three will focus on my third, and final goal. Justifying the way I work. I hope to go deeper into our application and justify the code we’ve written as well as explain the decisions we’ve made to get the code to where it is currently. If you want to check out our Facebook clone, visit this link. The repo for the project can be found on my GitHub here. 

Thanks for reading. Clap me a couple of times. I’ll even bow! This is a ‘NaNoWriMo’ post. National Novel Writing Month is a yearly event where brilliant people decide to make November even tougher and decide to write 50,000 words. Usually it’s for a novel but they have a system in place for *rebels*, writers who decide not to write a novel. This is a part of that! Check out my progress and buddy up with me if you’re joining in on the fun! 

Follow me on instagram, twitter.

Still not on Facebook

[1]: ()