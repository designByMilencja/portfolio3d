const LinkToProject = ({src, image, alt}) => {
    return (
        <div onClick={()=> window.open(src, "_blank")}
             className="github-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
            <img
                src={image}
                alt={alt}
                className="w-1/2 h-1/2 object-contain"/>
        </div>
    );
}

export default LinkToProject;
