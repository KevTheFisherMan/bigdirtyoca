import RM from './pngwing.com (2).png';

export default function Example() {
  return (

    <div className="py-12 bg-custombg">
      <div className="px-4 font-serif sm:px-6 lg:ml-20 lg:px-16">
        <div className="lg:text-left">

            <p className="mt-2 text-3xl leading-8 tracking-tight text-white font-strong sm:text-4xl">
            <strong>Roadmap</strong>
          </p>
          <br></br>
          <div className="flex items-center justify-between">
          <h1 className="max-w-4xl mt-4 mb-10 text-xl font-medium text-white lg:text-left">
          Big Dirty Clean-Up Association NFT Project is an Ocean clean up effort in NFT form with Crypto Prizes. There will be <strong className="text-2xl">10,000</strong> unique Deckhands available.
        Additionally we will be having crypto draws from <strong className="text-2xl">$2,500-$50,000</strong> along the way, letting one lucky deckhand walk away with <strong className="text-2xl">$50,000</strong> in Crypto.com CRO 
        <br></br>
        <br></br>

        We pledge to remove a pound of garbage per dollar spent on Deckhands from the oceans and waterways of Cape Breton, Nova Scotia with a total goal of <strong className="text-2xl">1,000,000lb</strong>  of trash!
        Our site and twitter feed will be updated weekly until the project is complete and we send our lucky supporters the final cash prize.
        <br></br>
        <br></br>

        Donations made on our site will be used to buy Deckhands, if any of those win a draw we will redraw until a Deckhand is selected thats not affiliated with our team or site.
          </h1>
          <div className="invisible lg:pr-24 lg:visible">
          <img 
                    src={RM}
                    className="h-96"
                    layout="fixed"
                    alt="alt"            
                    
                    />
    
                   </div>
          </div>
          
        </div>


      </div>
    </div>
  )
}