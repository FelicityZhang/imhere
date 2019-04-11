const { Seeker, Giver, Request, Review } = require('./models')

const main = async () => {

  // delete database
  await Seeker.destroy({
    where: {} 
  });
  await Giver.destroy({
    where: {}
  });


  // Add seed data here -- seeker

  const seeker1 = await Seeker.create({
    name: 'Brandon P',
    password_digest: 123,
    picture_url: 'https://randomuser.me/api/portraits/men/1.jpg',
    description: 'Needs someone who is skilled for mounting TV',
    email: 'brandonp@gmail.com'
  });

  const seeker2 = await Seeker.create({
    name: 'Wendy A',
    password_digest: 234,
    picture_url: 'https://randomuser.me/api/portraits/women/1.jpg',
    description: 'Needs someone who is skilled for mounting TV',
    email: 'wendya@gmail.com'
  });

  const seeker3 = await Seeker.create({
    name: 'Ellen B',
    password_digest: 345,
    picture_url: 'https://randomuser.me/api/portraits/women/2.jpg',
    description: 'Needs someone who is skilled for mounting TV',
    email: 'ellenb@gmail.com'
  });

  const seeker4 = await Seeker.create({
    name: 'Ken Q',
    password_digest: 456,
    picture_url: 'https://randomuser.me/api/portraits/men/2.jpg',
    description: 'Needs someone who is skilled for mounting TV',
    email: 'kenq@gmail.com'
  });

  const seeker5 = await Seeker.create({
    name: 'Allen W',
    password_digest: 567,
    picture_url: 'https://randomuser.me/api/portraits/men/3.jpg',
    description: 'Needs someone who is skilled for mounting TV',
    email: 'allenw@gmail.com'
  });

  const seeker6 = await Seeker.create({
    name: 'Randy E',
    password_digest: 678,
    picture_url: 'https://randomuser.me/api/portraits/men/4.jpg',
    description: 'Needs someone who is skilled for mounting TV',
    email: 'randye@gmail.com'
  });

  const seeker7 = await Seeker.create({
    name: 'Steven R',
    password_digest: 789,
    picture_url: 'https://randomuser.me/api/portraits/men/5.jpg',
    description: 'Needs someone who is skilled for mounting TV',
    email: 'stevenr@gmail.com'
  });


  const seeker8 = await Seeker.create({
    name: 'Maggie Q',
    password_digest: 987,
    picture_url: 'https://randomuser.me/api/portraits/women/3.jpg',
    description: 'Needs someone who is skilled for mounting TV',
    email: 'maggieq@gmail.com'
  });


  const seeker9 = await Seeker.create({
    name: 'Karen T',
    password_digest: 876,
    picture_url: 'https://randomuser.me/api/portraits/women/4.jpg',
    description: 'Needs someone who is skilled for mounting TV',
    email: 'karent@gmail.com'
  });

  const seeker10 = await Seeker.create({
    name: 'Frances Y',
    password_digest: 765,
    picture_url: 'https://randomuser.me/api/portraits/women/5.jpg',
    description: 'Needs someone who is skilled for mounting TV',
    email: 'francesy@gmail.com'
  });



  // giver

  const giver1 = await Giver.create({
    name: 'Peter W',
    gender: 'Male',
    skill: 'Mounting',
    rates: 200,
    password_digest: 654,
    picture_url: 'https://randomuser.me/api/portraits/men/6.jpg',
    description: 'Very skilled, I’ve mounted my own tv, shelving, and wall mounted desk. I have a drill with bits, and various required anchors. Years of experience painting as well.',
    email: 'peterw@gmail.com'
  });

  const giver2 = await Giver.create({
    name: 'Tommy T',
    gender: 'Male',
    skill: 'Moving',
    rates: 200,
    password_digest: 543,
    picture_url: 'https://randomuser.me/api/portraits/men/7.jpg',
    description: 'Experienced moving, large & small jobs, local & cross-country. I will load your truck or use my car for small moves. I am well reviewed and eager to please. $10 surcharge hourly for walk-ups above 3rd floor. 2 hour minimum for moves out of state.',
    email: 'tommyt@gmail.com'
  });

  const giver3 = await Giver.create({
    name: 'Chris M',
    gender: 'Male',
    skill: 'Furniture assembly',
    rates: 200,
    password_digest: 432,
    picture_url: 'https://randomuser.me/api/portraits/men/8.jpg',
    description: 'Professional Handyman with over 10 years experience in assembling and/or installing all manner of ready-to-assemble home and office furniture from Ikea, Wayfair, target or any other brand.Fully equipped with tools and hardware necessary to get the job done.',
    email: 'chrism@gmail.com'
  });

  const giver4 = await Giver.create({
    name: 'Amin A',
    gender: 'Male',
    skill: 'Home repaires',
    rates: 200,
    password_digest: 321,
    picture_url: 'https://randomuser.me/api/portraits/men/9.jpg',
    description: 'I have replaced door knobs, bathroom cabinets, door locks, and light bulbs so I believe I am fit to complete any minor home repairs.',
    email: 'amina@gmail.com'
  });

  const giver5 = await Giver.create({
    name: 'Andrew T',
    gender: 'Male',
    skill: 'Cleaning',
    rates: 200,
    password_digest: 210,
    picture_url: 'https://randomuser.me/api/portraits/men/10.jpg',
    description: 'I am a very clean person! I have cleaned my whole life wether it be at home or for most of the jobs I have had so it is second nature when I do it for someone else.',
    email: 'andrewt@gmail.com'
  });

  const giver6 = await Giver.create({
    name: 'John N',
    gender: 'Male',
    skill: 'Heavy lifting',
    rates: 200,
    password_digest: 112,
    picture_url: 'https://randomuser.me/api/portraits/men/11.jpg',
    description: 'I lift weights and have moving experience working for staffing agencies moving furniture in hotels.',
    email: 'johnn@gmail.com'
  });

  const giver7 = await Giver.create({
    name: 'Ivan S',
    gender: 'Male',
    skill: 'Delivery',
    rates: 200,
    password_digest: 113,
    picture_url: 'https://randomuser.me/api/portraits/men/12.jpg',
    description: 'If your looking for someone to do deliveries I am the right guy for the job. expenses in nyc. I do not have a vehicle. Nothing over 15 pounds also no flower deliveries.',
    email: 'ivans@gmail.com'
  });

  const giver8 = await Giver.create({
    name: 'Anthony F',
    gender: 'Male',
    skill: 'Yark work',
    rates: 200,
    password_digest: 114,
    picture_url: 'https://randomuser.me/api/portraits/men/13.jpg',
    description: 'I have worked in landscaping for a golf course before, de potting plants, raking leaves, shoving snow, etc. and am in very good shape endurance wise.',
    email: 'anthonyf@gmail.com'
  });

  const giver9 = await Giver.create({
    name: 'Medhi F',
    gender: 'Male',
    skill: 'Personal assistant',
    rates: 200,
    password_digest: 115,
    picture_url: 'https://randomuser.me/api/portraits/men/14.jpg',
    description: 'I previously worked as a receptionist at a law firm for 2 years. I currently work as an administrative assistant at property management office. I have years of experience being an assistant. My memory and multi-tasking skills are phenomenal.',
    email: 'medhif@gmail.com'
  });

  const giver10 = await Giver.create({
    name: 'Eddie S',
    gender: 'Male',
    skill: 'Packing & Unpacking',
    rates: 200,
    password_digest: 116,
    picture_url: 'https://randomuser.me/api/portraits/men/15.jpg',
    description: 'I like to treat others the way I would LOVE to be treated. My conscious will not let me sleep unless I give everything at hand 110%. You will not regret me, I guarantee it.',
    email: 'eddie@gmail.com'
  });

  const giver11 = await Giver.create({
    name: 'Amanda D',
    gender: 'Female',
    skill: 'Painting',
    rates: 200,
    password_digest: 117,
    picture_url: 'https://randomuser.me/api/portraits/women/6.jpg',
    description: 'I do Affordable + Professional paint /plaster repair! I also do fantastic wallpaper work too! Smooth no bubbles and razor sharp corners and crisp straight edges My fee is calculated hourly or part of an hour over 15 min. rounding up to next hour.',
    email: 'amanda@gmail.com'
  });

  const giver12 = await Giver.create({
    name: 'Helen J',
    gender: 'Female',
    skill: 'Plumbing',
    rates: 200,
    password_digest: 118,
    picture_url: 'https://randomuser.me/api/portraits/women/7.jpg',
    description: 'I have Plenty of experience installing and repairing faucets sinks bath and shower. Plz DONT hire me to unclog anything.',
    email: 'helenj@gmail.com'
  });

  const giver13 = await Giver.create({
    name: 'Jennifer U',
    gender: 'Female',
    skill: 'Electrical',
    rates: 200,
    password_digest: 119,
    picture_url: 'https://randomuser.me/api/portraits/women/8.jpg',
    description: 'Specializing in replacement/removal of light fitures and fuse replacements.',
    email: 'jenniferu@gmail.com'
  });

  const giver14 = await Giver.create({
    name: 'Lillian J',
    gender: 'Female',
    skill: 'Deep clean',
    rates: 200,
    password_digest: 120,
    picture_url: 'https://randomuser.me/api/portraits/women/9.jpg',
    description: 'Detail Oriented Make Sure Get Every Nick Nack Grease And Grime is Gone',
    email: 'lillianj@gmail.com'
  });

  const giver15 = await Giver.create({
    name: 'Juniper E',
    gender: 'Female',
    skill: 'Organization',
    rates: 200,
    password_digest: 121,
    picture_url: 'https://randomuser.me/api/portraits/women/10.jpg',
    description: 'From a young age, I always took pride in my organizational skills. Whether it’s simply sorting and organizing, cleaning or just making a space more efficient, I always exceed expectations and guarantee satisfaction.',
    email: 'junipere@gmail.com'
  });

  const giver16 = await Giver.create({
    name: 'Imani C',
    gender: 'Female',
    skill: 'Event staffing',
    rates: 200,
    password_digest: 122,
    picture_url: 'https://randomuser.me/api/portraits/women/11.jpg',
    description: 'I used to work as a party host at Bolwmor Lanes for two years. Hosting events of all sizes from kid parties to large corporate events.',
    email: 'imanic@gmail.com'
  });

  const giver17 = await Giver.create({
    name: 'Eliz I',
    gender: 'Female',
    skill: 'Run errands',
    rates: 200,
    password_digest: 211,
    picture_url: 'https://randomuser.me/api/portraits/women/12.jpg',
    description: 'If you need me to ship packages or go to the post office or anything else then I am the right guy for the task. i do not have a vehicle. Nothing over 15lbs. Also no flower deliveries.',
    email: 'elizi@gmail.com'
  });

  const giver18 = await Giver.create({
    name: 'Teigan W',
    gender: 'Female',
    skill: 'Wait in line',
    rates: 200,
    password_digest: 222,
    picture_url: 'https://randomuser.me/api/portraits/women/13.jpg',
    description: 'I am reliable, friendly, hard working & willing to help. Thanks for considering me.as a person who’s done his fair share of waiting in long lines, such as comic con, I have patience and endurance for this task.',
    email: 'teiganw@gmail.com'
  });

  const giver19 = await Giver.create({
    name: 'Maddy K',
    gender: 'Female',
    skill: 'Carpentry',
    rates: 200,
    password_digest: 223,
    picture_url: 'https://randomuser.me/api/portraits/women/14.jpg',
    description: 'Have worked as a professional carpenter for 4 years with in NYC. I have extensive knowledge of fabrication techniques and furniture-building.',
    email: 'maddyk@gmail.com'
  });

  const giver20 = await Giver.create({
    name: 'Nancy G',
    gender: 'Female',
    skill: 'Plumbing',
    rates: 200,
    password_digest: 225,
    picture_url: 'https://randomuser.me/api/portraits/women/15.jpg',
    description: 'Very proficient and enjoy plumbing installation the most. 10 years experience. Two hours minimum per appointment.',
    email: 'nancyg@gmail.com'
  });


  // message


  // request

  const request1 = await Request.create({
    giver_id: 1,
    seeker_id: 1,
    approval: 0,
    title: 'Mounting needed',
    start_time: 0900,
    end_time: 1100,
    description: 'I need someone to mount my TV.'
  });
  

  const request2 = await Request.create({
    giver_id: 2,
    seeker_id: 2,
    approval: 0,
    title: 'Painting needed',
    start_time: 0900,
    end_time: 1100,
    description: 'I need someone to paint my apartment.'
  });

  const request3 = await Request.create({
    giver_id: 3,
    seeker_id: 1,
    approval: 0,
    title: 'Moving needed',
    start_time: 0900,
    end_time: 1100,
    description: 'I need someone to assist me to move.'
  });

  const request4 = await Request.create({
    giver_id: 4,
    seeker_id: 1,
    approval: 0,
    title: 'Deep clean needed',
    start_time: 0900,
    end_time: 1100,
    description: 'I need someone to clean my bathroom.'
  });

  const request5 = await Request.create({
    giver_id: 4,
    seeker_id: 1,
    approval: 0,
    title: 'Plumbing needed',
    start_time: 0900,
    end_time: 1100,
    description: 'I need a plumber asap.'
  });

  const request6 = await Request.create({
    giver_id: 6,
    seeker_id: 1,
    approval: 0,
    title: 'Electrical needed',
    start_time: 0900,
    end_time: 1100,
    description: 'I need a electrical technicial.'
  });

  const request7 = await Request.create({
    giver_id: 4,
    seeker_id: 1,
    approval: 0,
    title: 'Packing & unpacking needed',
    start_time: 0900,
    end_time: 1100,
    description: 'I need someone to pack my clothings.'
  });

  const request8 = await Request.create({
    giver_id: 4,
    seeker_id: 1,
    approval: 0,
    title: 'Organization needed',
    start_time: 0900,
    end_time: 1100,
    description: 'I need someone to organize my stuff.'
  });

  const request9 = await Request.create({
    giver_id: 4,
    seeker_id: 1,
    approval: 0,
    title: 'Plumbing needed',
    start_time: 0900,
    end_time: 1100,
    description: 'I need a plumber asap.'
  });

  const request10 = await Request.create({
    giver_id: 4,
    seeker_id: 1,
    approval: 0,
    title: 'Deep clean needed',
    start_time: 0900,
    end_time: 1100,
    description: 'I need someone to clean up my bedroom.'
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


  // associations


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

  
  await giver14.setGiver(request7);
  await giver14.setGiver(review7);

  
  await giver15.setGiver(request6);
  await giver15.setGiver(review6);

  
  await giver16.setGiver(request5);
  await giver16.setGiver(review5);

  
  await giver17.setGiver(request4);
  await giver17.setGiver(review4);


  await giver18.setGiver(request3);
  await giver18.setGiver(review3);

 
  await giver19.setGiver(request2);
  await giver19.setGiver(review2);

 
  await giver20.setGiver(request1);
  await giver20.setGiver(review1);



  process.exit()
}

main()

