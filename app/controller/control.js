Ext.define('kids.controller.control', {
    extend: 'Ext.app.Controller',

    config: {
        profile: Ext.os.deviceType.toLowerCase(),

        refs: {
            main: 'main',
            BlogHeader: 'blogheader',
            YouTubeStoryPlayer: 'YouTube3',
            YouTubePlayer: 'YouTube2',
            intro: 'intro',
            refreshButton: 'button[iconCls=refresh]'
        },

        control: {
/*            'loanslist': {
                select: 'onListTap'
            },
            'detail': {
                hideanimationstart: 'onDetailHideAnimationStart'
            },
            'searchfield': {
                action: 'onSearch'
            },
            'selectfield': {
                change: 'onSelectChange'
            },*/
            'button[iconCls=refresh]': {
                tap: 'onRefreshButtonTap'
            },

            'YouTubePlayer': {
                hide: 'onHide'

            },
            'YouTubePlayer':{
                show: 'onShow'
            },

            'YouTubeStoryPlayer':{
                hide: 'onStoryHide'
            },
            'YouTubeStoryPlayer':{
                show: 'onStoryShow'
            },
            'intro':{
                show: 'onIntroShow'
            },
            'contact':{
                show: 'onContactShow'
            }
        }
    },

//stop the youtube player when user navigates to Intro view
    onIntroShow: function(component, options) {
        //alert('show');
        Ext.getCmp('mainStoryContainer').setHtml("");
        Ext.getCmp('mainContainer').setHtml("");
    },
//stop the youtube player when user navigates to Contact view    
    onContactShow: function(component, options) {
        //alert('show');
        Ext.getCmp('mainStoryContainer').setHtml("");
        Ext.getCmp('mainContainer').setHtml("");
    },



    onHide: function(component, options) {
        //alert('hide');
        Ext.getCmp('mainContainer').setHtml("");
    },

    onShow: function(component, options) {
        //alert('show');
        Ext.getCmp('mainStoryContainer').setHtml("");
        Ext.getCmp('mainContainer').initialize(); 
    },

    onStoryHide: function(component, options) {
        Ext.getCmp('mainStoryContainer').setHtml("");
    },

    onStoryShow: function(component, options) {
        Ext.getCmp('mainContainer').setHtml("");
        Ext.getCmp('mainStoryContainer').initialize(); 
    },

    onRefreshButtonTap: function() {
        /*var store = Ext.getStore('Loans'),
            hasValue = Boolean(this.getSearchField().getValue().length);

        if (!hasValue) {
            store.clearFilter();
        }

        store.load();*/
        alert("This feature is not currently available in this version.");
    },

    onSelectChange: function(field) {
        if (!field.initialized) {
            return;
        }

        var config = {};
        config[field.getName()] = field.getValue();
        this.doFilter(config);
    },

    /**78
     * @private
     * Listener for the 'filter' event fired by the listView set up in the 'list' action. This simply
     * gets the form values that the user wants to filter on and tells the Store to filter using them.
     */
    doFilter: function(values) {
      /*  var store = Ext.getStore('Loans'),
            filters = [];

        Ext.iterate(values, function(field, value) {
            filters.push({
                property: field,
                value   : value
            });
        });

        store.clearFilter();
        store.filter(filters);
        store.load();*/
        //alert("From controller" + values.value);
        var langChoosen = "nothing";
        Ext.iterate(values, function (field, value){
        	alert(field + " " + value);
        	langChoosen = value;
        });
        
        console.log(langChoosen );
    }

});

