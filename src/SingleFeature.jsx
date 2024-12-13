import brand from "./assets/images/icon-brand-recognition.svg";

export default function SingleFeature({img, header, para}) {
    return <div className='bg-white mx-5 rounded-xl lg:mx-0'>
        <div className='bg-[#35323e] w-max rounded-full px-6 py-6 mx-auto lg:mx-0 lg:ml-5 relative bottom-8'>
            <img src={img}/>
        </div>
        <div className='text-center lg:text-left text-2xl font-bold lg:pl-5'>{header}</div>
        <div className='text-center lg:text-left mx-5 lg:mx-0 lg:pr-20 pb-8 lg:pl-5 pt-4'>{para}</div>
    </div>
}