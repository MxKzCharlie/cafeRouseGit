function RainAnimations({img}) {
    return ( 
        <div className="w-[22rem] h-32 overflow-hidden cursor-pointer text-4xl flex justify-center items-center
        group absolute">
            <img src={img} 
            className="w-auto h-auto  transform -translate-y-[43rem]
            ease-linear duration-[7s] 
            xl:group-hover:translate-y-[44rem]" />
        </div>
    );
}

export default RainAnimations;