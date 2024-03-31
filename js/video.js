var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1"); 
	video.autoplay = false; 
	video.loop = false; 

	document.querySelector("#play").addEventListener("click", function() {
		video.play();
		console.log("Play Video");
		updateVolume();
	});

	document.querySelector("#pause").addEventListener("click", function() {
		video.pause();
		console.log("Pause Video");
	});

	document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate *= 0.9; // Slow down by 10%
		console.log("New speed is " + video.playbackRate);
	});

	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate /= 0.9; 
		console.log("New speed is " + video.playbackRate);
	});
	document.querySelector("#skip").addEventListener("click", function() {
		if(video.currentTime + 10 > video.duration) {
			video.currentTime = 0;
			console.log("Going back to the start");
		} else {
			video.currentTime += 10;
		}
		console.log("Current location is " + video.currentTime);
	});

	document.querySelector("#mute").addEventListener("click", function() {
		if(video.muted) {
			video.muted = false;
			this.innerHTML = "Mute";
		} else {
			video.muted = true;
			this.innerHTML = "Unmute";
		}
		updateVolume();
	});

	document.querySelector("#slider").addEventListener("input", function() {
		video.volume = this.value / 100;
		updateVolume();
		console.log("Volume is " + video.volume);
	});

	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
	});

	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
	});

	function updateVolume() {
		document.querySelector("#volume").innerHTML = Math.round(video.volume * 100) + "%";
	}
});
