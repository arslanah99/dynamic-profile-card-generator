import React, { useEffect, useState } from "react";
import "./ScrollIndicator.css";

const ScrollIndicator = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="App">
      <div className="progressMainWrapper">
        <div
          className="progressMainStyle"
          style={{ width: `${scrollTop}%` }}
        ></div>
      </div>
      <h1>Scroll Load Indicator</h1>
      <p>
        I made the decision as a man, and as a man over there, Max Kellerman,
        just respect it and leave it alone. The only thing I command is respect.
        I think that the most important thing that I strive to live by is
        extremely by truth and by consistently giving others the truth, without
        any judgement, without constraints, without anything extra except the
        understanding that I see you. This is not even a conspiracy theory. The
        Earth is flat. It’s right in front of our faces. I’m not eating a whole
        bunch of animals anymore. I have a presence and aura about me that’s
        very reality-based. It didn’t come in the form of living in this false
        world and not being able to tell the truth to somebody. In actuality, it
        really doesn't mean anything. It doesn't really get me up in the morning
        every single day to want to meditate, to want to read, to want to do
        things that fulfill my life. I can't even call them conspiracy theories,
        because some of the things of just logic and common knowledge are just
        there. Directors tell me what to do, and I kind of just put my own twist
        to it, just to get inside my personality that everybody doesn’t really
        get to see – my off-the-court interests and the way I act. It’s just me.
        I'm not here to tirade anybody. I won’t sit here and say that I know.
        But when I started actually doing research on my own and figuring out
        that there is no real picture of Earth – there is not one picture of
        Earth. Dinosaurs - They find one bone and make up 98 percent of it
        digitally. I want to be on the cover of GQ, that's a personal goal. I
        want to be interviewed by GQ on camera and I want to do a freestyle for
        GQ like Drake. I stand for four things, man. Inner peace. Freedom.
        Equality and World Peace. So, if that is being conflicted inside of me,
        I am definitely going to have something to say. Like, I'll actually go
        and try to do the research on the scientific side and figure that out. I
        thought it was interesting in "The Alchemist" how he was looking for the
        alchemist but the alchemist found him. Found him in the middle of the
        desert with this and it's just like, "I can't believe I just met him,"
        and in doing so sometimes meeting certain individuals, they embody so
        much of that wisdom that they want to impart on you. All I do is sit at
        home and watch Netflix. Like, did you see what Jim Carrey did? Like Jim
        Carrey came out of nowhere, and was just like, "I was in solitude," and
        just like, I'm it now. I feel absolutely amazing. My energy, my sleeping
        patterns, just my intellect and everything that I'm awake to now — I'm
        very much aware. The hoopla on Christmas, I don't really get into that.
        I’m probably one of the most competitive people ever. I did some
        coaching on the plane, myself. I helped Brad, I helped Coach Stevens
        with some coaching. My focus is basketball, and that’s it. I think we’re
        all just evolving. I don’t think there’s a limit you can put on the
        intellect of basketball or in life. I see you. I see everyone. More than
        just your physical presence, I see your energy. I feel it. I know it.
        Naturally, sometimes the ego or naturally my personality will get in the
        way, of pushing people away rather than bringing them closer and
        learning more about them. The fact that they can make all these movies
        with alien descriptions. They’re not just going on strictly brainpower
        and this is just creative things that we’re going to put out to
        everybody. For what? All to put an alien movie out, for what? I wanted
        to just ask other individuals, like do you really think this actually
        happened? I just wanna know. Because I don't know either. It created a
        division, or, literally stand up there and let all these people threw
        tomatoes at me, or have somebody think I'm somehow a different
        intellectual person because I believe that the Earth is flat and you
        think the world is round. It created exactly that. I've seen a lot of
        things that my educational system has said that was real that turned out
        to be completely fake. I've been seeing the all-seeing eye for about six
        months now. Like all the time. The truth is right there, you just got to
        go searching for it. My light Brothers and Sisters! The age of No More
        Secrets is upon us. I don't really necessarily think of Christmas as a
        holiday. I’ve been playing basketball a lot longer than some of these
        people analyzing the game. The only intent was just to wake up and do
        our research. Basketball, this life, it's an illusion in terms of
        certain material things that mean a lot more. Literally, as simple as
        this: Why is it that the the steps – in terms of the pictures that they
        say he stepped on – why do they look completely different than the ones
        that are actually in the museum that he walked with? All these things
        that they keep giving to us, all this information, I’m just saying that
        these things that used to put me in fear, it makes you not want to
        question it naturally, because of how much information you actually can
        figure out and how much information there actually is out there. It’s
        crazy. Basketball isn’t a game; It’s an art form. You master the
        fundamentals so you can forget ’em, so you can improvise and just
        concentrate on what really matters: getting buckets. It was all an
        exploitation tactic. It literally spun the world — your guy's world — it
        spun it into a frenzy and proved exactly what I thought it would do in
        terms of how all this works. There is no time to figure out how to save
        somebody's feelings when ultimately you have to be selfish in figuring
        out what you want to do. If you ask me about basketball, I will talk all
        day. When I actually said it though, I had been watching a whole lot of
        Instagram videos. When the ball doesn’t go in the rim, the energy of the
        basketball can translate into the other end as well. That’s just
        basketball 101. You tell me who filmed, I’m asking you like this. Do you
        know they filmed the actual spacecraft leaving from the moon, right? Who
        the hell is filming that? You tell me. Like people think it’s an idea,
        and when you actually follow that idea and back it up with research of
        your own then you’re almost like convincing yourself like this didn’t
        happen you know what I mean. Eye see all. And it connected me more to
        Nikola Tesla, and then I started taking, you know, just specific
        individuals throughout history that have been telling us things that
        just either they perish before their time or they were supposedly taken
        out or something that they said was just so thought-provoking that it
        just - they went from a genius to being a crazy person. I Am My True
        Self. Are you? This is not even a conspiracy theory. The Earth is flat.
        It’s right in front of our faces. When I actually said it though, I had
        been watching a whole lot of Instagram videos. Basketball isn’t a game;
        It’s an art form. You master the fundamentals so you can forget ’em, so
        you can improvise and just concentrate on what really matters: getting
        buckets. What’s his name? Was it Neil Armstrong? I don’t even know. I
        see you. I see everyone. More than just your physical presence, I see
        your energy. I feel it. I know it. All I want to do is be able to have
        that open conversation. Eye only know the best for Me. Like, did you see
        what Jim Carrey did? Like Jim Carrey came out of nowhere, and was just
        like, "I was in solitude," and just like, I'm it now. Like people think
        it’s an idea, and when you actually follow that idea and back it up with
        research of your own then you’re almost like convincing yourself like
        this didn’t happen you know what I mean. I’ve been playing basketball a
        lot longer than some of these people analyzing the game. Like why do I
        have to wait for anybody? I've been seeing the all-seeing eye for about
        six months now. Like all the time. The only intent was just to wake up
        and do our research. I feel absolutely amazing. My energy, my sleeping
        patterns, just my intellect and everything that I'm awake to now — I'm
        very much aware. Once you become awake, you don’t see that stuff
        anymore. If you ask me about basketball, I will talk all day. I Am My
        True Self. Are you? I made the decision as a man, and as a man over
        there, Max Kellerman, just respect it and leave it alone. What does the
        word "government" mean to you? And it connected me more to Nikola Tesla,
        and then I started taking, you know, just specific individuals
        throughout history that have been telling us things that just either
        they perish before their time or they were supposedly taken out or
        something that they said was just so thought-provoking that it just -
        they went from a genius to being a crazy person. And I felt like ever
        since I took meditation to another level and figuring out the research
        behind that, and figuring out how knowledgable I can become, and just
        being enriched in that, enriched in my soul, rather than realizing that
        this physical realm that I live in and I exist in is the only thing
        that's available to me, you know. Like, I'll actually go and try to do
        the research on the scientific side and figure that out. I won’t sit
        here and say that I know. But when I started actually doing research on
        my own and figuring out that there is no real picture of Earth – there
        is not one picture of Earth. All I do is sit at home and watch Netflix.
        I’m probably one of the most competitive people ever. And it almost felt
        like I was standing on top of a pendulum and I was like swinging back
        and forth and then it gave everyone a chance to just look at me and
        then, if they didn’t agree with me, kind of like throw rocks at me. I
        have a presence and aura about me that’s very reality-based. It didn’t
        come in the form of living in this false world and not being able to
        tell the truth to somebody. Oh, if you're very much woke, there is no
        such thing as distractions. My focus is basketball, and that’s it.
        Everybody coming up to me like, "You know I gotta reteach my whole
        curriculum!" I’m sorry. I apologize. I wanted to just ask other
        individuals, like do you really think this actually happened? I just
        wanna know. Because I don't know either. All these things that they keep
        giving to us, all this information, I’m just saying that these things
        that used to put me in fear, it makes you not want to question it
        naturally, because of how much information you actually can figure out
        and how much information there actually is out there. It’s crazy. I
        thought it was interesting in "The Alchemist" how he was looking for the
        alchemist but the alchemist found him. Found him in the middle of the
        desert with this and it's just like, "I can't believe I just met him,"
        and in doing so sometimes meeting certain individuals, they embody so
        much of that wisdom that they want to impart on you. Dinosaurs - They
        find one bone and make up 98 percent of it digitally. The hoopla on
        Christmas, I don't really get into that. The fact that they can make all
        these movies with alien descriptions. They’re not just going on strictly
        brainpower and this is just creative things that we’re going to put out
        to everybody. For what? All to put an alien movie out, for what? My
        light Brothers and Sisters! The age of No More Secrets is upon us. I did
        some coaching on the plane, myself. I helped Brad, I helped Coach
        Stevens with some coaching. Spiritual alchemy is something that I'm huge
        in. I’m an actual genius when it comes to this game. Eye see all. They
        always say, "truth is in plain sight," purposely though. Have you seen
        the new Taco Bell commercial? Literally, as simple as this: Why is it
        that the the steps – in terms of the pictures that they say he stepped
        on – why do they look completely different than the ones that are
        actually in the museum that he walked with? There is a certain aspect of
        life in which I want to tell people about, which is this true journey of
        really becoming a complete individual and total freedom of thought. It
        created a division, or, literally stand up there and let all these
        people threw tomatoes at me, or have somebody think I'm somehow a
        different intellectual person because I believe that the Earth is flat
        and you think the world is round. It created exactly that. There is no
        time to figure out how to save somebody's feelings when ultimately you
        have to be selfish in figuring out what you want to do. The only thing I
        command is respect. You tell me who filmed, I’m asking you like this. Do
        you know they filmed the actual spacecraft leaving from the moon, right?
        Who the hell is filming that? You tell me. I can't even call them
        conspiracy theories, because some of the things of just logic and common
        knowledge are just there. So I don't just limit myself to being in the
        circle of like "This is what you believe in."
      </p>
    </div>
  );
};

export default ScrollIndicator;
