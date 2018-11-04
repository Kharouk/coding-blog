---
layout: post
title:  "Rebuilding Facebook - It's a Team Effort - Part I"
date:   2018-11-04 18:00:00 +0100
categories: [nanowrimo, facebook]
---	
# Rebuilding Facebook - It’s a Team Effort - Part I

![Teamwork](../assets/teamwork.jpeg)
I started off my professional career as a solo writer. I never really had much experience working in a team. I worried I’d have nothing to say in stand-ups or retros. I worried wouldn’t be able to communicate properly what it is I’m feeling or what opinions I have. I worried it would be too difficult. I was right, on the last part. The last two weeks were spent trying to rebuild an existing social media. Facebook. It was going to be a grueling process, but potentially rewarding. It was also going to be done as a team.

Oh boy. Before this project, I already had a group project to recreate [airBnB][1] here at [Makers][2]. However that project was only a week long and it was more about adjusting to a development process rather than completing a functional product. So when we realised we had two weeks to build Facebook from scratch, with teammates I’ve barely worked with before, I knew it was going to be a difficult task. But right away, I had three goals. These three goals guided me through our multiple meetings and conversations, and rewarded me when we succeeded and pulled me through when it was tough. My three goals were:

```
  - I can use an agile product development process
  - I can program fluently
  - I can justify the way I work
```

Now I could summarise these goals but I think it is important for me to really be clear on whether or not I have accomplished them, and the evidence that I can bring to the table to prove my accomplishments.

So this will be a three-part series, one for each of my goals. The first goal is the focus of this post. `I use an agile product development process.` To me, this goal revolves heavily on teamwork and communication, and is the main reason why I wanted to write this. I had an extremely successful two weeks. I was able to learn so many things about Ruby on Rails, React, APIs, front-end development, [Action Cable][3], and interacting with a Postgres database. So much knowledge to take in within a small time period. I’ll discuss what I learned in part two of this series. 

##  But what is an agile product development process?

I suppose there are multiple correct answers. Whether you follow an Agile process or you consider XP values, to me it was all about communication and if I am able to grow as a developer within a team. I tend to compare actual evidence with emotional evidence. What do statistics say compared to how I feel it’s going. 

In terms of *facts*, I will reference the many pull requests (our github repo [here][4]) we made as a team. We followed a strict pattern where a pull request can only be merged after two other members review it. As Github leader, I made sure the settings did not allow automatic merging to master and that we kept having code reviews, conversations on the code, and feedback from each member on how to improve our source code. 

Other factual evidence I could gather up is our daily stand-ups in the morning and afternoon and the retros we hold when the day is over. It’s fantastic to see each one of us interested in facilitating a session, and we always made sure to keep in touch how we are feeling generally; which I’d refer to as emotional evidence.

Emotionally, we tried to make sure everyone was clear on the source code; so if one of our members was to be pulled out of our team and introduce our entire app, they'd do it with ease. I tried to make sure we weren’t moving at a speed where members  felt they were left behind, We were really self-aware, and generally did very well until the end. Tensions rose as the project drew to a close, and I disliked how a team member spoke to me when a new feature of ours wasn’t working. This leads me to my next point.

## It’s a group of **different** people.

It’s the last day of the project, and we should have been preparing for our presentation; a reflection of our two weeks as a team and how our application looks. However, there was a major bug in our production code (development version still worked) and I was working on solving it. However, when one raises their voice at you - instead of communicating and figuring out a solution - you kind of get frustrated. It’s moments like this I must remember that people *are* different and operate differently. I wish the situation was handled better, but eye-opening experiences are eye opening for a reason. Two weeks is actually very short when you compare how you might work with a team for many months on a single project.  What I should take from this experience is that it’s important to have a conversation with your team members, and if someone is being rude, it’s important to remember that people are different, and everyone handles situations differently. 

This leads me to something I briefly mentioned earlier. [XP values][5]. I believe they are a great template to see how well you have done or are doing. The XP values are:
```
- Simplicity
- Communication
- Feedback
- Respect
- Courage
```
### Simplicity

I must say as a team this was a struggle. Not because it was difficult to complete the application, but because we decided to add a layer of intensity that was wanted yet definitely un-needed. Some examples are React, Action Cable for live chat, deploying to AWS Elastic Beanstalk at the beginning, and using an in-depth continuous integration process. Very technical and very professional, but not simple.

### Communication
My main accomplishment and what is most important to me. One of my teammates had this to say in my feedback:
> You were very proactive and self-reflective in stand-ups and you ensured opportunities to speak were available to those in the group that were quieter (in this case, me and [*sic*] another team member)


> You were very receptive to learning and finding out more about things worked and were very good at explaining them to others, which in turn helped me. You were also just easy to get on with in general, an often overlooked trait in group dynamics!
I think my skills in communication have improved, which is exactly what I wanted going into this two week project.

### Feedback
As mentioned previously, we were careful to review every single piece of code, and always understood the importance of listing, tests, and test coverage. However there were times where we did not test drive our code and although we maintained a lovely 100% test coverage, many members of our team agree that we could have done more code reviews. I have learend that it’s important to stick to what we initially set out to do. If we say we will TDD our code, and create user stories that can be done in the simplest of ways, **we should do it!**

### Respect
Again, things generally went okay these last two weeks, but I don’t believe it was great in general. I don’t believe everyone on the team felt valued and felt the respect they deserved. This is something I’m definitely going to keep in my in my next group projects. I will make sure that everyone continues feeling like they have a voice, and that no matter what, remind people that it’s not alright to raise your voice or be rude. 

I always assumed respect originated from clear communication, but there is a reason the two XP values are separate.

### Courage
There were times where courage wasn’t present when bugs appeared,and there were times people withdrew when rather than face it head on and debug. However, due to our good feedback, we were able to detect where the bugs originated and how we can debug. What I can learn from this is being more vocal as soon as things go wrong. I should not wait until pull-request o’ clock to see if the bug originated from my eager fingertips. 


### Final Thoughts
So teamwork is essential. Facebook wasn’t built by one person, and even though there were complications and court orders and lost friendships, Facebook is still alive and well today. Teamwork is hard. But teamwork is good. Teamwork, on good days, lead to quirky commit messages and a general euphoria amongst the members. We relax a little and sink deeper into our work. Teamwork, on bad days, shows true colors and can make messy situations downright dirty. But, bad days are just days that are bad, and usually the problems you had those days seem like nothing when the next bug appears. 

Speaking of next projects, it’s the final three weeks here at Makers. After a week of technical tests (to see how fluent I am at programming), we will begin final projects, another team effort. I’m sure a bad day now is nothing compared to a failed database a day before grad presentations. Oh well! Next blog post will be about rebuilding Facebook and the tech we used. 

Thanks for reading! This is a ‘NaNoWriMo’ post. [National Novel Writing Month][6] is a yearly event where brilliant people decide to make November even tougher and decide to write 50,000 words. Usually it’s for a novel but they have a system in place for *rebels*, writers who decide not to write a novel. This is a part of that! Check out [my progress][7] and buddy up with me if you’re joining in on the fun! 

Don't be a stranger! Follow me on:
- [Instagram][8]
- [Medium][9]
- [Twitter][10]
- and [GitHub][11]!

Ironically, I'm not on Facebook.

[1]: https://github.com/Kharouk/MakersBnB
[2]: https://makers.tech
[3]: https://edgeguides.rubyonrails.org/action_cable_overview.html
[4]: https://github.com/Kharouk/acebook-cicada
[5]: http://www.extremeprogramming.org/values.html
[6]: https://nanowrimo.org/dashboard
[7]: https://nanowrimo.org/participants/alexkharouk
[8]: https://instagram.com/codealist
[9]: https://medium.com/@codelist
[10]: https://twitter.com/alexkharouk
[11]: https://github.com/kharouk
