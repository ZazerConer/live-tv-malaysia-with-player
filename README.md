<br>

<div align="center"><strong>MALAYSIA LIVE TV CHANNELS WITH VIDEO PLAYER</strong></div>

<br>
<hr>

The **channel** URL is already available in the video player.

This video player will play directly for you and you don't need to find a video player to load the **channel** URL.

<br>

Check out the TV channel player below.

<hr>
<br>

**This TV channel has regional restrictions.**

**_(Viewers for those in Malaysia only)_**

<br>

### RTM

<br>

**TV1 : [Watch](https://zazerconer.github.io/live-tv-malaysia-with-player/channel/rtm/tv1/index.html)**

```url
https://zazerconer.github.io/live-tv-malaysia-with-player/channel/rtm/tv1/index.html
```

**TV2 : [Watch](https://zazerconer.github.io/live-tv-malaysia-with-player/channel/rtm/tv2/index.html)**

```url
https://zazerconer.github.io/live-tv-malaysia-with-player/channel/rtm/tv2/index.html
```

**TV6 : [Watch](https://zazerconer.github.io/live-tv-malaysia-with-player/channel/rtm/tv6/index.html)**

```url
https://zazerconer.github.io/live-tv-malaysia-with-player/channel/rtm/tv6/index.html
```

**TV Okey : [Watch](https://zazerconer.github.io/live-tv-malaysia-with-player/channel/rtm/tv-okey/index.html)**

```url
https://zazerconer.github.io/live-tv-malaysia-with-player/channel/rtm/tv-okey/index.html
```

**Berita RTM : [Watch](https://zazerconer.github.io/live-tv-malaysia-with-player/channel/rtm/berita-rtm/index.html)**

```url
https://zazerconer.github.io/live-tv-malaysia-with-player/channel/rtm/berita-rtm/index.html
```

**Sukan RTM : [Watch](https://zazerconer.github.io/live-tv-malaysia-with-player/channel/rtm/sukan-rtm/index.html)**

```url
https://zazerconer.github.io/live-tv-malaysia-with-player/channel/rtm/sukan-rtm/index.html
```

<br>

### Media Prima

<br>

**TV3 : [Watch](https://zazerconer.github.io/live-tv-malaysia-with-player/channel/media-prima/tv3/index.html)**

```url
https://zazerconer.github.io/live-tv-malaysia-with-player/channel/media-prima/tv3/index.html
```

**Didik TV : [Watch](https://zazerconer.github.io/live-tv-malaysia-with-player/channel/media-prima/didik-tv/index.html)**

```url
https://zazerconer.github.io/live-tv-malaysia-with-player/channel/media-prima/didik-tv/index.html
```

**8TV : [Watch](https://zazerconer.github.io/live-tv-malaysia-with-player/channel/media-prima/8tv/index.html)**

```url
https://zazerconer.github.io/live-tv-malaysia-with-player/channel/media-prima/8tv/index.html
```

**TV9 : [Watch](https://zazerconer.github.io/live-tv-malaysia-with-player/channel/media-prima/tv9/index.html)**

```url
https://zazerconer.github.io/live-tv-malaysia-with-player/channel/media-prima/tv9/index.html
```

<br>

### Unifi TV

<br>

**Sensasi : [Watch](https://zazerconer.github.io/live-tv-malaysia-with-player/channel/unifi-tv/sensasi/index.html)**

```url
https://zazerconer.github.io/live-tv-malaysia-with-player/channel/unifi-tv/sensasi/index.html
```

**Inspirasi : [Watch](https://zazerconer.github.io/live-tv-malaysia-with-player/channel/unifi-tv/inspirasi/index.html)**

```url
https://zazerconer.github.io/live-tv-malaysia-with-player/channel/unifi-tv/inspirasi/index.html
```

**Degub : [Watch](https://zazerconer.github.io/live-tv-malaysia-with-player/channel/unifi-tv/degub/index.html)**

```url
https://zazerconer.github.io/live-tv-malaysia-with-player/channel/unifi-tv/degub/index.html
```

**Dunia Sinema : [Watch](https://zazerconer.github.io/live-tv-malaysia-with-player/channel/unifi-tv/dunia-sinema/index.html)**

```url
https://zazerconer.github.io/live-tv-malaysia-with-player/channel/unifi-tv/dunia-sinema/index.html
```

**Unifi Sports 1 : [Watch](https://zazerconer.github.io/live-tv-malaysia-with-player/channel/unifi-tv/unifi-sports-1/index.html)**

```url
https://zazerconer.github.io/live-tv-malaysia-with-player/channel/unifi-tv/unifi-sports-1/index.html
```

<br>

### MyFreeView

<br>

**Awesome TV : [Watch](https://zazerconer.github.io/live-tv-malaysia-with-player/channel/myfreeview/awesome-tv/index.html)**

```url
https://zazerconer.github.io/live-tv-malaysia-with-player/channel/myfreeview/awesome-tv/index.html
```

**TVS : [Watch](https://zazerconer.github.io/live-tv-malaysia-with-player/channel/myfreeview/tvs/index.html)**

```url
https://zazerconer.github.io/live-tv-malaysia-with-player/channel/myfreeview/tvs/index.html
```

**TV AlHijrah : [Watch](https://zazerconer.github.io/live-tv-malaysia-with-player/channel/myfreeview/tv-alhijrah/index.html)**

```url
https://zazerconer.github.io/live-tv-malaysia-with-player/channel/myfreeview/tv-alhijrah/index.html
```

<br>

#### Watch all TV channels on : [LIVE TV MALAYSIA](https://zazerconer.github.io/live-tv-malaysia-with-player/tv-channel)

<br>
<hr>

This video player uses from **[ShakaPlayer](https://github.com/shaka-project/shaka-player)**

<hr>
<br>

### Embed Video Player

To embed a video player, the <code><iframe></code> embedder is not used, due to **media access** issues in blocked documents and does not allow the use of **_Shaka Player_** in <code><iframe></code>.

<hr>

**How to solve this problem?**

This method uses _JavaScript_ <code>load()</code>

Load the player **_URL_** into the `<div>` tag element.

- Example code below.

<br>

To make this easier, use **_JQuery_** to load the player.

```js
$(element).load("http://url");
```

<br>

#### There are 2 ways to load the player

<br>

**1. Load player in single page _(Autoload)_.**

```html
<div id="player"></div>
```

```js
$("#player").load("http://url");
```
<br>

- **Full Code**
<details><summary>Expand</summary>
  
<br>

```html
<!DOCTYPE html>
<html>
<head>
<title>Load player in single page</title>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>

</head>
<body>

  <!-- Load the video player -->
  <div id="load-player"></div>

<script>
 $(document).ready(function () {
   // Get the id in the <div> tag.
   const url = $("#load-player");

   // Load the url player.
   $(url).load("http://url");
  // It is recommended to create a single page to use this method.
 });
</script>

</body>
</html>
```
</details>

<br><br>

**2. Load player with ```<button>``` _(Manual load)_.**

```html
<div id="player"></div>  
  
<button>Load</button>
```

```js
$(document).ready(function () {
  const url = $("#player");

  $("button").on("click", function (event) {
    event.preventDefault();
    $(url).load("http://url");
  });
});
```
<br>
  
- **Full code**
<details><summary>Expand</summary>

<br>
  
_Play button with Close button + Style CSS_

<br>
  
```html
<!DOCTYPE html>
<html>
<head>
<title>Load player with button</title>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
  
<style>
#btn {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   color: #fff;
   font-size: xx-large;
   font-weight: 500;
   background: #1565c0;
   padding: 10px 18px;
   border: 0;
   outline: none;
   border-radius: 5px;
}
#btn:hover {
   opacity: 0.7;
}
#close {
   display: none;
   position: fixed;
   top: 5rem;
   right: 2rem;
   color: #fff;
   font-size: medium;
   font-weight: 500;
   background: #333;
   padding: 5px 10px;
   border: 0;
   outline: none;
   border-radius: 4px;
   z-index: 200;
}
</style>

</head>
<body>

  <!-- Load the video player -->
  <div id="load-player" style="display:none"></div>
  
  <!-- Play button -->
  <button id="btn">PLAY</button>
  
  <!-- Close button -->
  <button id="close">CLOSE</button>
  
<script>
  $(document).ready(function () {
   // Get the id in the <div> tag.
   const url = $("#load-player");

   // Hide the video first to prevent the video from
   // showing on the screen before the player loads.
   $("video").hide();

   // Click on the play button.
   $("#btn").on("click", function (event) {
      event.preventDefault();
      // Load the url player.
      $(url).load("http://url");
      $("#load-player").show();
      // Set the html/body overflow to hidden after the player is displayed.
      $("html,body").css("overflow", "hidden");
      // Show/hide elements.
      $("video").show();
      $("#btn").hide();
      // Show close button and play video after 1000ms (1s).
      setTimeout(function () {
         $("#close").show();
         $("video").trigger("play");
      }, 1000);
   });

   // Click the close button.
   $("#close").on("click", function () {
      // Reload the page to remove the url from (load player).
      // It will hide the player.
      $(window).attr("location", window.location.pathname);
   });
 });
</script>
  
</body>
</html>
```
<br>

**[DEMO](https://zazerconer.github.io/live-tv-malaysia-with-player/demo/load-player-with-button/index.html)**
</details>

<br><br>
