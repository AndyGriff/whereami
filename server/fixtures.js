// hardcode a load of test data here
if (Statuses.find().count() == 0)
{
	Statuses.insert(
		{name: 'AndyG',
		status: 'Away From Desk'
	});
	
	Statuses.insert(
		{name: 'Person 2',
		status: 'Here'
	});
	
	Statuses.insert(
		{name: 'Person 3',
		status: 'In a meeting'
	});
	
}