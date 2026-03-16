const teamData = [
    {
        id: 1,
        image: '/assets/images/Subhakar-Alapati.jpg',
        slug: 'subhakar-alapati',
        name: 'Subhakar Alapati',
        designation: 'President',
		description: 'Dramatically leverage existing fully researched platforms vis-a-vis viral.',        
        socialNetwork: [
            { icon: "lni lni-facebook-filled",url: '#' },
			{ icon: "lni lni-linkedin",url: '#' },
			{ icon: "lni lni-instagram-original",url: '#' },
			{ icon: "lni lni-twitter-filled",url: '#' }			
        ]
       
    },
    {
        id: 2,
        image: '/assets/images/Satyajit-Reddy.jpg',
        slug: 'satyajit-reddy',
        name: 'Satyajit Reddy',
        designation: 'General Secretary',
		description: 'Dramatically leverage existing fully researched platforms vis-a-vis viral.',        
        socialNetwork: [
            { icon: "lni lni-facebook-filled",url: '#' },
			{ icon: "lni lni-linkedin",url: '#' },
			{ icon: "lni lni-instagram-original",url: '#' },
			{ icon: "lni lni-twitter-filled",url: '#' }			
        ]
       
    },
    {
        id: 3,
        image: '/assets/images/Yeshwanth-Nag.jpeg',
        slug: 'yeshwanth-nag',
        name: 'Yeshwanth Nag',
        designation: 'Membership Chair',
		description: 'Dramatically leverage existing fully researched platforms vis-a-vis viral.',        
        socialNetwork: [
            { icon: "lni lni-facebook-filled",url: '#' },
			{ icon: "lni lni-linkedin",url: '#' },
			{ icon: "lni lni-instagram-original",url: '#' },
			{ icon: "lni lni-twitter-filled",url: '#' }			
        ]
       
    },
    {
        id: 4,
        image: '/assets/images/Aman-Chainani.jpg',
        slug: 'aman-chainani',
        name: 'Aman Chainani',
        designation: 'Event Chair',
		description: 'Dramatically leverage existing fully researched platforms vis-a-vis viral.',        
        socialNetwork: [
            { icon: "lni lni-facebook-filled",url: '#' },
			{ icon: "lni lni-linkedin",url: '#' },
			{ icon: "lni lni-instagram-original",url: '#' },
			{ icon: "lni lni-twitter-filled",url: '#' }			
        ]
       
    },
    {
        id: 5,
        image: '/assets/images/Rahul.jpg',
        slug: 'rc-rahul',
        name: 'RC Rahul',
        designation: 'Creative Chair',
		description: 'Dramatically leverage existing fully researched platforms vis-a-vis viral.',        
        socialNetwork: [
            { icon: "lni lni-facebook-filled",url: '#' },
			{ icon: "lni lni-linkedin",url: '#' },
			{ icon: "lni lni-instagram-original",url: '#' },
			{ icon: "lni lni-twitter-filled",url: '#' }			
        ]
       
    },
    {
        id: 6,
        image: '/assets/images/Ashish-Kapoor.jpeg',
        slug: 'ashish-kapoor',
        name: 'Ashish Kapoor',
        designation: 'Event Chair',
		description: 'Dramatically leverage existing fully researched platforms vis-a-vis viral.',        
        socialNetwork: [
            { icon: "lni lni-facebook-filled",url: '#' },
			{ icon: "lni lni-linkedin",url: '#' },
			{ icon: "lni lni-instagram-original",url: '#' },
			{ icon: "lni lni-twitter-filled",url: '#' }			
        ]
       
    },
    {
        id: 7,
        image: '/assets/images/Chetan-Picture.jpg',
        slug: 'chetan-agarwal',
        name: 'Chetan Agarwal',
        designation: 'Finance Chair',
		description: 'Dramatically leverage existing fully researched platforms vis-a-vis viral.',        
        socialNetwork: [
            { icon: "lni lni-facebook-filled",url: '#' },
			{ icon: "lni lni-linkedin",url: '#' },
			{ icon: "lni lni-instagram-original",url: '#' },
			{ icon: "lni lni-twitter-filled",url: '#' }			
        ]
       
    }
    

    
    
]

function MembersListing()
{
return (
<>
<section className="ptb-60 team-two-section gray">
<div className="container">
  <div className="row justify-content-center">
    <div className="col-md-8 col-lg-8">
      <div className="section-heading text-center mb-5">
        <strong className="color-secondary">Our Team</strong>
        <h2>Our Members</h2>
        <span className="animate-border mr-auto m-auto mb-4" />
      </div>
    </div>
  </div>
  <div className="row justify-content-center"> 
  {teamData.map((data, index) => ( 
  <div className=" col-6 col-md-3 col-lg-3" key={index}>
      <div className="staff-member my-2"  >
        <div className="card text-center">
          <div className="card-thumb">
            <img src={data.image} alt="{data.name}" className="img-fluid circle" />
          </div>
          <div className="card-body">
            <h5 className="teacher mb-0">{data.name}</h5>
            <span>{data.designation}</span>
            <p className="teacher-quote pt-3">{data.description}</p>
            <ul className="list-inline pt-2 social"> {data.socialNetwork.map((social, index) => <li className="list-inline-item" key={index}>
                <a href={`${social.url}`} target='_blank'>
                  <span className={social.icon} />
                </a>
              </li> )} </ul>
          </div>
        </div>
        <div className="overlay d-flex align-items-center justify-content-center">
          <div className="overlay-inner">
            <a href="#" className="teacher-name">
              <h5 className="mb-0 teacher text-white">{data.name}</h5>
            </a>
            <span className="teacher-field text-white">{data.designation}</span>
            <p className="teacher-quote mt-2">"{data.description}" </p>
            <ul className="list-inline py-4 social"> {data.socialNetwork.map((social, index) => <li key={index} className="list-inline-item">
                <a href="#" target="_blank">
                  <span className={social.icon} />
                </a>
              </li> )} </ul>
            <p className="teacher-see-profile">
              <a href="#" className="btn outline-white-btn">View Profile</a>
            </p>
          </div>
        </div>
      </div>
    </div> ))} </div>
</div>
</section>
</>
);
}

export default MembersListing;