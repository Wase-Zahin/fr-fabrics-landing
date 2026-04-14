const Footer = () => {
    return (
        <footer className="bg-[#1F1E17] text-gray-300 px-8 md:px-24 py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">

                {/* Company Info */}
                <div className="space-y-6">
                    <h2 className="text-white font-bold text-3xl tracking-wider leading-tight">
                        FR <br/> GROUP
                    </h2>

                    <p className="text-gray-400 leading-relaxed text-sm">
                        FR Group is a Bangladesh-based company with a diverse portfolio
                        across sourcing, logistics, manufacturing, and international trade.
                        We focus on delivering efficient solutions in both global and
                        local markets.
                    </p>

                    <div className="space-y-1 text-sm text-gray-500">
                        <p>info@frgroup.com.bd</p>
                        <p>+8801805636613</p>
                    </div>
                </div>

                {/* International Offices */}
                <div>
                    <h3 className="text-white font-semibold mb-6 tracking-wide">
                        International Offices
                    </h3>

                    <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
                        <div className="border-l border-gray-600 pl-4">
                            <p className="text-white font-medium">China</p>
                            <p>
                                Room 1104, Lehui Cheng Building<br/>
                                Gong Wang Street, Fuyang<br/>
                                Hangzhou 311400, China
                            </p>
                        </div>

                        <div className="border-l border-gray-600 pl-4">
                            <p className="text-white font-medium">India</p>
                            <p>
                                Purva Palm Beach, J-1803<br/>
                                Kyalasanhalli, K.R. Puram<br/>
                                Bengaluru, Karnataka, India
                            </p>
                        </div>

                        <div className="border-l border-gray-600 pl-4">
                            <p className="text-white font-medium">Pakistan</p>
                            <p>
                                6-E, Block H, Gulberg II<br/>
                                Lahore 54600, Pakistan
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-6 tracking-wide">
                        About Group
                    </h3>

                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li className="hover:text-white cursor-pointer transition">About Us</li>
                        <li className="hover:text-white cursor-pointer transition">CSR</li>
                        <li className="hover:text-white cursor-pointer transition">Values & Beliefs</li>
                        <li className="hover:text-white cursor-pointer transition">Contact Us</li>
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <div
                className="max-w-7xl mx-auto mt-16 mb-8 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"/>

            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                <p className="text-gray-500 text-sm">
                    2026 © FR Group — All Rights Reserved
                </p>

                <div className="flex space-x-6 text-xs uppercase text-gray-400 font-semibold tracking-widest">
                    <a href="https://www.facebook.com/share/17ToHdFF1F/"
                       className="hover:text-white transition">Facebook</a>
                    <a href="https://www.linkedin.com/company/fr-fabrics-limited/"
                       className="hover:text-white transition">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;