function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function chatheaderTmpl(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {".\u002Fsrc\u002Fviews\u002Fchatheader.pug":"header.chat__header\n  span.chat_title Chat\n  i.fa.fa-3x.fa-sign-in(aria-hidden='true')\n"};
;pug_debug_line = 1;pug_debug_filename = ".\u002Fsrc\u002Fviews\u002Fchatheader.pug";
pug_html = pug_html + "\u003Cheader class=\"chat__header\"\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fsrc\u002Fviews\u002Fchatheader.pug";
pug_html = pug_html + "\u003Cspan class=\"chat_title\"\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fsrc\u002Fviews\u002Fchatheader.pug";
pug_html = pug_html + "Chat\u003C\u002Fspan\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\u002Fsrc\u002Fviews\u002Fchatheader.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-3x fa-sign-in\" aria-hidden=\"true\"\u003E\u003C\u002Fi\u003E\u003C\u002Fheader\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}