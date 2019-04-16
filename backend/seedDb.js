const { Seeker, Giver, Request, Review, Skill } = require('./models')

const main = async () => {
try{
  // delete database
  await Seeker.destroy({
    where: {} 
  });
  await Giver.destroy({
    where: {}
  });
  await Request.destroy({
    where: {}
  });
  await Review.destroy({
    where: {}
  });
  await Skill.destroy({
    where: {}
  });



  // Add seed data here -- seeker

  const seeker1 = await Seeker.create({
    name: 'Maddy Rombes',
    password_digest: 123,
    picture_url: 'https://randomuser.me/api/portraits/men/1.jpg',
    description: 'Needs someone who is skilled for mounting TV',
    email: 'maddyr@gmail.com'
  });

  const seeker2 = await Seeker.create({
    name: 'Wendy Applebottom',
    password_digest: 234,
    picture_url: 'https://randomuser.me/api/portraits/women/1.jpg',
    description: 'Needs someone who is skilled for Furniture assembly',
    email: 'wendya@gmail.com'
  });

  const seeker3 = await Seeker.create({
    name: 'Ellen Benice',
    password_digest: 345,
    picture_url: 'https://randomuser.me/api/portraits/women/2.jpg',
    description: 'Needs someone who is skilled for Deep clean',
    email: 'ellenb@gmail.com'
  });

  const seeker4 = await Seeker.create({
    name: 'Ken Quarters',
    password_digest: 456,
    picture_url: 'https://randomuser.me/api/portraits/men/2.jpg',
    description: 'Needs someone who is skilled for Home repaires',
    email: 'kenq@gmail.com'
  });

  const seeker5 = await Seeker.create({
    name: 'Allen Windell',
    password_digest: 567,
    picture_url: 'https://randomuser.me/api/portraits/men/3.jpg',
    description: 'Needs someone who is skilled for Yark work',
    email: 'allenw@gmail.com'
  });

  const seeker6 = await Seeker.create({
    name: 'Randy Earnst',
    password_digest: 678,
    picture_url: 'https://randomuser.me/api/portraits/men/4.jpg',
    description: 'Needs someone who is skilled for Packing & Unpacking',
    email: 'randye@gmail.com'
  });

  const seeker7 = await Seeker.create({
    name: 'Steven Rodgers',
    password_digest: 789,
    picture_url: 'https://randomuser.me/api/portraits/men/5.jpg',
    description: 'Needs someone who is skilled for Painting',
    email: 'stevenr@gmail.com'
  });


  const seeker8 = await Seeker.create({
    name: 'Maggie Simpson',
    password_digest: 987,
    picture_url: 'https://randomuser.me/api/portraits/women/3.jpg',
    description: 'Needs someone who is skilled for Plumbing',
    email: 'maggieq@gmail.com'
  });


  const seeker9 = await Seeker.create({
    name: 'Karen Tonelle',
    password_digest: 876,
    picture_url: 'https://randomuser.me/api/portraits/women/4.jpg',
    description: 'Needs someone who is skilled for Electrical',
    email: 'karent@gmail.com'
  });

  const seeker10 = await Seeker.create({
    name: 'Frances Yancy',
    password_digest: 765,
    picture_url: 'https://randomuser.me/api/portraits/women/5.jpg',
    description: 'Needs someone who is skilled for Carpentry',
    email: 'francesy@gmail.com'
  });



  // giver

  const giver1 = await Giver.create({
    name: 'Juniper Alcorn',
    age: 25,
    gender: 'Male',
    rate: 200,
    password_digest: '$2b$11$z819YhlmM3Z9QE37P7jKpOKetJCBTZfwQR6A55OC9Q95eGcf30cW.',
    picture_url: 'https://randomuser.me/api/portraits/men/6.jpg',
    description: 'Very skilled, I’ve mounted my own tv, shelving, and wall mounted desk. I have a drill with bits, and various required anchors. Years of experience painting as well.',
    email: 'junipera@gmail.com'
  });

  const giver2 = await Giver.create({
    name: 'Imani Paul',
    age: 39,
    gender: 'Male',
    rate: 100,
    password_digest: '$2b$11$z819YhlmM3Z9QE37P7jKpOKetJCBTZfwQR6A55OC9Q95eGcf30cW.',
    picture_url: 'https://randomuser.me/api/portraits/men/7.jpg',
    description: 'Experienced moving, large & small jobs, local & cross-country. I will load your truck or use my car for small moves. I am well reviewed and eager to please. $10 surcharge hourly for walk-ups above 3rd floor. 2 hour minimum for moves out of state.',
    email: 'imanip@gmail.com'
  });

  const giver3 = await Giver.create({
    name: 'Elizabeth Moy',
    age: 26,
    gender: 'Male',
    rate: 50,
    password_digest: '$2b$11$z819YhlmM3Z9QE37P7jKpOKetJCBTZfwQR6A55OC9Q95eGcf30cW.',
    picture_url: 'https://randomuser.me/api/portraits/men/8.jpg',
    description: 'Professional Handyman with over 10 years experience in assembling and/or installing all manner of ready-to-assemble home and office furniture from Ikea, Wayfair, target or any other brand.Fully equipped with tools and hardware necessary to get the job done.',
    email: 'elizabethm@gmail.com'
  });

  const giver4 = await Giver.create({
    name: 'Teigan Hockman',
    age: 29,
    gender: 'Male',
    rate: 100,
    password_digest: '$2b$11$z819YhlmM3Z9QE37P7jKpOKetJCBTZfwQR6A55OC9Q95eGcf30cW.',
    picture_url: 'https://randomuser.me/api/portraits/men/9.jpg',
    description: 'I have replaced door knobs, bathroom cabinets, door locks, and light bulbs so I believe I am fit to complete any minor home repairs.',
    email: 'teiganh@gmail.com'
  });

  const giver5 = await Giver.create({
    name: 'Tara Fenton',
    age: 42,
    gender: 'Male',
    rate: 50,
    password_digest: '$2b$11$z819YhlmM3Z9QE37P7jKpOKetJCBTZfwQR6A55OC9Q95eGcf30cW.',
    picture_url: 'https://randomuser.me/api/portraits/men/10.jpg',
    description: 'I am a very clean person! I have cleaned my whole life wether it be at home or for most of the jobs I have had so it is second nature when I do it for someone else.',
    email: 'taraf@gmail.com'
  });

  const giver6 = await Giver.create({
    name: 'John Ngyun',
    age: 38,
    gender: 'Male',
    rate: 150,
    password_digest: '$2b$11$z819YhlmM3Z9QE37P7jKpOKetJCBTZfwQR6A55OC9Q95eGcf30cW.',
    picture_url: 'https://randomuser.me/api/portraits/men/11.jpg',
    description: 'I lift weights and have moving experience working for staffing agencies moving furniture in hotels.',
    email: 'johnn@gmail.com'
  });

  const giver7 = await Giver.create({
    name: 'Ivan Sanderhoff',
    age: 34,
    gender: 'Male',
    rate: 90,
    password_digest: '$2b$11$z819YhlmM3Z9QE37P7jKpOKetJCBTZfwQR6A55OC9Q95eGcf30cW.',
    picture_url: 'https://randomuser.me/api/portraits/men/12.jpg',
    description: 'If your looking for someone to do deliveries I am the right guy for the job. expenses in nyc. I do not have a vehicle. Nothing over 15 pounds also no flower deliveries.',
    email: 'ivans@gmail.com'
  });

  const giver8 = await Giver.create({
    name: 'Anthony Ferdinand',
    age: 35,
    gender: 'Male',
    rate: 80,
    password_digest: '$2b$11$z819YhlmM3Z9QE37P7jKpOKetJCBTZfwQR6A55OC9Q95eGcf30cW.',
    picture_url: 'https://randomuser.me/api/portraits/men/13.jpg',
    description: 'I have worked in landscaping for a golf course before, de potting plants, raking leaves, shoving snow, etc. and am in very good shape endurance wise.',
    email: 'anthonyf@gmail.com'
  });

  const giver9 = await Giver.create({
    name: 'Medhi Fidelah',
    age: 47,
    gender: 'Male',
    rate: 70,
    password_digest: '$2b$11$z819YhlmM3Z9QE37P7jKpOKetJCBTZfwQR6A55OC9Q95eGcf30cW.',
    picture_url: 'https://randomuser.me/api/portraits/men/14.jpg',
    description: 'I previously worked as a receptionist at a law firm for 2 years. I currently work as an administrative assistant at property management office. I have years of experience being an assistant. My memory and multi-tasking skills are phenomenal.',
    email: 'medhif@gmail.com'
  });

  const giver10 = await Giver.create({
    name: 'Eddie Scores',
    age: 32,
    gender: 'Male',
    rate: 100,
    password_digest: '$2b$11$z819YhlmM3Z9QE37P7jKpOKetJCBTZfwQR6A55OC9Q95eGcf30cW.',
    picture_url: 'https://randomuser.me/api/portraits/men/15.jpg',
    description: 'I like to treat others the way I would LOVE to be treated. My conscious will not let me sleep unless I give everything at hand 110%. You will not regret me, I guarantee it.',
    email: 'eddie@gmail.com'
  });

  const giver11 = await Giver.create({
    name: 'Sean Mercer',
    age: 42,
    gender: 'Female',
    rate: 50,
    password_digest: '$2b$11$z819YhlmM3Z9QE37P7jKpOKetJCBTZfwQR6A55OC9Q95eGcf30cW.',
    picture_url: 'https://randomuser.me/api/portraits/women/6.jpg',
    description: 'I do Affordable + Professional paint /plaster repair! I also do fantastic wallpaper work too! Smooth no bubbles and razor sharp corners and crisp straight edges My fee is calculated hourly or part of an hour over 15 min. rounding up to next hour.',
    email: 'seanm@gmail.com'
  });

  const giver12 = await Giver.create({
    name: 'Bruno Galvao',
    age: 38,
    gender: 'Female',
    rate: 60,
    password_digest: '$2b$11$z819YhlmM3Z9QE37P7jKpOKetJCBTZfwQR6A55OC9Q95eGcf30cW.',
    picture_url: 'https://randomuser.me/api/portraits/women/7.jpg',
    description: 'I have Plenty of experience installing and repairing faucets sinks bath and shower. Plz DONT hire me to unclog anything.',
    email: 'brunog@gmail.com'
  });

  const giver13 = await Giver.create({
    name: 'Leo Rodriguez',
    age: 28,
    gender: 'Female',
    rate: 60,
    password_digest: '$2b$11$z819YhlmM3Z9QE37P7jKpOKetJCBTZfwQR6A55OC9Q95eGcf30cW.',
    picture_url: 'https://randomuser.me/api/portraits/women/8.jpg',
    description: 'Specializing in replacement/removal of light fitures and fuse replacements.',
    email: 'leor@gmail.com'
  });

  const giver14 = await Giver.create({
    name: 'David Whitlatch',
    age: 47,
    gender: 'Female',
    rate: 80,
    password_digest: '$2b$11$z819YhlmM3Z9QE37P7jKpOKetJCBTZfwQR6A55OC9Q95eGcf30cW.',
    picture_url: 'https://randomuser.me/api/portraits/women/9.jpg',
    description: 'Detail Oriented Make Sure Get Every Nick Nack Grease And Grime is Gone',
    email: 'davidw@gmail.com'
  });

  const giver15 = await Giver.create({
    name: 'Galbert ONeil',
    age: 40,
    gender: 'Female',
    rate: 90,
    password_digest: '$2b$11$z819YhlmM3Z9QE37P7jKpOKetJCBTZfwQR6A55OC9Q95eGcf30cW.',
    picture_url: 'https://randomuser.me/api/portraits/women/10.jpg',
    description: 'From a young age, I always took pride in my organizational skills. Whether it’s simply sorting and organizing, cleaning or just making a space more efficient, I always exceed expectations and guarantee satisfaction.',
    email: 'galberto@gmail.com'
  });

  const giver16 = await Giver.create({
    name: 'Alane Ndong',
    age: 36,
    gender: 'Female',
    rate: 100,
    password_digest: '$2b$11$z819YhlmM3Z9QE37P7jKpOKetJCBTZfwQR6A55OC9Q95eGcf30cW.',
    picture_url: 'https://randomuser.me/api/portraits/women/11.jpg',
    description: 'I used to work as a party host at Bolwmor Lanes for two years. Hosting events of all sizes from kid parties to large corporate events.',
    email: 'alanen@gmail.com'
  });

  const giver17 = await Giver.create({
    name: 'Ed Roesch',
    age: 27,
    gender: 'Female',
    rate: 100,
    password_digest: '$2b$11$z819YhlmM3Z9QE37P7jKpOKetJCBTZfwQR6A55OC9Q95eGcf30cW.',
    picture_url: 'https://randomuser.me/api/portraits/women/12.jpg',
    description: 'If you need me to ship packages or go to the post office or anything else then I am the right guy for the task. i do not have a vehicle. Nothing over 15lbs. Also no flower deliveries.',
    email: 'edr@gmail.com'
  });

  const giver18 = await Giver.create({
    name: 'Solito Reyes',
    age: 30,
    gender: 'Female',
    rate: 80,
    password_digest: 222,
    picture_url: 'https://randomuser.me/api/portraits/women/13.jpg',
    description: 'I am reliable, friendly, hard working & willing to help. Thanks for considering me.as a person who’s done his fair share of waiting in long lines, such as comic con, I have patience and endurance for this task.',
    email: 'solitor@gmail.com'
  });

  const giver19 = await Giver.create({
    name: 'Jeremy Zimmerman',
    age: 28,
    gender: 'Female',
    rate: 90,
    password_digest: 223,
    picture_url: 'https://randomuser.me/api/portraits/women/14.jpg',
    description: 'Have worked as a professional carpenter for 4 years with in NYC. I have extensive knowledge of fabrication techniques and furniture-building.',
    email: 'jeremyz@gmail.com'
  });

  const giver20 = await Giver.create({
    name: 'Soren Soroush',
    age: 35,
    gender: 'Female',
    rate: 100,
    password_digest: 225,
    picture_url: 'https://randomuser.me/api/portraits/women/15.jpg',
    description: 'Very proficient and enjoy plumbing installation the most. 10 years experience. Two hours minimum per appointment.',
    email: 'nancyg@gmail.com'
  });

  const giver21 = await Giver.create({
    name: 'Michelle Redd',
    age: 29,
    gender: 'Female',
    rate: 65,
    password_digest: 225,
    picture_url: 'https://randomuser.me/api/portraits/women/16.jpg',
    description: 'I am an artist who loves to teach children.',
    email: 'micheller@gmail.com'
  });

  const giver22 = await Giver.create({
    name: 'Sandy McDougal',
    age: 22,
    gender: 'Female',
    rate: 95,
    password_digest: 225,
    picture_url: 'https://randomuser.me/api/portraits/women/17.jpg',
    description: 'Singing is me favorite thing to do. Hire me for your next event of any size.',
    email: 'sandym@gmail.com'
  });

  const giver23 = await Giver.create({
    name: 'Rachelle Smith',
    age: 43,
    gender: 'Female',
    rate: 55,
    password_digest: 225,
    picture_url: 'https://randomuser.me/api/portraits/women/18.jpg',
    description: 'I have 15 years of experience in the cleaning business.',
    email: 'rachelle@gmail.com'
  });

  const giver24 = await Giver.create({
    name: 'Toni Marrow',
    age: 26,
    gender: 'Female',
    rate: 270,
    password_digest: 225,
    picture_url: 'https://randomuser.me/api/portraits/women/19.jpg',
    description: 'I am an established hair dresser. My passion in life is making women even more beautiful!',
    email: 'tonimarrow@gmail.com'
  });

  const giver25 = await Giver.create({
    name: 'Nicole Rodriguez',
    age: 33,
    gender: 'Female',
    rate: 150,
    password_digest: 225,
    picture_url: 'https://randomuser.me/api/portraits/women/20.jpg',
    description: 'Certified CPA, as well as MBA. If you need any help with your taxes, please let me know.',
    email: 'nicolerodriguez@gmail.com'
  });


  const giver26 = await Giver.create({
    name: 'Inara Pinchenzo',
    age: 19,
    gender: 'Female',
    rate: 175,
    password_digest: 225,
    picture_url: 'https://randomuser.me/api/portraits/women/21.jpg',
    description: 'I am in dance school and looking to get out and perform, at the appropriate venue. Serious inquiries only please.',
    email: 'inarap@gmail.com'
  });

  const giver27 = await Giver.create({
    name: 'Rhoda Kingston',
    age: 49,
    gender: 'Female',
    rate: 175,
    password_digest: 225,
    picture_url: 'https://randomuser.me/api/portraits/women/22.jpg',
    description: 'Professional organizational expert for hire.',
    email: 'rhodak@gmail.com'
  });

  const giver28 = await Giver.create({
    name: 'Shondelle Watkins',
    age: 34,
    gender: 'Female',
    rate: 25,
    password_digest: 225,
    picture_url: 'https://randomuser.me/api/portraits/women/23.jpg',
    description: 'Childcare services provided for kids over 2 years old.',
    email: 'shondelle@gmail.com'
  });

  const giver29 = await Giver.create({
    name: 'Samantha Kristos',
    age: 24,
    gender: 'Female',
    rate: 150,
    password_digest: 225,
    picture_url: 'https://randomuser.me/api/portraits/women/24.jpg',
    description: 'Painter who loves to teach, kids or adults',
    email: 'shondelle@gmail.com'
  });

  const giver30 = await Giver.create({
    name: 'Lilah Weiss',
    age: 40,
    gender: 'Female',
    rate: 85,
    password_digest: 225,
    picture_url: 'https://randomuser.me/api/portraits/women/25.jpg',
    description: 'I am a teacher (reading specialist) who can help tutor your child.',
    email: 'lilah@gmail.com'
  });
  
  // message


  // Requests

  const request1 = await Request.create({
    giver_id: 1,
    seeker_id: 1,
    approval: 1,
    title: 'Mounting needed',
    start_time: '2019-04-18 15:00:00', 
    end_time: '2019-04-18 17:00:00',
    description: 'I need someone to mount my TV.',
    complete: 1
  });
  

  const request2 = await Request.create({
    giver_id: 2,
    seeker_id: 2,
    approval: 0,
    title: 'Painting needed',
    start_time: '2019-04-18 09:00:00',
    end_time: '2019-04-18 17:00:00',
    description: 'I need someone to paint my apartment.',
    complete: 0
  });

  const request3 = await Request.create({
    giver_id: 3,
    seeker_id: 1,
    approval: 1,
    title: 'Moving needed',
    start_time: '2019-04-18 09:00:00',
    end_time: '2019-04-18 18:00:00',
    description: 'I need someone to assist me to move.',
    complete: 1
  });

  const request4 = await Request.create({
    giver_id: 4,
    seeker_id: 1,
    approval: 1,
    title: 'Deep clean needed',
    start_time: '2019-04-18 09:00:00',
    end_time: '2019-04-18 17:00:00',
    description: 'I need someone to clean my bathroom.',
    complete: 1
  });

  const request5 = await Request.create({
    giver_id: 4,
    seeker_id: 1,
    approval: 0,
    title: 'Plumbing needed',
    start_time: '2019-04-18 09:00:00',
    end_time: '2019-04-18 11:00:00',
    description: 'I need a plumber asap.',
    complete: 0
  });

  const request6 = await Request.create({
    giver_id: 6,
    seeker_id: 1,
    approval: 0,
    title: 'Electrical needed',
    start_time: '2019-04-18 17:00:00',
    end_time: '2019-04-18 19:00:00',
    description: 'I need a electrical technicial.',
    complete: 0
  });

  const request7 = await Request.create({
    giver_id: 4,
    seeker_id: 1,
    approval: 0,
    title: 'Packing & unpacking needed',
    start_time: '2019-04-18 10:00:00',
    end_time: '2019-04-18 19:00:00',
    description: 'I need someone to pack my clothings.',
    complete: 0
  });

  const request8 = await Request.create({
    giver_id: 4,
    seeker_id: 1,
    approval: 1,
    title: 'Organization needed',
    start_time: '2019-04-18 09:00:00',
    end_time: '2019-04-18 17:00:00',
    description: 'I need someone to organize my stuff.',
    complete: 1
  });

  const request9 = await Request.create({
    giver_id: 4,
    seeker_id: 1,
    approval: 0,
    title: 'Plumbing needed',
    start_time: '2019-04-18 17:00:00',
    end_time: '2019-04-18 19:00:00',
    description: 'I need a plumber asap.',
    complete: 0
  });

  const request10 = await Request.create({
    giver_id: 4,
    seeker_id: 1,
    approval: 0,
    title: 'Deep clean needed',
    start_time: '2019-04-18 09:00:00',
    end_time: '2019-04-18 18:00:00',
    description: 'I need someone to clean up my bedroom.',
    complete: 0

  });


  

  const request11 = await Request.create({
    giver_id: 1,
    seeker_id: 1,
    approval: 1,
    title: 'Plese do my nails',
    start_time: '2019-04-18 12:00:00',
    end_time: '2019-04-18 18:00:00',
    description: 'I have a party to go to.',
    complete: 0

  });

 
  const request12 = await Request.create({
    giver_id: 1,
    seeker_id: 1,
    approval: 1,
    title: 'Wardrobe Design',
    start_time: '2019-04-18 10:00:00',
    end_time: '2019-04-18 16:00:00',
    description: 'My husband and I will be heading out to dinner and a show for our anniversary. It is a very special evening and I want to be dressed perfectly and would like some professional assistance.',
    complete: 0

  });

    const request13 = await Request.create({
      giver_id: 1,
      seeker_id: 1,
      approval: 1,
      title: 'Shopping',
      start_time: '2019-04-18 15:00:00',
      end_time: '2019-04-18 17:00:00',
      description: 'Next week I will be too busy to get my groceries from the farmers market.',
      complete: 0

    });

    const request14 = await Request.create({
      giver_id: 1,
      seeker_id: 1,
      approval: 1,
      title: 'Arts and Crafts',
      start_time: '2019-04-18 08:30:00',
      end_time: '2019-04-18 10:00:00',
      description: 'I would like to keep my 2 kids busy on Sunday mornings and could use a hand. Please help teach them how to paint and be creative.',
      complete: 0

    }); 

    const request15 = await Request.create({
      giver_id: 1,
      seeker_id: 1,
      approval: 1,
      title: 'Singer',
      start_time: '2019-04-18 18:00:00',
      end_time: '2019-04-18 20:00:00',
      description: 'My girlfriend is coming over and I will be cooking her dinner. Trying to get the mood right and if you could stop by and serenade us while we eat that would be awesome!',
      complete: 0
    }); 
  // review


  const review1 = await Review.create({
    request_id: 1,
    rating: 7,
    content: 'He was fantastic! He arrived on time and completed the task quickly and efficiently. He even offered to clean up afterwards. Would definitely hire him again! '
  });
 
  const review2 = await Review.create({
    request_id: 2,
    rating: 8,
    content: 'He was amazing. Stayed much longer than anticipated and helped with multiple jobs. Could not have been more professional. Highly recommend!'
  });

  const review3 = await Review.create({
    request_id: 3,
    rating: 6,
    content: 'On time, friendly, efficient, and competent. I would definitely recommend him. He did a great job.'
  });

  const review4 = await Review.create({
    request_id: 4,
    rating: 8,
    content: 'Fantastic! Hung my coat rack on a plaster and lathe wall in no time. She was very knowledgable about the building materials. '
  });

  const review5 = await Review.create({
    request_id: 5,
    rating: 9,
    content: 'Super quick, timely, and even had day-of avails. Would absolutely recommend to anyone looking to mount their tv!'
  });

  const review6 = await Review.create({
    request_id: 6,
    rating: 8,
    content: 'He consulted me before making any major decisions that would increase the cost of my task. He answered all of my questions and was very helpful. Would recommend!'
  });

  const review7 = await Review.create({
    request_id: 7,
    rating: 6,
    content: 'Amazing perfessional job!  I would have him come again!'
  });

  const review8 = await Review.create({
    request_id: 8,
    rating: 8,
    content: 'He’s super quick and professional. I hired him to remove a tv mounted on a brick wall. He then helped me disassemble my bed frame and even asked if there was anything else I needed to get the most out of my time frame.'
  });

  const review9 = await Review.create({
    request_id: 9,
    rating: 7,
    content: 'Amazing! Cannot wait to hire him again. '
  });

  const review10 = await Review.create({
    request_id: 10,
    rating: 9,
    content: 'Mounted a large picture and a mirror. Came well equipped and completed both successfully. Very friendly and nice person, would highly recommend.'
  });

  // Skills

  const skill1 = await Skill.create({
    description: 'Mounting'
  });

  const skill2 = await Skill.create({
    description: 'Moving'
  });

  const skill3 = await Skill.create({
    description: 'Furniture assembly'
  });

  const skill4 = await Skill.create({
    giver_id: 3,
    description: 'Home repaires'
  });

  const skill5 = await Skill.create({
    description: 'Cleaning'
  });

  const skill6 = await Skill.create({
    description: 'Heavy lifting'
  });

  const skill7 = await Skill.create({
    description: 'Delivery'
  });

  const skill8 = await Skill.create({
    description: 'Yark work'
  });

  const skill9 = await Skill.create({
    description: 'Personal assistant'
  });

  const skill10 = await Skill.create({
    description: 'Packing & Unpacking'
  });

  const skill11 = await Skill.create({
    description: 'Light fixtures'
  });
  
  const skill12= await Skill.create({
      description: 'Air Conditioner repair'
    });
  const skill13 = await Skill.create({
      description: 'House sitting'
    });
  const skill14 = await Skill.create({
      description: 'Dog Walking'
    });
  const skill15 = await Skill.create({
      description: 'Child care (0 months to 2 years)'
    });
  const skill16 = await Skill.create({
      description: 'Child care (2 years and older)'
    });
  const skill17 = await Skill.create({
      description: 'Elder care'
    });
  const skill18 = await Skill.create({
      description: 'Furniture restoration'
    });
  const skill19 = await Skill.create({
      description: 'Grocery shopping'
    });
  const skill20 = await Skill.create({
      description: 'Afterschool pickup'
    });
  const skill21 = await Skill.create({
      description: 'Life coach'
    });
  const skill22 = await Skill.create({
      description: 'Makeup design'
    });
  const skill23 = await Skill.create({
      description: 'Hair stylist'
    });
  const skill24 = await Skill.create({
      description: 'Nail stylist'
    });
  const skill25 = await Skill.create({
      description: 'Weight loss specialist'
    });
  const skill26 = await Skill.create({
      description: 'Wardrobe consultant'
    });
  const skill27 = await Skill.create({
      description: 'Wardrobe stylist'
    });
  const skill28 = await Skill.create({
      description: 'General car maintanance'
    });
  const skill29 = await Skill.create({
      description: 'Seamstress'
    });
  const skill30= await Skill.create({
      description: 'Closet organization'
    });
  const skill31 = await Skill.create({
      description: 'Personal trainer'
    });
  const skill32 = await Skill.create({
      description: 'Wait in line'
    });
  const skill33 = await Skill.create({
      description: 'Photography'
    });
  const skill34 = await Skill.create({
      description: 'Accounting'
    });
  const skill35 = await Skill.create({
      description: 'Office Organization'
    });
  const skill36 = await Skill.create({
      description: 'Graphic Design'
    });
  const skill37 = await Skill.create({
      description: 'Carpentry'
    });
  const skill38 = await Skill.create({
      description: 'Cooking'
    });
  const skill39 = await Skill.create({
      description: 'Baking'
    });
  const skill40 = await Skill.create({
      description: 'Party Planning'
    });
  const skill41 = await Skill.create({
      description: 'Interior design'
    });
  const skill42 = await Skill.create({
      description: 'Art deco'
    });
  const skill43 = await Skill.create({
      description: 'Bicycle repair/assistance'
    });
  const skill44 = await Skill.create({
      description: 'Packing & Unpacking'
    });
  const skill45 = await Skill.create({
      description: 'Social media enhancer'
    });
  const skill46 = await Skill.create({
      description: 'Party promotion'
    });
  const skill47 = await Skill.create({
      description: 'Singer'
    });
  const skill48 = await Skill.create({
      description: 'Pet trainer'
    });
  const skill49 = await Skill.create({
      description: 'Business advisor'
    });
  const skill50 = await Skill.create({
      description: 'Pianist'
    });
  const skill51 = await Skill.create({
      description: 'Drummer'
    });
  const skill52 = await Skill.create({
      description: 'Street Artist'
    });
  const skill53 = await Skill.create({
      description: 'Dancer'
    });
  const skill54 = await Skill.create({
      description: 'Guitarist'
    });




    

  // associations
  await skill1.setGivers([giver1, giver2, giver3])
  await skill2.setGivers([giver6, giver5, giver7])
  await skill3.setGivers([giver7, giver3, giver2])
  await skill4.setGivers([giver8, giver5, giver9])
  await skill5.setGivers([giver4, giver2, giver1])
  await skill6.setGivers([giver6, giver3, giver8])
  await skill7.setGivers([giver7, giver2, giver3])
  await skill8.setGivers([giver1, giver2, giver6])
  await skill9.setGivers([giver1, giver7, giver3])
  await skill10.setGivers([giver4, giver2, giver3])
  await skill11.setGivers([giver1, giver2, giver6])
  await skill12.setGivers([giver6, giver2, giver8])
  await skill13.setGivers([giver3, giver2, giver3])
  await skill14.setGivers([giver1, giver2, giver3])
  await skill15.setGivers([giver1, giver2, giver3])
  await skill16.setGivers([giver1, giver2, giver3])
  await skill17.setGivers([giver15, giver8, giver3])
  await skill18.setGivers([giver1, giver2, giver3])
  await skill19.setGivers([giver5, giver2, giver3])
  await skill20.setGivers([giver1, giver7, giver3])
  await skill21.setGivers([giver1, giver2, giver9])
  await skill22.setGivers([giver1, giver2, giver3])
  await skill23.setGivers([giver3, giver6, giver3])
  await skill24.setGivers([giver1, giver7, giver3])
  await skill25.setGivers([giver4, giver2, giver3])
  await skill26.setGivers([giver1, giver2, giver8])
  await skill27.setGivers([giver7, giver2, giver3])
  await skill28.setGivers([giver1, giver2, giver9])
  await skill29.setGivers([giver1, giver2, giver3])
  await skill30.setGivers([giver6, giver2, giver5])
  await skill31.setGivers([giver1, giver2, giver3])
  await skill32.setGivers([giver1, giver2, giver3])
  await skill33.setGivers([giver5, giver2, giver3])
  await skill34.setGivers([giver1, giver7, giver3])
  await skill35.setGivers([giver1, giver2, giver8])
  await skill36.setGivers([giver4, giver2, giver3])
  await skill37.setGivers([giver1, giver2, giver3])
  await skill38.setGivers([giver6, giver2, giver3])
  await skill39.setGivers([giver1, giver2, giver8])
  await skill40.setGivers([giver7, giver2, giver3])
  await skill41.setGivers([giver1, giver7, giver3])
  await skill42.setGivers([giver4, giver2, giver3])
  await skill43.setGivers([giver1, giver2, giver3])
  await skill44.setGivers([giver1, giver7, giver3])
  await skill45.setGivers([giver5, giver2, giver3])
  await skill46.setGivers([giver1, giver2, giver3])
  await skill47.setGivers([giver1, giver2, giver8])
  await skill48.setGivers([giver7, giver2, giver3])
  await skill49.setGivers([giver1, giver2, giver7])
  await skill50.setGivers([giver18, giver2, giver3])
  await skill51.setGivers([giver1, giver2, giver3])
  await skill52.setGivers([giver9, giver2, giver3])
  await skill53.setGivers([giver1, giver2, giver8])
  await skill54.setGivers([giver1, giver2, giver3])



  

  await seeker1.setSeeker(request1);
  await seeker1.setSeeker(review1);

  
  await seeker2.setSeeker(request2);
  await seeker2.setSeeker(review2);

  
  await seeker3.setSeeker(request3);
  await seeker3.setSeeker(review3);

  
  await seeker4.setSeeker(request4);
  await seeker4.setSeeker(review4);

  
  await seeker5.setSeeker(request5);
  await seeker5.setSeeker(review5);

  
  await seeker6.setSeeker(request6);
  await seeker6.setSeeker(review6);

  
  await seeker7.setSeeker(request7);
  await seeker7.setSeeker(review7);

 
  await seeker8.setSeeker(request8);
  await seeker8.setSeeker(review8);

  
  await seeker9.setSeeker(request9);
  await seeker9.setSeeker(review9);

  
  await seeker10.setSeeker(request10);
  await seeker10.setSeeker(review10);

  

  await giver1.setGiver(request1);
  await giver1.setGiver(review1);

  
  await giver2.setGiver(request2);
  await giver2.setGiver(review2);

  
  await giver3.setGiver(request3);
  await giver3.setGiver(review3);


  await giver4.setGiver(request4);
  await giver4.setGiver(review4);


  await giver5.setGiver(request5);
  await giver5.setGiver(review5);

  
  await giver6.setGiver(request6);
  await giver6.setGiver(review6);


  await giver7.setGiver(request7);
  await giver7.setGiver(review7);

 
  await giver8.setGiver(request8);
  await giver8.setGiver(review8);

  
  await giver9.setGiver(request9);
  await giver9.setGiver(review9);

 
  await giver10.setGiver(request10);
  await giver10.setGiver(review10);

 
  await giver11.setGiver(request10);
  await giver11.setGiver(review10);

  
  await giver12.setGiver(request9);
  await giver12.setGiver(review9);

  
  await giver13.setGiver(request8);
  await giver13.setGiver(review8);


  

  process.exit()
}catch (error) {
}
}

main();


 