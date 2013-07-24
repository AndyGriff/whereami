// hardcode a load of test data here
var statusData = [
	{name: 'AndyG',
	status: 'Away From Desk'},
	{name: 'Person 2',
	status: 'Here'},
	{name: 'Person 3',
	status: 'In a meeting'}
	
];

Template.statusList.helpers({
	statuses: statusData
});