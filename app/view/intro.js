Ext.define('kids.view.intro', {
    extend: 'Ext.form.Panel',
    xtype: 'intro',
    fullscreen: true,
    scrollable: true,
    requires: [
    'Ext.form.Panel',
    'Ext.form.FieldSet',
    'Ext.field.Email'
    ],

    config: {
        //scrollable: true,
    url: 'http://kidsvideoz.com/pavan/contactengine.php',
        items: [

            {

                items: [

                    {
                        xtype: 'fieldset',
                        title: 'KidsVideoz',
                        instructions: 'Version: 1 beta',

                        items: [
                            {
                                xtype: 'panel',
                                styleHtmlContent: true,
                                //label: 'Please follow us',
                                id: 'text',
                                html: [
                                    '<div class="header"><img src="http://www.kidsvideoz.com/wp-content/themes/twentyten/images/child_top_image.png" width="100px" height="100px"/><h3>About:</h3><h4>KidsVideoz will let you watch Hindi, Telugu, English Rhymes online. Your kids learn Nursery Rhymes in Hindi, Telugu, English and Lot of Moral Stories to help learning your Children. KidsVideoz now have the Animated Ramayana and Animated Mahabharata, you can watch online.</h4><h4>Please likeUs in <a href="https://www.facebook.com/KidsVideoz">facebook</a></h4></div>'
                                ],
                            }
                           /* {
                                xtype: 'emailfield',
                                label: 'Email',
                                name: 'Email'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Subject:',
                                name: 'Tel'
                            },
                            {
                                xtype: 'textareafield',
                                label: 'Message',
                                name: 'Message',
                                height: 90
                            },*/

                        ]
                    },
                ],
            },
        ],
    },
    
});