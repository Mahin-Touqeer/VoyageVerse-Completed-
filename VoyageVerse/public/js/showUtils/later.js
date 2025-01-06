let later = `<div class="col-md-10   review offset-lg-1">
        <hr>
        <div class="accordion" id="accordionExample">

  <div class="accordion-item airport-item"  style="display:none">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            NEAREST AIRPORT(S)
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        
      </div>
    </div>
  </div>
  <div class="accordion-item hotel-item" style="display:none">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        FIND YOUR PERFECT STAY  
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      </div>
    </div>
  </div>
</div>
<br >
        <div class="converterAndWeatherDiv"> 
            <div class="converter converterSpecific">
              <h5>Currency Converter</h5>
              <div class="input-section">
                  <input type="number" id="amount" placeholder="Enter amount" />
                  <img class="fromImg" src="https://flagsapi.com/IN/flat/64.png" style="width:64px">
                  <select name="from" id="fromCurrency">
                  </select>
                  <span><i class="fa-solid fa-arrow-right-arrow-left"></i></span>
                  <img class="toImg" src="https://flagsapi.com/IN/flat/64.png" style="width:64px">
                  <select name="to" id="toCurrency">
                  </select>
              </div>
              <button id="convertBtn">Convert</button>
              <div class="result" id="result"></div>
            </div>
            
            <div class="converter weather">
                  <span class="placeholder-glow">
                        <span class="placeholder col-12">
                        </span>
                  </span>
        
                  <div class="weather-app weatherImg">
    
                    <video  autoplay loop muted plays-inline class="background_clip">
                        <source id="weatherVideoSrc" src=""/>
                    </video>
                  </div>
                  
                 <div class="weather-info" id="weatherInfo">
                          <!-- Weather details will appear here -->
                    </div>
            </div>
        </div>
        <br>
        <h3>&nbsp;Explore in your language!</h3>
        <div class="translationBox">
        <div class="nav">
            <select name="" id="">
            </select>
            <i class="fa-solid fa-arrow-right-arrow-left" style="font-size: 1.4rem;color: rgb(93, 93, 93);"></i>
            <select name="" id="">
            </select>
        </div>

        <div class="textBox">
            <div class="fromDiv">
                <textarea maxlength="500" class="fromContent">

                </textarea>
            </div>
            <div class="toDiv">
                <textarea class="toContent" >

                </textarea>
            </div>
        </div>

        <div class="others">
        </div>
    </div>
    <br>
        <h3>&nbsp;Your Travel Map Companion</h3>
        <div id="map"></div>


        <br>
                  <h3>Let us know your experience</h3>
        <form class="reviewForm needs-validation" novalidate>

                  <div class="rating-css">
                    <input type="radio" id="star1" name="reviews" value="1">
                    <label for="star1"><i class="fa-solid fa-star"></i></label>
                    <input type="radio" id="star2" name="reviews" value="2">
                    <label for="star2"><i class="fa-solid fa-star"></i></label>
                    <input type="radio" id="star3" name="reviews" value="3">
                    <label for="star3"><i class="fa-solid fa-star"></i></label>
                    <input type="radio" id="star4" name="reviews" value="4">
                    <label for="star4"><i class="fa-solid fa-star"></i></label>
                    <input type="radio" id="star5" name="reviews" value="5" checked>
                    <label for="star5"><i class="fa-solid fa-star"></i></label>
                </div>
                <div class="mb-3">
                    <label for="image" class="form-label">&nbsp;Share your travel moments</label>
                    <input type="file" id="reviewImage" class="form-control" placeholder="select image" accept="image/*" multiple>
                </div>
                
                  <div class="mb-3 mt-3">  
                    <textarea id="comment" class="form-control" rows="3" cols="30" placeholder="Please add review" required></textarea>
                    <div class="invalid-feedback">
                        Please enter a short review
                    </div>
                  </div>
                  <button type="submit" class="reviewBtn btn btn-outline-dark mb-3">
                    submit
                  </button>
              </form>
             
              <div class="reviewDiv">
              </div>    
            </div>
            
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel"><i class="fa-solid fa-triangle-exclamation" style="font-size:2rem;color: #ff3d3d;"></i></h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        &nbsp;&nbsp;Are you sure you want to delete this location?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger deleteBtn">Delete</button>
      </div>
    </div>
  </div>
</div>`
export default later;
