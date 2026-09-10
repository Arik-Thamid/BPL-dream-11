import bgShadow from '../assets/bg-shadow.png'
// import bannerLogo from '../assets/banner-main.png'
const Banner = () => {
  return (
    <>
       <section className='container mx-auto relative'>
            <img className='rounded-[14px]' src={bgShadow} alt="bg-shadow" />
            {/* <img className='"absolute top-1/2 left-1/2 w-30 -translate-x-1/2 -translate-y-1/2' src={bannerLogo} alt="banner-logo" /> */}
       </section>
    </>
  )
}

export default Banner