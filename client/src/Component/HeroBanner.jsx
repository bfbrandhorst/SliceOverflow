export function HeroBanner({children}) {
    return (
        <>
        
        <img
        src="assets/HomePic2.jpg"
        className="absolute h-screen w-screen bot-0 object-cover object-bottom pointer-events-none z-[-1]"
      />
        <div className="flex flex-col items-start justify-start">{children}</div>
        </>
    )
}