import Image from 'next/image'
import { TbArrowUpRight } from "react-icons/tb"

export default function About() {
    return (
        <div>
            <div className="bg-[url('/image/about.jpg')] bg-center bg-cover">
                <h1 className="container py-32 text-6xl font-semibold tracking-widest text-center text-white lg:py-64 lg:text-left">
                    Meet Wira Ikbar,<br /> Founder of Minimalist Addict
                </h1>
            </div>

            <div className="container">
                <div className="py-8 lg:py-16">
                    <h2 className="p-4 text-3xl font-semibold text-center lg:p-20 lg:text-5xl">
                        Designing Spaces, Creating Emotion
                    </h2>
                    <p className="text-xl font-light leading-relaxed text-gray-600 lg:w-3/5">
                        Hi, I’m <span className="font-semibold text-black">Wira Ikbar</span>, an interior designer passionate about transforming minimalist spaces into immersive and expressive experiences. With a keen eye for proportion, balance, and subtle beauty, I focus on creating homes and workspaces that breathe simplicity and serenity—making minimalism not just a style, but a lifestyle.
                    </p>
                </div>

                <div className="items-center lg:flex gap-x-12">
                    <div className="w-full">
                        <Image src="/image/myself.png" width={700} height={700} alt="wira ikbar interior" className="rounded-xl" />
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <p className="pb-8 tracking-wide text-gray-700 leading-relaxed">
                            With over 2 years of experience in residential and commercial interiors, I’ve worked with clients across various cities, developing timeless designs rooted in clarity and function. I believe design should evoke calmness, and every piece in a room should have intention.
                            <br /><br />
                            My design studio emphasizes collaboration, detail, and sustainability — building interiors that adapt to your needs and evolve with your life.
                            <br /><br />
                            <span className="text-xl font-extrabold tracking-tight text-black">
                                Let’s redefine minimalism, not as less, but as better.
                            </span>
                        </p>
                        <a className="inline-flex items-center gap-1 px-6 py-3 text-sm text-white rounded-full shadow-lg bg-gray-900 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2" href="#">
                            Read More <TbArrowUpRight className="text-xl" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


// export default function About() {
//     return (
//         <div>
//             <div className="bg-[url('/image/about.jpg')] bg-center bg-cover ">
//                 <h1 className="container py-32 text-6xl font-semibold tracking-widest text-center text-white lg:py-64 lg:text-left ">WHO AM I?</h1>

//             </div>
//             <div className="container ">
//                 <div className="py-4 lg:py-14">
//                     <h2 className="p-4 text-3xl font-semibold text-center lg:p-20 lg:text-5xl">We have great idea & Interior Design</h2>
//                     <p className="text-2xl font-medium lg:w-1/2">
//                         The Digimax interior design company is a company that provides interior design services for homes, offices, apartments, and others. We provide the best interior design services for you. We have a team that is experienced in the field of interior.
//                     </p>
//                 </div>
//                 <div className="items-center lg:flex gap-x-8">
//                     <div className="w-full">
//                         <Image src="/image/gallery1123.jpg" width={700} height={700} alt="" className="" />
//                     </div>
//                     <div className="">
//                         <p className="pb-8 tracking-wide">
//                             We are an international Architects. We believe that today it is fundamental to totally rethink archi-tectural education. Confluence not only integrates new visions on society but also incorporates new methods and contemporary tools linked to creativity, production and communication. De-signed and handcrafted to hold and showcase my year two architecture portfolio, the unfolding box allows portfolio sheets…
//                             <br />
//                             <br />

//                             We are an international Architects. We believe that today it is fundamental to totally rethink archi-tectural education. Confluence not only integrates new visions on society but also incorporates new methods and contemporary tools linked to creativity, production and communication.
//                             <br />
//                             <br />
//                             <span className="text-xl font-extrabold tracking-tight">The backpiperARCH, we share a belief in the transformational power of people united in a common purpose.</span>
//                         </p>
//                         <a className="inline-flex items-center gap-1 px-6 py-3 text-sm text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2" href="">Read More <TbArrowUpRight className="text-xl" /> </a>


//                     </div>
//                 </div>
//                 <div className="lg:py-20">
//                     <div className="pt-8 pb-4">
//                         <h1 className="text-4xl font-bold tracking-wider text-center">TEAM</h1>
//                     </div>
//                     <div className="grid gap-20 py-8 lg:grid-cols-3">
//                         <div className="border-2 border-gray-500 ">
//                             <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
//                                 <Image src="/image/profile2.jpg" width={200} height={200} alt="" className="mx-auto rounded-full " />
//                                 <h2 className="py-4 text-2xl font-semibold " >BUILDING SURVEYS</h2>
//                                 <p className="text-sm text-gray-400">
//                                     Creativity is the ability to generate, create, or discover new ideas, solutions, and possibilities.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="border-2 border-gray-500 ">
//                             <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
//                                 <Image src="/image/profile1.jpg" width={200} height={200} alt="" className="mx-auto rounded-full " />
//                                 <h2 className="py-4 text-2xl font-semibold " >BUILDING SURVEYS</h2>
//                                 <p className="text-sm text-gray-400">
//                                     Creativity is the ability to generate, create, or discover new ideas, solutions, and possibilities.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="border-2 border-gray-500 ">
//                             <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
//                                 <Image src="/image/profile3.jpg" width={200} height={200} alt="" className="mx-auto rounded-full " />
//                                 <h2 className="py-4 text-2xl font-semibold " >BUILDING SURVEYS</h2>
//                                 <p className="text-sm text-gray-400">
//                                     Creativity is the ability to generate, create, or discover new ideas, solutions, and possibilities.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div >
//     )
// }