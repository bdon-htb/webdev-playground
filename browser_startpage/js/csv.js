// Note: I'm 100% aware that this is not the best way to fetch large data.
// However, I wanted to be able to pull a quote offline.
// Browsers make this very difficult due to their local file storage security.

var csv_file = (`“Be yourself; everyone else is already taken.”, Oscar Wilde
“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”, William W. Purkey
“Be the change that you wish to see in the world.”, Mahatma Gandhi
“Live as if you were to die tomorrow. Learn as if you were to live forever.”, Mahatma Gandhi
“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”, Marilyn Monroe
“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”, Albert Einstein
“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”, Bill Keane
“I have not failed. I've just found 10,000 ways that won't work.”, Thomas A. Edison
“The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.”, Elie Wiesel
“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”, Albert Einstein
“It is never too late to be what you might have been.”, George Eliot
“This life is what you make it. No matter what, you're going to mess up sometimes, it's a universal truth. But the good part is you get to decide how you're going to mess it up. Girls will be your friends - they'll act like it anyway. But just remember, some come, some go. The ones that stay with you through everything - they're your true best friends. Don't let go of them. Also remember, sisters make the best friends in the world. As for lovers, well, they'll come and go too. And baby, I hate to say it, most of them - actually pretty much all of them are going to break your heart, but you can't give up because if you give up, you'll never find your soulmate. You'll never find that half who makes you whole and that goes for everything. Just because you fail once, doesn't mean you're gonna fail at everything. Keep trying, hold on, and always, always, always believe in yourself, because if you don't, then who will, sweetie? So keep your head high, keep your chin up, and most importantly, keep smiling, because life's a beautiful thing and there's so much to smile about.”, Marilyn Monroe
“Everything you can imagine is real.”, Pablo Picasso
“You can never get a cup of tea large enough or a book long enough to suit me.”, C.S. Lewis
“Life isn't about finding yourself. Life is about creating yourself.”, George Bernard Shaw
“Do what you can, with what you have, where you are.”, Theodore Roosevelt
“Listen to the mustn'ts, child. Listen to the don'ts. Listen to the shouldn'ts, the impossibles, the won'ts. Listen to the never haves, then listen close to me... Anything can happen, child. Anything can be.”, Shel Silverstein
“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”, Helen Keller
“Success is not final, failure is not fatal: it is the courage to continue that counts.”, Winston S. Churchill
“You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.”, John Lennon
“It’s no use going back to yesterday, because I was a different person then.”, Lewis Carroll
“He’s not perfect. You aren’t either, and the two of you will never be perfect. But if he can make you laugh at least once, causes you to think twice, and if he admits to being human and making mistakes, hold onto him and give him the most you can. He isn’t going to quote poetry, he’s not thinking about you every moment, but he will give you a part of him that he knows you could break. Don’t hurt him, don’t change him, and don’t expect for more than he can give. Don’t analyze. Smile when he makes you happy, yell when he makes you mad, and miss him when he’s not there. Love hard when there is love to be had. Because perfect guys don’t exist, but there’s always one guy that is perfect for you.”, Bob Marley
“When I despair, I remember that all through history the way of truth and love have always won. There have been tyrants and murderers, and for a time, they can seem invincible, but in the end, they always fall. Think of it--always.”, Mahatma Gandhi
“Nothing is impossible, the word itself says 'I'm possible'!”, Audrey Hepburn
“I can't give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.”, Herbert Bayard Swope
“Do what you feel in your heart to be right – for you’ll be criticized anyway.”, Eleanor Roosevelt
“Happiness is not something ready made. It comes from your own actions.”, Dalai Lama XIV
“Peace begins with a smile..”, Mother Teresa
“Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.”, Margaret Mead
“Do not read, as children do, to amuse yourself, or like the ambitious, for the purpose of instruction. No, read in order to live.”, Gustave Flaubert
“What lies behind us and what lies before us are tiny matters compared to what lies within us.”, Ralph Waldo Emerson
“Whatever you are, be a good one.”, Abraham Lincoln
“Two wrongs don't make a right, but they make a good excuse.”, Thomas Szasz
“First they ignore you. Then they ridicule you. And then they attack you and want to burn you. And then they build monuments to you.”, Nicholas Klein
“May you live every day of your life.”, Jonathan Swift
“Isn't it nice to think that tomorrow is a new day with no mistakes in it yet?”, L.M. Montgomery
“You can talk with someone for years, everyday, and still, it won't mean as much as what you can have when you sit in front of someone, not saying a word, yet you feel that person with your heart, you feel like you have known the person for forever.... connections are made with the heart, not the tongue.”, C. JoyBell C.
“Hope is the thing with feathers That perches in the soul And sings the tune without the words And never stops at all.”, Emily Dickinson
“When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life.”, John Lennon
“And once the storm is over, you won’t remember how you made it through, how you managed to survive. You won’t even be sure, whether the storm is really over. But one thing is certain. When you come out of the storm, you won’t be the same person who walked in. That’s what this storm’s all about.”, haruki murakami
“Always do what you are afraid to do.”, Ralph Waldo Emerson
“There is neither happiness nor misery in the world; there is only the comparison of one state with another, nothing more. He who has felt the deepest grief is best able to experience supreme happiness. We must have felt what it is to die, Morrel, that we may appreciate the enjoyments of life. " Live, then, and be happy, beloved children of my heart, and never forget, that until the day God will deign to reveal the future to man, all human wisdom is contained in these two words, 'Wait and Hope.”, Alexandre Dumas
“In the end, we will remember not the words of our enemies, but the silence of our friends.”, Martin Luther King Jr.
“Talent hits a target no one else can hit. Genius hits a target no one else can see.”, Arthur Schopenhauer
“Fantasy is hardly an escape from reality. It's a way of understanding it.”, Lloyd Alexander
“Do not go where the path may lead, go instead where there is no path and leave a trail.”, Ralph Waldo Emerson
“If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.”, Martin Luther King Jr.
“It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat.”, Theodore Roosevelt
“I love to see a young girl go out and grab the world by the lapels. Life's a bitch. You've got to go out and kick ass.”, maya angelou
“Turn your wounds into wisdom.”, Oprah Winfrey
“Prayer is not asking. It is a longing of the soul. It is daily admission of one's weakness. It is better in prayer to have a heart without words than words without a heart.”, Mahatma Gandhi
“The future belongs to those who believe in the beauty of their dreams.”, Eleanor Roosevelt
“I don't trust people who don't love themselves and tell me, 'I love you.' ... There is an African saying which is: Be careful when a naked person offers you a shirt.”, Maya Angelou
“I like living. I have sometimes been wildly, despairingly, acutely miserable, racked with sorrow; but through it all I still know quite certainly that just to be alive is a grand thing.”, Agatha Christie
“I am not sure exactly what heaven will be like, but I know that when we die and it comes time for God to judge us, he will not ask, 'How many good things have you done in your life?' rather he will ask, 'How much love did you put into what you did?”, Mother Teresa
“Don't judge each day by the harvest you reap but by the seeds that you plant.”, Robert Louis Stevenson
“I do not fear death. I had been dead for billions and billions of years before I was born, and had not suffered the slightest inconvenience from it.”, Mark Twain
“But I know, somehow, that only when it is dark enough can you see the stars.”, Martin Luther King, Jr.
“None but ourselves can free our minds.”, Bob Marley
“Sometimes our light goes out, but is blown again into instant flame by an encounter with another human being.”, Albert Schweitzer
“It's kind of fun to do the impossible.”, Walt Disney
“A woman's heart should be so hidden in God that a man has to seek Him just to find her.”, Max Lucado
“The things you do for yourself are gone when you are gone, but the things you do for others remain as your legacy.”, Kalu Ndukwe Kalu
“A painter should begin every canvas with a wash of black, because all things in nature are dark except where exposed by the light.”, Leonardo da Vinci
“When I was a little girl I used to read fairy tales. In fairy tales you meet Prince Charming and he's everything you ever wanted. In fairy tales the bad guy is very easy to spot. The bad guy is always wearing a black cape so you always know who he is. Then you grow up and you realize that Prince Charming is not as easy to find as you thought. You realize the bad guy is not wearing a black cape and he's not easy to spot; he's really funny, and he makes you laugh, and he has perfect hair.”, Taylor Swift
“The most important kind of freedom is to be what you really are. You trade in your reality for a role. You trade in your sense for an act. You give up your ability to feel, and in exchange, put on a mask. There can't be any large-scale revolution until there's a personal revolution, on an individual level. It's got to happen inside first.”, Jim MORRISON
“Don't be afraid of your fears. They're not there to scare you. They're there to let you know that something is worth it.”, C. JoyBell C.
“You never fail until you stop trying.”, Albert Einstein
“If you want to forget something or someone, never hate it, or never hate him/her. Everything and everyone that you hate is engraved upon your heart; if you want to let go of something, if you want to forget, you cannot hate.”, C. JoyBell C.
“The Chinese use two brush strokes to write the word 'crisis.' One brush stroke stands for danger; the other for opportunity. In a crisis, be aware of the danger--but recognize the opportunity.”, John F. Kennedy
“HopeSmiles from the threshold of the year to come, Whispering 'it will be happier'...”, Alfred Lord Tennyson
“Start writing, no matter what. The water does not flow until the faucet is turned on.”, Louis L'Amour
“It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform.”, Roy T. Bennett
“Don't say you don't have enough time. You have exactly the same number of hours per day that were given to Helen Keller, Pasteur, Michelangelo, Mother Teresa, Leonardo da Vinci, Thomas Jefferson, and Albert Einstein.”, H. Jackson Brown Jr.
“We have to allow ourselves to be loved by the people who really love us, the people who really matter. Too much of the time, we are blinded by our own pursuits of people to love us, people that don't even matter, while all that time we waste and the people who do love us have to stand on the sidewalk and watch us beg in the streets! It's time to put an end to this. It's time for us to let ourselves be loved.”, C. JoyBell C.
“Once you have tasted flight, you will forever walk the earth with your eyes turned skyward, for there you have been, and there you will always long to return.”, Leonardo da Vinci
“One love, one heart, one destiny.”, Robert Marley
“Is 'fat' really the worst thing a human being can be? Is 'fat' worse than 'vindictive', 'jealous', 'shallow', 'vain', 'boring' or 'cruel'? Not to me.”, J.K. Rowling
“Dance, when you're broken open. Dance, if you've torn the bandage off. Dance in the middle of the fighting. Dance in your blood. Dance when you're perfectly free.”, Rumi
“To me, Fearless is not the absense of fear. It's not being completely unafraid. To me, Fearless is having fears. Fearless is having doubts. Lots of them. To me, Fearless is living in spite of those things that scare you to death.”, Taylor Swift
“If you are irritated by every rub, how will your mirror be polished?”, Rumi
“You were born with wings, why prefer to crawl through life?”, Rumi
“It doesn't interest me what you do for a living. I want to know what you ache for, and if you dare to dream of meeting your heart's longing.It doesn't interest me how old you are. I want to know if you will risk looking like a fool for love, for your dream, for the adventure of being alive. It doesn't interest me what planets are squaring your moon. I want to know if you have touched the center of your own sorrow, if you have been opened by life's betrayals or have become shriveled and closed from fear of further pain!I want to know if you can sit with pain, mine or your own, without moving to hide it or fade it, or fix it. I want to know if you can be with joy, mine or your own, if you can dance with wildness and let the ecstasy fill you to the tips of your fingers and toes without cautioning us to be careful, to be realistic, to remember the limitations of being human. It doesn't interest me if the story you are telling me is true. I want to know if you can disappoint another to be true to yourself; if you can bear the accusation of betrayal and not betray your own soul; if you can be faithlessand therefore trustworthy. I want to know if you can see beauty even when it's not pretty, every day,and if you can source your own life from its presence. I want to know if you can live with failure, yours and mine, and still stand on the edge of the lake and shout to the silver of the full moon, “Yes!”It doesn't interest me to know where you live or how much money you have. I want to know if you can get up, after the night of grief and despair, weary and bruised to the bone, and do what needs to be done to feed the children. It doesn't interest me who you know or how you came to be here. I want to know if you will stand in the center of the fire with me and not shrink back. It doesn't interest me where or what or with whom you have studied. I want to know what sustains you, from the inside, when all else falls away. I want to know if you can be alone with yourself and if you truly like the company you keep in the empty moments.”, Oriah Mountain Dreamer
“We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the Universe. That makes us something very special.”, Stephen Hawking
“Letting go means to come to the realization that some people are a part of your history, but not a part of your destiny.”, Steve Maraboli
“A ship is safe in harbor, but that's not what ships are for.”, John A. Shedd
“The most common way people give up their power is by thinking they don't have any.”, Alice Walker
“Even if you are on the right track, you’ll get run over if you just sit there.”, Will Rogers
“The past has no power over the present moment.”, Eckhart Tolle
“Life becomes easier and more beautiful when we can see the good in other people.”, Roy T. Bennett
“Don't let the expectations and opinions of other people affect your decisions. It's your life, not theirs. Do what matters most to you; do what makes you feel alive and happy. Don't let the expectations and ideas of others limit who you are. If you let others tell you who you are, you are living their reality — not yours. There is more to life than pleasing people. There is much more to life than following others' prescribed path. There is so much more to life than what you experience right now. You need to decide who you are for yourself. Become a whole being. Adventure.”, Roy T. Bennett
“May the forces of evil become confused on the way to your house.”, George Carlin
“I have come to accept the feeling of not knowing where I am going. And I have trained myself to love it. Because it is only when we are suspended in mid-air with no landing in sight, that we force our wings to unravel and alas begin our flight. And as we fly, we still may not know where we are going to. But the miracle is in the unfolding of the wings. You may not know where you're going, but you know that so long as you spread your wings, the winds will carry you.”, C. JoyBell C.
“The worst part of success is trying to find someone who is happy for you.”, Bette Midler
“The only way that we can live, is if we grow. The only way that we can grow is if we change. The only way that we can change is if we learn. The only way we can learn is if we are exposed. And the only way that we can become exposed is if we throw ourselves out into the open. Do it. Throw yourself.”, C. JoyBell C.
“Don’t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.”, Roy T. Bennett
“There was another life that I might have had, but I am having this one.”, Kazuo Ishiguro
“What's the good of living if you don't try a few things?”, Charles M. Schulz
“Lack of direction, not lack of time, is the problem. We all have twenty-four hour days.”, Zig Ziglar
“Try a little harder to be a little better.”, Gordon B. Hinckley
“The important thing to you is not how many years in your life, but how much life in your years!”, Edward J. Stieglitz
“If you think you are too small to make a difference, try sleeping with a mosquito.”, The Dalai Lama
“The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.”, Eleanor Roosevelt
“Change will not come if we wait for some other person, or if we wait for some other time. We are the ones we've been waiting for. We are the change that we seek.”, Barack Obama
“It does not matter how slowly you go as long as you do not stop.”, Confucius
“Kindness is a language which the deaf can hear and the blind can see.”, Mark Twain
“When I was about eight, I decided that the most wonderful thing, next to a human being, was a book.”, Margaret Walker
“What do we live for, if it is not to make life less difficult for each other?”, George Eliot
“There must be those among whom we can sit down and weep and still be counted as warriors.”, Adrienne Rich
“Anyone can hide. Facing up to things, working through them, that's what makes you strong.”, Sarah Dessen
“When one tugs at a single thing in nature, he finds it attached to the rest of the world.”, John Muir
“My concern is not whether God is on our side; my greatest concern is to be on God's side, for God is always right.”, Abraham Lincoln
“Tears are words that need to be written.”, Paulo Coelho
“It's not the size of the dog in the fight, it's the size of the fight in the dog.”, Mark Twain
“A woman's heart should be so hidden in God that a man has to seek Him just to find her.”, Maya Angelou
“Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life, but define yourself.”, Harvey Fierstein
“Life is too short to waste any amount of time on wondering what other people think about you. In the first place, if they had better things going on in their lives, they wouldn't have the time to sit around and talk about you. What's important to me is not others' opinions of me, but what's important to me is my opinion of myself.”, C. JoyBell C.
“I'd rather be hated for who I am, than loved for who I am not.”, Kurt Cobain
“I must be a mermaid, Rango. I have no fear of depths and a great fear of shallow living.”, Anais Nin
“Trees that are slow to grow bear the best fruit.”, Moliere
“You never change your life until you step out of your comfort zone; change begins at the end of your comfort zone.”, Roy T. Bennett
“Wanting to be someone else is a waste of the person you are.”, Marilyn Monroe
“Parents can only give good advice or put them on the right paths, but the final forming of a person's character lies in their own hands.”, Anne Frank
“To shine your brightest light is to be who you truly are.”, Roy T. Bennett
“Be thankful for everything that happens in your life; it’s all an experience.”, Roy T. Bennett
“The question is not what you look at, but what you see.”, Henry David Thoreau
“Only people who are capable of loving strongly can also suffer great sorrow, but this same necessity of loving serves to counteract their grief and heals them.”, Leo Tolstoy
“We don’t need a list of rights and wrongs, tables of dos and don’ts: we need books, time, and silence. Thou shalt not is soon forgotten, but Once upon a time lasts forever.”, Philip Pullman
“However many holy words you read, however many you speak, what good will they do you if you do not act on upon them?”, Buddha Siddhartha Guatama Shakyamuni
“Keep your face always toward the sunshine - and shadows will fall behind you.”, Walt Whitman
“Courage isn't having the strength to go on - it is going on when you don't have strength.”, Napoleon Bonaparte
“there is a place in the heart thatwill never be filleda spaceand even during thebest momentsandthe greatest timestimeswe will know itwe will know itmore thaneverthere is a place in the heart thatwill never be filledandwe will waitandwaitin that space.”, Charles bukowski
“Ask for what you want and be prepared to get it!”, Maya Angelou
“The desire to reach for the stars is ambitious. The desire to reach hearts is wise.”, Maya Angelou
“If I should have a daughter…“Instead of “Mom”, she’s gonna call me “Point B.” Because that way, she knows that no matter what happens, at least she can always find her way to me. And I’m going to paint the solar system on the back of her hands so that she has to learn the entire universe before she can say “Oh, I know that like the back of my hand.”She’s gonna learn that this life will hit you, hard, in the face, wait for you to get back up so it can kick you in the stomach. But getting the wind knocked out of you is the only way to remind your lungs how much they like the taste of air. There is hurt, here, that cannot be fixed by band-aids or poetry, so the first time she realizes that Wonder-woman isn’t coming, I’ll make sure she knows she doesn’t have to wear the cape all by herself. Because no matter how wide you stretch your fingers, your hands will always be too small to catch all the pain you want to heal. Believe me, I’ve tried.And “Baby,” I’ll tell her “don’t keep your nose up in the air like that, I know that trick, you’re just smelling for smoke so you can follow the trail back to a burning house so you can find the boy who lost everything in the fire to see if you can save him. Or else, find the boy who lit the fire in the first place to see if you can change him.”But I know that she will anyway, so instead I’ll always keep an extra supply of chocolate and rain boats nearby, ‘cause there is no heartbreak that chocolate can’t fix. Okay, there’s a few heartbreaks chocolate can’t fix. But that’s what the rain boots are for, because rain will wash away everything if you let it.I want her to see the world through the underside of a glass bottom boat, to look through a magnifying glass at the galaxies that exist on the pin point of a human mind. Because that’s how my mom taught me. That there’ll be days like this, “There’ll be days like this my momma said” when you open your hands to catch and wind up with only blisters and bruises. When you step out of the phone booth and try to fly and the very people you wanna save are the ones standing on your cape. When your boots will fill with rain and you’ll be up to your knees in disappointment and those are the very days you have all the more reason to say “thank you,” ‘cause there is nothing more beautiful than the way the ocean refuses to stop kissing the shoreline no matter how many times it’s sent away.You will put the “wind” in win some lose some, you will put the “star” in starting over and over, and no matter how many land mines erupt in a minute be sure your mind lands on the beauty of this funny place called life.And yes, on a scale from one to over-trusting I am pretty damn naive but I want her to know that this world is made out of sugar. It can crumble so easily but don’t be afraid to stick your tongue out and taste it.“Baby,” I’ll tell her “remember your mama is a worrier but your papa is a warrior and you are the girl with small hands and big eyes who never stops asking for more.”Remember that good things come in threes and so do bad things and always apologize when you’ve done something wrong but don’t you ever apologize for the way your eyes refuse to stop shining.Your voice is small but don’t ever stop singing and when they finally hand you heartbreak, slip hatred and war under your doorstep and hand you hand-outs on street corners of cynicism and defeat, you tell them that they really ought to meet your mother.”, Sarah Kay
“If we listened to our intellect we'd never have a love affair. We'd never have a friendship. We'd never go in business because we'd be cynical: "It's gonna go wrong." Or "She's going to hurt me." Or,"I've had a couple of bad love affairs, so therefore . . ." Well, that's nonsense. You're going to miss life. You've got to jump off the cliff all the time and build your wings on the way down.”, Ray Bradbury
“The unhappiest people in this world, are those who care the most about what other people think.”, C. JoyBell C.
“Be steady and well-ordered in your life so that you can be fierce and original in your work.”, Gustave Flaubert
“Do no harm and leave the world a better place than you found it.”, Patricia Cornwell
“If you want to be happy, be.”, Tolstoy Leo
“If you don't go after what you want, you'll never have it. If you don't ask, the answer is always no. If you don't step forward, you're always in the same place.”, Nora Roberts
“Shoot for the moon. Even if you miss, you'll land among the stars.”, Norman Vincent Peale
“Whatever you do, you need courage. Whatever course you decide upon, there is always someone to tell you that you are wrong. There are always difficulties arising that tempt you to believe your critics are right. To map out a course of action and follow it to an end requires some of the same courage that a soldier needs. Peace has its victories, but it takes brave men and women to win them.”, Ralph Waldo Emerson
“If we have no peace, it is because we have forgotten that we belong to each other.”, Mother Teresa
“I sought to hear the voice of God and climbed the topmost steeple, but God declared: "Go down again - I dwell among the people.”, John Henry Newman
“No matter how plain a woman may be, if truth and honesty are written across her face, she will be beautiful.”, Eleanor Roosevelt
“For me, I am driven by two main philosophies: know more today about the world than I knew yesterday and lessen the suffering of others. You'd be surprised how far that gets you.”, Neil deGrasse Tyson
“Stepping onto a brand-new path is difficult, but not more difficult than remaining in a situation, which is not nurturing to the whole woman.”, Maya Angelou
“I have never met a man so ignorant that I couldn't learn something from him.”, Galileo Galilei
“There is nothing more dreadful than the habit of doubt. Doubt separates people. It is a poison that disintegrates friendships and breaks up pleasant relations. It is a thorn that irritates and hurts; it is a sword that kills.”, Buddha Siddhartha Guatama Shakyamuni
“Pain is a pesky part of being human, I've learned it feels like a stab wound to the heart, something I wish we could all do without, in our lives here. Pain is a sudden hurt that can't be escaped. But then I have also learned that because of pain, I can feel the beauty, tenderness, and freedom of healing. Pain feels like a fast stab wound to the heart. But then healing feels like the wind against your face when you are spreading your wings and flying through the air! We may not have wings growing out of our backs, but healing is the closest thing that will give us that wind against our faces.”, C. JoyBell C.
“Earth provides enough to satisfy every man's needs, but not every man's greed.”, Mahatma Gandhi
“I’ve known people that the world has thrown everything at to discourage them...to break their spirit. And yet something about them retains a dignity. They face life and don’t ask quarters.”, Horton Foote
“Imagination is everything. It is the preview of life's coming attractions.”, Albert Einstein
“We're so self-important. So arrogant. Everybody's going to save something now. Save the trees, save the bees, save the whales, save the snails. And the supreme arrogance? Save the planet! Are these people kidding? Save the planet? We don't even know how to take care of ourselves; we haven't learned how to care for one another. We're gonna save the fuckin' planet? . . . And, by the way, there's nothing wrong with the planet in the first place. The planet is fine. The people are fucked! Compared with the people, the planet is doin' great. It's been here over four billion years . . . The planet isn't goin' anywhere, folks. We are! We're goin' away. Pack your shit, we're goin' away. And we won't leave much of a trace. Thank God for that. Nothing left. Maybe a little Styrofoam. The planet will be here, and we'll be gone. Another failed mutation; another closed-end biological mistake.”, George Carlin
“Two roads diverged in a wood, and I -I took the one less traveled by,And that has made all the difference.”, robert frost
“My only advice is to stay aware, listen carefully, and yell for help if you need it.”, Judy Blume
“I am not a teacher, but an awakener.”, Robert Frost
“Write it on your heart that every day is the best day in the year.”, Ralph Waldo Emerson
“Any book that helps a child to form a habit of reading, to make reading one of his deep and continuing needs, is good for him.”, Maya Angelou
“Do not set aside your happiness. Do not wait to be happy in the future. The best time to be happy is always now.”, Roy T. Bennett
“No matter how your heart is grieving, if you keep on believing, the dreams that you wish will come true.”, Walt Disney Company
“We don't make mistakes, just happy little accidents.”, Bob Ross
“If you make a mistake and do not correct it, this is called a mistake.”, Confucius
“Men are from Earth, women are from Earth. Deal with it.”, George Carlin
“Where there is ruin, there is hope for a treasure.”, Rumi
“Just because you can doesn't mean you should.”, Sherrilyn Kenyon
“Because paper has more patience than people. ”, Anne Frank
“A star falls from the sky and into your hands. Then it seeps through your veins and swims inside your blood and becomes every part of you. And then you have to put it back into the sky. And it's the most painful thing you'll ever have to do and that you've ever done. But what's yours is yours. Whether it’s up in the sky or here in your hands. And one day, it'll fall from the sky and hit you in the head real hard and that time, you won't have to put it back in the sky again.”, C. JoyBell C.
“Have courage for the great sorrows of life and patience for the small ones; and when you have laboriously accomplished your daily task, go to sleep in peace. God is awake.”, Victor Hugo
“When I let go of what I am, I become what I might be.”, Lao Tzu
“There is a candle in your heart, ready to be kindled.There is a void in your soul, ready to be filled.You feel it, don't you?”, Mawlana Jalal-al-Din Rumi
“why are trying so hard to fit in, when you're born to stand out”, Oliver James
“Ladies and gentlemen of the class of '97:Wear sunscreen.If I could offer you only one tip for the future, sunscreen would be it. The long-term benefits of sunscreen have been proved by scientists, whereas the rest of my advice has no basis more reliable than my own meandering experience. I will dispense this advice now.Enjoy the power and beauty of your youth. Oh, never mind. You will not understand the power and beauty of your youth until they've faded. But trust me, in 20 years, you'll look back at photos of yourself and recall in a way you can't grasp now how much possibility lay before you and how fabulous you really looked. You are not as fat as you imagine.Don't worry about the future. Or worry, but know that worrying is as effective as trying to solve an algebra equation by chewing bubble gum. The real troubles in your life are apt to be things that never crossed your worried mind, the kind that blindside you at 4 p.m. on some idle Tuesday.”, Mary Schmich
“The best thing to hold onto in life is each other.”, Audrey Hepburn
“Happiness is like a butterfly which, when pursued, is always beyond our grasp, but, if you will sit down quietly, may alight upon you.”, Nathaniel Hawthorne
“Death is no more than passing from one room into another. But there's a difference for me, you know. Because in that other room I shall be able to see.”, Helen Keller
“To love and win is the best thing.To love and lose, the next best.”, William Makepeace Thackeray
“No one really knows why they are alive until they know what they'd die for.”, Martin Luther King Jr.
“Change the way you look at things and the things you look at change.”, Wayne W. Dyer
“All that we are is the result of what we have thought: it is founded on our thoughts and made up of our thoughts. If a man speak or act with an evil thought, suffering follows him as the wheel follows the hoof of the beast that draws the wagon.... If a man speak or act with a good thought, happiness follows him like a shadow that never leaves him.”, Gautama Buddha
“God allows us to experience the low points of life in order to teach us lessons that we could learn in no other way.”, C.S. Lewis
“He that can have patience can have what he will.”, Benjamin Franklin
“Owning our story can be hard but not nearly as difficult as spending our lives running from it. Embracing our vulnerabilities is risky but not nearly as dangerous as giving up on love and belonging and joy—the experiences that make us the most vulnerable. Only when we are brave enough to explore the darkness will we discover the infinite power of our light.”, Brene Brown
“I must be willing to give up what I am in order to become what I will be.”, Albert Einstein
“You only need one man to love you. But him to love you free like a wildfire, crazy like the moon, always like tomorrow, sudden like an inhale and overcoming like the tides. Only one man and all of this.”, C. JoyBell C.
“In the name of God, stop a moment, cease your work, look around you.”, Leo Tolstoy
“You'll never find a rainbow if you're looking down”, Charlie Chaplin
“There is some kind of a sweet innocence in being human- in not having to be just happy or just sad- in the nature of being able to be both broken and whole, at the same time.”, C. JoyBell C.
“Wanting to be someone else is a waste of who you are”, Kurt Cobain
“I never want to change so much that people can't recognize me.”, Taylor Swift
“Spoon feeding in the long run teaches us nothing but the shape of the spoon.”, E.M. Forster
“The only person who can pull me down is myself, and I'm not going to let myself pull me down anymore.”, C. JoyBell C.
“The biggest adventure you can ever take is to live the life of your dreams.”, Oprah Winfrey
“Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution; it represents the wise choice of many alternatives - choice, not chance, determines your destiny.”, Aristotle
“I think that we are like stars. Something happens to burst us open; but when we burst open and think we are dying; we’re actually turning into a supernova. And then when we look at ourselves again, we see that we’re suddenly more beautiful than we ever were before!”, C. JoyBell C.
“I never saw a wild thing sorry for itself”, D.H. Lawrence
“Every day, think as you wake up, today I am fortunate to be alive, I have a precious human life, I am not going to waste it. I am going to use all my energies to develop myself, to expand my heart out to others; to achieve enlightenment for the benefit of all beings. I am going to have kind thoughts towards others, I am not going to get angry or think badly about others. I am going to benefit others as much as I can.”, The Dalai Lama
“There is the great lesson of 'Beauty and the Beast,' that a thing must be loved before it is lovable.”, Chesterton, G. K. (Gilbert Keith)
“The best things in life make you sweaty.”, Edgar Allan Poe
“A Penny Saved is a Penny Earned”, Benjamin Franklin
“Death is not the greatest loss in life. The greatest loss is what dies inside while still alive. Never surrender.”, Tupac Shakur
“If a man is called to be a street sweeper, he should sweep streets even as a Michaelangelo painted, or Beethoven composed music or Shakespeare wrote poetry. He should sweep streets so well that all the hosts of heaven and earth will pause to say, 'Here lived a great street sweeper who did his job well.”, Martin Luther King Jr.
“Make the most of yourself....for that is all there is of you.”, Ralph Waldo Emerson
“Believe you can and you're halfway there.”, Theodore Roosevelt
“Many of life's failures are people who did not realize how close they were to success when they gave up.”, Thomas A. Edison
“Swords can win territories but not hearts, forces can bend heads but not minds.”, Mirza Tahir Ahmad
“I said to my soul, be still and wait without hope, for hope would be hope for the wrong thing; wait without love, for love would be love of the wrong thing; there is yet faith, but the faith and the love are all in the waiting. Wait without thought, for you are not ready for thought: So the darkness shall be the light, and the stillness the dancing.”, T.S. Eliot
“The damage was permanent; there would always be scars. But even the angriest scars faded over time until it was difficult to see them written on the skin at all, and the only thing that remained was the memory of how painful it had been.”, Jodi Picoult
“Around here, however, we don't look backwards for very long. We keep moving forward, opening up new doors and doing new things, because we're curious...and curiosity keeps leading us down new paths.”, Walt Disney Company
“We meet no ordinary people in our lives.”, C.S. Lewis; Inspirational Christian Library
“I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living, It's a way of looking at life through the wrong end of a telescope. Which is what I do, And that enables you to laugh at life's realities.”, Dr. Seuss
“We either make ourselves miserable, or we make ourselves strong. The amount of work is the same.”, Carlos Castaneda
“Nothing great was ever achieved without enthusiasm.”, Ralph Waldo Emerson
“I'd rather learn from one bird how to sing than teach ten thousand stars how not to dance”, E.E. Cummings
“When you do the right thing, you get the feeling of peace and serenity associated with it. Do it again and again.”, Roy T. Bennett
“Music melts all the separate parts of our bodies together.”, Anais Nin
“Too often we underestimate the power of a touch, a smile, a kind word, a listening ear, an honest compliment, or the smallest act of caring, all of which have the potential to turn a life around.”, Leo Buscaglia
“People have to forgive. We don't have to like them, we don't have to be friends with them, we don't have to send them hearts in text messages, but we have to forgive them, to overlook, to forget. Because if we don't we are tying rocks to our feet, too much for our wings to carry!”, C. JoyBell C.
“Be more concerned with your character than your reputation, because your character is what you really are, while your reputation is merely what others think you are.”, John Wooden
“Just be yourself, there is no one better.”, Taylor Swift
“Dream as if you will live forever; Live as if you will die today.”, James  Dean
“I shall look at you out of the corner of my eye, and you will say nothing. Words are the source of misunderstandings.”, Antoine de Saint-Exupéry
“Once we accept our limits, we go beyond them.”, Albert Einstein
“Scar tissue is stronger than regular tissue. Realize the strength, move on.”, Henry Rollins
“Without fear there cannot be courage.”, Christopher Paolini
“It is always the false that makes you suffer, the false desires and fears, the false values and ideas, the false relationships between people. Abandon the false and you are free of pain; truth makes happy, truth liberates.”, Sri Nisargadatta Maharaj
“Fiction is art and art is the triumph over chaos… to celebrate a world that lies spread out around us like a bewildering and stupendous dream.”, John Cheever
“Those who look for the bad in people will surely find it.”, Abraham Lincoln
“I'd rather be a rising ape than a falling angel.”, Terry Pratchett
“I learned this, at least, by my experiment; that if one advances confidently in the direction of his dreams, and endeavors to live the life which he has imagined, he will meet with a success unexpected in common hours..”, Thoreau, Henry David
“Resentment is like drinking poison and then hoping it will kill your enemies.”, Nelson Mandela
“You've got this life and while you've got it, you'd better kiss like you only have one moment, try to hold someone's hand like you will never get another chance to, look into people's eyes like they're the last you'll ever see, watch someone sleeping like there's no time left, jump if you feel like jumping, run if you feel like running, play music in your head when there is none, and eat cake like it's the only one left in the world!”, C. JoyBell C.
“Man cannot discover new oceans unless he has the courage to lose sight of the shore.”, Andre Gide
“We have to create culture, don't watch TV, don't read magazines, don't even listen to NPR. Create your own roadshow. The nexus of space and time where you are now is the most immediate sector of your universe, and if you're worrying about Michael Jackson or Bill Clinton or somebody else, then you are disempowered, you're giving it all away to icons, icons which are maintained by an electronic media so that you want to dress like X or have lips like Y. This is shit-brained, this kind of thinking. That is all cultural diversion, and what is real is you and your friends and your associations, your highs, your orgasms, your hopes, your plans, your fears. And we are told 'no', we're unimportant, we're peripheral. 'Get a degree, get a job, get a this, get a that.' And then you're a player, you don't want to even play in that game. You want to reclaim your mind and get it out of the hands of the cultural engineers who want to turn you into a half-baked moron consuming all this trash that's being manufactured out of the bones of a dying world.”, Terence McKenna
“Go into yourself. Find out the reason that commands you to write; see whether it has spread its roots into the very depths of your heart; confess to yourself whether you would have to die if you were forbidden to write. This most of all: ask yourself in the most silent hour of your night: must I write? Dig into yourself for a deep answer. And if this answer rings out in assent, if you meet this solemn question with a strong, simple “I must,” then build your life in accordance with this necessity; your whole life, even into its humblest and most indifferent hour, must become a sign and witness to this impulse. Then come close to Nature. Then, as if no one had ever tried before, try to say what you see and feel and love and lose......Describe your sorrows and desires, the thoughts that pass through your mind and your belief in some kind of beauty - describe all these with heartfelt, silent, humble sincerity and, when you express yourself, use the Things around you, the images from your dreams, and the objects that you remember. If your everyday life seems poor, don’t blame it; blame yourself; admit to yourself that you are not enough of a poet to call forth its riches; because for the creator there is not poverty and no poor, indifferent place. And even if you found yourself in some prison, whose walls let in none of the world’s sounds – wouldn’t you still have your childhood, that jewel beyond all price, that treasure house of memories? Turn your attentions to it. Try to raise up the sunken feelings of this enormous past; your personality will grow stronger, your solitude will expand and become a place where you can live in the twilight, where the noise of other people passes by, far in the distance. - And if out of this turning-within, out of this immersion in your own world, poems come, then you will not think of asking anyone whether they are good or not. Nor will you try to interest magazines in these works: for you will see them as your dear natural possession, a piece of your life, a voice from it. A work of art is good if it has arisen out of necessity. That is the only way one can judge it.”, Rainer Maria Rilke
“What a large volume of adventures may be grasped within the span of his little life by him who interests his heart in everything.”, Laurence Sterne
“Equality is not a concept. It's not something we should be striving for. It's a necessity. Equality is like gravity. We need it to stand on this earth as men and women, and the misogyny that is in every culture is not a true part of the human condition. It is life out of balance, and that imbalance is sucking something out of the soul of every man and woman who's confronted with it. We need equality. Kinda now.”, Joss Whedon
“It is by no means an irrational fancy that, in a future existence, we shall look upon what we think our present existence, as a dream.”, Edgar Allan Poe
“Those who bring sunshine to the lives of others cannot keep it from themselves.”, J.M. Barrie
“For myself I am an optimist - it does not seem to be much use to be anything else.”, Winston S. Churchill
“If you do follow your bliss you put yourself on a kind of track that has been there all the while, waiting for you, and the life that you ought to be living is the one you are living. Follow your bliss and don't be afraid, and doors will open where you didn't know they were going to be.”, Joseph Campbell
“Sometimes all a person wants is an empathetic ear; all he or she needs is to talk it out. Just offering a listening ear and an understanding heart for his or her suffering can be a big comfort.”, Roy T. Bennett
“Always dream and shoot higher than you know you can do. Do not bother just to be better than your contemporaries or predecessors. Try to be better than yourself.”, William Faulkner
“Be like the sun for grace and mercy. Be like the night to cover others' faults. Be like running water for generosity. Be like death for rage and anger. Be like the Earth for modesty. Appear as you are. Be as you appear.”, Rumi
“I was suffering the easily foreseeable consequences. Addiction is the hallmark of every infatuation-based love story. It all begins when the object of your adoration bestows upon you a heady, hallucinogenic dose of something you never dared to admit you wanted-an emotional speedball, perhaps, of thunderous love and roiling excitement. Soon you start craving that intense attention, with a hungry obsession of any junkie. When the drug is witheld, you promptly turn sick, crazy, and depleted (not to mention resentful of the dealer who encouraged this addiction in the first place but now refuses to pony up the good stuff anymore-- despite the fact that you know he has it hidden somewhere, goddamn it, because he used to give it to you for free). Next stage finds you skinny and shaking in a corner, certain only that you would sell your soul or rob your neighbors just to have 'that thing' even one more time. Meanwhile, the object of your adoration has now become repulsed by you. He looks at you like you're someone he's never met before, much less someone he once loved with high passion. The irony is,you can hardly blame him. I mean, check yourself out. You're a pathetic mess,unrecognizable even to your own eyes. So that's it. You have now reached infatuation's final destination-- the complete and merciless devaluation of self." - pg 20-21”, Elizabeth Gilbert
“The great thing to remember is that though our feelings come and go God's love for us does not.”, C.S. Lewis
“Any emotion, if it is sincere, is involuntary.”, Mark Twain
“Responsibility to yourself means refusing to let others do your thinking, talking, and naming for you...it means that you do not treat your body as a commodity with which to purchase superficial intimacy or economic security; for our bodies to be treated as objects, our minds are in mortal danger. It means insisting that those to whom you give your friendship and love are able to respect your mind. It means being able to say, with Charlotte Bronte's Jane Eyre: "I have an inward treasure born with me, which can keep me alive if all the extraneous delights should be withheld or offered only at a price I cannot afford to give.Responsibility to yourself means that you don't fall for shallow and easy solutions--predigested books and ideas...marrying early as an escape from real decisions, getting pregnant as an evasion of already existing problems. It means that you refuse to sell your talents and aspirations short...and this, in turn, means resisting the forces in society which say that women should be nice, play safe, have low professional expectations, drown in love and forget about work, live through others, and stay in the places assigned to us. It means that we insist on a life of meaningful work, insist that work be as meaningful as love and friendship in our lives. It means, therefore, the courage to be "different"...The difference between a life lived actively, and a life of passive drifting and dispersal of energies, is an immense difference. Once we begin to feel committed to our lives, responsible to ourselves, we can never again be satisfied with the old, passive way.”, Adrienne Rich
“A goal without a plan is just a wish.”, Antoine de Saint-Exupéry
“I thank you God for this most amazing day, for the leaping greenly spirits of trees, and for the blue dream of sky and for everything which is natural, which is infinite, which is yes.”, e.e. cummings
“We come spinning out of nothingness, scattering stars like dust.”, Rumi
“Don't ever take a fence down until you know why it was put up.”, Robert Frost
“If I am to be fallen into love, I will. And if as a result I will appear to be stupid, disillusioned, and of poor judgment, I will. And I would be damned if I cared what other people think. For I would rather be thought of as all of these things, than not love. If in loving, I become the naked woman on the horse, I will ride that horse with my head held high. This is my spirit. I am unbreakable.”, C. JoyBell C.
“I never said it would be easy, I only said it would be worth it.”, Mae West
“Do all the good you can,By all the means you can,In all the ways you can,In all the places you can,At all the times you can,To all the people you can,As long as ever you can.”, John Wesley
“There's more to life than dating the boy on the football team.”, Taylor Swift
“Guard well your thoughts when alone and your words when accompanied.”, Roy T. Bennett
“Don’t ask what the world needs. Ask what makes you come alive, and go do it. Because what the world needs is people who have come alive.”, Howard Thurman
“I'm not in search of sanctity, sacredness, purity; these things are found after this life, not in this life; but in this life I search to be completely human: to feel, to give, to take, to laugh, to get lost, to be found, to dance, to love and to lust, to be so human.”, C. JoyBell C.
“Luck is what happens when preparation meets opportunity.”, Seneca
“Never dull your shine for somebody else.”, Tyra Banks
“People don't realize how a man's whole life can be changed by one book.”, Malcolm X
“Government exists to protect us from each other. Where government has gone beyond its limits is in deciding to protect us from ourselves.”, Ronald Reagan
“I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.”, Martin Luther King Jr.
“The rights of every man are diminished when the rights of one man are threatened.”, John F. Kennedy
“Whenever something bad happens, keep calm, take a few deep breaths and shift the focus to something positive.”, Roy T. Bennett
“Any intelligent fool can make things bigger, more complex, and more violent. It takes a touch of genius — and a lot of courage to move in the opposite direction.”, E.F. Schumacher
“The surest way to make your dreams come true is to live them.”, Roy T. Bennett
“Don't think. Thinking is the enemy of creativity. It's self-conscious and anything self-conscious is lousy. You can't "try" to do things. You simply "must" do things.”, Ray Bradbury
“What's the world's greatest lie?... It's this: that at a certain point in our lives, we lose control of what's happening to us, and our lives become controlled by fate.”, Paulo Coelho
“Bottom line is, even if you see 'em coming, you're not ready for the big moments. No one asks for their life to change, not really. But it does. So what are we, helpless? Puppets? No. The big moments are gonna come. You can't help that. It's what you do afterwards that counts. That's when you find out who you are.”, Joss Whedon
“The universe is big, its vast and complicated, and ridiculous. And sometimes, very rarely, impossible things just happen and we call them miracles. And that's the theory. Nine hundred years, never seen one yet, but this would do me.”, Steven Moffat
“The power of finding beauty in the humblest things makes home happy and life lovely.”, Louisa May Alcott
“The love that moves the sun and the other stars.”, Elizabeth Gilbert
“It's the children the world almost breaks who grow up to save it.”, Frank Warren
“If you're horrible to me, I'm going to write a song about it, and you won't like it. That's how I operate.”, Taylor Swift
“If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.”, Roald Dahl
“To call woman the weaker sex is a libel; it is man's injustice to woman. If by strength is meant brute strength, then, indeed, is woman less brute than man. If by strength is meant moral power, then woman is immeasurably man's superior. Has she not greater intuition, is she not more self-sacrificing, has she not greater powers of endurance, has she not greater courage? Without her, man could not be. If nonviolence is the law of our being, the future is with woman. Who can make a more effective appeal to the heart than woman?"[To the Women of India (Young India, Oct. 4, 1930)]”, Mahatma Gandhi
“Shallow men believe in luck or in circumstance. Strong men believe in cause and effect.”, Ralph Waldo Emerson
“Don't think about making life better for other people who don't even deserve you, rather, focus on making your life the best, for yourself and those who love you.”, C. JoyBell C.
“Since I was young, I have always known this: Life damages us, every one. We can’t escape that damage. But now, I am also learning this: We can be mended. We mend each other”, Veronica Roth
“Being grateful does not mean that everything is necessarily good. It just means that you can accept it as a gift.”, Roy T. Bennett
“No matter who you are, no matter what you did, no matter where you've come from, you can always change, become a better version of yourself.”, Madonna
“Life was meant to be lived, and curiosity must be kept alive. One must never, for whatever reason, turn his back on life.”, Eleanor Roosevelt
“Let us rise up and be thankful, for if we didn't learn a lot at least we learned a little, and if we didn't learn a little, at least we didn't get sick, and if we got sick, at least we didn't die; so, let us all be thankful.”, Buddha
“As my sufferings mounted I soon realized that there were two ways in which I could respond to my situation -- either to react with bitterness or seek to transform the suffering into a creative force. I decided to follow the latter course.”, Martin Luther King Jr.
“younot wanting mewasthe beginning of mewanting myselfthank you”, Nayyirah Waheed
“No act of kindness, no matter how small, is ever wasted.”, Aesop
“The person in life that you will always be with the most, is yourself. Because even when you are with others, you are still with yourself, too! When you wake up in the morning, you are with yourself, laying in bed at night you are with yourself, walking down the street in the sunlight you are with yourself.What kind of person do you want to walk down the street with? What kind of person do you want to wake up in the morning with? What kind of person do you want to see at the end of the day before you fall asleep? Because that person is yourself, and it's your responsibility to be that person you want to be with. I know I want to spend my life with a person who knows how to let things go, who's not full of hate, who's able to smile and be carefree. So that's who I have to be.”, C. JoyBell C.
“The easiest thing to be in the world is you. The most difficult thing to be is what other people want you to be. Don't let them put you in that position.”, Leo Buscaglia
“I do not care so much what I am to others as I care what I am to myself.”, Michel de Montaigne
“Nothing is permanent in this wicked world, not even our troubles.”, Charlie Chaplin
“Remember that everyone you meet is afraid of something, loves something and has lost something.”, H. Jackson Brown
“All The Woulda-Coulda-ShouldasLayin' In The Sun,Talkin' 'Bout The ThingsThey Woulda-Coulda-Shoulda Done...But All Those Woulda-Coulda-ShouldasAll Ran Away And HidFrom One Little Did.”, Shel Silverstein
“I've come to believe that each of us has a personal calling that's as unique as a fingerprint - and that the best way to succeed is to discover what you love and then find a way to offer it to others in the form of service, working hard, and also allowing the energy of the universe to lead you. ”, Oprah Winfrey
“Only those who attempt the absurd can achieve the impossible.”, Albert Einstein
“The dog is a gentleman; I hope to go to his heaven not man's.”, Mark Twain
“I think that the best thing we can do for our children is to allow them to do things for themselves, allow them to be strong, allow them to experience life on their own terms, allow them to take the subway... let them be better people, let them believe more in themselves.”, C. JoyBell C.
“If a problem is fixable, if a situation is such that you can do something about it, then there is no need to worry. If it's not fixable, then there is no help in worrying. There is no benefit in worrying whatsoever.”, The Dalai Lama
“To love means loving the unlovable. To forgive means pardoning the unpardonable. Faith means believing the unbelievable. Hope means hoping when everything seems hopeless.”, G.K. Chesterton
“I'm unpredictable, I never know where I'm going until I get there, I'm so random, I'm always growing, learning, changing, I'm never the same person twice. But one thing you can be sure of about me; is I will always do exactly what I want to do.”, C. JoyBell C.
“We are like sculptors, constantly carving out of others the image we long for, need, love or desire, often against reality, against their benefit, and always, in the end, a disappointment, because it does not fit them.”, Anais Nin
“Certain thoughts are prayers. There are moments when, whatever be the attitude of the body, the soul is on its knees.”, Victor Hugo
“Dripping water hollows out stone, not through force but through persistence.”, Ovid
“Start a huge, foolish project, like Noah…it makes absolutely no difference what people think of you.”, Rumi
“A hero is no braver than an ordinary man, but he is brave five minutes longer.”, Ralph Waldo Emerson
“I heard a definition once: Happiness is health and a short memory! I wish I'd invented it, because it is very true.”, Audrey Hepburn
“Attitude is a little thing that makes a big difference.”, Winston S. Churchill
“Life is funny. Things change, people change, but you will always be you, so stay true to yourself and never sacrifice who you are for anyone.”, Zayn Malik
“If you dont have any shadows you're not in the light”, Lady Gaga
“Remember, if you ever need a helping hand, it's at the end of your arm, as you get older, remember you have another hand: The first is to help yourself, the second is to help others.”, Sam Levenson
“I trust that everything happens for a reason, even if we are not wise enough to see it.”, Oprah Winfrey
“All I can be is me- whoever that is. ”, Bob Dylan
“The universe is made of stories, not of atoms.”, Muriel Rukeyser
“Not knowing you can't do something, is sometimes all it takes to do it.”, Ally Carter
“We must live together as brothers or perish together as fools.”, Martin Luther King Jr.
“I sustain myself with the love of family.”, Maya Angelou
“Art is the proper task of life. ”, Friedrich Nietzsche
“The truth is that the world is full of dragons, and none of us are as powerful or cool as we’d like to be. And that sucks. But when you’re confronted with that fact, you can either crawl into a hole and quit, or you can get out there, take off your shoes, and Bilbo it up.”, Patrick Rothfuss
“Always bear in mind that your own resolution to succeed is more important than any one thing.”, Abraham Lincoln
“When you see a good person, think of becoming like her/him. When you see someone not so good, reflect on your own weak points.”, Confucius
“Without leaps of imagination or dreaming, we lose the excitement of possibilities. Dreaming, after all is a form of planning.”, Gloria Steinem
“You are not the victim of the world, but rather the master of your own destiny. It is your choices and decisions that determine your destiny.”, Roy T. Bennett
“Anger is like flowing water; there's nothing wrong with it as long as you let it flow. Hate is like stagnant water; anger that you denied yourself the freedom to feel, the freedom to flow; water that you gathered in one place and left to forget. Stagnant water becomes dirty, stinky, disease-ridden, poisonous, deadly; that is your hate. On flowing water travels little paper boats; paper boats of forgiveness. Allow yourself to feel anger, allow your waters to flow, along with all the paper boats of forgiveness. Be human.”, C. JoyBell C.
“You save yourself or you remain unsaved.”, Alice Sebold
“Life is a process of becoming, a combination of states we have to go through. Where people fail is that they wish to elect a state and remain in it. This is a kind of death.”, ANAIS NIN
“This life is yours. Take the power to choose what you want to do and do it well. Take the power to love what you want in life and love it honestly. Take the power to walk in the forest and be a part of nature. Take the power to control your own life. No one else can do it for you. Take the power to make your life happy.”, Susan Polis Schutz
“No life is a waste," the Blue Man said. "The only time we waste is the time we spend thinking we're alone.”, Mitch Albom
“Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.”, Joss Whedon
“Music is the literature of the heart; it commences where speech ends.”, Alphonse de Lamartine
“Weekends don't count unless you spend them doing something completely pointless.”, Bill Watterson
“A smart person knows how to talk. A wise person knows when to be silent.”, Roy T. Bennett
“Only he who attempts the absurd is capable of achieving the impossible.”, Miguel de Unamuno
“Amor Fati – “Love Your Fate”, which is in fact your life.”, Friedrich Nietzsche
“There's nothing wrong with you. There's a lot wrong with the world you live in. And definitely get out of high school and make everyone sorry.”, Chris Colfer
“When I was growing up I always wanted to be someone. Now I realize I should have been more specific.”, Lily Tomlin
“One must still have chaos in oneself to be able to give birth to a dancing star.”, Friedrich Nietzsche
“There are two kinds of teachers: the kind that fill you with so much quail shot that you can't move, and the kind that just gives you a little prod behind and you jump to the skies.”, Robert Frost
“Adapt what is useful, reject what is useless, and add what is specifically your own.”, Bruce Lee
“Life moves on, whether we act as cowards or heroes. Life has no other discipline to impose, if we would but realize it, than to accept life unquestioningly. Everything we shut our eyes to, everything we run away from, everything we deny, denigrate or despise, serves to defeat us in the end. What seems nasty, painful, evil, can become a source of beauty, joy, and strength, if faced with an open mind. Every moment is a golden one for him who has the vision to recognize it as such”, Henry Miller
“If you don’t give up on something you truly believe in, you will find a way.”, Roy T. Bennett
“Well done is better than well said.”, Benjamin Franklin
“The most important decision you make is to be in a good mood.”, Voltaire
“The strength of a woman is not measured by the impact that all her hardships in life have had on her; but the strength of a woman is measured by the extent of her refusal to allow those hardships to dictate her and who she becomes.”, C. JoyBell C.
“He is free to evade reality, he is free to unfocus his mind and stumble blindly down any road he pleases, but not free to avoid the abyss he refuses to see.”, Ayn Rand
“I do not believe in taking the right decision, I take a decision and make it right.”, Muhammad Ali Jinnah
“Do not worry about your difficulties in Mathematics. I can assure you mine are still greater.”, Albert Einstein
“I am a happy camper so I guess I’m doing something right. Happiness is like a butterfly; the more you chase it, the more it will elude you, but if you turn your attention to other things, it will come and sit softly on your shoulder.”, J. Richard Lessor
“You may choose to look the other way but you can never say again that you did not know.”, William Wilberforce
“Though the road's been rocky it sure feels good to me.”, Bob Marley
“A Woman in harmony with her spirit is like a river flowing.She goes where she will without pretense and arrives at her destination prepared to be herself and only herself ”, Maya Angelou
“Anything that’s human is mentionable, and anything that is mentionable can be more manageable. When we can talk about our feelings, they become less overwhelming, less upsetting, and less scary. The people we trust with that important talk can help us know that we are not alone.”, Fred Rogers
“That which God said to the rose, and caused it to laugh in full-blown beauty, He said to my heart, and made it a hundred times more beautiful.”, Rumi
“The three great essentials to achieve anything worthwhile are, first, hard work; second, stick-to-itiveness; third, common sense.”, Thomas A. Edison
“The stupid neither forgive nor forget; the naive forgive and forget; the wise forgive but do not forget.”, Thomas Szasz
“Even if things don't unfold the way you expected, don't be disheartened or give up. One who continues to advance will win in the end.”, Daisaku Ikeda
“To live is so startling it leaves little time for anything else.”, Emily Dickinson
“Be the positive impact on the lives of others.”, Roy T. Bennett
“No man chooses evil because it is evil; he only mistakes it for happiness, the good he seeks.”, Mary Shelley
“Keep your eyes on the stars, and your feet on the ground.”, Theodore Roosevelt
“Remember tonight... for it is the beginning of always”, Dante
“Start by doing what is necessary, then what is possible, and suddenly you are doing the impossible.”, St. Francis Of Assisi
“I’m bored’ is a useless thing to say. I mean, you live in a great, big, vast world that you’ve seen none percent of. Even the inside of your own mind is endless; it goes on forever, inwardly, do you understand? The fact that you’re alive is amazing, so you don’t get to say ‘I’m bored.”, Louis C.K.
“Surround yourself only with people who are going to take you higher.”, Oprah Winfrey
“No, this is not the beginning of a new chapter in my life; this is the beginning of a new book! That first book is already closed, ended, and tossed into the seas; this new book is newly opened, has just begun! Look, it is the first page! And it is a beautiful one!”, C. JoyBell C.
“The duty of youth is to challenge corruption.”, Kurt Cobain
“I'm not saying I'm gonna change the world, but I guarantee that I will spark the brain that will change the world.”, Tupac Shakur
“Believe nothing, no matter where you read it, or who said it, no matter if I have said it, unless it agrees with your own reason and your own common sense.”, Buddha Siddhartha Guatama Shakyamuni
“To the world you may be one person but to one person you may be the world.”, Bill Wilson
“I am seeking, I am striving, I am in it with all my heart.”, Vincent van Gogh
“You’re not obligated to win. You’re obligated to keep trying. To the best you can do everyday.”, Jason Mraz
“One of the most spiritual things you can do is embrace your humanity. Connect with those around you today. Say, "I love you", "I'm sorry", "I appreciate you", "I'm proud of you"...whatever you're feeling. Send random texts, write a cute note, embrace your truth and share it...cause a smile today for someone else...and give plenty of hugs.”, Steve Maraboli
“You must find the place inside yourself where nothing is impossible.”, Deepak Chopra
“It's worth making time to find the things that really stir your soul. That’s what makes you really feel alive. You have to say ‘no’ to other things you’re used to, and do it with all your heart.”, Roy T. Bennett
“It [feminism] is mixed up with a muddled idea that women are free when they serve their employers but slaves when they help their husbands.”, G.K. Chesterton
“Dreams don't work unless you take action. The surest way to make your dreams come true is to live them.”, Roy T. Bennett
“We are saved by faith alone, but the faith that saves is never alone.”, Martin Luther
“I don't paint dreams or nightmares, I paint my own reality.”, Frida Kahlo
“There is no passion to be found playing small - in settling for a life that is less than the one you are capable of living.”, Nelson Mandela
“Feet, what do I need them forIf I have wings to fly.”, Frida Kahlo
“What is now proved was once only imagined.”, William Blake
“Try again. Fail again. Fail better.”, Samuel Beckett
“Being happy doesn't mean that everything is perfect. It means that you've decided to look beyond the imperfections.”, Gerard Way
“When you look for a man- what you want to look for is a man with the heart of a poor boy and the mind of a conqueror.”, C. JoyBell C.
“Don’t only practice your art, but force your way into its secrets, for it and knowledge can raise men to the divine.”, Ludwig van Beethoven
“Instead of cursing the darkness, light a candle.”, Ben Franklin
“If you don't know who you truly are, you'll never know what you really want.”, Roy T. Bennett
“The fishermen know that the sea is dangerous and the storm terrible, but they have never found these dangers sufficient reason for remaining ashore.”, Vincent Van Gogh
“You become what you think about all day long.”, Ralph Waldo Emerson
“Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.”, Harriet Tubman
“The Reality of The Other Person Lies Not In What He Reveals To You, But What He Cannot Reveal To You.Therefore, If You Would Understand Him, Listen Not To What He Says, But Rather To What He Does Not Say.”, Kahlil Gibran
“Freedom is never more than one generation away from extinction. We didn't pass it to our children in the bloodstream. It must be fought for, protected, and handed on for them to do the same, or one day we will spend our sunset years telling our children and our children's children what it was once like in the United States where men were free.”, Ronald Reagan
“If you want to write a fantasy story with Norse gods, sentient robots, and telepathic dinosaurs, you can do just that. Want to throw in a vampire and a lesbian unicorn while you're at it? Go ahead. Nothing's off limits. But the endless possibility of the genre is a trap. It's easy to get distracted by the glittering props available to you and forget what you're supposed to be doing: telling a good story. Don't get me wrong, magic is cool. But a nervous mother singing to her child at night while something moves quietly through the dark outside her house? That's a story. Handled properly, it's more dramatic than any apocalypse or goblin army could ever be.”, Patrick Rothfuss
“Think, Believe, Dream, and Dare.”, Walt Disney
“Great things are not done by impulse, but by a series of small things brought together.”, Vincent Van Gogh
“I postpone death by living, by suffering, by error, by risking, by giving, by losing.”, anaïs nin
“Darling, when things go wrong in life, you lift your chin, put on a ravishing smile, mix yourself a little cocktail...”, Sophie Kinsella
“I didn't come here of my own accord, and I can't leave that way.Whoever brought me here will have to take me home.”, Rumi
“A creative life cannot be sustained by approval any more than it can be destroyed by criticism.”, Will Self
“I've had a lot of worries in my life, most of which never happened.”, Mark Twain
“There are times when solitude is better than society, and silence is wiser than speech. We should be better Christians if we were more alone, waiting upon God, and gathering through meditation on His Word spiritual strength for labour in his service. We ought to muse upon the things of God, because we thus get the real nutriment out of them. . . . Why is it that some Christians, although they hear many sermons, make but slow advances in the divine life? Because they neglect their closets, and do not thoughtfully meditate on God's Word. They love the wheat, but they do not grind it; they would have the corn, but they will not go forth into the fields to gather it; the fruit hangs upon the tree, but they will not pluck it; the water flows at their feet, but they will not stoop to drink it. From such folly deliver us, O Lord. . . .”, Charles Spurgeon
“the time is always right to do the right thing”, Martin Luther King Jr.
“Some things cannot be taught; they must be experienced. You never learn the most valuable lessons in life until you go through your own journey.”, Roy T. Bennett
“When I was little and running on the race track at school, I always stopped and waited for all the other kids so we could run together even though I knew (and everybody else knew) that I could run much faster than all of them! I pretended to read slowly so I could "wait" for everyone else who couldn't read as fast as I could! When my friends were short I pretended that I was short too and if my friend was sad I pretended to be unhappy. I could go on and on about all the ways I have limited myself, my whole life, by "waiting" for people. And the only thing that I've ever received in return is people thinking that they are faster than me, people thinking that they can make me feel bad about myself just because I let them and people thinking that I have to do whatever they say I should do. My mother used to teach me "Cinderella is a perfect example to be" but I have learned that Cinderella can go fuck herself, I'm not waiting for anybody, anymore! I'm going to run as fast as I can, fly as high as I can, I am going to soar and if you want you can come with me! But I'm not waiting for you anymore.”, C. JoyBell C.
“We cannot be sure of having something to live for unless we are willing to die for it.”, Che Guevara
“Know thyself.”, Socrates
“She made broken look beautifuland strong look invincible.She walked with the Universeon her shoulders and made itlook like a pair of wings.”, Ariana Dancu
“I've been lucky. Opportunities don't often come along. So, when they do, you have to grab them.”, Audrey Hepburn
“I’ve come to the conclusion that people who wear headphones while they walk, are much happier, more confident, and more beautiful individuals than someone making the solitary drudge to work without acknowledging their own interests and power.”, Jason Mraz
“It is the possibility that keeps me going, and though you may call me a dreamer or a fool or any other thing, I believe that anything is possible.”, Nicholas Sparks
“They laugh at me because I'm different; I laugh at them because they're all the same.”, Kurt Cobain
“All I ask is one thing, and I’m asking this particularly of young people: please don’t be cynical. I hate cynicism, for the record, it’s my least favorite quality and it doesn’t lead anywhere. Nobody in life gets exactly what they thought they were going to get. But if you work really hard and you’re kind, amazing things will happen.”, Conan O'Brien
“The soul should always stand ajar, ready to welcome the ecstatic experience.”, Emily Dickinson
“Nothing makes a person happier than having a happy heart.”, Roy T. Bennett
“We all need to be mocked from time to time, lest we take ourselves too seriously.”, George R.R. Martin
“Difficulties strengthen the mind, as labor does the body.”, Lucius Annaeus Seneca
“If we ever forget that we're one nation under God, then we will be one nation gone under.”, Ronald Reagan
“Growing up means learning what life is. When you're little, you have a set of ideals, standards, criteria, plans, outlooks, and you think that you have to sit around and wait for them to happen to you and then life will work. But life isn't like that, for anybody; you can't fall in love with a standard, you have to fall in love with a person. You can't live in a criteria, you have to live your life. You can't wait for your plans to materialize, because they may never materialize the way you think they will. You can't wait to watch your ideals and standards walk up to you, because you can't know what's yours until you have it. I always say, always take the first chance in case you never get a second one, but growing up takes that even one step further, growing up means that you have to hold on to what you have, when you have it, because what you have- that's yours- and all the ideals and criteria you have set in your head, those aren't yours, because those haven't happened to you.”, C. JoyBell C.
“Friendship with oneself is all important, because without it one cannot be friends with anyone else in the world.”, Eleanor Roosevelt
“For everything in this journey of life we are on, there is a right wing and a left wing: for the wing of love there is anger; for the wing of destiny there is fear; for the wing of pain there is healing; for the wing of hurt there is forgiveness; for the wing of pride there is humility; for the wing of giving there is taking; for the wing of tears there is joy; for the wing of rejection there is acceptance; for the wing of judgment there is grace; for the wing of honor there is shame; for the wing of letting go there is the wing of keeping. We can only fly with two wings and two wings can only stay in the air if there is a balance. Two beautiful wings is perfection. There is a generation of people who idealize perfection as the existence of only one of these wings every time. But I see that a bird with one wing is imperfect. An angel with one wing is imperfect. A butterfly with one wing is dead. So this generation of people strive to always cut off the other wing in the hopes of embodying their ideal of perfection, and in doing so, have created a crippled race.”, C. JoyBell C.
“It doesn’t matter how many times you get knocked down. All that matters is you get up one more time than you were knocked down.”, Roy T. Bennett
“Failure is a bend in the road, not the end of the road. Learn from failure and keep moving forward.”, Roy T. Bennett
“You get in life what you have the courage to ask for.”, Oprah Winfrey
“I offer you peace. I offer you love. I offer you friendship. I see your beauty. I hear your need. I feel your feelings.”, Mahatma Gandhi
“I am always doing that which I can not do, in order that I may learn how to do it.”, Pablo Picasso
“I have learned that you can go anywhere you want to go and do anything you want to do and buy all the things that you want to buy and meet all the people that you want to meet and learn all the things that you desire to learn and if you do all these things but are not madly in love: you have still not begun to live.”, C. JoyBell C.
“Desperation is the raw material of drastic change. Only those who can leave behind everything they have ever believed in can hope to escape. ”, William S. Burroughs
“So tonight I reach for my journal again. This is the first time I’ve done this since I came to Italy. What I write in my journal is that I am weak and full of fear. I explain that Depression and Loneliness have shown up, and I’m scared they will never leave. I say that I don’t want to take the drugs anymore, but I’m frightened I will have to. I am terrified that I will never really pull my life together. 	In response, somewhere from within me, rises a now-familiar presence, offering me all the certainties I have always wished another person would say to me when I was troubled. This is what I find myself writing on the page:I’m here. I love you. I don’t care if you need to stay up crying all night long. I will stay with you. If you need the medication again, go ahead and take it—I will love you through that, as well. If you don’t need the medication, I will love you, too. There’s nothing you can ever do to lose my love. I will protect you until you die, and after your death I will still protect you. I am stronger than Depression and Braver than Loneliness and nothing will ever exhaust me. Tonight, this strange interior gesture of friendship—the lending of a hand fromme to myself when nobody else is around to offer solace—reminds me of something that happened to me once in New York City. I walked into an office building one afternoon in a hurry, dashed into the waiting elevator. As I rushed in, I caught an unexpected glance of myself in a security mirror’s reflection. In that moment, my brain did an odd thing—it fired off this split-second message: “Hey! You know her! That’s a friend of yours!” And I actually ran forward toward my own reflection with a smile, ready to welcome that girl whose name I had lost but whose face was so familiar. In a flash instant of course, I realized my mistake and laughed in embarrassment at my almost doglike confusion over how a mirror works. But for some reason that incident comes to mind again tonight during my sadness in Rome, and I find myself writing this comforting reminder at the bottom of the page. Never forget that once upon a time, in an unguarded moment, you recognized yourself as a FRIEND…	I fell asleep holding my notebook pressed against my chest, open to this most recent assurance. In the morning when I wake up, I can still smell a faint trace of depression’s lingering smoke, but he himself is nowhere to be seen. Somewhere during the night, he got up and left. And his buddy loneliness beat it, too.”, Elizabeth Gilbert
“People have only as much liberty as they have the intelligence to want and the courage to take.”, Emma Goldman
“Before, I wanted to say: "I found love!" But now, I want to say: "I found a person. And he belongs to me and I belong to him.”, C. JoyBell C.
“If we all did the things we are really capable of doing, we would literally astound ourselves.”, Thomas A. Edison
“The way I see it, if you want the rainbow, you gotta put up with the rain!”, Dolly Parton
“You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.”, Steve Jobs
“I have no right to say or do anything that diminishes a man in his own eyes. What matters is not what I think of him but what he thinks of himself. Hurting a man in his dignity is a crime.”, Antoine de Saint-Exupéry
“Life begins on the other side of despair.”, Jean-Paul Sartre
“The less you associate with some people, the more your life will improve.Any time you tolerate mediocrity in others, it increases your mediocrity. Animportant attribute in successful people is their impatience with negativethinking and negative acting people. As you grow, your associates willchange. Some of your friends will not want you to go on. They will want youto stay where they are. Friends that don't help you climb will want you tocrawl. Your friends will stretch your vision or choke your dream. Those thatdon't increase you will eventually decrease you.Consider this:Never receive counsel from unproductive people. Never discuss your problemswith someone incapable of contributing to the solution, because those whonever succeed themselves are always first to tell you how. Not everyone hasa right to speak into your life. You are certain to get the worst of thebargain when you exchange ideas with the wrong person. Don't follow anyonewho's not going anywhere.With some people you spend an evening: with others you invest it. Be carefulwhere you stop to inquire for directions along the road of life. Wise is theperson who fortifies his life with the right friendships. If you run withwolves, you will learn how to howl. But, if you associate with eagles, youwill learn how to soar to great heights."A mirror reflects a man's face, but what he is really like is shown by thekind of friends he chooses."The simple but true fact of life is that you become like those with whom youclosely associate - for the good and the bad.Note: Be not mistaken. This is applicable to family as well as friends.Yes...do love, appreciate and be thankful for your family, for they willalways be your family no matter what. Just know that they are human firstand though they are family to you, they may be a friend to someone else andwill fit somewhere in the criteria above."In Prosperity Our Friends Know Us. In Adversity We Know Our friends.""Never make someone a priority when you are only an option for them.""If you are going to achieve excellence in big things,you develop the habit in little matters.Excellence is not an exception, it is a prevailing attitude.."..”, Colin Powell
“Until you step into the unknown, you don’t know what you’re made of.”, Roy T. Bennett
“I am always doing what I cannot do yet, in order to learn how to do it.”, Vincent Van Gogh
“All great achievements require time.”, Maya Angelou
“You learn something valuable from all of the significant events and people, but you never touch your true potential until you challenge yourself to go beyond imposed limitations.”, Roy T. Bennett
“Don’t wait for things to happen. Make them happen.”, Roy T. Bennett
“I don't fit into any stereotypes. And I like myself that way.”, C. JoyBell C.
“He who would learn to fly one day must first learn to walk and run and climb and dance; one cannot fly into flying. ”, Friedrich Nietzsche
“Faith is the bird that feels the light and sings when the dawn is still dark.”, Rabindranath Tagore
“We should not judge people by their peak of excellence; but by the distance they have traveled from the point where they started.”, Henry Ward Beecher
“Believe there is a great power silently working all things for good, behave yourself and never mind the rest.”, Beatrix Potter
“Hate looks like everybody else until it smiles”, Tahereh Mafi
“If you enter this world knowing you are loved and you leave this world knowing the same, then everything that happens in between can be dealt with.”, Michael  Jackson
“Stay hungry. Stay foolish.”, Steve Jobs
“Walk with the dreamers, the believers, the courageous, the cheerful, the planners, the doers, the successful people with their heads in the clouds and their feet on the ground. Let their spirit ignite a fire within you to leave this world better than when you found it...”, Wilferd Peterson
“To each there comes in their lifetime a special moment when they are figuratively tapped on the shoulder and offered the chance to do a very special thing, unique to them and fitted to their talents. What a tragedy if that moment finds them unprepared or unqualified for that which could have been their finest hour.”, Sir Winston Churchill
“It is amazing what you can accomplish if you do not care who gets the credit.”, Harry S. Truman
“Don't live down to expectations. Go out there and do something remarkable.”, Wendy Wasserstein
“As is a tale, so is life: not how long it is, but how good it is, is what matters.”, Seneca
“What you stay focused on will grow.”, Roy T. Bennett
“When things do not go your way, remember that every challenge — every adversity — contains within it the seeds of opportunity and growth.”, Roy T. Bennett
“The minute I stopped trying to find the right girl, and started trying to become the right guy...the girl came.”, Jonathan Antin
“The world is so empty if one thinks only of mountains, rivers & cities; but to know someone who thinks & feels with us, & who, though distant, is close to us in spirit, this makes the earth for us an inhabited garden.”, Goethe
“Pointing to another world will never stop vice among us; shedding light over this world can alone help us.”, Walt Whitman
“I don't want to live in the kind of world where we don't look out for each other. Not just the people that are close to us, but anybody who needs a helping hand. I cant change the way anybody else thinks, or what they choose to do, but I can do my bit.”, charles de lint
“We are all equal in the fact that we are all different. We are all the same in the fact that we will never be the same. We are united by the reality that all colours and all cultures are distinct & individual. We are harmonious in the reality that we are all held to this earth by the same gravity. We don't share blood, but we share the air that keeps us alive. I will not blind myself and say that my black brother is not different from me. I will not blind myself and say that my brown sister is not different from me. But my black brother is he as much as I am me. But my brown sister is she as much as I am me.”, C. JoyBell C.
“Never, ever, let anyone tell you what you can and can't do. Prove the cynics wrong. Pity them for they have no imagination. The sky's the limit. Your sky. Your limit. Now. Let's dance.”, Tom Hiddleston
“Reality is wrong. Dreams are for the real.”, Tupac Shakur
“Everyone enjoys being acknowledged and appreciated. Sometimes even the simplest act of gratitude can change someone's entire day. Take the time to recognize and value the people around you and appreciate those who make a difference in your lives.”, Roy T. Bennett
“Your problem is how you are going to spend this one and precious life you have been issued. Whether you're going to spend it trying to look good and creating the illusion that you have power over circumstances, or whether you are going to taste it, enjoy it and find out the truth about who you are.”, Anne Lamott
“Nothing will work unless you do.”, Maya Angelou
“If you once forfeit the confidence of your fellow citizens, you can never regain their respect and esteem. It is true that you may fool all of the people some of the time; you can even fool some of the people all of the time; but you can't fool all of the people all of the time. -Speech at Clinton, Illinois, September 8, 1854.”, Abraham Lincoln
“I want to thank you, Lord, for life and all that's in it. Thank you for the day and for the hour, and the minute. ”, Maya Angelou
“Do not let the roles you play in life make you forget who you are.”, Roy T. Bennett
“When I find myself in times of trouble, mother Mary comes to me,speaking words of wisdom, let it be.And in my hour of darkness she is standing right in front of me,speaking words of wisdom, let it be.Let it be, let it be, let it be, let it be.Whisper words of wisdom, let it be.And when the broken hearted people living in the world agree,there will be an answer, let it be.For though they may be parted there is still a chance that they will see,there will be an answer. let it be.Let it be, let it be, .....And when the night is cloudy, there is still a light, that shines on me,shine until tomorrow, let it be.I wake up to the sound of music, mother Mary comes to me,speaking words of wisdom, let it be.Let it be, let it be, .....”, Paul McCartney
“If you haven’t the strength to impose your own terms upon life, then you must accept the terms it offers you.”, T.S. Eliot
“When you have exhausted all possibilities, remember this - you haven't.”, Thomas Edison
“Self-respect is the root of discipline: The sense of dignity growswith the ability to say no to oneself.”, Abraham Joshua Heschel
“Stop feeling sorry for yourself and you will be happy.”, Stephen Fry
“When you judge another, you do not define them, you define yourself.”, Wayne Dyer
“God, grant me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference.”, Reinhold Niebuhr
“Love. Fall in love and stay in love. Write only what you love, and love what you write. The word is love. You have to get up in the morning and write something you love, something to live for.”, Ray Bradbury
“It doesn't matter if a million people tell you what you can't do, or if ten million tell you no. If you get one yes from God that's all you need.”, Tyler Perry
“Toni's Talk: When you invest in yourself, you have instant credibility with your biggest critic...you! As soon as you let doubt creep in---you lose that investment. Make a daily commitment to assess your worth with positive affirmations and watch your investment grow.”, C.Toni Graham
“She lacks confidence, she craves admiration insatiably. She lives on the reflections of herself in the eyes of others. She does not dare to be herself.”, Anaïs Nin
“Let us always meet each other with smile, for the smile is the beginning of love.”, Mother Teresa
“I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion'.”, Muhammad Ali
“If a man is to shed the light of the sun upon other men, he must first of all have it within himself.”, Romain Rolland
“Knowing is not enough, we must apply. Willing is not enough, we must do.”, Bruce Lee
“Beliefs are choices. First you choose your beliefs. Then your beliefs affect your choices.”, Roy T. Bennett
“Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.”, Albert Schweitzer
“To write well, express yourself like the common people, but think like a wise man.”, Aristotle
“Once you learn to quit, it becomes a habit.”, Vince Lombardi
“It is not the failure of others to appreciate your abilities that should trouble you, but rather your failure to appreciate theirs.”, Confucius
“To truly laugh, you must be able to take your pain, and play with it.”, Charlie Chaplin
“The butterfly counts not months but moments, and has time enough.”, Rabindranath Tagore
“Love yourself first and everything else falls into line. Your really have to love yourself to get anything done in this world.”, Lucille Ball
“The comfort zone is a psychological state in which one feels familiar, safe, at ease, and secure. You never change your life until you step out of your comfort zone; change begins at the end of your comfort zone.”, Roy T. Bennett
“May Light always surround you;Hope kindle and rebound you.May your Hurts turn to Healing;Your Heart embrace Feeling.May Wounds become Wisdom;Every Kindness a Prism.May Laughter infect you;Your Passion resurrect you.May Goodness inspire your Deepest Desires.Through all that you Reach For, May your arms Never Tire.”, D. Simone
“You need to find a way to live your life, that it doesn't make a mockery of your values.”, Bill Ayers
“Your sacred space is where you can find yourself over and over again.”, Joseph Campbell
“Yesterday is not ours to recover, but tomorrow is ours to win or lose.”, Lyndon B. Johnson
“You will never follow your own inner voice until you clear up the doubts in your mind.”, Roy T. Bennett
“To care about your outward appearance is important, but what’s more important is to have a beautiful soul.”, Roy T. Bennett
“Your time is way too valuable to be wasting on people that can't accept who you are.”, Turcois Ominek
“She was a beautiful dreamer. The kind of girl, who kept her head in the clouds, loved above the stars and left regret beneath the earth she walked on.”, robert m drake
“Successful people have no fear of failure. But unsuccessful people do. Successful people have the resilience to face up to failure—learn the lessons and adapt from it.”, Roy T. Bennett
“He not busy being born is busy dying.”, Bob Dylan
“We are afraid of losing what we have, whether it's our life or our possessions and property. But this fear evaporates when we understand that our life stories and the history of the world were written by the same hand.”, Paulo Coelho
“Death, therefore, the most awful of evils, is nothing to us, seeing that, when we are, death is not come, and, when death is come, we are not.”, Epicurus
“One of the best ways to influence people is to make them feel important.”, Roy T. Bennett
“I long to accomplish a great and noble task, but it is my chief duty to accomplish small tasks as if they were great and noble.”, Helen Keller
“If you want to build a ship, don’t drum up the men to gather wood, divide the work, and give orders. Instead, teach them to yearn for the vast and endless sea.”, Antoine de Saint-Exupéry
“It is not a daily increase, but a daily decrease. Hack away at the inessentials.”, Bruce Lee
“As a single footstep will not make a path on the earth, so a single thought will not make a pathway in the mind. To make a deep physical path, we walk again and again. To make a deep mental path, we must think over and over the kind of thoughts we wish to dominate our lives.”, Wilfred Arlan Peterson
“The greatest discovery of any generation is that a human can alter his life by altering his attitude.”, William James
“Education is teaching our children to desire the right things.”, Plato
“To learn something new, you need to try new things and not be afraid to be wrong.”, Roy T. Bennett
“Life's like a movie, write your own ending. Keep believing, keep pretending.”, Jim Henson
“Every morning when I wake up, I experience an exquisite joy —the joy of being Salvador Dalí— and I ask myself in rapture: What wonderful things is this Salvador Dalí going to accomplish today?”, Salvador Dalí
“We all have two lives. The second one starts when we realize that we only have one.”, Tom Hiddleston
“Intellectual growth should commence at birth and cease only at death.”, Albert Einstein
“I am a flawed person. A brook with many stones, a clear blue sky with many blackbirds. I have many shortcomings. A rainbow that’s not long enough, a starry night with clouds. But I can only be thankful to the God who loves me just this way, and I can only be grateful to the people in my life who accept the clear blue sky with many blackbirds and who are patient with the rainbow that isn’t long enough. And because of this, I am taught love, because of this I love my God, and I love these people.”, C. JoyBell C.
“Remake the world, a little at a time, each in your own corner of the world.”, Rick Riordan
“The arc of the moral universe is long, but it bends towards justice.”, Theodore Parker
“Be a lamp, or a lifeboat, or a ladder. Help someone's soul heal. Walk out of your house like a shepherd.”, Rumi
“If you can't run, you crawl. If you can't crawl-- you find someone to carry you.”, Joss Whedon
“Just because someone desires you, it does not mean that they value you.Read it over.Again.Let those words resonate in your mind.”, Nayyirah Waheed
“Happiness is always there. You just have to choose to see it. There's no point dwelling in the dark and ignoring the light of the stars.”, Carrie Hope Fletcher
“Somehow I can't believe that there are any heights that can't be scaled by a man who knows the secrets of making dreams come true. This special secret, it seems to me, can be summarized in four Cs. They are curiosity, confidence, courage, and constancy, and the greatest of all is confidence. When you believe in a thing, believe in it all the way, implicitly and unquestionable.”, Walt Disney
“Every day People straighten up the hair, why not the heart?”, che guevara
“Consistency is the true foundation of trust. Either keep your promises or do not make them.”, Roy T. Bennett
“Are you on our side...and want to be different, or are you on that side and want to throw a football at my head!?”, Gerard Way
“I know because I read...Your mind is not a cage. It's a garden. And it requires cultivating.”, Libba Bray
“It’s strange how dreams get under your skin and give your heart a test for what’s real and what’s imaginary.”, Jason Mraz
“Drink your tea slowly and reverently, as if it is the axis on which the world earth revolves - slowly, evenly, without rushing toward the future.”, Thich Nhat Hanh
“In prayer it is better to have a heart without words than words without a heart. ”, John Bunyan
“Don't limit a child to your own learning, for she was born in another time.”, Rabindranath Tagore
“I choose gentleness... Nothing is won by force. I choose to be gentle. If I raise my voice may it be only in praise. If I clench my fist, may it be only in prayer. If I make a demand, may it be only of myself.”, Max Lucado
“Rock bottom became the solid foundation on which I rebuilt my life.”, J.K. Rowling
“Shine your light and make a positive impact on the world; there is nothing so honorable as helping improve the lives of others.”, Roy T. Bennett
“Don't give up the fight,Stand up for your rights.”, Bob Marley
“Only the gentle are ever really strong.”, James  Dean
“If you can't you must, and if you must you can.”, Anthony Robbins
“First you jump off the cliff and build your wings on the way down.”, Ray Bradbury
“Whatever you think, be sure it is what you think; whatever you want, be sure that is what you want; whatever you feel, be sure that is what you feel.”, T.S. Eliot
“Life,” said Marvin dolefully, “loathe it or ignore it, you can’t like it.”, Douglas Adams
“Be with someone who inspires you and makes you be the best version of yourself.”, Roy T. Bennett
“Employ your time in improving yourself by other men's writings so that you shall come easily by what others have labored hard for.”, Socrates
“Makakapili ka ng lugar na uupuan mo, pero hindi mo mapipili ang taong uupo sa puwang sa tabi mo... Ganyan ang senaryo sa bus. Ganyan din sa pag-ibig... Lalong 'di mo kontrolado kung kelan siya bababa.”, Bob Ong
“it is impossible to build one's own happiness on the unhappiness of others. This perspective is at the heart of Buddhist teachings.”, Daisaku Ikeda
“Anything is possible. Anything can be.”, Shel Silverstein
“The value of things is not the time they last, but the intensity with which they occur. That is why there are unforgettable moments and unique people!”, Fernando Pessoa
“Facing it, always facing it, that’s the way to get through. Face it.”, Conrad Joseph
“You don't need anybody to tell you who you are or what you are. You are what you are!”, John Lennon
“no matter how ugly the world gets or how stupid it shows me it is, I always have faith”, Gerard Way
“Every person, all the events of your life are there because you have drawn them there. What you choose to do with them is up to you.”, Richard Bach
“If you really want to do something, you'll find a way. If you don't, you'll find an excuse.”, Jim Rohn
“The tragedy of life is what dies inside a man while he lives.”, Albert Einstein
“Ever since happiness heard your name, it has been running through the streets trying to find you.”, Hafez
“Anything under God's control is never out of control.”, Charles Swindoll
“I believe the simplest explanation is, there is no God. No one created the universe and no one directs our fate. This leads me to a profound realization that there probably is no heaven and no afterlife either. We have this one life to appreciate the grand design of the universe and for that, I am extremely grateful.”, Stephen Hawking
“A man who does not think for himself does not think at all.”, Oscar Wilde
“We dance round in a ring and suppose,But the Secret sits in the middle and knows.”, Robert Frost
“I have learned, that the person I have to ask for forgiveness from the most is: myself. You must love yourself. You have to forgive yourself, everyday, whenever you remember a shortcoming, a flaw, you have to tell yourself "That's just fine". You have to forgive yourself so much, until you don't even see those things anymore. Because that's what love is like.”, C. JoyBell C.
“If they don't like you for being yourself, be yourself even more.”, Taylor Swift
“Opinion is really the lowest form of human knowledge. It requires no accountability, no understanding. The highest form of knowledge… is empathy, for it requires us to suspend our egos and live in another’s world. It requires profound purpose larger than the self kind of understanding.”, Bill Bullard
“a wind has blown the rain away & the sky away & all the leaves away, & the trees stand. i think i, too, have known autumn too long.”, e.e. cummings
“Live fast. Die young. Be wild. Have fun.”, Lana Del Rey
“Seize the moments of happiness, love and be loved! That is the only reality in the world, all else is folly. It is the one thing we are interested in here.”, Leo Tolstoy
“We could never learn to be brave and patient if there were only joy in the world”, Helen Keller
“Do your own thing on your own terms and get what you came here for”, Oliver James
“We don't receive wisdom; we must discover it for ourselves after a journey that no one can take for us or spare us.”, Marcel Proust
“Re-examine all you have been told. Dismiss what insults your soul.”, Walt whitman
“I try to avoid looking forward or backward, and try to keep looking upward.”, Charlotte Bronte
“Don't marry a rich man. Marry a good man. He will spend his life trying to keep you happy. No rich man can buy that!”, Staness Jonekos
“Anyone who knows me, should learn to know me again;For I am like the Moon,you will see me with new face everyday.”, Rumi
“It is during our darkest moments that we must focus to see the light.”, Aristotle
“The beauty of the world...has two edges, one of laughter, one of anguish, cutting the heart asunder.”, Virginia Woolf
“We are all of us born with a letter inside us, and that only if we are true to ourselves, may we be allowed to read it before we die.”, Douglas Coupland
“With great power comes great responsibility.”, Stan Lee
“If the only prayer you say throughout your life is "Thank You," then that will be enough.”, Elie Wiesel
“When you're screwing up and nobody says anything to you anymore, that means they've given up on you.”, Randy Pausch
“God is subtle but he is not malicious.”, Albert Einstein
“Grace is the face that love wears when it meets imperfection.”, Joseph R. Cooke
“Men build too many walls and not enough bridges.”, Joseph Fort Newton
“In case you never get a second chance: don't be afraid!" "And what if you do get a second chance?" "You take it!”, C. JoyBell C.
“Life will hit you hard in the face, wait for you to get back up just so it can kick you in the stomach. But getting the wind knocked out of you is the only way to remind your lungs how much they like the taste of air.”, Sarah Kay
“Don't find fault, find a remedy; anybody can complain”, Henry Ford
“Laughter is carbonated holiness.”, Anne Lamott
“Dream, Dream DreamDreams transform into thoughts And thoughts result in action.”, APJ ABDUL KALAM
“By hook or by crook, I hope that you will possess yourselves of money enough to travel and to idle, to contemplate the future or the past of the world, to dream over books and loiter at street corners and let the line of thought dip deep into the stream”, Virginia Woolf
“What we achieve inwardly will change outer reality.”, Otto Rank
“Most people overestimate what they can do in one year and underestimate what they can do in ten years.”, Bill Gates
“The absence of the will to live is, alas, not sufficient to make one want to die.”, Michel Houellebecq
“The most important thing in life is to stop saying 'I wish' and start saying 'I will.' Consider nothing impossible, then treat possiblities as probabilities.”, Charles Dickens
“I am not what I ought to be, I am not what I want to be, I am not what I hope to be in another world; but still I am not what I once used to be, and by the grace of God I am what I am”, John Newton
“Beyond work and love, I would add two other ingredients that give meaning to life. First, to fulfill whatever talents we are born with. However blessed we are by fate with different abilities and strengths, we should try to develop them to the fullest, rather than allow them to atrophy and decay. We all know individuals who did not fulfill the promise they showed in childhood. Many of them became haunted by the image of what they might have become. Instead of blaming fate, I think we should accept ourselves as we are and try to fulfill whatever dreams are within our capability.Second, we should try to leave the world a better place than when we entered it. As individuals, we can make a difference, whether it is to probe the secrets of Nature, to clean up the environment and work for peace and social justice, or to nurture the inquisitive, vibrant spirit of the young by being a mentor and a guide.”, Michio Kaku
“Closing The CycleOne always has to know when a stage comes to an end. If we insist on staying longer than the necessary time, we lose the happiness and the meaning of the other stages we have to go through. Closing cycles, shutting doors, ending chapters - whatever name we give it, what matters is to leave in the past the moments of life that have finished.Did you lose your job? Has a loving relationship come to an end? Did you leave your parents' house? Gone to live abroad? Has a long-lasting friendship ended all of a sudden?You can spend a long time wondering why this has happened. You can tell yourself you won't take another step until you find out why certain things that were so important and so solid in your life have turned into dust, just like that. But such an attitude will be awfully stressing for everyone involved: your parents, your husband or wife, your friends, your children, your sister, everyone will be finishing chapters, turning over new leaves, getting on with life, and they will all feel bad seeing you at a standstill.None of us can be in the present and the past at the same time, not even when we try to understand the things that happen to us. What has passed will not return: we cannot for ever be children, late adolescents, sons that feel guilt or rancor towards our parents, lovers who day and night relive an affair with someone who has gone away and has not the least intention of coming back.Things pass, and the best we can do is to let them really go away. That is why it is so important (however painful it may be!) to destroy souvenirs, move, give lots of things away to orphanages, sell or donate the books you have at home. Everything in this visible world is a manifestation of the invisible world, of what is going on in our hearts - and getting rid of certain memories also means making some room for other memories to take their place.Let things go. Release them. Detach yourself from them. Nobody plays this life with marked cards, so sometimes we win and sometimes we lose. Do not expect anything in return, do not expect your efforts to be appreciated, your genius to be discovered, your love to be understood. Stop turning on your emotional television to watch the same program over and over again, the one that shows how much you suffered from a certain loss: that is only poisoning you, nothing else.Nothing is more dangerous than not accepting love relationships that are broken off, work that is promised but there is no starting date, decisions that are always put off waiting for the "ideal moment." Before a new chapter is begun, the old one has to be finished: tell yourself that what has passed will never come back. Remember that there was a time when you could live without that thing or that person - nothing is irreplaceable, a habit is not a need. This may sound so obvious, it may even be difficult, but it is very important.Closing cycles. Not because of pride, incapacity or arrogance, but simply because that no longer fits your life. Shut the door, change the record, clean the house, shake off the dust. Stop being who you were, and change into who you are.”, Paulo Coelho
“You can have everything you want if you can put your heart and soul into everything you do.”, Roy T. Bennett
“You have to, take a deep breath. and allow the music to flow through you. Revel in it, allow yourself to awe. When you play allow the music to break your heart with its beauty.”, Kelly White
“Just because you fall once, doesn't mean you're fall at everything. Keep trying, hold on, and always trust yourself, because if you don't then who will??”, Marilyn Monroe
“There is no limit to the amount of good you can do if you don't care who gets the credit.”, Ronald Reagan
“Do your best and let God do the rest.”, Ben Carson
“So many people live within unhappy circumstances and yet will not take the initiative to change their situation because they are conditioned to a life of security, conformity, and conservatism, all of which may appear to give one peace of mind, but in reality nothing is more damaging to the adventurous spirit within a man than a secure future. The very basic core of a man's living spirit is his passion for adventure. The joy of life comes from our encounters with new experiences and hence there is no greater joy than to have an endlessly changing horizon, for each day to have a new and different sun.”, Christopher McCandless
“You should never assume. You know what happens when you assume. You make an ass out of you and me because that's how it's spelled.”, Ellen DeGeneres
“Believe in yourself and there will come a day when others will have no choice but to believe with you.”, Cynthia Kersey
“We travel, initially, to lose ourselves; and we travel, next to find ourselves. We travel to open our hearts and eyes and learn more about the world than our newspapers will accommodate. We travel to bring what little we can, in our ignorance and knowledge, to those parts of the globe whose riches are differently dispersed. And we travel, in essence, to become young fools again- to slow time down and get taken in, and fall in love once more.”, Pico Iyer
“My heart, which is so full to overflowing, has often been solaced and refreshed by music when sick and weary.”, Martin Luther
“May I share with you a formula that in my judgment will help you and help me to journey well through mortality... First, fill your mind with truth; second, fill your life with service; and third, fill your heart with love.”, Thomas S. Monson
“Why are you trying so hard to fit in when you were born to stand out?”, Ian Wallace
“We do not remember days, we remember moments.”, Cesare Pavese
“A winner is a dreamer who never gives up”, Nelson Mandela
“Today is a new day. Don't let your history interfere with your destiny! Let today be the day you stop being a victim of your circumstances and start taking action towards the life you want. You have the power and the time to shape your life. Break free from the poisonous victim mentality and embrace the truth of your greatness. You were not meant for a mundane or mediocre life!”, Steve Maraboli
“Your daughter is ugly.She knows loss intimately,carries whole cities in her belly.As a child, relatives wouldn’t hold her.She was splintered wood and sea water.They said she reminded them of the war.On her fifteenth birthday you taught herhow to tie her hair like rope and smoke it over burning frankincense.You made her gargle rosewaterand while she coughed, saidmacaanto girls like you shouldn’t smellof lonely or empty.You are her mother.Why did you not warn her,hold her like a rotting boatand tell her that men will not love herif she is covered in continents,if her teeth are small colonies,if her stomach is an islandif her thighs are borders?What man wants to lay down and watch the world burn in his bedroom? Your daughter’s face is a small riot,her hands are a civil war,a refugee camp behind each ear,a body littered with ugly thingsbut God, doesn’t she wearthe world well.”, Warsan Shire
“Once upon a time, there was a wise man who used to go to the ocean to do his writing. He had a habit of walking on the beach before he began his work.One day, as he was walking along the shore, he looked down the beach and saw a human figure moving like a dancer. He smiled to himself at the thought of someone who would dance to the day, and so, he walked faster to catch up.As he got closer, he noticed that the figure was that of a young man, and that what he was doing was not dancing at all. The young man was reaching down to the shore, picking up small objects, and throwing them into the ocean.He came closer still and called out "Good morning! May I ask what it is that you are doing?"The young man paused, looked up, and replied "Throwing starfish into the ocean.""I must ask, then, why are you throwing starfish into the ocean?" asked the somewhat startled wise man.To this, the young man replied, "The sun is up and the tide is going out. If I don't throw them in, they'll die."Upon hearing this, the wise man commented, "But, young man, do you not realize that there are miles and miles of beach and there are starfish all along every mile? You can't possibly make a difference!"At this, the young man bent down, picked up yet another starfish, and threw it into the ocean. As it met the water, he said, "It made a difference for that one.”, Loren Eiseley
“To be in your children's memories tomorrow,You have to be in their lives today.”, Barbara Johnson
“You have to love dancing to stick to it. It gives you nothing back, no manuscripts to store away, no paintings to show on walls and maybe hang in museums, no poems to be printed and sold, nothing but that single fleeting moment when you feel alive.”, Merce Cunningham
“I think joy and sweetness and affection are a spiritual path. We're here to know God, to love and serve God, and to be blown away by the beauty and miracle of nature. You just have to get rid of so much baggage to be light enough to dance, to sing, to play. You don't have time to carry grudges; you don't have time to cling to the need to be right.”, Anne Lamott
“Tolerance of intolerance is cowardice.”, Ayaan Hirsi Ali
“Life is painful. It has thorns, like the stem of a rose. Culture and art are the roses that bloom on the stem. The flower is yourself, your humanity. Art is the liberation of the humanity inside yourself.”, Daisaku Ikeda
“The second thing you have to do to be a writer is to keep on writing. Don't listen to people who tell you that very few people get published and you won't be one of them. Don't listen to your friend who says you are better that Tolkien and don't have to try any more. Keep writing, keep faith in the idea that you have unique stories to tell, and tell them. I meet far too many people who are going to be writers 'someday.' When they are out of high school, when they've finished college, after the wedding, when the kids are older, after I retire . . . That is such a trap You will never have any more free time than you do right now. So, whether you are 12 or 70, you should sit down today and start being a writer if that is what you want to do. You might have to write on a notebook while your kids are playing on the swings or write in your car on your coffee break. That's okay. I think we've all 'been there, done that.' It all starts with the writing. ”, Robin Hobb
“I find it odd- the greed of mankind. People only like you for as long as they perceive they can get what they want from you. Or for as long as they perceive you are who they want you to be. But I like people for all of their changing surprises, the thoughts in their heads, the warmth that changes to cold and the cold that changes to warmth... for being human. The rawness of being human delights me.”, C. JoyBell C.
“God save us from religion.”, David Eddings
“After sleeping through a hundred million centuries we have finally opened our eyes on a sumptuous planet, sparkling with color, bountiful with life. Within decades we must close our eyes again. Isn’t it a noble, an enlightened way of spending our brief time in the sun, to work at understanding the universe and how we have come to wake up in it? This is how I answer when I am asked—as I am surprisingly often—why I bother to get up in the mornings.”, Richard Dawkins
“Nothing's a better cure for writer's block than to eat ice cream right out of the carton.”, Don Roff
“Everything changed the day she figured out there was exactly enough time for the important things in her life.”, Brian Andreas
“Love the trees until their leaves fall off, then encourage them to try again next year.”, Chad Sugg
“We forfeit three-fourths of ourselves in order to be like other people.”, Arthur Schopenhauer
“The deepest secret is that life is not a process of discovery, but a process of creation. You are not discovering yourself, but creating yourself anew. Seek therefore, not to find out Who You Are, but seek to determine Who You Want to Be.”, Neale Donald Walsch
“Frustration and Love can’t exist in the same place at the same time, so get real and start doing what you would rather be doing in life. Love your life. All of it. Even the heavy shit that happened to you when you were 8. All of it was and IS perfect.”, Jason Mraz
“What saves a man is to take a step. Then another step.”, Antoine de Saint-Exupéry
“Every time you do a good deed you shine the light a little farther into the dark. And the thing is, when you're gone that light is going to keep shining on, pushing the shadows back.”, charles de lint
“Passion is a feeling that tells you: this is the right thing to do. Nothing can stand in my way. It doesn't matter what anyone else says. This feeling is so good that it cannot be ignored. I'm going to follow my bliss and act upon this glorious sensation of joy.”, Dr. Wayne W. Dyer
“When you lose your smile, you lose your way in the chaos of life.”, Roy T. Bennett
“It is better for the heart to break, than not to break.”, Mary Oliver
“Waiting for you is like waiting for rain in this drought. Useless and disappointing." ~ Sam (Hilary Duff), A Cinderella Story”, Hilary Duff
“The man who writes about himself and his own time is the only man who writes about all people and all time.”, George Bernard Shaw
“In the end, just three things matter:How well we have livedHow well we have lovedHow well we have learned to let go”, Jack Kornfield
“I was born into Bolívar's labyrinth, and so I must believe in the hope of Rabelais' Great Perhaps.”, John Green
“When they say the sky's the limit to me that's really true”, Michael  Jackson
“Remind thyself, in the darkest moments, that every failure is only a step toward success, every detection of what is false directs you toward what is true, every trial exhausts some tempting form of error, and every adversity will only hide, for a time, your path to peace and fulfillment. ”, Og Mandino
“Myth is much more important and true than history. History is just journalism and you know how reliable that is.”, Joseph Campbell
“We judge ourselves by what we feel capable of doing, while others judge us by what we have already done.”, Henry Wadsworth Longfellow
“I came to the conclusion long ago that all religions were true and that also that all had some error in them, and while I hold by my own religion, I should hold other religions as dear as Hinduism. So we can only pray, if we were Hindus, not that a Christian should become a Hindu; but our innermost prayer should be that a Hindu should become a better Hindu, a Muslim a better Muslim, and a Christian a better Christian.”, Mahatma Gandhi
“To invent your own life's meaning is not easy, but it's still allowed, and I think you'll be happier for the trouble.”, Bill Watterson
“Never let a problem to be solved, become more important than a person to be loved.”, Thomas S. Monson
“Death is the easy part, the hard part is living and knowing you could be so much more then you’re willing to be.”, robert m drake
“If you care about something enough, you'll find a way to make it happen.”, Roy T. Bennett
“No DifferenceSmall as a peanut,Big as a giant,We're all the same sizeWhen we turn off the light.Rich as a sultan,Poor as a mite,We're all worth the sameWhen we turn off the light.Red, black or orange,Yellow or white, We all look the sameWhen we turn off the light.So maybe the way, To make everything rightIs for god to just reach outAnd turn off the light!”, Shel Silverstein
“I consider myself a stained-glass window. And this is how I live my life. Closing no doors and covering no windows; I am the multi-colored glass with light filtering through me, in many different shades. Allowing light to shed and fall into many many hues. My job is not to direct anything, but only to filter into many colors. My answer is destiny and my guide is joy. And there you have me.”, C. JoyBell C.
“What did you do?” I mumble. He is just a few feet away from me now, but not close enough to hear me. As he passes me he stretches out his hand. He wraps it around my palm and squeezes. Squeezes, then lets go. His eyes are bloodshot; he is pale. “What did you do?” This time the question tears from my throat like a growl. I throw myself toward him, struggling against Peter’s grip, though his hands chafe. “What did you do?” I scream. “You die, I die too” Tobias looks over his shoulder at me. “I asked you not to do this. You made your decision. These are the repercussions.”, Veronica Roth
“There's a hunger for stories in all of us, adults too. We need stories so much that we're even willing to read bad books to get them, if the good books won't supply them.”, Philip Pullman
“It's a lie to think you're not good enough. It's a lie to think you're not worth anything.”, Nick Vujicic
“I’ve gotta get out of the basement. I’ve gotta see the world. I’ve gotta make a difference”, Gerard Way
“Let us live so that when we come to die even the undertaker will be sorry.”, Mark Twain
“When your will is God's will, you will have your will.”, Charles Spurgeon
“The greatest day in your life and mine is when we take total responsibility for our attitudes. That's the day we truly grow up.”, John C. Maxwell
“What's most important in a friendship? Tolerance and loyalty.”, J.K. Rowling
“My only regrets are the moments when i doubted myself and took the safe route. Life is too short to waste time being unhappy.”, Dan Howell
“life is truly known only to those who suffer, lose, endure adversity, & stumble from defeat to defeat.”, anaïs nin
“I don’t chase after anyone, If you wanna walk out of my life, then I’ll hold the fucking door open for you.”, Wiz Khalifa
“The purpose of literature is to turn blood into ink.”, T.S. Eliot
“There is no failure except in no longer trying.”, Elbert Hubbard
“Every problem is a gift - without problems we would not grow.”, Anthony Robbins
“Everything stinks till it’s finished.”, Dr. Seuss
“A thousand words leave not the same deep impression as does a single deed.”, Henrik Ibsen
“I'm starting with the man in the mirror,I'm asking him to change his ways;And no message could have been any clearer,If you wanna make the world a better place,Take a look at yourself, and then make a change!”, Michael  Jackson
“One life is all we have and we live it as we believe in living it. But to sacrifice what you are and to live without belief, that is a fate more terrible than dying.”, Joan of Arc
“To be grateful is to recognize the Love of God in everything He has given us - and He has given us everything. Every breath we draw is a gift of His love, every moment of existence is a grace, for it brings with it immense graces from Him. Gratitude therefore takes nothing for granted, is never unresponsive, is constantly awakening to new wonder and to praise of the goodness of God. For the grateful person knows that God is good, not by hearsay but by experience. And that is what makes all the difference.”, Thomas Merton
“I am the captain of my soul.”, Nelson Mandela
“With your head full of brains and your shoes full of feet, you're too smart to go down any not-so-good street.”, Dr. Seuss
“This is the key to life: To expect everything to be given to you from above, yet to be genuinely surprised and forever grateful, when they are. Expecting all good things to be yours, while not knowing how to take anything for granted. If there may be a key in life, this is the key.”, C. JoyBell C.
“It is not worth the while to let our imperfections disturb us always.”, Henry David Thoreau
“Early to bed and early to rise makes a man healthy, wealthy, and wise.”, Benjamin Franklin
“The deeds you do may be the only sermon some persons will hear today”, St. Francis Of Assisi
“Normalness leads to sadness.”, Phil Lester
“Happiness is a choice that requires effort at times.”, Aeschylus
“The trick is to enjoy life. Don't wish away your days, waiting for better ones ahead.”, Marjorie Pay Hinckley
“Destiny is real. And she's not mild-mannered. She will come around and hit you in the face and knock you over and before you know what hit you, you're naked- stripped of everything you thought you knew and everything you thought you didn't know- and there you are! A bloody nose, bruises all over you, and naked. And it's the most beautiful thing.”, C. JoyBell C.
“Rise to the occassion which is life!”, Virginia Euwer Wolff
“Write while the heat is in you. The writer who postpones the recording of his thoughts uses an iron which has cooled to burn a hole with. He cannot inflame the minds of his audience.”, Henry David Thoreau
“All worthy work is open to interpretations the author did not intend. Art isn't your pet -- it's your kid. It grows up and talks back to you.”, Joss Whedon
“Argue for your limitations and, sure enough, they're yours.”, Richard Bach
“I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.”, Michael jordan
“Fault always lies in the same place: with him weak enough to lay blame.”, Stephen King
“A path is only a path, and there is no affront, to oneself or to others, in dropping it if that is what your heart tells you . . . Look at every path closely and deliberately. Try it as many times as you think necessary. Then ask yourself alone, one question . . . Does this path have a heart? If it does, the path is good; if it doesn't it is of no use.”, Carlos Castaneda
“It does not matter how slowly you go so long as you do not stop.”, Andy Warhol
“I don't understand dating.. and the other things that people do.. all I know is that you ought to find the one you recognize. The one who gives you four arms, four legs, four eyes, and has the other half of your heart. There's only one of those, so what are all the other things for? Like dating?”, C. JoyBell C.
“Millions saw the apple fall, Newton was the only one who asked why?”, Bernard M. Baruch
“Accepting oneself does not preclude an attempt to become better.”, Flannery O'Connor
“Know from whence you came. If you know whence you came, there are absolutely no limitations to where you can go.”, James Baldwin
“I'm not going to limit myself just because people won't accept the fact that I can do something else.”, Dolly Parton
“If someone does not want me it is not the end of the world. But if I do not want me, the world is nothing but endings.”, Nayyirah Waheed
“The best love in the world, is the love of a man. The love of a man who came from your womb, the love of your son! I don't have a daughter, but maybe the love of a daughter is the best, too. I am first and foremost me, but right after that, I am a mother. The best thing that I can ever be, is me. But the best gift that I will ever have, is being a mother.”, C. JoyBell C.
“Complain and remain. Praise and be raised.”, Joyce Meyer
“Sometimes the most beautiful people are beautifully broken.”, robert m drake
“Not everything is supposed to become something beautiful and long-lasting. Sometimes people come into your life to show you what is right and what is wrong, to show you who you can be, to teach you to love yourself, to make you feel better for a little while, or to just be someone to walk with at night and spill your life to. Not everyone is going to stay forever, and we still have to keep on going and thank them for what they’ve given us.”, Emery Allen
“Whatever you see you gotta keep a sense of humor; you gotta be able to smile through all the bullshit.”, Tupac Shakur
“Two years he walks the earth. No phone, no pool, no pets, no cigarettes. Ultimate freedom. An extremist. An aesthetic voyager whose home is the road. Escaped from Atlanta. Thou shalt not return, 'cause "the West is the best." And now after two rambling years comes the final and greatest adventure. The climactic battle to kill the false being within and victoriously conclude the spiritual pilgrimage. Ten days and nights of freight trains and hitchhiking bring him to the Great White North. No longer to be poisoned by civilization he flees, and walks alone upon the land to become lost in the wild.--Alexander Supertramp, May 1992”, Christopher McCandless
“A man may die, nations may rise and fall, but an idea lives on. Ideas have endurance without death.”, John F. Kennedy
“When I was a little girl, everything in the world fell into either of these two categories: wrong or right. Black or white. Now that I am an adult, I have put childish things aside and now I know that some things fall into wrong and some things fall into right. Some things are categorized as black and some things are categorized as white. But most things in the world aren't either! Most things in the world aren't black, aren't white, aren't wrong, aren't right, but most of everything is just different. And now I know that there's nothing wrong with different, and that we can let things be different, we don't have to try and make them black or white, we can just let them be grey. And when I was a child, I thought that God was the God who only saw black and white. Now that I am no longer a child, I can see, that God is the God who can see the black and the white and the grey, too, and He dances on the grey! Grey is okay.”, C. JoyBell C.
“The adventure of life is to learn. The purpose of life is to grow. The nature of life is to change. The challenge of life is to overcome. The essence of life is to care. The opportunity of like is to serve. The secret of life is to dare. The spice of life is to befriend. The beauty of life is to give.”, William Arthur Ward
“Sometimes I arrive just when God's ready to have somone click the shutter.”, Ansel Adams
“Do not wait: the time will never be 'just right'. Start where you stand, and work whatever tools you may have at your command and better tools will be found as you go along.”, Napoleon Hill
“When obstacles arise, you change your direction to reach your goal; you do not change your decision to get there.”, Zig Ziglar
“It's not that some people have willpower and some don't... It's that some people are ready to change and others are not.”, James Gordon
“Sometimes I go to God and say, "God, if Thou dost never answer another prayer while I live on this earth, I will still worship Thee as long as I live and in the ages to come for what Thou hast done already. God’s already put me so far in debt that if I were to live one million millenniums I couldn’t pay Him for what He’s done for me.”, A.W. Tozer
“ Many of us are slaves to our minds. Our own mind is our worst enemy. We try to focus, and our mind wanders off. We try to keep stress at bay, but anxiety keeps us awake at night. We try to be good to the people we love, but then we forget them and put ourselves first. And when we want to change our life, we dive into spiritual practice and expect quick results, only to lose focus after the honeymoon has worn off. We return to our state of bewilderment. We're left feeling helpless and discouraged. It seems we all agree that training the body through exercise, diet, and relaxation is a good idea, but why don't we think about training our minds?”, Sakyong Mipham Rinpoche
“When I get sad, I stop being sad and be awesome instead.”, Barney Stinson
“Great men are like eagles, and build their nest on some lofty solitude”, Arthur Schopenhauer
“Your own positive future begins in this moment. All you have is right now. Every goal is possible from here.”, Lao Tzu
“Do not pray for easy lives. Pray to be stronger men.[Quoting Reverend Phillips Brooks, during Remarks at Presidential Prayer Breakfast, February 7 1963]”, John F. Kennedy
“Smile at strangers and you just might change a life.”, Steve Maraboli
“There are two things we should always be 1. raw and 2. ready. When you are raw, you are always ready and when you are ready you usually realize that you are raw. Waiting for perfection is not an answer, one cannot say "I will be ready when I am perfect" because then you will never be ready, rather one must say "I am raw and I am ready just like this right now, how and who I am.”, C. JoyBell C.
“If people are going to be allowed to say "we love you" and "I love you", they'd better have the backbone to prove it. Love isn't just a word.”, C. JoyBell C.
“Happiness is the object and design of our existence; and will be the end thereof, if we pursue the path that leads to it; and this path is virtue, uprightness, faithfulness, holiness, and keeping all the commandments of God.”, Joseph Smith
“Always tell what you feel. Do what you think...”, Gabriel García Márquez
“My happiness grows in direct proportion to my acceptance, and in inverse proportion to my expectations.”, Michael J. Fox
“Life isn't about having, it's about being. You could surround yourself with all that money can buy, and you'd still be as miserable as a human can be. I know people with perfect bodies who don't have half the happiness I've found. On my journeys I've seen more joy in the slums of Mumbai and the orphanages of Africa than in wealthy gated communities and on sprawling estates worth millions. Why is that? You'll find contentment when your talents and passion are completely engaged, in full force. Recognise instant self-gratification for what it is. Resist the temptation to grab for material objects like the perfect house, the coolest clothes or the hottest car. The if I just had X, I would be happy syndrome is a mass delusion. When you look for happiness in mere objects, they are never enough. Look around. Look within.”, Nick Vujicic
“you don't have to worry about burning bridges, if you're building your own”, Kerry E. Wagner
“A thing of beauty is a joy for ever: Its loveliness increases; it will never Pass into nothingness; but still will keep A bower quiet for us, and a sleep Full of sweet dreams, and health, and quiet breathing.”, John Keats
“In this sad world of ours, sorrow comes to all; and, to the young, it comes with bitterest agony, because it takes them unawares. The older have learned to ever expect it. I am anxious to afford some alleviation of your present distress. Perfect relief is not possible, except with time. You can not now realize that you will ever feel better. Is not this so? And yet it is a mistake. You are sure to be happy again. To know this, which is certainly true, will make you some less miserable now. I have had experience enough to know what I say; and you need only to believe it, to feel better at once.”, Abraham Lincoln
“Music is an agreeable harmony for the honor of God and the permissible delights of the soul.”, Johann Sebastian Bach
“You must expect great things of yourself before you can do them.”, Michael Jordan
“To those who will see, the world waits.”, Libba Bray
“Men and women who turn their lives over to God will discover that He can make a lot more out of their lives than they can. He can deepen their joys, expand their vision, quicken their minds, strengthen their muscles, lift their spirits, multiply their blessings, increase their opportunities, comfort their soals, and pour out peace.”, Ezra Taft Benson
“Wait long enough and people will surprise and impress. When you're pissed off at someone and you're angry at them, you just haven't given them enough time. Just give them a little more time and they almost always will impress you.”, Randy Pausch
“Champions have the courage to keep turning the pages because they know a better chapter lies ahead.”, Paula White
“Kecantikan yang abadi terletak pada keelokan adab dan ketinggian ilmu seseorang. Bukan terletak pada wajah dan pakaiannya.”, Hamka
“No man is brave that has never walked a hundred miles. If you want to know the truth of who you are, walk until not a person knows your name. Travel is the great leveler, the great teacher, bitter as medicine, crueler than mirror-glass. A long stretch of road will teach you more about yourself than a hundred years of quiet.”, Patrick Rothfuss
“I know in my heart that man is good, that what is right will always eventually triumph, and there is purpose and worth to each and every life.”, Ronald Reagan
“Never stop. Never stop fighting. Never stop dreaming.”, Tom Hiddleston
“You make the world a better place by making daily improvements to become the best version of yourself.”, Roy T. Bennett
“If you do what you've always done, you'll get what you've always gotten. ”, Tony Robbins
“Never bend your head. Hold it high. Look the world straight in the eye.”, Helen Keller
“Always be yourself, there's no one better!”, Selena Gomez
“I don't know why people are afraid of lust. Then I can imagine that they are very afraid of me, for I have a great lust for everything. A lust for life, a lust for how the summer-heated street feels beneath my feet, a lust for the touch of another's skin on my skin...a lust for everything. I even lust after cake. Yes, I am very lusty and very scary.”, C. JoyBell C.
“Come friends, it's not too late to seek a newer world.”, Alfred Lord Tennyson
“Courage does not always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.”, Mary Anne Radmacher
“Everything you want is on the other side of fear.”, Jack Canfield
“No matter how hard life is, don't lose hope”, Zayn Malik
“When men are pure, laws are useless; when men are corrupt, laws are broken.”, Benjamin Disraeli
“There's no limit to what you can dream. You expect the unexpected, you believe in magic, in fairy tales, and in possibilities. Then you grow older and that innocence is shattered and somewhere along the way the reality of life gets in the way and you're hit by the realization that you can't be all you wanted to be, you just might have to settle for a little bit less.”, Cecelia Ahern
“When one door closes another door opens; but we so often look so long and so regretfully upon the closed door, that we do not see the ones which open for us.”, Alexander Graham Bell
“An idea is salvation by imagination”, Frank Lloyd Wright
“The great secret of true success, of true happiness, is this: the man or woman who asks for no return, the perfectly unselfish person, is the most successful.”, Swami Vivekananda
“Wherever men and women are persecuted because of their race, religion, or political views, that place must — at that moment — become the center of the universe.”, Elie Wiesel
“Perfect is the enemy of good.”, Voltaire
“It is harder to crack prejudice than an atom.”, Albert Einstein
“Listen to what you know instead of what you fear.”, Richard Bach
“Your inner strength is your outer foundation”, Allan Rufus
“Someday is now.”, Gaddy Bergmann
“Everything is determined, the beginning as well as the end, by forces over which we have no control. It is determined for the insect, as well as for the star. Human beings, vegetables, or cosmic dust, we all dance to a mysterious tune, intoned in the distance by an invisible piper.”, Albert Einstein
“What if the kid you bullied at school, grew up, and turned out to be the only surgeon who could save your life?”, Lynette Mather
“Everything that is done in this world is done by hope.”, Martin Luther
“A dog has no use for fancy cars or big homes or designer clothes. Status symbol means nothing to him. A waterlogged stick will do just fine. A dog judges others not by their color or creed or class but by who they are inside. A dog doesn't care if you are rich or poor, educated or illiterate, clever or dull. Give him your heart and he will give you his. It was really quite simple, and yet we humans, so much wiser and more sophisticated, have always had trouble figuring out what really counts and what does not. As I wrote that farewell column to Marley, I realized it was all right there in front of us, if only we opened our eyes. Sometimes it took a dog with bad breath, worse manners, and pure intentions to help us see.”, John Grogan
“Run when you can, walk if you have to, crawl if you must; just never give up.”, Dean Karnazes
“According to this law [the law of Dharma], you have a unique talent and a unique way of expressing it. There is something that you can do better than anyone else in the whole world--and for every unique talent and unique expression of that talent, there are also unique needs. When these needs are matched with the creative expression of your talent, that is the spark that creates affluence. Expressing your talents to fulfill needs creates unlimited wealth and abundance.”, Deepak Chopra
“All human beings should try to learn before they die what they are running from, and to, and why.”, James Thurber
“At the moment of commitment the entire universe conspires to assist you.”, Johann Wolfgang von Goethe
“Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.”, Christian D. Larson
“Success is a lousy teacher. It seduces smart people into thinking they can't lose.”, Bill Gates
“Wherever the art of Medicine is loved, there is also a love of Humanity. ”, Hippocrates
“The sky is the limit... for some people aim higher nothing is impossible.”, Demi Lovato
“If people make fun of you, that probably means you're doing something right.”, Evanescence
“Realize deeply that the present moment is all you will ever have.”, Eckhart Tolle
“Your own Self-Realization is the greatest service you can render the world.”, Ramana Maharshi
“The aim of every artist is to arrest motion, which is life, by artificial means and hold it fixed so that a hundred years later, when a stranger looks at it, it moves again since it is life.”, William Faulkner
“None of us will ever accomplish anything excellent or commanding except when he listens to this whisper which is heard by him alone.”, Ralph Waldo Emerson
“Three passions, simple but overwhelmingly strong, have governed my life: the longing for love, the search for knowledge, and unbearable pity for the suffering of mankind. These passions, like great winds, have blown me hither and thither, in a wayward course, over a great ocean of anguish, reaching to the very verge of despair. I have sought love, first, because it brings ecstasy - ecstasy so great that I would often have sacrificed all the rest of life for a few hours of this joy. I have sought it, next, because it relieves loneliness--that terrible loneliness in which one shivering consciousness looks over the rim of the world into the cold unfathomable lifeless abyss. I have sought it finally, because in the union of love I have seen, in a mystic miniature, the prefiguring vision of the heaven that saints and poets have imagined. This is what I sought, and though it might seem too good for human life, this is what--at last--I have found.With equal passion I have sought knowledge. I have wished to understand the hearts of men. I have wished to know why the stars shine. And I have tried to apprehend the Pythagorean power by which number holds sway above the flux. A little of this, but not much, I have achieved. Love and knowledge, so far as they were possible, led upward toward the heavens. But always pity brought me back to earth. Echoes of cries of pain reverberate in my heart. Children in famine, victims tortured by oppressors, helpless old people a burden to their sons, and the whole world of loneliness, poverty, and pain make a mockery of what human life should be. I long to alleviate this evil, but I cannot, and I too suffer. This has been my life. I have found it worth living, and would gladly live it again if the chance were offered me.”, Bertrand Russell
“However beautiful the strategy, you should occasionally look at the results.”, Winston Churchill
“Mimpi-mimpi kamu, cita-cita kamu, keyakinan kamu, apa yang kamu mau kejar, biarkan ia menggantung, mengambang 5 centimeter di depan kening kamu. Jadi dia nggak akan pernah lepas dari mata kamu. Dan kamu bawa mimpi dan keyakinan kamu itu setiap hari, kamu lihat setiap hari, dan percaya bahwa kamu bisa. Apa pun hambatannya, bilang sama diri kamu sendiri, kalo kamu percaya sama keinginan itu dan kamu nggak bisa menyerah. Bahwa kamu akan berdiri lagi setiap kamu jatuh, bahwa kamu akan mengejarnya sampai dapat, apapun itu, segala keinginan, mimpi, cita-cita, keyakinan diri.. Biarkan keyakinan kamu, 5 centimeter mengambang di depan kening kamu. Dan… sehabis itu yang kamu perlu cuma kaki yang akan berjalan lebih jauh dari biasanya, tangan yang akan berbuat lebih banyak dari biasanya, mata yang akan menatap lebih lama dari biasanya, leher yang akan lebih sering melihat ke atas, lapisan tekad yang seribu kali lebih keras dari baja, dan hati yang akan bekerja lebih keras dari biasanya, serta mulut yang akan selalu berdoa..Keep our dreams alive, and we will survive..[5cm]”, Donny Dhirgantoro
“Have you ever felt the longing for someone you could admire? For something, not to look down at, but up to?”, Ayn Rand
“There are scores of people waiting for someone just like us to come along; people who will appreciate our compassion, our encouragement, who will need our unique talents. Someone who will live a happier life merely because we took the time to share what we had to give.”, Leo Buscaglia
“A tamed woman will never leave her mark in the world.”, robert m drake
“If you have kindness in your heart, you offer acts of kindness to touch the hearts of others wherever you go—whether they are random or planned. Kindness becomes a way of life.”, Roy T. Bennett
“I have frequently seen people become neurotic when they content themselves with inadequate or wrong answers to the questions of life. They seek position, marriage, reputation, outward success of money, and remain unhappy and neurotic even when they have attained what they were seeking. Such people are usually confined within too narrow a spiritual horizon. Their life has not sufficient content, sufficient meaning. If they are enabled to develop into more spacious personalities, the neurosis generally disappears.”, Carl Jung
“There isn't time, so brief is life, for bickerings, apologies, heartburnings, callings to account. There is only time for loving, and but an instant, so to speak, for that.”, Mark Twain
“Give me the Love that leads the wayThe Faith that nothing can dismayThe Hope no disappointments tireThe Passion that'll burn like fireLet me not sink to be a clodMake me Thy fuel, Flame of God”, Amy Carmichael
“Many persons have a wrong idea of what constitutes true happiness. It is not attained through self-gratification but through fidelity to a worthy purpose.”, Helen Keller
“The wish of death had been palpably hanging over this otherwise idyllic paradise for a good many years.  All business and politics is personal in the Philippines.  If it wasn't for the cheap beer and lovely girls one of us would spend an hour in this dump.  They [Jehovah's Witnesses] get some kind of frequent flyer points for each person who signs on.I'm not lazy. I'm just motivationally challenged.  I'm not fat. I just have lots of stored energy. You don't get it do you? What people think of you matters more than the reality. Marilyn.  Despite standing firm at the final hurdle Marilyn was always ready to run the race.  After answering the question the woman bent down behind the stand out of sight of all, and crossed herself.  It is amazing what you can learn in prison. Merely through casual conversation Rick had acquired the fundamentals of embezzlement, fraud and armed hold up.  He wondered at the price of honesty in a grey world whose half tones changed faster than the weather.  The banality of truth somehow always surprises the news media before they tart it up.  You've ridden jeepneys in peak hour. Where else can you feel up a fourteen-year-old schoolgirl without even trying? [Ralph Winton on the Philippines finer points]  Life has no bottom. No matter how bad things are or how far one has sunk things can always get worse.  You could call the Oval Office an information rain shadow.  In the Philippines, a whole layer of criminals exists who consider that it is their right to rob you unhindered. If you thwart their wicked desires, to their way of thinking you have stolen from them and are evil.  There's honest and dishonest corruption in this country.  Don't enjoy it too much for it's what we love that usually kills us.  The good guys don't always win wars but the winners always make sure that they go down in history as the good guys.  The Philippines is like a woman. You love her and hate her at the same time.  I never believed in all my born days that ideas of truth and justice were only pretty words to brighten a much darker and more ubiquitous reality. The girl was experiencing the first flushes of love while Rick was at least feeling the methadone equivalent.  Although selfishness and greed are more ephemeral than the real values of life their effects on the world often outlive their origins.  Miriam's a meteor job. Somewhere out there in space there must be a meteor with her name on it.  Tsismis or rumours grow in this land like tropical weeds.  Surprises are so common here that nothing is surprising.  A crooked leader who can lead is better than a crooked one who can't.  Although I always followed the politics of Hitler I emulate the drinking habits of Churchill.  It [Australia] is the country that does the least with the most.  Rereading the brief lines that told the story in the manner of Fox News reporting the death of a leftist Rick's dark imagination took hold.  Didn't your mother ever tell you never to trust a man who doesn't drink?  She must have been around twenty years old, was tall for a Filipina and possessed long black hair framing her smooth olive face. This specter of loveliness walked with the assurance of the knowingly beautiful. Her crisp and starched white uniform dazzled in the late-afternoon light and highlighted the natural tan of her skin. Everything about her was in perfect order. In short, she was dressed up like a pox doctor’s clerk. Suddenly, she stopped, turned her head to one side and spat comprehensively into the street. The tiny putrescent puddle contrasted strongly with the studied aplomb of its all-too-recent owner, suggesting all manner of disease and decay.”, John Richard Spencer
“It is better to be respected than it is to be popular. Popularity ends on yearbook day, but respect lasts forever.”, John Bytheway
“What we love determines what we seek. What we seek determines what we think and do. What we think and do determines who we are — and who we will become.”, Dieter F. Uchtdorf
“Life is a series of surprises and would not be worth taking or keeping if it were not.”, Ralph Waldo Emerson
“To touch the soul of another human being is to walk on holy ground.”, Stephen Covey
“Prayer is not an old woman's idle amusement. Properly understood and applied, it is the most potent instrument of action.”, Mahatma Gandhi
“Every moment of light and dark is a miracle.”, Walt Whitman
“Death twitches my ear;'Live,' he says... 'I'm coming.”, Virgil
“It's not how old you are, it's how you are old.”, Jules Renard
“Because I trust in the ever-changing climate of the heart. (At least, today I feel that way.) I think it is necessary to have many experiences for the sake of feeling something; for the sake of being challenged, and for the sake of being expressive, to offer something to someone else, to learn what we are capable of.”, Jason Mraz
“I want to be like Gandhi and Martin Luther King and John Lennon but i want to STAY ALIVE.”, Madonna
“We have just enough religion to make us hate, but not enough to make us love one another.”, Jonathan Swift
“We lay there and looked up at the night sky and she told me about stars called blue squares and red swirls and I told her I'd never heard of them. Of course not, she said, the really important stuff they never tell you. You have to imagine it on your own.”, Brian Andreas
“The function of freedom is to free someone else.”, Toni Morrison
“The most exquisite paradox… as soon as you give it all up, you can have it all. As long as you want power, you can't have it. The minute you don't want power, you'll have more than you ever dreamed possible.”, ram dass
“People would rather believe than know.”, Edward O. Wilson
“All I ask is this: Do something. Try something. Speaking out, showing up, writing a letter, a check, a strongly worded e-mail. Pick a cause – there are few unworthy ones. And nudge yourself past the brink of tacit support to action. Once a month, once a year, or just once...Even just learning enough about a subject so you can speak against an opponent eloquently makes you an unusual personage. Start with that. Any one of you would have cried out, would have intervened, had you been in that crowd in Bashiqa. Well thanks to digital technology, you’re all in it now.”, Joss Whedon
“This place is a dream. Only a sleeper considers it real. Then death comes like dawn, and you wake up laughing at what you thought was your grief.”, Rumi
“A writer must teach himself that the basest of all things is to be afraid. ”, William Faulkner
“If you don’t like the road you’re walking, start paving another one.”, Dolly Parton
“Action springs not from thought, but from a readiness for responsibility.”, Dietrich Bonhoeffer
“Make today worth remembering.”, Zig Ziglar
“Go on, get out! Last words are for fools who haven't said enough!”, Karl Marx
“How sweet is the assurance, how comforting is the peace that come from the knowledge that if we marry right and live right, our relationship will continue, notwithstanding the certainty of death and the passage of time. Men may write love songs and sing them. They may yearn and hope and dream. But all of this will be only a romantic longing unless there is an exercise of authority that transcends the powers of time and death.”, Gordon B. Hinckley
“Life is like a play: it's not the length, but the excellence of the acting that matters.”, Seneca
“Don't look to the approval of others for your mental stability”, Karl Lagerfeld
“Keep your promises and be consistent. Be the kind of person others can trust.”, Roy T. Bennett
“You can only be afraid of what you think you know.”, Jiddu Krishnamurti
“With our thoughts we make the world.”, Buddha
“Be so strong that nothing can disturb your peace of mind. Talk health, happiness, and prosperity to every person you meet. Make all your friends feel there is something special in them. Look at the sunny side of everything. Think only the best, be as enthusiastic about the success of others as you are about your own.Forget the mistakes of the past and press on to the greater achievements of the future. Give everyone a smile. Spend so much time improving yourself that you have no time left to criticize others. Be too big for worry and too noble for anger.”, Norman Vincent Peale
“Life consists of two days, one for you one against you. So when it's for you don't be proud or reckless, and when it's against you be patient, for both days are test for you.”, Hazrat Ali Ibn Abu-Talib A.S
“A photographer is like a cod, which produces a million eggs in order that one may reach maturity.”, George Bernard Shaw
“Your children are not your children. They are the sons and daughters of Life's longing for itself... You may house their bodies but not their souls, for their souls dwell in the house of tomorrow, which you cannot visit, not even in your dreams.”, Kahlil Gibran
“If you are a dreamer come in”, Shel Silverstein
“Life keeps throwing me lemons because I make the best lemonade...”, King James Gadsden
“Thou shalt not be a victim, thou shalt not be a perpetrator, but, above all, thou shalt not be a bystander.”, Yehuda Bauer
“You need just the right amount of 'Fuck the world' and the right amount of belief in something...and you need the right amount of love.”, Gerard Way
“I hope to write someday and that’s even more terrifying than performing. You don’t just entertain the audience, you give them little bits of your soul.”, Chris Colfer
“Love your life. Because your life is what you have to give.”, Tom Hiddleston
“You say freak, I say unique.”, Christian Baloga
“We may have all come on different ships, but we're in the same boat now.”, Martin Luther King Jr.
“It is not so much the major events as the small day-to-day decisions that map the course of our living. . . Our lives are, in reality, the sum total of our seemingly unimportant decisions and of our capacity to live by those decisions.”, Gordon B. Hinckley
“If we bear all this suffering and if there are still Jews left, when it is over, then Jews, instead of being doomed, will be held up as an example.”, Anne Frank
“Real change is difficult at the beginning. Without the familiar to rely upon, you may not in as much command as you had once been. When things are not going your way, you will start doubting yourself. Stay positive, keep the faith, and keep moving forward – your breakthrough may be just around the corner.”, Roy T. Bennett
“The truth was a mirror in the hands of God. It fell, and broke into pieces. Everybody took a piece of it, and they looked at it and thought they had the truth.”, Mawlana Jalal-al-Din Rumi
“Leaders must be close enough to relate to others, but far enough ahead to motivate them.”, John C Maxwell
“I know. It’s all wrong. By rights we shouldn’t even be here. But we are. It's like in the great stories, Mr. Frodo. The ones that really mattered. Full of darkness and danger they were. And sometimes you didn't want to know the end. Because how could the end be happy? How could the world go back to the way it was when so much bad had happened? But in the end, it’s only a passing thing, this shadow. Even darkness must pass. A new day will come. And when the sun shines it will shine out the clearer. Those were the stories that stayed with you. That meant something, even if you were too small to understand why. But I think, Mr. Frodo, I do understand. I know now. Folk in those stories had lots of chances of turning back, only they didn’t. They kept going, because they were holding on to something.”, Peter Jackson
“He who takes offense when no offense is intended is a fool, and he who takes offense when offense is intended is a greater fool.”, Brigham Young
“Women can fake an orgasm, but men can fake an entire relationship.”, Sharon Stone
“Achievement has no color”, Abraham Lincoln
“The question is not how to get cured, but how to live.”, Joseph Conrad
“The nights you fight best arewhen all the weapons are pointed at you,when all the voices hurl their insultswhile the dream is being strangled.The nights you fight best arewhen reason gets kicked in the gut,when the chariots of gloom encircle you.The nights you fight best arewhen the laughter of fools fills the air,when the kiss of death is mistaken for love.The nights you fight best arewhen the game is fixed,when the crowd screams for your blood.The nights you fight best areon a night like thisas you chase a thousand dark rats from your brain,as you rise up against the impossible,as you become a brother to the tender sister of joyand move on regardless.”, Charles Bukowski
“In essence, if we want to direct our lives, we must take control of our consistent actions. It's not what we do once in a while that shapes our lives, but what we do consistently.”, Anthony Robbins
“Ignore all hatred and criticism. Live for what you create, and die protecting it.”, Lady Gaga
“Skies are crying,I am watching,Catching teardrops in my hands.Only silence, as it's ending,Like we never had a chance.Do you have to make me feelLike there's nothing left of me?”, Demi Lovato
“In my deepest wound I saw your glory, and it dazzled me.”, St. Augustine
“Love is like a good cake; you never know when it's coming, but you'd better eat it when it does!”, C. JoyBell C.
“Life is short. Focus on what really matters most; you should change your priorities over time.”, Roy T. Bennett
“I'm the living embodiment of 'it could be worse'.”, Dan Howell
“Courage and perseverance have a magical talisman, before which difficulties disappear and obstacles vanish into air.”, John Quincy Adams
“Get comfortable with being uncomfortable!”, Jillian Michaels
“Begin doing what you want to do now. We are not living in eternity. We have only this moment, sparkling like a star in our hand--and melting like a snowflake...”, Sir Francis Bacon
“Politeness is okay, but it gets old and boring. You want to attack life with a passion, not a politeness, you want people to think about you and remember you and say "she is so passionate" you don't want people to think about you and remember you and say "she is so polite," because, who cares about polite?”, C. JoyBell C.
“Try to find pleasure in the speed that you're not used to. Changing the way you do routine things allows a new person to grow inside of you. But when all is said and done, you're the one who must decide how you handle it.”, Paulo Coelho
“The graveyard is the richest place on earth, because it is here that you will find all the hopes and dreams that were never fulfilled, the books that were never written, the songs that were never sung, the inventions that were never shared, the cures that were never discovered, all because someone was too afraid to take that first step, keep with the problem, or determined to carry out their dream.”, Les Brown
“Doing the best at this moment puts you in the best place for the mext moment”, Oprah Winfrey
“The difference between false memories and true ones is thesame as for jewels: it is always the false ones that look themost real, the most brilliant.”, Salvador Dali
“Nobody can go back and start a new beginning, but anyone can start today and make a new ending.”, Maria Robinson
“The culture of women in the church today is crippled by some very pervasive lies. "To be spiritual is to be busy. To be spiritual is to be disciplined. To be spiritual is to be dutiful." No, to be spiritual is to be in Romance with God. The desire to be romanced lies deep in the heart of every women. It is for such that you were made. Are you ARE romanced, and ever will be.”, John Elderedge
“There are powers far beyond us, plans far beyond what we could have ever thought of, visions far more vast than what we can ever see on our own with our own eyes, there are horizons long gone beyond our own horizons. This is courage- to throw away what is our own that is limited and to thrust ourselves into the hands of these higher powers- God and Destiny.To do this is to abide in the realm of the eternal, to walk in the path of the everlasting to follow in the footprints of God and demi-gods. The hardest part for man is the letting go. For some reason, he thinks himself big enough to know and to see what's good for him. But in the letting go........is found freedom. In the letting go........ is found the flight!”, C. JoyBell C.
“Do you train for passing tests or do you train for creative inquiry?”, Noam Chomsky
“The best kind of humans are the ones who stay.”, robert m drake
“That which we persist in doing becomes easier to do, not that the nature of the thing has changed but that our power to do has increased.”, Ralph Waldo Emerson
“Kemampuan membaca itu sebuah rahmat. Kegemaran membaca; sebuah kebahagiaan.”, Goenawan Mohamad
“The hardest battle you are ever going to have to fight is the battle to be just you.”, Leo Buscaglia
“Who belonged to no one, who belonged to everyone.Who had nothing, who wanted everything.”, Lana Del Rey
“Look not mournfully into the past, it comes not back again. Wisely improve the present, it is thine. Go forth to meet the shadowy future without fear and with a manly heart.”, Henry Wadsworth Longfellow
“Until justice rolls down like water and righteousness like a mighty stream.”, Martin Luther King Jr.
“Be like the flower that gives its fragrance to even the hand that crushes it.”, Imam Ali
“To all that come to this happy place, welcome. Disneyland is your land. Here age relives fond memories of the past, and here youth may savor the challenge and promise of the future. Disneyland is dedicated to the ideals, the dreams, and the hard facts that have created America... with hope that it will be a source of joy and inspiration to all the world.”, Walt Disney
“Is it easy? Usually not. But you don't forgive people for their benefit. You do it for your benefit.”, Andrew Matthews
“Learn everything you can, anytime you can, from anyone you can, there will always come a time when you will be grateful you did.”, Sarah Caldwell
“Is there any real purpose in being alive if all we are going to do is get up every day and live only for ourselves?Live your life to help others. Give & live selflessly.”, Joyce Meyer
“We have no right to express an opinion until we know all of the answers.”, Kurt Cobain
“An individual has not started living until he can rise above the narrow confines of his individualistic concerns to the broader concerns of all humanity.”, Martin Luther King Jr.
“You ask, what is our aim? I can answer in one word. It is victory, victory at all costs, victory in spite of all terror, victory, however long and hard the road may be; for without victory, there is no survival.”, Winston Churchill
“It is much easier to be brave if you do not know everything.”, Lois Lowry
“If you want to catch beasts you don't see every day,You have to go places quite out of the way,You have to go places no others can get to.You have to get cold and you have too get wet, too.”, Dr. Seuss
“My hope still is to leave the world a bit better than when I got here.”, Jim Henson
“Give your weakness to one who helps.”, Rumi
“You don't know, oh, ohYou don't know you're beautiful.”, One Direction
“And people who don’t dream, who don’t have any kind of imaginative life, they must… they must go nuts. I can’t imagine that.”, Stephen King
“I know that the molecules in my body are traceable to phenomena in the cosmos. That makes me want to grab people on the street and say: ‘Have you HEARD THIS?”, Neil deGrasse Tyson
“Stand up and walk. Move on. After all, you have perfect legs to stand on.”, Arakawa Hiromu
“Life is at its best when everything has fallen out of place, and you decide that you're going to fight to get them right, not when everything is going your way and everyone is praising you.”, Thisuri Wanniarachchi
“Dead yesterdays and unborn tomorrows, why fret about it, if today be sweet.”, Omar Khayyâm
“Where your talents and the needs of the world cross, there lies your vocation.”, Aristotle
“Do you have to make me feel like there's nothing left of me? You can take everything I have, you can break everything I am, like I am made of glass, like I am made of paper.Go on and try to tear me down I will be rising from the ground like a Skyscraper...”, Demi Lovato
“Anything that makes weak - physically, intellectually and spiritually, reject it as poison.”, Swami Vivekananda
“Anger is an essential part of being human. People are taught to deny themselves anger, and in this, they are actually opening themselves up to hate. The more you deny yourself the freedom to be angry, the more you will hate. Let yourself be angry, and hate will disintegrate, and when hate disintegrates, forgiveness prevails! The more you deny that you are angry, in attempts to be "holy" the more inhuman you will become, and the more inhuman you will become, the harder it will be to forgive.”, C. JoyBell C.
“Create your own miracles; do what you think you cannot do.”, Roy T. Bennett
“If you don't love yourself, how in the hell you gonna love somebody else?”, RuPaul
“Sometimes to self-discover you must self-destruct.”, robert m drake
“Too many of us are not living our dreams because we are living our fears.”, Les Brown
“Life is very short, and there's no time for fussing and fighting my friends”, John Lennon
“Rule your mind or it will rule you.”, Horace
“When the world pushes you to your knees, you're in the perfect position to pray”, Hazrat Ali Ibn Abu-Talib A.S
“Understanding is the reward of faith. Therefore, seek not to understand that you may believe, but believe that you may understand.”, St. Augustine of Hippo
“I want a tattoo over my heart that reads TRY HARDER YOU LAZY PARAMEDIC SHITBAG OR I WILL HAUNT YOUR BEDROOM FOREVER”, Warren Ellis
“Keep your mind open. The meaning of things lies in how people perceive them. The same thing could mean different meanings to the same people at different times.”, Roy T. Bennett
“The shell must break before the bird can fly.”, Alfred Lord Tennyson
“Christ is not valued at all, unless he is valued above all.”, Augustine
“that as long as we are being remembered, we remain alive.”, Carlos Ruiz Zafon
“Everything happens for a reason and, something better will come along for me!”, Selena Gomez
“Somewhere along the way we all go a bit mad. So burn, let go and dive into the horror, because maybe it’s the chaos which helps us find where we belong.”, robert m drake
“There is no such thing as a child who hates to read; there are only children who have not found the right book.”, Frank Serafini
“Argue not concerning God,…re-examine all that you have been told at church or school or in any book, dismiss whatever insults your soul…”, Walt Whitman
“A lot of people have gone further than they thought they could because someone else thought they could”, Zig Ziglar
“That is the hardest thing of all. It is much harder to judge yourself than to judge others. If you succeed in judging yourself, it's because you're truly a wise man.”, Antoine de Saint Exupéry
“We cannot have a world where everyone is a victim. "I'm this way because my father made me this way. I'm this way because my husband made me this way." Yes, we are indeed formed by traumas that happen to us. But then you must take charge, you must take over, you are responsible.”, Camille Paglia
“be it peace or happinesslet it enfold you”, Charles Bukowski
“Great spirits have always encountered opposition from mediocre minds. The mediocre mind is incapable of understanding the man who refuses to bow blindly to conventional prejudices and chooses instead to express his opinions courageously and honestly.”, Albert Einstein
“Don't let what you cannot do interfere with what you can do. ”, John R Wooden
“I don't look for love. Love looks for me." "Why?" "Because it needs me. Because I'm not afraid of it.”, C. JoyBell C.
“Of life's two chief prizes, beauty and truth, I found the first in a loving heart and the second in a laborer's hand.”, Khalil Gibran
“Life is fragile and temporary. The faces of today quickly become the faces of the past. Sorrow, pain, and anger... it all fades- except love. Love is forever and there after, even when we've fallen to our graves.”, Lee Argus
“I am not afraid... I was born to do this.”, Joan of Arc
“Talent is a gift, but character is a choice.”, John C. Maxwell
“Do more than belong: participate. Do more than care: help. Do more than believe: practice. Do more than be fair: be kind. Do more than forgive: forget. Do more than dream: work.”, William Arthur Ward
“If it can be destroyed by the truth, it deserves to be destroyed by the truth.”, Carl Sagan
“I am a strong believer in the tyranny, the dictatorship, the absolute authority of the writer.”, Philip Pullman
“Gratitude is a sign of maturity...Where there is appreciation: there is also courtesy and concern for the rights and property of others.”, Gordon B. Hinckley
“She had a wild, wandering soul but when she loved, she loved with chaos and that made all the difference.”, Ariana Dancu
“What the mind can conceive and believe, and the heart desire, you can achieve.”, Norman Vincent Peale
“We swallowed the chaos because we knew we didn't want to be ordinary.”, robert m drake
“I never did give them hell. I just told the truth, and they thought it was hell.”, Harry S. Truman
“I close my eyes  and I can see a better day.  I close my eyes  and pray”, Justin Bieber
“I wrote the song 'Down to Earth' a few years ago, and i was really excited to record it for My World album. It's a huge fan favourite. So many people feel where i'm coming from. It doesn't need any spectacular stage effects in the touring show; the best thing i can do is just sing it straight from my heart. I'm not afraid to show my emotions; if you love someone, you should tell them. If you think a girl is beautiful, you should say that. Usher says some songs work best when there's a sob in the singer's voice. You gotta let that deep feeling come through. And that's how i felt about this song. Sometimes the emotion of it is enough to bring tears to my eyes.”, Justin Bieber
“In the name of the best within you, do not sacrifice this world to those who are at its worst. In the name of the values that keep you alive, do not let your vision of people be distorted by the ugly, the cowardly, the mindless in those who have never achieved integrity. Do not lose your knowledge that our proper estate is an upright posture,an intransigent mind and a step that travels unlimited roads. Do not let your fire go out, spark by irreplaceable spark, in the hopeless swamps of the approximate, the not-quite, the not-yet, the not-at-all. Do not let the hero in your soul perish, in lonely frustration for the life you deserved, but have never been able to reach. Check your road and the nature of your battle. The world you desired can be won, it exists, it is real, it's yours.”, Ayn Rand
“I only hope that we never lose sight of one thing — that it was all started by a mouse.”, Walt Disney Company
“People will always have opinions about your decision because they're not courageous enough to take action on their opinion.”, Steve Maraboli
“The difference we wanna make is number one to let these kids know that they’re not alone, that they’re actually not that messed up and that they can do whatever they want; they can express themselves however they want, without being persecuted or called a faggot or some kind of racist thing. You know, really just to get people to get over their stuff so they can live.”, Gerard Way
“He who binds to himself a joyDoes the winged life destroy;But he who kisses the joy as it fliesLives in eternity's sun rise.”, William Blake
“As the smoke clears,I awaken,And untangle you from me.Would it make you feel betterTo watch me, while I bleed?All my windows still are broken,But I'm standing on my feet.”, Demi Lovato
“Sometimes small things can become very large, indeed.”, Rick Riordan
“Our opportunities to give of ourselves are indeed limitless, but they are also perishable. There are hearts to gladden. There are kind words to say. There are gifts to be given. There are deeds to be done. There are souls to be saved.As we remember that “when ye are in the service of your fellow beings ye are only in the service of your God,” (Mosiah 2:17) we will not find ourselves in the unenviable position of Jacob Marley’s ghost, who spoke to Ebenezer Scrooge in Charles Dickens’s immortal "Christmas Carol." Marley spoke sadly of opportunities lost. Said he: 'Not to know that any Christian spirit working kindly in its little sphere, whatever it may be, will find its mortal life too short for its vast means of usefulness. Not to know that no space of regret can make amends for one life’s opportunity misused! Yet such was I! Oh! such was I!'Marley added: 'Why did I walk through crowds of fellow-beings with my eyes turned down, and never raise them to that blessed Star which led the Wise Men to a poor abode? Were there no poor homes to which its light would have conducted me!'Fortunately, as we know, Ebenezer Scrooge changed his life for the better. I love his line, 'I am not the man I was.'Why is Dickens’ "Christmas Carol" so popular? Why is it ever new? I personally feel it is inspired of God. It brings out the best within human nature. It gives hope. It motivates change. We can turn from the paths which would lead us down and, with a song in our hearts, follow a star and walk toward the light. We can quicken our step, bolster our courage, and bask in the sunlight of truth. We can hear more clearly the laughter of little children. We can dry the tear of the weeping. We can comfort the dying by sharing the promise of eternal life. If we lift one weary hand which hangs down, if we bring peace to one struggling soul, if we give as did the Master, we can—by showing the way—become a guiding star for some lost mariner.”, Thomas S. Monson
“In order to write the book you want to write, in the end you have to become the person you need to become to write that book.”, Junot Diaz
“We are what we believe we are!”, C.S. Lewis
“Maybe we shouldn't be looking for love. Maybe we should be looking for a person. Because maybe you can find love in a person, but not have that person. So if you look for love, what you will find is love. But if you want to belong to someone, and you want someone to belong to you, you should look for a person.”, C. JoyBell C.
“Work is love made visible. And if you can't work with love, but only with distaste, it is better that you should leave your work and sit at the gate of the temple and take alms of the people who work with joy”, Khalil Gibran
“Freedom is...the right to write the wrong words.”, Patti Smith
“IN THE END… We only regret the chances we didn’t take, the relationships we were afraid to have,and the decisions we waited too long to make.”, Lewis Carroll
“You lose nothing when fighting for a cause ... In my mind the losers are those who don't have a cause they care about.”, Muhammad Ali
“Having an eye for beauty isn't the same thing as a weakness...except possibly when it comes to you.”, Suzanne Collins
“We have been called to heal wounds, to unite what has fallen apart, and to bring home those who have lost their way.”, St. Francis of Assisi
“The world is wide, and I will not waste my life in friction when it could be turned into momentum. ”, Frances Willard
“You can't do anything about the length of your life, but you can do something about its width and depth.”, H. L. Mencken
“You can't go home again”, Thomas Wolfe
“Can't stand all these poisonous creatures, all these snakes and insects and fish and things. Wretched things, biting everybody. And then people expect me to tell them what to do about it. I'll tell them what to do. Don't get bitten in the first place. (quoting Dr. Struan Sutherland)”, Douglas Adams
“Do not waste the precious moments of this, your present reality, seeking to unveil all of life's secrets. Those secrets are a secret for a reason. Grant your God the benefit of the doubt. Use your NOW moment for the Highest Purpose- the creation and the expression of WHO YOU REALLY ARE. Decide who you are- who you want to be-and then do everything in your power to be that.It is not nearly so important how well a message is received as how well it is sent. You cannot take responsibility for how well another accepts your truth; you can only ensure how well it is communicated. And by how well, I don't mean merely how clearly; I mean how lovingly, how compassionately, how sensitively, how courageously, and how completely.If you think your life is about DOINGNESS, you do not understand what you are about. Your soul doesn't care what you do for a living-and when your life is over, neither will you. Your soul cares only about what you're BEING while you're doing whatever you're doing. It is a state of BEINGNESS the soul is after, not a state of doingness.”, Neale Donald Walsch
“Best not to look back. Best to believe there will be happily ever afters all the way around - and so there may be; who is to say there will not be such endings? Not all boats which sail away into darkness never find the sun again, or the hand of another child; if life teaches anything at all, it teaches that there are so many happy endings that the man who believes there is no God needs his rationality called into serious question..”, Stephen King
“If they give you ruled paper, write the other way.”, Juan Ramón Jiménez
“Never apologize for burning too brightly or collapsing into yourself every night. That is how galaxies are made.”, Tyler Kent White
“when you don't create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create.”, Why The Lucky Stiff
“They alone live, who live for others.”, Swami Vivekananda
“Excelsior!”, Stan Lee
“I gave myself permission to care, because there are a lot of people in this world who are afraid of caring, who are afraid of showing they care because it’s uncool. It’s uncool to have passion. It’s so much easier to lose when you’ve shown everyone how much you don’t care if you win or lose. It’s much harder to lose when you show that you care, but you’ll never win unless you also stand to lose. I’ve said it before. Don’t be afraid of your passion, give it free reign, and be honest and work hard and it will all turn out just fine.”, Tom Hiddleston
“Status quo, you know, is Latin for 'the mess we're in'.”, Ronald Reagan
“God uses broken things. It takes broken soil to produce a crop, broken clouds to give rain, broken grain to give bread, broken bread to give strength. It is the broken alabaster box that gives forth perfume. It is Peter, weeping bitterly, who returns to greater power than ever.”, Vance Havner
“Don't chase people. Be yourself, do your own thing and work hard. The right people - the ones who really belong in your life - will come to your. And stay.”, Will Smith
“Spend the afternoon, you can't take it with you.”, Annie Dillard
“I believe that God is in me as the sun is in the colour and fragrance of a flower - the Light in my darkness, the Voice in my silence.”, Helen Keller
“Only when I fall do I get up again.”, Vincent van Gogh
“God has given us more than fourteen billion cells and connections in our brain. Why would God give us such a complex organ system unless he expects us to use it?”, Ben Carson
“What a wonderful life I’ve had! I only wish I’d realized it sooner.”, Colette
“Pressure makes diamonds”, George S. Patton Jr.
“Life is no brief candle to me. It is a sort of splendid torch which I have got a hold of for the moment, and I want to make it burn as brightly as possible before handing it on to future generations.”, George Bernard Shaw
“A graceful refusal is better than a lengthy promise.”, Hazrat Ali Ibn Abu-Talib A.S
“There is a road from the eye to the heart that does not go through the intellect.”, G.K. Chesterton
“We are at our most powerful the moment we no longer need to be powerful.”, Eric Micha'el Leventhal
“The universe is big. It's vast and complicated and ridiculous. And sometimes—very rarely—impossible things just happen and we call them miracles.”, Steven Moffat
“Tomorrow belongs to those who can hear it coming”, David Bowie
“We are the cosmos made conscious and life is the means by which the universe understands itself.”, Brian Cox
“Beauty is not who you are on the outside, it is the wisdom and time you gave away to save another struggling soul like you.”, Shannon L. Alder
“The greatest pleasure in life is doing what people say you cannot do.”, Walter Bagehot
“I am Me. In all the world, there is no one else exactly like me. Everything that comes out of me is authentically mine, because I alone chose it -- I own everything about me: my body, my feelings, my mouth, my voice, all my actions, whether they be to others or myself. I own my fantasies, my dreams, my hopes, my fears. I own my triumphs and successes, all my failures and mistakes. Because I own all of me, I can become intimately acquainted with me. By so doing, I can love me and be friendly with all my parts. I know there are aspects about myself that puzzle me, and other aspects that I do not know -- but as long as I am friendly and loving to myself, I can courageously and hopefully look for solutions to the puzzles and ways to find out more about me. However I look and sound, whatever I say and do, and whatever I think and feel at a given moment in time is authentically me. If later some parts of how I looked, sounded, thought, and felt turn out to be unfitting, I can discard that which is unfitting, keep the rest, and invent something new for that which I discarded. I can see, hear, feel, think, say, and do. I have the tools to survive, to be close to others, to be productive, and to make sense and order out of the world of people and things outside of me. I own me, and therefore, I can engineer me. I am me, and I am Okay.”, Virginia Satir
“Every person has a right to risk their own life for the preservation of it.”, Jean Jacques Rousseau
“Count your blessings. Once you realize how valuable you are and how much you have going for you, the smiles will return, the sun will break out, the music will play, and you will finally be able to move forward the life that God intended for you with grace, strength, courage, and confidence.”, Og Mandino
“Do not yearn to be popular; be exquisite. Do not desire to be famous; be loved. Do not take pride in being expected; be palpable, unmistakable.”, C. JoyBell C.
“Forgive me for being so ordinary while claiming to know so extraordinary a God.”, Jim Elliot
“We rich nations, for that is what we are, have an obligation not only to the poor nations, but to all the grandchildren of the world, rich and poor. We have not inherited this earth from our parents to do with it what we will. We have borrowed it from our children and we must be careful to use it in their interests as well as our own. Anyone who fails to recognise the basic validity of the proposition put in different ways by increasing numbers of writers, from Malthus to The Club of Rome, is either ignorant, a fool, or evil.”, Moss Cass
“If you are still breathing maybe it is not such a bad day after all...”, Darren E. Laws
“How are you coming with your home library? Do you need some good ammunition on why it's so important to read? The last time I checked the statistics...I think they indicated that only four percent of the adults in this country have bought a book within the past year. That's dangerous. It's extremely important that we keep ourselves in the top five or six percent. 	In one of the Monthly Letters from the Royal Bank of Canada it was pointed out that reading good books is not something to be indulged in as a luxury. It is a necessity for anyone who intends to give his life and work a touch of quality. The most real wealth is not what we put into our piggy banks but what we develop in our heads. Books instruct us without anger, threats and harsh discipline. They do not sneer at our ignorance or grumble at our mistakes. They ask only that we spend some time in the company of greatness so that we may absorb some of its attributes.You do not read a book for the book's sake, but for your own.You may read because in your high-pressure life, studded with problems and emergencies, you need periods of relief and yet recognize that peace of mind does not mean numbness of mind.You may read because you never had an opportunity to go to college, and books give you a chance to get something you missed. You may read because your job is routine, and books give you a feeling of depth in life.You may read because you did go to college.You may read because you see social, economic and philosophical problems which need solution, and you believe that the best thinking of all past ages may be useful in your age, too.You may read because you are tired of the shallowness of contemporary life, bored by the current conversational commonplaces, and wearied of shop talk and gossip about people.Whatever your dominant personal reason, you will find that reading gives knowledge, creative power, satisfaction and relaxation. It cultivates your mind by calling its faculties into exercise.Books are a source of pleasure - the purest and the most lasting. They enhance your sensation of the interestingness of life. Reading them is not a violent pleasure like the gross enjoyment of an uncultivated mind, but a subtle delight.Reading dispels prejudices which hem our minds within narrow spaces. One of the things that will surprise you as you read good books from all over the world and from all times of man is that human nature is much the same today as it has been ever since writing began to tell us about it.Some people act as if it were demeaning to their manhood to wish to be well-read but you can no more be a healthy person mentally without reading substantial books than you can be a vigorous person physically without eating solid food. Books should be chosen, not for their freedom from evil, but for their possession of good. Dr. Johnson said: "Whilst you stand deliberating which book your son shall read first, another boy has read both.”, Earl Nightingale
“The downfall of the attempts of governments and leaders to unite mankind is found in this- in the wrong message that we should see everyone as the same. This is the root of the failure of harmony. Because the truth is, we should not all see everyone as the same! We are not the same! We are made of different colours and we have different cultures. We are all different! But the key to this door is to look at these differences, respect these differences, learn from and about these differences, and grow in and with these differences. We are all different. We are not the same. But that's beautiful. And that's okay.In the quest for unity and peace, we cannot blind ourselves and expect to be all the same. Because in this, we all have an underlying belief that everyone should be the same as us at some point. We are not on a journey to become the same or to be the same. But we are on a journey to see that in all of our differences, that is what makes us beautiful as a human race, and if we are ever to grow, we ought to learn and always learn some more.”, C. JoyBell C.
“Woman is a delicate creature with strong emotions who has been created by the Almighty God to shoulder responsibility for educating society and moving toward perfection. God created woman as symbol of His own beauty and to give solace to her partner and her family.”, Ali Ibn Abi Talib A.S
“To accomplish great things, we must dream as well as act.”, Anatole France
“All young people, regardless of sexual orientation or identity, deserve a safe and supportive environment in which to achieve their full potential.”, Harvey Milk
“Madness and chaos are self-destructing but over thinking is the suicide.”, robert m drake
“They say that every snowflake is different. If that were true, how could the world go on? How could we ever get up off our knees? How could we ever recover from the wonder of it?”, Jeanette Winterson
“To be kind, honest and have positive thoughts; to forgive those who harm us and treat everyone as a friend; to help those who are suffering and never to consider ourselves superior to anyone else: even if this advice seems rather simplistic, make the effort of seeing whether by following it you can find greater happiness.”, Dalai Lama XIV
“There is only one day left, always starting over: It is given to us at dawn and taken away from us at dusk.”, Jean-Paul Sartre
“Small is the number of them that see with their own eyes and feel with their own hearts.”, Albert Einstein
“The Man who says he can, and the man who says he can not.. Are both correct”, Confucius
“If you think your boss is stupid, remember: you wouldn’t have a job if he was any smarter.”, John Gottman (
“Grace is what picks me up and lifts my wings high above and I fly! Grace always conquers! Be graceful in everything; in anger, in sadness, in joy, in kindness, in unkindness, retain grace with you!”, C. JoyBell C.
“A good plan violently executed now is better than a perfect plan executed at some indefinite time in the future.”, George S. Patton Jr.
“You are doing the best you can, and that best results in good to yourself and to others. Do not nag yourself with a sense of failure. Get on your knees and ask for the blessings of the Lord;then stand on your feet and do what you are asked to do.”, Gordon B. Hinckley
“She is delightfully chaotic; a beautiful mess. Loving her is a splendid adventure.”, Steve Maraboli
“Books fall open, you fall in”, David McCord
“A rose can never be a sunflower, and a sunflower can never be a rose.All flowers are beautiful in their own way, and that’s like women too. I want to encourage women to embrace their own uniqueness.”, Miranda Kerr
“He who jumps into the void owes no explanation to those who stand and watch.”, Jean-Luc Godard
“Although I am a typical loner in my daily life, my awareness of belonging to the invisible community of those who strive for truth, beauty, and justice has prevented me from feelings of isolation.”, Albert Einstein
“Despite my ghoulish reputation, I really have the heart of a small boy. I keep it in a jar on my desk.”, Robert Bloch
“To have regret is to be disappointed with yourself and your choices. Those who are wise, see their life like stepping stones across a great river. Everyone misses a stone from time to time. No one can cross the river without getting wet. Success is measured by your arrival on the other side, not on how muddy your shoes are. Regrets are only felt by those who do not understand life’s purpose. They become so disillusioned that they stand still in the river and do not take the next leap.”, Colleen Houck
“We join spokes together in a wheel, but it is the center hole that makes the wagon move.We shape clay into a pot, but it is the emptiness insidethat holds whatever we want.We hammer wood for a house, but it is the inner spacethat makes it livable.We work with being, but non-being is what we use.”, Lao Tzu
“Hard work beats talent when talent fails to work hard.”, Kevin Durant
“What the soul hardly realizes is that, unbeliever or not, his loneliness is really a homesickness for God.”, Hubert Van Zeller
“Happiness comes when your work and words are of benefit to others.”, Buddha
“There is force in the universe, which, if we permit it, will flow through us and produce miraculous results.”, Mahatma Gandhi
“Read. Read anything. Read the things they say are good for you, and the things they claim are junk. You'll find what you need to find. Just read.”, Neil Gaiman
“You are a human with one life and its up to you to make it the best life you can.”, Dan Howell
“We are constantly invited to be what we are.”, Henry David Thoreau
“May the fleas of a thousand camels invade the crotch of the person that ruins your day. And may their arms be to short too scratch”, Keisha Keenleyside
“Make your interactions with people transformational, not just transactional.”, Patti Smith
“You will have to make up for the smallness of your size by your courage and selfless devotion to duty, for it is not life that matters, but the courage, fortitude and determination you bring to it.”, Muhammad Ali Jinnah
“Leaders are limited by their vision rather than by their abilities.”, Roy T. Bennett
“To exist in this vast universe for a speck of time is the great gift of life. Our tiny sliver of time is our gift of life. It is our only life. The universe will go on, indifferent to our brief existence, but while we are here we touch not just part of that vastness, but also the lives around us. Life is the gift each of us has been given. Each life is our own and no one else's. It is precious beyond all counting. It is the greatest value we can have. Cherish it for what it truly is..... Your life is yours alone. Rise up and live it.”, Terry Goodkind
“It's okay to be a loser, it just depends on how good you are at being one.”, Billie Joe Armstrong
“The purpose of life is not to be happy—but to matter, to be productive, to be useful, to have it make some difference that you lived at all.”, Leo Rosten
“Life is ours to be spent, not tobe saved.”, D.H. Lawrence
“Your world is a living expression of how you are using and have used your mind.”, Earl Nightingale
“Most people die with their music still locked up inside them.”, Benjamin Disraeli
“Everyone is lonely, we have to remember that life is to be lived one day at a time. You cannot worry about the past or future. Happiness is in the now.”, Claudia Gray
“Today is the oldest you've ever been, and the youngest you'll ever be again.”, Eleanor Roosevelt
“Don't bother just to be better than your contemporaries or predecessors. Try to be better than yourself.”, William Faulkner
“It had never occurred to me that our lives, which had been so closely interwoven, could unravel with such speed.”, Kazuo Ishiguro
“Fear not the path of Truth for the lack of People walking on it.”, Robert F. Kennedy
“Life is 10 percent what happens to you and ninety percent how you respond to it.”, Lou Holtz
“Dancing in all its forms cannot be excluded from the curriculum of all noble education; dancing with the feet, with ideas, with words, and, need I add that one must also be able to dance with the pen?”, Friedrich Nietzsche
“Life has no limitations, except the ones you make.”, Les Brown
“The greatest blessing granted to mankind come by way of madness, which is a divine gift.”, Socrates
“You must understand: they fear you. There is nothing scarier in their minds than a girl who knows the power of her flames.”, Nikita Gill
“If you care about someone enough, you’ll always be there for them no matter what.”, Roy T. Bennett
“Libraries store the energy that fuels the imagination. They open up windows to the world and inspire us to explore and achieve, and contribute to improving our quality of life. Libraries change lives for the better.”, Sidney Sheldon
“We have to pray with our eyes on God, not on the difficulties.”, Oswald Chambers
“I am fallen, flawed and imperfect. Yet drenched in the grace and mercy that is found in Jesus Christ, there is strength”, Adam Young
“Books. They are lined up on shelves or stacked on a table. There they are wrapped up in their jackets, lines of neat print on nicely bound pages. They look like such orderly, static things. Then you, the reader come along. You open the book jacket, and it can be like opening the gates to an unknown city, or opening the lid of a treasure chest. You read the first word and you're off on a journey of exploration and discovery.”, David Almond
“Scars show us where we have been, they do not dictate where we are going.”, David Rossi
“The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.”, Amelia Earhart
“Difficulties increase the nearer we get to the goal.”, Johann Wolfgang von Goethe
“All I have is all I need and all I need is all I have in this moment.”, Byron Katie
“You can never cross the ocean until you have the courage to lose sight of the shore”, André Gide
“I attribute my success to this:—I never gave or took an excuse.”, Florence Nightingale
“If freedom is short of weapons, we must compensate with willpower.”, Adolf Hitler
“The question is very understandable, but no one has found a satisfactory answer to it so far. Yes, why do they make still more gigantic planes, still heavier bombs and, at the same time, prefabricated houses for reconstruction? Why should millions be spent daily on the war and yet there's not a penny available for medical services, artists, or for poor people?Why do some people have to starve, while there are surpluses rotting in other parts of the world? Oh, why are people so crazy?”, Anne Frank
“You can't change the wind but you can set your sails.”, Billie Joe Armstrong
“The doubters said, "Man can not fly," The doers said, "Maybe, but we'll try," And finally soared In the morning glow While non-believers Watched from below.”, Bruce Lee
“Kung matatakot kang harapin ang totoo at sabihin ang talagang nararamdaman mo dahil baka masaktan ka, isa lang ibig sabihin noon: ipinagkait mo na sa sarili mo ang pagiging masaya at kinarir mo ang magpakatanga.”, bob ong
“What I’ve realized is that life doesn’t count for much unless you’re willing to do your small part to leave our children — all of our children — a better world. Any fool can have a child. That doesn’t make you a father. It’s the courage to raise a child that makes you a father.”, Barack Obama
“If I am truly to become an autonomous woman, then I must take over that role of being my own guardian...I not only have to become my own husband, but I need to be my own father, too.”, Elizabeth Gilbert
“Why am I compelled to write?... Because the world I create in the writing compensates for what the real world does not give me. By writing I put order in the world, give it a handle so I can grasp it. I write because life does not appease my appetites and anger... To become more intimate with myself and you. To discover myself, to preserve myself, to make myself, to achieve self-autonomy. To dispell the myths that I am a mad prophet or a poor suffering soul. To convince myself that I am worthy and that what I have to say is not a pile of shit... Finally I write because I'm scared of writing, but I'm more scared of not writing.”, Gloria Anzaldúa
“It is one of the beautiful compensations of life that no man can sincerely try to help another without helping himself.”, Ralph Waldo Emerson
“Though we tremble before uncertain futuresmay we meet illness, death and adversity with strengthmay we dance in the face of our fears.”, Gloria Anzaldúa
“Courtesy costs nothing, but buys everything.”, Hazrat Ali ibn Abu-Talib A.S
“If you hear how wonderful you are often enough, you begin to believe it, no matter how you try to resist it.”, Ben Carson
“Do your work, then step back. The only path to serenity.”, Lao Tzu
“Loneliness and the feeling of being unwanted is the most terrible poverty.”, Mother Teresa
“If you think you are beaten, you areIf you think you dare not, you don't,If you like to win, but you think you can'tIt is almost certain you won't.If you think you'll lose, you're lostFor out of the world we find,Success begins with a fellow's willIt's all in the state of mind.If you think you are outclassed, you areYou've got to think high to rise,You've got to be sure of yourself beforeYou can ever win a prize.Life's battles don't always goTo the stronger or faster man,But soon or late the man who winsIs the man WHO THINKS HE CAN!”, Walter D. Wintle
“There is no such thing as a great talent without great willpower.”, Honoré de Balzac
“Don't feel stupid if you don't like what everyone else pretends to love.”, Emma Watson
“Life is suffering Love is the desire to see unnecessary suffering amelioratedTruth is the handmaiden of loveDialogue is the pathway to truth Humility is recognition of personal insufficiency and the willingness to learn To learn is to die voluntarily and be born again, in great ways and smallSo speech must be untrammeled So that dialogue can take placeSo that we can all humbly learn So that truth can serve loveSo that suffering can be amelioratedSo that we can all stumble forward to the Kingdom of God”, Jordan B. Peterson
“People live their lives bound by what they accept as correct and true. That’s how they define Reality. But what does it mean to be “correct” or “true”? Merely vague concepts… Their Reality may all be a mirage. Can we consider them to simply be living in their own world, shaped by their beliefs?”, Masashi Kishimoto
“Successful people have libraries. The rest have big screen TVs”, Jim Rohn
“I don’t want anyone to hold back who they are. It’s not okay… it’s not a good thing”, Connor Franta
“My life is very monotonous," the fox said. "I hunt chickens: men hunt me. All the chickens are just alike, and all the men are just alike. And, in consequence, I am a little bored. But if you tame me, it will be as if the sun came to shine on my life. I shall know the sound of a step that will be different from all the others. Other steps send me hurrying back underneath the ground. Yours will call me, like music, out of my burrow. And then look: you see the grain fields down yonder? [...] The wheat fields have nothing to say to me. And that is sad. But you have hair that is the color of gold. Think how wonderful that will be when you have tamed me! The grain, which is also golden, will bring me back to the thought of you. And I shall love to listen to the wheat in the wind...”, Antoine St
“Nobody is exempt from the trials of life, but everyone can always find something positive in everything even in the worst of times.”, Roy T. Bennett
“Storms make trees take deeper roots.”, Dolly Parton
“Vote for the man who promises least; he'll be the least disappointing.”, Bernard Baruch
“Feel your emotions,Live true your passions,Keep still your mind.”, Geoffrey M. Gluckman
“Love me or hate me, both are in my favour. If you love me, I'll always be in your heart... If you hate me, I'll always be in your mind.”, William Shakespeare
“Realize that true happiness lies within you. Waste no time and effort searching for peace and contentment and joy in the world outside. Remember that there is no happiness in having or in getting, but only in giving. Reach out. Share. Smile. Hug. Happiness is a perfume you cannot pour on others without getting a few drops on yourself.”, Og Mandino
“When I try, I fail. When I trust, He succeeds.”, Corrie ten Boom
“You can fail at what you don't want, so you might as well take a chance on doing what you love.”, Jim Carrey
“Were knowledge all, what were our needTo thrill and faint and sweetly bleed?”, Christopher Brennan
“Do not fear the thorns in your path, for they draw only corrupt blood.”, Kahlil Gibran
“O love, O fire! once he drewWith one long kiss my whole soul throughMy lips, as sunlight drinketh dew.”, Alfred Lord Tennyson
“Don't be afraid of the shadows, that only means there's a light nearby.”, Evanescence
“Life is full of beauty. Notice it. Notice the bumble bee, the small child, and the smiling faces. Smell the rain, and feel the wind. Live your life to the fullest potential, and fight for your dreams.”, Ashley  Smith
“Spirituality is not to be learned by flight from the world, or by running away from things, or by turning solitary and going apart from the world. Rather, we must learn an inner solitude wherever or with whomsoever we may be. We must learn to penetrate things and find God there.”, Meister Eckhart
“Four things to learn in life: To think clearly without hurry or confusion; To love everybody sincerely; To act in everything with the highest motives; To trust God unhesitatingly.”, Helen Keller
“Dance like you're stamping on a human face forever, love like you've been in a serious car crash that minced the front of your brain, stab like no one can arrest you, and live like there's no such thing as God.”, Warren Ellis
“She was broken, I think it’s because she loved too much and she was always blind to the fact that love too is sometimes broken.”, robert m drake
“Love cures people, both the ones who give it and the ones who receive it.”, Karl Menninger
“It's been said that love finds you when you're ready.”, James Patterson; Maxine Paetro
“How strange is man that when he is afraid of something he runs away from it, but when he is afraid of Allah, he gets closer to Him.”, Hazrat Ali Ibn Abu-Talib A.S
“To be deeply loved, means a willingness to cut yourself wide open, exposing your vulnerabilities... hopes, hurts, fears and flaws. Hiding behind the highlight reel of who you are, is the real you and that person is just as worthy of love. There is nothing more terrifying or fulfilling, than complete love, it's worth the risk... reach for it.”, Jaeda DeWalt
“It is books that are a key to the wide world; if you can't do anything else, read all that you can.”, Jane Hamilton
“A smooth sea never made a skilled sailor.”, Franklin D. Roosevelt
“If I look at the mass I will never act.”, Mother Teresa
“Man is born broken. He lives by mending. The grace of God is glue.”, Eugene O'Neill
“When I pictured myself, it was always like just an outline in a colouring book, with the inside not yet completed.”, Sarah Dessen
“Never follow the crowd.”, Bernard Baruch
“Each man should frame life so that at some future hour fact and his dreaming meet.”, Victor Hugo
“Everytime I plant a seed,he say kill it before it grow, he say kill it before they grow.”, Bob Marley
“One of the best ways to influence people is to make those around you feel important.”, Roy T. Bennett
“I cannot trust a man to control others who cannot control himself.”, Robert E. Lee
“There isa time to liveand a time to diebut never to reject the moment.”, Lao Tzu
“We spend money that we do not have, on things we do not need, to impress people who do not care.”, Will Smith
“it takes as much courage to have tried and failed as it does to have tried and succeded.”, Anne Morrow Lindbergh
“Something amazing happens when you're in love and don't give a damn about what day it is anymore.”, Chad Sugg
“If you don’t have the time to do something right, where are you going to find the time to fix it?”, Stephen King
“And the fox said to the little prince: men have forgotten this truth, but you must not forget it. You become responsible, forever, for what you have tamed.”, Antoine de Saint-Exupery
“We're called to be faithful, to take those first difficult steps--and to leave the results up to God.”, Alex  Harris
“Man jadda wajadaSiapa yang bersungguh - sungguh, akan berhasil”, Ahmad Fuadi
“What she had long believed was not true, and now the world was wide open to discover what was.It is like all my life I thought the sky was green.”, Shannon Hale
“It occurred to me by intuition, and music was the driving force behind that intuition. My discovery was the result of musical perception.”, Albert Einstein
“I don't regret the painful times; I bare my scars as if they were medals.”, Paolo Coelho
“Team work makes the dream work”, Rap Monster
“Better to shun the bait than struggle in the snare.”, William Blake
“You have every right to a beautiful life.”, Selena Gomez
“Quiet people have the loudest minds.”, Stephen King
“People are always telling me that i'm not like other girls...that i dont dress like other girls...that i dont act like other girls. But i'm my OWN person...i go to the beat of my own drum.”, Miley Cyrus
“In the end, everything is a gag.”, Charlie Chaplin
“I can't understand why people are frightened of new ideas. I'm frightened of the old ones.”, John Cage
“So what? You're another person, so of course you look different. What do you need to be ashamed for?”, Yana Toboso
“When something is important enough, you do it even if the odds are not in your favour.”, Elon Musk
“Appreciate the moment of a first kiss; it may be the last time you own your heart.”, robert m drake
“Society will always be too fragile to accept us for all that makes us beautiful.”, robert m drake
“The More we value things, the less we value ourselves”, Bruce Lee
“It is foolish to tear one’s hair in grief, as though sorrow would be made less by baldness.”, Marcus Tullius Cicero
“No matter who we are, no matter what our circumstances, our feelings and emotions are universal. And music has always been a great way to make people aware of that connection. It can help you open up a part of yourself and express feelings you didn't know you were feeling. It's risky to let that happen. But it's a risk you have to take-because only then will you find you're not alone.”, Josh Groban
“God is God. He knows what he is doing. When you can’t trace his hand, trust his heart.”, Max Lucado (Grace for the Moment)
“Love feels no burden, thinks nothing of its trouble, attempts what is above its strength, pleads no excuse for impossibility, for it thinks all things are lawful for itself and all things are possible”, Thomas A. Kempis
“Strength is Life, Weakness is Death.Expansion is Life, Contraction is Death.Love is Life, Hatred is Death.”, Swami Vivekananda
“A thing worth having is a thing worth cheating for.”, W.C. Fields
“Happiness is the only thing worth fighting for in life.”, Lilly Singh
“To do something that you feel in your heart that's great, you need to make a lot of mistakes. Anything that's successful is a series of mistakes.”, Billie Joe Armstrong
“Never let anybody guess that you have a mind of your own. Above all be pure”, Virginia Woolf
“Happiness depends more on the inward disposition of mind than on outward circumstances.”, Benjamin Franklin
“One of the lessons that I grew up with was to always stay true to yourself and never let what somebody else says distract you from your goals. And so when I hear about negative and false attacks, I really don't invest any energy in them, because I know who I am.”, Michelle Obama
“Fear defeats more people than any other one thing in the world.”, Ralph Waldo Emerson
“Me plus you. (Imma tell you one time) Me plus you. (Imma tell you one time)Me plus you. (Imma tell you one time)One time. When I met ya girl my heart when knock (knock knock) Now them butterflies in my stomach won't stop (stop stop) Even love is a struggle and it's all we got. So we gun keep keep climbing to the mountain top. 'Cause your world, is my world, and my breath is your breath, and my heart is yours...”, Justin Bieber
“she lived with hurricane eyes and fell in love with the way the waves collapsed against her cheeks.”, Christopher Poindexter
“A successful marriage requires falling in love many times -- always with the same person.”, Mignon McLaughlin
“I can tell you I love you as many times as you can stand to hear it, but all it does is remind us that love is not enough. Not even close.”, Mark Andrus
“It is this belief in a power larger than myself and other than myself which allows me to venture into the unknown and even the unknowable.”, Maya Angelou
“Philosophy of science is about as useful to scientists as ornithology is to birds.”, Richard Feynman
“Tuhan kan nggak mungkin langsung sedekah ke orang-orang, ya kalianlah sedekah duit kalau punya duit, sedekah ilmu, sedekah senyum.Masa sih kalau sudah gitu Tuhan gak bales cintamu? Tapi gak mungkin dia belai-belai langsung rambutmu, sentuh bibirmu.Maka Tuhan ciptakan “wakil”nya, yaitu pacarmu. Maka doalah, “Tuhan, semoga pacarku ini betul-betul orang yang kau pilihkan untukku.”, Sujiwo Tejo
“We don’t truly appreciate what we have until it’s gone… We don’t really appreciate something until we have experienced some events; we don't really appreciate our parents until we ourselves have become parents. Be grateful for what you have now, and nothing should be taken for granted.”, Roy T. Bennett
“A revolution is coming – a revolution which will be peaceful if we are wise enough; compassionate if we care enough; successful if we are fortunate enough – but a revolution which is coming whether we will it or not. We can affect its character; we cannot alter its inevitability.[Report to the United States Senate on his trip to Latin America and the Alliance for Progress, May 9-10 1966]”, Robert F. Kennedy
“For too many centuries women have been being muses to artists. I wanted to be the muse, I wanted to be the wife of the artist, but I was really trying to avoid the final issue — that I had to do the job myself.”, Anaïs Nin
“Evil exists in us all, Torak. Some fight it. Some feed it. That's how it's always been.”, Michelle Paver
“Hard times build determination and inner strength. Through them we can also come to appreciate the uselessness of anger. Instead of getting angry nurture a deep caring and respect for troublemakers because by creating such trying circumstances they provide us with invaluable opportunities to practice tolerance and patience.”, the Dalai Lama
“Self-esteem comes from being able to define the world in your own terms and refusing to abide by the judgments of others.”, Oprah Winfrey
“What would you attempt to do if you knew you could not fail?”, Robert Schuller
“I am an optimist... I choose to be. There is a lot of darkness in our world, there is a lot of pain and you can choose to see that or you can choose to see the joy. If you try to respond positively to the world, you will spend your time better.”, Tom Hiddleston
“The atheist staring from his attic window is often nearer to God than the believer caught up in his own false image of God.”, Martin Buber
“The dream was always running ahead of me. To catch up, to live for a moment in unison, was the miracle.”, Anaïs Nin
“Truth builds trust.”, Marilyn Suttle
“Can a dream be wrong? Aren't dreams God's way of telling you things?”, Ellen Hopkins
“Here lies one whose name was writ on water.”, John Keats
“The cause of most of man's unhappiness is sacrificing what he wants most for what he wants now.”, Gordon B. Hinckley
“Living never wore one so much as the effort not to live.”, Anais Nin
“The truth is I didn’t need therapy; I just needed to feel loved and know that someone out there craved my attention.”, robert m drake
“Life doesn't just happen to you; youreceive everything in your life based on what you've given.”, Rhonda Byrne
“Tell all the Truth but tell it slant--Success in Circuit liesToo bright for our infirm DelightThe Truth's superb surpriseAs Lightning to the Children easedWith explanation kindThe Truth must dazzle graduallyOr every man be blind--”, Emily Dickinson
“Biarkan orang lain menjalani kehidupan yang kecil, tetapi kamu jangan!Biarkan orang lain memperdebatkan soal-soal kecil, tetapi kamu jangan!Biarkan orang lain menangisik kepedihan-kepedihan kecil, tetapi kamu jangan!Biarkan orang lain menyerahkan masa depan mereka kepada orang lain, tetapi kamu jangan!”, Habiburrahman El Shirazy
“It is our failure to become our perceived ideal that ultimately defines us and makes us unique. It's not easy, but if you accept your misfortune and handle it right your perceived failure can become a catalyst for profound re-invention.”, Conan O'Brien
“There is no illusion greater than fear.”, Lao Tzu, Tao Teh Ching
“If you take responsibility for yourself you will develop a hunger to accomplish your dreams.”, Les Brown
“I admire those who do good and expect nothing in return.”, Roy T. Bennett
“Faster, Faster, until the thrill of speed overcomes the fear of death.”, Hunter S. Thompson
“It used to be about trying to do something. Now it's about trying to be someone.”, Margaret Thatcher
“The word 'listen' contains the same letters as the word 'silent'.”, Alfred Brendel
“You will write if you will write without thinking of the result in terms of a result, but think of the writing in terms of discovery, which is to say that creation must take place between the pen and the paper, not before in a thought or afterwards in a recasting... It will come if it is there and if you will let it come.”, Gertrude Stein
“In this country we have no place for hyphenated Americans.”, Theodore Roosevelt
“I shut my eyes in order to see.”, Paul Gauguin
“If I lived a million lives, I would've felt a million feelings and I still would've fallen a million times for you.”, robert m drake
“Love was that way. You could not render it in black or white. It always came down to the strange, blended shades of grey.”, Jodi Picoult
“We had the experience but missed the meaning. And approach to the meaning restores the experience in a different form.”, T.S. Eliot
“It’s funny, for all it took was a broken heart and that alone was enough, enough for her to do everything she ever dreamed of.”, robert m drake
“There is nothing more important than your eternal salvation.”, Kirk Cameron
“Books have a way of finding their way into our lives, usually, right when we need them the most.”, Richard Denney
“I had to learn to live without you and I couldn't make sense of it, because I left so much of me inside of you.”, robert m drake
“Seven years, Dawn. Working with the Slayer. Seeing my friends get more and more powerful... a witch. A demon. Hell, I could fit Oz in my shaving kit, but come a full moon, he had a wolfy mojo not to be messed with. Powerful, all of them. And I'm the guy who fixes the windows. They'll never know how tough it is, Dawnie, to be the one who isn't Chosen, to live so near the spotlight and never step in it. But I know. I see more than anybody realizes because nobody's watching me. I saw you last night, and I see you working here today. You're not special; you're extraordinary.”, Joss Whedon
“Adversity is a natural part of being human. It is the height of arrogance to prescribe a moral code or health regime or spiritual practice as an amulet to keep things from falling apart. Things do fall apart. It is in their nature to do so. When we try to protect ourselves from the inevitability of change, we are not listening to the soul. We are listening to our fear of life and death, our lack of faith, our smaller ego's will to prevail. To listen to your soul is to stop fighting with life--to stop fighting when things fall apart; when they don't go our away, when we get sick, when we are betrayed or mistreated or misunderstood. To listen to the soul is to slow down, to feel deeply, to see ourselves clearly, to surrender to discomfort and uncertainty and to wait.”, Elizabeth Lesser
“Most people fail in life not because they aim too high and miss, but because they aim too low and hit.”, Les Brown
“It is beautiful to discover our wings and learn how to fly; flight is a beautiful process. But then to rest on the wings of God as He flies: this is divine.”, C. JoyBell C.
“Let us labor for an inward stillness--An inward stillness and an inward healing.That perfect silence where the lips and heartAre still, and we no longer entertainOur own imperfect thoughts and vain opinions,But God alone speaks to us and we waitIn singleness of heart that we may knowHis will, and in the silence of our spirits,That we may do His will and do that only”, Henry Wadsworth Longfellow
“If you're really listening, if you're awake to the poignant beauty of the world, your heart breaks regularly. In fact, your heart is made to break; its purpose is to burst open again and again so that it can hold evermore wonders.”, Andrew Harvey
“When I hear music, I fear no danger. I am invulnerable. I see no foe. I am related to the earliest times, and to the latest.”, HENRY DAVID THOREAU
“One of the great liabilities of history is that all too many people fail to remain awake through great periods of social change. Every society has its protectors of status quo and its fraternities of the indifferent who are notorious for sleeping through revolutions. Today, our very survival depends on our ability to stay awake, to adjust to new ideas, to remain vigilant and to face the challenge of change.”, Martin Luther King Jr.
“I have already settled it for myself so flattery and criticism go down the same drain and I am quite free.”, Georgia O'Keefe
“There are no traffic jams on the extra mile.”, Zig Ziglar
“No man is free who is not master of himself.”, Epictetus
“Anything that you learn becomes your wealth, a wealth that cannot be taken away from you; whether you learn it in a building called school or in the school of life. To learn something new is a timeless pleasure and a valuable treasure. And not all things that you learn are taught to you, but many things that you learn you realize you have taught yourself.”, C. JoyBell C.
“Suddenly, everything was beautiful. The way she viewed the world was nothing more but a reflection of herself.”, robert m drake
“Dislike in yourself what you dislike in others.”, Hazrat Ali Ibn Abu-Talib A.S
“I was good and bad, but never wicked.”, Anne Rice
“The more you believed in yourself, the more you could trust yourself. The more you trust yourself, the less you compare yourself to others.”, Roy T. Bennett
“The more you talk about them, the more important they will feel. The more you listen to them, the more important you will make them feel.”, Roy T. Bennett
“No one lights a lamp in order to hide it behind the door: the purpose of light is to create more light, to open people's eyes, to reveal the marvels around.”, Paulo Coelho
“Don’t allow yourself to become disheartened when the thread doesn’t suit or seems unsightly to you. Wait and watch. Be patient and devoted. As the threads twist and turn, you will begin to understand, and you will see the pattern finally materialize in all its splendor.”, Colleen Houck
“When it rains it pours. Maybe the art of life is to convert tough times to great experiences: we can choose to hate the rain or dance in it.”, Joan Marques
“Plants are more courageous than almost all human beings: an orange tree would rather die than produce lemons, whereas instead of dying the average person would rather be someone they are not.”, Mokokoma Mokhonoana
“Real change is difficult at the beginning, but gorgeous at the end. Change begins the moment you get the courage and step outside your comfort zone; change begins at the end of your comfort zone.”, Roy T. Bennett
“In the mist of Difficulty lies Opportunity.”, Oprah Winfrey
“Never apologize for showing feeling. When you do so, you apologize for the truth.”, Benjamin Disraeli
“I am still determined to be cheerful and happy, in whatever situation I may be; for I have also learned from experience that the greater part of our happiness or misery depends upon our dispositions, and not upon our circumstances. a”, Martha Washington
“Be a true Heart, not a follower.”, Ed Sheeran
“Life consists of what man is thinking about all day.”, Ralph Waldo Emerson
“If your actions inspire others to dream more, learn more, do more and become more, you are a leader.”, John Quincy Adams
“Tough times don't last, tough people do, remember?”, Gregory Peck
“The major work of the world is not done by geniuses. It is done by ordinary people, with balance in their lives, who have learned to work in an extraordinary manner.”, Gordon B. Hinckley
“A wise man always has something to say, whereas a fool always needs to say something.”, Hazrat Ali Ibn Abu-Talib A.S
“Don't get set into one form, adapt it and build your own, and let it grow, be like water.”, Bruce Lee
“On Wednesday, when the sky is blue,and I have nothing else to do,I sometimes wonder if it's true That who is what and what is who." - Winnie-the-Pooh”, A.A. Milne
“The dictionary is the only place that success comes before work. work is the key to success, and hard work can help you accomplish anything.”, Vince Lombardi
“It does not matter how long you live, but how well you do it.”, Martin Luther King Jr.
“The summit of happiness is reached when a person is ready to be what he is.”, Desiderius Erasmus
“If your life is worth thinking about,it is worth writing about.”, Robin Sharma
“A child fish asks mother fish, 'Mother, why cannot we live on the Earth?' Mother fish replied, 'Dear… it is not the place for fish, it is the place for selfish”, Santosh Kalwar
“Beware of speaking too much, for it increases mistakes and engenders boredom.”, Hazrat Ali Ibn Abu-Talib A.S
“To be human is to be broken and broken is its own kind of beautiful.”, robert m drake
“Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose.”, Steve Jobs
“Blindness separates people from things;deafness separates people from people.”, Helen Keller
“Sanctify yourself and you will sanctify society.”, Francis Of Assisi
“when you're cool for twenty,you get paid for twenty-one.”, Miguel Pinero
“There's no reason to have a plan B because it distracts from plan A.”, Will Smith
“And the only way to do great work is to love what you do.... Don't settle”, Steve Jobs
“The most important thing is this: to be able at any moment to be free to choose a life that makes you happy.”, Roy T. Bennett
“If you can't do great things, do small things in a great way.”, Napoleon Hill
“A man can't soar too high, when he flies with his own wings.”, William Blake
“It doesn't matter who you are, or where you come from, or how much money you've got in your pocket. You have your own destiny and your own life ahead of you.”, Lady Gaga
“It is when we think we can act like God, that all respect is lost, and I think this is the downfall of peace. We lie if we say we do not see color and culture and difference. We fool ourselves and cheat ourselves when we say that all of us are the same. We should not want to be the same as others and we should not want others to be the same as us. Rather, we ought to glory and shine in all of our differences, flaunting them fabulously for all to see! It is never a conformity that we need! We need not to conform! What we need is to burst out into all these beautiful colors!”, C. JoyBell C.
“Faith is deliberate confidence in the character of God whose ways you may not understand at the time.”, Oswald Chambers
“Your need for acceptance can make you invisible in this world. Don't let anything stand in the way of the light that shines through this form. Risk being seen in all of your glory.”, Jim Carrey
“Always be like a water. Float in the times of pain or dance like waves along the wind which touches its surface.”, Santosh Kalwar
“You only get one life. Live it to the fullest. All your miseries will be forgiven when you will be dead.”, Santosh Kalwar
“Caminante, no hay puentes, se hace puentes al andar. (Voyager, there are no bridges, one builds them as one walks.) ”, Gloria Anzaldúa
“Faith is like radar that sees through the fog -- the reality of things at a distance that the human eye cannot see.”, Corrie Ten Boom
“errare humanum est, sed perseverare diabolicum: 'to err is human, but to persist (in the mistake) is diabolical.”, Lucius Annaeus Seneca
“He who conquers himself is the mightiest warrior.”, Confucius
“It’s never the value of water but thirst, it’s never the value of life but death and it’s never about the friendship but trust.”, Ali Ibn Abi Talib AS
“Travel light, live light, spread the light, be the light.”, Yogi Bhajan
“The most basic and powerful way to connect to another person is to listen. Just listen. Perhaps the most important thing we ever give each other is our attention…. A loving silence often has far more power to heal and to connect than the most well-intentioned words. ”, Rachel Naomi Remen
“We have all forgotten what we really are. All that we call common sense and rationality and practicality and positivism only means that for certain dead levels of our life we forget that we have forgotten. All that we call spirit and art and ecstasy only means that for one awful instant we remember that we forget.”, G.K. Chesterton
“If you want something you've never hadYou must be willing to do something you've never done.”, Thomas Jefferson
“You are not here merely to make a living. You are here in order to enable the world to live more amply, with greater vision, with a finer spirit of hope and achievement. You are here to enrich the world, and you impoverish yourself if you forget the errand.”, Woodrow Wilson
“To read is to empower,To empower is to write,To write is to influence,To influence is to change,To change is to live".”, Jane Evershed
“Finding the lesson behind every adversity will be the one important thing that helps get you through it.”, Roy T. Bennett
“Love me when I least deserve it, because that's when I really need it.”, Swedish Proverb
“You learn to write by writing, and by reading and thinking about how writers have created their characters and invented their stories. If you are not a reader, don't even think about being a writer.”, Jean M. Auel
“You have to rise above the squabbling and chaos, and keep believing. You have to always keep your goals in mind.” -Hera, goddess of marriage ”, Rick Riordan
“The reward of a thing well done is having done it.”, Ralph Waldo Emerson
“Adversity introduces a man to himself.”, Albert Einstein
“Sameron adion asoI shall sing a sweeter song tomorrow”, Theocritus
“She was broken from moment to moment, watching her world collide she felt lost inside herself. She fell apart for a passion that flamed beneath her. She waited and died a hundred times, it dripped from her pores. The moment she let go, she soared over the stillness like the star she was born to be.”, robert m drake
“The institutions of human society treat us as parts of a machine. They assign us ranks and place considerable pressure upon us to fulfill defined roles. We need something to help us restore our lost and distorted humanity. Each of us has feelings that have been suppressed and have built up inside. There is a voiceless cry resting in the depths of our souls, waiting for expression. Art gives the soul's feelings voice and form.”, Daisaku Ikeda
“The media only writes about the sinners and the scandals, he said, but that's normal, because 'a tree that falls makes more noise than a forest that grows.”, Pope Francis
“The important thing is not the object of love, but the emotion itself.”, Gore Vidal
“Remember that the happiest people are not those getting more, but those giving more.”, H. Jackson Brown Jr.
“You must learn to take a step back and visualize the whole piece. If you focus only on the thread given to you, you lose sight of what it can become. ”, Colleen Houck
“If through a broken heart God can bring His purposes to pass in the world, then thank Him for breaking your heart.”, Oswald Chambers
“Where you stumble and fall, there you will find gold.”, Joseph Campbell
“Silence is argument carried out by other means.”, Ernesto "Che" Guevara
“You cannot stay on the summit forever; you have to come down again. So why bother in the first place? Just this: What is above knows what is below, but what is below does not know what is above. One climbs, one sees. One descends, one sees no longer, but one has seen. There is an art of conducting oneself in the lower regions by the memory of what one saw higher up. When one can no longer see, one can at least still know.”, Rene Daumal
“There are people who have money and people who are rich.”, Coco Chanel
“Advice is like snow; the softer it falls, the longer it dwells upon, and the deeper it sinks into the mind.”, Samuel Taylor Coleridge
“Remember that things are not always as they appear to be… Curiosity creates possibilities and opportunities.”, Roy T. Bennett
“Take Care Of Your Tongue Like The Way You Take Care Of Gold & Silver.”, Ali Ibn Abi Talib A.S
“What an utter disgrace it would be to find something truly magic and spend any time at all pretending and trying to convince yourself it is all just an unbelievably orchestrated and beautifully choreographed illusion.”, Tyler Knott Gregson
“One must work and dare if one really wants to live.”, Vincent Van Gogh
“Child, you have to learn to see things in the right proportions. Learn to see great things great and small things small.”, Corrie Ten Boom
“Never let yourself be persuaded that any one Great Man, any one leader, is necessary to the salvation of America. When America consists of one leader and 158 million followers, it will no longer be America.”, Dwight D. Eisenhower
“The greatest revenge is massive success.”, Les Brown
“Don't try to fix me, I'm not broken...”, Evanescence
“I believe that everything that you do bad comes back to you. So everything that I do that's bad, I'm going to suffer from it. But in my mind, I believe what I'm doing is right. So I feel like I'm going to heaven”, Tupac Shakur
“I believe in the hands that work, in the brains that think, and in the hearts that love...I believe in sunshine, fresh air, friendship, calm sleep, beautiful thoughts.”, Elbert Hubbard
“You can feel the whole world and still feel lost in it. So many people are in pain-- no matter how smart or accomplished--they cry, they yearn, they hurt. But instead of looking down on things, they look up, which is where I should have been looking, too. Because when the world quiets to the sound of your own breathing, we all want the same things: comfort, love and a peaceful heart.”, Mitch Albom
“It's a beautiful day in this neighborhood,A beautiful day for a neighbor.Would you be mine?Could you be mine?...It's a neighborly day in this beauty wood,A neighborly day for a beauty.Would you be mine?Could you be mine?...I've always wanted to have a neighbor just like you.I've always wanted to live in a neighborhood with you.So, let's make the most of this beautiful day.Since we're together we might as well say:Would you be mine?Could you be mine?Won't you be my neighbor?Won't you please,Won't you please?Please won't you be my neighbor?”, Fred Rogers
“True beauty lies in purity of the heart.”, Mahatma Gandhi
“Me with nothing left to lose, plotting my big revenge in the spotlight. Give me violent revenge fantasies as a coping mechanism.”, Chuck Palahniuk
“It was never about the world being too big, it was more like she was too much for the world to handle.”, robert m drake
“Temptation is the feeling we get when encountered by an opportunity to do what we innately know we shouldn't.”, Steve Maraboli
“If you have not done things worthy of being written about, at least write things worthy of being read.”, Giacomo Casanova
“Rich People plan for three generationsPoor people plan for Saturday night”, Gloria Steinem
“Enjoy the limitless bliss consciousness here and now. The reality of you lies much beyond your sensory perceptions and boundaries.”, Amit Ray
“I never loved another person the way I loved myself.”, Mae West
“Don't forget your history nor your destiny”, Bob Marley
“The greatest challenge of the day is: how to bring about a revolution of the heart, a revolution which has to start with each one of us?”, Dorothy Day
“This is who the fuck I am.”, Lady Gaga
“What I stand for is what I stand on.”, Wendell Berry
“It’s never overreacting to ask for what you want and need.”, Amy Poehler
“It's a sad day when you find out that it's not accident or time or fortune, but just yourself that kept things from you.”, Lillian Hellman
“So that's my wish for you, and all of us, and my wish for myself. Make New Mistakes. Make glorious, amazing mistakes. Make mistakes nobody's ever made before. Don't freeze, don't stop, don't worry that it isn't good enough, or it isn't perfect, whatever it is: art, or love, or work or family or life.”, Neil Gaiman
“Sometimes it falls upon a generation to be great, you can be that generation”, Nelson Mandela
“The nourishment of body is food, while the nourishment of the soul is feeding others.”, Hazrat Ali Ibn Abu-Talib A.S
“Grace isn't a little prayer you chant before receiving a meal. It's a way to live.”, Jacqueline Winspear
“I was always looking outside myself for strength and confidence, but it comes from within. It is there all the time.”, Anna Freud
“The first step towards getting somewhere is to decide that you are not going to stay where you are.”, J.P. Morgan
“Baby you're a firework, c'mon show 'em what you're worth..." ~Firework”, Katy Perry
“When a man sees you are happy with him but you can be just as happy having nothing to do with him, that’s when he won’t want to leave your side. When you are happy, you are sexy.”, Sherry Argov
“There is no greater insight into the future than recognizing...when we save our children, we save ourselves”, Margaret Mead
“Your beliefs affect your choices. Your choices shape your actions. Your actions determine your results. The future you create depends upon the choices you make and the actions you take today.”, Roy T. Bennett
“Things will get easier, people's minds will change, and you should be alive to see it.”, Ellen DeGeneres
“If there is anything that links the human to the divine, it is the courage to stand by a principle when everybody else rejects it.”, Abraham Lincoln
“You can't shake hands with a clenched fist.”, Indira Gandhi
“Either you run the day or the day runs you..”, Jim Rohn
“It is better to live one day as a lion than 100 years as a sheep.”, Benito Mussolini
“That's one small step for a man, one giant leap for mankind”, Neil Armstrong
“You're not aloneTogether we standI'll be by your side, you know I'll take your handWhen it gets coldAnd it feels like the endThere's no place to goYou know I won't give in”, Avril Lavigne
“This world is your best teacher. There is a lesson in everything. There is a lesson in each experience. Learn it and become wise. Every failure is a stepping stone to success. Every difficulty or disappointment is a trial of your faith. Every unpleasant incident or temptation is a test of your inner strength. Therefore nil desperandum. March forward hero!”, Sivananda
“I firmly believe that any man's finest hour, the greatest fulfillment of all that he holds dear, is that moment when he has worked his heart out in a good cause and lies exhausted on the field of battle - victorious." ”, Vince Lombardi
“When we lose one we love, our bitterest tears are called forth by the memory of hours when we loved not enough.”, Maurice Maeterlinck
“I prefer you to make mistakes in kindness than work miracles in unkindness.”, Mother Teresa
“If the world is to be healed through human efforts, I am convinced it will be by ordinary people, people whose love for this life is even greater than their fear.”, Joanna R. Macy
“Arrogance on the part of the meritorious is even more offensive to us than the arrogance of those without merit: for merit itself is offensive.”, Friedrich Nietzsche
“The difference between me and other people is that they all walk around with onion skins wrapped around them. Pre-meditations, pretentions, the faces that they present to the world, the faces that they present to themselves.. onion skins that come in layer after layer. They're on the inside of all that. And I... I am the inside of the onion skin walking around. I am only me.”, C. JoyBell C.
“Make visible what, without you, might perhaps never have been seen.”, Robert Bresson
“L'homme est libre au moment qu'il veut l'être.”, Voltaire
“Give me strength, not to be better than my enemies, but to defeat my greatest enemy, the doubts within myself. Give me strength for a straight back and clear eyes, so when life fades, as the setting sun, my spirit may come to you without shame.”, P.C. Cast & Kristin Cast
“It's not whether you got knocked down; it's whether you get back up.”, Vince Lombardi
“The future doesn't belong to the light-hearted. It belongs to the brave.”, Ronald Regan
“When you have a great and difficult task, something perhaps almost impossible, if you only work a little at a time, every day a little, suddenly the work will finish itself.”, Isak Dinesen
“God, send me anywhere, only go with me. Lay any burden on me, only sustain me. And sever any tie in my heart except the tie that binds my heart to Yours.”, David Livingstone
“Be yourself. Don't worry about what other people are thinking of you, because they're probably feeling the same kind of scared, horrible feelings that everyone does.”, Phil Lester
“Sometimes you just have to jump out the window and grow wings on the way down.”, Ray Bradbury
“Rules for happiness: something to do, someone to love, something to hope for.”, Immanuel Kant
“Life is short. Kiss slowly, laugh insanely, love truly and forgive quickly”, Paulo Coelho
“Leaders live by choice, not by accident.”, Mark Gorman
“I'm not going to die, I'm going home like a shooting star.”, Sojourner Truth
“I AM THE MASTER OF MY FATE AND THE CAPTAIN OF MY DESTINY.”, Nelson Mandela
“Books didn’t make me wallow in darkness, darkness made me wallow in books.”, Jackson Pearce
“It has been my philosophy of life that difficulties vanish when faced boldly.”, Isaac Asimov
“Defeat is not the worst of failures. Not to have tried is the true failure.”, George E. Woodberry
“Stories are like genies...They can carry us into and though our sorrows. Sometimes they burn, sometimes they dance, sometimes they weep, sometimes they sing. Like genies, everyone has one. Like genies, sometimes we forget that we do.Our stories can set us free...When we set them free.”, Francesca Lia Block
“I belive I can fly, I believe I can touch the sky. ”, R. Kelly
“You get in life what you have the courage to ask for.”, Nancy D. Solomon
“Maybe I hope too much. Maybe I dream too much or maybe I love too much to just give up on you.”, robert m drake
“Light is more important than the lantern,The poem more important than the notebook”, Nizar Qabbani
“Perfection is not attainable, but if we chase perfection we can catch excellence”, Vince Lombardi
“We become what we want to be by consistently being what we want to become each day.”, Richard G. Scott
“In life, you need either inspiration or desperation.”, Anthony Robbins
“God will answer you prayers better than you think. Of course, one will not always get exactly what he has asked for....We all have sorrows and disappointments, but one must never forget that, if commended to God, they will issue in good....His own solution is far better than any we could conceive.”, Fanny J. Crosby
“Dedicate yourself to what gives your life true meaning and purpose; make a positive difference in someone's life.”, Roy T. Bennett
“Patience ensures victory.”, Hazrat Ali Ibn Abu-Talib A.S
“a dog is not considered a good dog because he is a good barker. a man is not considered a good man because he is a good talker.”, Buddha Siddhartha Guatama Shakyamuni
“Nalaman kong habang lumalaki ka, maraming beses kang madadapa. Bumangon ka man ulit o hindi, magpapatuloy ang buhay, iikot ang mundo, at mauubos ang oras.”, Bob Ong
“Everyones greatest fantasy is to walk away from the life (they think)you lead”, Pete Wentz
“Being defeated is often a temporary condition. Giving up is what makes it permanent.”, Marilyn vos Savant
“There is no rest for the person who has envy, and there is no love for the person who has bad manners.”, Hazrat Ali Ibn Abu-Talib A.S
“There are souls in this world who have the gift of finding joy everywhere, and leaving it behind them when they go.”, Frederick William Faber
“You can’t control what others think. The only thing you can control is yourself. Some people will look down on you for your choices in life, no matter what they are. You can’t do anything about that. The only thing you can do is decide how to live your own life. And to hell with everybody else”, Marie Sexton
“No lake so still but it has its wave.No circle so perfect but that it has its blur.I would change things for you if I could; As I can't you must take them as they are.”, Confucius
“Your daddy is standing in a swimming pool out a little bit from the edge. You are, let’s say, three years old and standing on the edge of the pool. Daddy holds out his arms to you and says, “Jump, I’ll catch you. I promise.” Now, how do you make your daddy look good at that moment? Answer: trust him and jump. Have faith in him and jump. That makes him look strong and wise and loving. But if you won’t jump, if you shake your head and run away from the edge, you make your daddy look bad. It looks like you are saying, “he can’t catch me” or “he won’t catch me” or “it’s not a good idea to do what he tells me to do.” And all three of those make your dad look bad.But you don’t want to make God look bad. So you trust him. Then you make him look good–which he really is. And that is what we mean when we say, “Faith glorifies God” or “Faith gives God glory.” It makes him look as good as he really is. So trusting God is really important.And the harder it seems for him to fulfill his promise, the better he looks when you trust him. Suppose that you are at the deep end of a pool by the diving board. You are four years old and can’t swim, and your daddy is at the other end of the pool. Suddenly a big, mean dog crawls under the fence and shows his teeth and growls at you and starts coming toward you to bite you. You crawl up on the diving board and walk toward the end to get away from him. The dog puts his front paws up on the diving board. Just then, your daddy sees what’s happening and calls out, “Johnny, jump in the water. I’ll get you.”Now, you have never jumped from one meter high and you can’t swim and your daddy is not underneath you and this water is way over your head. How do you make your daddy look good in that moment? You jump. And almost as soon as you hit the water, you feel his hands under your arms and he treads water holding you safely while someone chases the dog away. Then he takes you to the side of the pool.We give glory to God when we trust him to do what he has promised to do–especially when all human possibilities are exhausted. Faith glorifies God. That is why God planned for faith to be the way we are justified.”, John Piper
“Live out of your imagination instead of out of your memory.”, Les Brown
“Only those are fit to live who do not fear to die; and none are fit to die who have shrunk from the joy of life and the duty of life. Both life and death are parts of the same Great Adventure.”, Theodore Roosevelt
“Nobody made a greater mistake than he who did nothing because he could do only a little.”, Edmund Burke
“I'd rather die while I'm living than live while I'm dead. ”, Jimmy Buffett
“Only when we give joyfully, without hesitation or thought of gain, can we truly know what love means.”, Leo Buscaglia
“Now don't you understand man universal lawWhat you throw out comes back to you, starNever underestimate those who you scarCause karma, karma, karma comes back to you hard”, Lauryn Hill
“Buy a pup and your money will buyLove unflinching that cannot lie.”, Rudyard Kipling
“Read books. Care about things. Get excited. Try not to be too down on youself. Enjoy the ever present game of knowing.”, Hank Green
“Love is not a relationship, love is a state of being; it has nothing to do with anybody else. One is not "in love", one is love. And of course when one is love, one is in love – but that is an outcome, a by-product, that is not the source. The source is that one is love.”, Osho
“Secangkir kopi yang dengan tenang menunggu kau minum itu tidak pernah mengusut kenapa kau bisa membedakan aromanya dari asap yang setiap hari kau hirup ketika berangkat dan pulang kerja di kota yang semakin tidak bisa mengerti kenapa mesti ada secangkir kopi yang tersedia di atas meja setiap pagi”, Sapardi Djoko Damono
“We are the Bibles the world is reading; We are the creeds the world is needing; We are the sermons the world is heeding.”, Billy Graham
“Align yourself with people that you can learn from, people who want more out of life, people who are stretching and searching and seeking some higher ground in life.”, Les Brown
“Shoot for the moon, because even if you miss you miss, you'll land in the stars.”, Les Brown
“Jesus said several times, “Come, follow me.” His was a program of “do what I do,” rather than “do what I say.” His innate brilliance would have permitted him to put on a dazzling display, but that would have left his followers far behind. He walked and worked with those he was to serve. His was not a long-distance leadership. He was not afraid of close friendships; he was not afraid that proximity to him would disappoint his followers. The leaven of true leadership cannot lift others unless we are with and serve those to be led.”, Spencer W. Kimball
“My sun sets to rise again.”, Robert Browning
“This is not the end, this is not even the beginning of the end, this is just perhaps the end of the beginning.”, Winston S. Churchill
“When you get up in the morning, you have two choices - either to be happy or to be unhappy. Just choose to be happy”, Norman Vincent Peale
“Even a happy life cannot be without a measure of darkness, and the word happy would lose its meaning if it were not balanced by sadness. It is far better take things as they come along with patience and equanimity.”, Carl Gustav Jung
“The greatest thing about dreams is they don’t expire. They can lay dormant for years and when you pull them out and dust them off, they shine like new.”, Casi McLean
“Only one life, ’twill soon be past,Only what’s done for Christ will last.”, C.T. Studd
“The pressures on gay teens can be overwhelming--to keep secrets, tell lies, deny who you are, and try to be who you're not. Remember: you are special and worth being cared about, loved, and accepted just as you are. Never, ever let anyone convince you otherwise.”, Alex Sanchez
“There is only one who is all powerful, and his greatest weapon is love.”, Stan Lee
“Remember your humanity, and forget the rest.”, Bertrand Russell
“I change the world, the world changes me.”, Libba Bray
“If I have the belief that I can do it, I shall surely acquire the capacity to do it even if I may not have it at the beginning.”, Mahatma Gandhi
“Inspiration comes of working every day.”, Charles Baudelaire
“Just because Fate doesn't deal you the right cards, it doesn't mean you should give up. It just means you have to play the cards you get to their maximum potential.”, Les Brown
“Nuff said!”, Stan Lee
“I cannot tell if what the world considers ‘happiness’ is happiness or not. All I know is that when I consider the way they go about attaining it, I see them carried away headlong, grim and obsessed, in the general onrush of the human herd, unable to stop themselves or to change their direction. All the while they claim to be just on the point of attaining happiness.”, Chuang-Tzu
“Whether you know or not, you are the infinite potential of love, peace and joy”, Amit Ray
“Let us never negotiate out of fear. But let us never fear to negotiate.[Inaugural Address, January 20 1961]”, John Fitzgerald Kennedy
“There are many people who can do big things, but there are very few people who will do the small things.”, Mother Teresa
“Idealisme adalah kemewahan terakhir yang hanya dimiliki oleh pemuda.”, Tan Malaka
“I wanted change and excitement and to shoot off in all directions myself, like the colored arrows from a Fourth of July rocket.”, Sylvia Plath
“God made the world round so we would never be able to see too far down the road.”, Isak Dinesen
“The moment you become miserly you are closed to the basic phenomenon of life: expansion, sharing. The moment you start clinging to things, you have missed the target--you have missed. Because things are not the target, you, your innermost being, is the target--not a beautiful house, but a beautiful you; not much money, but a rich you; not many things, but an open being, available to millions of things.”, Osho
“You were born together, and together you shall be for evermore...But let there be spaces in your togetherness...Love one another, but make not a bond of love. Let it rather be a moving sea between the shores of your souls. Fill each other's cup but drink not from one cup. Give one another of your bread but eat not of the same loaf. Sing and dance together and be joyous, but let each one of you be alone, Even as the strings of a lute are alone though they quiver with the same music.”, Kahlil Gibran
“I have a dream.” “Is your dream very big?” “No.” “Well is it very grand?” “Not either.” “Neither?” “Neither.” “What is it then?” “It is very shiny.”, C. JoyBell C.
“For your past, for your flaws, and ultimately for your stress; I judge no one whom I’ve met along the way because in a sense we were all wounded in our own ways.”, Forrest Curran
“The first thing you have to know about writing is that it is something you must do everyday. There are two reasons for this rule: Getting the work done and connecting with your unconscious mind.”, Walter Mosley
“The only people who can change the world are people who want to. And not everybody does.”, Hugh MacLeod
“Constant kindness can accomplish much. As the sun makes ice melt, kindness causes misunderstanding, mistrust, and hostility to evaporate. ”, Albert Schweitzer
“One day in my shoes and a day for me in your shoes, the beauty of travel lies in the ease and willingness to be more open.”, Forrest Curran
“Your humans slaughter each other because of the color of your skin, or your faith or your plitics -- or for no reason at all -- too many of you hate as easily as you draw breath. - Magneto”, Stan Lee
“And...I think that's what life is all about, actually,about children and flowers.”, Audrey Hepburn
“Beauty is the only human aspect which cannot be captured on any canvas howsoever hard an artist tries. At the most, the undaunted artist can replicate the beauty on paper but what is a replica in comparison to the original! The humbling resemblance can only be respected, not truly adored. Beauty cannot be imprisoned in the lens of a camera. The images of beauty are a moment of its essence. Beauty cannot be displayed to evoke pleasure for all on a cinema screen. Those are just its imprints, mere illusions of its existence. Beauty cannot be described by words; it cannot be written or read about. There are no suitable words in all the languages of the world, ancient or modern to hold it between a paper and a pen or a script and an eye. Beauty can only be experienced from far, its delightful aroma can only be tasted through one’s eyes and its pleasurable sight can only be felt from the soul.Beauty can only be best described at its origin through a befuddling silence, the kind that leaves one almost on the verge of a pleasurable death, just because one chooses beauty over life. There is nothing in this world to hold something so pure, so divine except a loving heart. And it is the only manner through which love recognises love; the language of love has no alphabet, no words.”, Faraaz Kazi
“The life given us, by nature is short; but the memory of a well-spent life is eternal.”, Marcus Tullius Cicero
“You don't have to make something that people call art. Living is an artistic activity, there is an art to getting through the day.”, viggo mortensen
“A daydreamer is prepared for most things.”, Joyce Carol Oates
“At times our own light goes out and is rekindled by a spark from another person. Each of us has cause to think with deep gratitude of those who have lighted the flame within us.”, Albert Schweitzer
“It is in the knowledge of the genuine conditions of our lives that we must draw our strength to live and our reasons for living.”, Simone de Beauvoir
“Stop comparing yourself to others. Always strive to improve yourself to become better today than you were yesterday to serve those around you and the world.”, Roy T. Bennett
“Study, along the lines which the theologies have mapped, will never lead us to discovery of the fundamental facts of our existence. That goal must be attained by means of exact science and can only be achieved by such means. The fact that man, for ages, has superstitiously believed in what he calls a God does not prove at all that his theory has been right. There have been many gods – all makeshifts, born of inability to fathom the deep fundamental truth. There must be something at the bottom of existence, and man, in ignorance, being unable to discover what it is through reason, because his reason has been so imperfect, undeveloped, has used, instead, imagination, and created figments, of one kind or another, which, according to the country he was born in, the suggestions of his environment, satisfied him for the time being. Not one of all the gods of all the various theologies has ever really been proved. We accept no ordinary scientific fact without the final proof; why should we, then, be satisfied in this most mighty of all matters, with a mere theory?Destruction of false theories will not decrease the sum of human happiness in future, any more than it has in the past... The days of miracles have passed. I do not believe, of course, that there was ever any day of actual miracles. I cannot understand that there were ever any miracles at all. My guide must be my reason, and at thought of miracles my reason is rebellious. Personally, I do not believe that Christ laid claim to doing miracles, or asserted that he had miraculous power...Our intelligence is the aggregate intelligence of the cells which make us up. There is no soul, distinct from mind, and what we speak of as the mind is just the aggregate intelligence of cells. It is fallacious to declare that we have souls apart from animal intelligence, apart from brains. It is the brain that keeps us going. There is nothing beyond that.Life goes on endlessly, but no more in human beings than in other animals, or, for that matter, than in vegetables. Life, collectively, must be immortal, human beings, individually, cannot be, as I see it, for they are not the individuals – they are mere aggregates of cells.There is no supernatural. We are continually learning new things. There are powers within us which have not yet been developed and they will develop. We shall learn things of ourselves, which will be full of wonders, but none of them will be beyond the natural.[Columbian Magazine interview]”, Thomas A. Edison
“My young sisters, we have such hope for you. We have such great expectations for you. Don't settle for less than what the Lord wants you to be...Give me a young woman who loves home and family, who reads and ponders the scriptures daily, who has a burning testimony of the Book of Mormon... Give me a young woman who is virtuous and who has maintained her personal purity, who will not settle for less than a temple marriage, and I will give you a young woman who will perform miracles for the Lord now and throughout eternity.”, Ezra Taft Benson
“Cake is happiness! If you know the way of the cake, you know the way of happiness! If you have a cake in front of you, you should not look any further for joy!”, C. JoyBell C.
“To oppose something is to maintain it... You must go somewhere else; you must have another goal; then you walk a different road.”, Ursula K. Le Guin
“You must be humble, as it is one of the greatest [forms of] worship.”, Ali Ibn Abi Talib A.S
“We're constantly being told what other people think we are, and that's why it is so important to know yourself.”, Sarah McLachlan
“Not to have a thing is less humiliating than to beg it.”, Ali Ibn Abi Talib A.S
“Even in the far future,never forget the you of right nowWherever you are right now,you’re just taking a break”, BTS
“No guts, no story.”, Chris Brady
“If you don't have time to do it right, when will you have the time to do it over?”, John Wooden
“The ground's generosity takes in our compost and grows beauty! Try to be more like the ground.”, Rumi
“feminism is for everybody”, bell hooks
“Do you not then hear this horrible scream all around you that people usually call silence.”, Werner Herzog
“No matter how many people believe or don’t believe in you, you must bethe ultimate believer in yourself!”, pablo
“Perhaps life is just that... a dream and a fear”, Joseph Conrad
“I feel very adventurous. There are so many doors to be opened, and I'm not afraid to look behind them.”, Elizabeth  Taylor
“In the final analysis it is between you and God, it was never between you and them anyway.”, Mother Teresa
“Music, my rampart and my only one.”, Edna St. Vincent Millay
“Exuberance is beauty.”, William Blake
“Don’t tell thin women to eat a cheeseburger. Don’t tell fat women to put down the fork. Don’t tell underweight men to bulk up. Don’t tell women with facial hair to wax, don’t tell uncircumcised men they’re gross, don’t tell muscular women to go easy on the dead-lift, don’t tell dark-skinned women to bleach their vagina, don’t tell black women to relax their hair, don’t tell flat-chested women to get breast implants, don’t tell “apple-shaped” women what’s “flattering,” don’t tell mothers to hide their stretch marks, and don’t tell people whose toes you don’t approve of not to wear flip-flops. And so on, etc, etc, in every iteration until the mountains crumble to the sea. Basically, just go ahead and CEASE telling other human beings what they “should” and “shouldn't” do with their bodies unless a) you are their doctor, or b) SOMEBODY GODDAMN ASKED YOU.”, Lindy West
“We may run, walk, stumble. drive, or fly, but let us never lose sight of the reason for the journey, or miss a chance to see a rainbow on the way.”, Gloria Gaither
“What you do matters — but not much. What you are matters tremendously.”, Catherine Doherty
“Patience is a virtue, but there comes a moment when you must stop being patient and take the day by the throat and shake it. If it fights back; fine. I'd rather end up bloody at the end of the day, then unhurt with no progress made, no knowledge gained. I'd rather have a no, then nothing. I'd forgotten that about myself.”, Laurell K Hamilton
“Coming from your friendly neighborhood Spider-Man!”, Stan Lee
“You were ordered to obey to Allah, and you were create to perform good deeds.”, Hazrat Ali Ibn Abu-Talib A.S
“Is life too short to be taking this shit, or is life too short to be minding it?”, Violet Weingarten
“The meaning I picked, the one that changed my life: Overcome fear, behold wonder.”, Richard Bach
“Anxiety is the handmaiden of creativity”, T.S. Eliot
“Be ruthless about protecting writing days, i.e., do not cave in to endless requests to have "essential" and "long overdue" meetings on those days. The funny thing is that, although writing has been my actual job for several years now, I still seem to have to fight for time in which to do it. Some people do not seem to grasp that I still have to sit down in peace and write the books, apparently believing that they pop up like mushrooms without my connivance. I must therefore guard the time allotted to writing as a Hungarian Horntail guards its firstborn egg.”, J.K. Rowling
“kenangan itu cuma hantu di sudut pikir. selama kita diam dan ngga berbuat apa-apa, selamanya dia tetap jadi hantu, ngga akan pernah jadi kenyataan.”, dee
“No matter how much falls on us, we keep plowing ahead. That's the only way to keep the roads clear.”, Greg Kincaid
“I no longer agree to treat myself with disrespect. Every time a self-critical thought comes to mind, I will forgive the Judge and follow this comment with words of praise, self-acceptance, and love.”, don Miguel Ruiz
“You look at yourself and you accept yourself for who you are, and once you accept yourself for who you are you become a better person.”, Oprah Winfrey
“Focus on making choices to lead your life that aligns with your core values in the most purposeful way possible.”, Roy T. Bennett
“Republicans are for both the man and the dollar, but in case of conflict the man before the dollar.”, Abraham Lincoln
“Each of us is an innkeeper who decides if there is room for Jesus!”, Neal A. Maxwell
“The best of a book is not the thought which it contains, but the thought which it suggests; just as the charm of music dwells not in the tones but in the echoes of our hearts.”, Oliver Wendell Holmes Sr.
“I challenge every one of you who can hear me to rise to the divinity within you. Do we really realize what it means to be a child of God, to have within us something of the divine nature?”, Gordon B. Hinckley
“Of all the idiots I have met in my life, and the Lord knows they have not been few or little, I think that I have been the biggest.”, Isak Dinesen
“I would rather have 30 minutes of "wonderful" than a lifetime of nothing special.”, Julia Roberts
“You make mistakes, mistakes don't make you”, Maxwell Maltz
“Every search begins with beginner’s luck. And every search ends with the victor’s being severely tested.”, Paulo Coelho
“The past is a place of learning, not a place of living.”, Roy T. Bennett
“I cried because I had no shoes until I met a man who had no feet”, Helen Keller
“People in general would rather die than forgive. It's that hard. If God said in plain language. "I'm giving you a choice, forgive or die," a lot of people would go ahead and order their coffin.”, Sue Monk Kidd
“A sail boat that sails backwards can never see the sun rise.”, Bill Cosby
“When we sin and mess up our lives, we find that God doesn't go off and leave us- he enters into our trouble and saves us.”, Eugene Peterson
“Doing nothing for others is the undoing of ourselves.”, Horace Mann
“Time to toss the dice”, robert jordan
“Tomorrow is a new day; begin it well and serenely and with too high a spirit to be encumbered with your old nonsense.”, Ralph Waldo Emerson
“To plant a garden is to believe in tomorrow.”, Audrey Hepburn
“Freedom is not having everything we crave, it's being able to go without the things we crave and being OK with it. ”, Rob Bell
“With an eye made quiet by the power of harmony, and the deep power of joy, we see into the life of things.”, William Wordsworth
“Have you realized that most of your unhappiness in life is due to the fact that you are listening to yourself instead of talking to yourself? Take those thoughts that come to you the moment you wake up in the morning. You have not originated them but they are talking to you, they bring back the problems of yesterday, etc. Somebody is talking. Who is talking to you? Your self is talking to you. Now this man’s treatment [in Psalm 42] was this: instead of allowing this self to talk to him, he starts talking to himself. “Why art thou cast down, O my soul?” he asks. His soul had been depressing him, crushing him. So he stands up and says, “Self, listen for moment, I will speak to you.”, Martyn Lloyd-Jones
“Too many locks, not enough keys.”, Sarah Dessen
“Happiness is not having what you want, it is wanting what you have.”, Sheryl Crow
“My father chose my name , and my last name was chosen by my ancestors . That’s enough, I myself choose my way”, Ali Shariati
“you cannot find happiness, outside the plan of happiness!”, John Bytheway
“You are master of what you say until you utter it, once you deliver it, you are its captive. Preserve your tongue as you do your gold and money. One word could bring disgrace and the termination of a bliss.”, Ali Ibn Abi Talib A.S
“Those who have a strong sense of love and belonging have the courage to be imperfect.”, Brené Brown
“I went to the school and put it to William, particularly, that if you find someone you love in life, you must hang onto it, and look after it, and if you were lucky enough to find someone who loved you, then you must protect it.”, Diana, Princess of Wales
“The journey of a thousand miles begins with a single step. Watch your step.”, Lao Tzu
“Love is not liking somebody. Anyone can do that. Love is loving things that sometimes you don't like. ”, Ajahn Brahm
“You can lose your MONEY. You can lose your FRIENDS. You can lose your JOB and you can lose your MARRIAGE...and still recover...as long as there is HOPE. Never lose HOPE.”, John Paul Warren
“I believe that life is a prize, but to live doesn't mean you're alive.”, Nicki Minaj
“These mountains that you are carrying, you were only supposed to climb.”, Najwa Zebian
“Decide in your heart of hearts what really excites and challenges you, and start moving your life in that direction. Every decision you make, from what you eat to what you do with your time tonight, turns you into who you are tomorrow, and the day after that. Look at who you want to be, and start sculpting yourself into that person. You may not get exactly where you thought you'd be, but you will be doing things that suit you in a profession you believe in. Don't let life randomly kick you into the adult you don't want to become.”, Chris Hadfield
“Always Remember to take your Vitamins: Take your Vitamin A for ACTION, Vitamin B for Belief, Vitamin C for Confidence ,Vitamin D for Discipline, Vitamin E for Enthusiasm!!”, Pablo
“The sun shall always rise upon a new day and there shall always be a rose garden within me. Yes, there is a part of me that is broken, but my broken soil gives way to my wild roses.”, C. JoyBell C.
“Do not love half lovers Do not entertain half friends  Do not indulge in works of the half talented Do not live half a life  and do not die a half death If you choose silence, then be silent When you speak, do so until you are finished Do not silence yourself to say something And do not speak to be silent If you accept, then express it bluntly Do not mask it If you refuse then be clear about it  for an ambiguous refusal is but a weak acceptance Do not accept half a solution Do not believe half truths Do not dream half a dream Do not fantasize about half hopes Half a drink will not quench your thirst Half a meal will not satiate your hunger Half the way will get you no where Half an idea will bear you no results Your other half is not the one you love It is you in another time yet in the same space It is you when you are not Half a life is a life you didn't live,  A word you have not said A smile you postponed  A love you have not had A friendship you did not know To reach and not arrive Work and not work Attend only to be absent What makes you a stranger to them closest to you and they strangers to you The half is a mere moment of inability but you are able for you are not half a being You are a whole that exists to live a life  not half a life”, Gibran Khalil Gibran
“Tough times never last. Tough people do”, Robert Schuller
“The personal life deeply lived always expands into truths beyond itself.”, Anaïs Nin
“Enjoyment appears at the boundary between boredom and anxiety, when the challenges are just balanced with the person's capacity to act.”, Mihaly Csikszentmihalyi
“I am striving to give back the Divine in myself to the Divine in the All.”, Plotinus
“When you get ill do not get nervous about it and try as much as possible to be hopeful.”, Hazrat Ali Ibn Abu-Talib A.S
“Honesty will guide you to goodness, and goodness will invite you to heaven.”, Hazrat Ali Ibn Abu-Talib A.S
“He who defends with love will be secure; Heaven will save him, and protect him with love.”, Lao Tzu
“Perfection does not exist -- you can always do better and you can always grow.”, Les Brown
“A man is born gentle and weak; at his death he is hard and stiff. All things, including the grass and trees, are soft and pliable in life; dry and brittle in death. Stiffness is thus a companion of death; flexibility a companion of life. An army that cannot yield will be defeated. A tree that cannot bend will crack in the wind. The hard and stiff will be broken; the soft and supple will prevail.”, Lao-Tzu
“Public opinion is a weak tyrant compared with our own private opinion. what a man thinks of himself, that it is which determines, or rather indicates, his fate.”, Henry David Thoreau
“It is when you lose sight of yourself, that you lose your way. To keep your truth in sight you must keep yourself in sight and the world to you should be a mirror to reflect to you your image; the world should be a mirror that you reflect upon.”, C. JoyBell C.
“Abandon the urge to simplify everything, to look for formulas and easy answers, and to begin to think multidimensionally, to glory in the mystery and paradoxes of life, not to be dismayed by the multitude of causes and consequences that are inherent in each experience -- to appreciate the fact that life is complex.”, M. Scott Peck
“When you become the image of your own imagination, it's the most powerful thing you could ever do.”, RuPaul
“The creatures that inhabit this earth--be they human beings or animals--are here to contribute, each in its own particular way, to the beauty and prosperity of the world.”, Dalai Lama XIV
“Better to illuminate than merely to shine to deliver to others contemplated truths than merely to contemplate.”, Thomas Aquinas
“Be humble for you are made of earth. Be noble for you are made of stars.”, Serbian Proverb
“And so even though we face the difficulties of today and tomorrow, I still have a dream. It is a dream deeply rooted in the American dream.”, Martin Luther King Jr.
“Better not to give in to it. It takes ten times as long to put yourself back together as it does to fall apart.”, Finnick Odair Mockingjay
“We must pass through the darkness, to reach the light.”, Albert Pike
“I've never quite believed that one chance is all I get”, Anne Tyler
“To accomplish great things, we must not only act but also dream, not only plan, but also believe!”, Anatole France
“What other people think of me is not my business.”, Michael J. Fox
“Sovereignty is not given, it is taken.”, Mustafa Kemal Atatürk
“Great acts are made up of small deeds.”, Lao-Tzu
“A brother is like gold and a friend is like diamond. If gold cracks you can melt it and make it just like it was before. If a diamond cracks, it can never be like it was before.”, Ali Ibn Abi Talib A.S
“I have never felt that anything really mattered but knowing that you stood for the things in which you believed and had done the very best you could.”, Eleanor Roosevelt
“When a good man is hurt, all who would be called good must suffer with him.”, Euripides
“Every day God invites us on the same kind of adventure. It's not a trip where He sends us a rigid itinerary, He simply invites us. God asks what it is He's made us to love, what it is that captures our attention, what feeds that deep indescribable need of our souls to experience the richness of the world He made. And then, leaning over us, He whispers, "Let's go do that together.”, Bob Goff
“No other success can compensate for failure in the home.”, J. E. McCulloch
“take what you can from your dreamsMake them real as anythingIt takes the work out of the courage”, Dave Matthews Band
“The moral of the story is even though that seemed like the end of the world back then, right now I can look back on it and laugh. And if anyone is going through something similar right now just know it will get better.”, Phil Lester
“The universe is a million billion light-years wide, and every inch of it would kill you if you went there. This is the position of the universe with regards to human life.”, Martin Amis
“God's extraordinary work is most often done by ordinary people in the seeming obscurity of a home and family.”, Neal A. Maxwell
“Go boldly and honestly through the world. Learn to love the fact that there is nobody else quite like you.”, Daniel Radcliffe
“Give me a land of boughs in leafA land of trees that stand;Where trees are fallen there is grief;I love no leafless land.”, A.E. Housman
“There is no instinct like that of the heart.”, George Gordon Byron
“After all, when you come right down to it, how many people speak the same language even when they speak the same language?”, Russell Hoban
“Love me or hate me, i swear it won't make or break me.”, Lil Wayne
“Painful as it may be, a significant emotional event can be the catalyst for choosing a direction that serves us - and those around us - more effectively. Look for the learning.”, Louisa May Alcott
“Approval is overrated...Approval and disapproval alike satisfy those who deliver it more than those who receive it. I don't care for approval, and I don't mind doing without.”, Gregory Maguire
“What affects one in a major way, affects all in a minor way.”, Martin Luther King Jr.
“Everyone has a hidden agenda. Except me!”, Michael Crichton
“Too many people spend too much time trying to perfect something before they actually do it. Instead of waiting for perfection, run with what you go, and fix it along the way…”, Paul Arden
“If I were given the opportunity to present a gift to the next generation, it would be the ability for each individual to learn to laugh at himself.”, Charles M. Schulz
“To live is to choose. But to choose well, you must know who you are and what you stand for, where you want to go and why you want to get there.”, Kofi Annan
“It is necessary to hope... for hope itself is happiness.”, Samuel Johnson
“A sense of calm came over me. More and more often I found myself thinking, "This is where I belong. This is what I came into this world to do.”, Jane Goodall
“Joy is not in things; it is in us”, Richard Wagner
“A hero is one who knows how to hang on one minute longer.”, Novalis
“In order to know who you are you need to know God is.”, Annette Hoggs-Jackson
`);

function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getQuote(data) {
  var allRows = data.split('\n');
  const index = generateRandomInt(0, allRows.length);
  // TODO: Make extracting messages and authors more elaborate.
  // There are plenty of exceptions that will produce odd strings.
  var quote = allRows[index];
  var separation = quote.lastIndexOf(', ') + 1;
  var quote;
  var message = quote.slice(0,separation - 1);
  var author = quote.slice(separation, (quote.length));
  var quote = message + '―' + author;
  return quote;
}

function main() {
  var FILE = csv_file;
  document.getElementById('quote').innerHTML = `<p>${getQuote(FILE)}<p>`;
}

main();
