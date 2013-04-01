Ext.define('kids.view.LikeUs', {
    extend: 'Ext.form.Panel',
    xtype: 'LikeUs',
    fullscreen: true,
    scrollable: true,    

    config: {
        title: "LikeUs",
        layout: 'fit',
        id: 'FBLike',
        styleHtmlContent: true,

        listeners: {
    
            show: function() {                
              //  initialize: function() {
                window.fbAsyncInit = function() {
                    FB.init({appId: '376808655750544', status: true, cookie: true,xfbml: true});
                };
                (function() {
                    var e = document.createElement('script');
                    e.type = 'text/javascript';
                    e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
                    e.async = true;
                    document.getElementById('fb-root').appendChild(e);
                }());
            }
        },
        items: [{
            xtype: 'container',
            html: '<p class="x-center">Please like us in Facebook</p> <p class="x-center"><div id="fb-login-button"><fb:like align="right" href="http://www.facebook.com/appname" layout="button_count"></fb:like></div><div id="fb-root"></div> </p>',            
            //html: '<div id="login"><p><button onClick="loginUser();">Login</button></p>  </div> <div id="logout"> <p><button  onClick="FB.logout();">Logout</button></p> </div>  <div id="fb-root"></div> <script>  function loginUser() {  FB.login(function(response) { }, {scope:"email"});   }  </script>', 
            //html: ' <div id="login">   <p><button onClick="loginUser();">Login</button></p> </div> <div id="logout">   <p><button  onClick="FB.logout();">Logout</button></p> </div> <script>   function loginUser() {         FB.login(function(response) { }, {scope:\'email\'});          } </script> <div id="fb-root"></div>',
        }
            ]
    }
});

