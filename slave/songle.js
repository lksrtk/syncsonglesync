self.onSongleAPIReady =
  function(Songle) {
    var player =
      new Songle.SyncPlayer({
        accessToken: "0000009a-Wh9Gam9", // Please edit your access token
        mediaElement: "#songle"
      });

      var player2 =
      new Songle.SyncPlayer({
        accessToken: "0000009a-tctdSbR", // Please edit your access token
        mediaElement: "#songle2"
      });

    player.addPlugin(new Songle.Plugin.Beat());
    player.addPlugin(new Songle.Plugin.Chord());
    player.addPlugin(new Songle.Plugin.Chorus());



  // IFrame API Playerを読み込む
  /*Sconst tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
 let ytplayer;
  function onYouTubePlayerAPIReady() {
    ytplayer = new YT.Player('#songle', {
      height: '360',
      width: '640',
    });
  }

  ytplayer.cueVideoById({videoId: "zweVJrnE1uY"});

    const media = new Songle.Media.YtVideo("https://www.youtube.com/watch?v=zweVJrnE1uY");
    player.useMedia(media);*/


    player.useMedia("https://www.youtube.com/watch?v=hxSg2Ioz3LM");
    player2.useMedia("https://www.youtube.com/watch?v=dUnma5RLuYk");

    player.on("beatPlay",
      function(ev) {
        var beatElement =
          document.querySelector(".beat");

        var beatInfo1Element =
          document.querySelector(".beat .info1");

        var beatInfo2Element =
          document.querySelector(".beat .info2");

        beatElement.className = "beat beat-" + ev.data.beat.position;
        beatInfo1Element.textContent = ev.data.beat.position;
        beatInfo2Element.textContent = ev.data.beat.count;
      });

    player.on("chordEnter",
      function(ev) {
        var chordNameElement =
          document.querySelector(".chord .name");

        chordNameElement.textContent = ev.data.chord.name;
      });

    player.on("chorusSectionEnter",
      function(ev) {
        document.body.style.backgroundColor = "#000000";
        document.body.style.color = "#f3f5f6";
      });

    player.on("chorusSectionLeave",
      function(ev) {
        document.body.style.backgroundColor = "#f3f5f6";
        document.body.style.color = "#000000";
      });

    var playButton =
      document.querySelector("button.play");

    var stopButton =
      document.querySelector("button.stop");

    playButton.addEventListener("click",
      function() {
        player.play();
        player2.play();
        player2.volume = 0;
      });

    stopButton.addEventListener("click",
      function() {
        player.stop();
        player2.stop();
     });

    setInterval(
      function() {
        if(player.isPlaying) {
          var timeElement =
            document.querySelector(".time");

          var second = parseInt(player.position / 1000 % 60);
          var minute = parseInt(player.position / 1000 / 60);

          timeElement.textContent =
            minute + ":" + (second < 10 ? ("0" + second) : second);
        }
      }, 1000);
  }