// Detailed prompts for each hobby, 30 days of unique and descriptive prompts
const prompts = {
    "Story Writing": [
        "Write a story where a long-lost letter is discovered behind an old painting. The letter contains a secret that could change the life of the person who finds it. Who left the letter, and what consequences does its discovery bring?",
        "Describe a character who can only tell lies but longs to tell the truth. How does this ability affect their relationships? One day, they discover a way to speak the truth for just 24 hours. What happens?",
        "Imagine a town where each resident has a unique color aura that reveals their true emotions. Write about a character whose aura suddenly disappears, causing fear and mystery among the townspeople.",
        "Write a story about someone who receives an anonymous message on their phone. The message reveals detailed personal memories they thought only they knew. What do they do to uncover the sender, and what do they discover about themselves?",
        "Your protagonist finds an old journal written by someone who looks exactly like them but claims to have lived centuries ago. As they read on, they find predictions about their own future. How do they react, and what truth lies in the journal’s pages?",
        "Describe a world where people dream the lives of others each night. Write about a character who keeps dreaming of someone in another country and realizes they must find this person. What happens when they finally meet?",
        "Write about a character who must confront their greatest fear in order to protect someone they love. Describe their inner conflict and the transformation they undergo in the process.",
        "Imagine a futuristic world where people’s memories are stored externally. Write about someone whose memories are accidentally swapped with a stranger’s. How do they cope, and what do they learn from living each other's lives?",
        "Write a story from the perspective of a tree that has stood in the same place for hundreds of years. Describe the changes it has witnessed and its connection to the people who have passed by.",
        "Describe a day in the life of a character who can only speak in riddles. How do they navigate daily conversations, and how does this affect their relationships with friends and family?",
        "Your protagonist finds an old photograph of a group of people wearing strange masks. After some investigation, they realize that each person in the photo is still alive and looks exactly as they did in the picture. What’s the secret?",
        "Imagine a world where everyone receives a clock at birth that counts down to the moment they meet their soulmate. Write about someone whose clock has counted down to zero, but they never meet anyone. What do they do?",
        "Write about a small town where people begin forgetting each other’s names. The protagonist realizes they’re the only one unaffected and must uncover the reason behind this strange amnesia.",
        "Create a story where your character inherits an ancient key from a relative. The key doesn’t seem to fit any lock, but they feel drawn to discover its purpose. What hidden door or mystery does it unlock?",
        "Your protagonist wakes up in a world that looks like theirs but isn’t. People recognize them, but their life is subtly altered. Describe their journey in uncovering how they got there and if they can return.",
        "Write a story set in a society where people can trade emotions like currency. What happens when someone accidentally spends all their joy on a single item? How do they cope without it?",
        "Describe a character who has the ability to transfer their pain to others. They use this power to help people, but one day they meet someone who refuses to give the pain back. What does this encounter mean for them?",
        "Imagine a world where people have animal companions that reflect their innermost selves. Write about a person whose companion suddenly changes, signaling a major transformation in their life.",
        "Your character stumbles upon an abandoned book that writes itself based on their thoughts. As they continue reading, they notice it begins predicting their future. What do they do with this newfound power?",
        "Write about a character who can communicate with one person across time. They receive messages from someone living 100 years ago. What do they share, and how does this connection shape their lives?",
        "Imagine a city where every door leads to a different dimension. Write about someone who accidentally stumbles through the wrong door and must navigate a world filled with strange creatures to find their way back.",
        "Your protagonist inherits an object from a late relative, along with a note saying, 'This will reveal your true self.' As they begin using the object, subtle changes occur in their life. What does the object reveal?",
        "Describe a society where everyone has a “true name” that only one other person can know. Write about a character who discovers they share a true name with a stranger and the bond this creates between them.",
        "Write about a character who receives an invitation to attend a once-in-a-lifetime event held by a mysterious host. When they arrive, they realize that each guest has a secret connection to one another.",
        "Imagine a town that gets covered in perpetual fog. People have started going missing, and your protagonist decides to venture into the fog to find the missing. What do they encounter?",
        "Write a story about a character who finds themselves in a version of their home where they can observe their own life from the outside. How do they feel watching themselves live?",
        "Your protagonist receives an unusual heirloom: a compass that doesn’t point north, but toward places that reveal truths about themselves. What places does it lead them to, and what do they learn?",
        "Write about a character who feels emotions twice as strongly as everyone else. How do they navigate life, and what happens when they meet someone with the same intensity?",
        "Imagine a character whose shadow has a mind of its own. They begin to notice that their shadow starts acting independently. What does the shadow want, and how does the character deal with this?",
        "Describe a character who is the last of a long line of guardians for an ancient secret. They know nothing about the secret but must protect it. When they finally learn what it is, everything changes."
    ],
    "Drawing": [
        "Draw a self-portrait, but include one imaginative element, like a floating object, magical accessory, or patterned background. Focus on capturing your expression and one unique addition that represents your personality.",
        "Imagine what 'happiness' would look like if it were a place. Draw this scene, using simple shapes and colors that bring out a joyful feeling. Think about the objects or people you might include to make this place come to life.",
        "Sketch a simple landscape from your imagination. It could be a beach, forest, or mountain. Add one unique element, like a glowing tree or a river that floats above ground.",
        "Draw your favorite animal as a cartoon character. Exaggerate one feature, like big eyes, a long tail, or fluffy fur, to make it expressive and fun.",
        "Create a drawing using only straight lines and triangles. Form a landscape, animal, or an abstract pattern with just these simple shapes, focusing on how each triangle connects to the next.",
        "Imagine what a dream or a memory might look like as a place. Draw it using soft lines and gentle colors, and add a few details that make it feel familiar or comforting.",
        "Sketch your favorite food as if it were a character with a face, arms, and legs. Give it a personality that reflects how it tastes or makes you feel!",
        "Draw a tree, but instead of regular leaves, let each branch hold a different object or shape. This could be symbols, fruits, stars, or anything that represents something meaningful to you.",
        "Imagine a cloud shaped like something unusual, like an animal, object, or face. Draw it floating in the sky, with soft, fluffy outlines that make it look light and whimsical.",
        "Create a scene that includes a mix of reality and imagination, like a cat with wings or a fish swimming through flowers. Keep it simple, focusing on how the real and imaginary elements combine in one scene.",
        "Draw a character based on a season (spring, summer, fall, or winter). Use colors and details that represent the season, like flowers for spring or warm sweaters for fall.",
        "Illustrate a scene from a memory or a recent dream. Don’t worry about getting the details perfect—focus on capturing the overall feeling or main objects that made it memorable.",
        "Draw a bouquet of simple flowers. Experiment with different shapes for the petals and leaves, and add a vase or a ribbon to bring the bouquet together.",
        "Imagine a city where buildings are shaped like different everyday objects (like a book, a coffee cup, or a pencil). Sketch a simple cityscape with these unique buildings.",
        "Draw a collection of everyday items from around your home. Arrange them in an interesting way, and try to capture their shapes and shadows. This could include anything like keys, mugs, or a pair of headphones.",
        "Create a doodle of your favorite place in your home. Keep the lines and details simple, but include objects that make this space special to you.",
        "Draw a pattern or mandala using only circles and curves. Start from the center and add details as you move outward, using shapes and lines that feel calming or rhythmic.",
        "Sketch a scene where an animal is doing something unexpected, like a fox reading a book or a bird wearing a hat. Keep the shapes simple, and add small details that make the scene playful.",
        "Illustrate a simple, calm scene of nature, like a lake with a mountain in the background or a tree under a starry sky. Use just a few elements to keep the scene peaceful.",
        "Draw an imaginary pet that combines parts of your favorite animals. Give it unique features and a friendly expression, keeping the shapes easy to replicate.",
        "Create a face using only geometric shapes, like squares, circles, and triangles. Experiment with the placement of the shapes to give the face a unique personality or mood.",
        "Draw a single object from nature up close, like a leaf, rock, or shell. Focus on adding texture and patterns that make the object interesting even in its simplicity.",
        "Imagine a world under the ocean and draw a simple scene with fish, plants, and maybe an underwater castle. Use flowing lines and soft shapes to capture the feeling of being underwater.",
        "Draw a scene of what your morning looks like, adding any objects or scenes that feel part of your routine. It could be a cup of coffee, a window view, or your favorite chair.",
        "Sketch a cozy corner or seat, adding a blanket, plant, or cup of tea to make it feel warm and welcoming. Use gentle, rounded shapes to keep the scene inviting.",
        "Create an illustration of a place you want to visit, using only a few simple lines and objects to represent the landscape. Think about adding one unique feature like a mountain or beach waves.",
        "Draw a tree with branches and leaves, but instead of regular leaves, let each one have a unique design, like stripes, dots, or small shapes. Focus on creating a fun, patterned look.",
        "Illustrate a fantasy door that leads to a hidden place. Add unique elements like vines, small windows, or a glowing handle, keeping the lines simple but detailed enough to make the door feel inviting.",
        "Draw your favorite season as a scene with a few objects or symbols that represent it. For example, winter could have snowflakes and warm clothes, while spring could have flowers and sunshine.",
        "Create a drawing that shows 'movement'—for example, waves, wind, or an animal in motion. Use flowing lines and curves to give it a sense of energy and direction."
    ],
    "Music": [
        "Listen to a piece of instrumental music and imagine a story or scene that matches it. Then, try humming or tapping a tune that fits that same scene. Think about whether it sounds calm, exciting, or mysterious.",
        "Create a simple rhythm by tapping on different surfaces around you, like a table, your lap, or a book. Experiment with varying speeds and see how it changes the feel of the rhythm.",
        "Hum a melody based on a color. Imagine what ‘yellow’ might sound like, then hum a tune that feels like it. Try it for other colors like blue, green, or red, thinking about the emotions they might bring.",
        "Choose a place you love—like a park, beach, or your room—and imagine it has its own song. Hum a melody that fits that place, making it relaxing, lively, or peaceful based on how it feels to you.",
        "Think of a happy memory, then try to hum or sing a melody that captures that moment. Focus on the feeling you had, and experiment with different notes until it feels like it fits the memory.",
        "Pick three random sounds around you (like clapping, tapping, or snapping). Create a simple beat by combining these sounds and repeat it to see if it forms a rhythm you like.",
        "Choose a simple word, like 'sun' or 'rain,' and try singing it to different notes. Notice how changing the pitch or speed gives the word a different feeling each time.",
        "Imagine a character with a unique personality, like a wizard or a hero. Create a short tune or rhythm that feels like it represents them. Experiment with how fast, slow, high, or low the tune should be.",
        "Hum a melody that feels like it represents today’s weather. Try to capture the feeling of sun, rain, or wind through the pace and notes of the melody.",
        "Choose a song you like and hum along to the main melody. Then, try to change one or two notes in each line to create your own version. See if you like the way it sounds with a small change.",
        "Tap a simple beat with your hands that feels like a heartbeat. Repeat it and try to add one new sound, like a snap or clap, to create a unique rhythm with each layer.",
        "Listen closely to the sounds of nature, like birds or the wind. Try to mimic the sound with your voice or a simple hum, focusing on matching the rhythm or tone you hear.",
        "Imagine you’re writing a lullaby to help someone fall asleep. Hum a slow, gentle tune that feels calming. Repeat it a few times to make it soothing, adjusting the notes as you go.",
        "Think of your favorite place and imagine it has a soundtrack. Hum a melody that matches the feeling of that place—whether it's relaxing, exciting, or nostalgic.",
        "Create a melody using only three different notes. Hum or sing them in different orders to see how many different tunes you can make with just those three notes.",
        "Tap out the rhythm of your name on a table or your lap. Experiment by slowing it down or speeding it up to see how it changes the feel of the beat.",
        "Imagine a movie scene where a hero enters the scene. Try to hum a dramatic, energetic tune that fits this moment, using low and high notes to give it an intense feeling.",
        "Try singing a simple phrase like ‘hello’ or ‘how are you’ with different emotions—happy, sad, or surprised. Notice how your voice changes with each emotion and experiment with the pitch and speed.",
        "Pick a season, like winter or summer, and imagine it has its own melody. Create a tune by humming that feels like it matches the season, like soft notes for winter or bright notes for summer.",
        "Imagine a daydream scene and hum a melody that feels like it could play in the background. Try using gentle, flowing notes to make it feel dreamy and relaxed.",
        "Think of your favorite animal and imagine it has a theme song. Create a simple, short melody that captures its personality, like a calm melody for a cat or a bouncy one for a puppy.",
        "Create a basic rhythm by clapping, tapping, or snapping. Try repeating it a few times, and then add one new sound to layer on top, like a hum or finger snap.",
        "Hum a melody based on an everyday action, like walking or running. Notice how your melody might change depending on the speed of the action, making it fast, slow, or rhythmic.",
        "Think of a calm place, like a beach or a quiet room. Create a gentle, slow tune that feels like it matches that peaceful environment, using long, relaxed notes.",
        "Choose a word that describes how you feel today and create a melody around it. Experiment with singing the word in different pitches and speeds, aiming to match the emotion behind it.",
        "Pick a favorite story or movie scene and imagine what music would match it. Try humming or tapping a rhythm that feels like it fits the mood or energy of that scene.",
        "Hum a melody as if you’re telling a secret. Keep it soft and use different notes to give it a mysterious feeling, as if the melody holds something hidden.",
        "Imagine you’re walking through a forest. Create a tune that matches the peacefulness of nature or the excitement of adventure. Add soft notes for calmness or bouncy notes for a fun feel.",
        "Try humming along with the rhythm of your footsteps as you walk. Experiment with different paces and pitches, seeing if your tune changes as your steps get faster or slower.",
        "Create a melody inspired by the sound of a raindrop. Imagine each note as a drop and let your tune flow gently, adding slight variations in pitch or speed for each new ‘drop’ sound."
    ],
    "Photography": [
        "Capture a close-up photo of something textured, like fabric, leaves, or wood. Focus on the details and try to fill the frame, highlighting the patterns or roughness of the surface.",
        "Find an object that contrasts with its surroundings and take a photo. This could be a bright object in a dark room or something colorful against a plain background. Notice how the contrast makes it stand out.",
        "Take a photo that captures reflections. Look for reflections in water, mirrors, or windows, and position your camera to make the reflection a main part of the image.",
        "Look up and capture an interesting photo from a low angle. Find trees, buildings, or clouds, and see how they look from a different perspective by shooting upward.",
        "Photograph a shadow cast by an object or person. Experiment with different angles to see how the shadow changes shape, and try to make the shadow the focal point of your image.",
        "Capture a moment of movement. This could be someone walking, leaves blowing, or water flowing. Try to photograph it in a way that shows the action or blur to highlight the motion.",
        "Take a photo of something symmetrical, like a building, window, or pattern. Frame it in the center and try to make both sides look as balanced as possible.",
        "Find a single color and capture multiple objects in that color in one shot. Look for items that have similar shades or tones and place them together to create a color-themed image.",
        "Choose one everyday object and take a series of photos that show it from different angles. Try close-ups, side views, and overhead shots to capture it in various ways.",
        "Take a photo that tells a story. Look for small details that hint at something more, like an open book next to a cup of tea, or an abandoned toy. Use these elements to convey a feeling or moment.",
        "Capture an interesting pattern found in nature, like leaves, bark, or stones. Try to fill the frame with the pattern so it becomes the main focus of the photo.",
        "Look for light and shadow patterns around you and capture a photo that highlights them. This could be sunlight coming through blinds, shadows on a wall, or light filtering through trees.",
        "Take a photo that represents your day. Choose one thing that stands out, whether it’s a place you visited, an object you used, or something that reflects your mood.",
        "Find two objects that are very different from each other, like rough and smooth, or big and small. Place them together in one frame to capture their contrasting qualities.",
        "Take a portrait of someone you know, focusing on their expression or a unique feature. Frame them naturally, and aim to capture a moment that feels genuine.",
        "Capture a photo at sunrise or sunset, focusing on the colors in the sky. Experiment with the camera angle and try to include objects like trees or buildings to add depth.",
        "Photograph something that represents the season, like leaves in fall, flowers in spring, or a cozy blanket in winter. Look for items that visually express the current time of year.",
        "Choose a quiet spot and take a photo that captures its calmness. It could be a cozy corner, a serene park, or a calm view. Use soft light and gentle framing to bring out the peaceful mood.",
        "Take a photo of your reflection in an unusual place, like in a puddle, window, or even a shiny object. Play with angles to make the reflection the main subject.",
        "Look for lines that guide the viewer’s eye through the photo, like a path, road, or row of trees. Try to frame the shot so the lines lead towards something interesting in the background.",
        "Photograph an object up close, focusing on small details you wouldn’t normally notice. This could be the texture of a leaf, the grain in wood, or the fabric of a piece of clothing.",
        "Capture a photo from a high angle, looking down at your subject. This perspective can make small objects or scenes look unique, like a bird’s-eye view of your workspace or a meal.",
        "Photograph a reflection of the sky in a puddle, pond, or even a glass surface. Experiment with angles to make the sky’s colors and shapes the main focus in the reflection.",
        "Find something with an interesting shape, like a spiral or curve, and make it the center of your photo. Frame the shot to highlight the shape and draw attention to its form.",
        "Capture a photo in black and white, focusing on shapes, shadows, and light. Without color, try to bring out contrasts and textures that create an interesting composition.",
        "Take a photo of a doorway or archway that frames something beyond it. Position yourself to capture what lies beyond the opening, making the doorway feel like a ‘window’ into another space.",
        "Photograph something familiar to you from an unusual perspective, like extremely close up or from the side. Try to capture it in a way that makes the viewer see it in a new light.",
        "Capture an object or scene with strong lines and shapes, like a building or abstract art. Frame it so the lines create interesting patterns or geometric forms in the photo.",
        "Find a source of light, like a lamp or sunlight, and capture how it changes the look of a simple object. Experiment with shadows and angles to bring out details.",
        "Take a photo that emphasizes negative space, the empty area around the main subject. Position a simple object in one part of the frame, leaving the rest open to highlight the subject."
    ],
    "Journaling": [
        "Write about a moment that made you smile today, no matter how small. Describe what happened, who was involved, and how it made you feel. Reflect on why that moment was meaningful.",
        "List three things you’re grateful for today. Write a short sentence about why each one is important to you and how it positively affects your life.",
        "Describe your ideal day from morning to night. Include details about where you’d go, who you’d see, and what you’d do. Try to capture how each part of the day would make you feel.",
        "Reflect on a challenge you’ve faced recently and write down what you learned from it. Consider how it changed your perspective and any positive takeaways.",
        "Write a letter to your future self. Describe who you hope to be, what you want to accomplish, and any dreams you hope to achieve. Keep it optimistic and encouraging.",
        "Think of a person you admire and write about the qualities you appreciate in them. Reflect on how those qualities inspire you and ways you might incorporate them into your life.",
        "Write down five goals you have, whether they’re big or small. For each goal, jot down a simple step you can take toward achieving it, even if it’s something small.",
        "Describe a place that makes you feel calm and safe. Write about the sounds, sights, and sensations you associate with this place and how it impacts your mood.",
        "List three of your favorite hobbies or activities. Reflect on why you enjoy each one and how they add value to your life, whether it’s through relaxation, creativity, or connection.",
        "Write about a book, movie, or song that left a lasting impact on you. Describe what stood out about it, how it made you feel, and why it’s memorable to you.",
        "Describe a favorite memory from your childhood. Think about the details, like who was there, where it happened, and how it made you feel. Reflect on why it’s special to you.",
        "Imagine a perfect vacation and write about it in detail. Describe the location, activities, food, and company. Focus on the feelings you would experience and why this trip would be meaningful.",
        "Think about a time when you felt truly proud of yourself. Describe what you achieved and how it felt in that moment. Reflect on how this moment influences you today.",
        "Write about a skill you’d like to learn or improve. Describe why it interests you, how you might get started, and what benefits you hope to gain from it.",
        "List three things you love about yourself. Reflect on why each quality is meaningful and how it helps you navigate life or connect with others.",
        "Write about something you’ve always wanted to try but haven’t yet. Describe what interests you about it and any steps you could take to make it a reality.",
        "Think about a recent conversation that made you feel understood. Write down what was discussed, who you spoke with, and how their words impacted you.",
        "Describe your favorite time of day, whether it’s morning, afternoon, or evening. Write about why this time feels special to you and any rituals you associate with it.",
        "Write down a personal motto or phrase that inspires you. Reflect on why it resonates with you and how you apply it in your daily life or during challenging times.",
        "Write about something you did recently that pushed you out of your comfort zone. Describe how it felt before, during, and after, and any growth or insights you gained from the experience.",
        "Think about a person who’s positively influenced your life. Write a letter to them (even if you don’t share it), expressing gratitude for how they’ve impacted you.",
        "Describe a small habit you’d like to build into your routine. Write about why it’s important to you, what benefit it could bring, and one simple way to start.",
        "Write about a favorite family tradition, big or small. Describe the activities, people involved, and why this tradition is meaningful to you.",
        "Imagine yourself five years from now. Write about where you’d like to be, what you’d be doing, and how you envision your life. Let yourself dream big without limitations.",
        "Think about a time when you were deeply happy. Describe what was happening, who you were with, and what made that moment so joyful. Reflect on what contributed to that happiness.",
        "Describe a typical day in your life and list three things you love about it. Write about small moments or routines that bring comfort, joy, or satisfaction.",
        "Write about a lesson you’ve learned this year. Describe what happened, what you took away from it, and how it might change your approach in the future.",
        "Write down three people who support you and describe what each one means to you. Reflect on how their presence enriches your life and any special memories you share.",
        "Write about a goal you have for the upcoming month. Describe why it’s important, what you hope to gain, and one action step you can take toward achieving it.",
        "Reflect on a recent day and write about a moment when you felt most present. Describe what you were doing, who was there, and what made you feel so focused or at peace."
    ],// Add the other hobbies and their prompts similarly
    "meditation/mindfulness": [
        "Close your eyes and take three deep breaths, paying attention to how your body feels as you inhale and exhale. Focus on the coolness of the air entering and the warmth leaving your body.",
        "Sit quietly and notice five sounds around you. As you identify each one, let it come and go without judgment. Allow yourself to be fully present in the act of listening.",
        "Focus on the feeling of your feet touching the ground. Visualize roots extending from your feet into the earth, grounding and stabilizing you as you connect to the support beneath you.",
        "Place a hand on your chest and feel your heartbeat. Focus on the rhythm, letting it remind you of the life and energy flowing through your body in this moment.",
        "Take three deep breaths and let your shoulders relax with each exhale. Notice any tension you might be holding there, and consciously release it, allowing your shoulders to soften.",
        "Focus on your hands resting on your lap or by your sides. Notice the sensations in your fingers and palms, the temperature, and any small movements. Let them relax completely.",
        "Close your eyes and imagine a peaceful place, like a forest or beach. Picture yourself there, feeling calm and safe. Engage all your senses as you imagine the sights, sounds, and scents.",
        "Take a slow breath in and out, counting to four with each. Repeat this rhythm for several breaths, noticing how your mind and body calm with each slow count.",
        "Sit comfortably and imagine a warm light radiating from your heart. Visualize this light expanding with each breath, filling your body and creating a sense of inner peace.",
        "Choose one small object near you and focus on it completely. Notice its texture, color, and shape in detail, letting your full attention rest on it for a few minutes.",
        "Focus on the gentle rise and fall of your chest as you breathe. Imagine each inhale bringing in calmness and each exhale releasing tension, letting your body relax more with each breath.",
        "Sit comfortably and focus on a word that brings you peace, like ‘calm’ or ‘joy.’ Repeat it silently in your mind, letting each repetition draw you deeper into relaxation.",
        "Take a few deep breaths, focusing on the air entering your nose and flowing into your lungs. Visualize the air as a color, and imagine it filling you with calm energy.",
        "Gently place your hand on your stomach and focus on its rise and fall as you breathe. Let each breath feel soothing and calming, connecting you with the natural rhythm of your body.",
        "Imagine a balloon in your hand and slowly breathe out as if filling it with air. Visualize your worries or tension being released with each exhale, leaving you feeling lighter.",
        "Close your eyes and focus on the space between your eyebrows, often called the third eye. Let your attention rest here, gently breathing and allowing yourself to feel centered and calm.",
        "Take a deep breath and bring your awareness to your jaw. Notice if there’s any tightness, and allow it to soften as you exhale. Let your whole face relax with each breath.",
        "Imagine yourself surrounded by a soft, protective bubble. With each breath, this bubble fills with calm energy, creating a sense of safety and peace around you.",
        "Sit quietly and focus on the feeling of your clothes touching your skin. Notice the sensations without judgment, paying attention to textures and warmth against your body.",
        "Picture a mountain in your mind, solid and grounded. Imagine yourself becoming like that mountain, steady and calm, unaffected by the winds or storms around it.",
        "Take a few breaths and let your awareness settle on your mouth. Notice if there’s any tension, and let it soften. Allow a gentle smile to form, relaxing your whole face.",
        "Imagine your mind as a calm lake. When thoughts arise, visualize them as leaves falling into the water. Watch them float away, letting your mind remain still and peaceful.",
        "Focus on your breath and imagine it traveling from your head to your toes. With each exhale, let go of any tension, letting a wave of relaxation flow down through your body.",
        "Take a few deep breaths and visualize a peaceful color, like blue or green. Imagine this color filling you from head to toe, bringing calmness and relaxation with it.",
        "Focus on the feeling of your hands in your lap. Imagine them gently warming, feeling heavy and relaxed. Let this warmth spread up your arms, relaxing your shoulders and chest.",
        "Close your eyes and imagine you’re standing under a gentle waterfall of light. Visualize the light washing away stress and tension, leaving you feeling refreshed and peaceful.",
        "Take a slow, deep breath and gently hum as you exhale. Focus on the vibration in your body, feeling it relax you with each exhale and bring a sense of inner calm.",
        "Gently focus on your forehead and eyes. Notice any tension and allow it to melt away. Picture your mind becoming open and calm as this area relaxes completely.",
        "Imagine your breath like ocean waves, flowing in and out. Sync your breathing with these waves, letting the rhythm soothe you like gentle waves washing over the shore.",
        "Place a hand on your heart and focus on your breathing. Picture each breath filling your chest with love and kindness, feeling gratitude for your body and for this moment."
    ],
    //"Bodyweight Exercises": [
    //    "Start with a 5-minute warm-up, focusing on gentle movements. Try arm circles, leg swings, and light jogging in place to increase your heart rate and prepare your body for exercise.",
    //    "Perform a set of 10 squats, paying attention to your form. Keep your feet shoulder-width apart, back straight, and lower your body as if sitting in a chair. Focus on breathing steadily as you move.",
    //    "Try a wall push-up for strength. Stand about an arm's length from a wall, place your hands on the wall at shoulder height, and perform 10 push-ups. Notice how your body feels as you engage your arms and chest.",
    //    "Do a 30-second plank, focusing on keeping your body in a straight line from head to heels. Engage your core and breathe steadily. If it's too challenging, start with your knees on the ground.",
    //    "Find a comfortable spot for a set of 10 lunges. Step forward with one leg, lowering your back knee toward the ground while keeping your front knee aligned with your ankle. Alternate legs and feel the stretch in your hips.",
    //    "Practice a gentle stretching routine for 5 minutes. Focus on areas that feel tight, like your arms, legs, and back. Hold each stretch for 15-30 seconds, breathing deeply and letting go of tension.",
    //    "Complete a set of 10 glute bridges. Lie on your back with knees bent and feet flat on the ground. Lift your hips toward the ceiling while squeezing your glutes, then lower back down. Repeat and feel the activation in your muscles.",
    //    "Try 10 modified push-ups on your knees. Keep your hands shoulder-width apart and lower your body towards the floor, maintaining a straight line from your head to your knees. Focus on controlled movements and steady breathing.",
    //    "Do a set of 15 calf raises. Stand with your feet hip-width apart and slowly rise onto your toes, then lower back down. This exercise strengthens your calves and improves balance.",
    //    "Perform a 30-second side plank on each side. Lie on your side and lift your body off the ground, balancing on one forearm and the side of your foot. Engage your core and breathe steadily as you hold the position.",
    //    "Try a set of 10 reverse lunges. Step back with one leg, lowering your knee toward the floor while keeping your front knee aligned. Alternate legs and focus on maintaining balance throughout the movement.",
    //    "Do a simple 5-minute cardio routine. Try jumping jacks, high knees, or running in place to get your heart rate up. Alternate between 30 seconds of work and 30 seconds of rest.",
    //    "Practice 10 seated leg lifts. Sit on the edge of a sturdy chair with your back straight. Extend one leg out straight and hold for a moment, then lower it back down. Switch legs and repeat to strengthen your lower body.",
    //    "Incorporate a 5-minute balance routine. Try standing on one leg for 30 seconds and then switch to the other leg. To make it more challenging, close your eyes or try to lift your other leg slightly.",
    //    "Do a set of 10 shoulder taps in a plank position. Start in a push-up position and alternate tapping each shoulder with the opposite hand while keeping your core engaged and body stable.",
    //    "Complete a set of 10 tricep dips using a sturdy chair or bench. Sit on the edge, place your hands beside your hips, and lower your body down, bending your elbows. Push back up and feel the burn in your arms.",
    //    "Try a 30-second wall sit. Press your back against the wall and slide down until your thighs are parallel to the floor. Hold this position and focus on your breathing as your legs work.",
    //    "Perform a set of 10 bird-dogs on all fours. Extend one arm forward while extending the opposite leg back, keeping your back flat. Alternate sides and feel the coordination and stability in your core.",
    //    "Try 10 side lunges to work on flexibility and strength. Step out to the side, bending the knee while keeping the other leg straight. Alternate sides and focus on maintaining good form.",
    //    "Do 5 minutes of gentle yoga or stretching. Incorporate poses like cat-cow, downward dog, and child's pose to improve flexibility and relax your body.",
    //    "Complete a set of 10 hip bridges, focusing on squeezing your glutes at the top. Lie on your back with knees bent, lift your hips, and hold for a moment before lowering down.",
    //    "Try 10 standing torso twists. Stand with your feet shoulder-width apart, place your hands on your hips, and gently twist your torso side to side. This helps warm up your core and improve mobility.",
    //    "Practice a set of 10 mountain climbers. Start in a plank position and bring one knee toward your chest, then switch legs in a running motion. Focus on your breathing and keep a steady pace.",
    //    "Do a set of 10 wall sits. Press your back against the wall, slide down until your knees are at a 90-degree angle, and hold this position for as long as comfortable, focusing on your breath.",
    //    "Try a set of 10 jumping jacks for a burst of cardio. Jump with your feet apart while raising your arms overhead, then jump back to the starting position. Focus on maintaining a steady rhythm.",
    //    "Perform 10 seated squats. Sit on the edge of a sturdy chair and stand up without using your hands. Lower yourself back down, focusing on engaging your leg muscles as you move.",
    //    "Complete a 5-minute cooldown, focusing on gentle stretches for your entire body. Pay special attention to areas that may feel tight from your workout, allowing yourself to relax and recover.",
    //    "Try 10 standing calf raises. Stand tall and slowly rise onto your toes, then lower back down. This exercise strengthens your calves and helps improve balance.",
    //    "Practice deep breathing for 5 minutes, focusing on your breath as you inhale and exhale. Allow yourself to relax with each breath, letting go of any tension in your body."
    //]
// ... Continue with cooking, fitness, gardening, crafting, music, dance, and language learning prompts
};

// Function to show calendar for a specific hobby
function showCalendar(hobby) {
    document.getElementById('hobby-cards').style.display = 'none';
    document.getElementById('calendar').style.display = 'block';
    document.getElementById('hobby-title').innerText = hobby.charAt(0).toUpperCase() + hobby.slice(1);

    const calendarGrid = document.getElementById('calendar-grid');
    calendarGrid.innerHTML = ''; // Clear previous calendar days

    // Generate 30 days for the month
    for (let day = 1; day <= 30; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');
        dayElement.innerText = day;

        dayElement.onclick = () => showPrompt(hobby, day - 1);

        calendarGrid.appendChild(dayElement);
    }
}

// Function to show the prompt for a selected day
function showPrompt(hobby, dayIndex) {
    const prompt = prompts[hobby][dayIndex];
    document.getElementById('prompt-text').innerText = prompt || 'No prompt for today';
    document.getElementById('prompt-display').style.display = 'block';
}

// Function to go back to the hobby selection
function goBack() {
    document.getElementById('calendar').style.display = 'none';
    document.getElementById('hobby-cards').style.display = 'block';
}

// Function to close the prompt display
function closePrompt() {
    document.getElementById('prompt-display').style.display = 'none';
}
function goToMainPage() {
    // Redirect to the main page (assuming it's index.html)
    window.location.href = 'index.html';
}
