const About = ()=>{
    return (
        <div>
            <div className="relative">
                <img 
                    src="https://cdn.downtoearth.org.in/library/large/2022-02-25/0.25794500_1645773147_istock-870402320.jpg" 
                    alt="Pic.." 
                    className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black opacity-70">
                    <p className="text-white text-4xl font-bold">"DOING NOTHING IS NOT AN OPTION OF OUR LIFE"</p>
                </div>
            </div>
            <div className="mt-4">
                <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a purus mollis, commodo augue ac, aliquet elit. Ut aliquam felis a est hendrerit fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum tincidunt lacus a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus neque in est fringilla, a lobortis mauris rhoncus. Etiam rhoncus velit a augue volutpat, nec dictum mi vulputate. Maecenas commodo urna ex, sit amet bibendum nisl iaculis in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos.
                </div>
            </div>
        </div>
    )
}

export default About;