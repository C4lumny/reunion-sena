export const Links = ({ imagen, text, id }) => {
    return(
        <div className={id == 1 ? "flex gap-5 items-center" : "flex gap-5 items-center text-white"}>
            <img src={imagen} alt="" className="w-10"/>
            {text}
        </div>
    );
}