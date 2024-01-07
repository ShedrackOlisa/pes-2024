// Function to update the date and time
    function updateDateTime() {
        const datetimeDisplay = document.getElementById('datetime-display');
        const now = new Date();

        // Format the date and time as desired
        const formattedDateTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

        // Update the content of the HTML element
        datetimeDisplay.textContent = formattedDateTime;
    }

    // Call the function to update immediately and then every second (1000 milliseconds)
    updateDateTime();
    setInterval(updateDateTime, 1000);
    
    
    
     function toggleMenu() {
      const menuItems = document.getElementById('menu-items');
      const cancelIcon = document.querySelector('.cancel-icon');
      const menuIconLines = document.querySelectorAll('.line');

      menuItems.classList.toggle('hidden');
      cancelIcon.classList.toggle('hidden');

      // Rotate the menu icon lines
      menuIconLines.forEach(line => {
        line.classList.toggle('rotate');
      });
    }





function copyLink() {
            const copyText = document.getElementById("websiteLink");
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            document.execCommand("copy");
            alert("Copied the link: " + copyText.value);
        }






                    //search
                    
   function search() {
            const input = document.getElementById('searchInput').value.toLowerCase();
            const results = document.getElementById('searchResults');
            results.innerHTML = '';

            if (input.length === 0) return;

            const contentArray = [
  '<td><a href="twitter-x.html"><img src="twitter-x.jpg"width="160px"height="100px" alt=""><br>Twitter X </a></td>',
    '<td><a href="discord.html"><img src="discord.jpg"width="160px" height="100px" alt=""><br>Discord </a></td>',
    
    
    
    
 
    '<td><a href="telegram-x.html"><img src="telegram-x.jpg"width="160px"height="100px" alt=""><br>Telegram X </a></td>',
    '<td><a href="pinterest.html"><img src="pinterest.jpg"width="160px" height="100px" alt=""><br> Pinterest</a></td>',

'<td><a href="pjsub.html"><img src="pjsub.jpg"width="160px"height="100px" alt=""><br>PJsub </a></td>',
    '<td><a href="onefootball.html"><img src="onefootball.jpg"width="160px" height="100px" alt=""><br>Onefootball </a></td>',
    
    
    
        
           

    '<td><a href="luck-patcher.html"><img src="luck-patcher.jpg"width="160px"height="100px" alt=""><br>Luck Patcher </a></td>',
    '<td><a href="moon.html"><img src="moon.jpg"width="160px" height="100px" alt=""><br>Moon VPN Browser </a></td>',
    
    
    
    

    '<td><a href="gcash.html"><img src="gcash.jpg"width="160px"height="100px" alt=""><br>Gcash </a></td>',
    '<td><a href="loklok.html"><img src="loklok.jpg"width="160px" height="100px" alt=""><br> Loklok</a></td>',      

 '<td><a href="gta-5-psp.html"><img src="gta-5-psp.jpg"width="160px"height="100px" alt=""><br>GTA 5 (PSP) </a></td>',
    '<td><a href="gta-san-psp.html"><img src="gta-san-psp.jpg"width="160px" height="100px" alt=""><br> GTA San Andreas (PSP)</a></td>',
    
    
    
    
     
    '<td><a href="gta-liberty-city-psp.html"><img src="gta-liberty-city-psp.jpg"width="160px"height="100px" alt=""><br>GTA Liberty City (PSP) </a></td>',
    '<td><a href="gta-vice-city-psp.html"><img src="gta-vice-city-psp.jpg"width="160px" height="100px" alt=""><br> GTA Vice City (PSP)</a></td>',
    
    
    
    
    '<td><a href="gta-chinatown-psp.html"><img src="gta-chinatown-psp.jpg"width="160px"height="100px" alt=""><br>GTA Chinatown war (PSP) </a></td>',
    '<td><a href="jump-force.html"><img src="jump-force.jpg"width="160px" height="100px" alt=""><br> Jump Force (PSP)</a></td>',
    
    
    
    
  
    '<td><a href="fifa-14-psp.html"><img src="fifa-14-psp.jpg"width="160px"height="100px" alt=""><br>FIFA 14 (PSP) </a></td>',
    '<td><a href="wipeout.html"><img src="wipeout.jpg"width="160px" height="100px" alt=""><br>Wipeout Pulse (PSP)</a></td>',  
    

 '<td><a href="iron-man-psp.html"><img src="iron-man-psp.jpg"width="160px"height="100px" alt=""><br>Iron Man (PSP) </a></td>',  
    
    
    
    
       '<td><a href="call-of-duty-psp.html"><img src="call-of-duty-psp.jpg"width="160px" height="100px" alt=""><br>Call Of Duty Road To <br> Victory (PSP)</a></td>',
    '<td><a href="spider-man-web-of-shadow.html"><img src="spider-man-web-of-shadow.jpg"width="160px"height="100px" alt=""><br>Spider Man web of <br>shadow(PSP) </a></td>',
    
    
    
     
 
    '<td><a href="avatar.html"><img src="avatar.jpg"width="160px"height="100px" alt=""><br>Avatar (PSP) </a></td>',
    '<td><a href="xiaolin-showdown.html"><img src="xiaolin-showdown.jpg"width="160px"height="100px" alt=""><br> Xiaolin showdown (PSP)</a></td>',
    
    
    

    '<td><a href="metal-slug-xx.html"><img src="metal-slug-xx.jpg"width="160px"height="100px" alt=""><br>Metal Slug XX (PSP) </a></td>',
    '<td><a href="ys-seven.html"><img src="ys-seven.jpg"width="160px"height="100px" alt=""><br>YS Seven (PSP) </a></td>',
    
    
    
    
 
    '<td><a href="the-simpsons.html"><img src="the-simpsons.jpg"width="160px"height="100px" alt=""><br>The Simpsons (PSP) </a></td>',
    '<td><a href="daxter.html"><img src="daxter.jpg"width="160px"height="100px" alt=""><br>Daxter (PSP) </a></td>', 

 '<td><a href="assassin-creed-identity.html"><img src="assassin-creed-identity.jpg"width="160px"height="100px" alt=""><br> Assassins Creed Identity</a></td>',

'<td><a href="splinter-cell.html"><img src="splinter-cell.jpg"width="160px" height="100px" alt=""><br> Splinter Cell Conviction HD</a></td>',

'<td><a href="amazing-spider-man-2.html"><img src="amazing-spider-man-2.jpg"width="160px"height="100px" alt=""><br> Amazing Spider Man 2</a></td>',
    '<td><a href="batman-the-dark-knight.html"><img src="batman-the-dark-knight.jpg"width="160px" height="100px" alt=""><br> Batman the dark Knight</a></td>',
    
    
    
    

    '<td><a href="warface.html"><img src="warface.jpg"width="160px"height="100px" alt=""><br>Warface </a></td>',
    '<td><a href="backstab.html"><img src="backstab.jpg"width="160px" height="100px" alt=""><br> Backstab</a></td>',
    
    
    
    
    

    '<td><a href="nba-2k19.html"><img src="nba-2k19.jpg"width="160px"height="100px" alt=""><br>NBA 2K19 </a></td>',
    '<td><a href="max-payne.html"><img src="max-payne.jpg"width="160px" height="100px" alt=""><br> Max Payne</a></td>',

'<td><a href="frontline-commando-d-day.html"><img src="frontline-commando-d-day.jpg"width="160px"height="100px" alt=""><br>Frontline Commando D-day </a></td>',
    '<td><a href="modern-combat-4.html"><img src="modern-combat-4.jpg"width="160px" height="100px" alt=""><br> Modern Combat 4</a></td>',

'<td><a href="gta-mzansi.html"><img src="gta-mzansi.jpg"width="160px"height="100px" alt=""><br> GTA Mzansi</a></td>',
    '<td><a href="frontline-commando-2.html"><img src="frontline-commando-2.jpg"width="160px"height="100px" alt=""><br>Frontline Commando 2 </a></td>',
       
       
       
       
    '<td><a href="amazing-spider-man.html"><img src="amazing-spider-man.jpg"width="160px"height="100px" alt=""><br> Amazing Spider Man</a></td>',
    '<td><a href="top-football-manager-2024.html"><img src="top-football-manager-2024.jpg"width="160px"height="100px" alt=""><br>Top Football Manger 2024 </a></td>',

 '<td><a href="tomb-raider.html"><img src="tomb-raider.jpg"width="160px"height="100px" alt=""><br>Tomb Raider (PSP) </a></td>',
    '<td><a href="spider-man-2.html"><img src="spider-man-2.jpg"width="160px" height="100px" alt=""><br>Spider Man 2 (PSP)</a></td>',
    
    
    
   
    '<td><a href="iron-man-2.html"><img src="iron-man-2.jpg"width="160px"height="100px" alt=""><br> Iron Man 2 (PSP)</a></td>',
    '<td><a href="x-men-2.html"><img src="x-men-2.jpg"width="160px" height="100px" alt=""><br>X-Men 2 (PSP)</a></td>',
    
    
    
    
    '<td><a href="pro-evolution.html"><img src="pro-evolution.jpg"width="160px"height="100px" alt=""><br> Pro Evolution (PSP)</a></td>',
    '<td><a href="winning-eleven.html"><img src="winning-eleven.jpg"width="160px" height="100px" alt=""><br>Winning Eleven (PSP)</a></td>',
    
    
    
    
    
    
    '<td><a href="spectral-soul.html"><img src="spectral-soul.jpg"width="160px"height="100px" alt=""><br> Spectral Soul (PSP)</a></td>',
    '<td><a href="wwe-2008.html"><img src="wwe-2008.jpg"width="160px" height="100px" alt=""><br>WWE VS Raw 2008 (PSP)</a></td>',
    
    
    
    
    
    
    
    '<td><a href="sonic-rivals.html"><img src="sonic-rivals.jpg"width="160px"height="100px" alt=""><br>Sonic Rivals (PSP) </a></td>',
    '<td><a href="hot-shots-golf.html"><img src="hot-shots-golf.jpg"width="160px" height="100px" alt=""><br>Hot Shots Golf (PSP)</a></td>',

'<td><a href="army-of-two.html"><img src="army-of-two.jpg"width="160px"height="100px" alt=""><br>Army Of Two (PSP) </a></td>',
    '<td><a href="pursuit-force-extreme.html"><img src="pursuit-force-extreme.jpg"width="160px" height="100px" alt=""><br> Pursuit Force Extreme (PSP)</a></td>',
    
    
    
    
    
 
    '<td><a href="gripshift.html"><img src="gripshift.jpg"width="160px"height="100px" alt=""><br>Gripshift (PSP) </a></td>',
    '<td><a href="fifa-street-2.html"><img src="fifa-street-2.jpg"width="160px" height="100px" alt=""><br>Fifa Street 2 (PSP)</a></td>',
    
    
    
    
       

    '<td><a href="ghosts-goblins.html"><img src="ghosts-goblins.jpg"width="160px"height="100px" alt=""><br> Ghost Goblins (PSP)</a></td>',
    '<td><a href="lord-of-the-rings.html"><img src="lord-of-the-rings.jpg"width="160px" height="100px" alt=""><br>Lord Of The Rings (PSP)</a></td>',
    
    
    
    
    
 
    '<td><a href="tactics-ogre.html"><img src="tactics-ogre.jpg"width="160px"height="100px" alt=""><br>Tactics Ogre (PSP)</a></td>',
    '<td><a href="dante.html"><img src="dante.jpg"width="160px" height="100px" alt=""><br>Dante Inferno (PSP)</a></td>',
    
    
    
    
    
    
 
    '<td><a href="disgaea.html"><img src="disgaea.jpg"width="160px"height="100px" alt=""><br>Disgaea (PSP)</a></td>',
    '<td><a href="lumines.html"><img src="lumines.jpg"width="160px" height="100px" alt=""><br> Lumines (PSP)</a></td>',     

 '<td><a href="w2k-22.html"><img src="w2k-22.jpg"width="160px"height="100px" alt=""><br>W2k 22 (PSP)</a></td>',
 
 '<td><a href="sniper-of-duty.html"><img src="sniper-of-duty.jpg"width="160px"height="100px" alt=""><br> Sniper Of Duty </a></td>',
    '<td><a href="spider-fighter-3.html"><img src="spider-fighter-3.jpg"width="160px"height="100px" alt=""><br> Spider Fighter 3</a></td>',

'<td><a href="xenowerk.html"><img src="xenowerk.jpg"width="160px"height="100px" alt=""><br> Xenowerk</a></td>',

  '<td><a href="major-gun.html"><img src="major-gun.jpg"width="160px"height="100px" alt=""><br>Major Gun 2</a></td>',
    '<td><a href="battle-of-warships.html"><img src="battle-of-warships.jpg"width="160px"height="100px" alt=""><br> Battle Of Warship</a></td>',
 
   '<td><a href="modern-combat-5.html"><img src="modern-combat-5.jpg"width="160px"height="100px" alt=""><br>Modern Combat 5</a></td>',
    '<td><a href="forward-assault.html"><img src="forward-assault.jpg"width="160px" height="100px" alt=""><br>Forward Assault</a></td>',
    
    
    
    
    '<td><a href="darkness-saga.html"><img src="darkness-saga.jpg"width="160px"height="100px" alt=""><br>Darkness Saga</a></td>',
    '<td><a href="dead-empire.html"><img src="dead-empire.jpg"width="160px"height="100px" alt=""><br> Dead Empire</a></td>',

'<td><a href="gta-san.html"><img src="gta-san.jpg"width="160px"height="100px" alt=""><br>GTA Sanadrease</a></td>',
    '<td><a href="gta-5.html"><img src="gta-5.jpg"width="160px" height="100px" alt=""><br>GTA V</a></td>',
    
    
    
    
    '<td><a href="gta-4.html"><img src="gta-4.jpg"width="160px"height="100px" alt=""><br>GTA Liberty Stories</a></td>',
    '<td><a href="gta-vice-city.html"><img src="gtav.jpg"width="160px"height="100px" alt=""><br>GTA Vice City</a></td>',
    
    
    
    '<td><a href="gta-3.html"><img src="gta-3.jpg"width="160px"height="100px" alt=""><br> GTA III</a></td>',
    '<td><a href="gta-chinatown-war.html"><img src="gta-chinatown-war.jpg"width="160px"height="100px" alt=""><br> GTA Chinatown War</a></td>',
    
    
    
    '<td><a href="gangstar-vegas.html"><img src="g-vegas.jpg"width="160px"height="100px" alt=""><br>Gangstar Vegas</a></td>',
    '<td><a href="city-of-crime.html"><img src="city-of-crime.jpg"width="160px"height="100px" alt=""><br> City Of Crime</a></td>',
    
    
    
    '<td><a href="mafia-city.html"><img src="mafia-city.jpg"width="160px"height="100px" alt=""><br>Mafia City</a></td>',
    '<td><a href="payback-2.html"><img src="payback-2.jpg"width="160px"height="100px" alt=""><br> Payback 2</a></td>',

'<td><a href="hero-hunters.html"><img src="hero-hunters.jpg"width="160px"height="100px" alt=""><br>Hero Hunters</a></td>',
    '<td><a href="spider-fighter-2.html"><img src="spider-fighter-2.jpg"width="160px" height="100px" alt=""><br>Spider Fighter 2</a></td>',
    
    
    
    
    '<td><a href="broken-dawn.html"><img src="broken-dawn.jpg"width="160px"height="100px" alt=""><br>Broken Dawn</a></td>',
    '<td><a href="marsaction.html"><img src="marsaction.jpg"width="160px"height="100px" alt=""><br> Marsaction</a></td>',
    
    
    
    '<td><a href="nexus-war.html"><img src="nexus-war.jpg"width="160px"height="100px" alt=""><br> Nexus War..</a></td>',
    '<td><a href="defense-legend-4.html"><img src="defense-legend-4.jpg"width="160px"height="100px" alt=""><br> Defense Legend 4</a></td>',
    
    
    
    '<td><a href="racing-xtreme-2.html"><img src="racing-xtreme-2.jpg"width="160px"height="100px" alt=""><br>Racing Xtreme 2</a></td>',
    '<td><a href="endless-nightmare-3.html"><img src="endless-nightmare-3.jpg"width="160px"height="100px" alt=""><br> Endless Nightmare 3</a></td>',
    
    
    
    '<td><a href="roblox.html"><img src="roblox.jpg"width="160px"height="100px" alt=""><br>Roblox</a></td>',
    '<td><a href="art-of-war-3.html"><img src="art-of-war-3.jpg"width="160px"height="100px" alt=""><br> Art Of War 3</a></td>',


 '<td><a href="age-of-origins.html"><img src="age-of-origins.jpg"width="160px"height="100px" alt=""><br>Age Of Origins</a></td>',
    '<td><a href="the-walking-dead.html"><img src="the-walking-dead.jpg"width="160px" height="100px" alt=""><br>The Waking Dead</a></td>',
    
    
    
    
    '<td><a href="dead-trigger-2.html"><img src="dead-trigger-2.jpg"width="160px"height="100px" alt=""><br>Dead Trigger 2</a></td>',
    '<td><a href="into-the-dead-2.html"><img src="into-the-dead-2.jpg"width="160px"height="100px" alt=""><br>Into The Dead 2</a></td>',
    
    
    
    '<td><a href="cover-fire.html"><img src="cover-fire.jpg"width="160px"height="100px" alt=""><br> Cover Fire </a></td>',
    '<td><a href="critical-ops.html"><img src="critical-ops.jpg"width="160px"height="100px" alt=""><br> Critical Ops Multiplayer FPS</a></td>',
    
    
    
    '<td><a href="guns-of-glory.html"><img src="guns-of-glory.jpg"width="160px"height="100px" alt=""><br>Guns Of Glory Lost Island</a></td>',
    '<td><a href="last-shelter.html"><img src="last-shelter.jpg"width="160px"height="100px" alt=""><br> Last Shelter Survival</a></td>',
    
    
    
    '<td><a href="injustice-gods-among-us.html"><img src="injustice-gods-among-us.jpg"width="160px"height="100px" alt=""><br>Injustice Gods Among Us</a></td>',
    '<td><a href="viking-rise.html"><img src="viking-rise.jpg"width="160px"height="100px" alt=""><br> Viking Rise</a></td>',    
 
  '<td><a href="riptide-gp2.html"><img src="riptide-gp2.jpg"width="160px"height="100px" alt=""><br>Riptide GP2</a></td>',
    '<td><a href="need-for-speed-no-limits.html"><img src="need-for-speed-no-limits.jpg"width="160px" height="100px" alt=""><br>Need For Speed...</a></td>',
    
    
    
    
    '<td><a href="carx-highway.html"><img src="carx-highway.jpg"width="160px"height="100px" alt=""><br>CarX Highway</a></td>',
    '<td><a href="csr-racing-2.html"><img src="csr-racing-2.jpg"width="160px"height="100px" alt=""><br> CSR Racing 2</a></td>',
    
    
    
    '<td><a href="csr-classics.html"><img src="csr-classics.jpg"width="160px"height="100px" alt=""><br> CSR Classic</a></td>',
    '<td><a href="jdm-racing.html"><img src="jdm-racing.jpg"width="160px"height="100px" alt=""><br> JDM Racing Drag....</a></td>',
    
    
    
    '<td><a href="hot-slide.html"><img src="hot-slide.jpg"width="160px"height="100px" alt=""><br>Hot Slide</a></td>',
    '<td><a href="horizon-chase.html"><img src="horizon-chase.jpg"width="160px"height="100px" alt=""><br> Horizon Chase</a></td>',
    
    
    
    '<td><a href="top-speed.html"><img src="top-speed.jpg"width="160px"height="100px" alt=""><br>Top Speed Drag...</a></td>',
    '<td><a href="torque-burnout.html"><img src="torque-burnout.jpg"width="160px"height="100px" alt=""><br> Torque Burnout</a></td>',
 
 '<td><a href="chief-almighty.html"><img src="chief-almighty.jpg"width="160px"height="100px" alt=""><br>Chief Almighty</a></td>',
    '<td><a href="ninja-raiden.html"><img src="ninja-raiden.jpg"width="160px" height="100px" alt=""><br>Ninja Raiden Revenge</a></td>',
    
    
    
    
    '<td><a href="world-of-kings.html"><img src="world-of-kings.jpg"width="160px"height="100px" alt=""><br>World Of Kings</a></td>',
    '<td><a href="ronin.html"><img src="ronin.jpg"width="160px"height="100px" alt=""><br> Ronin The Last Samurai</a></td>',
    
    
    
    '<td><a href="kritika.html"><img src="kritika.jpg"width="160px"height="100px" alt=""><br> Kritika </a></td>',
    '<td><a href="shadow-of-death.html"><img src="shadow-of-death.jpg"width="160px"height="100px" alt=""><br> Shadow Of Death</a></td>',
    
    
    
    '<td><a href="awaken.html"><img src="awaken.jpg"width="160px"height="100px" alt=""><br>Awaken Chaos Era</a></td>',
    '<td><a href="among-gods.html"><img src="among-gods.jpg"width="160px"height="100px" alt=""><br> Among Gods</a></td>',
    
    
    
    '<td><a href="frost.html"><img src="frost.jpg"width="160px"height="100px" alt=""><br>Frost & Flame</a></td>',
    '<td><a href="shadow-slayer.html"><img src="shadow-slayer.jpg"width="160px"height="100px" alt=""><br> Shadow Slayer</a></td>',

'<td><a href="ppsspp-gold-apk.html"><img src="psp-gold.jpg"width="160px"height="100px" alt=""><br>PPSSPP Gold Apk</a></td>',
    '<td><a href="zarchiver.html"><img src="zarchiver.jpg"width="160px"height="100px" alt=""><br>Zarchiver Pro Apk</a></td>',

 '<td><a href="call-of-duty-warzone-mobile.html"><img src="warzone.jpg"width="160px"height="100px" alt=""><br>Call Of Duty Warzone<br> Mobile</a></td>',
    
    '<td><a href="unkilled.html"><img src="unkilled.jpg"width="160px"height="100px" alt=""><br>UNKILLED - FPS Zombie<br> Games</a></td>',
        
        
        
        
        
  
    '<td><a href="area-f2.html"><img src="area.jpg"width="160px"height="100px" alt=""><br>Area F2 </a></td>',
    
    '<td><a href="left-to-survive.html"><img src="left-to-survive.jpg"width="160px" height="100px" alt=""><br>Left To Survive</a></td>',
    
    
    

    
    
    
    '<td><a href="masked-special-forces.html"><img src="masked.jpg"width="160px"height="100px" alt=""><br>Masked Special Forces</a></td>',
    
    '<td><a href="battle-commando.html"><img src="battle-commando.jpg"width="160px"height="100px" alt=""><br>Bio Ops FPS 3D Commando</a></td>', 
 
 '<td><a href="gerena-free-fire.html"><img src="freefire.jpg"width="160px"height="100px" alt=""><br>Garena Free Fire 1.100.1 Apk <br>Obb Download For Android</a></td>',
    
    '<td><a href="call-of-duty-mobile.html"><img src="cd.jpg"width="160px" height="100px" alt=""><br>Call Of Duty Mobile 1.0.17<br> Highly Compressed</a></td>',
    
    
    
    
    '<td><a href="mortal-kombat-fighting-mod.html"><img src="Kombat1.jpg"width="160px"height="100px" alt=""><br>Mortal Kombat Fighting Game Mod 5.0.0 Apk Obb </a></td>',
    '<td><a href="need-for-speed-most-wanted.html"><img src="speed.jpg"width="160px"height="100px" alt=""><br>Need For Speed Most Wanted<br> Mod</a></td>',
    
    
    
    '<td><a href="subway.html"><img src="subway.jpg"width="160px"height="100px" alt=""><br> Subway Surfers Mod Apk For<br> Android </a></td>',
    '<td><a href="mini-militia-mod-apk–dooble-army-2.html"><img src="mini.jpg"width="160px"height="100px" alt=""><br> Mini Militia Mod Apk – Double Army 2</a></td>',
    
    
    
    '<td><a href="pubg-mobile-lite.html"><img src="pubg.jpg"width="160px"height="100px" alt=""><br>PUBG Mobile Lite</a></td>',
    
    '<td><a href="shadow-fight-2.html"><img src="shadow.jpg"width="160px"height="100px" alt=""><br> Shadow Fight 2</a></td>',
    
    
    
    '<td><a href="modern-combat-3.html"><img src="modern.jpg"width="160px"height="100px" alt=""><br>Modern Combat 3</a></td>',
    
    '<td><a href="gta-vice-city.html"><img src="gtav.jpg"width="160px"height="100px" alt=""><br> GTA Vice City</a></td>',
 
  '<td><a href="fifa-2024-mod-fifa-16-apk-obb-data.html"><img src="done.jpg"width="160px"height="100px" alt=""><br>Fifa 16 Mod 24 Apk + OBB +<br> Data Offline </a></td>',
    
    '<td><a href="pes-2024-ppsspp-psp-iso.html"><img src="psp1.jpg"width="160px"height="100px" alt=""><br>PES 2024 PPSSPP – PSP<br> Iso PS5 (eFootball)</a></td>',
        
        
        
        
        
  
    '<td><a href="fifa-2024-mod-fifa-14-apk-obb-data.html"><img src="six.jpg"width="160px"height="100px" alt=""><br>FIFA 2024 Mod FIFA 14<br> APK+OBB+DATA </a></td>',
    '<td><a href="dream-league-soccer-2024-apk-obb-data.html"><img src="dl1.jpg"width="160px" height="100px" alt=""><br>Dream League Soccer 2024 <br>Mod Menu Apk Obb</a></td>',
    
    
    

    
    
    
    '<td><a href="first-touch-soccer-fts-2024-apk-obb-data.html"><img src="fts.jpg"width="160px"height="100px" alt=""><br>First Touch Soccer 2024 (FTS)<br> Mod Apk Obb Data </a></td>',
    '<td><a href="efootball-pes-2024-apk-obb.html"><img src="eb.jpg"width="160px"height="100px" alt=""><br>PES 2024 Apk Obb 8.0.0<br> Download (eFootball) Android</a></td>',
    
    
    
    
    
    '<td><a href="ea-sports-fc-mobile-24-soccer.html"><img src="fc-mobile.jpg"width="160px"height="100px" alt=""><br>EA sports fc mobile 24<br> soccer </a></td>',
    '<td><a href="pro-league-soccer-pls-2024.html"><img src="pls.jpg"width="160px"height="100px" alt=""><br>Pro League Soccer<br> 2024 Apk</a></td>',
 
     '<td><a href="sega-rally-revo.html"><img src="sega.jpg"width="160px"height="100px" alt=""><br>Sega Rally Revo (PSP)</a></td>',
    
    '<td><a href="ridge-racer.html"><img src="racer.jpg"width="160px" height="100px" alt=""><br>Ridge Racer (PSP)</a></td>',
    
    
    
    
    '<td><a href="street-supremacy.html"><img src="street.jpg"width="160px"height="100px" alt=""><br>Street Supremacy (PSP)</a></td>',
    
    '<td><a href="test-drive-unlimited.html"><img src="test-drive.jpg"width="160px"height="100px" alt=""><br>Test Drive Unlimited (PSP)</a></td>',
    
    
    
    '<td><a href="flatout-head-on.html"><img src="head-on.jpg"width="160px"height="100px" alt=""><br> Flatout Head On (PSP)</a></td>',
     
   '<td><a href="fast-and-furious.html"><img src="fast.jpg"width="160px"height="100px" alt=""><br>Fast And Furious (PSP)</a></td>',
    
    
    
    
    '<td><a href="motorstorm-arctic-edge.html"><img src="storm.jpg"width="160px"height="100px" alt=""><br>Motorstorm Arctic Edge (PSP)</a></td>',
    
    '<td><a href="burnout-legend.html"><img src="legend.jpg"width="160px"height="100px" alt=""><br> Burnout Legend (PSP)</a></td>',
    
    
    
    '<td><a href="gran-turismo.html"><img src="gran-turismo.jpg"width="160px"height="100px" alt=""><br> Gran Turismo (PSP)</a></td>',
    
    '<td><a href="moto-gp.html"><img src="moto-gp.jpg"width="160px"height="100px" alt=""><br> Moto GP (PSP)</a></td>', 
    
    '<td><a href="crisis-core-final-fantasy-vii.html"><img src="crisis-core.jpg"width="160px"height="100px" alt=""><br>Crisis Core Final<br> Fantasy VII (PSP)</a></td>',
    '<td><a href="kingdom-hearts-birth-by-sleep.html"><img src="kingdom-hearts.jpg"width="160px"height="100px" alt=""><br> Kingdom Hearts Birth<br> By Sleep (PSP)</a></td>',
    
    
    
    '<td><a href="final-fantasy-tactics.html"><img src="final-fantasy.jpg"width="160px"height="100px" alt=""><br>Final Fantasy Tactics (PSP)</a></td>',
    
    '<td><a href="ben-10-alien-force.html"><img src="ben-10-alien-force.jpg"width="160px"height="100px" alt=""><br> Ben 10 Alien Force (PSP)</a></td>',
 
  '<td><a href="soul-calibur-broken-destiny.html"><img src="soul-calibur.jpg"width="160px"height="100px" alt=""><br> Soul Calibur Broken<br> Destiny (PSP)</a></td>',
    '<td><a href="naruto-shippuden-ultimate-ninja-heroes.html"><img src="naruto-shippuden.jpg"width="160px"height="100px" alt=""><br> Naruto Shippuden Ultimate<br> Ninja Heroes (PSP)</a></td>',
 
 '<td><a href="mortal-kombat-unchained.html"><img src="mortal-kombat-unchained.jpg"width="160px"height="100px" alt=""><br>Mortal Kombat Unchained<br> (PSP)</a></td>',
    '<td><a href="tekken-dark-resurrection.html"><img src="tekken-dark-resurrection.jpg"width="160px"height="100px" alt=""><br>Tekken Dark Resurrection<br> (PSP)</a></td>',
 
  '<td><a href="x-men-origin.html"><img src="x-men-origin.jpg"width="160px"height="100px" alt=""><br>X Men Origin (PSP)</a></td>',
    
    '<td><a href="beowulf-the-game.html"><img src="beowulf.jpg"width="160px" height="100px" alt=""><br> Beowulf The Game (PSP)</a></td>',
 
 '<td><a href="pursuit-force.html"><img src="pursuit.jpg"width="160px"height="100px" alt=""><br>Pursuit Force (PSP)</a></td>',   
    
    '<td><a href="lord-of-arcana.html"><img src="lord.jpg"width="160px"height="100px" alt=""><br>Lord Of Arcana (PSP)</a></td></tr>',
     


 
    '<td><a href="spider-man3.html"><img src="spider.jpg"width="160px"height="100px" alt=""><br>Spider Man 3 (PSP)</a></td>',
    
    '<td><a href="justice-league.html"><img src="justice.jpg"width="160px" height="100px" alt=""><br>justice league heroes (PSP)</a></td>',


 '<td><a href="assassin.html"><img src="creed.jpg"width="160px"height="100px" alt=""><br> Assassin Creed <br>Bloodline (PSP)</a></td>',
  
    '<td><a href="god-of-war.html"><img src="godofwar.jpg"width="160px"height="100px" alt=""><br> God Of War Chains Of<br> Olympus (PSP)</a></td>',

'<td><a href="resistance.html"><img src="resistance.jpg"width="160px"height="100px" alt=""><br> Resistance Retribution (PSP)</a></td>',   
    
    '<td><a href="ghost-rider.html"><img src="ghost.jpg"width="160px"height="100px" alt=""><br> Ghost Rider (PSP)</a></td>',    
    
            
'<td><a href="hot-wheels-ultimate-racing.html"><img src="hot-wheel.jpg"width="160px"height="100px" alt=""><br> Hot Wheels Ultimate<br> Racing (PSP)</a></td>',   
    
    '<td><a href="takken-6.html"><img src="takken6.jpg"width="160px"height="100px" alt=""><br> Takken 6<br> (PSP)</a></td>',
            
            
              '<td><a href="god-of-war-ghost-of-spatar.html"><img src="wars.jpg"width="160px"height="100px" alt=""><br>God Of War Ghost Of<br> Spatar (PSP)</a></td>',
    '<td><a href="wwe-smackdown-vs-raw-2011.html"><img src="wwe-2011.jpg"width="160px" height="100px" alt=""><br>WWE Smackdown Vs Raw 2011 (PSP)</a></td>',
    
    
    
    
    '<td><a href="metal-gear-solid-peace-walker.html"><img src="metal.jpg"width="160px"height="100px" alt=""><br>Metal Gear Solid Peace Walker (PSP)</a></td>',
    '<td><a href="prince-of-persia-revelations.html"><img src="prince.jpg"width="160px"height="100px" alt=""><br>Prince Of Persia<br> Revelation (PSP)</a></td>',
    
    
       
    '<td><a href="king-kong.html"><img src="kong.jpg"width="160px"height="100px" alt=""><br>King Kong (PSP)</a></td>',
  
    '<td><a href="field-commander.html"><img src="commander.jpg"width="160px"height="100px" alt=""><br>Field Commander (PSP)</a></td>',
    
    
    
 '<td><a href="metal-gear-solid-portable-ops.html"><img src="portable.jpg"width="160px"height="100px" alt=""><br> Metal Gear Solid Portable<br> Ops (PSP)</a></td>',   
    
    '<td><a href="dissidia.html"><img src="disa.jpg"width="160px"height="100px" alt=""><br>Dissidia <br>(PSP)</a></td>',
    
    
    
    
    
 '<td><a href="pursuit-force.html"><img src="pursuit.jpg"width="160px"height="100px" alt=""><br>Pursuit Force (PSP)</a></td>',   
    
    '<td><a href="lord-of-arcana.html"><img src="lord.jpg"width="160px"height="100px" alt=""><br>Lord Of Arcana (PSP)</a></td></tr>',
     

   
    
                'Content 1: Olitechgames.com',
                'Content 2: FIFA16',
                'Content 3: Ghost Rider'
            ];

            contentArray.forEach((item) => {
                if (item.toLowerCase().includes(input)) {
                    const li = document.createElement('li');
                    li.innerHTML = item;
                    results.appendChild(li);
                }
            });
        }







function toggleSearch() {
      var searchBackground = document.getElementById('searchBackground');
      var searchInput = document.getElementById('searchInput');
      
      searchBackground.classList.toggle('hidden');
      
      if (!searchBackground.classList.contains('hidden')) {
        searchInput.focus(); // Automatically focus on the input field
      }
    }






  // Function to close the cookie consent popup
    function closeCookieConsent() {
      var cookieConsent = document.getElementById('cookieConsent');
      cookieConsent.style.display = 'none';
    }

    // Function to show the cookie consent popup after 30 seconds
    function showCookiePopup() {
      var cookieConsent = document.getElementById('cookieConsent');
      cookieConsent.style.display = 'block';
    }

    // Show the cookie consent popup after 30 seconds
    setTimeout(showCookiePopup, 10000); // 10 seconds
