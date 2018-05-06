function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function loginTmpl(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {".\u002Fsrc\u002Flogin\u002Flogin.pug":"form.logintext\n  h4 Sign in\n  input.chat_login-nickname(type='text', placeholder='please,enter your name')\n  input.chat_login-btn(type='submit', value='login')\n"};
;pug_debug_line = 1;pug_debug_filename = ".\u002Fsrc\u002Flogin\u002Flogin.pug";
pug_html = pug_html + "\u003Cform class=\"logintext\"\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fsrc\u002Flogin\u002Flogin.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fsrc\u002Flogin\u002Flogin.pug";
pug_html = pug_html + "Sign in\u003C\u002Fh4\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\u002Fsrc\u002Flogin\u002Flogin.pug";
pug_html = pug_html + "\u003Cinput class=\"chat_login-nickname\" type=\"text\" placeholder=\"please,enter your name\"\u002F\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fsrc\u002Flogin\u002Flogin.pug";
pug_html = pug_html + "\u003Cinput class=\"chat_login-btn\" type=\"submit\" value=\"login\"\u002F\u003E\u003C\u002Fform\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}