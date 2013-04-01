Ext.define('kids.view.YouTube3', {
  //extend: 'Ext.Component',
  extend: 'Ext.Container',
  alias: 'widget.YouTubeStoryPlayer',
  xtype: 'YouTube3',

  requires: [
    'kids.store.vidstories',
  ],

  config: {
    id: 'mainStoryContainer',
    layout: 'fit',
    //fullscreen: true,
    height: '95%',
    width: '100%',
    scrollable: true,
    url: 'http://www.youtube.com/embed/',
    videoId: 'qsvpvqvApKo',
    vWidth: 420,
    vHeight: '315',
    styleHtmlContent: true,
    //style: 'background-color: #5E99CC;',
    aaa: //'1',
    'http://www.youtube.com/v/DWa4OJ4WMmU?version=3&autoplay=0&loop=1&playlist=pozXkNWOcPA',
    firstUrl: 'http://www.youtube.com/embed/qAnY-axfW90?version=3&autoplay=0&playlist=',
    secondUrl: '?version=3&autoplay=0&loop=1&playlist=',
  },
         
  initialize: function() 
  {

    var prod = Ext.create('kids.store.vidstories');

    var sesStore = Ext.getStore('vids'); 
    //console.log("No of recs: " + sesStore.getCount())    ;
    
    
    prod.load(function ( ){ 
      var loadedVideos ="";
      //console.log("Number of records in Store: " + prod.getCount());
      var data = [];
      prod.each(function (record, id){
        data.push(record.getData());
        //console.log("Video ID : " + record.get('vid_url'));
        loadedVideos = loadedVideos + ','+ record.get('vid_url');

      });

var containerHold = Ext.ComponentQuery.query('#mainStoryContainer')[0]; 
//c.setHtml('aaa');
//console.log("C.element-> " + c.element);
//console.log(loadedVideos);
    var out = Ext.String.format(
    [
      '<div class="container">',
      '<div class="vendor">',
      '<iframe  ',
      'width="{2}" height="{3}" src="{0}{1}"',
      //'theme=light&color=red autohide=1',
      'frameborder="0" allowfullscreen></iframe>',
      '</div>',
      '</div>',
      '<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>',
      '<script src="http://www.kidsvideoz.com/jquery.fitvids.js"></script>',
      '<script> $(".container").fitVids(); </script>'
    ].join(''),
    containerHold.getFirstUrl(),
    loadedVideos,
    containerHold.getWidth(),
    containerHold.getHeight()
    );
    //out = '<iframe width="560" height="315" src="http://www.youtube.com/embed/-gv9RicOHNQ" frameborder="0" allowfullscreen></iframe>';
containerHold.setHtml(out)   ;
//console.log(out);
      return data;
    });
    


      //console.log("No of recs: " + sesStore.getCount())    ;

    /*var out = Ext.String.format(
    [
      '<div align="center">',
      '<iframe class="youtube-player" type="text/html" ',
      ' width="{0}" height="{1}" src="{2}"',
      'frameborder="0" allowfullscreen></iframe>',
      '</div>'
    ].join(''),
    this.getVWidth(),
    this.getVHeight(),
    this.getAaa()
    );*/
    var out = "Please wait while loading videos..."
    out = '<img style="height: 95%; width: 100%;" src="http://donateforchildren.org/loading.gif" />';


    this.setHtml(out);
  
  }


});

