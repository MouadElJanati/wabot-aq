let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.bucin)}”`, m)
}
handler.help = ['bucin']
handler.tags = ['quotes']
handler.command = /^(bucin)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [

  "I choose to be alone, not because of waiting for the perfect, but need that never give up.",
  "A single person was created with a partner he has not found.",
  "Singles. Maybe that is God's way of saying 'Rest from wrong love' .",
  "Singles are young people who prioritize personal development for a more classy love later. ",
  " I'm not looking for someone who is perfect, but I'm looking for someone who becomes perfect thanks to my strength. ",
  " Girlfriend people are our soul mate is delayed.  ",
  " Singles must pass. All comes a time, when all solitude becomes a togetherness with her halal lover. Be patient. ",
  " Romeo is willing to die for Juliet, Jack died for saving Rose. In essence, if you still want to live, be single. ",
  "I'm looking for people not from their strengths but I'm looking for people from their sincerity.", 
  "Matchmaking is not flip flops, which are often exchanged. So keep in the struggle that should be.", 
  "If you are  so guitar strings, I don't want to be the guitarist.  Because I don't want to break up with you. ",
  " If loving you is an illusion, then let me imagine forever. ",
  " Honey ... My job is only to love you, not fight destiny. ",
  " When I'm with you it feels like 1 hour only 1 second  , but if I'm away from you it feels like 1 day becomes 1 year. ",
  " Banana compote knows sumedang, even though the distance stretches my love will never disappear. ",
  " I want to be the only one, not one of them. ",
  " I can't promise you  to be good.  But I promise I will always be with you. ",
  " If I become a people's representative I will definitely fail, how can I think of the people if all I have in mind is you. ",
  " Look at my garden, full of flowers.  Look into your eyes, my heart is blooming. ",
  " Promise to be with me now, tomorrow, and forever. ",
  " Missing doesn't just arise because of distance.  But also because of desires that do not come true. ",
  " You will never be far from me, wherever I go you are always there, because you are always in my heart, only our bodies are far away, not our hearts. ",
  " I know in my every look, we are.  hindered by distance and time.  But I am sure that later we will be united. ",
  " Missing you without ever meeting is like creating a song that never sings. ",
  " There are times when distance is always a barrier between me and you, but still in my heart we are always close.  ",
  " If this heart is not able to contain all the longing, what power can I do but pray for you. ",
  " Maybe at this moment I can only endure this longing.  Until the time comes I can meet and let go of this longing with you. ",
  " Through the longing that flares up in my heart, there sometimes I really need a hug of your love. ",
  " In the cold night, I don't remember anymore;  How often do I think about you miss you too. ",
  " Missing you is like rain that comes suddenly and lasts a long time.  And even after the rain stopped, I still felt my longing. ",
  " Since knowing you, naturally I want to continue learning, learn to be the best for you. ",
  " Do you know the difference between your pensi and your face?  If the writing pencil can be erased, but if your face will not be erased from my mind. ",
  " It's not the National Examination tomorrow that I have to worry about, but the life test that I went through after you left me. ",
  " One thing is happiness in school.  what keeps me excited is being able to see your smile every day. ",
  " Do you know the difference between going to school and going to your house?  If you go to school, you will definitely bring books and pens, but if you go to your house, I just need to bring your heart and love. ",
  " I'm not sad if it's Monday tomorrow, I'm sad if I don't see you. ",
  " My love moment is upright.  straight with your love moment.  Making our love the perfect equilibrium point. ",
  " I'm willing to run a race around the world, as long as you are the finish line. ",
  " My homework is missing you.  Stronger than Mathematics, broader than Physics, more intense than Biology. ",
  " My love for you is like metabolism, which will not stop until death. ",
  " If your head is like you, I will come pick you up, I'll go home. ",  
  "Eat whatever I like as long as you are, including eating liver.", 
  "Love is like a death sentence.  If you don't get shot, you hang up. ",
  " Loving you is like a drug: once you try to be addictive, you don't try to make you curious, leaving it to make you feel sick. ",
  " I like snacking the most because snacking is delicious.  Moreover, owning you completely ... ",
  " This world belongs only to the two of us.  Everything else is just contracting. ",
  " For me, all those days are Tuesdays.  Tuesday in Heaven if it's close to you ... ",
  " What if the two of us become a gang of criminals?  I stole your heart and you stole mine. ",
  " You are like the coffee I sipped this morning.  Bitter, but addicting. ",
  " I'm often jealous of your lipstick.  He can kiss you every day, from morning to night. ",
  " Just hearing your name can make me smile like a fool. ",
  " I know your female friend is not just one, and liking you is not just me. ",
  " Since me  stopped hoping in you, I became discouraged in everything .. ",
  " With you, falling in love is the most deliberate heartbreak. ",
  " It's very difficult to feel the joy of life without you by my side. ",
  " Through the longing that flares up in my heart.  , there sometimes I really need a hug of your love. ",
  " If you know, until now I still love you. ",
  " Sometimes I'm jealous of kites..that just break up, I'm still being chased and don't want to be taken by other people ..  . ",
  " I did not know what love is, until finally I met you.  But, at that moment I knew it felt heartbroken. ",
  " Chasing is tired, but even more tired waiting \ nWaiting you to realize my existence ... ",
  " Don't stop loving just because you've been hurt.  Because there is no rainbow without rain, there is no true love without crying. ",
  " I have a million reasons to forget you, but nothing can force me to stop loving you. ",
  " Sometimes someone feels so stupid just to love someone. ",
  " You are the best heartbreak that I have never regretted. ",
  " It's not that it's not worth the wait, it's just that it often gives false hopes. ",
  " A part of me feels sick, Remembering her so close, but untouchable. ",
  " The best thing  in loving someone is to secretly pray for it. ",
  " I hope I can get rid of this feeling as soon as I lose you. ",
  " For love we deceive ourselves.  Trying to be strong in fact fell dishonorable. ",
  " Consider me your home, if you go you understand where to go home.  Settle down if you want and leave when you are bored ... ",
  " I'm confused, should I be disappointed or not?  If I'm disappointed, who am I to him? \ n \ nIf I'm not disappointed, but I'm waiting for his words. ",
  " My longing is like a branch that stands still. Even though there are no more leaves accompanying it, until it dries up, breaks, and dies. "  , 
  "I think we are now only two strangers who have the same memories.",
  "Make me able to hate you even for a few minutes, so it won't be too hard to forget you.", 
  "I love you with all my heart, but you even share your feelings with other people.  other. ",
  " Loving you may break me, but somehow leaving you doesn't fix me. ",
  " You are the first and first in my life.  But, I am second to you. ",
  " If we can only meet in a dream, I want to sleep forever. ",
  " Seeing you happy is my happiness, even though you are happy without being with me. ",
  " I sometimes envy an object.  It has no taste but is always needed.  In contrast to me who has feelings, but is abandoned and neglected ... ",
  " How could I move if only you my heart stopped? ",
  " Memories of you are like home to me.  So that every time my thoughts drift, surely the edges will always come back to you. ",
  " Why is tissue useful?  Because love is never dry.  - Sujiwo Tejo ",
  " If loving you is a mistake, okay, let me keep going wrong. ",
  " Since knowing you, I want to keep learning.  Learning to be the best for you. ",
  " Some act stupid just to see you smile.  And he feels happy about it. ",
  " I'm not a good person, but will learn to be the best for you. ",
  " We are not dead, but the wound that makes us can not walk like before. ",
  " Your existence is like a cup.  coffee that I need every morning, which can encourage me to stay excited about the day. ",
  " I really want to give the world to you.  But because it's not possible, then I will give you the most important thing in my life, which is my world. ",
  " Mending sing humorous but sweet, rather than pretentious romantic but tragic ending. ",
  " Ben is disappointed ora, dewe must understand when to expect.  lan when do I have to stagnate. ",
  " Ki Wong Jowo, I can't help but understand the meaning of 'I Love U'.  But I understand mek 'I tresno you crew'. ",
  " Ora need to be beautiful and treat you, I am quite mok as Christian as I am happy to be raucous. ",
  " My love is that you will beat the camera, focus on your crew, tok liyane mah dissolving. ",
  " Saben  dino kegowo dreaming but ora biso nduweni. ",
  " Ora met me 30 dino rasane koyo for a month. ",
  " I without you is like a wild cat.  Ambyar. ",
  " I want it, I am muter wektu.  Supoyo, I am iso nemokne, kowe is more interesting.  Ben Lewih, I really like the time I take care of you with your slir. ",
  " limit, but love kaula ka anjeun henteu se epna. ",
  " Kanyaah will fade away using Bayclean. ",
  " Long memories of keur babarengan jeung anjeun ek tuluy remember nepi ka poho. ",
  " Kuring moal will never breathe the shadows.  , I need some help. ",
  " Nyaahna aa ka neg teh, too, the bank worker collects debt (hayoh mumuntil). ",
  " Patience is lacking, but love is lacking, moal aya beakna. ",
  " Hayang rasana kuring ngarangkai kabeh  said love anu aya in dunya ieu, then my bade is curing kumpulkeun, so that nyaho will grow up to feel the love of kuring ka anjeun. ",
  " Calm down wae neng, out of love you mah sapertos tembang krispatih;  It is timeless. ",
  " Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu is the most alus kanggo anjeun.  But for sure, servants jalmi hiji-hijina nu keep emut ka anjeun. ",
  " You just lose enough tissue, don't you. ",
  " Often it is made to eat liver.  But knowing you are still here makes me happy again. ",
  " My enemies are those who want to have you too. ",
  " Many are always there, but if you are all I want, what? ",
  " My sleeping time is ruined by homesickness. ",  
  "Only China is far away, don't love us.", 
  "The important thing is your happiness, I'm not important ..", 
  "Only one wish, loved by you ..", 
  "I without you is like an ambulance without wiuw wiuw wiuw."  , 
  "Antarctica is quite far away.  Between us don't. "
]
