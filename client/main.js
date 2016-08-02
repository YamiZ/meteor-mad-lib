Template.body.events({
	'submit form': function(event, template){
		event.preventDefault();

		let exclamation = template.find('#exclamation').value;
		let adverb = template.find('#adverb').value;
		let noun = template.find('#noun').value;
		let verb = template.find('#verb').value;
		let madLib = "'"+exclamation+"!' you say, as you "+adverb+" jump onto your "+noun+" and "+verb+" into the sunset.";

		$("#createMadLib").hide();
		$("#createMadLib").text(madLib).fadeIn("slow").css("color","#0000ff");
		
	}
});