Ext.define('kids.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
//      Stores            
        'kids.store.vids',
        'kids.store.vidstories',
//      Model        
        'kids.model.vids',
//      Views
        'kids.view.YouTube2',
        'kids.view.YouTube3',
        'kids.view.BlogHeader',
        'kids.view.LikeUs',
        'kids.view.contact',
        'kids.view.intro',
//      Other Components used        
        'Ext.tab.Panel',    
//      Controller
        'kids.controller.control'  ,          
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype: 'blogheader',
                docked: 'top',
            },
            {

                title: 'Home',
                iconCls: 'home',
                xtype: 'intro',
                scrollable: true,
            },            
            {

                title: 'Rhymes',
                iconCls: 'team',
                xtype: 'YouTube2',
                scrollable: true,
            },
            {
                title: 'Stories',
                iconCls: 'team',
                xtype: 'YouTube3',
                scrollable: true,
            },
            {
                title: 'Contact Us',
                iconCls: 'info',
                xtype: 'contact'
            }
            /*{
                title: 'Facebook',
                iconCls: 'action',
                xtype: 'LikeUs'
            }*/
        ]
    }
});
