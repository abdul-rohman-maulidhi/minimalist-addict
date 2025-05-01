import Image from "next/image";

export default function Projects() {
    const projects = [
        {
            id: 1,
            name: 'Modern Minimalist House 6x18 Meters With Natural Elements In The Room',
            description: 'Explore a beautifully designed home that combines simplicity with natural elements, bringing warmth and tranquility indoors. From the calming indoor garden to the sleek and functional interiors, this house perfectly balances modern aesthetics with a touch of nature. ',
            videoEmbed: 'https://www.youtube.com/embed/Fzr4jyw43mE?si=mMhAMpzu-m6xecHZ',
            link: 'https://youtu.be/Fzr4jyw43mE?si=WCvYBlAqoPwYDT_4',
        },
        {
            id: 2,
            name: 'Minimalist 8x15 Meters House - Simple Interior, Luxurious Look',
            description: 'The interior design in this image features a modern minimalist style with a warm and elegant ambiance. Neutral colors like beige and gray are paired with soft lighting to create a calm and cozy atmosphere. The open layout between the living room and kitchen makes the space feel spacious, tidy, and functional.',
            videoEmbed: 'https://www.youtube.com/embed/65ZhYcNQEug?si=yCPZaRbPv_qYFAGE',
            link: 'https://youtu.be/65ZhYcNQEug?si=yCPZaRbPv_qYFAGE ',
        },
        {
            id: 3,
            name: 'Minimalist Dream House – 7,5x17 Meters, 5 Bedrooms, So Functional',
            description: 'We present a modern minimalist house design measuring 7.5x17 meters with 5 bedrooms — perfect for large or multi-generational families. The interior combines natural elements with an open layout and features an inner courtyard for added freshness and natural light.',
            videoEmbed: 'https://www.youtube.com/embed/M3hILKpmQbk?si=Xlj3hJON4fNyDesD',
            link: 'https://youtu.be/M3hILKpmQbk?si=6u1TnIFm2d9Pxlei',
        },
        {
            id: 4,
            name: 'Minimalist House Tour With Cozy Open Space – 7x16 Meters Design',
            description: 'Minimalist House Tour featuring a 7x16 meter modern design with an open space layout. This home blends natural elements with warm interiors, perfect for comfortable family living. Don\'t miss the beautiful inner courtyard that brings in natural light and fresh air',
            videoEmbed: 'https://www.youtube.com/embed/yJFMH8eLc9Y?si=56bkmf_3W-X4mWoK ',
            link: 'https://youtu.be/yJFMH8eLc9Y?si=IplUdger5Hjg-9NN ',
        },
    ];

    return (
        <div>
            <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover">
                <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white">Minimalism in Action</h1>
            </div>
            <div className="container grid grid-cols-2 gap-8 py-8">
                {projects.map((project) => (
                    <div key={project.id} className="relative overflow-hidden rounded-xl group">
                        <div className="w-full aspect-video">
                            <iframe
                                className="w-full h-full"
                                src={project.videoEmbed}
                                title={project.name}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="absolute bottom-0 flex-col items-center justify-end w-full gap-32 p-12 text-xl text-white transition duration-300 ease-in-out translate-y-full bg-gradient-to-b from-transparent to-black group-hover:translate-y-0">
                            <h1 className="text-2xl font-semibold">{project.name}</h1>
                            <p className="py-4">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


// export default function Projects() {
//     const projects = [
//         {
//             id: 1,
//             name: 'Drowing room for family time ',
//             description: 'Badroom with a clean and comfortable design for your family. charming whit a modern design. ',
//             image: '/image/project3.jpg',
//             link: '',
//         },
//         {
//             id: 2,
//             name: 'Kitchen look modern and clean',
//             description: 'kitchen look modern and clean. charming whit a modern design. ',
//             image: '/image/project2.jpg',
//             link: '',
//         },
//         {
//             id: 3,
//             name: 'Perfect living room for family time',
//             description: 'Drowing room with a clean and comfortable design for your family. charming whit a modern design. ',
//             image: '/image/project4.png',
//         },
//     ];
//     return (
//         <div className="">
//             <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover ">
//                 <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white ">OUR PROJECTS</h1>
//             </div>
//             <div className="container grid grid-cols-2 gap-8 py-8">

//                 {projects.map((project) => (
//                     <div key={project.id} className="relative overflow-hidden rounded-xl group">
//                         <div>
//                             <Image src={project.image} width={480} height={380} alt="" className="w-full" />
//                         </div>
//                         <div className="absolute bottom-0 flex-col items-center justify-end w-full gap-32 p-12 text-xl text-white transition duration-300 ease-in-out translate-y-full bg-gradient-to-b from-transparent to-black group-hover:translate-y-0">
//                             <h1 className="text-2xl font-semibold">{project.name}</h1>
//                             <p className="py-4 ">{project.description}</p>
//                         </div>
//                     </div>


//                 ))}
//             </div>
//         </div>
//     )
// }