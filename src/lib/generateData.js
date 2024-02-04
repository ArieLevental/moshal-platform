// Import the faker library
import {faker} from '@faker-js/faker'
const fs = require('fs');
function generateData() {
  const skills=['python','javascript','typscript','economics','youtube','Management','Full Stack','Back-End']

function generateUser() {
  return {
    id: faker.number.int(100),
    username: faker.internet.userName(),
    full_name: faker.internet.displayName(),
    avatar: faker.image.avatar(),
    email: faker.internet.email(),
    gender:faker.person.sex(),
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
    bio: faker.person.bio(),
    linkedin: faker.internet.url(),
    status: faker.helpers.arrayElement(["student", "Alumni", "Staff"]),
    education: [{
      institution: faker.company.name(),
      degree: faker.helpers.arrayElement(["BA", "MA", "PHD","Student"]),
      field: faker.helpers.arrayElement(['Economics','Math']),
      start_year: faker.date.past().getFullYear(),
      end_year: faker.date.future().getFullYear()
    }],
    work: {
      status: faker.helpers.arrayElement(["employed", "looking for job", "open to opportunities"]),
      skills: faker.helpers.arrayElement(skills),
      open_to: Array.from({ length: faker.number.int({ min: 1, max: 4 }) }, () => faker.helpers.arrayElement(["mentoring", "networking", "job opportunities", "freelance projects"])),
      experience: [{
        company_name: faker.company.name(),
        title:faker.person.jobTitle(),
        position: faker.person.jobType(), // 'Assistant'
        start_date: faker.date.past().toISOString().split('T')[0], // Format: YYYY-MM-DD
        end_date: faker.date.future().toISOString().split('T')[0], // Format: YYYY-MM-DD
        current: faker.datatype.boolean()
      }],
    },
      user_setting:{
      notification_settings: {
      jobs: faker.datatype.boolean(),
      events: faker.datatype.boolean(),
      messages: faker.datatype.boolean()
    },
    privacy: {
      email: faker.datatype.boolean(),
      phone: faker.datatype.boolean(),
      skills: faker.datatype.boolean()
    }}
  };
}
function generateJobPosting(users) {
  const postedByUser = faker.helpers.arrayElement(users);
  return {
    id: faker.number.int(100),
    title: faker.person.jobTitle(),
    position:faker.person.jobType(),
    date: faker.date.recent().toISOString().split('T')[0],
    description: faker.lorem.paragraphs(),
    status: faker.helpers.arrayElement(['open', 'closed']),
    author: postedByUser.username,
    until: faker.date.future().toISOString().split('T')[0],
    likes: faker.number.int({ min: 0, max: 200 }),
    details:{
    link: faker.internet.url(),
    company_id: faker.number.int(100),
    skills: faker.helpers.arrayElement(skills),
    experience: faker.number.int({min:0,max:20}),
    location: faker.location.city(),
    type: faker.helpers.arrayElement(['Full-time', 'Part-Time', 'Contract', 'Internship']),
    salary_range: {
      min: faker.number.int({ min: 30000, max: 50000 }),
      max: faker.number.int({ min: 50001, max: 100000 })
    }
  }
  
  };
}
// Generate Json

// Generate a list of users
const users = Array.from({ length: 50 }, generateUser);
// Generate job postings and assign 'posted_by' from the users list
const jobPostings = Array.from({ length: 50 }, () => generateJobPosting(users));
// Convert the users and jobPostings arrays to JSON
const db = JSON.stringify({users,"jobs":jobPostings})

// Write the JSON data to files
fs.writeFileSync('public/data/db.json', db);
console.log("extracted")

}
generateData()
// console.log(db);

