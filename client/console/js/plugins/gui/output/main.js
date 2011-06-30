/**
 * Socketbug - Web Socket Remote Debugging
 * 
 * Copyright (c) 2011 Manifest Interactive, LLC
 *
 * Licensed under the LGPL v3 licenses.
 *
 * @version v0.2.0 ( 6/29/2011 )
 *
 * @author <a href="http://www.socketbug.com">Website</a>
 * @author <a href="http://www.vimeo.com/user7532036/videos">Video Tutorials ( HD )</a>
 * @author <a href="http://www.twitter.com/socketbug_dev">Twitter</a>
 * @author <a href="http://github.com/manifestinteractive/socketbug">Source Code</a>
 * @author <a href="http://socketbug.userecho.com">Support & Feature Requests</a>
 */

(function ()
{
	var sb_plugin;

	/* Prepare Plugin */
    define(

		sb_plugin =
		{
			init: function ()
			{
	            /* Capture Click Event to Toggle Output Window */
				jQuery('#output_tab a').click(function()
				{
					jQuery('#output').slideToggle(); 
				});
				
				/* Capture Click Event to Clear Output Window */
				jQuery('#output a.clear').click(function()
				{
					jQuery('#output ul li').remove();
				});
	        }
	    }
	);
	
	/* Initialize Plugin */
	sb_plugin.init();
	
}());