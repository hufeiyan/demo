/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	name: '胡飞雁',
    role: '前端开发工程师',
    contacts: {
		mobile: '18758363312',
        email: '18758363312@163.com' ,
        github: 'https://github.com/hufeiyan',
        location: '杭州'
     	
    },
    welcomeMessage: '一纸简历，一方诚意' ,    
    skills: ['HTML5','JavaScript','jQuery'],
    biopic: 'images/fry.jpg',
    display: function  () {
     	var headerName = HTMLheaderName.replace("%data%", bio.name);
		var headerRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(headerName + headerRole);

		var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var email = HTMLemail.replace("%data%", bio.contacts.email);
		var github = HTMLgithub.replace("%data%", bio.contacts.github);
		var address = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts,#footerContacts").append(mobile + email + github + address);

		var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
		var welcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var skills = "";
		for(var i = 0,length = bio.skills.length; i < length ; i++ ){
			var skills = skills + HTMLskills.replace("%data%", bio.skills[i]);
		}
		$("#header").append(bioPic + welcomeMsg + HTMLskillsStart);
		$("#skills").append(skills);
    }
}

var education = {
	schools: [{
			name: '浙江大学',
	        location: '杭州',
	        degree: '硕士',
	        majors: ['移动互联网与游戏开发'],
	        dates: '2015-2017',
			url:'http://www.zju.edu.cn'
		},
		{
			name: '浙江大学宁波理工学院',
	        location: '宁波',
	        degree: '大学',
	        majors: ['软件工程'],
	        dates: '2010-2014',
            url:'http://www.nit.net.cn/'
	    }],
    
    onlineCourses: {
     	title: '前端开发工程师',
        school: 'udacity',
        dates: '2017',
        url: 'https://classroom.udacity.com/nanodegrees/nd001/syllabus'
     },
          
     display: function(){

     	$("#education").append(HTMLschoolStart + HTMLonlineClasses + HTMLschoolStart);
     	for(var i = 0,length = education.schools.length; i < length; i ++){
     		var schoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var schoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var schoolURL = HTMLschoolURL.replace("%data%", education.schools[i].url);
            var schoolMajor = ''
            education.schools[i].majors.forEach(function(val) {
                schoolMajor += HTMLschoolMajor.replace("%data%", val);
            });

			$(".education-entry:first").append(schoolName +schoolDegree + schoolDates + schoolLocation + schoolMajor + schoolURL);
     	}
		

		var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses.title);
		var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses.school);
		var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses.dates);
		var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses.url);

		$(".education-entry:last").append(onlineTitle +onlineSchool + onlineDates + onlineURL );
     }

}

var work = {
	jobs: [{
		employer: '同花顺' ,
        title: '前端开发工程师' ,
        location: '杭州' ,
        dates: 'in progress',
        description: '主要负责移动端同花顺app的新业务开发和维护' 
	}],
          
    display: function(){
    	$("#workExperience").append(HTMLworkStart);
    	for(var i = 0,length = work.jobs.length; i < length; i ++){
			var workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var workTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var workDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var workLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var workDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			$(".work-entry").append(workEmployer +　workTitle + workDates + workLocation + workDescription);
		}
		
    }
}

var projects = {
	projects: [{
		title: 'vip独家追踪' ,
        dates: '2016',
        description: '使用k线图和柱状图相结合展示股票最近60天的走势图，并可同步放大缩小',
        images: 'images/vip.jpg'
	}],
           
    display: function(){
    	$("#projects").append(HTMLprojectStart);
    	for(var i = 0,length = projects.projects.length; i < length; i ++){
	    	var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			var projectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var projectImages = HTMLprojectImage.replace("%data%", projects.projects[i].images);
			var projectDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description );
			$(".project-entry").append(projectTitle +projectDates + projectDescription + projectImages);
		}
    }
}

//header
bio.display();

//work
work.display();

//projects
projects.display();

//education
education.display();


$("#mapDiv").append(googleMap);



