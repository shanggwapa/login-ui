export default function Home() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center font-sans selection:bg-white/30"
      style={{ 
        backgroundImage: `url('https://shop.beabadoobee.com/cdn/shop/files/BEA-000001-Store-LaunchMobile.png?v=1748979411&width=850')`,
        backgroundColor: '#69B8D0'
      }}
    >
      
      {/* --- SECTION 1: LOGIN/CREATE (Upper Part) --- */}
      <div className="w-full max-w-6xl pt-10 pb-20 px-4 flex flex-col items-center">
        {/* HEADER SECTION */}
        <div className="text-center mb-10 w-full flex flex-col items-center relative">
          <div className="absolute right-0 top-0 hidden md:flex space-x-4 text-white text-xl">
            <span>🔍</span> <span>👤</span> <span>🛒</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter drop-shadow-md mb-2" 
              style={{ WebkitTextStroke: '2px white', color: 'transparent' }}>
            beabadoobee
          </h1>
          <button className="text-white font-bold text-sm tracking-widest flex items-center hover:opacity-80 transition">
            MERCH <span className="ml-1 text-[10px]">▼</span>
          </button>
        </div>

        {/* MAIN CONTAINER */}
        <div className="w-full flex flex-col md:flex-row bg-transparent">
          {/* LEFT SIDE: SIGN IN */}
          <div className="flex-1 p-8 md:p-16 flex flex-col items-start">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight uppercase">
              Sign in to your<br />existing account
            </h2>
            <div className="w-full space-y-4">
              <input type="email" placeholder="EMAIL" className="w-full p-4 bg-transparent border border-white/60 text-white placeholder-[#5D6370] outline-none font-bold" />
              <div className="relative w-full">
                <input type="password" placeholder="PASSWORD" className="w-full p-4 bg-transparent border border-white/60 text-white placeholder-[#5D6370] outline-none font-bold" />
                <span className="absolute right-4 top-4 opacity-70 text-white">👁</span>
              </div>
            </div>
            <button className="text-white text-[11px] font-bold underline mt-4 tracking-wider">FORGOT YOUR PASSWORD?</button>
            <button className="mt-8 bg-[#8B1E1E] text-white px-10 py-3 rounded-full text-lg font-black shadow-lg">SIGN IN</button>
            <button className="mt-10 text-white text-sm font-bold flex items-center"><span className="mr-2">⟨</span> RETURN TO STORE</button>
          </div>

          {/* RIGHT SIDE: CREATE ACCOUNT */}
          <div className="flex-1 p-8 md:p-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight uppercase">Create Account</h2>
            <div className="bg-white p-5 mb-8 flex items-start shadow-xl">
              <span className="mr-3 mt-1">🔔</span>
              <p className="text-[16px] leading-tight font-bold text-black uppercase tracking-tight">
                By creating an account, you'll be able to move through the checkout process faster...
              </p>
            </div>
            <div className="w-full space-y-4">
              <input type="text" placeholder="FIRST NAME" className="w-full p-4 bg-transparent border border-white/60 text-white placeholder-[#5D6370] outline-none font-bold" />
              <input type="text" placeholder="LAST NAME" className="w-full p-4 bg-transparent border border-white/60 text-white placeholder-[#5D6370] outline-none font-bold" />
              <input type="email" placeholder="EMAIL" className="w-full p-4 bg-transparent border border-white/60 text-white placeholder-[#5D6370] outline-none font-bold" />
              <div className="relative w-full">
                <input type="password" placeholder="PASSWORD" className="w-full p-4 bg-transparent border border-white/60 text-white placeholder-[#5D6370] outline-none font-bold" />
                <span className="absolute right-4 top-4 opacity-70 text-white">👁</span>
              </div>
            </div>
            <div className="mt-4 space-y-1 text-[10px] text-white font-bold">
              <p>✕ PASSWORD MUST BE AT LEAST 8 CHARACTERS</p>
              <p>✕ PASSWORD MUST CONTAIN A NUMBER</p>
              <p>✕ PASSWORD MUST CONTAIN BOTH UPPER & LOWERCASE CHARACTERS</p>
            </div>
            <button className="mt-8 bg-[#8B1E1E] text-white px-10 py-3 rounded-full text-lg font-black shadow-lg">CREATE</button>
          </div>
        </div>
      </div>

      {/* --- SECTION 2: THE FOOTER (Dark Red Part) --- */}
      <footer className="w-full bg-[#8B1E1E] text-white py-16 px-6 md:px-12 mt-auto">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* 1. Transparent Star Logo */}
          <div className="flex justify-center md:justify-start">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Light_blue_star.svg/3840px-Light_blue_star.svg.png" 
              alt="star" 
              className="w-37 h-37" 
            />
          </div>

          {/* 2. Menu Links */}
          <div className="flex flex-col space-y-3 text-[12px] text-[#69B8D0] font-bold tracking-widest uppercase">
            <a href="#" className="hover:opacity-70">MERCH</a>
            <a href="#" className="hover:opacity-70">HELP & SUPPORT</a>
            <a href="#" className="hover:opacity-70">TERMS</a>
            <a href="#" className="hover:opacity-70">PRIVACY</a>
            <a href="#" className="hover:opacity-70">DO NOT SELL MY PERSONAL INFORMATION</a>
            <a href="#" className="hover:opacity-70">COOKIE CHOICES</a>
          </div>

          {/* 3. Spacer */}
          <div className="hidden md:block"></div>

          {/* 4. Newsletter Signup */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl text-[#69B8D0] font-black leading-tight uppercase tracking-tighter">
              SIGN UP FOR UPDATES FROM BEABADOOBEE
            </h3>
            <input 
              type="text" 
              placeholder="enter your email" 
              className="w-full p-3 bg-white text-black font-bold outline-none"
            />
            <select className="w-full p-3 bg-white text-black font-bold outline-none appearance-none">
              <option>United States</option>
            </select>
            <div className="flex items-start space-x-3 text-[10px] text-[#69B8D0]">
              <input type="checkbox" className="mt-1 w-4 h-4 accent-[#69B8D0]" />
              <label>
                Sign up to receive email updates and offers from:<br/>
                <span className="text-[#69B8D0] font-bold">beabadoobee</span>
              </label>
            </div>
            <button className="w-full bg-[#69B8D0] text white py-3  text-lg shadow-md hover:bg-white transition">
              SIGN UP NOW
            </button>
            <p className="text-[9px] text-[#69B8D0] leading-tight">
              emails will be sent by or on behalf of umg recordings services, inc. 2220 colorado avenue, santa monica, ca 90404 (310) 865-4000. You may withdraw your consent at any time. See privacy policy at http://privacy.umusic.com.
            </p>
          </div>
        </div>

        {/* Bottom Socials Bar */}
<div className="max-w-[1400px] mx-auto mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
  
  {/* Social Icons Left */}
  <div className="flex space-x-6 text-2xl justify-center md:justify-start">
    <span>facebook</span> <span>twitter</span> <span>instagram</span> <span>youtube</span>
  </div>

  {/* Text Content Right */}
  <div className="flex flex-col items-center md:items-end text-center md:text-right max-w-2xl">
    <p className="text-[10px] text-gray-300 uppercase leading-relaxed">
      IF YOU ARE USING A SCREEN READER AND ARE HAVING PROBLEMS USING THIS WEBSITE, 
      PLEASE CALL 866-682-4413 FOR ASSISTANCE.
    </p>
    <p className="text-[12px] font-bold mt-2">© 2026 BEABADOOBEE OFFICIAL STORE</p>
  </div>
</div>
      </footer>

      {/* Help Bubble */}
      <button className="fixed bottom-6 left-6 bg-[#2B6A94] text-white px-5 py-2 rounded-full flex items-center font-bold shadow-lg hover:bg-[#235678] transition">
        <span className="mr-2 text-lg">?</span> Help
      </button>
    </div>
  );
}