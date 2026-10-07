export const site = {
  brand: 'DB Bobcat and Tipper Hire',
  legal: 'DB BOBCAT AND TIPPER HIRE PTY LTD',
  owner: 'David',
  phoneDisplay: '0412 026 793',
  phoneTel: '+61412026793',
  email: 'dbbobcat@optusnet.com.au',
  address: '8 Lush Crt, Altona Meadows VIC 3028',
  hours: 'Mon–Fri 9:00 am – 7:00 pm',
  hoursShort: 'Mon–Fri 9am–7pm',
};

export const services = [
  {
    id: 'site-preparation',
    title: 'Site Preparation',
    image: 'images/gallery/site-preparation-1.jpg',
    blurb:
      'Get your project off to a smooth start with bobcats and tippers equipped for excavation through to levelling.',
  },
  {
    id: 'site-clean',
    title: 'Site Clean',
    image: 'images/gallery/site-clean.jpg',
    blurb: 'Post-construction clean-up so the site is left clean, tidy, and ready for the next phase.',
  },
  {
    id: 'soil-removal',
    title: 'Soil Removal',
    image: 'images/gallery/soil-removal.jpg',
    blurb: 'Removal and disposal of soil — any volume, any western-Melbourne location.',
  },
  {
    id: 'rock-removal',
    title: 'Rock Removal',
    image: 'images/gallery/rock-removal.jpg',
    blurb: 'Safe, efficient rock removal for rocks of any size, big or small.',
  },
  {
    id: 'rubbish-removal',
    title: 'Rubbish Removal',
    image: 'images/gallery/rubbish.jpeg',
    blurb:
      'Builders’ waste and debris. Tippers from 2 tonne to 12 tonne 6-wheelers, recycling where possible.',
  },
  {
    id: 'concrete-removal',
    title: 'Concrete Removal',
    image: 'images/gallery/s5.jpg',
    blurb: 'Safe removal and disposal of concrete, including old driveways and footpaths.',
  },
  {
    id: 'concrete-cutting',
    title: 'Concrete Cutting',
    image: 'images/gallery/concrete-cutting.jpg',
    blurb: 'Bobcat-mounted concrete saws to cut through concrete of any size to meet the job.',
  },
  {
    id: 'small-demolition',
    title: 'Small Demolition',
    image: 'images/gallery/small-demolition.jpg',
    blurb: 'Sheds and other small structures — a one-person operation with a safety-first approach.',
  },
];

export const processSteps = [
  {
    n: '01',
    title: 'Call us',
    body: 'Ring 0412 026 793 and talk through the earthmoving or demolition work. A few questions so David knows how to help.',
  },
  {
    n: '02',
    title: 'Get a quote',
    body: 'A detailed quote covering cost and scope. Transparent, clear, and matched to the site — not a ballpark guess.',
  },
  {
    n: '03',
    title: 'Schedule the work',
    body: 'Agree a date and time. Flexible around your schedule so disruption to the day stays minimal.',
  },
];

export const areas = [
  'Altona Meadows',
  'Laverton',
  'Seabrook',
  'Taylors Hill',
  'Werribee',
  'Wyndham Vale',
];

export const reviews = [
  {
    name: 'Emily Nguyen',
    role: 'Homeowner',
    quote:
      'David from DB Bobcat and Tipper Hire was very easy to work with and provided personalized solutions for our concrete removal needs. The job was completed efficiently and the site was left clean and tidy. Would definitely use their services again!',
  },
  {
    name: 'Mark Brown',
    role: 'Builder',
    quote:
      'As a builder, I have used DB Bobcat and Tipper Hire for multiple projects and have always been satisfied with their work. David is reliable, responsive and always goes above and beyond to ensure the job is done right. Highly recommend!',
  },
  {
    name: 'Michael Jones',
    role: 'Homeowner',
    quote:
      'I was very impressed with the expertise and equipment of DB Bobcat and Tipper Hire. David was able to handle our small demolition project quickly and efficiently, and the site was cleared of all debris. Would definitely use their services again!',
  },
  {
    name: 'John Smith',
    role: '',
    quote:
      'David provided excellent service and was able to accommodate our needs in a timely manner. Our site was left clean and tidy after the soil and rock removal. Highly recommend!',
  },
  {
    name: 'Sarah Lee',
    role: 'Commercial project',
    quote:
      'DB Bobcat and Tipper Hire provided top-quality excavation services for our commercial project. David was able to work within our tight deadlines and provided personalized solutions for our unique needs. Thanks again for a job well done!',
  },
];

export const gallery = Array.from({ length: 17 }, (_, i) => ({
  src: `images/gallery/a-${i + 1}.jpeg`,
  alt: `DB Bobcat and Tipper Hire job photo ${i + 1}`,
}));

export const why = [
  {
    title: 'Reliable equipment',
    body: 'Premium bobcats and tippers kept in optimal condition for the job in front of them.',
  },
  {
    title: 'Professional operator',
    body: 'David on the tools — precision, care, and safety protocols on every site.',
  },
  {
    title: 'Pricing & scheduling',
    body: 'Competitive pricing and flexible scheduling so residential and commercial work stays on time and on budget.',
  },
];
