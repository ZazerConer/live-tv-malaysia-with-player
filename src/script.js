  ready(()=> {
    content(Body, `
       <div class="container-time">
         <span class="timeNow">12:00 AM</span><span class="timeNow">01:00 AM</span><span class="timeNow">02:00 AM</span><span class="timeNow">03:00 AM</span><span class="timeNow">04:00 AM</span><span class="timeNow">05:00 AM</span><span class="timeNow">06:00 AM</span><span class="timeNow">07:00 AM</span><span class="timeNow">08:00 AM</span><span class="timeNow">09:00 AM</span><span class="timeNow">10:00 AM</span><span class="timeNow">11:00 AM</span><span class="timeNow">12:00 PM</span><span class="timeNow">01:00 PM</span><span class="timeNow">02:00 PM</span><span class="timeNow">03:00 PM</span><span class="timeNow">04:00 PM</span><span class="timeNow">05:00 PM</span><span class="timeNow">06:00 PM</span><span class="timeNow">07:00 PM</span><span class="timeNow">08:00 PM</span><span class="timeNow">09:00 PM</span><span class="timeNow">10:00 PM</span><span class="timeNow">11:00 PM</span>
       </div>
       <div class="container-date"></div>
       <div class="container-content">
         <div class="container-player">
           <div class="player">
             <iframe width="100%" height="100%" frameborder="0" allow="fullscreen;autoplay;accelerometer;encrypted-media;gyroscope;picture-in-picture" referrerpolicy="no-referrer"></iframe>
           </div> 
         </div>
         <div class="container-list">
           <span id="active" target="/channel/rtm/tv1/index.html" name="TV1"></span>
           <span target="/channel/rtm/tv2/index.html" name="TV2"></span>
           <span target="/channel/rtm/tv6/index.html" name="TV6"></span>
           <span target="/channel/rtm/tv-okey/index.html" name="TV OKEY"></span>
           <span target="/channel/rtm/berita-rtm/index.html" name="BERITA RTM"></span>
           <span target="/channel/rtm/sukan-rtm/index.html" name="SUKAN RTM"></span>
           <span target="/channel/media-prima/tv3/index.html" name="TV3"></span>
           <span target="/channel/media-prima/didik-tv/index.html" name="DIDIK TV"></span>
           <span target="/channel/media-prima/8tv/index.html" name="8TV"></span>
           <span target="/channel/media-prima/tv9/index.html" name="TV9"></span>
           <span target="/channel/myfreeview/awani/index.html" name="AWANI"></span>
           <span target="/channel/myfreeview/tv-ikim/index.html" name="TV IKIM"></span>
           <span target="/channel/myfreeview/tvs/index.html" name="TVS"></span>
         </div>
       </div>
    `);

    const iframe = slt("iframe");
    const first = slt("#active");
    const playlist = ".container-list span";
    const timeNow = ".timeNow";
    const element = ".container-time .timeNow";
    
    attr(iframe, {src: "https://zazerconer.github.io/live-tv-malaysia-with-player/channel/rtm/tv1/index.html"});

    readyStart(iframe, ()=> {
      style(iframe, {visibility: "visible"});
    });
    
    style(first, {
      color: "#2979FF",
      background: "#0d0d0d"
    });

    each(playlist, list => {
      html(list, attr(list, "name"));
      click(list, (e)=> {
        e.preventDefault();
        each(playlist, rv => {
          removeAttr(rv, "id");
          style(rv, {
            color: "#f2f2f2",
            background: "#262626"
          });
        });
        fadeOut(iframe, 100);
        attr(iframe, {src: `https://zazerconer.github.io/live-tv-malaysia-with-player${attr(list, "target")}`});
        style(list, {
          color: "#7ccae9"
        });
        attr(list, {id: "active"});
        readyStart(iframe, ()=> {
          fadeIn(iframe, 100);
          timeOut(()=> {
            style("#active", {
              color: "#2979FF",
              background: "#0d0d0d"
            });
          }, 500);
        });
      });
    });

    each(timeNow, time => {
      var thisTime = html(time);
      var thisHour = thisTime.replace(thisTime.slice(2), "");
      var thisDay = thisTime.slice(6);
      event(()=> {
        setInt(()=> {
          var curTime = new Date().toLocaleTimeString("en-US", {hour:'2-digit', minute:'2-digit'});
          var curHour = curTime.replace(curTime.slice(2), "");
          var curDay = curTime.slice(6);
           if (match(thisDay, curDay)) {
             if (match(thisHour, curHour)) {
               each(element, elm => {
                 removeAttr(elm, "id");
                 style(elm, {
                   color: "#b3b3b3",
                   paddingLeft: "20px",
                   paddingRight: "20px",
                   background: "#323232"
                 });
                 var end = html(elm);
                 var hour = end.replace(end.slice(2), "");
                 var day = end.slice(6);
                 html(elm, `${hour}:00 ${day}`);
               });
               attr(time, {id: "now"});
               var now = slt("#now");
               style(now, {
                 color: "#7ccae9",
                 paddingLeft: "15%",
                 paddingRight: "15%",
                 background: "#404040"
               });
               html(now, curTime);
               scroll(now);
             }
             return this;
           }
         }, 1000);
      });
    });

    readyLoad(()=> {
       var curDate = new Date().toLocaleDateString("en-US", {weekday:'short', month:'short', day:'numeric'});
       var curUrl = window.location.href;
       status(curUrl, 
         (ok)=> {html(".container-date", `<span>${curDate}</span><span><span style="color:#90ee90;">&#x25cf;</span>&nbsp; Online</span>`)},
         (undefined)=> {html(".container-date", `<span>${curDate}</span><span><span style="color:#ff0000;">&#x25cf;</span>&nbsp; Offline</span>`)},
         (error)=> {html(".container-date", `<span>${curDate}</span><span><span style="color:#ff0000;">&#x25cf;</span>&nbsp; 404</span>`)}
       );
    });
  });
