import {h, app} from 'hyperapp'

export default function RandomQuote({state, actions}) {
  return (
    <section id="RandomQuote" style={{
      backgroundImage: 'linear-gradient(135deg,rgba(0,0,0,.01) 0,#000 100%),url("https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Cooking-Wallpapers-HD-Free-Download-PIC-WPB0012203.jpg")'
  }}>
      <div class="container">
        <h1>"Good painting is like good cooking; it can be tasted, but not explained."</h1>
        <span class="author">- Maurice de Vlaminck-</span>
      </div>
    </section>
  )
}
