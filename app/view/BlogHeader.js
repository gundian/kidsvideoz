Ext.define('kids.view.BlogHeader', {
    extend: 'Ext.Container',
    xtype: 'blogheader',

    fullscreen: true,
    

    requires: [
        'Ext.field.Select',
        'Ext.field.Search',
        'Ext.Toolbar',
        'kids.view.LikeUs'        
    ],

    config: {
        items: [
            {
                xtype: 'toolbar',
                ui   : 'green',
                docked: 'top',
                items: [
                    { xtype: 'spacer', width: 50 },
                    { xtype: 'spacer' },
                    {
                        xtype: 'title',
                        title: '<img style="height: 50; width: 100px;" src="http://www.kidsvideoz.com/wp-content/themes/twentyten/images/logo.png" />'
                    },
                    { xtype: 'spacer' },
                    {
                        xtype: 'button',
                        iconCls: 'refresh'
                    }
                ]
            },
            /*{
                xtype: 'toolbar',
                docked: 'top',
                ui: 'blue',
                items:
                // (Ext.os.deviceType == 'Phone') ? [
                //xtype: 'searchfield', flex: 10} 
                //] : [
                    {
                    xtype: 'selectfield',
                    name: 'lang',
                    options: [
                        {text:'Telugu', value: 'telugu'},
                        {text:'Hindi', value: 'hindi'},
                        {text:'English', value: 'english'}
                    ]
                },
               // ]
            }*/
        ],

        layout: {
            type: 'vbox',
            align: 'stretch'
        }
    },

    onFieldChange : function(comp,value) {
        this.fireAction('filter', this.getValues(), this);
        console.log(this.getValues());
    }
});
