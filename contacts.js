(function(){

var contact=angular.module('contacts', []);

contact.controller('ContactList', function () 
{ 
	this.Clists=[
	{
		name:'Rajeev Thappar',
		post:'Editor',
		email:'raj@gmail.com',
		phone:900909876
	},
	{
		name:'Mayank Chadda',
		post:'Sales',
		email:'mayank@gmail.com',
	    phone:900909876
	},
	{
		name:'Aashish Rao',
		post:'HR',
		email:'Aashish@gmail.com',
	    phone:900909346
	},
	{
		name:'Himani Rao',
		post:'Developer',
		email:'himani@gmail.com',
	    phone:900909876
	},
	{
		name:'Simran Kaur',
		post:'Consultant',
		email:'Aashish@gmail.com',
	    phone:900909876
	}
	];
	    this.addContact=function(){
		this.Clists.push(this.Clist);
		this.Clist ={};
	};

})


})();
















// contact.controller('ContactList', function () 
// {
// 	this.Clists=lists;
// });

// 	var lists=[
// 	{
// 		name:'Rajeev Thappar',
// 		post:'Editor',
// 		email:'raj@gmail.com',
// 		City:'Bangalore',
// 		images:'image/mayank.jpg',
// 	},
// 	{
// 		name:'Mayank Chadda',
// 		post:'Marketing',
// 		email:'mac@gmail.com',
// 		City:'Gurgaon',	
// 		images:'image/mayank.jpg',
// 	},
// 	{
// 		name:'Ajay',
// 		post:'Developer',
// 		email:'ajay@gmail.com',
// 		City:'Bangalore',
// 		images:'image/mayank.jpg',
// 	}
// 	];
// })();
	
