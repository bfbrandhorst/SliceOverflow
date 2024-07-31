export function HeroBanner({children}) {
    return (
        <>
        
        <div className="h-screen bg-[url('assets/HomePic2.jpg')] bg-center bg-cover">
        <div className="h-full absolute w-full"></div>
        <div className="flex flex-row items-around justify-around h-full w-full">{children}</div>
        </div>
        </>
    )
}