/**
 * LinksController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  search: function (req, res) {
      var data = req.allParams();
    var dataset = [
      {
        "name": "Yomaste Ladakh VR experience",
        "tag": "Ladakh,india,vr,360,animals",
        "url": "https://www.youtube.com/watch?v=V6sw_JlqO2w"
      }, {
        "name": " Reasons to Travel to Dubai - A 360° VR Experience",
        "tag": "Dubai,360,vr",
        "url": "https://www.youtube.com/watch?v=3-DmcL90Y_s"
      }, {
        "name": "Elephants in Ziro",
        "tag": "Ziro,elephants,vr,360,animals",
        "url": "https://www.youtube.com/watch?v=LJcz9t0vqvw&index=4&list=PLqyZah7czyURRTRjdkghzQ" +
            "oX9u3Q8mkN1"
      }, {
        "name": "Italy 360VR experience",
        "tag": "italy,vr,360",
        "url": "https://www.youtube.com/watch?v=i0qhK1Koz0U&list=PLqyZah7czyURRTRjdkghzQoX9u3Q8m" +
            "kN1&index=5"
      }
    ];
    console.log(data.name)
    var i = null;
    var newdata = [];
    dataset.map(newset =>{
        newset.name.split(' ').map(dataname =>{
            
            if (dataname.toLowerCase() == data.name.toLowerCase()) {
                console.log("11");
                newdata.push(newset);
              }
        })
    })
        

    res.json({data: newdata});

  }

};
