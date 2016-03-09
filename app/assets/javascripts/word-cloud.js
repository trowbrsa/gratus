$( document ).ready(function() {

  var allgratitudes = gon.gratitudes
  console.log("here are the gratitude objects" + allgratitudes)

  var descString = "";
  allgratitudes.forEach(function(d) {
    descString += d.description + " ";
  });
  // var tags = [{"key": "Cat", "value": 26}, {"key": "fish", "value": 19}, {"key": "things", "value": 18}, {"key": "look", "value": 16}, {"key": "two", "value": 15}, {"key": "like", "value": 14}, {"key": "hat", "value": 14}, {"key": "Oh", "value": 13}, {"key": "mother", "value": 12}, {"key": "One", "value": 12}, {"key": "Now", "value": 12}, {"key": "Thing", "value": 12}, {"key": "house", "value": 10}, {"key": "fun", "value": 9}, {"key": "know", "value": 9}, {"key": "good", "value": 9}, {"key": "saw", "value": 9}, {"key": "bump", "value": 8}, {"key": "hold", "value": 7}, {"key": "fear", "value": 6}, {"key": "game", "value": 6}, {"key": "play", "value": 6}, {"key": "Sally", "value": 6}, {"key": "wet", "value": 6}, {"key": "little", "value": 6}, {"key": "box", "value": 6}, {"key": "came", "value": 6}, {"key": "away", "value": 6}, {"key": "sit", "value": 5}, {"key": "ran", "value": 5}, {"key": "big", "value": 5}, {"key": "something", "value": 5}, {"key": "put", "value": 5}, {"key": "fast", "value": 5}, {"key": "go", "value": 5}, {"key": "ball", "value": 5}, {"key": "pot", "value": 5}, {"key": "show", "value": 4}, {"key": "cup", "value": 4}, {"key": "get", "value": 4}, {"key": "cake", "value": 4}, {"key": "pick", "value": 4}, {"key": "went", "value": 4}, {"key": "toy", "value": 4}, {"key": "ship", "value": 4}, {"key": "net", "value": 4}, {"key": "tell", "value": 4}, {"key": "fan", "value": 4}, {"key": "wish", "value": 4}, {"key": "day", "value": 4}, {"key": "new", "value": 4}, {"key": "tricks", "value": 4}, {"key": "way", "value": 4}, {"key": "sat", "value": 4}, {"key": "books", "value": 3}, {"key": "hook", "value": 3}, {"key": "mess", "value": 3}, {"key": "kites", "value": 3}, {"key": "rake", "value": 3}, {"key": "red", "value": 3}, {"key": "shame", "value": 3}, {"key": "bit", "value": 3}, {"key": "hands", "value": 3}, {"key": "gown", "value": 3}, {"key": "call", "value": 3}, {"key": "cold", "value": 3}, {"key": "fall", "value": 3}, {"key": "milk", "value": 3}, {"key": "shook", "value": 3}, {"key": "tame", "value": 2}, {"key": "deep", "value": 2}, {"key": "Sank", "value": 2}, {"key": "head", "value": 2}, {"key": "back", "value": 2}, {"key": "fell", "value": 2}, {"key": "hop", "value": 2}, {"key": "shut", "value": 2}, {"key": "dish", "value": 2}, {"key": "trick", "value": 2}, {"key": "take", "value": 2}, {"key": "tip", "value": 2}, {"key": "top", "value": 2}, {"key": "see", "value": 2}, {"key": "let", "value": 2}, {"key": "shake", "value": 2}, {"key": "bad", "value": 2}, {"key": "another", "value": 2}, {"key": "come", "value": 2}, {"key": "fly", "value": 2}, {"key": "want", "value": 2}, {"key": "hall", "value": 2}, {"key": "wall", "value": 2}, {"key": "Thump", "value": 2}, {"key": "Make", "value": 2}, {"key": "lot", "value": 2}, {"key": "hear", "value": 2}, {"key": "find", "value": 2}, {"key": "lots", "value": 2}, {"key": "bet", "value": 2}, {"key": "dear", "value": 2}, {"key": "looked", "value": 2}, {"key": "gone", "value": 2}, {"key": "sun", "value": 2}, {"key": "asked", "value": 1}, {"key": "shine", "value": 1}, {"key": "mind", "value": 1}, {"key": "bite", "value": 1}, {"key": "step", "value": 1}, {"key": "mat", "value": 1}, {"key": "gave", "value": 1}, {"key": "pat", "value": 1}, {"key": "bent", "value": 1}, {"key": "funny", "value": 1}, {"key": "give", "value": 1}, {"key": "games", "value": 1}, {"key": "high", "value": 1}, {"key": "hit", "value": 1}, {"key": "run", "value": 1}, {"key": "stand", "value": 1}, {"key": "fox", "value": 1}, {"key": "man", "value": 1}, {"key": "string", "value": 1}, {"key": "kit", "value": 1}, {"key": "Mothers", "value": 1}, {"key": "tail", "value": 1}, {"key": "dots", "value": 1}, {"key": "pink", "value": 1}, {"key": "white", "value": 1}, {"key": "kite", "value": 1}, {"key": "bed", "value": 1}, {"key": "bumps", "value": 1}, {"key": "jumps", "value": 1}, {"key": "kicks", "value": 1}, {"key": "hops", "value": 1}, {"key": "thumps", "value": 1}, {"key": "kinds", "value": 1}, {"key": "book", "value": 1}, {"key": "home", "value": 1}, {"key": "wood", "value": 1}, {"key": "hand", "value": 1}, {"key": "near", "value": 1}, {"key": "Think", "value": 1}, {"key": "rid", "value": 1}, {"key": "made", "value": 1}, {"key": "jump", "value": 1}, {"key": "yet", "value": 1}, {"key": "PLOP", "value": 1}, {"key": "last", "value": 1}, {"key": "stop", "value": 1}, {"key": "pack", "value": 1}, {"key": "nothing", "value": 1}, {"key": "got", "value": 1}, {"key": "sad", "value": 1}, {"key": "kind", "value": 1}, {"key": "fishHe", "value": 1}, {"key": "sunny", "value": 1}, {"key": "Yes", "value": 1}, {"key": "bow", "value": 1}, {"key": "tall", "value": 1}, {"key": "always", "value": 1}, {"key": "playthings", "value": 1}, {"key": "picked", "value": 1}, {"key": "strings", "value": 1}, {"key": "Well", "value": 1}, {"key": "lit", "value": 1}];
  console.log("here are the descriptions" + descString);

  var descArray = descString.split(" ");
  console.log("here is the descString split" + descArray);
  // looks like this: ["stuff", "things", "soup", "eating", "pizza", "Ada!", ""]

  var descObjects = [];

  descArray.forEach(function(d) {
    console.log(d);
    // d is "stuff"
    // if (!isNumeric(d) && !matches(d,"AND","OF","TO","","&","ON","-          ","THE","IN","BE","FOR","A")) {
      var descObject = {};
      descObject.description = d;
      descObjects.push(descObject);
      // descObject looks like this: {description: "stuff"}
      // want it it look like {"key": "stuff", "value": 26}
      console.log('here is descobject' + descObject);
    });

    var wordCount = d3.nest()
      .key(function(d) { return d.description; })
      .rollup(function(v) { return + v.length; })
      .entries(descObjects);

      console.log('Here is the wordcount' + wordCount);

// what is this sort doing?
  wordCount.sort(function(a,b) {
    return b.values - a.values;
  });

  // var tags = wordCount;
  console.log("here is what tags looks like: " + tags)
//   console.log("here is the wordcount before:" + wordCount);
//
  var tags = [];

  wordCount.forEach(function(d) {
    console.log("Here is value d" + d);
    wordHash = {};
    wordHash.key = d.key;
    wordHash.value = parseInt(d.values);
    tags.push(wordHash);
    console.log("here is the wordcount" + wordCount);
  });
  console.log("here is tags1" + tags);
//
//   tags1 = tags1.slice(0,250);
//
//   console.log("here is tags1 sliced" + tags1)
// // });

// console.log("Here is the final descObject" + descObject)


  var fill = d3.scale.category20b();

  var w = window.innerWidth,
          h = window.innerHeight;

  var max,
          fontSize;

  var layout = d3.layout.cloud()
          .timeInterval(Infinity)
          .size([w, h])
          .fontSize(function(d) {
              return fontSize(+d.value);
          })
          .text(function(d) {
              return d.key;
          })
          .on("end", draw);

  var svg = d3.select("#vis").append("svg")
          .attr("width", w)
          .attr("height", h);

  var vis = svg.append("g").attr("transform", "translate(" + [w >> 1, h >> 1] + ")");
  update();

  window.onresize = function(event) {
      update();
  };

  function draw(data, bounds) {
      var w = window.innerWidth,
          h = window.innerHeight;

      svg.attr("width", w).attr("height", h);

      scale = bounds ? Math.min(
              w / Math.abs(bounds[1].x - w / 2),
              w / Math.abs(bounds[0].x - w / 2),
              h / Math.abs(bounds[1].y - h / 2),
              h / Math.abs(bounds[0].y - h / 2)) / 2 : 1;

      var text = vis.selectAll("text")
              .data(data, function(d) {
                  return d.text.toLowerCase();
              });
      text.transition()
              .duration(1000)
              .attr("transform", function(d) {
                  return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
              })
              .style("font-size", function(d) {
                  return d.size + "px";
              });
      text.enter().append("text")
              .attr("text-anchor", "middle")
              .attr("transform", function(d) {
                  return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
              })
              .style("font-size", function(d) {
                  return d.size + "px";
              })
              .style("opacity", 1e-6)
              .transition()
              .duration(1000)
              .style("opacity", 1);
      text.style("font-family", function(d) {
          return d.font;
      })
              .style("fill", function(d) {
                  return fill(d.text.toLowerCase());
              })
              .text(function(d) {
                  return d.text;
              });

      vis.transition().attr("transform", "translate(" + [w >> 1, h >> 1] + ")scale(" + scale + ")");
  }

  function update() {
      layout.font('impact').spiral('archimedean');
      fontSize = d3.scale['sqrt']().range([10, 100]);
      if (tags.length){
          fontSize.domain([+tags[tags.length - 1].value || 1, +tags[0].value]);
      }
      layout.stop().words(tags).start();
  }
});
