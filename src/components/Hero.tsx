import Image from "next/image"
import webcam from "../../public/webcam-home.png"

export default function Hero() {
    return(
        <>
            <div className="bg-gray-900 h-[88vh] flex align-middle px-72">
                <div className="text-white flex flex-col align-middle justify-center">

                    <div className="">
                        <h1 className="text-8xl font-bold mb-8"> ÚLTIMA GERAÇÃO </h1>

                        <h2 className="text-5xl font-bold mb-8"> A tecnologia para a sua geração </h2>

                        <p className="text-xl"> 
                            Inteligência não é trabalhar em torno de sistemas complicados.
                            A inteligência torna os sistemas fáceis de contornar. 
                        </p>

                    </div>
                </div>

                <Image src={webcam} alt="webcam" width={691} height={461} />
            </div> 
        </>
    )
}