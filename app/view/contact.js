Ext.define('kids.view.contact', {
    extend: 'Ext.form.Panel',
    xtype: 'contact',
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
                //xtype: 'formpanel',
                //xtype: 'contactscr',
                //alias: 'widget.contactscr',
                //title: 'Contact Us',
                //url: 'http://apmornings.com/about-us/',
                //layout: 'vbox',

                items: [

                    {
                        xtype: 'fieldset',
                        title: 'Contact Us',
                        instructions: 'Please let us know your comments on our work.',

                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Name',
                                name: 'Name'
                            },
                            {
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
                            },

                        ]
                    },
                    {
                        xtype: 'button',
                        text: 'Send',
                        ui: 'confirm',

                        // The handler is called when the button is tapped
                        handler: function() {

                            // This looks up the items stack above, getting a reference to the first form it see
                            //var form = this.up('formpanel');
                            var form = this.up('formpanel');

                            // Sends an AJAX request with the form data to the url specified above (contact.php).
                            // The success callback is called if we get a non-error response from the server
                            form.submit({

                                success: function() {
                                    //handler: function() {
                                    // The callback function is run when the user taps the 'ok' button
                                    Ext.Msg.alert('Thank You', 'Your message has been received', function() {
                                        form.reset();
                                    });
                                }
                            });
                        }
                    },
                ],
            },
        ],
    },
    
});