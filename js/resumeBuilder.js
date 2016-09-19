// global namespace
var RESUME = RESUME || {};
// sub namespace
RESUME.model = RESUME.model || {};

// Construct these objects
RESUME.buildBio = function() {
    var bio = new RESUME.model.Bio("Nick Ma");
    bio.role = "Infrastructure Engineer / Software Developer";
    bio.contacts = {
        mobile: "123-123-123",
        email: "test@test.com",
        github: "https://github.com/nma",
        twitter: "https://twitter.com/Nma38",
        location: "Canada"
    };
    bio.welcomeMessage = "Web Dev Practice";
    bio.skills = ["Cloud", "Automation", "DevOps", "Backend Development"];
    bio.biopic = "images/fry.jpg";
    return bio;
};
RESUME.formatBio = function(bio) {
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    var formattedBiopic = HTMLbioPic.replace('%data%', bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header').prepend(formattedName, formattedRole);
    $('#header').append(formattedBiopic, formattedWelcomeMsg, HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var skillFormatted = HTMLskills.replace('%data%', bio.skills[i]);
        $('#skills').append(skillFormatted);
    }
    for (var key in bio.contacts) {
        if (bio.contacts.hasOwnProperty(key)) {
            var contactFormatted = HTMLcontactGeneric.replace('%contact%', key).replace('%data%', bio.contacts[key]);
            $('#topContacts').append(contactFormatted);
            $('#footerContacts').append(contactFormatted);
        }
    }
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
    onlineCourse.name = 'FrontEnd NanoDegree';
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
RESUME.formatEducation = function(education) {
    if (!education) return;

    if (education.schools) {
        for (var i = 0; i < education.schools.length; i++) {
            var school = education.schools[i];
            if (school) {
                $('#education').append(HTMLschoolStart);

                $('.education-entry:last').append(
                    HTMLschoolName.replace('%data%', school.name),
                    HTMLschoolDegree.replace('%data%', school.degree),
                    HTMLschoolDates.replace('%data%', school.dates)
                );

                for (var j = 0; i < school.majors; j++) {
                    $('.education-entry:last').append('%data%', school.majors[j]);
                }
            }
        }
    }

    if (education.onlineCourses) {
        if (education.onlineCourses.length > 0) {
            $('#education').append(HTMLonlineClasses);
            for (var k = 0; k < education.onlineCourses.length; k++) {
                var onlineCourse = education.onlineCourses[k];
                if (onlineCourse) {
                    $('#education').append(HTMLschoolStart);
                    $('.education-entry:last').append(
                        HTMLschoolName.replace('%data%', onlineCourse.name),
                        HTMLschoolDates.replace('%data%', onlineCourse.dates)
                    );
                }
            }
        }
    }
};

RESUME.buildWork = function() {
    var work = new RESUME.model.Work();
    var job = new RESUME.model.Job();
    job.employer = 'Amazon';
    job.title = 'Backend Software Developer';
    job.location = 'Seattle';
    job.dates = '2014 - 2015';
    job.description = 'Working on AWS CloudFront';

    work.jobs = [job];

    return work;
};
RESUME.formatWork = function(work) {
    if (!work) return;

    if (work.jobs) {
        for (var i = 0; i < work.jobs.length; i++) {
            var job = work.jobs[i];
            if (job) {
                $('#workExperience').append(HTMLworkStart);
                $('.work-entry:last').append(
                    HTMLworkEmployer.replace('%data%', job.employer),
                    HTMLworkTitle.replace('%data%', job.title),
                    HTMLworkDates.replace('%data%', job.dates),
                    HTMLworkLocation.replace('%data%', job.location),
                    HTMLworkDescription.replace('%data%', job.description)
                );
            }
        }
    }
};
RESUME.getWorkLocations = function(work) {
    var locations = [];
    if (work && work.jobs) {
        for (var i = 0; i < work.jobs.length; i++) {
            var job = work.jobs[i];
            if (job && job.location) {
                locations.push(job.location);
            }
        }
    }

    return locations;
};

RESUME.buildProjects = function() {
    var projects = new RESUME.model.Projects();
    var project = new RESUME.model.Project();
    project.title = 'Hacker Rank Test Case';
    project.dates = '2015 - 2016';
    project.description = 'Create a Docker Test Case Runner for Hacker Rank.';
    project.images = [];

    projects.projects = [
        project
    ];

    return projects;
};
RESUME.formatProjects = function(projects) {
    if (!projects) return;

    if (projects.projects) {
        for (var i = 0; i < projects.projects.length; i++) {
            var project = projects.projects[i];
            if (project) {
                $('#projects').append(HTMLprojectStart);
                $('.project-entry:last').append(
                    HTMLprojectTitle.replace('%data%', project.title),
                    HTMLprojectDates.replace('%data%', project.dates),
                    HTMLprojectDescription.replace('%data%', project.description)
                );
                for (var j = 0; j < project.images.length; j++) {
                    var image = project.images[j];
                    if (image) {
                        $('.project-entry:last').append(HTMLprojectImage.replace('%data%', image));
                    }
                }
            }
        }
    }
};

RESUME.formatBio(RESUME.buildBio());
RESUME.formatEducation(RESUME.buildEducation());
RESUME.formatWork(RESUME.buildWork());
RESUME.formatProjects(RESUME.buildProjects());
