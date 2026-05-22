

var aboutHeynote = "Heynote is an Android app that allows you to add notes, lists and images to your home and lock screen wallpapers."
        +"<br>&bull; Heynote's way of displaying notes on wallpaper will"
        +" get you notified without the need for any widgets or lock screen"
        +" edit (Heynote writes notes directly on stock wallpaper which also can be reset at any time)."
        +"<br>&bull; Add notes to your home and lock screen wallpapers."
        +"<br>&bull; Fully customize your notes"
        +"<br> (position on screen, font color, font family, transparency, ...., etc)."
        +"<br>&bull; Reset wallpaper to original state at any time."
        +"<br>&bull; Change notes background."
        +"<br>and more coming in future updates.";

var aboutElewhat = "&bull; Developed and designed Elewhat which is an Educational Android app that aims to "
        +"revolutionize how people learn about electronics by providing a hands-on interactive experience."
        +"<br>&bull; For the main feature of Elewhat I\’ve implemented a neural network model for classifying "
        +"electronic components on Printed Circuit Boards (PCBs)."
        +"<br>&bull; Developed other interactive features such as:" 
        +"<br>&compfn; Pre-installed circuits with interactive components."
        +"<br>&compfn; Simple simulations to show how electronics work."
        +"<br>&compfn; Multimeter simulator."
        +"<br>&compfn; Learning resources and quizzes.";

var aboutToefl = "&bull; Developed and designed ToeflTren which is an Educational Android app that provides"
        +"a full experience about the Toefl language test."
        +"<br>&bull; Developed all the 4 sections of the test, with 3 options" 
        +"<br>&compfn; Training: no time limit, read explainations of answers and tips on how to answer."
        +"<br>&compfn; Trying: time limited test, for one of the 4 sections."
        +"<br>&compfn; Full Toefl test: the 2 hours test, with results at the end, and feedback on speaking and writing."
        +"<br>&bull; Created tips sections, for important things to keep in mind." 

var aboutMirror = "&bull; Developed and designed Mirror app which is an Android tool app that mirrors"
        +"camera feed to another phone(after authentication), on the same local network."
        +"<br>&bull; Developed key features:" 
        +"<br>&compfn; A secure web server to move camera feed from phone 1 to phone 2."
        +"<br>&compfn; A QR code generator in phone 1, and receiver in phone 2, for Authentication."
        +"<br>&compfn; Ability to take image in camera feed phone, from the receiver phone."

var aboutHeyphones = "Heyphones is a useful android app that solves a problem many people face, "
        +"imagine when you are listening to music through your headphones and someone "
        +"calls your name, you won't hear him/her, so Heyphones will listen to your name "
        +"and when someone calls your name it will pause music and alert you."
        +"But what if someone is calling your name from another room, simply his/her "
        +"phone will hear your name and send an alert to your phone and your phone "
        +"will pause music and alert you who is calling your name.";

var aboutAndroidProjects = "&bull; An app for designing app mockups."
        +"<br>&bull; An app that stops music and warns you when someone is calling your name while listening through headphones."
        +"<br>&bull; An app that provides a studying/researching experience on your phone.";

var aboutPythonProjects = "&bull; A Trained neural network for classifying electronics for EleWhat app."
        +"<br>&bull; A piano teaching program that works using external camera pointed at your hands above a table, then tracks your hands using OpenCV, and plays the virtual piano shown with your hands on your computer\’s screen."
        +"<br>&bull; A Flask website with simple Roulette game.";

var aboutDesignProjects = "Designed many posters, videos and web pages for my projects.";

var aboutLinuxProjects = "Have a good understanding of the Linux OS (Ubuntu Specifically), and been using it for 5 years.";

window.addEventListener("DOMContentLoaded", (event) => {

                document.getElementById('aboutHeynote').innerHTML = aboutHeynote;
                document.getElementById('aboutElewhat').innerHTML = aboutElewhat;
                document.getElementById('aboutToefl').innerHTML = aboutToefl;
                document.getElementById('aboutMirror').innerHTML = aboutMirror;

                document.getElementById('aboutAndroidProjects').innerHTML = aboutAndroidProjects;
                document.getElementById('aboutPythonProjects').innerHTML = aboutPythonProjects;
                document.getElementById('aboutDesignProjects').innerHTML = aboutDesignProjects
                document.getElementById('aboutLinuxProjects').innerHTML = aboutLinuxProjects

        }
);
