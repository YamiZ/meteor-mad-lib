Template.body.events({
	'submit form': function(event, template){
		event.preventDefault();
		let exclamation = template.find('#exclamation').value;
		let adverb = template.find('#adverb').value;
		let noun = template.find('#noun').value;
		let verb = template.find('#verb').value;

		console.log(exclamation + adverb + noun + verb);
	}
});

/*Template.body.helpers({
	exclamation: function(){
		return Session.get('exclamation')
	},
	adverb: function(){
		return Session.get('adverb')
	},
	noun: function(){
		return Session.get('noun')
	},
	verb: function(){
		return Session.get('verb')
	},
});*/