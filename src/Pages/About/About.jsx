import Navbar from "../Shared/Navbar";


const About = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/ZmRpYWy/sandro-schuh-Hgw-Y-YQ1m0w-unsplash.jpg)' }}>

                <div className="hero-overlay bg-opacity-20"></div>

                <div className="flex flex-col w-full">

                    <div className="flex items-center justify-center">
                        <Navbar></Navbar>
                    </div>

                    <div>
                        <div className="p-20 text-black space-y-8">
                            <h1 className="text-3xl font-bold">About Us</h1> <hr />
                            <p>
                                Welcome to [Your Sports Event Management Company]! We are dedicated sports enthusiasts with [X years] of experience in creating exceptional sporting events. Our mission is simple: to elevate the world of sports events and turn your sporting dreams into reality.
                            </p>

                            <h1 className="text-3xl font-bold">What Sets Us Apart</h1> <hr />
                            <p>
                             
                                    Expertise: With years of experience, our seasoned team ensures every detail is perfect.
                                    Passion: We are sports enthusiasts, driven by a love for the game.
                                    Custom Solutions: Tailor-made events that align with your goals and vision.
                                

                            </p>

                            <h1 className="text-3xl font-bold">Our Services</h1> <hr />
                            <p>
                                Event Planning: From concept to execution, we handle it all.

                                Logistics: Venue selection, equipment, security - we have got you covered.

                                Technology: Cutting-edge tech for seamless registration and fan engagement.
                            </p>

                            <h1 className="text-3xl font-bold">Join Us</h1> <hr />
                            <p>
                                Whether you are an athlete, a fan, or an event organizer, partner with us to create memorable sports events. Contact us today to discuss your next sporting adventure.
                            </p>

                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default About;