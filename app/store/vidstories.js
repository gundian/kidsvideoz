/*
    This store is for Telugu Stories
    We will get the data from json.php
*/
Ext.define('kids.store.vidstories',{
	extend: 'Ext.data.Store',
	
	requires: [ 'kids.model.vids' , 'Ext.data.proxy.JsonP'],

	config: {
		storeId: 'vids',
		autoLoad: false,
		model: 'kids.model.vids',

		proxy:{
			type: 'jsonp',
			//url: 'resources/jsonfile/jsonfile.json',
			//url: 'http://www.kidsvideoz.com/json/jsonfile.json',
			url: 'http://www.kidsvideoz.com/json/json.php',

			reader: {
				type: 'json',
				rootProperty: 'items.feed.Telugu.Stories'

				//rootProperty: 'sampleData'
			},

		},
	}
});