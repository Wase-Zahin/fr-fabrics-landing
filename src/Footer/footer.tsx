const Footer = () => {
    return (
        <footer className="bg-[#27261D] flex flex-col gap-12 text-gray-300 px-24 py-30">
            <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-40">
                {/* About / Description */}
                <div className="space-y-4">
                    <p>
                        TAD Group of the company is a Bangladeshi company that has a portfolio
                        with several businesses, we are focused on international markets & local business.
                    </p>
                    <p className="text-gray-500">hello@tadgroupbd.com</p>
                    <p className="text-gray-500">+880-2-8837230, 8837231</p>
                </div>

                {/* Group Business - two columns */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Group Business</h3>
                    <div className="grid grid-cols-2 gap-12 text-gray-400">
                        <ul className="space-y-1">
                            <li>Texweave</li>
                            <li>TAD Sourcing ltd.</li>
                            <li>TAD Logistic Ltd.</li>
                            <li>Mayc's Garments Ltd.</li>
                        </ul>
                        <ul className="space-y-1">
                            <li>TAD Engineering</li>
                            <li>TAD Aviation Ltd.</li>
                            <li>TAD Autos</li>
                            <li>KLOTHEN</li>
                            <li>KOI Thé Bangladesh</li>
                        </ul>
                    </div>
                </div>

                {/* About Group */}
                <div>
                    <h3 className="text-white font-semibold mb-3">About Group</h3>
                    <ul className="space-y-1 text-gray-400">
                        <li>About Us</li>
                        <li>CSR</li>
                        <li>Values & Beliefs</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>

            <div className="h-0.5 bg-gray-500">

            </div>
            {/* Logo + copyright */}
            <div className="flex flex-col justify-between">
                {/* Logo */}
                <div className="mb-4">
                    <h2 className="text-white font-bold text-3xl tracking-wider leading-tight">
                        TAD <br/> GROUP
                    </h2>
                </div>

                {/* Copyright */}
                <p className="text-gray-500 text-sm mb-4">
                    2025 © TAD Group – Copyright All Rights Reserved. Developed by TAD Digital
                </p>

                {/* Social Links */}
                <div className="flex space-x-4 text-xs uppercase text-gray-400 font-semibold tracking-widest">
                    <a href="#" className="hover:text-white">Facebook.</a>
                    <a href="#" className="hover:text-white">Twitter.</a>
                    <a href="#" className="hover:text-white">LinkedIn.</a>
                    <a href="#" className="hover:text-white">Instagram.</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;