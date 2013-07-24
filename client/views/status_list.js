Template.statusList.helpers({
	statuses: function() {
		return Posts.find();
	}
});
