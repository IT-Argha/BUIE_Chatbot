document.addEventListener("DOMContentLoaded", function () {
    const chatLog = document.getElementById("chat-log");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    sendBtn.addEventListener("click", function () {
        const userMessage = userInput.value;
        if (userMessage.trim() === "") return;

        appendMessage("user", userMessage);
        userInput.value = "";

        // Process the user message and generate a bot response
        const botResponse = processUserInput(userMessage);

        // Simulate a delay to make it seem more like a conversation
        setTimeout(function () {
            appendMessage("bot", botResponse);
        }, 500);
    });

    function appendMessage(sender, message) {
        const chatEntry = document.createElement("div");
        chatEntry.classList.add("chat-entry", sender);
        chatEntry.textContent = message;
        chatLog.appendChild(chatEntry);

        // Scroll to the bottom of the chat log
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    function processUserInput(userMessage) {
        // Convert the user message to lowercase for case-insensitive matching
        const lowerUserMessage = userMessage.toLowerCase();
    
        // Initialize the response variable
        let response = "";
    
        // Implement your chatbot logic using a switch statement
        switch (true) {

    
            case lowerUserMessage.includes("admissions"):
            case lowerUserMessage.includes("apply"):
                response = "To inquire about admissions or the application process, please visit our college website or contact our admissions department.";
                break;
    
            case lowerUserMessage.includes("courses"):
            case lowerUserMessage.includes("programs"):
                response = "We offer a variety of engineering programs. You can find detailed information about our courses on our website or request a course catalog.";
                break;

            case lowerUserMessage.includes("about collage"):
                response = "Bankura Unnayani Society has been dedicated to promoting education and social welfare for over 25 years. Its first endeavor, the Bankura Unnayani Institute of Engineering, was established in 1998 as a degree engineering college offering BTech and M.Tech courses. Now, the society is proud to announce the opening of a new degree college, Bankura Unnayani College, which will initially offer two courses: BBA and BCA.If you are interested in learning more about this exciting opportunity, we invite you to visit our website at bankuraunnayani.org. Alternatively, you can reach out to us directly by sending an email to bankuraunnayani1997@gmail.com.Contact no 9474642082";
                break;
            case lowerUserMessage.includes("computer centre"):
                response = "The Institute Computer Centre is a central facility for the use of the students as well as faculty and staff members of any discipline of the institute for computational purposes. It is situated in a central place, on the first floor of the Central Library, for the ease of access to anyone interested to use it. The computers in the Centre are connected to the Campus wide Network, and with 24X7 internet facility. The centre also caters requirement of all online examinations and aptitude test practice sessions.";
                break;
            case lowerUserMessage.includes("tuition"):
            case lowerUserMessage.includes("fees"):
                response = "Tuition and fees information can be found on our website. We also offer scholarships and financial aid options to eligible students.";
                break;
    
            case lowerUserMessage.includes("faculty"):
            case lowerUserMessage.includes("professors"):
                response = "Our college has a highly qualified and experienced faculty. You can find information about our professors on our website.";
                break;
    
            case lowerUserMessage.includes("contact"):
            case lowerUserMessage.includes("phone"):
                response = "You can contact our college at [Your College's Phone Number] or email us at [Your College's Email Address].";
                break;
    
            // Additional questions and responses
            case lowerUserMessage.includes("eligibility criteria"):
                response = "The eligibility criteria for admission to a B.Tech program may vary from college to college, but generally, students must have completed Class 12 with a minimum of 50% marks in Physics, Chemistry, and Mathematics. Students may also need to qualify in an entrance exam such as JEE Main or JEE Advanced.";
                break;
    
            case lowerUserMessage.includes("engineering streams"):
                response = "Most engineering colleges offer a variety of engineering streams, such as Civil Engineering, Mechanical Engineering, Computer Science Engineering, and Electronics and Communications Engineering. Some colleges may also offer more specialized streams such as Aerospace Engineering, Petroleum Engineering, and Biotechnology Engineering.";
                break;
    
            case lowerUserMessage.includes("faculty-student ratio"):
                response = "The faculty-student ratio is an important factor to consider when choosing an engineering college. A lower faculty-student ratio means that students will have more access to their professors and TAs. A good faculty-student ratio for an engineering college is around 1:20.";
                break;
    
            case lowerUserMessage.includes("placement statistics"):
                response = "Placement statistics are a good indicator of the quality of an engineering college. A good college will have a high placement rate, and its students will be placed in reputed companies with good salaries.";
                break;
    
            case lowerUserMessage.includes("extracurricular activities"):
                response = "Extracurricular activities are an important part of college life. A good engineering college will offer a variety of extracurricular activities to its students, such as sports, cultural clubs, and technical clubs.";
                break;
    
            case lowerUserMessage.includes("fees"):
                response = "The fees for the B.Tech program may vary from college to college. Some colleges offer scholarships and financial aid to deserving students.";
                break;
    
            // Academic Questions and Responses
            case lowerUserMessage.includes("b.tech program"):
                response = "Our B.Tech program is designed to provide a strong foundation in engineering principles and includes both theoretical knowledge and practical experience.";
                break;
    
            case lowerUserMessage.includes("specializations offered"):
                response = "We offer a range of specializations in B.Tech, including Civil Engineering, Mechanical Engineering, Computer Science Engineering, Electronics and Communications Engineering, and more.";
                break;
    
            case lowerUserMessage.includes("faculty qualifications"):
                response = "Our faculty members hold advanced degrees in their respective fields and often have industry experience as well.";
                break;
    
            case lowerUserMessage.includes("average class size"):
                response = "The average class size for our B.Tech programs is typically around 30-40 students.";
                break;
    
            case lowerUserMessage.includes("lab facilities"):
                response = "We have state-of-the-art lab facilities that support hands-on learning and research in various engineering disciplines.";
                break;
    
            case lowerUserMessage.includes("placement rate for b.tech graduates"):
                response = "Our placement rate for B.Tech graduates is consistently high, with a significant percentage of students securing job offers before graduation.";
                break;
    
            case lowerUserMessage.includes("top companies that recruit"):
                response = "Top companies from various industries regularly recruit our B.Tech graduates, including [Company 1], [Company 2], and [Company 3].";
                break;
    
            case lowerUserMessage.includes("average salary for b.tech graduates"):
                response = "Our B.Tech graduates receive competitive salary offers, with the average salary being around [Average Salary Amount].";
                break;
    
            case lowerUserMessage.includes("internship policy"):
            case lowerUserMessage.includes("what is the internship policy"):
                response = "We have a well-structured winternship policy that encourages students to gain practical experience in their chosen field.";
                break;
    
            case lowerUserMessage.includes("research opportunities"):
                response = "We offer various research opportunities for students who are interested in conducting research and innovation projects.";
                break;
    
            case lowerUserMessage.includes("library"):
                response = "Our library is well-stocked with a vast collection of books, journals, and online resources to support academic and research needs.";
                break;
    
            case lowerUserMessage.includes("extracurricular activities"):
                response = "We have a wide range of extracurricular activities, including sports, cultural clubs, and technical clubs, to cater to various interests.";
                break;
    
            case lowerUserMessage.includes("student-teacher ratio"):
                response = "Our college maintains a favorable student-teacher ratio, ensuring that students have access to personalized attention and mentorship.";
                break;
    
            case lowerUserMessage.includes("academic reputation"):
                response = "Our college has a strong academic reputation and is known for its commitment to academic excellence and student success.";
                break;
    
            case lowerUserMessage.includes("support for struggling students"):
                response = "We provide comprehensive academic support services to help students who may be facing academic challenges. Our goal is to ensure that every student has the opportunity to succeed.";
                break;


             // Academic Questions and Responses 2
            case lowerUserMessage.includes("b.tech program's curriculum"):
                response = "Our B.Tech program's curriculum is designed to provide a strong foundation in engineering principles and includes a mix of core courses, electives, and practical components.";
                break;

            case lowerUserMessage.includes("opportunities to specialize"):
                response = "Students have the opportunity to specialize in a particular area through elective courses and sometimes by choosing specific branches of engineering.";
                break;

            case lowerUserMessage.includes("teaching methods"):
                response = "We employ a variety of teaching methods, including lectures, labs, workshops, and hands-on projects to ensure comprehensive learning.";
                break;

            case lowerUserMessage.includes("assessment process"):
                response = "The assessment process includes regular exams, assignments, projects, and sometimes practical assessments to evaluate students' understanding and performance.";
                break;

            case lowerUserMessage.includes("college's policy on retakes"):
                response = "Our college has a policy on retakes, which allows students to retake exams or courses they may not have performed well in. The specific policy details can be found in the student handbook.";
                break;

            case lowerUserMessage.includes("college's policy on academic probation"):
                response = "Students who do not meet academic performance criteria may be placed on academic probation. The terms and conditions of academic probation are outlined in the student handbook.";
                break;

            case lowerUserMessage.includes("college's policy on transferring credits"):
                response = "Our college has a policy on transferring credits from another college. Students interested in transferring credits should refer to the credit transfer policy available on our website.";
                break;

            case lowerUserMessage.includes("college's policy on plagiarism"):
                response = "We have a strict policy on plagiarism, and any form of academic dishonesty is not tolerated. Students are expected to adhere to the college's policy on plagiarism.";
                break;

            case lowerUserMessage.includes("college's policy on late assignments"):
                response = "Our college has a policy regarding late assignments, and the consequences for late submissions are outlined in the course syllabus. Students should refer to the specific policies for each course.";
                break;

            case lowerUserMessage.includes("college's policy on absences"):
                response = "Our college has an attendance policy that students must adhere to. The specific attendance requirements for each course are typically provided in the course syllabus.";
                break;

            case lowerUserMessage.includes("college's policy on extra credit"):
                response = "Extra credit opportunities may be available in some courses. The availability and criteria for earning extra credit are determined by individual course instructors.";
                break;

            case lowerUserMessage.includes("college's policy on grade appeals"):
                response = "Our college has a grade appeal policy that outlines the process for students to appeal their grades. Students should follow the established procedure for grade appeals.";
                break;

            case lowerUserMessage.includes("college's policy on academic advising"):
                response = "We provide academic advising services to help students make informed decisions about their academic path. Students can seek guidance from academic advisors to plan their coursework.";
                break;

            case lowerUserMessage.includes("college's policy on tutoring"):
                response = "Tutoring services are available to support students in their academic journey. Students can access tutoring services for additional help in specific subjects.";
                break;

            case lowerUserMessage.includes("college's policy on disability services"):
                response = "Our college is committed to providing support to students with disabilities. We have a disability services office that can assist students in accessing accommodations and support.";
                break;


            // Admission Questions and Responses
            case lowerUserMessage.includes("eligibility criteria for admission"):
                response = "The eligibility criteria for admission to the B.Tech program may vary, but generally, students must have completed Class 12 with a minimum of 50% marks in Physics, Chemistry, and Mathematics. Some colleges may require students to qualify in an entrance exam like JEE Main or JEE Advanced.";
                break;

            case lowerUserMessage.includes("admission exams accepted"):
                response = "We accept various admission exams, including JEE Main, JEE Advanced, and others. The specific exams may vary from year to year, so please check our college website for the most up-to-date information.";
                break;

            case lowerUserMessage.includes("minimum score required in admission exams"):
                response = "The minimum score required in admission exams can vary based on the competition and the specific program. We recommend checking the latest cutoff scores on our website for detailed information.";
                break;

            case lowerUserMessage.includes("weightage in admission process"):
                response = "The admission process considers various factors, including academic performance, entrance exam scores, and sometimes, extracurricular activities. The exact weightage given to each factor may vary, so it's important to review the admission criteria on our website.";
                break;

            case lowerUserMessage.includes("last date to apply for admission"):
                response = "The last date to apply for admission may change from year to year. We suggest visiting our college website to find the most current application deadlines and important dates.";
                break;

            case lowerUserMessage.includes("fee structure for B.Tech program"):
                response = "The fee structure for the B.Tech program can vary. You can find detailed information about tuition and fees on our college website, and it may include information about semester-wise or annual fees.";
                break;

            case lowerUserMessage.includes("scholarships"):
                response = "We offer various scholarships and financial aid options to eligible students. The availability and criteria for scholarships can vary, so please check our website for details on scholarship opportunities.";
                break;

            case lowerUserMessage.includes("hostel facility"):
                response = "Our college provides hostel facilities for students. The hostels are equipped with modern amenities, and you can find more information about the hostels on our college website.";
                break;

            case lowerUserMessage.includes("campus environment"):
                response = "Our college campus offers a vibrant and conducive environment for learning. Students have access to state-of-the-art facilities, a library, and a range of extracurricular activities.";
                break;

            case lowerUserMessage.includes("college location"):
                response = "Our college is located in [City, State]. You can find detailed information about our location and directions on our college website.";
                break;


             // Admission Questions and Responses 2
            case lowerUserMessage.includes("different ways to apply for admission"):
                response = "There are various ways to apply for admission to the B.Tech program, including online applications through our college website and offline methods. Please check our website for detailed application instructions.";
                break;

            case lowerUserMessage.includes("required documents for admission"):
                response = "To apply for admission, you typically need to submit documents like your academic transcripts, standardized test scores, a completed application form, letters of recommendation, a personal statement, and any other documents specified in the application requirements.";
                break;

            case lowerUserMessage.includes("interview process"):
                response = "Our college may conduct interviews as part of the admission process for some candidates. The interview format and requirements can vary, so it's essential to check the admission information on our website for specific details.";
                break;

            case lowerUserMessage.includes("admission decision notification"):
                response = "Admission decision notifications are typically sent out within a specific timeframe, usually a few weeks after the application deadline. Applicants are informed of their admission status through email or postal mail.";
                break;

            case lowerUserMessage.includes("deferral policy"):
                response = "Our college may have a deferral policy that allows admitted students to defer their enrollment for a specific period. The terms and conditions of deferral are outlined in the admission offer letter.";
                break;

            case lowerUserMessage.includes("withdrawal policy"):
                response = "Our college has a withdrawal policy that defines the process and implications of withdrawing from the program after enrollment. Students considering withdrawal should review the college's official withdrawal policy.";
                break;

            case lowerUserMessage.includes("refund policy"):
                response = "Our college's refund policy outlines the conditions under which tuition and fees may be refunded in case of withdrawal or program changes. Specific details can be found in the college's official refund policy.";
                break;

            case lowerUserMessage.includes("transfer to our college"):
                response = "Students interested in transferring to our college from another institution may need to follow specific transfer admission procedures. Information on the transfer process and requirements can be found on our college website.";
                break;

            case lowerUserMessage.includes("different types of financial aid available"):
                response = "We offer various types of financial aid, including scholarships, grants, work-study programs, and student loans. The specific financial aid options may vary, so please visit our website for detailed information.";
                break;

            case lowerUserMessage.includes("apply for financial aid"):
                response = "To apply for financial aid, you should complete the Free Application for Federal Student Aid (FAFSA) and any additional forms or applications required by our college. The financial aid application process is detailed on our college website.";
                break;

            case lowerUserMessage.includes("deadline for applying for financial aid"):
                response = "The deadline for applying for financial aid can vary, so it's essential to check the specific deadline for our college. Missing the deadline may affect your eligibility for certain financial aid programs.";
                break;

            case lowerUserMessage.includes("average financial aid package"):
                response = "The average financial aid package can vary based on individual circumstances and available funding. We recommend reviewing our college's financial aid statistics or contacting the financial aid office for specific details.";
                break;

            case lowerUserMessage.includes("different types of student loans"):
                response = "We offer various student loan programs, including federal loans and private loans. The types of loans available and their terms can be found on our college website or through the financial aid office.";
                break;

            case lowerUserMessage.includes("apply for student loans"):
                response = "To apply for student loans, you should complete the loan application process, which may involve submitting the FAFSA for federal loans and additional applications for private loans. Detailed instructions are available on our website.";
                break;

            case lowerUserMessage.includes("interest rate on student loans"):
                response = "The interest rates on student loans can vary depending on the type of loan and the lender. Federal student loan interest rates are typically set by the government, while private loan rates may vary. Specific interest rates can be found in the loan terms and disclosures.";
                break;


                
            // Placement Questions and Responses
            case lowerUserMessage.includes("placement rate for b.tech graduates"):
                response = "Our placement rate for B.Tech graduates is consistently high, with a significant percentage of students securing job offers before graduation.";
                break;

            case lowerUserMessage.includes("top companies that recruit"):
                response = "Top companies from various industries regularly recruit our B.Tech graduates, including [Company 1], [Company 2], and [Company 3].";
                break;

            case lowerUserMessage.includes("average salary for b.tech graduates"):
                response = "Our B.Tech graduates receive competitive salary offers, with the average salary being around [Average Salary Amount].";
                break;

            case lowerUserMessage.includes("training and support for placements"):
                response = "We provide comprehensive training and support to prepare students for placements, including interview preparation, resume building, and soft skills training.";
                break;

            case lowerUserMessage.includes("placement record for past years"):
                response = "Our college has maintained a strong placement record in recent years, with a consistently high placement rate and a track record of successful student placements.";
                break;

            case lowerUserMessage.includes("types of placements offered"):
                response = "We offer a range of placement opportunities, including campus placements, internships, and off-campus placements. Students can explore options that match their career goals.";
                break;

            case lowerUserMessage.includes("guaranteed placement for b.tech graduates"):
                response = "While we strive to provide placement opportunities to all eligible students, we do not offer guaranteed placements. Success in placements depends on individual performance and industry demands.";
                break;

            case lowerUserMessage.includes("placement process"):
                response = "Our placement process typically involves registration, pre-placement talks, interviews, and job offers. Details about the specific process can be found on our college website.";
                break;

            case lowerUserMessage.includes("help for students not placed"):
                response = "We have a dedicated career services team that provides support and guidance to students who may not secure immediate placements. We offer additional training and resources to help them in their job search.";
                break;

            case lowerUserMessage.includes("college's policy on internships"):
                response = "We encourage students to participate in internships as they provide valuable real-world experience. We have a structured internship policy that outlines the process and opportunities available.";
                break;

            // Placement Questions and Responses 2
            case lowerUserMessage.includes("different types of jobs for B.Tech graduates"):
                response = "B.Tech graduates have a wide range of job opportunities, including roles in software development, engineering, project management, data analysis, and more. The specific jobs can vary based on the student's specialization and skills.";
                break;

            case lowerUserMessage.includes("industries for B.Tech graduates"):
                response = "B.Tech graduates find employment in various industries, such as IT, automotive, healthcare, finance, and manufacturing. The choice of industry can depend on the graduate's interests and career goals.";
                break;

            case lowerUserMessage.includes("salary ranges for B.Tech graduates"):
                response = "Salary ranges for B.Tech graduates can vary significantly based on factors like specialization, location, experience, and the employing company. It's common for B.Tech graduates to earn competitive salaries in their respective fields.";
                break;

            case lowerUserMessage.includes("career opportunities for B.Tech graduates"):
                response = "B.Tech graduates have a wide array of career opportunities, including software development, hardware engineering, data science, project management, research, and more. The choice of career path depends on individual preferences and skills.";
                break;

            case lowerUserMessage.includes("help for students who can't find a job"):
                response = "Students who face challenges in finding a job can seek assistance from the college's career services. Our career advisors provide guidance, job search support, and access to job fairs and networking events to help students secure employment.";
                break;

            case lowerUserMessage.includes("types of internships for B.Tech students"):
                response = "B.Tech students can explore various types of internships, including summer internships, co-op programs, research internships, and industry-specific internships. These opportunities offer practical experience and valuable insights into their chosen field.";
                break;

            case lowerUserMessage.includes("find an internship"):
                response = "To find an internship, students can utilize the college's career services, search for internship listings on job portals and company websites, and network with professionals in their field. Career advisors can assist in the internship search process.";
                break;

            case lowerUserMessage.includes("co-curricular activities for job search"):
                response = "Engaging in co-curricular activities like participating in hackathons, joining technical clubs, attending workshops, and gaining certifications can enhance your skills and make you more appealing to potential employers.";
                break;

            case lowerUserMessage.includes("professional organizations to join"):
                response = "Joining professional organizations related to your field, such as IEEE, ACM, or industry-specific associations, can provide networking opportunities, access to industry events, and resources for career development.";
                break;

            case lowerUserMessage.includes("network with potential employers"):
                response = "Students can network with potential employers by attending job fairs, industry conferences, and alumni events. Utilizing social media platforms like LinkedIn and connecting with professionals in their desired field can also be beneficial.";
                break;

             // Other Questions and Responses
            case lowerUserMessage.includes("alumni network"):
                response = "Our college has a strong alumni network with graduates who have gone on to achieve success in various fields. Alumni often participate in mentorship programs and offer valuable insights to current students.";
                break;

            case lowerUserMessage.includes("clubs and societies"):
                response = "We have a diverse range of clubs and societies on campus, covering interests from technical clubs to cultural and hobby-based groups. Students are encouraged to join clubs aligned with their interests.";
                break;

            case lowerUserMessage.includes("sports facilities"):
                response = "Our campus offers state-of-the-art sports facilities, including fields, courts, and a well-equipped sports center for various sports and physical activities.";
                break;

            case lowerUserMessage.includes("cultural events"):
                response = "Our college hosts a variety of cultural events and festivals throughout the year, showcasing the rich diversity and talents of our students.";
                break;

            case lowerUserMessage.includes("diversity and inclusion"):
                response = "We are committed to diversity and inclusion, creating an inclusive environment where students from all backgrounds are welcomed and valued.";
                break;

            case lowerUserMessage.includes("rules and regulations"):
                response = "Our college has specific rules and regulations that ensure the safety and well-being of all students. You can find the detailed rules and regulations in our student handbook.";
                break;

            case lowerUserMessage.includes("disciplinary policy"):
                response = "Our disciplinary policy outlines the expected behavior and consequences for violations. It's important for students to understand and adhere to the policy to maintain a positive campus environment.";
                break;

            case lowerUserMessage.includes("grievance redressal mechanism"):
                response = "We have a grievance redressal mechanism in place to address student concerns and complaints. Students can follow the established process to seek resolution.";
                break;

            case lowerUserMessage.includes("safety and security measures"):
                response = "The safety and security of our students are a top priority. We have security measures in place, including campus security personnel and surveillance systems.";
                break;

            case lowerUserMessage.includes("co-curricular activities"):
                response = "We encourage students to engage in co-curricular activities as they complement academic learning. There are various opportunities for co-curricular involvement on campus.";
                break;

            case lowerUserMessage.includes("student exchange programs"):
                response = "Our college offers student exchange programs with partner institutions, providing opportunities for students to study abroad and gain international exposure.";
                break;

            case lowerUserMessage.includes("international students"):
                response = "We welcome international students and have specific policies and support services to assist them with their academic journey in our college.";
                break;

            case lowerUserMessage.includes("students with disabilities"):
                response = "We are committed to providing an inclusive environment for students with disabilities. Specific policies and support services are in place to accommodate their needs.";
                break;

            case lowerUserMessage.includes("financial aid"):
                response = "We offer financial aid programs to assist eligible students with their educational expenses. Details about available financial aid options can be found on our college website.";
                break;

            case lowerUserMessage.includes("academic misconduct"):
                response = "We have strict policies regarding academic misconduct to maintain academic integrity. It's important for students to be aware of and adhere to these policies.";
                break;

            // Other Questions and Responses
            case lowerUserMessage.includes("housing policy"):
                response = "Our college provides on-campus housing options for students. The housing policy includes guidelines on accommodation facilities, rules, and regulations. Students can find detailed information about the housing policy on our college website or by contacting the housing office.";
                break;

            case lowerUserMessage.includes("cost of living on campus"):
                response = "The cost of living on campus includes housing fees, meal plans, and other associated expenses. The exact cost can vary based on the type of accommodation and meal plan chosen. Students can find detailed information about the cost of living on campus on our college website.";
                break;

            case lowerUserMessage.includes("meal plans available"):
                response = "Our college offers various meal plans to cater to different dietary preferences and needs. Meal plans typically include a certain number of meals per week or semester, along with dining options and special meal events. Students can explore the available meal plans and choose the one that best suits their requirements.";
                break;

            case lowerUserMessage.includes("transportation system"):
                response = "Our college provides a transportation system for students, including shuttle services between campus and nearby locations. The transportation system ensures convenient commuting options for students who live off-campus or need to travel between different college facilities.";
                break;

            case lowerUserMessage.includes("healthcare policy"):
                response = "Our college has a healthcare policy that covers medical services for students. This policy may include access to on-campus health clinics, health insurance information, and guidance on seeking medical care. Students can find detailed information about the healthcare policy on our college website or by contacting the healthcare services office.";
                break;

            case lowerUserMessage.includes("safety and security policy"):
                response = "The safety and security of our students are top priorities. Our college has comprehensive safety and security policies in place, including campus patrols, emergency response protocols, and safety awareness programs. Students can familiarize themselves with the safety and security guidelines available on our college website.";
                break;

            case lowerUserMessage.includes("student code of conduct"):
                response = "Our college has a student code of conduct that outlines expected behavior, academic integrity, and disciplinary procedures. It's important for students to adhere to the code of conduct to maintain a positive and respectful campus environment. Students can access the complete student code of conduct document on our college website.";
                break;

            case lowerUserMessage.includes("grievance redressal mechanism"):
                response = "We have a grievance redressal mechanism in place to address student concerns and complaints. Students can report grievances related to academics, facilities, or other issues through the designated channels. The college reviews and addresses grievances promptly to ensure a positive experience for all students.";
                break;

            case lowerUserMessage.includes("policy on discrimination and harassment"):
                response = "Our college has a strict policy against discrimination and harassment of any kind, including based on race, gender, sexual orientation, religion, or disability. We are committed to providing an inclusive and respectful environment for all students. Violations of this policy are taken seriously and are subject to disciplinary action.";
                break;

            case lowerUserMessage.includes("commitment to sustainability"):
                response = "We are deeply committed to sustainability initiatives and environmental conservation. Our college actively participates in recycling programs, energy conservation efforts, green campus projects, and awareness campaigns. We encourage students to get involved in sustainability activities and contribute to creating a more eco-friendly campus.";
                break;
            case lowerUserMessage.includes("hello"):
            case lowerUserMessage.includes("hi"):
                response = "Hello! How can I assist you today?";
                break;
        
            default:
                response = "I'm sorry, I couldn't understand your question. Please try again or ask something specific related to our engineering college.";
                break;
        }
    
        return response;
    }
    
    
});
