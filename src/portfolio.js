
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Dhara Hirpara",
  title: "Dhara Hirpara\n(Sr. Mobile Application Developer)",
  subTitle: emoji("A diligent Mobile Application Developer 🚀 who finds that the best way to come up with solutions is to think outside the box. My main focus is Android applications with Kotlin / JAVA / Flutter with customize SDK and libraries, although my insatiable curiosity has lead to other work such as, Hybrid mobile Application with Flutter, Android TV application."),
  resumeLink: "https://drive.google.com/file/d/1ZuCV2uNLUB-W57Q0_mIOkIxV1JTUHPVN/view?usp=drivesdk"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/dharace/",
  linkedin: "https://www.linkedin.com/in/dhara-hirpara-b3937810b",
  gmail: "dhara.ce01@gmail.com",
  gitlab: "https://gitlab.com/dharace01",
  facebook: "https://www.facebook.com/dhara.hirapara.14",
  instagram: "https://www.instagram.com/_euphrosyne___"
 // medium: "https://medium.com/@saadpasta",
//  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY MOBILE APPLICATION DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your mobile applications"),
    emoji("⚡ Integration of third party libraries such as Firebase/ Google clouds / Web services / Payment gateway / Audio-Video call/ Chat"),
    emoji("⚡ Developed Hybrid app for Android/iOS using Flutter"),

  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
        {
        skillName: "Android",
        fontAwesomeClassname: "fab fa-android"
        },
         {
                skillName: "iOS",
                fontAwesomeClassname: "fa fa-mobile"
                },
        {
                skillName: "JAVA",
                fontAwesomeClassname: "fab fa-java"
        },
        {
                                skillName: "Kotlin",
                                fontAwesomeClassname: "fa fa-language"
        },
         {
                                        skillName: "Flutter",
                                        fontAwesomeClassname: "fas fa-code"
                },
          {
                skillName: "firebase",
                fontAwesomeClassname: "fas fa-fire"
              },
               {
                    skillName: "sql-database",
                    fontAwesomeClassname: "fas fa-database"
                  },
    {
      skillName: "Web Services",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Custom SDK",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "OCR",
      fontAwesomeClassname: "fas fa-font"
    },
     {
                                    skillName: "Map Tracking",
                                    fontAwesomeClassname: "fa fa-location-arrow"
            }

  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
//    {
//      schoolName: "Harvard University",
//      logo: require("./assets/images/harvardLogo.png"),
//      subHeader: "Master of Science in Computer Science",
//      duration: "September 2017 - April 2019",
//      desc: "Participated in the research of XXX and published 3 papers.",
//      descBullets: [
//        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//      ]
//    },
    {
      schoolName: "Gujarat Technological University University",
      logo: require("./assets/images/gtu.jpg"),
      subHeader: "B.E in Computer Science & Engineering",
      duration: "June 2013 - May 2017",
      desc: "Ranked top 10% in the program with GPA 3.74/4. Took courses about Data Structure & Algorithms, C/C++, JAVA, .Net, Software Engineering, Web Security, Operating Systems, Cyber Security, Networking, ...",
      descBullets: [
       // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
          Stack: "Custom SDK",
          progressPercentage: "80%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sr. Android/Flutter Developer",
      company: "WebsInception",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Sep 2020 – Present",
      desc: "Working as a Sr. Android/Flutter developer to develop high end mobile applications",
        descBullets: [

                   "Work closely with IT project managers, solutions architects and software developers",
                   "Analyze, optimize, and improve the code base",
                   "Developed Video Calling, Audio Calling Chat feature in app using Socket programming.",
                   "Tested applications on multiple devices to insure compatibility standards.",
                   "Fixed bugs with code, design patterns and miscellaneous occurrences during projects."
                 ]

    },
    {
      role: "Sr. Android/Flutter Developer",
      company: "White Orange Software",
      companylogo: require("./assets/images/wos.png"),
      date: "Jul 2019 – Sep 2020",
     desc: "Played a key role in writing application logic using JAVA,KOTLIN, Flutter and XML with Android Studio platform and Android SDK/NDK.",
           descBullets: [
             "Created and incorporated SQLite database Manager for local data persistence of audit files on the device",
             "Use of Rest APIs and JSON Libraries like Retrofit, Volley, LoopJ, Soap etc.",
             "User third-party libraries, APIs, Payment gateways and Live map tracking",
             "Used standard Android components activities, services, database, layout as well as creating custom views for application",
             "Manage codes using code versioning tools such as, Git and Bitbucket",
             "Excellent knowledge with existing frameworks and APIs",

           ]
    },
    {
      role: "Native Android Developer",
      company: "Appstane Technology",
      companylogo: require("./assets/images/appstane.jpg"),
      date: "Fab 2018 – June 2019",
      desc: "Designed and developed 10+ real-time Android application using Java (currently available in the Google Play store)",
      descBullets: [
              "Familiarity with Restful APIs and Socket.IO programming to connect Android applications to back-end services.",
              "Integrated Login using Google, Facebook, Instagram, Mobile Verification using Facebook Account Kit and other open source APIs within applications like Google APIs for Maps.",
              "Responsible for designing distinctive screens for tablet optimization and a cleaner layout."
                   ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "dharace", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "dhara.ce01@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
