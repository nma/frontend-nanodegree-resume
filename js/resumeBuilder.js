// global namespace
var RESUME = RESUME || {};
// sub namespace
RESUME.model = RESUME.model || {};

// Construct these objects
RESUME.buildBio = function() {
    var bio = new RESUME.model.Bio();
    bio.name = "Nick Ma";
    bio.role = "Infrastructure Engineer / Software Developer";
    bio.contacts = {
        mobile: "123-123-123",
        email: "test@test.com",
        github: "https://github.com/nma",
        twitter: "https://twitter.com/Nma38",
        location: "Waterloo, Canada"
    };
    bio.welcomeMessage = "Web Dev Practice";
    bio.skills = ["Cloud", "Automation", "DevOps", "Backend Development"];
    bio.biopic = "images/fry.jpg";
    return bio;
};

RESUME.buildEducation = function() {
    var education = new RESUME.model.Education();
    var school = new RESUME.model.School();
    school.name = 'University of Waterloo';
    school.location = 'Waterloo, ON Canada';
    school.degree = 'BSE';
    school.majors = ['Software Engineering'];
    school.dates = '2009 - 2014';
    school.url = 'https://uwaterloo.ca';

    var onlineCourse = new RESUME.model.OnlineCourse();
    onlineCourse.title = 'FrontEnd NanoDegree';
    onlineCourse.school = 'Udacity';
    onlineCourse.dates = '2016 - present';
    onlineCourse.url = 'https://udacity.com';

    education.schools = [
        school
    ];
    education.onlineCourses = [
        onlineCourse
    ];
    return education;
};

RESUME.buildWork = function() {
    var work = new RESUME.model.Work();
    var job = new RESUME.model.Job();
    job.employer = 'Amazon AWS';
    job.title = 'Backend Software Developer';
    job.location = 'Seattle, WA';
    job.dates = '2014 - 2015';
    job.description = 'Working on AWS CloudFront';

    var job2 = new RESUME.model.Job();
    job2.employer = 'Amazon.ca';
    job2.title = 'Software Developer Intern';
    job2.location = 'Toronto, CA';
    job2.dates = '2013 - 2014';
    job2.description = 'Amazon FBA';

    work.jobs = [job, job2];

    return work;
};

RESUME.buildProjects = function() {
    var projects = new RESUME.model.Projects();
    var project = new RESUME.model.Project();
    project.title = 'Hacker Rank Test Case';
    project.dates = '2015 - 2016';
    project.description = 'Create a Docker Test Case Runner for Hacker Rank.';
    project.images = ["images/197x148.gif", "images/197x148.gif"];

    projects.projects = [
        project
    ];

    return projects;
};

RESUME.displayMap = function() {
    $('#mapDiv').append(googleMap);
};

var bio = RESUME.buildBio();
var education = RESUME.buildEducation();
var projects = RESUME.buildProjects();
var work = RESUME.buildWork();
RESUME.displayMap();

bio.display();
work.display();
education.display();
projects.display();