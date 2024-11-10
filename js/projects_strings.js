
var aboutHeynoteShort = "Installs: 120k+, Rating: 4.4"

var aboutHeynote = "Add notes, lists and images to your home and lock screen wallpapers."
+"<br>&bull; Heynote's way of displaying notes on wallpaper will"
+" get you notified without the need for any widgets or lock screen"
+" edit(Heynote writes notes directly on stock wallpaper which also can be reset at any time)."
+"<br>&bull; Add notes to your home and lock screen wallpapers."
+"<br>&bull; Fully customize your notes"
+"<br> (position on screen, font color, font family, transparency, ...., etc)."
+"<br>&bull; Reset wallpaper to original state at any time."
+"<br>&bull; Change notes background."
+"<br>and more coming in future updates.";

var aboutElewhatShort = "Coming soon..."

var aboutElewhat = "&bull; Developed and designed EleWhat which is an Educational Android app that aims to "
+"revolutionize how people learn about electronics by providing a hands-on interactive experience."
+"<br>&bull; For the main feature of EleWhat I’ve implemented a neural network model for classifying "
+"electronic components on Printed Circuit Boards (PCBs)."
+"<br>&bull; Developed other interactive features such as a Multimeter simulator, quizzes and some in-app "
+"learning resources, also added some preinstalled circuits with interactive explanations of each "
+"component."

var aboutHeyphonesShort = "Currenly not available (down for maintenance)"

var aboutHeyphones = "Heyphones is a useful android app that solves a problem many people face, "
        +"imagine when you are listening to music through your headphones and someone "
        +"calls your name, you won't hear him/her, so Heyphones will listen to your name "
        +"and when someone calls your name it will pause music and alert you."
        +"But what if someone is calling your name from another room, simply his/her "
        +"phone will hear your name and send an alert to your phone and your phone "
        +"will pause music and alert you who is calling your name."

window.onload = function(){
	document.getElementById('aboutHeynote').innerHTML = aboutHeynote;
	document.getElementById('aboutHeynoteShort').innerHTML = aboutHeynoteShort;
	document.getElementById('aboutElewhat').innerHTML = aboutElewhat;
	document.getElementById('aboutElewhatShort').innerHTML = aboutElewhatShort;
	document.getElementById('aboutHeyphones').innerHTML = aboutHeyphones;
	document.getElementById('aboutHeyphonesShort').innerHTML = aboutHeyphonesShort;

}
