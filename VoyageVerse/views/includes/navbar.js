

let navbarHTML = `  <nav>
        <div class="logo">
            <img src="../../utils/final.png" alt="Logo">
            <h2 style='font-size:30px; font-weight:500'>Voyage<span id="Verse">Verse</span></h2>
        </div>

        <ul class="nav-links ">
            <li><a class="homeBtn"  href="../../views/destinations/home.html">Home</a></li>
            <li><a class="allLocationsBtn" href="../../views/destinations/allLocations.html">All Location</a></li>
            <li><a class="needs-login addNewLocationBtn" href="../../views/destinations/new.html">Add Location</a></li>
            <li><a class="dashboard" href="../../views/users/profile.html">Dashboard</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="authorization">
        </div>
        <div class="burger">
          <i class="fa-solid fa-bars"></i>
        </div>
        
    </nav>
    <div class="mobileNav" >
        <div class="">
          <a class="homeBtn"  href="../../views/destinations/home.html">Home</a>
        </div>
        <div>
          <a class="allLocationsBtn" href="../../views/destinations/allLocations.html">All Location</a>
        </div>
        <div>
          <a class="needs-login addNewLocationBtn" href="../../views/destinations/new.html">Add Location</a>
        </div>
        <div>
          <a class="dashboard" href="../../views/users/profile.html">Dashboard</a>
        </div>
        <div>
          <a href="#contact">Contact</a>
        </div>
        <div class="authorization2">
            
        </div>
    </div>`

export default navbarHTML;
