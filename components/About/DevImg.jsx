import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
    return (
        <div className={`${containerStyles}`}>
            <Image src={imgSrc} sizes='(max-width: 768px) 100vw' fill priority alt="" />
        </div>
    );
};

export default DevImg;
