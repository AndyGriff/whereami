// hardcode a load of test data here
if (Statuses.find().count() == 0)
{
	
	// create some users
	var userOneId = Meteor.users.insert({ profile: { name: 'User One' }});
	var userOne = Meteor.users.findOne(userOneId); 
	
	Statuses.insert({
		userId: userOneId._id,
		name: userOne.profile.name,
		status: 'Away From Desk'
	});
	
}
