import {h, app} from 'hyperapp'

export default function OurStory({state, actions}) {
  return (
    <section id="OurStory">
      <div class="container">
        <div class="row" >
          <div class="col-md-6">
            <h5 class="comp-title">Our Story</h5>
            <h2>Cooking is the art of adjustment</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu gravida quam, nec ultricies magna. Phasellus suscipit mi eget dolor aliquam, et fermentum felis porta. Vestibulum dignissim lectus ut est pulvinar, in ullamcorper elit scelerisque. Ut porta eu magna in interdum. Nunc at tristique sapien.</p>
            <div class="quote">"The best steak in the city of Raleigh" - <strong>Thomas Eggsy</strong></div>
            <a href="#" class="reserve-btn">Reserve</a>
          </div>
          <div class="col-md-6">
            <div class="video-img">

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
